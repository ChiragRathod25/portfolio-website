import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Clock, Tag } from "lucide-react";

const writings = [
  {
    title: "Implementing Temporal Fusion Transformer in PyTorch — Key Design Decisions",
    summary:
      "A deep-dive into implementing TFT from scratch: attention mechanisms, temporal processing, and why it outperforms vanilla LSTM on multi-step health forecasting.",
    tags: ["PyTorch", "TFT", "Time-Series", "Deep Learning"],
    readTime: "8 min read",
    status: "coming-soon",
    href: null,
    emoji: "🧠",
    gradient: "from-pink-500/15 to-rose-500/5",
    border: "border-pink-500/20",
  },
  {
    title: "Domain Shift in Satellite Imagery: What I Learned and How We Addressed It",
    summary:
      "Lessons from building a land cover classifier that generalizes across geographic regions — tackling spectral variation, augmentation strategies, and transfer learning choices.",
    tags: ["Computer Vision", "Remote Sensing", "Transfer Learning", "CNN"],
    readTime: "6 min read",
    status: "coming-soon",
    href: null,
    emoji: "🛰️",
    gradient: "from-sky-500/15 to-blue-500/5",
    border: "border-sky-500/20",
  },
  {
    title: "Building a Production-Grade MERN Backend: What They Don't Teach You",
    summary:
      "Practical lessons from shipping the YouTube backend clone: aggregation pipeline optimization, token refresh strategy, and Cloudinary integration at scale.",
    tags: ["Node.js", "MongoDB", "Backend", "API Design"],
    readTime: "5 min read",
    status: "coming-soon",
    href: null,
    emoji: "⚙️",
    gradient: "from-violet-500/15 to-purple-500/5",
    border: "border-violet-500/20",
  },
];

export default function Writings() {
  return (
    <section
      id="writings"
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">
            Technical Writings
          </h2>
          <div className="section-divider mb-4" />
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Notes and writeups on engineering decisions, research insights, and
            things I wish existed when I was figuring it out.
          </p>
        </motion.div>

        {/* Articles */}
        <div className="space-y-5">
          {writings.map((w, i) => (
            <motion.div
              key={i}
              className={`glass glass-hover rounded-2xl p-6 bg-gradient-to-br ${w.gradient} border ${w.border}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{w.emoji}</span>
                    <div className="flex items-center gap-2">
                      <Clock size={12} style={{ color: "var(--text-muted)" }} />
                      <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                        {w.readTime}
                      </span>
                      {w.status === "coming-soon" && (
                        <span className="text-xs font-medium text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                  <h3
                    className="font-space font-semibold text-base leading-snug mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {w.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                    {w.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {w.tags.map((tag) => (
                      <span key={tag} className="tech-pill">{tag}</span>
                    ))}
                  </div>
                </div>

                {w.href ? (
                  <a
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 p-2 glass rounded-xl text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                ) : (
                  <div
                    className="flex-shrink-0 p-2 glass rounded-xl opacity-30"
                    title="Coming soon"
                  >
                    <ExternalLink size={18} style={{ color: "var(--text-muted)" }} />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA note */}
        <motion.p
          className="text-center text-sm mt-8"
          style={{ color: "var(--text-muted)" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Articles being finalized — follow me on{" "}
          <a
            href="https://github.com/ChiragRathod25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            GitHub
          </a>{" "}
          for updates.
        </motion.p>
      </div>
    </section>
  );
}
