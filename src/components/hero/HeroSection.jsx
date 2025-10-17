import React from "react";
import HeroText from "./HeroText";
import HeroImageGrid from "./HeroImageGrid";

const HeroSection = () => {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 bg-white">
      <>
        <HeroText />
        <HeroImageGrid />
      </>
    </section>
  );
};

export default HeroSection;
