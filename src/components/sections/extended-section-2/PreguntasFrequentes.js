import React from "react";
import "./PreguntasFrequentes.css";
import Accordion from "../AccordionChunk";

const PreguntasFrequentes = () => {
  return (
    <div className="preguntas-frequentes-wrapper">
      <div className="inner-wrapper">
        <h1>Preguntas Frequentes</h1>
        <Accordion />
      </div>
    </div>
  );
};

export default PreguntasFrequentes;
