// src/pages/Login.jsx
import React from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Sign in to continue</h2>
        <button style={styles.button} onClick={handleLogin}>
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google icon"
            style={styles.icon}
          />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eef1f5",
    fontFamily: "Segoe UI, sans-serif"
  },
  card: {
    padding: "3rem",
    borderRadius: "12px",
    backgroundColor: "#fff",
    border: "1px solid #ccc",
    textAlign: "center",
    minWidth: "320px"
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "2rem",
    color: "#333"
  },
  button: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    backgroundColor: "#fff",
    color: "#444",
    border: "1px solid #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out"
  },
  icon: {
    width: "20px",
    height: "20px"
  }
};

export default Login;
