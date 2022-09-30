import React from "react";
import { BiArrowToTop } from "react-icons/bi";
import { TypeAnimation } from "react-type-animation";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../projects/project";
import "../styles/pages/Projects.css";

export default function Projects() {
  return (
    <div>
      <div className="projects-title-container">
        <h2 className="title-projects">
          <span className="type-animation-projects">&lt;</span> Veja alguns dos
        </h2>
        <TypeAnimation
          className="type-animation-projects"
          sequence={[800, "Principais projetos que realizei />"]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
        />
      </div>
      <div className="project-container">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            image={project.image}
            gif={project.gif}
            link={project.deploy}
            repository={project.repository}
          />
        ))}
        <h2
          to="/"
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
          className="back-to-top"
        >
          Voltar ao topo <BiArrowToTop />{" "}
        </h2>
      </div>
    </div>
  );
}
