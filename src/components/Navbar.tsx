import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className=" relative fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" className="h-16" />
      </div>
      {/* main menu */}
      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <div
        className="flex md:hidden z-10"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {mobileMenu ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* mobile menu */}
      <ul
        className={
          mobileMenu
            ? "  absolute top-0  left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl z-in w-full hover:bg-gray-700 text-center">
          Home
        </li>
        <li className="py-6 text-4xl z-in w-full hover:bg-gray-700 text-center">
          About
        </li>
        <li className="py-6 text-4xl z-in w-full hover:bg-gray-700 text-center">
          Skills
        </li>
        <li className="py-6 text-4xl z-in w-full hover:bg-gray-700 text-center">
          Projects
        </li>
        <li className="py-6 text-4xl z-in w-full hover:bg-gray-900 text-center">
          Contact
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
