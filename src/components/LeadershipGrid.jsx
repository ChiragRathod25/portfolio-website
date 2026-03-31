import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Heart } from "lucide-react";

const leadership = [
  {
    title: "Vice President",
    subtitle: "CodeChef College Chapter",
    icon: Star,
    date: "Nov 2024 – Present",
    iconColor: "text-violet-400",
    bgColor: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/30",
    description:
      "Promoted competitive programming through events and initiatives. Led the chapter to double its participation rate and organized national-level coding contests.",
  },
  {
    title: "Event Manager",
    subtitle: "Microsoft Learn Student Club",
    icon: Users,
    date: "Dec 2023 – Aug 2024",
    iconColor: "text-blue-400",
    bgColor: "from-blue-500/20 to-sky-500/10",
    border: "border-blue-500/30",
    description:
      "Led organization of coding competitions and full-stack development workshops, impacting 200+ participants and improving technical skill development across the college.",
  },
  {
    title: "Community Volunteer",
    subtitle: "BAPS Bal Mandal",
    icon: Heart,
    date: "Aug 2018 – Present",
    iconColor: "text-pink-400",
    bgColor: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/30",
    description:
      "Led community events including Bal Parayan and de-addiction campaigns, creating positive impact for 1000+ participants. Demonstrates long-term commitment to social service.",
  },
];

function LeadershipGrid() {
  return (
    <section
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-primary)" }}
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
            Leadership & Volunteering
          </h2>
          <div className="section-divider mb-4" />
          <p className="max-w-xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            Beyond the code — building communities, leading teams, and giving back.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {leadership.map(({ title, subtitle, icon: Icon, date, iconColor, bgColor, border, description }, i) => (
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
                  <h3 className="font-space font-semibold" style={{ color: "var(--text-primary)" }}>{title}</h3>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{subtitle}</p>
                  <p className="text-xs italic mt-0.5" style={{ color: "var(--text-muted)" }}>{date}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeadershipGrid;
