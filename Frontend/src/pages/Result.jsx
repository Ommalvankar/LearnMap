
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
  const navigate = useNavigate();

  const score =
    Number(localStorage.getItem("quizScore")) || 0;

  const total =
    Number(localStorage.getItem("totalQuestions")) || 0;

  const subject =
    localStorage.getItem("quizSubject") || "Quiz";

  const chapter =
    localStorage.getItem("quizChapter") || "";

  const subjectKey =
    localStorage.getItem("quizSubjectKey");

  const percentage =
    total > 0
      ? Math.round((score / total) * 100)
      : 0;

  let message = "";

  if (percentage >= 80) {
    message = "Excellent! Keep up the great work! 🎉";
  } else if (percentage >= 60) {
    message = "Good job! Keep practicing! 👍";
  } else {
    message = "Keep learning and try again! 📚";
  }

  React.useEffect(() => {
    let oldResults = [];

    try {
      const savedResults =
        localStorage.getItem("quizResults");

      if (savedResults) {
        const parsedResults =
          JSON.parse(savedResults);

        if (Array.isArray(parsedResults)) {
          oldResults = parsedResults;
        }
      }
    } catch (error) {
      oldResults = [];
    }

    const newResult = {
      subject: subject,
      chapter: chapter,
      score: score,
      total: total,
      percentage: percentage,
      date: new Date().toLocaleDateString()
    };

    oldResults.push(newResult);

    localStorage.setItem(
      "quizResults",
      JSON.stringify(oldResults)
    );
  }, []);

  const handleTryAnotherChapter = () => {
    if (subjectKey) {
      navigate(`/chapters/${subjectKey}`);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="result-page">

      <div className="result-card">

        <p className="result-small-title">
          QUIZ COMPLETED
        </p>

        <h1>{subject}</h1>

        <h2>{chapter}</h2>

        <div className="score-circle">
          <span>{percentage}%</span>
        </div>

        <h3>{message}</h3>

        <p>
          You scored{" "}
          <strong>{score}</strong>{" "}
          out of{" "}
          <strong>{total}</strong>
        </p>

        <div className="result-buttons">

          <button
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

          <button
            onClick={handleTryAnotherChapter}
          >
            Try Another Chapter
          </button>

          <button
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>

        </div>

      </div>

    </div>
  );
}

export default Result;

