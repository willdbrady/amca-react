import React from "react";
import "./Popup.css";

const Popup = ({ title, description, image, closeModal }) => {
  return (
    <div className="PopupOverlay">
      <div className="popup">
        <h3>{title}</h3>
        <img src={image} />
        <p>{description}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Popup;
