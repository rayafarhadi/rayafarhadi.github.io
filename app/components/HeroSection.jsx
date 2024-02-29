/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-7 place-self-center">
        <h1 className="text-white mb-4 text-6xl font-extrabold">
          {" "}
          Hello I'm Raya
        </h1>
        <p className="text-[#adb7be] mb-6 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit
          turpis, porta in dignissim eu, blandit in velit.
        </p>
        <button className="px-6 py3 w-fit rounded-full mr-4 bg-white text-black">
          Hire Me
        </button>
        <button className="px-6 py3 w-fit rounded-full bg-white text-black">
          Download Resume
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
