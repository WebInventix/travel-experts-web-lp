// src/components/SidebarMenu.jsx
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const SidebarMenu = ({ isOpen, onClose, links }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [openSubIndex, setOpenSubIndex] = useState(null);

  const toggleMain = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    setOpenSubIndex(null);
  };

  const toggleSub = (index) => {
    setOpenSubIndex(openSubIndex === index ? null : index);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 bg-black text-white shadow-lg z-[1001] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-gray-700">
        <h2 className="text-xl font-semibold font-roboto">Menu</h2>
        <button
          onClick={onClose}
          className="text-2xl hover:text-gray-300 transition"
        >
          <IoClose />
        </button>
      </div>

      {/* Scrollable Menu Content */}
      <div className="h-[calc(100%-64px)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <ul className="flex flex-col p-5 gap-2 font-karla font-medium text-sm">
          {links.map((item, index) => (
            <li key={index}>
              <div
                className={`flex items-center justify-between py-2 px-3 rounded-md cursor-pointer hover:bg-white/10 transition ${
                  openIndex === index ? "bg-white/10" : ""
                }`}
                onClick={() => (item.sublinks ? toggleMain(index) : onClose())}
              >
                <a
                  href={item.link}
                  className="uppercase w-full"
                  onClick={!item.sublinks ? onClose : undefined}
                >
                  {item.name}
                </a>
                {item.sublinks && (
                  <RiArrowDropDownLine
                    size={24}
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </div>

              {/* Sub Links */}
              {openIndex === index && item.sublinks && (
                <ul className="pl-5 mt-1 flex flex-col gap-1">
                  {item.sublinks.map((sub, subIndex) => (
                    <li key={subIndex}>
                      <div
                        className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer hover:bg-white/10 transition"
                        onClick={() =>
                          sub.sublinks ? toggleSub(subIndex) : onClose()
                        }
                      >
                        <a href={sub.link} className="uppercase w-full">
                          {sub.name}
                        </a>
                        {sub.sublinks && (
                          <RiArrowDropDownLine
                            size={20}
                            className={`transition-transform ${
                              openSubIndex === subIndex
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        )}
                      </div>

                      {/* Nested sublinks */}
                      {openSubIndex === subIndex && sub.sublinks && (
                        <ul className="pl-5 mt-1 flex flex-col gap-1">
                          {sub.sublinks.map((nested, nestedIndex) => (
                            <li key={nestedIndex}>
                              <a
                                href={nested.link}
                                className="block uppercase py-2 px-3 rounded-md hover:bg-white/10 transition"
                                onClick={onClose}
                              >
                                {nested.name}
                              </a>
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
      </div>
    </div>
  );
};

export default SidebarMenu;
