import React from "react";
import { Link } from "react-scroll";

const MobileLinkItem = ({ item, name, handleClick }) => {
  return (
    <li className="py-6 text-4xl z-in w-full hover:bg-gray-700 text-center">
      <Link onClick={handleClick} to={name} smooth={true} duration={500}>
        {item}
      </Link>
    </li>
  );
};

export default MobileLinkItem;
