// src/pages/LoginPage.jsx

import React from "react";
import { motion } from "framer-motion";
// import {
//   Mail,
//   Lock,
//   Github,
//   Linkedin,
// } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 py-10 overflow-hidden relative">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200 blur-[120px] opacity-40 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 blur-[120px] opacity-40 rounded-full"></div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-[35px] overflow-hidden shadow-2xl border border-gray-200"
      >

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-14 relative overflow-hidden">

          {/* Animated Shapes */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute top-12 right-12 w-40 h-40 bg-white/10 rounded-full"
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute bottom-10 left-10 w-56 h-56 bg-white/10 rounded-full"
          />

          <div className="relative z-10">

            <motion.h1
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold leading-tight"
            >
              Welcome Back
            </motion.h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Continue your AI-powered career journey with smart ATS analysis,
              interview preparation, and company intelligence.
            </p>

            <div className="mt-12 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <p>AI Resume Optimization</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <p>Company Insights & Referrals</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <p>Personalized Interview Preparation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-gray-800">
              Login
            </h2>

            <p className="text-gray-500 mt-3">
              Access your AI Job Hunter account.
            </p>
          </motion.div>

          {/* Social Login */}
          <div className="mt-8 space-y-4">

            {/* Google */}
            <SocialButton
              text="Continue with Google"
              icon="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            />

            {/* GitHub */}
            <SocialButton
              text="Continue with GitHub"
            //   customIcon={<Github className="w-5 h-5 text-gray-700" />}
            />

            {/* LinkedIn */}
            <SocialButton
              text="Continue with LinkedIn"
            //   customIcon={<Linkedin className="w-5 h-5 text-blue-600" />}
            />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-[1px] bg-gray-200"></div>

            <p className="text-gray-400 text-sm">
              OR
            </p>

            <div className="flex-1 h-[1px] bg-gray-200"></div>
          </div>

          {/* Login Form */}
          <form className="space-y-6">

            {/* Email */}
            <InputField
            //   icon={<Mail size={20} />}
              placeholder="Email Address"
              type="email"
            />

            {/* Password */}
            <InputField
              //   icon={<Lock size={20} />}
              placeholder="Password"
              type="password"
            />

            {/* Options */}
            <div className="flex items-center justify-between text-sm">

              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <p className="text-cyan-600 cursor-pointer hover:underline">
                Forgot Password?
              </p>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-cyan-200 transition-all duration-300"
            >
              Login
            </motion.button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 mt-8">
            Don’t have an account?
            <span className="text-cyan-600 font-semibold ml-2 cursor-pointer">
              Sign Up
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

/* Input Component */
function InputField({ icon, placeholder, type }) {
  return (
    <motion.div
      whileFocus={{ scale: 1.01 }}
      className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 focus-within:border-cyan-500 transition-all duration-300"
    >
      <div className="text-cyan-500">
        {icon}
      </div>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
      />
    </motion.div>
  );
}

/* Social Login Button */
function SocialButton({ text, icon, customIcon }) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full flex items-center justify-center gap-4 border border-gray-200 rounded-2xl py-4 bg-white hover:bg-gray-50 transition-all duration-300"
    >
      {icon ? (
        <img
          src={icon}
          alt="social"
          className="w-5 h-5"
        />
      ) : (
        customIcon
      )}

      <span className="font-medium text-gray-700">
        {text}
      </span>
    </motion.button>
  );
}