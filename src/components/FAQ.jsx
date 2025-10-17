import React from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQ = ({ faqs }) => {
  return (
    <>
      {faqs?.map((faq, index) => (
        <div
          key={index}
          className="border-b border-white/20 pb-5 font-messiri font-semibold text-lg lg:text-xl"
        >
          <div className="flex justify-between items-center">
            <h3>
              {index + 1}. {faq}
            </h3>
            <FaChevronDown
              className={"text-white transition-transform duration-300"}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default FAQ;
