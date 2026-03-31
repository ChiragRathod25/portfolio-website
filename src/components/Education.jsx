import { motion } from "framer-motion";

const educationData = [
  {
    period: "June 2022 – Present",
    degree: "B.E. in Computer Engineering",
    institution: "Birla Vishvakarma Mahavidyalaya (BVM), Vallabh Vidyanagar",
    grade: "CGPA: 8.9",
    emoji: "🎓",
    color: "from-indigo-500/20 to-violet-500/20",
    border: "border-indigo-500/30",
    highlights: [
      "Core coursework: DSA, Database Systems, OS, Computer Networks",
      "Practical work in web development, ML & cloud computing",
      "Collaborated on team projects using Agile methodologies",
      "Active in coding contests and technical workshops",
    ],
  },
  {
    period: "2020 – 2022",
    degree: "Higher Secondary (Science – PCM)",
    institution: "BAPS Swaminarayan Vidyamandir, Anand",
    grade: "89%",
    emoji: "📚",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
    highlights: [
      "Focused on Mathematics, Physics, and Chemistry",
      "Engaged in leadership and cultural activities",
      "Strong analytical foundation for engineering studies",
    ],
  },
];

export default function Education() {
  return (
    <section
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">
            Education
          </h2>
          <div className="section-divider mb-4" />
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            The academic foundation behind the code.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`glass glass-hover rounded-2xl p-7 bg-gradient-to-br ${edu.color} border ${edu.border}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <span className="text-4xl">{edu.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <p className="text-xs font-medium text-indigo-400 glass px-3 py-1 rounded-full">
                      {edu.period}
                    </p>
                    <span className="text-sm font-bold gradient-text">
                      {edu.grade}
                    </span>
                  </div>
                  <h3 className="text-xl font-space font-semibold mt-2" style={{ color: "var(--text-primary)" }}>
                    {edu.degree}
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: "var(--text-secondary)" }}>{edu.institution}</p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2">
                {edu.highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
