import React from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const Administrador = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/administrador-login" />;
  }
  const decoded = jwtDecode(token);
  if (!decoded.isAdmin) {
    return <Navigate to="/administrador-login" />;
  }

  return <>Admin</>;
};

export default Administrador;
