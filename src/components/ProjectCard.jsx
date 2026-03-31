import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function TiltCard({ children, className }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rotateX = -(y / rect.height) * 10;
    const rotateY = (x / rect.width) * 10;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
  };

  const handleLeave = () => {
    if (ref.current) {
      ref.current.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)`;
    }
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </div>
  );
}

function ProjectCard({
  id,
  title,
  description,
  image,
  tech = [],
  github,
  live,
  featured,
}) {
  return (
    <TiltCard className="h-full">
      <motion.div
        className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col"
        whileHover={{ zIndex: 10 }}
      >
        {/* Image Area */}
        <div
          className="relative overflow-hidden project-placeholder"
          style={{
            height: "180px",
            background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.10))",
          }}
        >
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ filter: "brightness(0.9)" }}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-4xl opacity-30">🔬</span>
            </div>
          )}

          {featured && (
            <span className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 backdrop-blur-sm">
              ⭐ Featured
            </span>
          )}

          {/* Shimmer overlay */}
          <div className="absolute inset-0 shimmer-effect opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-1">
          <h3
            className="font-space text-base font-bold mb-2 leading-snug"
            style={{ color: "var(--text-primary)" }}
          >
            {title}
          </h3>
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>
            {description}
          </p>

          {/* Tech Pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tech.slice(0, 5).map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
            {tech.length > 5 && (
              <span className="tech-pill">+{tech.length - 5}</span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: "var(--border-subtle)" }}>
            <div className="flex gap-2">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:text-white transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  title="View Code"
                >
                  <Github size={16} />
                </a>
              )}
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 glass rounded-lg hover:text-cyan-400 transition-colors"
                  style={{ color: "var(--text-muted)" }}
                  title="Live Demo"
                >
                  <ExternalLink size={16} />
                </a>
              )}
            </div>

            {id && (
              <Link
                to={`/projects/${id}`}
                className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
              >
                Details
                <ArrowRight size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
}

export default ProjectCard;