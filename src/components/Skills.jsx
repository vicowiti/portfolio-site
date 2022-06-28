import React from "react";
import CSS from "../assets/css.png";
import HTML from "../assets/html.png";
import JS from "../assets/javascript.png";
import NODE from "../assets/node.png";
import REACT from "../assets/react.png";
import RN from "../assets/rnative.jpg";
import TAILWIND from "../assets/tailwind.png";
import TS from "../assets/typescript.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] text-gray-300 w-full h-screen">
      {/* Container */}
      <div className="mx-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Skills
          </p>
          <p className="py-4">These are the technologies I've worked with</p>
        </div>

        {/* Container for icons */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="html logo" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={CSS} alt="css logo" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={JS} alt="javascript logo" className="w-20 mx-auto" />
            <p className="my-4">Javascript</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={NODE} alt="nodejs logo" className="w-20 mx-auto" />
            <p className="my-4">NodeJs</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={REACT} alt="react logo" className="w-20 mx-auto" />
            <p className="my-4">React Js</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={RN} alt="react native logo" className="w-20 mx-auto" />
            <p className="my-4">React Native</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={TAILWIND} alt="tailwind logo" className="w-20 mx-auto" />
            <p className="my-4">Tailwind Css</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={TS} alt="typescript logo" className="w-20 mx-auto" />
            <p className="my-4">Typescript</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
