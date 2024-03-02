import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="text-white">
      <div className="grid grid-cols-2 gap-16 items-start">
        <Image src="/images/about-image.jpg" alt="" width={500} height={500} />
        <div className="text-left flex flex-col h-full">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed
            augue lacus viverra vitae congue eu consequat. Feugiat in ante metus
            dictum at tempor commodo. Ut etiam sit amet nisl purus. Eget mauris
            pharetra et ultrices neque ornare. Cras pulvinar mattis nunc sed
            blandit libero. Sed nisi lacus sed viverra tellus in hac. Tristique
            magna sit amet purus gravida quis blandit turpis cursus. Duis at
            consectetur lorem donec massa sapien.
          </p>
          <div>
            <span>Skills</span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
