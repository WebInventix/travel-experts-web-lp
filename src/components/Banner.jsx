import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchFlightsMutation } from "../store/flightApi";
import BannerImage from "../assets/Banner.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPlane } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from "./NavMenu";
import SidebarMenu from "./SidebarMenu";
import AirportSelector from "./AirportSelector";
import DatePicker from "./DatePicker";
import PassengerSelector from "./PassengerSelector";
import StampImg from "../assets/Stamp.png";

const Banner = () => {
  const navigate = useNavigate();
  const [searchFlights, { isLoading }] = useSearchFlightsMutation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    departureDate: "",
    returnDate: "",
    tripType: "O", // O = One Way, R = Round Trip
    adults: 1,
    children: 0,
    infants: 0,
    cabin: "Y", // Y = Economy, C = Business, F = First
    fareType: "Regular",
  });

  const [errors, setErrors] = useState({});

  const navLinks = [
    { name: "home", link: "#" },
    {
      name: "about us",
      link: "https://stagging-server786.com/demo-client/amoltravel/about-us/",
    },
    {
      name: "destination",
      link: "https://stagging-server786.com/demo-client/amoltravel/destination/",
      sublinks: [
        {
          name: "Africa",
          link: "https://stagging-server786.com/demo-client/amoltravel/africa/",
          sublinks: [
            {
              name: "benin",
              link: "https://stagging-server786.com/demo-client/amoltravel/benin/",
            },
            {
              name: "ghana",
              link: "https://stagging-server786.com/demo-client/amoltravel/ghana/",
            },
            {
              name: "lesotho",
              link: "https://stagging-server786.com/demo-client/amoltravel/lesotho/",
            },
            {
              name: "morocco",
              link: "https://stagging-server786.com/demo-client/amoltravel/morocco/",
            },
            {
              name: "togo",
              link: "https://stagging-server786.com/demo-client/amoltravel/togo/",
            },
          ],
        },
        {
          name: "Americas",
          link: "https://stagging-server786.com/demo-client/amoltravel/americas/",
          sublinks: [
            {
              name: "guatimala",
              link: "https://stagging-server786.com/demo-client/amoltravel/guatemala/",
            },
          ],
        },
        {
          name: "South Asia",
          link: "https://stagging-server786.com/demo-client/amoltravel/south-asia/",
          sublinks: [
            {
              name: "afghanistan",
              link: "https://stagging-server786.com/demo-client/amoltravel/afghanistan/",
            },
            {
              name: "bangladesh",
              link: "https://stagging-server786.com/demo-client/amoltravel/bangladesh/",
            },
            {
              name: "india",
              link: "https://stagging-server786.com/demo-client/amoltravel/india/",
            },
            {
              name: "nepal",
              link: "https://stagging-server786.com/demo-client/amoltravel/nepal/",
            },
            {
              name: "pakistan",
              link: "https://stagging-server786.com/demo-client/amoltravel/pakistan/",
            },
            {
              name: "sri lanka",
              link: "https://stagging-server786.com/demo-client/amoltravel/srilanka/",
            },
          ],
        },
        {
          name: "South East Asia",
          link: "https://stagging-server786.com/demo-client/amoltravel/south-east-asia/",
          sublinks: [
            {
              name: "cambodia",
              link: "https://stagging-server786.com/demo-client/amoltravel/cambodia/",
            },
            {
              name: "indonesia",
              link: "https://stagging-server786.com/demo-client/amoltravel/indonesia/",
            },
            {
              name: "myanmar",
              link: "https://stagging-server786.com/demo-client/amoltravel/myanmar/",
            },
            {
              name: "vietnam",
              link: "https://stagging-server786.com/demo-client/amoltravel/vietnam/",
            },
          ],
        },
        {
          name: "Europe",
          link: "https://stagging-server786.com/demo-client/amoltravel/europe/",
          sublinks: [
            {
              name: "albania",
              link: "https://stagging-server786.com/demo-client/amoltravel/albania/",
            },
            {
              name: "belgium",
              link: "https://stagging-server786.com/demo-client/amoltravel/belgium/",
            },
            {
              name: "france",
              link: "https://stagging-server786.com/demo-client/amoltravel/france/",
            },
            {
              name: "czech republic",
              link: "https://stagging-server786.com/demo-client/amoltravel/czech-republic/",
            },
            {
              name: "netherlands",
              link: "https://stagging-server786.com/demo-client/amoltravel/netherlands/",
            },
            {
              name: "poland",
              link: "https://stagging-server786.com/demo-client/amoltravel/poland/",
            },
          ],
        },
        {
          name: "Middle East",
          link: "https://stagging-server786.com/demo-client/amoltravel/middle-east/",
          sublinks: [
            {
              name: "iraq",
              link: "https://stagging-server786.com/demo-client/amoltravel/iraq/",
            },
            {
              name: "qatar",
              link: "https://stagging-server786.com/demo-client/amoltravel/qatar/",
            },
            {
              name: "uae",
              link: "https://stagging-server786.com/demo-client/amoltravel/uae/",
            },
          ],
        },
        {
          name: "Oceania",
          link: "https://stagging-server786.com/demo-client/amoltravel/oceania/",
          sublinks: [
            {
              name: "fiji",
              link: "https://stagging-server786.com/demo-client/amoltravel/fiji/",
            },
            {
              name: "tahiji",
              link: "https://stagging-server786.com/demo-client/amoltravel/tahiti/",
            },
          ],
        },
      ],
    },
    {
      name: "contact us",
      link: "https://stagging-server786.com/demo-client/amoltravel/contact-us/",
    },
  ];

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle trip type change
  const handleTripTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      tripType: type,
      // Clear return date if switching to one way
      returnDate: type === "O" ? "" : prev.returnDate,
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.from || formData.from.trim().length === 0) {
      newErrors.from = "Please select a departure airport";
    }
    if (!formData.to || formData.to.trim().length === 0) {
      newErrors.to = "Please select an arrival airport";
    }
    if (formData.from && formData.to && formData.from === formData.to) {
      newErrors.to = "Arrival airport must be different from departure";
    }
    if (!formData.departureDate) {
      newErrors.departureDate = "Please select a departure date";
    }
    if (formData.tripType === "R" && !formData.returnDate) {
      newErrors.returnDate = "Please select a return date";
    }

    // Check if departure date is in the future
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const depDate = new Date(formData.departureDate);
    if (depDate < today) {
      newErrors.departureDate = "Departure date must be today or in the future";
    }

    // Check if return date is after departure date
    if (formData.tripType === "R" && formData.returnDate) {
      const retDate = new Date(formData.returnDate);
      if (retDate < depDate) {
        newErrors.returnDate = "Return date must be after departure date";
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
      ArrivalDate:
        formData.tripType === "R" && formData.returnDate
          ? new Date(formData.returnDate).toISOString()
          : "0001-01-01T00:00:00",
      Cabin: formData.cabin,
      TripType: formData.tripType,
      PreferredAirline: null,
      PaxType: {
        Adult: parseInt(formData.adults),
        Child: parseInt(formData.children),
        Infant: parseInt(formData.infants),
      },
      Stop: {
        OneStop: false,
        TwoStop: false,
        NonStop: false,
      },
      CustID: "CUST01010101",
      MultiCitySearches: null,
    };

    try {
      const response = await searchFlights(payload).unwrap();

      // Navigate to results page with data
      navigate("/search-results", {
        state: {
          results: response,
          searchParams: payload,
          isLoading: false,
          error: null,
        },
      });
    } catch (error) {
      console.error("Search failed:", error);
      // Navigate to results page with error
      navigate("/search-results", {
        state: {
          results: [],
          searchParams: payload,
          isLoading: false,
          error: error,
        },
      });
    }
  };

  return (
    <section
      className="bg-cover bg-center flex flex-col px-6"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z[1]"></div>

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

      <nav className="z-[1000] py-6 flex items-center justify-between container mx-auto px-4 sm:px-6">
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
            "uppercase px-5 py-2 hover:bg-white hover:text-black rounded-full transition"
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

        <div>
          <img src={StampImg} alt="stamp image" className="w-100" />
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
              checked={formData.tripType === "O"}
              onChange={() => handleTripTypeChange("O")}
            />{" "}
            One Way
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="tripType"
              checked={formData.tripType === "R"}
              onChange={() => handleTripTypeChange("R")}
            />{" "}
            Round Trip
          </label>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 my-8 font-roboto font-bold text-base">
          <AirportSelector
            name="from"
            label="From"
            value={formData.from}
            onChange={handleInputChange}
            placeholder="Select departure city"
            error={errors.from}
          />

          <AirportSelector
            name="to"
            label="To"
            value={formData.to}
            onChange={handleInputChange}
            placeholder="Select arrival city"
            error={errors.to}
          />

          <DatePicker
            name="departureDate"
            label="Departure"
            value={formData.departureDate}
            onChange={handleInputChange}
            minDate={new Date().toISOString().split("T")[0]}
            error={errors.departureDate}
            placeholder="Select departure date"
          />

          <DatePicker
            name="returnDate"
            label="Return"
            value={formData.returnDate}
            onChange={handleInputChange}
            minDate={
              formData.departureDate || new Date().toISOString().split("T")[0]
            }
            disabled={formData.tripType === "O"}
            error={errors.returnDate}
            placeholder="Select return date"
          />

          <PassengerSelector
            adults={formData.adults}
            children={formData.children}
            infants={formData.infants}
            cabin={formData.cabin}
            onAdultsChange={handleInputChange}
            onChildrenChange={handleInputChange}
            onInfantsChange={handleInputChange}
            onCabinChange={handleInputChange}
          />
        </div>

        {/* Remove old passenger count section as it's now integrated */}

        {/* Radio Buttons */}
        <div className="flex flex-col flex-wrap justify-center gap-2 my-6 text-base">
          <div className="font-bold">Select A Fare Type:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-medium">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="fareType"
                value="Regular"
                checked={formData.fareType === "Regular"}
                onChange={handleInputChange}
              />{" "}
              Regular
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="fareType"
                value="Student"
                checked={formData.fareType === "Student"}
                onChange={handleInputChange}
              />{" "}
              Student
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="fareType"
                value="Senior Citizen"
                checked={formData.fareType === "Senior Citizen"}
                onChange={handleInputChange}
              />{" "}
              Senior Citizen
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="fareType"
                value="Armed Forces"
                checked={formData.fareType === "Armed Forces"}
                onChange={handleInputChange}
              />{" "}
              Armed Forces
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
                <span>
                  <FaPlane />
                </span>
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
