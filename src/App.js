import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import EventList from "./pages/EventList";
import Home from "./pages/Home";
import Administrador from "./pages/Administrador";
import AdministradorLogin from "./pages/AdministradorLogin";
import AdministradorRegister from "./pages/AdministradorRegister";

function App() {
  const [token, setToken] = React.useState(localStorage.getItem("authToken"));

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await axios.get("/protected", {
          headers: {
            "x-auth-token": token, // Send token in the request header
          },
        });
        if (response.status === 200) {
        }
      } catch (error) {
        console.error("Error fetching protected data:", error.response);
      }
    };

    if (token) {
      fetchProtectedData();
    }
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/administrador-de-sitio" element={<EventList />} />
        <Route
          path="/administrador-login"
          element={<AdministradorLogin setToken={setToken} />}
        />
        <Route path="/register" element={<AdministradorRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
