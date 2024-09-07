import React from "react";
import "./QuienesSomosSection.css";

const QuienesSomosSection = () => {
  return (
    <section id="section-1" className="section-example">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="quienes-main">
        <h1>Quienes somos</h1>
        <p>
          Somos el punto de encuentro para artistas y aficionados de la Música
          Country en Argentina. Buscamos promover y difundir el género mediante
          la organización de eventos, la difusión de artistas y la generación de
          oportunidades para el crecimiento y desarrollo de la comunidad country
          en el país.
        </p>
      </div>
      <div className="quienes-somos-info-wrapper">
        <div>
          <h1>9 Años</h1>
          <p>Fundada en 2015</p>
        </div>
        <div>
          <h1>20+</h1>
          <p>Socios</p>
        </div>
        <div>
          <h1>2</h1>
          <p>Eventos Oganizados</p>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomosSection;
