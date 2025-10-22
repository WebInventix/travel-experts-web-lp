import React from "react";
import InfoCard from "./InfoCard";
import FortImg from "../../assets/fort-image.png";
import TempleImg from "../../assets/temple-image.png";
import TigerImg from "../../assets/tiger-image.png";

const HeroImageGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {/* Left Large Image - Fort/Palace */}
        <div className="lg:col-span-1">
          <img
            src={FortImg}
            alt="Historic Fort"
            className="rounded-2xl w-full h-[400px] md:h-[500px] lg:h-[650px] object-cover shadow-lg"
          />
        </div>

        {/* Right Column - Temple, Tiger, and Info Card */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Temple Image */}
          <div className="flex-shrink-0">
            <img
              src={TempleImg}
              alt="Ancient Temple"
              className="rounded-2xl w-full h-[250px] md:h-[210px] lg:h-[300px] object-cover shadow-lg"
            />
          </div>

          {/* Tiger Image and Info Card - Side by Side */}
          <div className="flex flex-row gap-4 md:gap-6">
            {/* Tiger Image */}
            <div className="flex-1">
              <img
                src={TigerImg}
                alt="Bengal Tiger"
                className="rounded-2xl w-full h-[250px] md:h-[220px] lg:h-[320px] object-cover shadow-lg"
              />
            </div>

            {/* Info Card */}
            <div className="flex-1">
              <InfoCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroImageGrid;
