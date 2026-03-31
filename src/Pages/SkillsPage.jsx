import React from "react";
import { motion } from "framer-motion";
import { Skills, Writings } from "../components/index.js";

export default function SkillsPage() {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Banner */}
      <div
        className="relative py-20 px-6 md:px-16 border-b banner-skills"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="dot-grid absolute inset-0 opacity-25" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">Skills</h1>
            <p className="max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Technologies, mathematical foundations, and tools I rely on across the full stack and ML pipeline.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Skills Grid — heading suppressed since page banner already provides it */}
      <Skills showHeading={false} />

      {/* Writings */}
      <Writings />
    </div>
  );
}
