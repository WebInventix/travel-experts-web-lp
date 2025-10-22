import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import BeachImg from "../assets/pic1.jpeg";
import PalaceImg from "../assets/pic2.webp";
import TurkeyImg from "../assets/pic3.jpeg";
import PyramidsImg from "../assets/pic4.jpg";

const DestinationCard = ({ image, title, location, size }) => {
  return (
    <div
      className={`group overflow-hidden rounded-2xl flex flex-col justify-end shadow-md transition-transform duration-500 hover:scale-[1.02]
        ${
          size === "large"
            ? "lg:row-span-2 lg:h-[600px] h-[300px]"
            : size === "wide"
            ? "lg:col-span-2 lg:h-[320px] h-[300px]"
            : "h-[260px]"
        }`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="bg-gradient-to-t from-black/60 via-black/25 to-transparent flex flex-col justify-end p-6 transition-all duration-500 group-hover:brightness-110">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h3 className="text-white text-[18px] sm:text-lg font-semibold leading-snug">
              {title}
            </h3>
            <p className="text-gray-300 text-sm">{location}</p>
          </div>

          <div className="flex items-center justify-center w-9 h-9 border border-white/60 rounded-full group-hover:bg-white group-hover:text-black transition-all duration-300 text-white">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

const Destinations = () => {
  const destinations = [
    {
      image: BeachImg,
      title: "Taj Mahal",
      location: "Agra, India",
      size: "large",
    },
    {
      image: PalaceImg,
      title: "India Gate",
      location: "Delhi, India",
    },
    {
      image: TurkeyImg,
      title: "Hawa Mahal",
      location: "Jaipur, India",
    },
    {
      image: PyramidsImg,
      title: "Mysore Palace",
      location: "Mysore, India",
      size: "wide",
    },
  ];

  return (
    <section className="container mx-auto px-4 sm:px-6 py-16">
      {/* ✅ Responsive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {destinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>
    </section>
  );
};

export default Destinations;
