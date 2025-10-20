import React, { useState } from "react";

import VideoPlayerImg from "../assets/video-player.png";
import FAQ from "./FAQ";

const ExperienceSection = () => {
  const [videoError, setVideoError] = useState(false);

  const faqs = [
    "What to prepare trip to Asia",
    "What document you need before go to Asia",
    "How to scheduling Asia trip itinerary",
    "8 Website must read before your trip",
    "This is the best budget you need to prepare",
    "This site give you the information about travel to Asia",
  ];

  return (
    <section className="bg-[#0E0A06] text-white py-20 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-10 mb-12">
          <div>
            <h2 className="text-[28px] md:text-[34px] lg:text-[42px] xl:text-[52px] font-semibold font-messiri leading-tight">
              Enjoy Our Best Quality Tour & Experience
            </h2>
          </div>
          <div>
            <p className="text-xs md:text-base font-normal text-white/70 font-karla leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus.
            </p>
            <button className="bg-white text-black font-karla text-sm font-medium px-6 py-2 rounded-full hover:opacity-80 hover:cursor-pointer transition">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          <FAQ faqs={faqs} />
        </div>

        <div
          className="relative w-full rounded-xl overflow-hidden"
          style={{ aspectRatio: "16 / 9" }}
        >
          {!videoError ? (
            <iframe
              src="https://www.youtube.com/embed/8GFuxiE3He4?autoplay=1&mute=1&loop=1&playlist=8GFuxiE3He4&controls=0&modestbranding=1&rel=0&playsinline=1&showinfo=0"
              title="Experience video"
              allow="autoplay; encrypted-media"
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{
                border: "none",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transform: "scale(1.2)",
              }}
            ></iframe>
          ) : (
            <img
              src={VideoPlayerImg}
              alt="video player image"
              className="w-full h-full object-cover rounded-xl"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
