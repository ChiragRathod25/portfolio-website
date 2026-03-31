import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const TimelineItem = ({ role, company, time, description, tech }) => (
  <motion.div
    className="relative pl-12 pb-10"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* Vertical Line */}
    <div className="absolute left-4 top-6 bottom-0 w-px bg-gradient-to-b from-indigo-500/60 to-transparent" />

    {/* Dot */}
    <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
    >
      <div className="absolute inset-0 rounded-full opacity-40 blur-sm"
        style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
      />
      <Briefcase size={14} className="text-white relative z-10" />
    </div>

    {/* Card */}
    <div className="glass glass-hover rounded-2xl p-6 ml-2 group">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1">
        <div>
          <h3 className="font-space font-semibold text-white text-lg group-hover:text-indigo-300 transition-colors">
            {role}
          </h3>
          <p className="text-sm text-slate-400">{company}</p>
        </div>
        <span className="text-xs text-indigo-400 font-medium glass px-3 py-1 rounded-full whitespace-nowrap h-fit">
          {time}
        </span>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm text-slate-400 whitespace-pre-line leading-relaxed">
        {description}
      </p>

      {/* Tech Pills */}
      {tech && tech.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tech.map((item, i) => (
            <span key={i} className="tech-pill">{item}</span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

export default TimelineItem;
