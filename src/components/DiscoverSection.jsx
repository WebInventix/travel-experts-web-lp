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
    { name: "Thahiti", image: TahitiImg },
    { name: "Fiji", image: FijiImg },
  ];

  // const testimonials = [
  //   {
  //     name: "Louna Daniel",
  //     state: "state",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  //     image: LounaImg,
  //   },
  //   {
  //     name: "Joe Marshall",
  //     state: "state",
  //     text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
  //     image: JoeImg,
  //   },
  //   {
  //     name: "Luna Muller",
  //     state: "state",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  //     image: LunaImg,
  //   },
  //   {
  //     name: "Roy Franklin",
  //     state: "state",
  //     text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
  //     image: RoyImg,
  //   },
  //   {
  //     name: "Joe Marshall",
  //     state: "state",
  //     text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
  //     image: JoeImg,
  //   },
  //   {
  //     name: "Luna Muller",
  //     state: "state",
  //     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
  //     image: LunaImg,
  //   },
  //   {
  //     name: "Roy Franklin",
  //     state: "state",
  //     text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
  //     image: RoyImg,
  //   },
  // ];

  const testimonials = [
    {
      name: "Aarav Mehta",
      state: "California, USA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image: LounaImg,
    },
    {
      name: "Priya Sharma",
      state: "New York, USA",
      text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
      image: JoeImg,
    },
    {
      name: "Rohan Patel",
      state: "Texas, USA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image: LunaImg,
    },
    {
      name: "Neha Verma",
      state: "Florida, USA",
      text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
      image: RoyImg,
    },
    {
      name: "Vikram Iyer",
      state: "Illinois, USA",
      text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
      image: JoeImg,
    },
    {
      name: "Ananya Singh",
      state: "Washington, USA",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.",
      image: LunaImg,
    },
    {
      name: "Raj Malhotra",
      state: "Ohio, USA",
      text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.",
      image: RoyImg,
    },
  ];

  return (
    <section className="bg-black text-white">
      <DestinationSelector destinations={destinations} />
      <TestimonialsCarousel testimonials={testimonials} />
    </section>
  );
};

export default DiscoverSection;

{
  /* Top Section */
}

// {/* <div className="container mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 items-center">
//   {/* Left Side Text */}
//   <div>
//     <h2 className="text-3xl xl:text-5xl font-messiri font-semibold leading-tight">
//       Discover A Mesmerizing <br /> Nature Landscape & <br /> Stunning Culture
//     </h2>
//   </div>

//   {/* Right Side Description */}
//   <div className="space-y-6">
//     {/* <p className="text-gray-300 text-xs xl:text-base font-karla leading-relaxed">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
//             commodo ligula eget dolor. Aenean massa. Cum sociis natoque
//             penatibus et magnis dis parturient montes.
//           </p> */}
//     <button className="bg-white underline text-xs xl:text-base text-black px-6 py-3 rounded-full font-karla font-medium hover:bg-gray-100 transition">
//       LEARN MORE
//     </button>
//   </div>
// </div>; */}
