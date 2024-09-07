import React from "react";
import ListForNuestraComunidad from "../../ListForNuestraComunidad";
import "./NuestraComunidad.css";

const NuestraComunidad = () => {
  return (
    <div className="nuestra-comunidad">
      <h2>Nuestra Comunidad</h2>
      <div className="nuestra-comunidad-cards">
        {ListForNuestraComunidad.map((item) => (
          <div className="nuestra-comunidad-card" key={item.id}>
            <img src={item.image} alt="" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NuestraComunidad;
