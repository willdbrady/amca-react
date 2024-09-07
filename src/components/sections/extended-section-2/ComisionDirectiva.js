import React from "react";
import MemberList from "../../ListOfMembers";
import "./ComisionDirectiva.css";
import NuestraComunidad from "./NuestraComunidad";
import HaceteSocio from "./HaceteSocio";
import PreguntasFrequentes from "./PreguntasFrequentes";

const ComisionDirectiva = () => {
  return (
    <section id="section-2">
      <div className="comision-directiva">
        <h2>Comisión directiva</h2>
        <div className="comision-directiva-cards">
          {MemberList.map((item) => (
            <div className="member-card" key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <NuestraComunidad />
      <HaceteSocio />
      <PreguntasFrequentes />
    </section>
  );
};

export default ComisionDirectiva;
