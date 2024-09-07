import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EventList from "./pages/EventList";
import Home from "./pages/Home";
import Administrador from "./pages/Administrador";
import AdministradorLogin from "./pages/AdministradorLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/administrador" element={<Administrador />} />
        <Route path="/administrador-de-sitio" element={<EventList />} />
        <Route path="/administrador-login" element={<AdministradorLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
