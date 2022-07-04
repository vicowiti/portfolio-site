import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaGithub, FaTimes, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLinkItem from "./NavLinkItem";
import MobileLinkItem from "./MobileLinkItem";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const handleClick = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div className=" fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" className="h-16" />
      </div>
      {/* main menu */}
      <ul className="hidden md:flex">
        <NavLinkItem item="Home" name="hero" />
        <NavLinkItem item="About" name="about" />
        <NavLinkItem item="Skills" name="skills" />
        <NavLinkItem item="Projects" name="projects" />
        <NavLinkItem item="Contacts" name="contact" />
      </ul>

      <div className="flex md:hidden z-10" onClick={handleClick}>
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
        <MobileLinkItem item="Home" name="hero" handleClick={handleClick} />
        <MobileLinkItem item="About" name="about" handleClick={handleClick} />
        <MobileLinkItem item="Skills" name="skills" handleClick={handleClick} />
        <MobileLinkItem
          item="Projects"
          name="projects"
          handleClick={handleClick}
        />
        <MobileLinkItem
          item="Contacts"
          name="contact"
          handleClick={handleClick}
        />
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col left-0 top-[35%]">
        <ul>
          <li className="h-[60px] w-[160px] ml-[-100px] flex justify-between items-center hover:ml-[0] duration-500 bg-blue-600">
            <a
              href="https://www.linkedin.com/in/victor-owiti/"
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="h-[60px] w-[160px] ml-[-100px] flex justify-between items-center hover:ml-[0] duration-500 bg-[#333]">
            <a
              target="_blank"
              href="https://github.com/vicowiti"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="h-[60px] w-[160px] ml-[-100px] flex justify-between items-center hover:ml-[0] duration-500 bg-[#c92a2a]">
            <a
              target="_blank"
              href="mailto:viowiti12@gmail.com"
              className="flex justify-between items-center w-full text-green-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="h-[60px] w-[160px] ml-[-100px] flex justify-between items-center hover:ml-[0] duration-500 bg-[#566]">
            <a
              download={true}
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
