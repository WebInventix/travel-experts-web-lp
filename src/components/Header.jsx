import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from "./NavMenu";

const Header = () => {
  const navLinks = [
    { name: "home", link: "#" },
    { name: "about us", link: "#" },
    { name: "destination", link: "#" },
    { name: "contact us", link: "#" },
  ];

  return (
    // 🩹 Full width wrapper ensures no clipping or scroll
    <div className="w-full overflow-x-hidden">
      {/* Use fixed only at top, behaves same as absolute visually */}
      <header className="fixed top-0 left-0 right-0 w-full z-20">
        {/* Top bar */}
        <div className="bg-[#002B7F] text-white py-2 text-sm">
          <div className="flex justify-between items-center max-w-[1280px] mx-auto px-4 sm:px-6 font-roboto font-bold text-xl">
            <div className="flex items-center gap-2">
              <MdEmail />
              <span>info@amoltravel.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MdCall />
              <span>14253682462</span>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <nav className="bg-transparent py-4 flex items-center justify-between max-w-[1280px] mx-auto px-4 sm:px-6 gap-10">
          <div className="font-roboto">
            <h2 className="text-white text-xl font-medium tracking-wide text-[32px] leading-tight">
              TRAVEL EXPERTS <br />
              <span className="text-sm font-normal flex justify-end text-[18px]">
                AND TOUR, INC.
              </span>
            </h2>
          </div>

          <NavMenu
            links={navLinks}
            wrapperClassName={
              "hidden md:flex items-center gap-6 text-white border border-white rounded-full text-sm px-5 py-2 font-karla font-medium"
            }
            linkClassName={
              "uppercase px-5 py-2 hover:bg-white/20 rounded-full transition"
            }
          />

          <div>
            <RxHamburgerMenu className="text-white text-4xl hover:cursor-pointer hover:opacity-70 transition" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
