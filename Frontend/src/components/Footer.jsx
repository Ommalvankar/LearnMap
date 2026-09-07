import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* Logo / About */}
        <div className="footer-section">
          <h2>Learn Map</h2>

          <p>
            Make learning fun, simple, and interactive
            with exciting quizzes.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="#subjects">Subjects</a>
          <a href="/about">About</a>
        </div>

        {/* Subjects */}
        <div className="footer-section">
          <h3>Subjects</h3>

          <a href="#subjects">English</a>
          <a href="#subjects">Mathematics</a>
          <a href="#subjects">Science</a>
          <a href="#subjects">Computer Science</a>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>
          © 2026 Learn Map. All Rights Reserved.
        </p>
      </div>

    </footer>
  );
}

export default Footer;