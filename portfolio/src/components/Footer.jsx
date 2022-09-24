import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import "../styles/components/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/levy-bezerra-holanda/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin /> 
        </a>
        <a href="https://github.com/Levyhb" target="_blank" rel="noreferrer">
          <AiFillGithub /> 
        </a>
        <a
          href="mailto:levybholanda@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <HiOutlineMail />
          
        </a>
      </div>
      <p>
        developed by <a href="https://github.com/Levyhb">Levy Bezerra</a>
      </p>
    </footer>
  );
}
