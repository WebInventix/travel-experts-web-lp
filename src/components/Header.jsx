import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="bg-[#002B7F] text-white py-2 text-sm">
        <div className="flex justify-between items-center container mx-auto px-4 sm:px-6 font-roboto font-bold text-xl">
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
    </div>
  );
};

export default Header;
