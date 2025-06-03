import { Briefcase } from "lucide-react";

const TimelineItem = ({ role, company, time, description, tech }) => (
  <div className="relative pl-10 border-l border-blue-200 group hover:border-blue-400 transition-all">
    <div className="absolute -left-3 top-1.5 w-6 h-6 bg-gradient-to-tr from-blue-500 to-cyan-400 text-white rounded-full flex items-center justify-center shadow-md">
      <Briefcase size={14} />
    </div>
    <div className="bg-white shadow-sm rounded-xl p-6 mt-2 transition-transform duration-300 group-hover:scale-[1.02]">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{role}</h3>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
        <p className="text-xs italic text-gray-500">{time}</p>
      </div>
      <p className="mt-4 whitespace-pre-line text-sm text-gray-700">
        {description}
      </p>
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
    </div>
  </div>
);

export default TimelineItem;
