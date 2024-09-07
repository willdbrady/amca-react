import React from "react";
import AmcaStamp from "../assets/images/AMCA-Stamp.webp";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="nav-bar">
      <div className="nav-logo">
        <a href="#home" id="home-link">
          <img src={AmcaStamp} alt="" className="logo-container" href="#home" />
        </a>
        <button className="nav-togle-btn" id="menu-toggle"></button>
      </div>
      <div className="nav-buttons-wrapper">
        <ul className="nav-sections" id="nav-sections">
          <a href="/#section-1">
            <li className="nav-links" id="link-1">
              Quienes Somos
            </li>
          </a>
          <a href="/#section-2">
            <li className="nav-links" id="link-2">
              Socios
            </li>
          </a>
          <a href="/#section-3">
            <li className="nav-links" id="link-3">
              Festivales
            </li>
          </a>
          <a href="/#section-4">
            <li className="nav-links" id="link-4">
              Contacto
            </li>
          </a>
        </ul>
        <a href="/#haceteSocio" className="hacete-socio-link">
          Hacete Socio
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
