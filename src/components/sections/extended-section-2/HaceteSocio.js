import React from "react";
import "./HaceteSocio.css";
import ArrowSvg from "../../../assets/images/arrow.svg";

const HaceteSocio = () => {
  return (
    <div id="haceteSocio" className="hacete-socio-wrapper">
      <h1>Hacete Socio!</h1>
      <img src={ArrowSvg} alt="" />
      <a href="https://forms.gle/jJ1L1a2LmBXTBjBG6">Formularo de Inscripción</a>
    </div>
  );
};

export default HaceteSocio;
