import React, { useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

import pattern from '../assets/patterns/vector.png';
import loginVisual from '../assets/login/login_page.png';

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  return (
    <div className="h-screen w-screen flex overflow-hidden bg-[#1F2933] relative">
      {/* Pattern BG */}
      <img
        src={pattern}
        alt="pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
      />

      {/* Left */}
      <div className="w-full lg:w-1/2 flex items-center justify-center z-10 bg-white px-4 sm:px-10">
        <div className="w-full max-w-sm space-y-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Zielo" className="w-8 h-8" />
            <span className="text-xl font-semibold text-gray-800">Zielo</span>
          </div>
          <p className="text-sm text-gray-500">for Creators</p>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-900">
            {isLogin ? "Welcome Back" : "Create a Creator Account"}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {isLogin
              ? "Sign in to your account to continue your journey."
              : "Join Zielo and claim your profile to collaborate with like-minded brands."}
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                placeholder={isLogin ? "Enter your email" : "e.g., john.doe@example.com"}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A72034]"
              />
            </div>
            {!isLogin && (
              <div className="space-y-1">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="+91 98756 43210"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A72034]"
                />
              </div>
            )}
            <div className="space-y-1">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                placeholder={isLogin ? "Enter your password" : "Create a password"}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A72034]"
              />
            </div>
            {!isLogin && (
              <div className="space-y-1">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A72034]"
                />
              </div>
            )}
            <button
              type="submit"
              className="w-full bg-[#A72034] text-white py-2 rounded-md hover:bg-[#8c1c2d] transition-all cursor-pointer"
            >
              {isLogin ? "Sign in" : "Sign up"}
            </button>
          </form>

          {/* Toggle Link */}
          <p className="text-center text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(!isLogin);
              }}
              className="text-[#A72034] hover:text-[#8c1c2d] font-medium underline cursor-pointer"
            >
              {isLogin ? "Sign up" : "Login"}
            </a>
          </p>

          {/* Google Login */}
          <div className="flex justify-center pt-2">
            <button
              onClick={handleLogin}
              className="flex items-center gap-3 px-5 py-2.5 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-100 transition cursor-pointer"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Continue with Google
            </button>
          </div>
        </div>
      </div>

      {/* Right - Hidden on mobile */}
      <div className="hidden lg:flex w-1/2 h-full flex-col items-center justify-center text-white z-10 px-6">
        {/* Top Heading */}
        <div className="text-center mb-12">
          <h2 className="text-xl font-medium  ">Start Collaborating with Brands</h2>
          <p className="text-sm text-gray-300 mt-1">
            Create content, earn rewards, and build lasting partnerships – all from one place.
          </p>
        </div>

        {/* Image */}
        <img
          src={loginVisual}
          alt="Login Visual"
          className="max-w-[600px] object-contain"
        />
      </div>
    </div>
  );
};

export default Login;
