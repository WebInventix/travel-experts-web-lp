import React, { useState } from "react";

const DestinationSelector = ({ destinations }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="relative w-full h-[1000px] md:h-[700px] bg-cover bg-center transition-all duration-700 ease-in-out overflow-hidden"
      style={{
        backgroundImage: `url(${destinations[activeIndex]?.image})`,
      }}
    >
      {/* Container of buttons */}
      <div
        className="
          absolute inset-0 
          flex flex-col md:flex-row 
          md:items-stretch 
          overflow-x-auto md:overflow-visible 
        "
      >
        {destinations.map((item, i) => (
          <div
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`
              flex-shrink-0 
              w-full md:flex-1 
              flex flex-col pt-8 items-center text-center text-white cursor-pointer 
              transition-all duration-500
              ${
                activeIndex === i
                  ? "bg-black/40 backdrop-blur-[1px]"
                  : "bg-black/10 hover:bg-black/20"
              }
              md:h-auto h-[200px] sm:h-[250px]
            `}
          >
            <span className="uppercase text-sm tracking-widest font-karla">
              Visit
            </span>
            <h3 className="text-2xl font-semibold mt-2 font-messiri">
              {item?.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationSelector;
