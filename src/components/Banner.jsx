import React from "react";
import BannerImage from "../assets/Banner.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPlane } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from "./NavMenu";

const Banner = () => {
  const navLinks = [
    { name: "home", link: "#" },
    { name: "about us", link: "#" },
    { name: "destination", link: "#" },
    { name: "contact us", link: "#" },
  ];

  return (
    <section
      className="bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

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
          <RxHamburgerMenu className="lg:hidden text-white text-4xl hover:cursor-pointer hover:opacity-70 transition" />
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
          <label className="flex items-center gap-2">
            <input type="radio" name="tripType" defaultChecked /> One Way
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="tripType" /> Round Trip
          </label>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 my-8 font-roboto font-bold text-base">
          <div className="flex flex-col gap-3">
            <label htmlFor="from">From</label>
            <input
              id="from"
              type="text"
              placeholder="From"
              className="p-2 border border-white rounded-md bg-white focus:outline-none focus:border-[#002B7F] transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="to">To</label>
            <input
              id="to"
              type="text"
              placeholder="To"
              className="p-2 border border-white rounded-md bg-white focus:outline-none focus:border-[#002B7F] transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="departure">Departure</label>
            <input
              id="departure"
              type="date"
              className="p-2 border border-white rounded-md bg-white focus:outline-none focus:border-[#002B7F] transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="return">Return</label>
            <input
              id="return"
              type="date"
              className="p-2 border border-white rounded-md bg-white focus:outline-none focus:border-[#002B7F] transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-3 uppercase">
            <label htmlFor="traveller">Traveller & Class</label>
            <select
              id="traveller"
              className="p-2 border border-white rounded-md bg-white focus:outline-none focus:border-[#002B7F] transition-colors duration-200"
            >
              {/* <option>Traveller & Class</option> */}
            </select>
          </div>
        </div>

        {/* Radio Buttons */}
        <div className="flex flex-col flex-wrap justify-center gap-2 my-6 text-base">
          <div className="font-bold">Select A Fare Type:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-medium">
            <label className="flex items-center gap-2">
              <input type="radio" name="fare" defaultChecked /> Regular
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="fare" /> Student
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="fare" /> Senior Citizen
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="fare" /> Armed Forces
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center text-xs md:text-base font-normal font-roboto">
          <button className="bg-[#002B7F] text-white px-[50px] md:px-[71px] py-[14px] md:py-[22px] rounded-[50px] hover:opacity-90 hover:cursor-pointer transition flex items-center gap-2">
            <span>
              <FaPlane />
            </span>{" "}
            Search Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
