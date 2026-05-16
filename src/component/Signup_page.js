// src/pages/SignupPage.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Building2,
  MapPin,
  Briefcase,
  Lock,
} from "lucide-react";

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-6 py-10 overflow-hidden relative">

      {/* Soft Background Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-200 rounded-full blur-[120px] opacity-40"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full blur-[120px] opacity-40"></div>

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-[35px] shadow-2xl overflow-hidden border border-gray-200"
      >

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-cyan-500 to-blue-600 text-white p-14 relative overflow-hidden">

          {/* Animated Circle */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
            }}
            className="absolute top-10 right-10 w-40 h-40 rounded-full bg-white/10"
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
            className="absolute bottom-10 left-10 w-52 h-52 rounded-full bg-white/10"
          />

          <div className="relative z-10">

            <motion.h1
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold leading-tight"
            >
              AI Job Hunter
            </motion.h1>

            <p className="mt-6 text-lg text-white/90 leading-relaxed">
              Build your intelligent career profile and let AI prepare
              you for your dream job with ATS optimization, company
              analysis, and interview preparation.
            </p>

            <div className="mt-12 space-y-5">

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <p>ATS Resume Optimization</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <p>AI Interview Preparation</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
                <p>Company Intelligence & Referrals</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="p-8 md:p-12">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >

            <h2 className="text-4xl font-bold text-gray-800">
              Create Account
            </h2>

            <p className="text-gray-500 mt-3">
              Create your professional AI-powered job profile.
            </p>
          </motion.div>

          {/* Form */}
          <form className="mt-10 space-y-6">

            {/* Full Name */}
            <InputField
              icon={<User size={20} />}
              placeholder="Full Name"
              type="text"
            />

            {/* Email */}
            <InputField
              icon={<Mail size={20} />}
              placeholder="Email Address"
              type="email"
            />

            {/* Phone */}
            <InputField
              icon={<Phone size={20} />}
              placeholder="Phone Number"
              type="text"
            />

            {/* Qualification */}
            <InputField
              icon={<GraduationCap size={20} />}
              placeholder="Qualification"
              type="text"
            />

            {/* University */}
            <InputField
              icon={<Building2 size={20} />}
              placeholder="University Name"
              type="text"
            />

            {/* Location */}
            <InputField
              icon={<MapPin size={20} />}
              placeholder="Location"
              type="text"
            />

            {/* Job Role */}
            <InputField
              icon={<Briefcase size={20} />}
              placeholder="Target Job Role"
              type="text"
            />

            {/* Password */}
            <InputField
              icon={<Lock size={20} />}
              placeholder="Password"
              type="password"
            />

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg hover:shadow-cyan-200 transition-all duration-300"
            >
              Create Account
            </motion.button>
          </form>

          {/* Footer */}
          <p className="text-center text-gray-500 mt-8">
            Already have an account?
            <span className="text-cyan-600 font-semibold cursor-pointer ml-2">
              Login
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