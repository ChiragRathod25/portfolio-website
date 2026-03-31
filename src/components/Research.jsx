import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, FlaskConical, BookOpen } from "lucide-react";

const researchItems = [
  {
    id: "health-prediction",
    title: "AI-Driven Health Score Forecasting via Time-Series Deep Learning",
    status: "completed",
    statusLabel: "✅ Completed",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/30",
    supervision: "Under Faculty Guidance · BVM Engineering",
    duration: "3–4 months",
    area: "Deep Learning · Time-Series · Health Informatics",
    gradient: "from-pink-500/15 to-rose-500/5",
    border: "border-pink-500/20",
    abstract:
      "Investigated the effectiveness of deep learning architectures for personalized health score forecasting using lifestyle time-series data. Compared Temporal Fusion Transformer (TFT), LSTM with Attention, and baseline MLP models on a curated health metrics dataset. TFT demonstrated superior multi-step forecasting capability due to its interpretable attention mechanism.",
    methodology: [
      "Dataset construction from user lifestyle logs (sleep, exercise, diet, stress)",
      "Feature engineering and temporal alignment of multi-variate time-series",
      "Implemented TFT from scratch in PyTorch; benchmarked against LSTM + Attention",
      "7-day multi-step ahead forecasting with rolling window evaluation",
      "Hyperparameter tuning via Optuna; early stopping with validation MAE",
    ],
    results: [
      { metric: "TFT RMSE", value: "0.38", improvement: "↓ 23% vs LSTM baseline" },
      { metric: "MAE (7-day)", value: "0.29", improvement: "↓ 18% vs Attention-LSTM" },
      { metric: "R² Score", value: "0.91", improvement: "vs 0.74 LSTM baseline" },
    ],
    tech: ["PyTorch", "TFT", "LSTM", "Attention", "Pandas", "NumPy", "Optuna", "Python"],
  },
  {
    id: "satellite",
    title: "Deep Learning for Land Cover Classification from Satellite Imagery",
    status: "ongoing",
    statusLabel: "🔬 Ongoing · Paper in Preparation",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
    supervision: "Under Faculty Supervision · BVM Engineering",
    duration: "1–2 months ongoing",
    area: "Computer Vision · Remote Sensing · Environmental Monitoring",
    gradient: "from-sky-500/15 to-blue-500/5",
    border: "border-sky-500/20",
    abstract:
      "Developing a CNN-based classification system to identify land cover types — urban, forest, water, and agricultural — from multi-spectral satellite imagery. Addresses domain shift across geographic regions using data augmentation and transfer learning from remote-sensing-pretrained backbones. Targeting publication in an environmental informatics or computer vision venue.",
    methodology: [
      "Dataset: Multi-spectral satellite images with 4+ spectral bands (RGB + NIR)",
      "Preprocessing: band normalization, patch extraction, spatial augmentation",
      "Transfer learning from remote-sensing pre-trained ResNet backbone",
      "Pixel-wise evaluation using per-class IoU and mean accuracy",
      "Cross-region generalization experiments to test domain robustness",
    ],
    results: [
      { metric: "Overall Accuracy", value: "89.4%", improvement: "on test split" },
      { metric: "Mean IoU", value: "0.81", improvement: "across 5 land classes" },
      { metric: "Urban F1", value: "0.87", improvement: "hardest class" },
    ],
    tech: ["TensorFlow", "Keras", "CNN", "ResNet", "Python", "Remote Sensing", "NumPy"],
  },
];

const statusOrder = { ongoing: 0, completed: 1 };

function MetricCard({ metric, value, improvement }) {
  return (
    <div className="glass rounded-xl p-3 text-center">
      <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{metric}</p>
      <p className="font-space text-xl font-bold gradient-text">{value}</p>
      <p className="text-xs mt-0.5 text-indigo-400">{improvement}</p>
    </div>
  );
}

function ResearchCard({ item }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`glass rounded-2xl border bg-gradient-to-br ${item.gradient} ${item.border}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-7">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
          <div className="flex-1">
            <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-3 ${item.statusColor}`}>
              {item.statusLabel}
            </span>
            <h3 className="font-space text-xl font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
              {item.title}
            </h3>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap gap-4 mb-4 text-sm" style={{ color: "var(--text-muted)" }}>
          <span className="flex items-center gap-1.5">
            <BookOpen size={14} className="text-indigo-400" />
            {item.supervision}
          </span>
          <span className="flex items-center gap-1.5">
            <FlaskConical size={14} className="text-cyan-400" />
            {item.area}
          </span>
        </div>

        {/* Abstract */}
        <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
          {item.abstract}
        </p>

        {/* Result Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {item.results.map((r) => (
            <MetricCard key={r.metric} {...r} />
          ))}
        </div>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {item.tech.map((t) => (
            <span key={t} className="tech-pill">{t}</span>
          ))}
        </div>

        {/* Expand Toggle */}
        <button
          onClick={() => setExpanded((p) => !p)}
          className="flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
        >
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {expanded ? "Hide Methodology" : "View Methodology"}
        </button>

        {/* Expandable methodology */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-4 glass rounded-xl p-5">
                <h4 className="font-space font-semibold text-sm mb-3 text-indigo-300">Methodology</h4>
                <ol className="space-y-2">
                  {item.methodology.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--text-secondary)" }}>
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Research() {
  return (
    <section
      id="research"
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
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
            Research
          </h2>
          <div className="section-divider mb-4" />
          <p className="max-w-xl mx-auto text-base" style={{ color: "var(--text-secondary)" }}>
            Applied ML research exploring time-series forecasting and computer
            vision for real-world impact — conducted under faculty supervision.
          </p>
        </motion.div>

        {/* Research Cards */}
        <div className="space-y-8">
          {researchItems
            .sort((a, b) => statusOrder[a.status] - statusOrder[b.status])
            .map((item) => (
              <ResearchCard key={item.id} item={item} />
            ))}
        </div>

        {/* Research Interests Footer */}
        <motion.div
          className="mt-12 glass rounded-2xl p-7 border"
          style={{ borderColor: "var(--border-subtle)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-space font-semibold text-lg mb-3 gradient-text">
            Research Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Time-Series Forecasting",
              "Computer Vision",
              "Deep Learning",
              "Remote Sensing",
              "Health Informatics",
              "Explainable AI (XAI)",
              "Transfer Learning",
              "Natural Language Processing",
            ].map((interest) => (
              <span key={interest} className="tech-pill text-sm">
                {interest}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
