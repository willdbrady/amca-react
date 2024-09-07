import React from "react";
import DividerSvg from "../assets/images/decorative-elements/Vector-1.svg";
import "./ContactoSectionDivider.css";

const ContactoSectionDivider = () => {
  return (
    <div className="svg-wrapper">
      <img className="contacto-svg" src={DividerSvg} alt="" />
    </div>
  );
};

export default ContactoSectionDivider;
