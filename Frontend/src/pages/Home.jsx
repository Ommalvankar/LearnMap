import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Subjects from "../components/Subjects";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <Navbar />

      <main>
        <Hero />

        <Subjects />
      </main>

      <Footer />

    </div>
  );
}

export default Home;