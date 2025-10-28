import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavMenu = ({ links = [], linkClassName, wrapperClassName }) => {
  const [openIndex, setOpenIndex] = useState(null); // Track which main dropdown is open
  const [openSubIndex, setOpenSubIndex] = useState(null); // Track which sublink dropdown is open

  // Handle mouse enter for main link
  const handleMainLinkMouseEnter = (index) => {
    setOpenIndex(index);
  };

  // Handle mouse leave for main link
  const handleMainLinkMouseLeave = () => {
    setOpenIndex(null);
  };

  // Handle mouse enter for sublink
  const handleSubLinkMouseEnter = (subIndex) => {
    setOpenSubIndex(subIndex);
  };

  // Handle mouse leave for sublink
  const handleSubLinkMouseLeave = () => {
    setOpenSubIndex(null);
  };

  return (
    <ul className={wrapperClassName}>
      {links?.map((page, index) => (
        <li
          key={index}
          className="my-2 relative group"
          onMouseEnter={() => handleMainLinkMouseEnter(index)} // Hover to show main dropdown
          onMouseLeave={handleMainLinkMouseLeave} // Leave to hide main dropdown
        >
          <a href={page.link} className={linkClassName}>
            {page.name}
          </a>

          {/* Main dropdown */}
          {openIndex === index && page.sublinks && (
            <ul className="sub-menu absolute left-0 top-full mt-1 bg-white text-black rounded-md shadow-lg py-2 w-48">
              {page.sublinks.map((subLink, subIndex) => (
                <li
                  key={subIndex}
                  className="relative"
                  onMouseEnter={() => handleSubLinkMouseEnter(subIndex)} // Hover to show sub-dropdown
                  onMouseLeave={handleSubLinkMouseLeave} // Leave to hide sub-dropdown
                >
                  <a
                    href={subLink.link}
                    className="mx-2 px-2 py-2 rounded-2xl hover:bg-black hover:text-white flex items-center"
                  >
                    {subLink.name} {<RiArrowDropDownLine size={24} />}
                  </a>

                  {/* Nested dropdown */}
                  {openSubIndex === subIndex && subLink.sublinks && (
                    <ul className="sub-menu absolute left-full top-0 mt-1 bg-white text-black rounded-md shadow-lg py-2 w-48 cursor-pointer uppercase">
                      {subLink.sublinks.map((nestedLink, nestedIndex) => (
                        <li
                          key={nestedIndex}
                          className="mx-2 p-2 hover:bg-black hover:text-white rounded-2xl"
                        >
                          <a href={nestedLink.link}>{nestedLink.name}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
