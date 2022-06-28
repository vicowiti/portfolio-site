import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Victor, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              User-centered design and development is my forte. Ensuring the
              needs of the user are transformed into working solutions. I love
              to challenge myself every day, learn new technologies, and to see
              a project grow from an idea to a problem-solving product or
              feature. Literal chills!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
