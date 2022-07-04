import React from "react";
import { FaGithub, FaReact } from "react-icons/fa";
import { SiExpo, SiMaterialui } from "react-icons/si";
import goldGym from "../assets/projects/goldgym.png";
import nftMrkt from "../assets/projects/nftmkt.jpg";

const Projects = () => {
  return (
    <div
      name="projects"
      className="bg-[#0a192f] w-full min-h-screen text-gray-300"
    >
      <div className="mx-w-[1000px] mx-auto p-4 flex flex-col">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-green-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Projects container */}

        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 rounded-md">
          {/* project card */}
          <div className="rounded-md shadow-sm shadow-gray-300">
            <div
              style={{ backgroundImage: `url(${goldGym})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-t-md flex justify-center items-center mx-auto content-div"
            ></div>
            {/* tech stack */}
            <main className="px-3">
              <p className="flex gap-3 items-center my-3">
                Tech stack : <FaReact title="react" /> |{" "}
                <SiMaterialui title="materialui" />
              </p>
              <p className="text-sm">
                Golds Gym. Smash your fitness goals with our curated exercise
                guide. Exercises available based on available equipment, target
                muscles and exercise types. And what's more, you get assorted
                youtube videos for selected exercises, just in case you want to
                go overboard.🏋️
              </p>
            </main>
            <footer className="w-full h-14 flex justify-between">
              <a
                href="https://gym-gold.netlify.app/"
                target="_blank"
                className="w-[50%] flex justify-center items-center group"
              >
                <button className="text-2xl group-hover:border-b-4 duration-300 ">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/vicowiti/gold-s-gym"
                target="_blank"
                className="w-[50%] flex justify-center items-center group"
              >
                <button className="group-hover:scale-150 duration-300">
                  <FaGithub size={25} />
                </button>
              </a>
            </footer>
          </div>
          {/* project card */}
          <div className="rounded-md shadow-sm shadow-gray-300">
            <div
              style={{ backgroundImage: `url(${nftMrkt})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-t-md flex justify-center items-center mx-auto content-div"
            ></div>
            {/* tech stack */}
            <main className="px-3">
              <p className="flex gap-3 items-center my-3">
                Tech stack : <FaReact title="react-native" /> |{" "}
                <SiExpo title="expo" />
              </p>
              <p className="text-sm">
                NFTs are the new sensation. They've swept the world by storm.
                NFT marketplace is the frontend UI of an android app that allows
                users to search and bid on NFTs made available on the
                marketplace. Implementing a search feature and seeing previous
                bids by other users.
              </p>
            </main>
            <footer className="w-full h-14 flex justify-between">
              <a
                href="https://expo.dev/artifacts/eas/3wi49BHaagwpSN42PnAqTK.apk"
                target="_blank"
                className="w-[50%] flex justify-center items-center group"
              >
                <button className="text-2xl group-hover:border-b-4 duration-300 ">
                  Demo
                </button>
              </a>
              <a
                href="https://github.com/vicowiti/nft-marketplace"
                target="_blank"
                className="w-[50%] flex justify-center items-center group"
              >
                <button className="group-hover:scale-150 duration-300">
                  <FaGithub size={25} />
                </button>
              </a>
            </footer>
          </div>
          {/* Project card */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
