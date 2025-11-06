import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQGroup = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="border-b border-white/20 pb-5 font-messiri font-semibold text-lg lg:text-xl"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => handleClick(index)}
          >
            <h3>{faq.question}</h3>
            <FaChevronDown
              className={`text-white transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>

          {openIndex === index && (
            <p className="mt-3 text-white/70 font-normal text-base leading-relaxed font-karla">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </>
  );
};

export default FAQGroup;
