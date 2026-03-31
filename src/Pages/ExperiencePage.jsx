import React from "react";
import { motion } from "framer-motion";
import { TimelineItem, Education, AchievementsGrid, LeadershipGrid, Certifications } from "../components/index.js";

const experiences = [
  {
    role: "ML & Data Science Intern",
    company: "Industry Internship (Remote)",
    time: "4 Months",
    description:
      "• Developed data-driven solutions involving data preprocessing, exploratory analysis, and machine learning models for prediction tasks\n• Utilized Python (Pandas, NumPy, scikit-learn) to build end-to-end ML pipelines\n• Evaluated model performance using metrics including accuracy, precision, recall, and RMSE\n• Gained practical experience handling real-world datasets and deploying ML models",
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "ML", "Data Analysis", "RMSE"],
  },
  {
    role: "React Developer Intern",
    company: "Tech Elecon Private Limited — Anand, Gujarat",
    time: "June 2025 – Present",
    description:
      "• Developed scalable, user-friendly web applications using ReactJS\n• Collaborated with design teams to implement pixel-perfect UI/UX designs\n• Optimized application performance through code splitting and lazy loading\n• Contributed to code reviews and built reusable component libraries",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Git"],
  },
  {
    role: "Full Stack Web Development Intern",
    company: "DialogFlows — Edison, New Jersey (Remote)",
    time: "June 2024",
    description:
      "• Developed web and mobile apps using ReactJS, ExpressJS, and NodeJS\n• Managed codebase with Git and GitHub for collaborative development\n• Designed and optimized MongoDB databases for performance and scalability",
    tech: ["React", "Node.js", "Express", "MongoDB", "Git"],
  },
  {
    role: "Full Stack Developer – Freelance",
    company: "BAPS APC Bal Mandal",
    time: "Jan 2024 – Apr 2024",
    description:
      "• Built and deployed a MERN-stack PWA to digitize attendance tracking\n• Implemented role-based access control, real-time notifications, and parent-volunteer communication\n• Actively used by 100+ users — demonstrates full-stack engineering and real-world impact\n• Integrated service workers for offline functionality and push notifications",
    tech: ["React", "Node.js", "MongoDB", "Express", "PWA", "Push API"],
  },
  {
    role: "Cyber Security Internship",
    company: "Edunet Foundation (Online)",
    time: "July 2023",
    description:
      "• Enhanced skills in ethical hacking, network security, and incident response\n• Learned cybersecurity tools including Wireshark, Nmap, and Metasploit\n• Completed practical labs on vulnerability assessment and penetration testing",
    tech: ["Cyber Security", "Ethical Hacking", "Networking", "Wireshark"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Banner */}
      <div
        className="relative py-20 px-6 md:px-16 border-b banner-experience"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="dot-grid absolute inset-0 opacity-25" />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h1>
            <p className="max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
              Internships, freelance projects, and community work that shaped my engineering mindset.
            </p>
          </motion.div>
        </div>
      </div>

      <section className="pt-6 pb-16 px-6 md:px-16 max-w-4xl mx-auto">
        <motion.h2
          className="font-space text-2xl font-bold mb-6" style={{ color: "var(--text-primary)" }}
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        {experiences.map((exp, i) => (
          <TimelineItem key={i} {...exp} />
        ))}
      </section>

      {/* Education */}
      <Education />

      {/* Certifications */}
      <Certifications />

      {/* Achievements + Leadership */}
      <AchievementsGrid />
      <LeadershipGrid />
    </div>
  );
}
