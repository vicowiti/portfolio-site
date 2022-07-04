import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="hero" className="bg-[#0a192f] w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl  text-[#ccd6f6] font-bold">
          Victor Owiti
        </h1>
        <h2 className="text-4xl sm:text-7xl text-[#8892b0] font-bold">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full stack developer specializing in building secure,
          accessibility oriented digital experiences. I am always seeking to
          learn and apply new technologies.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="group text-white border-2 px-6 py-3 my-2 flex items-center gap-2 hover:bg-green-600 hover:border-green-600 hover:shadow-lg">
              View Work{" "}
              <span className="group-hover:rotate-90 duration-500">
                <HiArrowNarrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
