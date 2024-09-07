import React from "react";
import CurvedVector from "../assets/images/decorative-elements/Vector-1.svg";
import "./HeroSectionDivider.css";

const SectionDivider = () => {
  return (
    <div className="svg-wrapper">
      <img className="quienes-svg" src={CurvedVector} alt="" />
    </div>
  );
};

export default SectionDivider;
