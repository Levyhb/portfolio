import React, { useState } from "react";
import "../styles/pages/Projects.css";

export default function ProjectCard({ name, gif, image, link, repository }) {
  const [handleGif, setHandleGif] = useState(false);

  return (
    <div key={name} className="project-card">
      <h2 className="project-name">{name}</h2>
      <a href={link} target="_blank" rel="noreferrer">
        <img
          src={handleGif ? gif : image}
          alt={name}
          className="media"
          onMouseEnter={() => setHandleGif(true)}
          onMouseLeave={() => setHandleGif(false)}
        />
      </a>
      <div className="project-buttons">
        <button type="button">Mais detalhes</button>
          <a href={ repository } target="_blank" rel="noreferrer">
        <button type="button">
            Repositório
        </button>
            </a>
      </div>
    </div>
  );
}
