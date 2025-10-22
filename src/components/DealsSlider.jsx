import React from "react";

const DealsSlider = () => {
  return (
    <div className="bg-[#003366] overflow-hidden whitespace-nowrap relative py-4">
      <div className="flex animate-scroll">
        <span className="flex-shrink-0 text-white text-xl md:text-2xl font-bold uppercase tracking-wide px-12">
          WE ARE ONE OF THE BEST. LOWEST PRICE GUARANTEED. BEST DEALS ON COACH
          AND BUS
        </span>
        <span className="flex-shrink-0 text-white text-xl md:text-2xl font-bold uppercase tracking-wide px-12">
          WE ARE ONE OF THE BEST. LOWEST PRICE GUARANTEED. BEST DEALS ON COACH
          AND BUS
        </span>
        <span className="flex-shrink-0 text-white text-xl md:text-2xl font-bold uppercase tracking-wide px-12">
          WE ARE ONE OF THE BEST. LOWEST PRICE GUARANTEED. BEST DEALS ON COACH
          AND BUS
        </span>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
          display: flex;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default DealsSlider;
