import React from "react";
import InfoCard from "./InfoCard";
import FortImg from "../../assets/fort-image.png";
import TempleImg from "../../assets/temple-image.png";
import TigerImg from "../../assets/tiger-image.png";

const HeroImageGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
      {/* Left Large Image */}
      <div className="col-span-2">
        <img
          src={FortImg}
          alt="Large Destination"
          className="rounded-2xl w-full h-[350px] md:h-[700px] object-cover"
        />
      </div>

      {/* Right Small Images */}
      <div className="space-y-8">
        <img
          src={TempleImg}
          alt="Temple"
          className="rounded-2xl w-full md:w-[320px] h-auto md:h-[220px] object-cover"
        />
        <img
          src={TigerImg}
          alt="Tiger"
          className="rounded-2xl w-full md:w-[220px] h-auto md:h-[360px] object-cover"
        />
        <div className="md:ml-8">
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default HeroImageGrid;
