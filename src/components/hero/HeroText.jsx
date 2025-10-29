import React from "react";
import { Link } from "react-router-dom";

const HeroText = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-5 lg:gap-10 px-4 py-12">
      <div className="lg:w-1/2">
        <h1 className="text-[26px] md:text-[28px] xl:text-[52px] font-messiri font-semibold leading-none text-[#0E0700]">
          Begin Your New Life Experience With Exploring New Destination
        </h1>
      </div>

      <div className="lg:w-1/2 flex flex-col space-y-5">
        {/* <p className="text-[#333333] md:text-sm xl:text-base font-karla leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes.
        </p> */}

        <div className="flex justify-end gap-4 md:text-[10px] xl:text-sm font-karla">
          <Link to={'https://stagging-server786.com/demo-client/amoltravel/about-us/'} className="bg-[#0E0700] text-white px-6 py-3 rounded-full  hover:opacity-80 transition underline cursor-pointer">
            ABOUT US
          </Link>
          {/* <button className="border border-[#0E0700] text-[#0E0700] px-6 py-2 rounded-full hover:opacity-80 transition">
            EXPLORE TRIP
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default HeroText;
