import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {

  const navigate = useNavigate();

  return (

    <section className="hero">

      <div className="hero-content">

        <p className="hero-subtitle">
          WELCOME TO LEARN MAP
        </p>

        <h1>

          Make Learning
          <br />

          <span>
            Fun & Interactive
          </span>

        </h1>

        <p className="hero-text">

          Explore different subjects,
          test your knowledge, and
          improve your skills with
          fun quizzes.

        </p>

        <button
          className="hero-btn"
          onClick={() =>
            navigate(
              "/chapters/mathematics"
            )
          }
        >
          Start Quiz →
        </button>

      </div>

      <div className="hero-image">

        <div className="hero-circle">
          🧠
        </div>

        <div className="floating-item item-one">
          📚
        </div>

        <div className="floating-item item-two">
          ✏️
        </div>

        <div className="floating-item item-three">
          ⭐
        </div>

      </div>

    </section>
  );
}

export default Hero;