/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <h1> Hello I'm Raya</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam velit
        turpis, porta in dignissim eu, blandit in velit.
      </p>
      <button>Hire Me</button>
      <button>Download Resume</button>
      <Image 
        src="/images/hero-image.png"
        alt="hero image"
        width={300}
        height={300}
      />
    </div>
  );
};

export default HeroSection;
