import React from "react";
import programmer from "../imgs/programmer.png";
import "../styles/pages/Home.css";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  return (
    <div className="home-container">
      <section className="presentation-section">
        <div className="presentation">
          <div className="title-presentation">
            <h1>
              {" "}
              <span className="emphasis-name">&lt;</span> Olá, eu sou o
            </h1>
            <TypeAnimation
              sequence={[500, "Levy Bezerra />"]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{
                fontSize: "2.8rem",
                color: " var(--primary-light)",
                fontWeight: "bold",
              }}
            />
            <p>
              Desenvolvedor front end
              <lord-icon
                src="https://cdn.lordicon.com/nobciafz.json"
                trigger="hover"
                colors="primary:#e4e4e4,secondary:#08a88a"
                style={{ width: "50px", height: "50px" }}
              ></lord-icon>
            </p>
          </div>

          <div className="info-presentation">
            <p>👨‍🎓 Estudante de Desenvolvimento Web full stack na Trybe.</p>
            <p>
              🚀 Em busca de{" "}
              <TypeAnimation
                className="typeAnimation"
                sequence={[1500, "Aprendizado.", 3000, "uma oportunidade profissional.", 3000]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1.4rem", color: "#c7c7c7" }}
              />
            </p>
          </div>

          <div className="social">
            <a href="https://www.linkedin.com/in/levy-bezerra-holanda/"  target="_blank" rel="noreferrer">
              <AiFillLinkedin /> Linkedin
            </a>
            <a href="https://github.com/Levyhb" target="_blank" rel="noreferrer">
              <AiFillGithub /> Github
            </a>
            <a href="mailto:levybholanda@gmail.com" target="_blank" rel="noreferrer">
              <HiOutlineMail />
              Email
            </a>
          </div>
        </div>
        <div className="programmer-img">
          <img src={programmer} alt="programmer" />
        </div>
      </section>
      <div className="technologies">
        
      </div>
    </div>
  );
}
