import { motion } from "framer-motion";
import { TimelineItem } from "./index.js";

const experiences = [
  {
    role: "React Developer Intern",
    company: "Tech Elecon Private Limited — Anand, Gujarat",
    time: "June 2025 – Present",
    description:
      "• Developed scalable, user-friendly web applications using ReactJS\n• Collaborated with design teams to implement pixel-perfect UI/UX designs\n• Optimized application performance through code splitting and lazy loading\n• Contributed to code reviews and built reusable component libraries for real-world projects",
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Git"],
  },
  {
    role: "ML & Data Science Intern",
    company: "Industry Internship (Remote)",
    time: "4 Months",
    description:
      "• Developed data-driven solutions involving data preprocessing, exploratory analysis, and machine learning models for prediction tasks\n• Utilized Python (Pandas, NumPy, scikit-learn) to build end-to-end ML pipelines\n• Evaluated model performance using metrics such as accuracy, precision, recall, and RMSE\n• Gained practical experience in handling real-world datasets and deploying ML models",
    tech: ["Python", "Pandas", "NumPy", "scikit-learn", "ML", "Data Analysis"],
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
      "• Built and deployed a MERN-stack Progressive Web App to digitize attendance tracking\n• Implemented role-based access control, real-time notifications, and parent-volunteer communication\n• Actively used by 100+ users — demonstrates full-stack engineering, system design, and real-world impact\n• Integrated service workers for offline functionality and push notification support",
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

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-16"
      style={{ backgroundColor: "var(--bg-secondary)" }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-space text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <div className="section-divider mb-4" />
          <p className="text-slate-400 max-w-xl mx-auto">
            Internships, freelance projects, and research work that shaped my
            engineering mindset.
          </p>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <TimelineItem key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
