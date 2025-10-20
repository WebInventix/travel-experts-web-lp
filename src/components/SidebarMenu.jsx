// src/components/SidebarMenu.jsx
import React from "react";
import { IoClose } from "react-icons/io5";

const SidebarMenu = ({ isOpen, onClose, links }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 bg-black text-white shadow-lg z-[999] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 ">
        <h2 className="text-xl font-semibold font-roboto">Menu</h2>
        <button
          onClick={onClose}
          className="text-2xl hover:text-black transition"
        >
          <IoClose />
        </button>
      </div>

      {/* Nav Links */}
      <ul className="flex flex-col p-5 gap-4 font-karla font-medium">
        {links.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              onClick={onClose}
              className="block uppercase py-2 px-3 rounded-md hover:bg-gray-100 transition"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;
