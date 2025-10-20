import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    // 🩹 Full width wrapper ensures no clipping or scroll
    <div className="w-full overflow-x-hidden">
      {/* Use fixed only at top, behaves same as absolute visually */}
      <header className=" top-0 left-0 right-0 w-full z-20">
        {/* Top bar */}
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
      </header>
    </div>
  );
};

export default Header;
