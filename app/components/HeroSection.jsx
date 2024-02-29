/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7 place-self-center">
        <h1 className="text-white mb-4 text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-700">
            Hello I'm{" "}
          </span>
          Raya Farhadi
        </h1>
        <p className="text-[#adb7be] mb-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit
          turpis, porta in dignissim eu, blandit in velit.
        </p>
        <button className="px-6 py-3 w-fit rounded-full mr-4 bg-gradient-to-br from-teal-300 to-blue-700 text-white">
          Hire Me
        </button>
        <button className="px-1 py-1 w-fit rounded-full bg-gradient-to-br from-teal-300 to-blue-700 text-white">
          <span className="px-5 py-2 block bg-[#121212] hover:bg-slate-800 rounded-full">Download Resume</span>
        </button>
      </div>
      <div className="col-span-5 place-self-center">
        <div className="rounded-full bg-[#181818] w-[350px] h-[350px] relative">
          <Image
            src="/images/hero-image.png"
            alt="hero image"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
