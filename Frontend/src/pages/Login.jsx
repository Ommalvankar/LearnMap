import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please enter email and password.");
    return;
  }

  const savedAccount = localStorage.getItem("studentAccount");

  if (!savedAccount) {
    alert("No account found. Please register first.");
    return;
  }

  const student = JSON.parse(savedAccount);

  if (
    email === student.email &&
    password === student.password
  ) {
    localStorage.setItem("isLoggedIn", "true");

    alert("Login successful!");

    navigate("/dashboard");
  } else {
    alert("Invalid email or password.");
  }

  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          Learn Map
        </div>

        <p className="login-small-title">
          WELCOME BACK
        </p>

        <h1>Student Login</h1>

        <p className="login-description">
          Login to continue your learning journey.
        </p>

        <form onSubmit={handleLogin}>

          {/* EMAIL */}
          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* PASSWORD */}
          <div className="input-group">
            <label>Password</label>

            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          {/* LOGIN */}
          <button
            type="submit"
            className="login-submit"
          >
            Login
          </button>

        </form>

        {/* REGISTER */}
        <p className="register-text">
          Don't have an account?{" "}

          <button
            type="button"
            className="register-link"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </p>

        {/* BACK TO HOME */}
        <button
          type="button"
          className="back-home-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

      </div>

    </div>
  );
}

export default Login;