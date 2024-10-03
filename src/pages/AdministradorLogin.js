import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import AMCAStamp from "../assets/images/AMCA-Stamp.webp";
import "./AdministradorLogin.css";

const AdministradorLogin = ({ setToken }) => {
  const [email, setEmail] = useState(""); // Changed to email
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email, password });
    try {
      const response = await axios.post("/login", { email, password });
      setToken(response.data.token);
      localStorage.setItem("authToken", response.data.token);
      navigate("/administrador");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="LoginPage">
      <img src={AMCAStamp} />
      <h2>Inicio de sesión de administrador: </h2>
      <form onSubmit={handleSubmit} name="loginForm" id="loginForm">
        <input
          className="LoginInput"
          type="text"
          value={email} // Changed to email
          onChange={(e) => setEmail(e.target.value)} // Changed to setEmail
          placeholder="Email" // Changed placeholder to Email
        />
        <input
          className="LoginInput"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
        <a className="GoBack" href="/">
          Volver a la página de inicio
        </a>
      </form>
    </div>
  );
};

export default AdministradorLogin;
