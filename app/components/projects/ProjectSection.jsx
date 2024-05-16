import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "I created this site as a place for me to showcase myself and my projects. I used my first portfolio as a way to learn HTML and CSS, but now that I have some more experience under my belt I decided to give it a Nextjs upgrade. I'm looking forward to giving this site some more upgrades in the future as I learn more and build my skillset.",
    image: "/images/about-image.jpg",
    tech: [
      { id: 1, name: "NextJS" },
      { id: 2, name: "TailwindCSS" },
    ],
    gitUrl: "https://github.com/rayafarhadi/Portfolio-Website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Paeez Fine Foods Website",
    description:
      "Paeez is a persian grocery store that filled a niche in the market in an area that was lacking and asking for food and products from that part of the world. This site was created to be an entry point for new customers to discover the store and the rich culture that it provides.",
    image: "/images/PaeezScreenshot.PNG",
    tech: [
      { id: 1, name: "Wordpress" },
      { id: 2, name: "Javascript" },
      { id: 3, name: "PHP" },
    ],
    gitUrl: "/",
    previewUrl: "https://www.paeezfinefoods.ca",
  },
  {
    id: 3,
    title: "Unleash Medicine Website",
    description:
      "Unleash Medicine was a non-profit that focused on helping aspiring medical students gain access to a field that has a daunting financial barrier to entry. (Unforunately, Unleash is no longer operating so this is just a preview of the former site) ",
    image: "/images/UnleashScreenshot.PNG",
    tech: [
      { id: 1, name: "Wix" },
      { id: 2, name: "Javascript" },
    ],
    gitUrl: "/",
    previewUrl: "https://luxlux1310.wixsite.com/unleash",
  },
];

const WIPProjectData = [
  {
    id: 4,
    title: "Golaso!",
    description:
      "A passion side project I am working on in my spare time. A soccer themed autobattler game. The game is not currently in a complete enough state to share as I am currently working on learning to use the Godot game engine effectively but if you are interested in the idea I will be posting the github here when it is in a state I am happy with. If you dont want to wait and want to chat about it feel free to send me a message!",
    image: "/images/soccer.jpg",
    tech: [
      { id: 1, name: "Godot" },
    ],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <div id="projects" className="text-white">
      <h2 className="text-4xl font-bold mt-0 xl:mt-4 mb-12">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techUsed={project.tech}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
      <h2 className="text-4xl font-bold mt-12 mb-12">My Current WIP Project</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
        {WIPProjectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techUsed={project.tech}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
