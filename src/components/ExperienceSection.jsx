import React, { useState } from "react";

import VideoPlayerImg from "../assets/video-player.png";
import FAQ from "./FAQ";
import FAQGroup from "./FAQGroup.jsx";

const ExperienceSection = () => {
  const [videoError, setVideoError] = useState(false);

  // const faqs = [
  //   "What type of travel content can I find on this website?",
  //   "Can I use your maps or images for my own projects?",
  //   "Do you provide travel booking or tour packages?",
  //   "How can I suggest a destination or share my travel experience?",
  //   "How often is the travel information updated?",
  //   "Is this website suitable for first-time travelers?",
  // ];

  const faqsColumn1 = [
    {
      question: "What type of travel content can I find on this website?",
      answer: "You’ll find blogs, destinations, guides, and travel tips.",
    },
    {
      question: "Can I use your maps or images for my own projects?",
      answer: "You can, but make sure to credit the source.",
    },
    {
      question: "Do you provide travel booking or tour packages?",
      answer: "Yes, we offer multiple travel packages and group tours.",
    },
  ];

  const faqsColumn2 = [
    {
      question:
        "How can I suggest a destination or share my travel experience?",
      answer: "You can submit through our contact form.",
    },
    {
      question: "How often is the travel information updated?",
      answer: "We update our content weekly.",
    },
    {
      question: "Is this website suitable for first-time travelers?",
      answer: "Absolutely, we have beginner-friendly guides.",
    },
  ];

  return (
    <section className="bg-[#0E0A06] text-white py-20 px-6 md:px-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-10 mb-12">
          <div>
            <h2 className="text-[28px] md:text-[34px] lg:text-[42px] xl:text-[52px] font-semibold font-messiri leading-tight">
              Enjoy Our Best Quality <br /> Tour & Experience
            </h2>
          </div>
          <div className="flex justify-end items-end">
            {/* <p className="text-xs md:text-base font-normal text-white/70 font-karla leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus.
            </p> */}
            <button className="bg-white text-black font-karla text-sm font-medium px-6 py-3 rounded-full hover:opacity-80 hover:cursor-pointer transition underline">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        {/* <div className="grid md:grid-cols-2 gap-8 mb-14"> */}
        {/* <div className="grid md:grid-cols-2 gap-8 mb-14 items-start">
          <FAQ faqs={faqs} />
        </div> */}

        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-14 items-start">
            <FAQGroup faqs={faqsColumn1} />
            <FAQGroup faqs={faqsColumn2} />
          </div>
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
