import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectCard } from "./index.js";

const projects = [
  {
    id: "money-monk",
    title: "MoneyMonk – Personal Expense Tracker",
    description:
      "A full-stack personal finance app for tracking expenses, setting budgets, and generating insights with beautiful charts and reports.",
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
    description:
      "Full-stack agri-tech platform integrating e-commerce, machine learning (Random Forest), and AI chatbot to support farmers with crop recommendations, soil analysis, and direct product sales.",
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
    description:
      "Deep learning time-series system using TFT, LSTM, and Attention models to forecast personalized health scores and provide lifestyle-based recommendations.",
    image: null,
    tech: ["PyTorch", "LSTM", "TFT", "Attention", "Python", "ML"],
    github: null,
    live: null,
    category: "ml",
    featured: true,
  },
  {
    id: "smart-diet",
    title: "SmartDiet Recommendation",
    description:
      "ML-powered diet recommendation system that suggests personalized meal plans based on user-input meals using scikit-learn classification algorithms.",
    image: "/ProjectSnapshots/smartDiet.png",
    tech: ["Flask", "scikit-learn", "Python", "ML"],
    github: "https://github.com/ChiragRathod25/smartdiet",
    live: "https://smartdiet-recommender.onrender.com/",
    category: "ml",
  },
  {
    id: "satellite-classification",
    title: "Satellite Image Classification",
    description:
      "Research project using deep learning techniques to classify satellite imagery for land cover analysis and environmental monitoring. Under faculty supervision.",
    image: "/ProjectSnapshots/animalImageClassification.png",
    tech: ["TensorFlow", "CNN", "Python", "Deep Learning", "Remote Sensing"],
    github: null,
    live: null,
    category: "ml",
  },
  {
    id: "youtube-backend",
    title: "YouTube Backend Clone",
    description:
      "Scalable backend for a YouTube-like platform with RESTful APIs, JWT authentication, video upload, and media handling via Multer and Cloudinary.",
    image: "/ProjectSnapshots/youtubeBackend.png",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "Cloudinary"],
    github: "https://github.com/ChiragRathod25/youtube-backend",
    live: null,
    category: "backend",
  },
  {
    id: "sports-inventory",
    title: "Sports Inventory Management",
    description:
      "Full-featured inventory system for a sports e-commerce site. Includes user/admin dashboards, cart management, checkout flow, and order generation.",
    image: "/ProjectSnapshots/sportsInventory.png",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/ChiragRathod25/sports-inventory-management",
    live: null,
    category: "web",
  },
  {
    id: "animal-classification",
    title: "Animal Image Classification",
    description:
      "A CNN-based deep learning model for classifying animal images into different ecological categories using transfer learning techniques.",
    image: "/ProjectSnapshots/animalImageClassification.png",
    tech: ["TensorFlow", "Keras", "CNN", "Python", "Transfer Learning"],
    github: "https://github.com/ChiragRathod25/animal-image-classification",
    live: null,
    category: "ml",
  },
  {
    id: "blog-website",
    title: "Blog Platform",
    description:
      "Full-stack blog platform with authentication, rich text post creation, comments, user profiles, and a clean responsive UI.",
    image: "/ProjectSnapshots/letsBlogIt.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ChiragRathod25/blog-website",
    live: "https://letsblogit.netlify.app/",
    category: "web",
  },
];

const filters = [
  { key: "all", label: "All Projects" },
  { key: "web", label: "🌐 Web" },
  { key: "ml", label: "🤖 ML / AI" },
  { key: "backend", label: "⚙️ Backend" },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">
            Projects
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto">
            From production web apps to ML research — here's what I've built.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === key
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/30"
                  : "glass text-slate-400 hover:text-white hover:border-indigo-500/50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
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
    </section>
  );
}
