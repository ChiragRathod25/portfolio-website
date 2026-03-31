import React from "react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    emoji: "🎨",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    skills: [
      "React.js", "JavaScript (ES6+)", "HTML5", "CSS3",
      "Tailwind CSS", "Framer Motion", "Redux Toolkit", "TypeScript",
    ],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    skills: [
      "Node.js", "Express.js", "REST APIs", "JWT Auth",
      "MongoDB", "MySQL", "Mongoose", "Cloudinary", "Multer",
    ],
  },
  {
    category: "ML & AI",
    emoji: "🤖",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
    skills: [
      "Python", "PyTorch", "TensorFlow", "scikit-learn",
      "Pandas", "NumPy", "LSTM", "CNN", "TFT", "Flask",
    ],
  },
  {
    category: "Mathematical Foundations",
    emoji: "📐",
    color: "from-indigo-500/20 to-violet-500/10",
    border: "border-indigo-500/30",
    skills: [
      "Linear Algebra", "Calculus & Optimization",
      "Probability & Statistics", "Information Theory",
      "Matrix Decomposition", "Gradient Descent",
    ],
  },
  {
    category: "DevOps & Cloud",
    emoji: "☁️",
    color: "from-green-500/20 to-teal-500/10",
    border: "border-green-500/30",
    skills: [
      "Git", "GitHub", "Vercel", "Netlify", "Render",
      "MongoDB Atlas", "PWA", "Docker (Basics)",
    ],
  },
  {
    category: "Languages",
    emoji: "💻",
    color: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
    skills: ["JavaScript", "Python", "PHP", "C", "C++", "SQL"],
  },
  {
    category: "Tools & Others",
    emoji: "🛠️",
    color: "from-teal-500/20 to-cyan-500/10",
    border: "border-teal-500/30",
    skills: [
      "VS Code", "Postman", "Figma", "Jupyter Notebook",
      "Bootstrap", "Keras", "Hugging Face", "Agile / Scrum",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills({ showHeading = true }) {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header — only shown when not already provided by parent page */}
        {showHeading && (
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">
              Skills & Technologies
            </h2>
            <div className="section-divider mb-4" />
            <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              From system-level algorithms to production ML pipelines — tools I
              use daily across the full stack.
            </p>
          </motion.div>
        )}

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map(({ category, emoji, color, border, skills }) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className={`glass glass-hover rounded-2xl p-6 bg-gradient-to-br ${color} border ${border}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{emoji}</span>
                <h3
                  className="font-space font-semibold text-lg"
                  style={{ color: "var(--text-primary)" }}
                >
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="tech-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
