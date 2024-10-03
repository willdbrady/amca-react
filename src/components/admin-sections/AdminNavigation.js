import React from "react";
import AMCAStamp from "../../assets/images/AMCA-Stamp.webp";
import { useNavigate } from "react-router-dom";
import "./AdminNavigation.css";

const AdminNavigation = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Clear the token from localStorage
    alert("You have been logged out.");
    navigate("/administrador-login"); // Redirect to the login page
  };

  return (
    <nav className="admin-navigation">
      <img src={AMCAStamp} className="nav-logo" />
      <button
        onClick={handleLogout}
        className="hacete-socio-link logout-button"
      >
        Logout
      </button>
    </nav>
  );
};

export default AdminNavigation;
