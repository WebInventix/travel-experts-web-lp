import React, { useState } from "react";
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
  const [videoUrl, setVideoUrl] = useState(null);

  const videos = [
    {
      img: AdVidImg1,
      link: "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1",
    },
    {
      img: AdVidImg2,
      link: "https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center my-16">
      {/* Left Side */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-messiri font-semibold text-[#0E0700] leading-tight">
          Experience The New Adventure
        </h2>

        <h1 className="text-2xl font-semibold">
          We are in business for more than 25+ years
        </h1>

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
            description="Enjoy every journey with complete peace of mind, knowing your safety is our top priority."
          />
          <FeatureItem
            icon={CurrencyIcon}
            title="Affordable Price"
            description="Experience quality travel and comfort without stretching your budget."
          />
          <FeatureItem
            icon={DoorIcon}
            title="Comfort Accommodation"
            description="Relax and unwind in cozy, well-equipped stays designed for your comfort."
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="flex flex-col items-center">
        <div
          className="flex items-end justify-center w-full max-w-[900px] h-[500px] rounded-xl bg-cover bg-center overflow-hidden"
          style={{ backgroundImage: `url(${AdvBgImg})` }}
        >
          {/* 🎥 Video Thumbnails */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {videos.map((video, i) => (
              <button
                key={i}
                onClick={() => setVideoUrl(video.link)}
                className="relative bg-white/20 border border-white/30 rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-500 w-full"
              >
                <img
                  src={video.img}
                  alt={`Video thumbnail ${i + 1}`}
                  className="w-full h-full object-cover opacity-95"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition">
                  <img
                    src={VidBtnImg}
                    alt="play video"
                    className="w-12 h-12 sm:w-8 sm:h-8"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 🎬 Inline Popup (Just iframe) */}
        {videoUrl && (
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-[999]"
            onClick={() => setVideoUrl(null)}
          >
            <iframe
              src={videoUrl}
              title="YouTube video player"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-[90%] max-w-[800px] aspect-video rounded-xl shadow-lg border border-white/20"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default AdventureSection;
