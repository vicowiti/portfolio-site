import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaGithub, FaTimes, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

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
      <div className="hidden lg:flex fixed flex-col left-0 top-[35%]">
        <ul>
          <li className="h-[60px] w-[160px] ml-[-100px] flex justify-between items-center hover:ml-[0] duration-500 bg-blue-600">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="h-[60px] w-[160px] ml-[-100px] flex justify-between items-center hover:ml-[0] duration-500 bg-[#333]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="h-[60px] w-[160px] ml-[-100px] flex justify-between items-center hover:ml-[0] duration-500 bg-[#c92a2a]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-green-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="h-[60px] w-[160px] ml-[-100px] flex justify-between items-center hover:ml-[0] duration-500 bg-[#566]">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
