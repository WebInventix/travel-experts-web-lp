import React, { useState } from "react";

const DestinationSelector = ({ destinations }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);

  const currentBg =
    destinations[hoverIndex !== null ? hoverIndex : activeIndex]?.image;

  const handleMouseEnter = (i) => {
    setHoverIndex(i); // show overlay
    setActiveIndex(i); // also select hovered one
  };

  const handleMouseLeave = () => {
    setHoverIndex(null); // remove overlay but keep selection
  };

  return (
    <div
      className="relative w-full h-[1000px] md:h-[700px] bg-cover bg-center transition-all duration-700 ease-in-out overflow-hidden"
      style={{
        backgroundImage: `url(${currentBg})`,
      }}
    >
      {/* Buttons container */}
      <div className="absolute inset-0 grid grid-cols-2 md:flex md:flex-row md:items-stretch overflow-x-auto md:overflow-visible">
        {destinations.map((item, i) => (
          <div
            key={i}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={handleMouseLeave}
            className={`relative flex-shrink-0 w-full md:flex-1 flex flex-col pt-8 items-center text-center text-white cursor-pointer overflow-hidden transition-all duration-500 md:h-auto h-[200px] sm:h-[250px]
              ${
                activeIndex === i
                  ? "bg-black/30 backdrop-blur-[1px]" // selected state
                  : "bg-black/10 hover:bg-black/20"
              }
            `}
          >
            {/* Black overlay — only during hover */}
            <div
              className={`absolute top-0 left-0 w-full h-[150px] bg-black transition-transform duration-500 ease-in-out 
                ${
                  hoverIndex === i
                    ? "translate-y-0 bg-opacity-40 backdrop-blur-[1px]"
                    : "-translate-y-full bg-opacity-20"
                }
              `}
            ></div>

            <div className="relative z-10">
              <span className="uppercase text-sm tracking-widest font-karla">
                Visit
              </span>
              <h3 className="text-2xl font-semibold mt-2 font-messiri">
                {item?.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationSelector;
