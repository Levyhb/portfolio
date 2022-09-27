import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Navbar.css";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
  const [menu, setMenu] = useState();

  return (
    <nav className="navbar">
      <div className="nav-link-tag">
        <NavLink to="/" activeClassName="active" className="nav-item">
          &lt; /&gt;
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink to="/" activeclassname="active" className="nav-item">
          Sobre mim
        </NavLink>

        <NavLink to="/projects" activeClassName="active" className="nav-item">
          Projetos
        </NavLink>

        <NavLink to="/contact" activeClassName="active" className="nav-item">
          Contato
        </NavLink>
      </div>
      <div className={menu ? "menu active-menu" : "menu"}>
        <Hamburger onToggle={() => setMenu(!menu)} toggled={ menu }/>
        {menu ? (
          <div className="menu-container">
            <NavLink to="/" activeclassname="active" className="nav-menu" onClick={ () => setMenu(!menu)}>
              Sobre mim
            </NavLink>
            <NavLink
              to="/projects"
              activeClassName="active"
              className="nav-menu"
              onClick={ () => setMenu(!menu)}
            >
              Projetos
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="active"
              className="nav-menu"
              onClick={ () => setMenu(!menu)}
            >
              Contato
            </NavLink>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
