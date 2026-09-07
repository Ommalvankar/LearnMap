import React from "react";
import { useNavigate } from "react-router-dom";
import "./SubjectCard.css";

function SubjectCard({
  icon,
  title,
  description
}) {
  const navigate = useNavigate();

  const startQuiz = () => {

    const subject =
      title
        .toLowerCase()
        .replaceAll(" ", "-");

    navigate(
      `/chapters/${subject}`
    );
  };

  return (
    <div className="subject-card">

      <div className="subject-icon">
        {icon}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <button
        className="subject-btn"
        onClick={startQuiz}
      >
        Start Quiz
      </button>

    </div>
  );
}

export default SubjectCard;