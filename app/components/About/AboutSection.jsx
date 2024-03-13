"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    id: "skills",
    content: (
      <div className="grid grid-cols-2">
        <ul className="list-disc px-5">
          <li>React</li>
          <li>Express</li>
          <li>Next</li>
          <li>Node.js</li>
          <li>Javascript</li>
        </ul>
        <ul className="list-disc px-5">
          <li>CSS</li>
          <li>HTML</li>
          <li>Java</li>
          <li>Kotlin</li>
          <li>Python</li>
        </ul>
      </div>
    ),
  },
  {
    id: "education",
    content: (
      <div>
        <h2 className="font-semibold">University of Toronto</h2>
        <p className="mt-2">
          <span>Class of 2023</span>
          <br />
          Bachelor of Science - Computer Science
        </p>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 md:grid-rows-2 gap-8 py-4 lg:py-8 xl:py-16 items-center">
        <div className="px-1 py-1 w-full sm:w-fit row-span-2 rounded-md mt-3 sm:mt-0 bg-gradient-to-br theme-gradient">
          <Image
            className="rounded-md"
            src="/images/about-image.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            I am a full stack web developer driven by a passion for creating
            interactive and responsive web applications. Proficine in
            Javascript, React, Node.js, Express, HTML, CSS and Kotlin. I
            continually seek growth and am always looking to expand my knowledge
            and skill set. I am a team player and I am excited to contribute to
            the creation of exceptional applications.
          </p>
        </div>
        <div className="mt-4 md:mt-0 col-start-2 place-self-start flex flex-col items-start">
          <div className="flex flex-row">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab == "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab == "education"}
            >
              Education
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
