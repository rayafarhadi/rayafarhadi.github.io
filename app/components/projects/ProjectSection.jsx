import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "Project 1 description",
    image: "/images/about-image.jpg",
    tech: [
      { id: 1, name: "NextJS" },
      { id: 2, name: "TailwindCSS" },
    ],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Paeez Fine Foods Website",
    description: "Project 2 description",
    image: "/images/about-image.jpg",
    tech: [
      { id: 1, name: "Wordpress" },
      { id: 2, name: "Javascript" },
      { id: 3, name: "PHP" },
    ],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Unleash Medicine Website",
    description: "Project 3 description",
    image: "/images/about-image.jpg",
    tech: [
      { id: 1, name: "Wix" },
      { id: 2, name: "Javascript" },
    ],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Product Catalogue App",
    description: "Project 4 description",
    image: "/images/about-image.jpg",
    tech: [{ id: 1, name: "Kotlin" }],
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
    </div>
  );
};

export default ProjectSection;
