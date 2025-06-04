import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import "../styles/Login.css";

const Login = () => {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="login-wrapper">
        <button className="login-button" onClick={handleLogin}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
          />
          Continue with Google
        </button>
      </div>
  );
};

export default Login;
