import React from "react";
import "./HeroSection.css";
import AmcaStamp from "../../../assets/images/AMCA-Stamp.webp";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="main">
        <img className="amca-img" src={AmcaStamp} alt="" />
        {/* <div className="title-div">
          <h1>Asociación de Música <br> Country Argentina</h1>
          <div className="carousel" data-carousel>
              <button className="carousel-button prev" data-carousel-button="prev">&#8656;</button>
              <button className="carousel-button next" data-carousel-button="next">&#8658;</button>
              <ul data-slides>
                  <li className="slide" data-active>
                      <img src="assets/carousel-1.png" alt="Nature Image #1">
                  </li>
                  <li className="slide">
                      <img src="assets/carousel-3.jpg" alt="Nature Image #2">
                  </li>
                  <li className="slide">
                      <img src="assets/festivales/san-pedro.webp" alt="Nature Image #3">
                  </li>
              </ul>
          </div>
      </div> */}
        <div className="title-div">
          <h1>Asociación de Música Country Argentina</h1>
          <h2>
            <i>Unidos por la pasión del Country Music en Argentina.</i>
          </h2>
          <Link className="ver-eventos-link" to="#section-3">
            Ver nuestros eventos
          </Link>
          <Link className="hacete-socio-link" to="#haceteSocio">
            Hacete Socio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
