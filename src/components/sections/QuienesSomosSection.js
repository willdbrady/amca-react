import React from "react";
import "./QuienesSomosSection.css";
import Circle from "../../assets/images/circle.webp";
import Guitar from "../../assets/images/guitar.webp";
import Hat from "../../assets/images/hat.webp";

const QuienesSomosSection = () => {
  return (
    <section id="section-1" className="section-example">
      <img id="quienes" class="guitar" src={Guitar} alt="" />
      <img src={Hat} class="hat" alt="" />
      <img className="circle" id="circleOne" src={Circle} alt="" />
      <img className="circle" id="circleTwo" src={Circle} alt="" />
      <img className="circle" id="circleThree" src={Circle} alt="" />
      <img className="circle" id="circleFour" src={Circle} alt="" />
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
