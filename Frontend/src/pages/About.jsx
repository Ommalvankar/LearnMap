import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

function About() {
  return (
    <div className="about-page">

      <Navbar />

      <main>
        <section className="about-section">

          <div className="about-content">

            <p className="about-small-title">
              ABOUT LEARN MAP
            </p>

            <h2>
              Learning Made
              <span> Simple & Fun</span>
            </h2>

            <p className="about-description">
              Learn Map is an interactive learning platform designed to make
              education more enjoyable for school students. Students can explore
              different subjects, take quizzes, test their knowledge, and improve
              their skills in a fun and simple way.
            </p>

            <div className="about-features">

              <div className="about-feature">
                <div className="about-icon">📚</div>

                <div>
                  <h3>Learn</h3>
                  <p>
                    Explore different subjects and improve your knowledge.
                  </p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-icon">📝</div>

                <div>
                  <h3>Practice</h3>
                  <p>
                    Test yourself with interactive quizzes and questions.
                  </p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-icon">🏆</div>

                <div>
                  <h3>Improve</h3>
                  <p>
                    Track your results and continue improving your skills.
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="about-visual">

            <div className="about-circle">
              <div className="about-main-icon">🎓</div>
            </div>

            <div className="about-floating about-book">
              📖
            </div>

            <div className="about-floating about-star">
              ⭐
            </div>

            <div className="about-floating about-pencil">
              ✏️
            </div>

          </div>

        </section>
      </main>

      <Footer />

    </div>
  );
}

export default About;