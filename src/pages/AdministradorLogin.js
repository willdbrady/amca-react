import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <form onSubmit={handleSubmit} name="loginForm">
      <input
        type="text"
        value={email} // Changed to email
        onChange={(e) => setEmail(e.target.value)} // Changed to setEmail
        placeholder="Email" // Changed placeholder to Email
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default AdministradorLogin;
