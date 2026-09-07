import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        Learn Map
      </div>

      {/* Login */}
      <button
        className="login-btn"
        onClick={() => navigate("/login")}
      >
        Login
      </button>

      {/* Navigation Links */}
      <div className="nav-links">
  <a href="/">Home</a>
  <a href="#subjects">Subjects</a>
  <a href="/about">About</a>

  <button
    className="dashboard-nav-btn"
    onClick={() => navigate("/dashboard")}
  >
    Dashboard
  </button>
</div>
    </nav>
  );
}

export default Navbar;