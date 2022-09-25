import React from "react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../projects/project";
import "../styles/pages/Projects.css";

export default function Projects() {
  return (
    <div className="project-container">
      {PROJECTS.map((project) => (
        <ProjectCard
          key={project.id}
          id={ project.id }
          name={ project.name }
          image={ project.image }
          gif={ project.gif }
          link={ project.deploy }
          repository={ project.repository }
        />
      ))}
    </div>
  );
}
