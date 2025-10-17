import React from "react";
import NavMenu from "./NavMenu";

const WhyUse = () => {
  const navLinks = [
    { name: "destination", link: "#" },
    { name: "accomodation", link: "#" },
    { name: "activity", link: "#" },
  ];

  return (
    <div className="container mx-auto my-16">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-[32px] md:text-[42px] lg:text-[52px] font-semibold font-messiri leading-none">
          Why use a travel <br /> agent these days?
        </h1>
        <p className="text-[10px] md:text-sm lg:text-base font-normal font-karla text-center">
          We can save you time, money and aggravation. We offer travel advice,
          <br />
          booking, and trouble-shooting. And we can help you avoid fees for
          <br />
          last-minute or emergency travel.
        </p>
      </div>

      <div className="flex items-center justify-center my-8">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-6 sm:gap-9 text-sm px-3 sm:px-5 py-2 font-karla font-medium md:border md:rounded-full md:px-6 md:py-3">
          {navLinks?.map((page, index) => (
            <li key={index}>
              <a
                href={page?.link}
                className="uppercase px-4 sm:px-5 py-2 sm:py-3 rounded-full transition hover:bg-gray-600/10 border md:border-none w-full md:w-auto text-center"
              >
                {page?.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WhyUse;
