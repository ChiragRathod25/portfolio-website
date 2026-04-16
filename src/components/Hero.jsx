import React from "react";
import { motion } from "framer-motion";
import { Download, Send, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { SocialLinks } from "./index.js";

const stats = [
  { value: "4+", label: "Internships" },
  { value: "8+", label: "Projects" },
  { value: "8.9", label: "CGPA" },
  { value: "2+", label: "Years Coding" },
];

function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Dot Grid Background */}
      <div className="dot-grid absolute inset-0 opacity-40" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-24 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* ===== Left Text ===== */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-medium text-slate-300">
              Open to opportunities
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
            Hi <span className="animate-wave inline-block">👋</span>, I'm
            <br />
            <span className="gradient-text-animated">Chirag Rathod</span>
          </h1>

          {/* Type Animation */}
          <div className="text-lg sm:text-xl md:text-2xl font-medium text-slate-400 mb-6 h-8">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Machine Learning Engineer",
                2000,
                "Open Source Contributor",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-indigo-400"
            />
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-xl mb-8 mx-auto md:mx-0 leading-relaxed">
            B.E. Computer Engineering student at BVM. I build scalable web apps
            and intelligent ML systems — merging clean code with creative
            thinking to craft real-world impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
            <Link to="/#projects" className="btn-primary">
              View My Work
              <ChevronDown size={18} />
            </Link>

            {/* View Resume */}
            <a
              href="/Chirag_Rathod_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <Download size={18} />
              View Resume
            </a>

            <Link to="/contact" className="btn-outline">
              Let's Connect
              <Send size={16} />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start">
            <SocialLinks size={20} />
          </div>
        </motion.div>

        {/* ===== Right Profile Image ===== */}
        <motion.div
          className="flex-shrink-0 flex justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="relative animate-float">
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 pulse-ring scale-110" />
            <div
              className="absolute inset-0 rounded-full border-2 border-cyan-400/20 pulse-ring scale-125"
              style={{ animationDelay: "1s" }}
            />
            {/* Gradient ring */}
            <div className="w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80 rounded-full p-1"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)" }}
            >
              <img
                src="/profile.jpg"
                alt="Chirag Rathod"
                className="w-full h-full object-cover rounded-full"
                style={{ border: "4px solid var(--bg-primary)" }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pb-16 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="glass rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 gradient-border">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="font-space text-3xl font-bold gradient-text">{value}</p>
              <p className="text-sm text-slate-400 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
