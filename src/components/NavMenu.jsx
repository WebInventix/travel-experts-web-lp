import React from "react";

const NavMenu = ({ links = [], linkClassName, wrapperClassName }) => {
  return (
    <>
      <ul className={wrapperClassName}>
        {links?.map((page, index) => (
          <li key={index} className="my-2">
            <a href={page?.link} className={linkClassName}>
              {page?.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
