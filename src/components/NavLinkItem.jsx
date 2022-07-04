import React from "react";
import { Link } from "react-scroll";

const NavLinkItem = ({ item, name }) => {
  return (
    <li>
      <Link to={name} smooth={true} duration={500}>
        {item}
      </Link>
    </li>
  );
};

export default NavLinkItem;
