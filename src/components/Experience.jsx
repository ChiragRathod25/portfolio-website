import {TimelineItem} from "./index.js"; 

const experiences = [
 {
    role:"React Developer Intern",
    company:"Tech Elecon Private Limited (Anand, Gujarat)", 
    time:"June 2025 - Present",
    description:
        "• Developed scalable, user-friendly web applications using ReactJS\n• Collaborated with design teams to implement UI/UX designs\n• Optimized application performance and contributed to code reviews\n• Built reusable components for real-world projects",
    tech: ["React", "JavaScript", "HTML", "CSS", "Git"],

 },
  {
    role: "Full Stack Web Development Intern",
    company: "DialogFlows (Edison, New Jersey)",
    time: "June 2024",
    description:
      "• Developed web and mobile apps using ReactJS, ExpressJS, and NodeJS\n• Learned to manage code with Git and GitHub\n• Designed databases with MongoDB",
    tech: ["React", "Node.js", "Express", "MongoDB", "Git"],
  },
   {
    role: "Full Stack Developer",
    company: "Freelance Project - BAPS APC Bal Mandal",
    time: "Jan 2024 - Apr 2024",
    description:
      "Built and deployed a MERN-stack PWA to digitize attendance tracking, enable parent-volunteer communication, manage student profiles, and support push notifications.",
    tech: ["React", "Node.js", "MongoDB", "Express", "PWA", "Push API"],
  },
  {
    role: "Cyber Security Internship",
    company: "Edunet Foundation (Online)",
    time: "July 2023",
    description:
      "• Enhanced skills in ethical hacking, network security and incident response\n• Learned various cybersecurity tools and techniques",
    tech: ["Cyber Security", "Ethical Hacking", "Networking"],
  },
];



export default function Experience() {
  return (
  <div className="bg-blue-50 px-6 md:px-24 py-6  font-poppins text-gray-900" id="experience"
  >
      <h2 className="  text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">Experience</h2>
      <div className="space-y-10 max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <TimelineItem key={i} {...exp} />
        ))}
      </div>
    </div>
  );
}
