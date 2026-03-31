import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FlaskConical, BookOpen, ChevronDown, ChevronUp,
  ExternalLink, FileText, Image, BarChart3
} from "lucide-react";

// ======== SATELLITE IMAGE CLASSIFICATION DATA ========
const figures = [
  {
    src: "/Research/Satellite Image Classification/Snapshots/Fig 2.jpeg",
    caption: "Fig 2. Image enhancement pipeline — original satellite tile (left) vs. enhanced & normalized output (right), revealing structural features obscured in raw imagery.",
  },
  {
    src: "/Research/Satellite Image Classification/Snapshots/Fig 3.jpeg",
    caption: "Fig 3. Spectral feature extraction — original RGB satellite image (left) and VARI (Visible Atmospherically Resistant Index) vegetation map (right), used as an engineered feature channel.",
  },
  {
    src: "/Research/Satellite Image Classification/Snapshots/Fig 4.png",
    caption: "Fig 4. Texture feature analysis — GLCM-based contrast, homogeneity, energy and correlation for rough (Forest) vs. smooth (Sea/Lake) surfaces, validating discriminative power.",
  },
  {
    src: "/Research/Satellite Image Classification/Snapshots/Fig 5.png",
    caption: "Fig 5. Proposed CNN architecture — three convolutional blocks (32→64→128 filters) with SELU activations, MaxPooling, 50% Dropout, and 10-class Softmax output.",
  },
  {
    src: "/Research/Satellite Image Classification/Snapshots/Fig 6.jpeg",
    caption: "Fig 6. Training curve — model accuracy over 10 epochs. Validation accuracy converges near 80%, with minimal overfitting demonstrated by tight train/val gap.",
  },
  {
    src: "/Research/Satellite Image Classification/Snapshots/Fig 7.png",
    caption: "Fig 7. Confusion matrix across all 10 EuroSAT land cover classes. Sea/Lake and AnnualCrop show highest recall; Pasture and Highway are most challenging to discriminate.",
  },
];

const classes = [
  "AnnualCrop", "Forest", "HerbaceousVeg.", "Highway",
  "Industrial", "Pasture", "PermanentCrop", "Residential", "River", "Sea/Lake"
];

const metrics = [
  { metric: "Dataset", value: "EuroSAT", sub: "10-class, 27,000 images" },
  { metric: "Val Accuracy", value: "~80%", sub: "10-epoch training" },
  { metric: "Architecture", value: "Custom CNN", sub: "3 Conv blocks, Dropout 50%" },
  { metric: "Input", value: "64×64×3", sub: "RGB image tiles" },
];

function FigureGallery() {
  const [selected, setSelected] = useState(null);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {figures.map((fig, i) => (
          <motion.div
            key={i}
            className="glass rounded-xl overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelected(i)}
          >
            <div
              className="h-36 overflow-hidden flex items-center justify-center"
              style={{ background: "var(--bg-secondary)" }}
            >
              <img
                src={fig.src}
                alt={`Fig ${i + 2}`}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-2">
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>Fig {i + 2}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="rounded-2xl max-w-3xl w-full p-4"
              style={{
                backgroundColor: "rgba(13, 13, 26, 0.95)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
              }}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={figures[selected].src}
                alt={`Figure ${selected + 2}`}
                className="w-full rounded-xl object-contain max-h-[60vh]"
              />
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {figures[selected].caption}
              </p>
              <div className="flex justify-between mt-3">
                <button
                  className="btn-outline text-sm py-1.5 px-4"
                  onClick={() => setSelected((s) => Math.max(0, s - 1))}
                  disabled={selected === 0}
                >← Prev</button>
                <button className="btn-outline text-sm py-1.5 px-4" onClick={() => setSelected(null)}>Close</button>
                <button
                  className="btn-outline text-sm py-1.5 px-4"
                  onClick={() => setSelected((s) => Math.min(figures.length - 1, s + 1))}
                  disabled={selected === figures.length - 1}
                >Next →</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ResearchPage() {
  const [showMethodology, setShowMethodology] = useState(false);

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Hero Banner */}
      <div
        className="relative py-20 px-6 md:px-16 border-b banner-research"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 glass text-xs font-medium text-sky-400 px-4 py-1.5 rounded-full mb-5">
              <FlaskConical size={13} /> Applied ML Research
            </span>
            <h1 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">
              Research
            </h1>
            <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Applied machine learning research conducted under faculty supervision — exploring
              computer vision and deep learning for environmental and health applications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ===== SATELLITE IMAGE CLASSIFICATION ===== */}
      <div className="max-w-5xl mx-auto px-6 md:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Paper Header */}
          <div className="glass rounded-2xl p-8 border mb-8"
            style={{ borderColor: "rgba(14,165,233,0.25)" }}>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
              <div>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full border mb-3 text-amber-400 bg-amber-400/10 border-amber-400/30">
                  🔬 Ongoing · Paper in Preparation
                </span>
                <h2 className="font-space text-2xl md:text-3xl font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                  Automated Land Cover Classification<br />using Satellite Imagery
                </h2>
              </div>
              <a
                href="/Research/Satellite Image Classification/Automated-Land-Cover-Classification-using-Satellite-Imagery.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-2 px-4 flex-shrink-0"
              >
                <FileText size={15} /> View Paper Draft
              </a>
            </div>

            <div className="flex flex-wrap gap-4 mb-5 text-sm" style={{ color: "var(--text-muted)" }}>
              <span className="flex items-center gap-1.5">
                <BookOpen size={14} className="text-indigo-400" />
                Under Faculty Supervision · BVM Engineering
              </span>
              <span className="flex items-center gap-1.5">
                <BarChart3 size={14} className="text-cyan-400" />
                Computer Vision · Remote Sensing · Environmental Monitoring
              </span>
            </div>

            {/* Abstract */}
            <div className="glass rounded-xl p-5 mb-6">
              <h3 className="font-space font-semibold text-sm text-indigo-300 mb-2">Abstract</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                This study presents a deep learning approach for automated land cover
                classification using the EuroSAT benchmark dataset of multispectral
                Sentinel-2 satellite imagery. A custom Convolutional Neural Network
                (CNN) with three progressive convolutional blocks (32→64→128 filters),
                SELU activations, and 50% Dropout is designed to classify 64×64 RGB
                tiles into 10 land cover categories: AnnualCrop, Forest,
                HerbaceousVegetation, Highway, Industrial, Pasture, PermanentCrop,
                Residential, River, and Sea/Lake. Engineered features including VARI
                vegetation index and GLCM texture statistics (contrast, homogeneity,
                energy, correlation) supplement spectral information. The model
                achieves approximately 80% validation accuracy, with Sea/Lake and
                AnnualCrop classes showing highest discriminability.
              </p>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {metrics.map(({ metric, value, sub }) => (
                <div key={metric} className="glass rounded-xl p-4 text-center">
                  <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>{metric}</p>
                  <p className="font-space text-xl font-bold gradient-text">{value}</p>
                  <p className="text-xs mt-0.5 text-indigo-400">{sub}</p>
                </div>
              ))}
            </div>

            {/* Land Cover Classes */}
            <div className="mb-4">
              <p className="text-xs font-medium mb-2" style={{ color: "var(--text-muted)" }}>
                10 Land Cover Classes (EuroSAT)
              </p>
              <div className="flex flex-wrap gap-1.5">
                {classes.map((c) => (
                  <span key={c} className="tech-pill">{c}</span>
                ))}
              </div>
            </div>

            {/* Tech */}
            <div className="flex flex-wrap gap-1.5">
              {["TensorFlow", "Keras", "CNN", "Python", "EuroSAT", "GLCM", "VARI Index", "Jupyter", "NumPy", "Matplotlib"].map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>
          </div>

          {/* Architecture Image */}
          <div className="glass rounded-2xl overflow-hidden mb-8 border" style={{ borderColor: "var(--border-subtle)" }}>
            <div className="p-4 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <p className="text-sm font-medium text-indigo-300">Model Architecture</p>
            </div>
            <img
              src="/Research/Satellite Image Classification/LCC Model.png"
              alt="CNN Architecture"
              className="w-full object-contain bg-white/5 max-h-72"
            />
            <div className="p-4">
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Proposed CNN: Input (64×64×3 RGB tile) → Conv Block 1 (32 filters, SELU + MaxPool) →
                Conv Block 2 (64 filters, SELU + MaxPool) → Conv Block 3 (64 filters, SELU + MaxPool) →
                Dropout (50%) → Dense → Softmax (10-class output)
              </p>
            </div>
          </div>

          {/* Methodology Toggle */}
          <div className="mb-8">
            <button
              onClick={() => setShowMethodology((p) => !p)}
              className="flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors mb-4"
            >
              {showMethodology ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              {showMethodology ? "Hide Methodology" : "View Detailed Methodology"}
            </button>

            <AnimatePresence>
              {showMethodology && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="glass rounded-2xl p-6">
                    <h3 className="font-space font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Methodology</h3>
                    <ol className="space-y-4">
                      {[
                        { step: "Dataset", detail: "EuroSAT benchmark — 27,000 geo-referenced Sentinel-2 satellite image patches (64×64 px, RGB) across 10 land cover classes with ~2,700 images per class." },
                        { step: "Preprocessing", detail: "Histogram-based enhancement and min-max normalization to [0,1] to compensate for atmospheric scattering and sensor noise across different satellite passes." },
                        { step: "Feature Engineering", detail: "Computed VARI (Visible Atmospherically Resistant Index) as a vegetation spectral feature. Extracted GLCM texture statistics (contrast, homogeneity, energy, correlation) to capture surface texture discriminability." },
                        { step: "Architecture", detail: "Custom CNN: 3 convolutional blocks with increasing filter depth (32→64→128), SELU activations for self-normalizing behaviour, MaxPooling for spatial downsampling, 50% Dropout for regularization, Dense(128) + Softmax(10)." },
                        { step: "Training", detail: "Adam optimizer, categorical cross-entropy loss, 10 epochs with validation monitoring. Training/validation split 80/20, stratified per class." },
                        { step: "Evaluation", detail: "Per-class accuracy from confusion matrix analysis. Sea/Lake and AnnualCrop show highest recall; Pasture and Highway are most challenging due to spectral similarity with adjacent classes." },
                      ].map(({ step, detail }, i) => (
                        <li key={i} className="flex gap-4">
                          <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                            {i + 1}
                          </div>
                          <div>
                            <span className="text-sm font-semibold text-indigo-300">{step}: </span>
                            <span className="text-sm" style={{ color: "var(--text-secondary)" }}>{detail}</span>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Figure Gallery */}
          <div className="mb-8">
            <h3 className="font-space font-semibold text-xl mb-5 flex items-center gap-2" style={{ color: "var(--text-primary)" }}>
              <Image size={18} className="text-sky-400" /> Figures & Results
            </h3>
            <FigureGallery />
          </div>

          {/* Notebook link */}
          <div className="glass rounded-xl p-5 flex items-center justify-between">
            <div>
              <p className="font-space font-semibold text-sm" style={{ color: "var(--text-primary)" }}>Jupyter Notebook</p>
              <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                Full implementation — preprocessing, model training, evaluation
              </p>
            </div>
            <a
              href="/Research/Satellite Image Classification/Land_Cover_Classifier.ipynb"
              download
              className="btn-outline text-sm py-2 px-4"
            >
              <ExternalLink size={14} /> Download Notebook
            </a>
          </div>
        </motion.div>

        {/* ===== RESEARCH INTERESTS ===== */}
        <motion.div
          className="mt-16 glass rounded-2xl p-7 border"
          style={{ borderColor: "var(--border-subtle)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-space font-semibold text-xl gradient-text mb-4">
            Research Interests
          </h3>
          <p className="text-sm mb-5" style={{ color: "var(--text-secondary)" }}>
            Areas I'm actively exploring and excited to dive deeper into at graduate level:
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              "Computer Vision", "Time-Series Forecasting", "Deep Learning",
              "Remote Sensing & Earth Observation", "Health Informatics",
              "Explainable AI (XAI)", "Transfer & Self-Supervised Learning",
              "Multimodal Learning", "Natural Language Processing",
            ].map((interest) => (
              <span key={interest} className="tech-pill text-sm">{interest}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
