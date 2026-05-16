import React from "react";
import { motion } from "framer-motion";
import { UserCircle2, Search } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative mb-20">
      
      {/* Background Glow Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500 rounded-full blur-[120px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 rounded-full blur-[120px] opacity-20"></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold tracking-wide"
        >
          AI Job Hunter
        </motion.h1>

        {/* Profile */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer"
        >
          <UserCircle2 size={40} className="text-cyan-400" />
        </motion.div>
      </nav>

      {/* Main Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-6 mt-24 relative z-10">

        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight max-w-5xl"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            AI Job Hunter
          </span>
          <br />
          & Career Intelligence Platform
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl"
        >
          Paste any job link and let AI optimize your resume, prepare you for interviews,
          analyze company culture, and find referrals automatically.
        </motion.p>

        {/* Input Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-12 w-full max-w-3xl"
        >
          <div className="flex items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            
            <input
              type="text"
              placeholder="Paste Job URL here..."
              className="flex-1 bg-transparent px-6 py-5 text-white outline-none placeholder:text-gray-400"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-5 font-semibold flex items-center gap-2 hover:opacity-90 transition"
            >
              <Search size={20} />
              Check
            </motion.button>
          </div>
        </motion.div>

        {/* Floating Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 max-w-6xl w-full">

          {[
            "ATS Resume Optimization",
            "AI Interview Questions",
            "Company Intelligence",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white/10 border border-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-xl"
            >
              <h2 className="text-2xl font-bold text-cyan-400">{item}</h2>

              <p className="text-gray-400 mt-4">
                AI-powered analysis and intelligent recommendations
                designed to improve your hiring success.
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Animated Circles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-32 right-20 w-24 h-24 rounded-full bg-cyan-500 opacity-20 blur-2xl"
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-32 left-20 w-32 h-32 rounded-full bg-purple-500 opacity-20 blur-2xl"
      ></motion.div>
    </div>
  );
}