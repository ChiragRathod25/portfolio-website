import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  id,
  title,
  description,
  image,
  tech,
  github,
  live,
  featured,
}) => {
  return (
    <div className="group glass glass-hover rounded-2xl overflow-hidden flex flex-col h-full relative">
      {/* Featured Badge */}
      {featured && (
        <span className="absolute top-3 right-3 z-10 text-xs font-semibold px-2 py-1 rounded-full"
          style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "white" }}>
          ⭐ Featured
        </span>
      )}

      {/* Project Image / Placeholder */}
      <div className="h-44 w-full overflow-hidden bg-gradient-to-br from-indigo-900/40 to-cyan-900/20 flex items-center justify-center relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-slate-600">
            <span className="text-5xl opacity-30">🚀</span>
            <span className="text-xs">Preview coming soon</span>
          </div>
        )}
        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-space text-base font-semibold text-white mb-2 line-clamp-2 group-hover:text-indigo-300 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-slate-400 mb-4 line-clamp-3 leading-relaxed flex-1">
          {description}
        </p>

        {/* Tech Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map((item, i) => (
            <span key={i} className="tech-pill">
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
          <div className="flex gap-3">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Github size={14} /> Code
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
          <Link
            to={`/projects/${id}`}
            className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-medium transition-colors group/link"
          >
            Details
            <ArrowRight size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;