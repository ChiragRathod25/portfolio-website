import React from "react";
import { motion } from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Google Digital Marketing & E-commerce",
    issuer: "Google",
    date: "March 2023",
    credential: null,
    emoji: "🏅",
    color: "text-blue-400",
    bgColor: "from-blue-500/15 to-sky-500/5",
    border: "border-blue-500/20",
  },
  {
    title: "Cyber Security Fundamentals",
    issuer: "Edunet Foundation (IBM SkillsBuild)",
    date: "July 2023",
    credential: null,
    emoji: "🔐",
    color: "text-green-400",
    bgColor: "from-green-500/15 to-teal-500/5",
    border: "border-green-500/20",
  },
  {
    title: "Full Stack Web Development",
    issuer: "DialogFlows — Industry Certification",
    date: "June 2024",
    credential: null,
    emoji: "🌐",
    color: "text-violet-400",
    bgColor: "from-violet-500/15 to-purple-500/5",
    border: "border-violet-500/20",
  },
  {
    title: "React Developer",
    issuer: "Tech Elecon Private Limited",
    date: "2025",
    credential: null,
    emoji: "⚛️",
    color: "text-cyan-400",
    bgColor: "from-cyan-500/15 to-blue-500/5",
    border: "border-cyan-500/20",
  },
];

export default function Certifications() {
  return (
    <section
      className="py-16 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-3xl md:text-4xl font-bold gradient-text mb-3">
            Certifications
          </h2>
          <div className="section-divider mb-3" />
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            Recognized credentials validating industry & academic learning.
          </p>
        </motion.div>

        {/* Cert Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              className={`glass glass-hover rounded-xl p-5 flex items-start gap-4 bg-gradient-to-br ${cert.bgColor} border ${cert.border}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <span className="text-3xl flex-shrink-0">{cert.emoji}</span>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3
                    className="font-space font-semibold text-sm leading-snug"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {cert.title}
                  </h3>
                  {cert.credential && (
                    <a
                      href={cert.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-indigo-400 hover:text-indigo-300 transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                  {cert.issuer}
                </p>
                <div className="flex items-center gap-1.5 mt-2">
                  <BadgeCheck size={13} className={cert.color} />
                  <span className={`text-xs font-medium ${cert.color}`}>{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
