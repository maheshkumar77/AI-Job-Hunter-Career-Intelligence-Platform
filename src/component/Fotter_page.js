// src/components/Footer.jsx

import React from "react";
import { motion } from "framer-motion";
// import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative  border-t border-white/10 bg-black overflow-hidden">

      {/* Animated Background Glow */}
      <motion.div
        animate={{
          x: [0, 120, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 opacity-10 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -120, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-10 blur-[120px]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              AI Job Hunter
            </h1>

            <p className="text-gray-400 mt-4 max-w-md leading-relaxed">
              Empowering developers with AI-driven career intelligence,
              ATS optimization, interview preparation, and smarter job hunting.
            </p>

            <p className="mt-5 text-sm text-cyan-400 italic">
              "Your dream job deserves intelligent preparation."
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-5"
          >
            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.15, rotate: 6 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400 transition-all duration-300"
            >
              {/* <Linkedin className="text-cyan-400 w-6 h-6" /> */}
            </motion.a>

            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.15, rotate: -6 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/your-github"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400 transition-all duration-300"
            >
              {/* <Github className="text-purple-400 w-6 h-6" /> */}
            </motion.a>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-right"
          >
            <h2 className="text-white text-lg font-semibold">
              Crafted By
            </h2>

            <p className="text-2xl font-bold text-cyan-400 mt-2">
              Mahesh Kumar Sahu
            </p>

            <p className="text-gray-500 mt-2 text-sm">
              Full Stack Developer • AI/ML Enthusiast
            </p>
          </motion.div>
        </div>

        {/* Animated Bottom Border */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5 }}
          className="h-[1px] mt-10 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
        />

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          © 2026 AI Job Hunter • Built with React, Tailwind & AI Innovation
        </div>
      </div>
    </footer>
  );
}