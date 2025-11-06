import React from "react";
import camelImage from "../assets/exoticca-logo-white (4).png";

const DiscoverDesignation = () => {
  return (
    <section className="bg-black text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl xl:text-5xl font-messiri font-semibold leading-tight">
            Book Your Next Adventure
          </h2>
          <p>
            Discover handpicked tours and unforgettable journeys across the
            globe. Book directly through my Exoticca portal for exclusive offers
            and personalized service.
          </p>
          <br />
          <button className="bg-white text-xs xl:text-base underline text-black px-6 py-3 rounded-full font-karla font-medium hover:bg-gray-100 transition">
            <a
              href="https://www.exoticca.com/us?advisor=19865"
              target="_blank"
              rel="noopener noreferrer"
            >
              DISCOVER NOW
            </a>
          </button>
        </div>

        {/* Right Side Image */}
        <div className="space-y-20">
          <img
            className="w-[300px] h-[300px] object-contain mx-auto"
            src={camelImage}
            width={200}
            alt="camel-image"
          />
        </div>
      </div>
    </section>
  );
};

export default DiscoverDesignation;
