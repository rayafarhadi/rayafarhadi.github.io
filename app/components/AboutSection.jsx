"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    id: "skills",
    content: (
      <ul className="list-disc px-5">
        <li>React.js</li>
        <li>Express.js</li>
        <li>Next.js</li>
        <li>Javascript</li>
        <li>TypeScript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>Java</li>
        <li>Python</li>
      </ul>
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
  {
    id: "experience",
    content: (
      <ul>
        <li>idk what to put here</li>
        <li>maybe change to something else</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("education");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <div className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 xl:gap-16 py-8 px-4 sm:py-16 xl:px-16 items-center">
        <div className="px-1 py-1 w-full sm:w-fit rounded-md mt-3 sm:mt-0 bg-gradient-to-br theme-gradient">
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
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
            augue lacus viverra vitae congue eu consequat. Feugiat in ante metus
            dictum at tempor commodo. Ut etiam sit amet nisl purus. Eget mauris
            pharetra et ultrices neque ornare. Cras pulvinar mattis nunc sed
            blandit libero. Sed nisi lacus sed viverra tellus in hac. Tristique
            magna sit amet purus gravida quis blandit turpis cursus. Duis at
            consectetur lorem donec massa sapien.
          </p>
          <div className="flex flex-row mt-8">
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
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab == "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
