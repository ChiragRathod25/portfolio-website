import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function AgriTechPage() {
  return (
    <ProjectDetailLayout
      title="Agri-Tech Platform"
      tagline="Full-stack agricultural marketplace with ML crop recommendations (Random Forest, 91% accuracy), AI chatbot, and farmer e-commerce."
      category="🌿 Full Stack + ML"
      tech={["React", "Node.js", "Express", "MongoDB", "Python", "Random Forest", "scikit-learn", "REST API"]}
      github={null}
      live={null}
      image={null}
      gradient="from-green-500/20 to-lime-500/10"
      overview="A comprehensive agri-tech platform built to empower farmers with data-driven crop recommendations and direct market access. Integrates a Random Forest ML model achieving 91.2% accuracy for crop recommendation based on soil chemistry (N, P, K) and climate data, alongside an AI-powered chatbot for agricultural guidance and a full MERN-stack e-commerce system for direct product sales.\n\nThe platform demonstrates end-to-end ML integration: Python scikit-learn model → REST API → React frontend, alongside a scalable MongoDB-backed e-commerce architecture."
      features={[
        "Random Forest crop recommendation — 91.2% accuracy (22 crop classes)",
        "Input features: N, P, K values, temperature, humidity, pH, rainfall",
        "AI chatbot for agricultural Q&A and pest/disease guidance",
        "E-commerce marketplace for direct farm-to-buyer product sales",
        "Farmer profiles with product listing management",
        "Order management system with delivery tracking",
        "Python ML backend served via Flask REST API",
        "Scalable MERN stack with MongoDB Atlas",
        "Responsive mobile-first UI for rural accessibility",
      ]}
      challenges="The central engineering challenge was bridging the Python ML backend (scikit-learn Random Forest) with the Node.js MERN stack through a well-designed REST API layer, ensuring low-latency predictions. Training on a diverse agricultural dataset spanning 22 crop types across varied climatic zones required careful feature scaling and hyperparameter tuning. The ML model's 91.2% accuracy was validated on a geographically diverse hold-out set."
    />
  );
}
