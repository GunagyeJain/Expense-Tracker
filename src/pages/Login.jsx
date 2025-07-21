import React, { useState } from "react";
import "./styles/Login.css";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLoginMode) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      <h2>{isLoginMode ? "Log In" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">{isLoginMode ? "Log In" : "Sign Up"}</button>
        {error && <p className="error">{error}</p>}
      </form>
      <p>
        {isLoginMode ? "Don't have an account?" : "Already have an account?"}
        <button
          type="button"
          className="toggle-btn"
          onClick={() => {
            setIsLoginMode(!isLoginMode);
            setError("");
          }}>
          {isLoginMode ? "Sign Up" : "Log In"}
        </button>
      </p>
    </div>
  );
};

export default LoginPage;
