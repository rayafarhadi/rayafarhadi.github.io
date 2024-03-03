import React from "react";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-32 rounded-t-xl"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="bg-[#181818] rounded-b-xl py-6 px-4 text-white">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-text-secondary mb-2">{description}</p>
        <div className="flex flex-row justify-between">
          <p>Tech used</p>
          <div>
            <Link href={gitUrl} className="mr-2">
              Git
            </Link>
            <Link href={previewUrl}>Preview</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
