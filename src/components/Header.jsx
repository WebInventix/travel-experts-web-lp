import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="bg-[#002785] text-white py-2 text-sm relative z-50">
        <div className="flex flex-wrap justify-between items-center container mx-auto px-4 sm:px-6 font-roboto font-bold text-sm sm:text-xl">
          {/* Email */}
          <a
            href="mailto:info@amoltravel.com"
            className="flex items-center gap-2 hover:text-gray-300 no-underline cursor-pointer"
          >
            <MdEmail />
            <span>info@amoltravel.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:14253682462"
            className="flex items-center gap-2 hover:text-gray-300 no-underline cursor-pointer"
          >
            <MdCall />
            <span>14253682462</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
