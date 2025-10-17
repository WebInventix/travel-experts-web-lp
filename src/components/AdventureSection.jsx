import React from "react";
import AdvBgImg from "../assets/adven-bg-img.png";
import AdVidImg1 from "../assets/adven-vid-1.png";
import AdVidImg2 from "../assets/adven-vid-2.png";
import ShieldIcon from "../assets/shield-icon.png";
import CurrencyIcon from "../assets/currency-icon.png";
import DoorIcon from "../assets/door-icon.png";
import VidBtnImg from "../assets/video-button.png";

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="bg-black text-white p-3 rounded-full flex items-center justify-center shrink-0">
      <img src={icon} alt="" className="w-5 h-5" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-[#0E0700]">{title}</h4>
      <p className="text-gray-600 text-sm font-karla">{description}</p>
    </div>
  </div>
);

const AdventureSection = () => {
  return (
    <section className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center my-16">
      {/* Left Side */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-messiri font-semibold text-[#0E0700] leading-tight">
          Experience The New Adventure
        </h2>
        <p className="text-gray-700 text-base font-karla leading-relaxed">
          Travel Experts’ success has been built upon the professionalism,
          expertise and integrity of our staff and the loyalty of our clients
          from the corporate, vacation and leisure travelers. Our philosophy is
          simple and straightforward: We do an exceptional job for our clients,
          always ensuring satisfaction and therefore earning business.
        </p>

        <div className="space-y-6">
          <FeatureItem
            icon={ShieldIcon}
            title="Safe Traveling"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          />
          <FeatureItem
            icon={CurrencyIcon}
            title="Affordable Price"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          />
          <FeatureItem
            icon={DoorIcon}
            title="Comfort Accommodation"
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-[900px]">
          {/* 🌄 Main Image */}
          <img
            src={AdvBgImg}
            alt="Adventure"
            className="w-full h-[500px] object-cover rounded-xl"
          />

          {/* 🎥 Thumbnails */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-6 xl:bottom-10 max-lg:static max-lg:translate-x-0 max-lg:mt-8 max-lg:w-full max-lg:justify-center">
            {[AdVidImg1, AdVidImg2].map((img, i) => (
              <div
                key={i}
                className="relative bg-white/20 backdrop-blur-md border border-white/30 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-500 w-[260px] h-[150px] lg:w-[200px] lg:h-[130px] max-md:w-[45%] max-md:h-120px] max-sm:w-[48%] max-sm:h-[110px]"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover opacity-95"
                />
                {/* ▶️ Play Button */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition">
                  <img
                    src={VidBtnImg}
                    alt="video play button"
                    className="w-12 h-12 sm:w-8 sm:h-8"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;
