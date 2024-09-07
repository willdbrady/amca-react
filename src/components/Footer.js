import React from "react";
import "./Footer.css";
import AMCAStamp from "../assets/images/AMCA-Stamp.webp";
import InstagramLogo from "../assets/images/socials/instagram.svg";
import FacebookLogo from "../assets/images/socials/facebook.svg";
import WhatsappLogo from "../assets/images/socials/whatsapp.svg";
import LinkedinLogo from "../assets/images/socials/linkedin.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={AMCAStamp} alt="" />
      </div>
      <div>
        2024 © ASOCIACION MÚSICA COUNTRY DE ARGENTINA <br />
        Todos los derechos reservados
      </div>
      <div>
        <a href="https://www.facebook.com/AsociacionMusicaCountryArgentina">
          <img src={FacebookLogo} alt="" />
          Facebook
        </a>
        <a href="https://www.instagram.com/musicacountryargentina">
          <img src={InstagramLogo} alt="" />
          Instagram
        </a>
        <a href="https://www.linkedin.com/company/asociaci%C3%B3n-de-m%C3%BAsica-country-argentina">
          <img src={LinkedinLogo} alt="" /> LinkedIn
        </a>
      </div>
      <div>
        <a href="mailto:amcountry@gmail.com">amcountry@gmail.com</a>
        <a href="mailto:amca.prensaydifusión@gmail.com">
          amca.prensaydifusión@gmail.com
        </a>
        <a href="tel:+54 11 6891-5155">
          <img class="whatsapp-icon" src={WhatsappLogo} alt="" />
          +54 11 6891-5155
        </a>
      </div>
    </footer>
  );
};

export default Footer;
