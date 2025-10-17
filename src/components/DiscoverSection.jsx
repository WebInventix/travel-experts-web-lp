import React from "react";
import IndiaImg from "../assets/Taj-Mahal.png";
import DubaiImg from "../assets/Dubai.png";
import AfricaImg from "../assets/Africa.png";
import TahitiImg from "../assets/Tahiti.png";
import FijiImg from "../assets/Fiji.png";

import LounaImg from "../assets/Louna-Daniel.png";
import JoeImg from "../assets/Joe-Marshall.png";
import LunaImg from "../assets/Luna-Muller.png";
import RoyImg from "../assets/Roy-Franklin.png";
import DestinationSelector from "./DestinationSelector";
import TestimonialsCarousel from "./TestimonialCarousel";

const DiscoverSection = () => {
  const destinations = [
    { name: "India", image: IndiaImg },
    { name: "Dubai", image: DubaiImg },
    { name: "Africa", image: AfricaImg },
    { name: "Tahiti", image: TahitiImg },
    { name: "Fiji", image: FijiImg },
  ];
  const testimonials = [
    {
      name: "Louna Daniel",
      designation: "Designation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image: LounaImg,
    },
    {
      name: "Joe Marshall",
      designation: "Designation",
      text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
      image: JoeImg,
    },
    {
      name: "Luna Muller",
      designation: "Designation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image: LunaImg,
    },
    {
      name: "Roy Franklin",
      designation: "Designation",
      text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
      image: RoyImg,
    },
    {
      name: "Joe Marshall",
      designation: "Designation",
      text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
      image: JoeImg,
    },
    {
      name: "Luna Muller",
      designation: "Designation",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image: LunaImg,
    },
    {
      name: "Roy Franklin",
      designation: "Designation",
      text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
      image: RoyImg,
    },
  ];

  return (
    <section className="bg-black text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Side Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-messiri font-semibold leading-tight">
            Discover A Mesmerizing <br /> Nature Landscape & <br /> Stunning
            Culture
          </h2>
        </div>

        {/* Right Side Description */}
        <div className="space-y-6">
          <p className="text-gray-300 text-base font-karla leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full font-karla font-medium hover:bg-gray-100 transition">
            LEARN MORE
          </button>
        </div>
      </div>
      <DestinationSelector destinations={destinations} />
      {/* Testimonials Section */}
      {/* <div className="bg-[#0E0E0E] py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#1A1A1A] text-gray-300 p-6 rounded-2xl flex flex-col justify-between hover:bg-[#232323] transition"
            >
              <p className="text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <TestimonialsCarousel testimonials={testimonials} />;
    </section>
  );
};

export default DiscoverSection;
