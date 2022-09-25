import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Home.css";

import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  HiOutlineMail,
  HiDocument,
  HiOutlineDocumentDownload,
} from "react-icons/hi";
import { BiArrowToTop } from "react-icons/bi";
import { MdContacts } from "react-icons/md";

import Technologies from "../components/Technologies";
import perfil from "../imgs/perfil.jpeg";
import tech from "../imgs/tech-img.png";
import programmer from "../imgs/programmer.png";
import Scroll from "../components/Scroll";
import curriculo from "../doc/Curriculo-levy.pdf";

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
                fontSize: "3rem",
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
                sequence={[
                  1500,
                  "Aprendizado.",
                  3000,
                  "uma oportunidade profissional.",
                  3000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1.4rem", color: "#c7c7c7" }}
              />
            </p>
          </div>

          <div className="social">
            <a
              href="https://www.linkedin.com/in/levy-bezerra-holanda/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin /> Linkedin
            </a>
            <a
              href="https://github.com/Levyhb"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub /> Github
            </a>
            <a
              href="mailto:levybholanda@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail />
              Email
            </a>
            <a href={curriculo} target="_blank" rel="noreferrer" download>
              <HiOutlineDocumentDownload />
              Download CV
            </a>
          </div>
        </div>
        <div className="programmer-img">
          <img src={programmer} alt="programmer" />
        </div>
      </section>

      <Technologies />

      <Scroll title="Sobre mim" top="700" />

      <section className="about-me-section">
        <div className="about-me">
          <div className="about-me-img">
            <img src={perfil} alt="img-perfil" />
          </div>
          <div className="about-me-info">
            <h2>
              &lt; <span>Sobre mim</span> /&gt;
            </h2>
            <p>
              Olá, eu sou <span className="about-me-name">Levy Bezerra Holanda</span>, tenho 21 anos, moro em
              Fortaleza, no Ceará. Sou um curioso e apaixonado por Tecnologia, e
              por marcas que trabalhem para contribuir com inovações digitais.
              Trabalhei como Aprendiz de Ti na <span className="about-me-name">M. Dias Branco</span> por um ano e meio,
              onde pude adquirir bastante conhecimento e conexões, foi o
              primeiro grande passo na minha vida profissional. Atualmente,
              estou estudando Desenvolvimento Web full stack na <span className="about-me-name">Trybe</span>, onde
              pretendo continuar me desenvolvendo para iniciar minha carreira
              com programação. Trabalho e acredito em ações que possam gerar um
              impacto positivo na vida das pessoas.
            </p>
          </div>
        </div>
        <Scroll title="Tecnologias que eu domino" top="1350" />
      </section>

      <section className="technologies-section">
        <div className="tech-contents">
          <div className="about-technologies">
            <h2 className="title-technologies">
              &lt; <span>Quais tecnologias eu domino?</span> /&gt;
            </h2>
            <p>
              Gosto de trabalhar com metodologias ágeis como Scrum e Kanban, em
              Front end eu desenvolvo com: HTML5, CSS3, JavaScript ES6,
              TypeScript, React.js, React Native, React Router, Redux, Context
              API, React Hooks, Bootstrap, Tailwind CSS. Realizo testes
              unitários com Jest. Possuo domínio com ferramentas como o Unix
              &#38; Bash, Git, Github.
            </p>
          </div>
          <div className="tech-imgs">
            <img src={tech} alt="technologies" />
          </div>
        </div>
        <Technologies />
        <div className="links-contents">
          <Link
            to="/"
            onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
          >
            Voltar ao topo <BiArrowToTop />{" "}
          </Link>
          <Link
            to="/projects"
            onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
          >
            Veja meus projetos <HiDocument />
          </Link>
          <Link
            to="/contact"
            onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
          >
            Entre em contato comigo <MdContacts />
          </Link>
        </div>
      </section>
    </div>
  );
}
