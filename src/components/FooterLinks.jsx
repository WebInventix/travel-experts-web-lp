import React from "react";

const FooterLinks = ({ heading, links = [] }) => {
  return (
    <div>
      <h3 className="text-[28px] font-semibold font-messiri mb-4 capitalize">
        {heading}
      </h3>
      <ul className="space-y-2 text-base font-normal text-white/70 font-roboto capitalize">
        {links?.map((page, index) => (
          <li key={index}>
            <a href={page?.link} className="hover:text-white">
              {page?.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
