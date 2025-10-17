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
        <h1 className="text-[52px] font-semibold font-messiri leading-none">
          Why use a travel <br /> agent these days?
        </h1>
        <p className="text-base font-normal font-karla text-center">
          We can save you time, money and aggravation. We offer travel advice,
          <br />
          booking, and trouble-shooting. And we can help you avoid fees for
          <br />
          last-minute or emergency travel.
        </p>
      </div>

      <div className="flex items-center justify-center my-8">
        <NavMenu
          links={navLinks}
          wrapperClassName={
            "md:flex items-center gap-6 border rounded-full text-sm px-5 py-2 font-karla font-medium"
          }
          linkClassName={
            "uppercase px-5 py-3 hover:bg-gray-600/10 rounded-full transition"
          }
        />
      </div>
    </div>
  );
};

export default WhyUse;
