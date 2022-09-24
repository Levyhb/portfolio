import React, { useState } from 'react';
import "../styles/pages/Projects.css";


export default function ProjectCard({name, gif, image, link}) {
  const [handleGif, setHandleGif] = useState(false);

  return (
    <div key={name} className="project-card">
      <h2 className="project-name">{name}</h2>
      <a href={link}>
      <img
        src={handleGif ? gif : image}
        alt={name}
        className="media"
        onMouseEnter={() => setHandleGif(true)}
        onMouseLeave={() => setHandleGif(false)}
      />
      </a>
    </div>
  )
}
