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
    <div className="h-screen flex items-center justify-center bg-[#f3f5f9] font-['Segoe UI']">
      <button
        onClick={handleLogin}
        className="flex items-center justify-center gap-3 px-6 py-3 text-base bg-white text-gray-800 border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 hover:bg-gray-100"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
