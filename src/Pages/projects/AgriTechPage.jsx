import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function AgriTechPage() {
  return (
    <ProjectDetailLayout
      title="Agri-Tech Platform"
      tagline="Full-stack agricultural marketplace with ML crop recommendations, AI chatbot, and e-commerce for farmers."
      category="🌿 Full Stack + ML"
      tech={["React", "Node.js", "Express", "MongoDB", "Python", "Random Forest", "AI Chatbot", "REST API"]}
      github={null}
      live={null}
      image={null}
      gradient="from-green-500/20 to-lime-500/10"
      overview="A comprehensive agri-tech platform designed to empower farmers with data-driven insights and direct market access. The platform integrates machine learning (Random Forest) for crop recommendations based on soil and climate data, an AI-powered chatbot for agricultural Q&A, and a full e-commerce system for direct farm product sales — all within a scalable MERN stack architecture."
      features={[
        "ML-based crop recommendation engine (Random Forest)",
        "Soil and climate data analysis for personalized advice",
        "AI chatbot for agricultural guidance and Q&A",
        "E-commerce marketplace for direct farm product sales",
        "Farmer profiles and product listing management",
        "Order management and delivery tracking",
        "Scalable backend architecture with MongoDB",
        "REST APIs for all ML and business logic",
        "Responsive interface designed for low-bandwidth usage",
      ]}
      challenges="The core challenge was bridging the ML backend (Python/scikit-learn) with the Node.js MERN stack through well-designed REST APIs. Training the Random Forest model on diverse agricultural datasets for different crop types and climatic zones required significant data preprocessing and validation."
    />
  );
}
