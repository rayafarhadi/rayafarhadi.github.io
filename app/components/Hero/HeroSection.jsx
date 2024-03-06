"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12">
      <div className="col-span-7 place-self-center text-center sm:text-left">
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r theme-gradient">
            Hello I&apos;m{" "}
          </span>
          <br />
          <div className="hidden sm:block">
            <TypeAnimation
              sequence={[
                "Raya Farhadi",
                1000,
                "A Web Developer",
                1000,
                "A Mobile Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <div className="sm:hidden">
            <TypeAnimation
              sequence={[
                "Raya Farhadi",
                1000,
                "A Web Dev",
                1000,
                "A Mobile Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </h1>
        <p className="text-text-secondary mb-6 text-base sm:text-large lg:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit
          turpis, porta in dignissim eu, blandit in velit.
        </p>
        <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br theme-gradient text-white">
          Contact Me
        </button>
        <button className="px-1 py-1 w-full sm:w-fit rounded-full mt-3 sm:mt-0 bg-gradient-to-br theme-gradient text-white">
          <span className="px-5 py-2 block bg-background-primary hover:bg-slate-800 rounded-full">
            Download Resume
          </span>
        </button>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="rounded-full bg-background-secondary w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
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
