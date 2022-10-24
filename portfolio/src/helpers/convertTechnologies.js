function convertTechnologies(technologie) {
  if (technologie === "javascript")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="javascript-icon"
      />
    );
  if (technologie === "html")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        alt="html-icon"
      />
    );

  if (technologie === "css")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        alt="css-icon"
      />
    );
  if (technologie === "react")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        alt="react-icon"
      />
    );
  if (technologie === "jest")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
        alt="jest-icon"
      />
    );
  if (technologie === "bootstrap")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        alt="bootstrap-icon"
      />
    );
  if (technologie === "git")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        alt="git-icon"
      />
    );
  if (technologie === "redux")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        alt="redux-icon"
      />
    );
  if (technologie === "tailwind")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
        alt="tailwind-icon"
      />
    );
  if (technologie === "typescript")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        alt="typescript-icon"
      />
    );
  if (technologie === "docker")
    return (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        alt="docker-icon"
      />
    );
  return "";
}

export default convertTechnologies;
