import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FlaskConical, Code2, Briefcase, GraduationCap, Download, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { SocialLinks } from "../components/index.js";
import AnimatedCounter from "../components/AnimatedCounter.jsx";

const stats = [
  { target: 4, suffix: "+", label: "Internships" },
  { target: 9, suffix: "+", label: "Projects" },
  { target: 8.9, suffix: "", label: "CGPA" },
  { target: 2, suffix: "+", label: "Years Coding" },
];

const highlights = [
  {
    icon: FlaskConical,
    title: "Research",
    description: "CNN land cover classifier (EuroSAT, 10 classes, ~80% accuracy) & TFT/LSTM health forecasting — both faculty-supervised with paper in preparation.",
    to: "/research",
    gradient: "from-sky-500/20 to-blue-500/10",
    border: "border-sky-500/30",
    iconColor: "text-sky-400",
    cta: "View Research",
  },
  {
    icon: Code2,
    title: "Projects",
    description: "9 projects: full-stack web apps, ML recommendation systems, production backends, and computer vision — with live demos and detailed technical breakdowns.",
    to: "/projects",
    gradient: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    iconColor: "text-violet-400",
    cta: "View Projects",
  },
  {
    icon: Briefcase,
    title: "Experience",
    description: "4+ internships (ML, React, Full Stack, Cyber Security) · B.E. Computer Engineering, CGPA 8.9 · Certifications · Achievements & Leadership roles.",
    to: "/experience",
    gradient: "from-indigo-500/20 to-indigo-500/10",
    border: "border-indigo-500/30",
    iconColor: "text-indigo-400",
    cta: "View Experience",
  },
  {
    icon: GraduationCap,
    title: "Skills & Writings",
    description: "Full-stack & ML toolkit spanning Frontend, Backend, Python/AI, Mathematical Foundations, DevOps and more — plus technical writeups on research & engineering decisions.",
    to: "/skills",
    gradient: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    cta: "View Skills",
  },
];

function Home() {
  return (
    <div style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* ===== HERO ===== */}
      <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      >
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #6366f1, transparent)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-16 pt-24 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                Open to opportunities
              </span>
            </motion.div>

            <h1 className="font-space text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
              Hi <span className="animate-wave inline-block">👋</span>, I'm
              <br />
              <span className="gradient-text-animated">Chirag Rathod</span>
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl font-medium mb-6 h-8" style={{ color: "var(--text-muted)" }}>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "ML & AI Engineer",
                  2000,
                  "Computer Vision Researcher",
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

            <p className="text-base md:text-lg max-w-xl mb-8 mx-auto md:mx-0 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              B.E. Computer Engineering at BVM (CGPA 8.9). I build scalable web
              systems and research intelligent ML solutions — bridging rigorous
              theory with real-world engineering.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <Link to="/research" className="btn-primary">
                View Research
                <FlaskConical size={16} />
              </Link>
              <div className="relative group">
                <button className="btn-outline">
                  <Download size={16} /> Resume
                </button>
                <div
                  className="absolute left-0 top-full mt-2 w-52 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20"
                  style={{
                    backgroundColor: "rgba(13,13,26,0.92)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border: "1px solid rgba(99,102,241,0.2)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                  }}
                >
                  <a href="/Chirag_Rathod_Resume_Short.pdf" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-white/5 transition-colors"
                    style={{ color: "var(--text-secondary)" }}>
                    📄 Short Version
                  </a>
                  <div className="border-t" style={{ borderColor: "var(--border-subtle)" }} />
                  <a href="/Chirag_Rathod_Resume_Full.pdf" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-white/5 transition-colors"
                    style={{ color: "var(--text-secondary)" }}>
                    📋 Full Version
                  </a>
                </div>
              </div>
              <Link to="/contact" className="btn-outline">
                Let's Connect <Send size={14} />
              </Link>
            </div>
            <SocialLinks size={20} />
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-full border-2 border-indigo-500/30 pulse-ring scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 pulse-ring scale-125" style={{ animationDelay: "1s" }} />
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-1"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)" }}>
                <img src="/profile.jpg" alt="Chirag Rathod"
                  className="w-full h-full object-cover rounded-full"
                  style={{ border: "4px solid var(--bg-primary)" }} />
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
            {stats.map(({ target, suffix, label }) => (
              <div key={label} className="text-center">
                <p className="font-space text-3xl font-bold gradient-text">
                  <AnimatedCounter target={target} suffix={suffix} />
                </p>
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== HIGHLIGHTS GRID ===== */}
      <section
        className="py-24 px-6 md:px-16"
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-space text-3xl md:text-4xl font-bold gradient-text mb-3">
              Explore My Work
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Research · Projects · Experience · Skills — each with its own dedicated page.
            </p>
          </motion.div>

          {/* One parent container watches viewport; all 4 cards stagger in together */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {highlights.map(({ icon: Icon, title, description, to, gradient, border, iconColor, cta }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                }}
              >
                <Link
                  to={to}
                  className={`group block glass glass-hover rounded-2xl p-7 bg-gradient-to-br ${gradient} border ${border} h-full`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 glass rounded-xl ${iconColor}`}>
                      <Icon size={22} />
                    </div>
                    <ArrowRight size={18} className="text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all duration-300 mt-1" />
                  </div>
                  <h3 className="font-space text-xl font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                    {description}
                  </p>
                  <span className={`text-sm font-medium ${iconColor} flex items-center gap-1.5`}>
                    {cta} <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;
