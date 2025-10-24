import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchFlightsMutation } from "../store/flightApi";
import BannerImage from "../assets/Banner.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPlane } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from "./NavMenu";
import SidebarMenu from "./SidebarMenu";

const Banner = () => {
  const navigate = useNavigate();
  const [searchFlights, { isLoading }] = useSearchFlightsMutation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
    tripType: 'O', // O = One Way, R = Round Trip
    adults: 1,
    children: 0,
    infants: 0,
    cabin: 'Y', // Y = Economy, C = Business, F = First
    fareType: 'Regular',
  });

  const [errors, setErrors] = useState({});

  const navLinks = [
    { name: "home", link: "#" },
    { name: "about us", link: "#" },
    { name: "destination", link: "#" },
    { name: "contact us", link: "#" },
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle trip type change
  const handleTripTypeChange = (type) => {
    setFormData(prev => ({
      ...prev,
      tripType: type,
      // Clear return date if switching to one way
      returnDate: type === 'O' ? '' : prev.returnDate
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.from || formData.from.trim().length < 3) {
      newErrors.from = 'Please enter a valid departure city (3 letter code)';
    }
    if (!formData.to || formData.to.trim().length < 3) {
      newErrors.to = 'Please enter a valid arrival city (3 letter code)';
    }
    if (!formData.departureDate) {
      newErrors.departureDate = 'Please select a departure date';
    }
    if (formData.tripType === 'R' && !formData.returnDate) {
      newErrors.returnDate = 'Please select a return date';
    }
    
    // Check if departure date is in the future
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const depDate = new Date(formData.departureDate);
    if (depDate < today) {
      newErrors.departureDate = 'Departure date must be today or in the future';
    }

    // Check if return date is after departure date
    if (formData.tripType === 'R' && formData.returnDate) {
      const retDate = new Date(formData.returnDate);
      if (retDate < depDate) {
        newErrors.returnDate = 'Return date must be after departure date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSearch = async () => {
    if (!validateForm()) {
      return;
    }

    // Prepare API payload
    const payload = {
      Departure: formData.from.toUpperCase(),
      Arrival: formData.to.toUpperCase(),
      DepartureDate: new Date(formData.departureDate).toISOString(),
      ArrivalDate: formData.tripType === 'R' && formData.returnDate 
        ? new Date(formData.returnDate).toISOString() 
        : "0001-01-01T00:00:00",
      Cabin: formData.cabin,
      TripType: formData.tripType,
      PreferredAirline: null,
      PaxType: {
        Adult: parseInt(formData.adults),
        Child: parseInt(formData.children),
        Infant: parseInt(formData.infants)
      },
      Stop: {
        OneStop: false,
        TwoStop: false,
        NonStop: false
      },
      CustID: "CUST01010101",
      MultiCitySearches: null
    };

    try {
      const response = await searchFlights(payload).unwrap();
      
      // Navigate to results page with data
      navigate('/search-results', {
        state: {
          results: response,
          searchParams: payload,
          isLoading: false,
          error: null
        }
      });
    } catch (error) {
      console.error('Search failed:', error);
      // Navigate to results page with error
      navigate('/search-results', {
        state: {
          results: [],
          searchParams: payload,
          isLoading: false,
          error: error
        }
      });
    }
  };

  return (
    <section
      className="bg-cover bg-center flex flex-col px-6"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-[998] transition-opacity"
        ></div>
      )}

      <SidebarMenu
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        links={navLinks}
      />

      <nav className="z-10 py-6 flex items-center justify-between container mx-auto px-4 sm:px-6">
        <div className="font-roboto">
          <h2 className="text-white font-medium tracking-wide text-xl md:text-[32px] leading-tight">
            TRAVEL EXPERTS <br />
            <span className="font-normal flex justify-end text-sm md:text-lg">
              AND TOUR, INC.
            </span>
          </h2>
        </div>

        <NavMenu
          links={navLinks}
          wrapperClassName={
            "hidden lg:flex items-center gap-6 text-white border border-white rounded-full text-sm px-5 py-2 font-karla font-medium"
          }
          linkClassName={
            "uppercase px-5 py-2 hover:bg-white/20 rounded-full transition"
          }
        />

        <div>
          <RxHamburgerMenu
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden text-white text-4xl hover:cursor-pointer hover:opacity-70 transition"
          />
        </div>
      </nav>

      {/* Main Content */}
      <div className="z-10 text-white mt-20 flex items-center justify-between container mx-auto">
        <div>
          <div className="inline-block bg-white/10 rounded-full px-6 py-2 border border-white/20 mb-3">
            <p className="text-lg font-medium font-karla">
              Welcome to Amol Travel
            </p>
          </div>
          <p className="text-base md:text-3xl font-semibold tracking-wide my-2 font-messiri">
            TRAVEL EXPERTS AND TOUR INC
          </p>
          <h1 className="text-3xl md:text-[70px] font-semibold leading-tight font-messiri">
            Let's Discover The <br /> World Together.
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-white/50 rounded-full bg-white/20 hover:opacity-70 transition"
            >
              <Icon className="text-white" />
            </a>
          ))}
        </div>
      </div>

      {/* Booking Box */}
      <div className="z-10 my-10 bg-white/60 rounded-2xl p-8 shadow-lg text-black container mx-auto">
        <h3 className="text-[40px] font-semibold text-[#002B7F] mb-4 font-messiri">
          Where to go?
        </h3>

        {/* Radio buttons */}
        <div className="flex flex-wrap items-center gap-6 mb-4 font-medium text-base">
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="tripType" 
              checked={formData.tripType === 'O'}
              onChange={() => handleTripTypeChange('O')}
            /> One Way
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input 
              type="radio" 
              name="tripType"
              checked={formData.tripType === 'R'}
              onChange={() => handleTripTypeChange('R')}
            /> Round Trip
          </label>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 my-8 font-roboto font-bold text-base">
          <div className="flex flex-col gap-3">
            <label htmlFor="from">From</label>
            <input
              id="from"
              name="from"
              type="text"
              placeholder="e.g., DXB"
              value={formData.from}
              onChange={handleInputChange}
              maxLength="3"
              className={`p-2 border rounded-md bg-white focus:outline-none focus:border-[#002B7F] transition-colors duration-200 uppercase ${
                errors.from ? 'border-red-500' : 'border-white'
              }`}
            />
            {errors.from && <span className="text-red-500 text-xs font-normal">{errors.from}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="to">To</label>
            <input
              id="to"
              name="to"
              type="text"
              placeholder="e.g., BOM"
              value={formData.to}
              onChange={handleInputChange}
              maxLength="3"
              className={`p-2 border rounded-md bg-white focus:outline-none focus:border-[#002B7F] transition-colors duration-200 uppercase ${
                errors.to ? 'border-red-500' : 'border-white'
              }`}
            />
            {errors.to && <span className="text-red-500 text-xs font-normal">{errors.to}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="departureDate">Departure</label>
            <input
              id="departureDate"
              name="departureDate"
              type="date"
              value={formData.departureDate}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className={`p-2 border rounded-md bg-white focus:outline-none focus:border-[#002B7F] transition-colors duration-200 ${
                errors.departureDate ? 'border-red-500' : 'border-white'
              }`}
            />
            {errors.departureDate && <span className="text-red-500 text-xs font-normal">{errors.departureDate}</span>}
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="returnDate">Return</label>
            <input
              id="returnDate"
              name="returnDate"
              type="date"
              value={formData.returnDate}
              onChange={handleInputChange}
              disabled={formData.tripType === 'O'}
              min={formData.departureDate || new Date().toISOString().split('T')[0]}
              className={`p-2 border rounded-md bg-white focus:outline-none focus:border-[#002B7F] transition-colors duration-200 disabled:bg-gray-200 disabled:cursor-not-allowed ${
                errors.returnDate ? 'border-red-500' : 'border-white'
              }`}
            />
            {errors.returnDate && <span className="text-red-500 text-xs font-normal">{errors.returnDate}</span>}
          </div>

          <div className="flex flex-col gap-3 uppercase">
            <label htmlFor="cabin">Traveller & Class</label>
            <select
              id="cabin"
              name="cabin"
              value={formData.cabin}
              onChange={handleInputChange}
              className="p-2 border border-white rounded-md bg-white focus:outline-none focus:border-[#002B7F] transition-colors duration-200"
            >
              <option value="Y">Economy</option>
              <option value="C">Business</option>
              <option value="F">First Class</option>
            </select>
          </div>
        </div>

        {/* Passenger Count */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 font-roboto">
          <div className="flex flex-col gap-2">
            <label htmlFor="adults" className="font-bold">Adults (12+ years)</label>
            <select
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleInputChange}
              className="p-2 border border-white rounded-md bg-white focus:outline-none focus:border-[#002B7F]"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="children" className="font-bold">Children (2-11 years)</label>
            <select
              id="children"
              name="children"
              value={formData.children}
              onChange={handleInputChange}
              className="p-2 border border-white rounded-md bg-white focus:outline-none focus:border-[#002B7F]"
            >
              {[0, 1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="infants" className="font-bold">Infants (0-2 years)</label>
            <select
              id="infants"
              name="infants"
              value={formData.infants}
              onChange={handleInputChange}
              className="p-2 border border-white rounded-md bg-white focus:outline-none focus:border-[#002B7F]"
            >
              {[0, 1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="flex flex-col flex-wrap justify-center gap-2 my-6 text-base">
          <div className="font-bold">Select A Fare Type:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-medium">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="fareType"
                value="Regular"
                checked={formData.fareType === 'Regular'}
                onChange={handleInputChange}
              /> Regular
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="fareType"
                value="Student"
                checked={formData.fareType === 'Student'}
                onChange={handleInputChange}
              /> Student
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="fareType"
                value="Senior Citizen"
                checked={formData.fareType === 'Senior Citizen'}
                onChange={handleInputChange}
              /> Senior Citizen
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="radio" 
                name="fareType"
                value="Armed Forces"
                checked={formData.fareType === 'Armed Forces'}
                onChange={handleInputChange}
              /> Armed Forces
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center text-xs md:text-base font-normal font-roboto">
          <button 
            onClick={handleSearch}
            disabled={isLoading}
            className="bg-[#002B7F] text-white px-[50px] md:px-[71px] py-[14px] md:py-[22px] rounded-[50px] hover:opacity-90 hover:cursor-pointer transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Searching...</span>
              </>
            ) : (
              <>
                <span><FaPlane /></span>
                <span>Search Now</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
