import React from "react";
import { jwtDecode } from "jwt-decode"; // No need to destructure
import { Navigate } from "react-router-dom";

const Administrador = () => {
  const token = localStorage.getItem("authToken");

  if (!token) {
    return <Navigate to="/administrador-login" />;
  }

  const decoded = jwtDecode(token);

  // Check if the token has expired
  const currentTime = Date.now() / 1000; // Convert time to seconds
  if (decoded.exp < currentTime) {
    // Token has expired
    localStorage.removeItem("authToken"); // Clear the expired token
    return <Navigate to="/administrador-login" />;
  }

  return <>Admin Page</>;
};

export default Administrador;
