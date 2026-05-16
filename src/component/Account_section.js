// src/pages/AccountPage.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  User,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  MapPin,
  Building2,
} from "lucide-react";

export default function AccountPage() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-white px-6 py-10">

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto"
      >

        {/* Top Profile Card */}
        <div className="bg-[#111827] border border-white/10 rounded-3xl p-8 shadow-xl">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left Side */}
            <div className="flex items-center gap-6">

              {/* Profile Image */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg"
              >
                <User size={48} />
              </motion.div>

              {/* User Info */}
              <div>

                <h1 className="text-4xl font-bold">
                  Mahesh Kumar Sahu
                </h1>

                <div className="mt-4 space-y-2 text-gray-300">

                  <p className="flex items-center gap-2">
                    <GraduationCap size={18} className="text-cyan-400" />
                    B.Tech in Computer Science
                  </p>

                  <p className="flex items-center gap-2">
                    <Building2 size={18} className="text-cyan-400" />
                    XYZ University
                  </p>

                  <p className="flex items-center gap-2">
                    <Briefcase size={18} className="text-cyan-400" />
                    Full Stack & AI Developer
                  </p>
                </div>
              </div>
            </div>

            {/* ATS Score */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-cyan-500/10 border border-cyan-500/20 px-8 py-6 rounded-2xl text-center"
            >
              <p className="text-gray-400 text-sm">
                ATS Match Score
              </p>

              <h2 className="text-5xl font-bold text-cyan-400 mt-2">
                84%
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">

          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-[#111827] border border-white/10 rounded-3xl p-8 shadow-xl"
          >

            <h2 className="text-2xl font-semibold mb-8">
              Selected Job Position
            </h2>

            {/* Job Card */}
            <motion.div
              whileHover={{ y: -3 }}
              className="bg-[#0b1220] border border-white/10 rounded-2xl p-6 transition-all duration-300"
            >

              <div className="flex items-center justify-between flex-wrap gap-4">

                <div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Full Stack Developer
                  </h3>

                  <p className="text-gray-400 mt-2">
                    ABC Technologies Pvt Ltd
                  </p>
                </div>

                <div className="bg-green-500/10 text-green-400 px-4 py-2 rounded-xl text-sm border border-green-500/20">
                  Remote
                </div>
              </div>

              {/* Skills */}
              <div className="mt-8">

                <h4 className="text-lg font-medium mb-4">
                  Required Skills
                </h4>

                <div className="flex flex-wrap gap-3">

                  {[
                    "React.js",
                    "Node.js",
                    "MongoDB",
                    "Express.js",
                    "REST APIs",
                    "Tailwind CSS",
                    "JWT",
                    "GitHub",
                  ].map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.04 }}
                      className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-10">

                <div className="flex items-center justify-between mb-3">
                  <p className="text-gray-300">
                    Resume Compatibility
                  </p>

                  <p className="text-cyan-400 font-semibold">
                    84%
                  </p>
                </div>

                <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "84%" }}
                    transition={{ duration: 1.2 }}
                    className="h-full bg-cyan-400 rounded-full"
                  />
                </div>
              </div>
            </motion.div>

            {/* AI Suggestions */}
            <div className="mt-8 bg-[#0b1220] border border-white/10 rounded-2xl p-6">

              <h3 className="text-xl font-semibold mb-5">
                AI Suggestions
              </h3>

              <div className="space-y-4 text-gray-300">

                <p>✔ Add Docker deployment experience</p>

                <p>✔ Add live project links in resume</p>

                <p>✔ Improve backend project descriptions</p>

                <p>✔ Learn basic system design concepts</p>
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-[#111827] border border-white/10 rounded-3xl p-8 shadow-xl"
          >

            <h2 className="text-2xl font-semibold mb-8">
              Contact Details
            </h2>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <Mail className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <p className="font-medium">
                    mahesh@example.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">

                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <Phone className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Phone
                  </p>

                  <p className="font-medium">
                    +91 9876543210
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">

                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <MapPin className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <p className="font-medium">
                    Bhubaneswar, Odisha
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-4">

                <div className="p-3 rounded-xl bg-cyan-500/10">
                  <Briefcase className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">
                    Experience
                  </p>

                  <p className="font-medium">
                    Full Stack Internship
                  </p>
                </div>
              </div>
            </div>

            {/* Small Quote */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="mt-10 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl p-5"
            >
              <p className="text-gray-300 leading-relaxed italic">
                “Success in tech comes from consistency, problem solving,
                and building real-world solutions.”
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}