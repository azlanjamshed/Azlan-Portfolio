import React from "react";
import ProjectCard from "../Components/ProjectCard";
import projects from "../assets/projects";
import Heading from "../Components/Heading";

const Projects = () => {
  return (
    <>
      <div id="projects" className="bg-slate-50/50 py-20 md:py-32">
        {/* <div className="container mx-auto px-4 max-w-6xl text-center mb-5">
          <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-2">
            Projects
          </h2>
        </div> */}
        <Heading title="Projects" />
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            type={project.type}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            gitLink={project.gitLink}
            status={project.status}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
