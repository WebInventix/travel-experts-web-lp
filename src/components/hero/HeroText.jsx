import React from "react";

const HeroText = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start gap-10 px-4 py-12">
      <div className="lg:w-1/2">
        <h1 className="text-[36px] md:text-[48px] lg:text-[52px] font-messiri font-semibold leading-tight text-[#0E0700]">
          Begin Your New Life <br />
          Experience With Exploring <br />
          New Destination
        </h1>
      </div>

      <div className="lg:w-1/2 flex flex-col space-y-5">
        <p className="text-[#333333] text-base font-karla leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          commodo <br /> ligula eget dolor. Aenean massa. Cum sociis natoque
          penatibus et magnis dis <br /> parturient montes.
        </p>

        <div className="flex gap-4">
          <button className="bg-[#0E0700] text-white px-6 py-2 rounded-full text-sm font-karla hover:opacity-80 transition">
            ABOUT US
          </button>
          <button className="border border-[#0E0700] text-[#0E0700] px-6 py-2 rounded-full text-sm font-karla hover:opacity-80 transition">
            EXPLORE TRIP
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
