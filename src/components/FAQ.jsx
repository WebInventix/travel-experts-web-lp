import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-white/20 pb-5 font-messiri font-semibold text-lg lg:text-xl">
      {/* Question */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleOpen}
      >
        <h3>{question}</h3>
        <FaChevronDown
          className={`text-white transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Answer */}
      {isOpen && (
        <p className="mt-3 text-white/70 font-normal text-base leading-relaxed font-karla">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;

// import React, { useState } from "react";
// import { FaChevronDown } from "react-icons/fa";

// const FAQ = ({ faqs }) => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <>
//       {faqs?.map((faq, index) => (
//         <div
//           key={index}
//           className="border-b border-white/20 pb-5 font-messiri font-semibold text-lg lg:text-xl"
//         >
//           {/* Question */}
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleFAQ(index)}
//           >
//             <h3>
//               {index + 1}. {faq}
//             </h3>
//             <FaChevronDown
//               className={`text-white transition-transform duration-300 ${
//                 openIndex === index ? "rotate-180" : ""
//               }`}
//             />
//           </div>

//           {/* Answer */}
//           {openIndex === index && (
//             <p className="mt-3 text-white/70 font-normal text-base leading-relaxed font-karla">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
//               vehicula magna vel lacus dictum, sed aliquet nunc cursus.
//             </p>
//           )}
//         </div>
//       ))}
//     </>
//   );
// };

// export default FAQ;
