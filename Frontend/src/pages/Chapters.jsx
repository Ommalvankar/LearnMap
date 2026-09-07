import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import quizData from "../data/quizData";
import "./Chapters.css";

function Chapters() {
  const { subject } = useParams();
  const navigate = useNavigate();

  const selectedSubject =
    quizData[subject];

  if (!selectedSubject) {
    return (
      <div className="chapters-page">
        <div className="chapters-header">
          <h1>Subject Not Found</h1>

          <button
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const chapters =
    selectedSubject.chapters;

  return (
    <div className="chapters-page">

      <div className="chapters-header">

        <button
          className="chapters-back-btn"
          onClick={() => navigate("/")}
        >
          ← Back
        </button>

        <p>LEARN MAP</p>

        <h1>
          {selectedSubject.title}
        </h1>

        <span>
          Choose a chapter to start your quiz
        </span>

      </div>

      <div className="chapters-container">

        <div className="chapters-grid">

          {Object.entries(chapters).map(
            ([chapterKey, chapter], index) => (

              <div
                className="chapter-card"
                key={chapterKey}
                onClick={() =>
                  navigate(
                    `/quiz/${subject}/${chapterKey}`
                  )
                }
              >

                <div className="chapter-number">
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </div>

                <div className="chapter-info">

                  <h2>
                    {chapter.title}
                  </h2>

                  <p>
                    {chapter.questions?.length ||
                      0}{" "}
                    Questions
                  </p>

                </div>

                <button>
                  Start →
                </button>

              </div>

            )
          )}

        </div>

      </div>

    </div>
  );
}

export default Chapters;