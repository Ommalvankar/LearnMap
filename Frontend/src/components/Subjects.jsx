import React from "react";
import SubjectCard from "./SubjectCard";
import "./Subjects.css";

function Subjects() {

  const subjects = [

    {
      icon: "📖",
      title: "English",
      description:
        "Test and improve your English skills."
    },

    {
      icon: "📐",
      title: "Mathematics",
      description:
        "Challenge yourself with mathematics."
    },

    {
      icon: "🔬",
      title: "Science",
      description:
        "Explore the world of science."
    },

    {
      icon: "🌍",
      title: "Geography",
      description:
        "Discover places and our amazing world."
    },

    {
      icon: "🏛️",
      title: "History",
      description:
        "Travel through important historical events."
    },

    {
      icon: "💻",
      title: "Computer Science",
      description:
        "Test your computer knowledge."
    }

  ];

  return (

    <section
      className="subjects-section"
      id="subjects"
    >

      <div className="section-heading">

        <p className="section-small-title">
          EXPLORE & LEARN
        </p>

        <h2>
          Choose Your Subject
        </h2>

        <p className="section-description">
          Select a subject and start your
          quiz journey.
        </p>

      </div>

      <div className="subjects-grid">

        {subjects.map(
          (subject, index) => (

            <SubjectCard
              key={index}
              icon={subject.icon}
              title={subject.title}
              description={
                subject.description
              }
            />

          )
        )}

      </div>

    </section>
  );
}

export default Subjects;