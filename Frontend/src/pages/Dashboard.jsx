import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  // ================= LOGIN PROTECTION =================

  
  // ================= LOGOUT =================

  const handleLogout = () => {
    // Remove login session
    localStorage.removeItem("isLoggedIn");

    // Go to login page
    navigate("/login");
  };

  // ================= STUDENT DETAILS =================

  const student = JSON.parse(
    localStorage.getItem("studentAccount")
  );

  const studentName = student?.name || "Student";

  // ================= QUIZ RESULTS =================

  const quizResults =
    JSON.parse(localStorage.getItem("quizResults")) || {};

  // ================= SUBJECTS =================

  const subjects = [
    {
      icon: "📖",
      name: "English",
      path: "english"
    },
    {
      icon: "📐",
      name: "Mathematics",
      path: "mathematics"
    },
    {
      icon: "🔬",
      name: "Science",
      path: "science"
    },
    {
      icon: "🌍",
      name: "Geography",
      path: "geography"
    },
    {
      icon: "🏛️",
      name: "History",
      path: "history"
    },
    {
      icon: "💻",
      name: "Computer Science",
      path: "computer-science"
    }
  ];

  // ================= COMPLETED QUIZZES =================

  const completedQuizzes =
    Object.keys(quizResults).length;

  // ================= PAGE =================

  return (
    <div className="dashboard-page">

      {/* ==================================================
          HEADER
      ================================================== */}

      <div className="dashboard-header">

        {/* WELCOME MESSAGE */}

        <div>

          <p className="dashboard-small-title">
            LEARN MAP
          </p>

          <h1>
            Welcome, {studentName}! 👋
          </h1>

          <p>
            Ready to continue your learning journey?
          </p>

        </div>


        {/* HEADER BUTTONS */}

        <div className="dashboard-buttons">

          {/* HOME */}

          <button
            className="dashboard-home-btn"
            onClick={() => navigate("/")}
          >
            Home
          </button>


          {/* LOGOUT */}

          <button
            className="dashboard-logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>


      {/* ==================================================
          DASHBOARD CONTAINER
      ================================================== */}

      <div className="dashboard-container">


        {/* ==================================================
            STAT CARDS
        ================================================== */}

        <div className="dashboard-stats">


          {/* SUBJECTS */}

          <div className="stat-card">

            <div className="stat-icon">
              📚
            </div>

            <div>

              <h2>
                6
              </h2>

              <p>
                Subjects
              </p>

            </div>

          </div>


          {/* AVAILABLE QUIZZES */}

          <div className="stat-card">

            <div className="stat-icon">
              📝
            </div>

            <div>

              <h2>
                6
              </h2>

              <p>
                Available Quizzes
              </p>

            </div>

          </div>


          {/* COMPLETED QUIZZES */}

          <div className="stat-card">

            <div className="stat-icon">
              🏆
            </div>

            <div>

              <h2>
                {completedQuizzes}
              </h2>

              <p>
                Quizzes Completed
              </p>

            </div>

          </div>

        </div>


        {/* ==================================================
            PROGRESS SECTION
        ================================================== */}

        <section className="progress-section">


          {/* SECTION HEADING */}

          <div className="dashboard-section-heading">

            <p>
              YOUR PROGRESS
            </p>

            <h2>
              Quiz Results
            </h2>

            <span>
              Track your performance in each subject.
            </span>

          </div>


          {/* ==================================================
              PROGRESS LIST
          ================================================== */}

          <div className="progress-list">

            {subjects.map((subject) => {

              const result =
                quizResults[
                  `${subject.name} Quiz`
                ];

              return (

                <div
                  className="progress-card"
                  key={subject.name}
                >


                  {/* SUBJECT */}

                  <div className="progress-subject">

                    <div className="progress-icon">
                      {subject.icon}
                    </div>

                    <div>

                      <h3>
                        {subject.name}
                      </h3>

                      <p>

                        {result
                          ? `${result.score} / ${result.total} correct`
                          : "Not attempted yet"}

                      </p>

                    </div>

                  </div>


                  {/* SCORE */}

                  <div className="progress-score">

                    {result ? (

                      <>
                        <strong>
                          {result.percentage}%
                        </strong>

                        <span>
                          Completed
                        </span>
                      </>

                    ) : (

                      <button
                        onClick={() =>
                          navigate(
                            `/quiz/${subject.path}`
                          )
                        }
                      >
                        Start Quiz
                      </button>

                    )}

                  </div>

                </div>

              );

            })}

          </div>

        </section>

      </div>

    </div>
  );
}

export default Dashboard;