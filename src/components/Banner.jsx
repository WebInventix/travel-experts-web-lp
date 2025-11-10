import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearchFlightsMutation } from "../store/flightApi";
import BannerImage from "../assets/Banner.png";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const [formData, setFormData] = useState({
    from: "JFK",
    to: "LAX",
    departureDate: "",
    returnDate: "",
    tripType: "O",
    adults: 1,
    children: 0,
    infants: 0,
    cabin: "C",
    fareType: "Regular",
  });

  const [errors, setErrors] = useState({});

  const navLinks = [
    { name: "home", link: "#" },
    { name: "about us", link: "https://travel-experts.stagging-server786.com/page/about-us/" },
    {
      name: "destination",
      link: "https://travel-experts.stagging-server786.com/page/destination/",
      sublinks: [
        {
          name: "Africa",
          link: "https://travel-experts.stagging-server786.com/page/africa/",
          sublinks: [
            { name: "benin", link: "https://travel-experts.stagging-server786.com/page/benin/" },
            { name: "ghana", link: "https://travel-experts.stagging-server786.com/page/ghana/" },
            { name: "lesotho", link: "https://travel-experts.stagging-server786.com/page/lesotho/" },
            { name: "morocco", link: "https://travel-experts.stagging-server786.com/page/morocco/" },
            { name: "togo", link: "https://travel-experts.stagging-server786.com/page/togo/" },
          ],
        },
        {
          name: "Americas",
          link: "https://travel-experts.stagging-server786.com/page/americas/",
          sublinks: [{ name: "guatimala", link: "https://travel-experts.stagging-server786.com/page/guatemala/" }],
        },
        {
          name: "South Asia",
          link: "https://travel-experts.stagging-server786.com/page/south-asia/",
          sublinks: [
            { name: "afghanistan", link: "https://travel-experts.stagging-server786.com/page/afghanistan/" },
            { name: "bangladesh", link: "https://travel-experts.stagging-server786.com/page/bangladesh/" },
            { name: "india", link: "https://travel-experts.stagging-server786.com/page/india/" },
            { name: "nepal", link: "https://travel-experts.stagging-server786.com/page/nepal/" },
            { name: "pakistan", link: "https://travel-experts.stagging-server786.com/page/pakistan/" },
            { name: "sri lanka", link: "https://travel-experts.stagging-server786.com/page/srilanka/" },
          ],
        },
        {
          name: "South East Asia",
          link: "https://travel-experts.stagging-server786.com/page/south-east-asia/",
          sublinks: [
            { name: "cambodia", link: "https://travel-experts.stagging-server786.com/page/cambodia/" },
            { name: "indonesia", link: "https://travel-experts.stagging-server786.com/page/indonesia/" },
            { name: "myanmar", link: "https://travel-experts.stagging-server786.com/page/myanmar/" },
            { name: "vietnam", link: "https://travel-experts.stagging-server786.com/page/vietnam/" },
          ],
        },
        {
          name: "Europe",
          link: "https://travel-experts.stagging-server786.com/page/europe/",
          sublinks: [
            { name: "albania", link: "https://travel-experts.stagging-server786.com/page/albania/" },
            { name: "belgium", link: "https://travel-experts.stagging-server786.com/page/belgium/" },
            { name: "france", link: "https://travel-experts.stagging-server786.com/page/france/" },
            { name: "czech republic", link: "https://travel-experts.stagging-server786.com/page/czech-republic/" },
            { name: "netherlands", link: "https://travel-experts.stagging-server786.com/page/netherlands/" },
            { name: "poland", link: "https://travel-experts.stagging-server786.com/page/poland/" },
          ],
        },
        {
          name: "Middle East",
          link: "https://travel-experts.stagging-server786.com/page/middle-east/",
          sublinks: [
            { name: "iraq", link: "https://travel-experts.stagging-server786.com/page/iraq/" },
            { name: "qatar", link: "https://travel-experts.stagging-server786.com/page/qatar/" },
            { name: "uae", link: "https://travel-experts.stagging-server786.com/page/uae/" },
          ],
        },
        {
          name: "Oceania",
          link: "https://travel-experts.stagging-server786.com/page/oceania/",
          sublinks: [
            { name: "fiji", link: "https://travel-experts.stagging-server786.com/page/fiji/" },
            { name: "tahiji", link: "https://travel-experts.stagging-server786.com/page/tahiti/" },
          ],
        },
      ],
    },
    { name: "contact us", link: "https://travel-experts.stagging-server786.com/page/contact-us/" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleTripTypeChange = (type) => {
    setFormData((prev) => ({
      ...prev,
      tripType: type,
      returnDate: type === "O" ? "" : prev.returnDate,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from) newErrors.from = "Please select a departure airport";
    if (!formData.to) newErrors.to = "Please select an arrival airport";
    if (formData.from && formData.to && formData.from === formData.to)
      newErrors.to = "Arrival airport must be different from departure";
    if (!formData.departureDate) newErrors.departureDate = "Please select a departure date";
    if (formData.tripType === "R" && !formData.returnDate)
      newErrors.returnDate = "Please select a return date";

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const depDate = new Date(formData.departureDate);
    if (depDate < today) newErrors.departureDate = "Departure date must be today or in the future";
    if (formData.tripType === "R" && formData.returnDate) {
      const retDate = new Date(formData.returnDate);
      if (retDate < depDate) newErrors.returnDate = "Return date must be after departure date";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = async () => {
    if (!validateForm()) return;

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
      Stop: { OneStop: false, TwoStop: false, NonStop: false },
      CustID: "CUST01010101",
      MultiCitySearches: null,
    };

    try {
      const response = await searchFlights(payload).unwrap();
      navigate("/search-results", {
        state: { results: response, searchParams: payload, isLoading: false, error: null },
      });
    } catch (error) {
      navigate("/search-results", {
        state: { results: [], searchParams: payload, isLoading: false, error },
      });
    }
  };

  return (
    <section
      className="bg-cover bg-center flex flex-col min-h-screen sm:px-6 lg:px-8 md:px-8 px-0"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-[998] lg:hidden"
        ></div>
      )}

      <SidebarMenu isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} links={navLinks} />

      {/* Navbar - Fixed: One line on all devices */}
      <nav className="relative z-[1000] py-4 sm:py-6">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="font-roboto">
              <h2 className="text-white font-medium tracking-wide sm:text-2xl md:text-[32px] leading-tight">
                TRAVEL EXPERTS <br />
                <span className="font-normal block text-right text-sm sm:text-base md:text-lg">
                  AND TOUR, INC.
                </span>
              </h2>
            </div>

            {/* Desktop Menu - Fully visible */}
            <div className="hidden lg:block">
              <NavMenu
                links={navLinks}
                wrapperClassName="flex items-center gap-6 text-white border border-white rounded-full text-sm px-8 py-3 font-karla font-medium bg-white/10 backdrop-blur-sm"
                linkClassName="uppercase px-5 py-2 hover:bg-white hover:text-black rounded-full transition whitespace-nowrap"
              />
            </div>

            {/* Book Now + Hamburger - Always together */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={handleOpenModal}
                className="bg-[#082A8C] hover:bg-[#0a3ac5] text-white font-semibold px-4 sm:px-5 py-2 rounded-full transition text-sm sm:text-base whitespace-nowrap"
              >
                BOOK NOW
              </button>

              <RxHamburgerMenu
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-white text-3xl cursor-pointer hover:opacity-70 transition"
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 text-white mt-16 sm:mt-20 lg:mt-20 flex flex-col lg:flex-row items-start lg:items-center justify-between container mx-auto px-4 sm:px-6 gap-10 lg:gap-0">
        <div className="max-w-full lg:max-w-3xl">
          <div className="inline-block bg-white/10 rounded-full px-5 sm:px-6 py-2 border border-white/20 mb-4">
            <p className="text-base sm:text-lg font-medium font-karla">Welcome to Amol Travel</p>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide my-3 font-messiri">
            TRAVEL EXPERTS AND TOUR INC
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-[70px] font-semibold leading-tight font-messiri">
            Let's Discover The <br className="hidden sm:block" /> World Together.
          </h1>
        </div>

        <div className="flex-shrink-0">
          <img src={StampImg} alt="stamp" className="w-40 sm:w-52 lg:w-100" />
        </div>
      </div>

      {/* Booking Box */}
      <div className="relative z-10 my-10 sm:my-12 bg-white/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl container mx-auto">
        {/* Trip Type */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-6 font-medium text-sm sm:text-base">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="tripType" checked={formData.tripType === "O"} onChange={() => handleTripTypeChange("O")} /> One Way
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" name="tripType" checked={formData.tripType === "R"} onChange={() => handleTripTypeChange("R")} /> Round Trip
          </label>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-8 font-roboto font-bold text-sm sm:text-base">
          <AirportSelector name="from" label="From" value={formData.from} onChange={handleInputChange} placeholder="Select departure city" error={errors.from} />
          <AirportSelector name="to" label="To" value={formData.to} onChange={handleInputChange} placeholder="Select arrival city" error={errors.to} />
          <DatePicker name="departureDate" label="Departure" value={formData.departureDate} onChange={handleInputChange} minDate={new Date().toISOString().split("T")[0]} error={errors.departureDate} placeholder="Select departure date" />
          <DatePicker name="returnDate" label="Return" value={formData.returnDate} onChange={handleInputChange} minDate={formData.departureDate || new Date().toISOString().split("T")[0]} disabled={formData.tripType === "O"} error={errors.returnDate} placeholder="Select return date" />
          <PassengerSelector adults={formData.adults} children={formData.children} infants={formData.infants} cabin={formData.cabin} onAdultsChange={handleInputChange} onChildrenChange={handleInputChange} onInfantsChange={handleInputChange} onCabinChange={handleInputChange} />
        </div>

        {/* Fare Type */}
        <div className="my-6 text-sm sm:text-base">
          <div className="font-bold mb-2">Select A Fare Type:</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 font-medium">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="fareType" value="Regular" checked={formData.fareType === "Regular"} onChange={handleInputChange} /> Regular
            </label>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="bg-[#002B7F] text-white px-12 sm:px-[50px] md:px-[71px] py-3 sm:py-4 md:py-5 rounded-[50px] hover:opacity-90 transition flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base font-normal font-roboto shadow-lg"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Searching...</span>
              </>
            ) : (
              <>
                <FaPlane />
                <span>Search Now</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4">
          <div className="bg-[#1a120b] text-white p-6 sm:p-8 rounded-2xl w-full max-w-md relative">
            <button onClick={handleCloseModal} className="absolute top-4 right-4 text-white text-2xl hover:text-gray-400">X</button>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Book Now</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none" />
              <input type="tel" placeholder="Phone" className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none" />
              <input type="email" placeholder="Email" className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none" />
              <textarea placeholder="Message" className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none h-28 resize-none"></textarea>
              <button type="submit" className="bg-white text-black font-semibold rounded-full py-3 px-8 hover:bg-gray-200 transition block mx-auto text-base">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );

  // return (
  //   <section
  //     className="bg-cover bg-center flex flex-col px-6"
  //     style={{ backgroundImage: `url(${BannerImage})` }}
  //   >
  //     {/* Overlay */}
  //     <div className="absolute inset-0 bg-black/40 z[1]"></div>

  //     {sidebarOpen && (
  //       <div
  //         onClick={() => setSidebarOpen(false)}
  //         className="fixed inset-0 bg-black/40 z-[998] transition-opacity"
  //       ></div>
  //     )}

  //     <SidebarMenu
  //       isOpen={sidebarOpen}
  //       onClose={() => setSidebarOpen(false)}
  //       links={navLinks}
  //     />

  //     <nav className="z-[1000] py-6 flex items-center justify-between container mx-auto px-4 sm:px-6">
  //       {/* Logo */}
  //       <div className="font-roboto text-center sm:text-left">
  //         <h2 className="text-white font-medium tracking-wide text-xl md:text-[32px] leading-tight">
  //           TRAVEL EXPERTS <br />
  //           <span className="font-normal flex justify-end text-sm md:text-lg">
  //             AND TOUR, INC.
  //           </span>
  //         </h2>
  //       </div>

  //       {/* Navigation Menu */}
  //       <NavMenu
  //         links={navLinks}
  //         wrapperClassName={
  //           "hidden lg:flex items-center gap-6 text-white border border-white rounded-full text-sm px-5 py-2 font-karla font-medium"
  //         }
  //         linkClassName={
  //           "uppercase px-5 py-2 hover:bg-white hover:text-black rounded-full transition"
  //         }
  //       />

  //       {/* Book Now Button + Mobile Menu Icon */}
  //       <div className="flex items-center gap-3">
  //         <button
  //           onClick={handleOpenModal}
  //           className="bg-[#082A8C] hover:bg-[#0a3ac5] text-white font-semibold px-5 py-2 rounded-full transition text-sm sm:text-base"
  //         >
  //           BOOK NOW
  //         </button>

  //         <RxHamburgerMenu
  //           onClick={() => setSidebarOpen(true)}
  //           className="lg:hidden text-white text-3xl hover:cursor-pointer hover:opacity-70 transition"
  //         />
  //       </div>
  //     </nav>

  //     {/* Main Content */}
  //     <div className="z-10 text-white mt-20 flex items-center justify-between container mx-auto">
  //       <div>
  //         <div className="inline-block bg-white/10 rounded-full px-6 py-2 border border-white/20 mb-3">
  //           <p className="text-lg font-medium font-karla">
  //             Welcome to Amol Travel
  //           </p>
  //         </div>
  //         <p className="text-base md:text-3xl font-semibold tracking-wide my-2 font-messiri">
  //           TRAVEL EXPERTS AND TOUR INC
  //         </p>
  //         <h1 className="text-3xl md:text-[70px] font-semibold leading-tight font-messiri">
  //           Let's Discover The <br /> World Together.
  //         </h1>
  //       </div>

  //       <div>
  //         <img src={StampImg} alt="stamp image" className="w-100" />
  //       </div>

  //       {/* <div className="flex flex-col gap-4">
  //         {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
  //           <a
  //             key={i}
  //             href="#"
  //             className="w-10 h-10 flex items-center justify-center border border-white/50 rounded-full bg-white/20 hover:opacity-70 transition"
  //           >
  //             <Icon className="text-white" />
  //           </a>
  //         ))}
  //       </div> */}
  //     </div>

  //     {/* Booking Box */}
  //     <div className="z-10 my-10 bg-white/60 rounded-2xl p-8 shadow-lg text-black container mx-auto">
  //       {/* <h3 className="text-[40px] font-semibold text-[#002B7F] mb-4 font-messiri">
  //         Where to go?
  //       </h3> */}

  //       {/* Radio buttons */}
  //       <div className="flex flex-wrap items-center gap-6 mb-4 font-medium text-base">
  //         <label className="flex items-center gap-2 cursor-pointer">
  //           <input
  //             type="radio"
  //             name="tripType"
  //             checked={formData.tripType === "O"}
  //             onChange={() => handleTripTypeChange("O")}
  //           />{" "}
  //           One Way
  //         </label>
  //         <label className="flex items-center gap-2 cursor-pointer">
  //           <input
  //             type="radio"
  //             name="tripType"
  //             checked={formData.tripType === "R"}
  //             onChange={() => handleTripTypeChange("R")}
  //           />{" "}
  //           Round Trip
  //         </label>
  //       </div>

  //       {/* Input Fields */}
  //       <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 my-8 font-roboto font-bold text-base">
  //         <AirportSelector
  //           name="from"
  //           label="From"
  //           value={formData.from}
  //           onChange={handleInputChange}
  //           placeholder="Select departure city"
  //           error={errors.from}
  //         />

  //         <AirportSelector
  //           name="to"
  //           label="To"
  //           value={formData.to}
  //           onChange={handleInputChange}
  //           placeholder="Select arrival city"
  //           error={errors.to}
  //         />

  //         <DatePicker
  //           name="departureDate"
  //           label="Departure"
  //           value={formData.departureDate}
  //           onChange={handleInputChange}
  //           minDate={new Date().toISOString().split("T")[0]}
  //           error={errors.departureDate}
  //           placeholder="Select departure date"
  //         />

  //         <DatePicker
  //           name="returnDate"
  //           label="Return"
  //           value={formData.returnDate}
  //           onChange={handleInputChange}
  //           minDate={
  //             formData.departureDate || new Date().toISOString().split("T")[0]
  //           }
  //           disabled={formData.tripType === "O"}
  //           error={errors.returnDate}
  //           placeholder="Select return date"
  //         />

  //         <PassengerSelector
  //           adults={formData.adults}
  //           children={formData.children}
  //           infants={formData.infants}
  //           cabin={formData.cabin}
  //           onAdultsChange={handleInputChange}
  //           onChildrenChange={handleInputChange}
  //           onInfantsChange={handleInputChange}
  //           onCabinChange={handleInputChange}
  //         />
  //       </div>

  //       {/* Remove old passenger count section as it's now integrated */}

  //       {/* Radio Buttons */}
  //       <div className="flex flex-col flex-wrap justify-center gap-2 my-6 text-base">
  //         <div className="font-bold">Select A Fare Type:</div>
  //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-medium">
  //           <label className="flex items-center gap-2 cursor-pointer">
  //             <input
  //               type="radio"
  //               name="fareType"
  //               value="Regular"
  //               checked={formData.fareType === "Regular"}
  //               onChange={handleInputChange}
  //             />{" "}
  //             Regular
  //           </label>
  //           <label className="flex items-center gap-2 cursor-pointer">
  //             <input
  //               type="radio"
  //               name="fareType"
  //               value="Student"
  //               checked={formData.fareType === "Student"}
  //               onChange={handleInputChange}
  //             />{" "}
  //             Student
  //           </label>
  //           <label className="flex items-center gap-2 cursor-pointer">
  //             <input
  //               type="radio"
  //               name="fareType"
  //               value="Senior Citizen"
  //               checked={formData.fareType === "Senior Citizen"}
  //               onChange={handleInputChange}
  //             />{" "}
  //             Senior Citizen
  //           </label>
  //           <label className="flex items-center gap-2 cursor-pointer">
  //             <input
  //               type="radio"
  //               name="fareType"
  //               value="Armed Forces"
  //               checked={formData.fareType === "Armed Forces"}
  //               onChange={handleInputChange}
  //             />{" "}
  //             Armed Forces
  //           </label>
  //         </div>
  //       </div>

  //       <div className="flex items-center justify-center text-xs md:text-base font-normal font-roboto">
  //         <button
  //           onClick={handleSearch}
  //           disabled={isLoading}
  //           className="bg-[#002B7F] text-white px-[50px] md:px-[71px] py-[14px] md:py-[22px] rounded-[50px] hover:opacity-90 hover:cursor-pointer transition flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
  //         >
  //           {isLoading ? (
  //             <>
  //               <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
  //               <span>Searching...</span>
  //             </>
  //           ) : (
  //             <>
  //               <span>
  //                 <FaPlane />
  //               </span>
  //               <span>Search Now</span>
  //             </>
  //           )}
  //         </button>
  //       </div>
  //     </div>

  //     {isModalOpen && (
  //       <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
  //         <div className="bg-[#1a120b] text-white p-8 rounded-2xl w-[90%] max-w-md relative">
  //           <button
  //             onClick={handleCloseModal}
  //             className="absolute top-4 right-4 text-white text-xl hover:text-gray-400"
  //           >
  //             ✕
  //           </button>

  //           <h2 className="text-2xl font-bold text-center mb-6">Book Now</h2>

  //           <form className="space-y-4">
  //             <input
  //               type="text"
  //               placeholder="Name"
  //               className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none"
  //             />
  //             <input
  //               type="tel"
  //               placeholder="Phone"
  //               className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none"
  //             />
  //             <input
  //               type="email"
  //               placeholder="Email"
  //               className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none"
  //             />
  //             <textarea
  //               placeholder="Message"
  //               className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none h-24"
  //             ></textarea>

  //             <button
  //               type="submit"
  //               className="bg-white text-black font-semibold rounded-full py-2 px-6 hover:bg-gray-200 transition block mx-auto"
  //             >
  //               Submit
  //             </button>
  //           </form>
  //         </div>
  //       </div>
  //     )}
  //   </section>
  // );
};

export default Banner;