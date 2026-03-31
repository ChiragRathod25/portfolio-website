import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function SmartDietPage() {
  return (
    <ProjectDetailLayout
      title="SmartDiet Recommendation System"
      tagline="ML-powered diet planner that suggests personalized meal plans based on your daily food intake."
      category="🤖 Machine Learning"
      tech={["Flask", "scikit-learn", "Python", "Pandas", "NumPy", "HTML/CSS"]}
      github="https://github.com/ChiragRathod25/smartdiet"
      live="https://smartdiet-recommender.onrender.com/"
      image="/ProjectSnapshots/smartDiet.png"
      gradient="from-orange-500/20 to-amber-500/10"
      overview="SmartDiet uses machine learning classification algorithms to analyze a user's current meal input and recommend a balanced, personalized diet plan. The system considers nutritional values, dietary restrictions, and health goals to generate contextual meal suggestions powered by scikit-learn models."
      features={[
        "User meal input form with food item selection",
        "ML classification model trained on nutritional datasets",
        "Personalized diet plan generation",
        "Nutritional breakdown per recommendation",
        "Flask REST API backend",
        "Clean responsive UI",
        "Deployed on Render with persistent model serving",
      ]}
      challenges="Training the recommendation model on a nutritionally diverse dataset and ensuring prediction quality was the main challenge. Integrating the Python ML backend with a seamless Flask API required careful serialization of the model and handling edge cases in user input."
    />
  );
}
