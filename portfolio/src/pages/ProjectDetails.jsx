import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../projects/project";
import { AiFillGithub } from "react-icons/ai";
import { HiDocument, HiDocumentText } from "react-icons/hi";
import { MdComputer } from "react-icons/md";
import { TbViewportWide } from "react-icons/tb";
import "../styles/pages/ProjectDetails.css";
import convertTechnologies from "../helpers/convertTechnologies";
import "../styles/components/Technologies.css";

export default function ProjectDetails() {
  const [project, setproject] = useState();
  const { id } = useParams();

  const findProject = () => {
    const idToNumber = Number(id);
    const projectById = PROJECTS.find((e) => e.id === idToNumber);
    setproject(projectById);
  };

  useEffect(() => {
    findProject();
  }, []);

  return (
    <div className="project-details-container">
      {!project ? (
        <p>Carregando...</p>
      ) : (
        <div className="project-details-card">
          <h2 className="project-details-title">{project.name}</h2>
          <img
            src={project.gif}
            alt={`${project.name} gif`}
            className="preview-project"
          />
          <div className="project-details-info">
            <h3 className="describe">
              Descrição <HiDocumentText />
            </h3>
            <p>{project.describe}</p>
            <div className="viewport">
              <h4><TbViewportWide /> Viewport:</h4>
              <p>{project.viewport}</p>
            </div>
          </div>

          <div className="project-details-info">
            <h3 className="technologies-title">
              Tecnologias ultilizadas <MdComputer />
            </h3>
            <div className="technologies">
              {project.technologies.map((projectData) =>
                convertTechnologies(projectData)
              )}
            </div>
          </div>

          <div className="details-buttons">
            <a href={project.repository} target="_blank" rel="noreferrer">
              <button>
                Repositório do projeto <AiFillGithub />
              </button>
            </a>
            <a href={project.deploy} target="_blank" rel="noreferrer">
              <button>
                Acessar Projeto <HiDocument />
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
