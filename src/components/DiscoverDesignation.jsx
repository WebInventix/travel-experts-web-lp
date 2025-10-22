import React from "react";
import camelImage from "../assets/test.png";

const DiscoverDesignation = () => {
  return (
    <section className="bg-black text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl xl:text-5xl font-messiri font-semibold leading-tight">
            Discover Top Destinations and Trending Excursions
          </h2>
          <button className="bg-white text-xs xl:text-base text-black px-6 py-3 rounded-full font-karla font-medium hover:bg-gray-100 transition">
            LEARN MORE
          </button>
        </div>

        {/* Right Side Image */}
        <div className="space-y-6">
          <img src={camelImage} width={600} alt="camel-image" />
        </div>
      </div>
    </section>
  );
};

export default DiscoverDesignation;
