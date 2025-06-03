import { ExternalLink, Github } from "lucide-react";
import {ProjectCard} from "./index.js";
const projects = [
  {
    title: "MoneyMonk - Personal Expense Tracker",
    description:
      "A personal expense tracker app that allows users to track their expenses, set budgets, and generate reports.",
    image: "", // Add image URLs later
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/chiragrathod25/moneyMonk",
    live:"https://moneymonk.vercel.app/"
  },
  {
    title: "SmartDiet Recommendation",
    description:
      "A Machine Learning project that recommends diet plans based on the user's input meals. Built with Flask and scikit-learn.",
    image: "",
    tech: ["Flask", "scikit-learn", "Python"],
    github: "https://github.com/chiragrathod25/smartdiet",
    live:"https://smartdiet-recommender.onrender.com/"
  },
  {
    title: "Youtube Backend",
    description:
      "Scalable backend for a YouTube-like platform. Implements RESTful APIs, JWT authentication, and media handling using Multer and Cloudinary.",
    image: "",
    tech: ["Node.js", "Express", "MongoDB", "JWT", "Multer", "Cloudinary"],
    github: "https://github.com/chiragrathod25/youtube-backend",
  },
  {
    title: "Sports Inventory Management",
    description:
      "An inventory management system for a sports e-commerce site. Includes user and admin features like cart, checkout, and order generation.",
    image: "",
    tech: ["PHP", "MySQL", "Bootstrap"],
    github: "https://github.com/chiragrathod25/sports-inventory-management",
  },
  {
    title: "Animal Image Classification",
    description:
      "A deep learning model for classifying animal images into different survival categories using CNNs.",
    image: "",
    tech: ["TensorFlow", "Keras", "CNN"],
    github: "https://github.com/chiragrathod25/animal-image-classification",
  },
  {
    title: "Blog Website",
    description:
      "A full-stack blog platform built for practicing web development skills, with features like authentication, comments, and post creation.",
    image: "",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/chiragrathod25/blog-website",
    live:"https://letsblogit.netlify.app/"
  },
];

export default function Projects() {
  return (
    <div className="bg-blue-50 min-h-screen font-poppins text-gray-900 px-6 md:px-24 py-6">
      <h2 className="
        text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800
      ">My Projects</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </div>
  );
}
