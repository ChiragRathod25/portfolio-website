import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "../components/index.js";

const projects = [
  {
    id: "money-monk",
    title: "MoneyMonk – Personal Expense Tracker",
    description: "Full-stack finance app for tracking expenses, setting budgets, and generating spending insights with charts.",
    image: "/ProjectSnapshots/moneyMonk.png",
    tech: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    github: "https://github.com/ChiragRathod25/moneyMonk",
    live: "https://moneymonk.vercel.app/",
    category: "web",
    featured: true,
  },
  {
    id: "agri-tech",
    title: "Agri-Tech Platform",
    description: "Full-stack agri-tech platform with ML crop recommendations (Random Forest, 91.2% accuracy), AI chatbot, and farmer e-commerce.",
    image: null,
    tech: ["React", "Node.js", "Python", "Random Forest", "AI Chatbot", "MongoDB"],
    github: null,
    live: null,
    category: "ml",
    featured: true,
  },
  {
    id: "health-prediction",
    title: "AI Health Prediction System",
    description: "TFT/LSTM time-series deep learning system forecasting 7-day health scores — TFT achieved RMSE 0.38 (↓23% vs. baseline).",
    image: null,
    tech: ["PyTorch", "LSTM", "TFT", "Attention", "Python", "Optuna"],
    github: null,
    live: null,
    category: "ml",
    featured: true,
  },
  {
    id: "satellite-classification",
    title: "Satellite Image Classification",
    description: "Faculty-supervised CNN research classifying EuroSAT imagery into 10 land cover classes (~80% val accuracy). Paper in preparation.",
    image: "/Research/Satellite Image Classification/Snapshots/Fig 7.png",
    tech: ["TensorFlow", "Keras", "CNN", "Python", "EuroSAT", "Remote Sensing"],
    github: null,
    live: null,
    category: "ml",
    featured: true,
  },
  {
    id: "smart-diet",
    title: "SmartDiet Recommendation",
    description: "ML-powered diet planner using scikit-learn Random Forest — 87% recommendation accuracy on held-out test cases.",
    image: "/ProjectSnapshots/smartDiet.png",
    tech: ["Flask", "scikit-learn", "Python", "ML"],
    github: "https://github.com/ChiragRathod25/smartdiet",
    live: "https://smartdiet-recommender.onrender.com/",
    category: "ml",
  },
  {
    id: "youtube-backend",
    title: "YouTube Backend Clone",
    description: "Scalable production-grade backend with JWT auth, video upload via Multer/Cloudinary, subscriptions, and aggregation pipelines.",
    image: "/ProjectSnapshots/youtubeBackend.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "Cloudinary"],
    github: "https://github.com/ChiragRathod25/youtube-backend",
    live: null,
    category: "backend",
  },
  {
    id: "sports-inventory",
    title: "Sports Inventory Management",
    description: "Webathon'24 winner (1st/90). Full-featured inventory & e-commerce system with user and admin dashboards.",
    image: "/ProjectSnapshots/sportsInventory.png",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/ChiragRathod25/sports-inventory-management",
    live: null,
    category: "web",
  },
  {
    id: "animal-classification",
    title: "Animal Image Classification",
    description: "ResNet50 transfer learning classifier achieving 94.2% top-1 accuracy on 10-class animal dataset — +18.7% over vanilla CNN.",
    image: "/ProjectSnapshots/animalImageClassification.png",
    tech: ["TensorFlow", "Keras", "CNN", "ResNet50", "Transfer Learning"],
    github: "https://github.com/ChiragRathod25/animal-image-classification",
    live: null,
    category: "ml",
  },
  {
    id: "blog-website",
    title: "Blog Platform",
    description: "Full-stack blog platform with authentication, rich text post creation, comments, and a clean responsive UI.",
    image: "/ProjectSnapshots/letsBlogIt.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ChiragRathod25/blog-website",
    live: "https://letsblogit.netlify.app/",
    category: "web",
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "ml", label: "🤖 ML / AI" },
  { key: "web", label: "🌐 Web" },
  { key: "backend", label: "⚙️ Backend" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Banner */}
      <div
        className="relative py-20 px-6 md:px-16 border-b banner-projects"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="dot-grid absolute inset-0 opacity-25" />
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h1>
            <p className="max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              From production web apps to ML research systems — 9 projects with detailed breakdowns.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filter + Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === key
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "glass text-slate-400 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((proj, i) => (
              <motion.div
                key={proj.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProjectCard {...proj} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
