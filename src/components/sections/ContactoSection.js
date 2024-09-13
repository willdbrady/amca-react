import React from "react";
import "./ContactoSection.css";
import CountryContactoImage from "../../assets/images/country.webp";

const ContactoSection = () => {
  return (
    <section id="section-4" className="section-example">
      <h1>Contacto</h1>

      <div className="lower-section">
        <img className="country" src={CountryContactoImage} alt="" />
        <div className="contacto-form">
          <form action="POST" name="formaDeContacto">
            <input id="nombre" type="text" placeholder="Nombre y apellido" />
            <input
              id="electronico-correo"
              type="text"
              placeholder="Electrónico correo"
            />
            <input id="asunto" type="text" placeholder="Asunto" />
            <textarea id="mesanje" placeholder="Tu mensaje..." />
            <input className="submit-button" type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
