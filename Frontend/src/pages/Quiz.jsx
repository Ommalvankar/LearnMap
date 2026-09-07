import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import quizData from "../data/quizData";
import "./Quiz.css";

function Quiz() {
  const { subject, chapter } = useParams();
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);

  const selectedSubject = quizData[subject];

  if (!selectedSubject) {
    return (
      <div className="quiz-page">
        <div className="question-card">
          <h2>Subject not found</h2>

          <button
            className="next-btn"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const selectedChapter = selectedSubject.chapters[chapter];

  if (!selectedChapter) {
    return (
      <div className="quiz-page">
        <div className="question-card">
          <h2>Chapter not found</h2>

          <button
            className="next-btn"
            onClick={() =>
              navigate(`/chapters/${subject}`)
            }
          >
            Back to Chapters
          </button>
        </div>
      </div>
    );
  }

  const questions = selectedChapter.questions;

  if (!questions || questions.length === 0) {
    return (
      <div className="quiz-page">
        <div className="question-card">
          <h2>No questions available</h2>

          <button
            className="next-btn"
            onClick={() =>
              navigate(`/chapters/${subject}`)
            }
          >
            Back to Chapters
          </button>
        </div>
      </div>
    );
  }

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (!selectedAnswer) {
      alert("Please select an answer!");
      return;
    }

    let newScore = score;

    if (
      selectedAnswer ===
      questions[currentQuestion].answer
    ) {
      newScore = score + 1;
      setScore(newScore);
    }

    if (
      currentQuestion <
      questions.length - 1
    ) {
      setCurrentQuestion(
        currentQuestion + 1
      );

      setSelectedAnswer("");
    } else {
      localStorage.setItem("quizScore", newScore);
localStorage.setItem("totalQuestions", questions.length);
localStorage.setItem("quizSubject", selectedSubject.title);
localStorage.setItem("quizChapter", selectedChapter.title);

localStorage.setItem("quizSubjectKey", subject);
localStorage.setItem("quizChapterKey", chapter);

navigate("/result");
    }
  };

  const progress =
    ((currentQuestion + 1) /
      questions.length) *
    100;

  return (
    <div className="quiz-page">

      <div className="quiz-header">

        <button
          className="quiz-back-btn"
          onClick={() =>
            navigate(`/chapters/${subject}`)
          }
        >
          ← Chapters
        </button>

        <p>LEARN MAP</p>

        <h1>
          {selectedSubject.title}
        </h1>

        <span>
          {selectedChapter.title}
        </span>

      </div>

      <div className="quiz-container">

        <div className="quiz-question-number">
          Question {currentQuestion + 1} of{" "}
          {questions.length}
        </div>

        <div className="quiz-progress">

          <div
            className="quiz-progress-bar"
            style={{
              width: `${progress}%`
            }}
          ></div>

        </div>

        <div className="question-card">

          <h2>
            {
              questions[currentQuestion]
                .question
            }
          </h2>

          <div className="options-container">

            {
              questions[
                currentQuestion
              ].options.map(
                (option, index) => (
                  <button
                    key={index}
                    className={`option-btn ${
                      selectedAnswer === option
                        ? "selected"
                        : ""
                    }`}
                    onClick={() =>
                      handleAnswer(option)
                    }
                  >

                    <span className="option-number">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    {option}

                  </button>
                )
              )
            }

          </div>

          <button
            className="next-btn"
            onClick={handleNext}
          >

            {currentQuestion ===
            questions.length - 1
              ? "Finish Quiz"
              : "Next Question →"}

          </button>

        </div>

      </div>

    </div>
  );
}

export default Quiz;



