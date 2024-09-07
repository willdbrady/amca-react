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
          <form action="">
            <input type="text" placeholder="Nombre y apellido" />
            <input type="text" placeholder="Electrónico correo" />
            <input type="text" placeholder="Asunto" />
            <textarea name="" id="" placeholder="Tu mensaje..." />
            <input className="submit-button" type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
