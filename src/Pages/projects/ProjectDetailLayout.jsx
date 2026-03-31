import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Shared layout for all project detail pages
export function ProjectDetailLayout({
  title,
  tagline,
  category,
  tech,
  github,
  live,
  image,
  overview,
  features,
  challenges,
  gradient = "from-indigo-500/30 to-violet-500/20",
}) {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      {/* Hero Banner */}
      <div className={`relative py-32 px-6 md:px-16 bg-gradient-to-br ${gradient} border-b`}
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>

          <span className="inline-block glass text-xs font-medium text-indigo-400 px-3 py-1 rounded-full mb-4">
            {category}
          </span>
          <h1 className="font-space text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
            {title}
          </h1>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl">{tagline}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {tech.map((t) => (
              <span key={t} className="tech-pill text-sm">{t}</span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="btn-outline py-2 px-5 text-sm">
                <Github size={16} /> View Code
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="btn-primary py-2 px-5 text-sm">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-16">
        {/* Project Image */}
        {image && (
          <motion.div
            className="glass rounded-2xl overflow-hidden mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img src={image} alt={title} className="w-full object-cover max-h-80" />
          </motion.div>
        )}

        <div className="grid md:grid-cols-3 gap-10">
          {/* Overview */}
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="font-space text-2xl font-bold text-white mb-4">Overview</h2>
              <div className="glass rounded-2xl p-6">
                <p className="text-slate-400 leading-relaxed">{overview}</p>
              </div>
            </motion.div>

            {challenges && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="font-space text-2xl font-bold text-white mb-4">Challenges & Learnings</h2>
                <div className="glass rounded-2xl p-6">
                  <p className="text-slate-400 leading-relaxed">{challenges}</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2 className="font-space text-2xl font-bold text-white mb-4">Key Features</h2>
            <div className="glass rounded-2xl p-6 space-y-3">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                  <span className="text-sm text-slate-400">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Back Button */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <Link to="/#projects" className="btn-outline">
            <ArrowLeft size={16} />
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
