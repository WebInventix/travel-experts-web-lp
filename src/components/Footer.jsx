import React from "react";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const pagesLinks = [
    { name: "about us", link: "#" },
    { name: "services", link: "#" },
    { name: "contact us", link: "#" },
  ];

  const importLinks = [
    { name: "privacy policy", link: "#" },
    { name: "career", link: "#" },
    { name: "term & condition", link: "#" },
  ];

  return (
    <footer className="bg-[#0E0700] text-white py-12 px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-10 border-b border-white/10 pb-8 container mx-auto">
        {/* Company Info */}
        <div>
          <h2 className="text-[30px] sm:text-[34px] xl:text-xl font-medium font-roboto">
            TRAVEL EXPERTS
          </h2>
          <p className="text-xl xl:text-sm font-normal text-white/80 font-roboto mb-4">
            AND TOUR, INC.
          </p>
          <p className="text-xs sm:text-base font-normal text-white/60 leading-relaxed font-Roboto">
            8327 NE 187TH WAY, KENMORE WA. 98028
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-transparent border border-white/30 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-transparent border border-white/30 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-transparent border border-white/30 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-transparent border border-white/30 rounded-full hover:bg-white hover:text-black transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Page Links */}
        <FooterLinks heading={"page"} links={pagesLinks} />

        {/* Important Links */}
        <FooterLinks heading={"import link"} links={importLinks} />

        {/* Newsletter */}
        <div>
          <h3 className="text-[28px] font-semibold font-messiri mb-4">
            Our Newsletter
          </h3>
          <p className="text-xs sm:text-base font-normal text-white/70 mb-4 font-roboto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec.
          </p>

          <div className="flex items-center bg-transparent border border-white/30 rounded-full overflow-hidden mt-10 sm:cols-span-2">
            <div className="w-[calc(100%-86px)]">
              <input
                type="email"
                placeholder="Your Email Address"
                className=" px-4 py-4 bg-transparent text-sm text-white w-full placeholder-white/60 focus:outline-none"
              />
            </div>
            <button className="bg-white text-black px-2 sm:px-5 whitespace-nowrap py-2 rounded-full text-[10px] sm:text-xs xl:text-md font-semibold hover:bg-[#002B7F] hover:text-white transition mr-2">
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      <div className="pt-6 text-end text-xs sm:text-sm text-white/50 font-karla font-medium container mx-auto">
        Copyright &copy; {currentYear}. All rights reserved |{" "}
        <span className="text-white font-medium">Web Craft Pros.</span>
      </div>
    </footer>
  );
};

export default Footer;
