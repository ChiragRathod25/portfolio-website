// components/ProjectCard.jsx
import { ExternalLink, Github } from "lucide-react";

const ProjectCard = ({ title, description, image, tech, github,live="" }) => {
  return (
    <div className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 ">
      <div className="h-48 w-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-2xl flex items-center justify-center text-gray-400">
        <span className="text-sm">{image ? <img src={image} alt={title} className="h-full w-full object-cover rounded-t-2xl" /> : "Project Image"}</span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item, i) => (
            <span
              key={i}
              className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 flex gap-4 text-sm text-blue-600">
          {github && (
            <a
              href={github}
              target="_blank"
              className="flex items-center gap-1 hover:underline"
            >
              <Github size={16} /> Code
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              className="flex items-center gap-1 hover:underline"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;