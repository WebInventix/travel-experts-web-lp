import React from "react";
import HeroText from "./HeroText";
import HeroImageGrid from "./HeroImageGrid";

const HeroSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      {/* <div className="grid md:grid-cols-2 gap-12 items-center"> */}
      <>
        <HeroText />

        <HeroImageGrid />
      </>
      {/* </div> */}
    </section>
  );
};

export default HeroSection;
