import React from "react";
import CrossBoarImg from "../../assets/cross-boards.png";

const InfoCard = () => {
  return (
    <div className="bg-[#0E0A06] text-white p-5 rounded-2xl w-full h-full md:max-w-[420px] space-y-2 shadow-lg">
      <div className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center mb-2">
        {/* <FaPlus size={14} /> */}
        <img src={CrossBoarImg} alt="cross board image" />
      </div>
      <h3 className="text-sm md:text-base font-bold font-[Karla]">
        Join Our Asian Travel Trip
      </h3>
      <p className="text-xs text-white/70 font-[Roboto] leading-relaxed">
        Lorem ipsum dolor sit amet, aenean commodo ligula.
      </p>
    </div>
  );
};

export default InfoCard;
