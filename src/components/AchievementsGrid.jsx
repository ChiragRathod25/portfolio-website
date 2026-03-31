import React from "react";
import { motion } from "framer-motion";
import { Trophy, Star, Users } from "lucide-react";

const achievements = [
  {
    title: "Webathon'24 Winner 🏆",
    icon: Trophy,
    date: "April 2024",
    iconColor: "text-amber-400",
    bgColor: "from-amber-500/20 to-yellow-500/10",
    border: "border-amber-500/30",
    description:
      "Ranked 1st out of 90 participants. Built a sports inventory management system with advanced user and admin features in a timed competitive format.",
  },
  {
    title: "Google Digital Marketing",
    icon: Star,
    date: "March 2023",
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-500/30",
    description:
      "Completed Google's Digital Marketing certification covering SEO, SEM, analytics, and social media growth strategies.",
  },
  {
    title: "MS Learn Club – Event Manager",
    icon: Users,
    date: "Dec 2023 – Aug 2024",
    iconColor: "text-green-400",
    bgColor: "from-green-500/20 to-teal-500/10",
    border: "border-green-500/30",
    description:
      "Organized a coding contest and full-stack workshop that benefited over 200 participants, boosting club engagement and technical skill development.",
  },
];

function AchievementsGrid() {
  return (
    <section
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Milestones, recognitions, and certifications along the journey.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map(({ title, description, icon: Icon, date, iconColor, bgColor, border }, i) => (
            <motion.div
              key={i}
              className={`glass glass-hover rounded-2xl p-6 bg-gradient-to-br ${bgColor} border ${border}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-start gap-4 mb-3">
                <div className={`p-3 glass rounded-xl ${iconColor}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="font-space font-semibold text-white leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 italic">{date}</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AchievementsGrid;
