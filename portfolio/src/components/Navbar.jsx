import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <NavLink to="/" activeClassName="active" className="nav-item">
          &lt; /&gt;
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/" activeclassname="active" className="nav-item">
          Sobre mim
        </NavLink>

        <NavLink
          to="/projects"
          activeClassName="active"
          className="nav-item"
        >
          Projetos
        </NavLink>

        <NavLink
          to="/contact"
          activeClassName="active"
          className="nav-item"
        >
          Contato
        </NavLink>

      </div>
    </nav>
  );
}
