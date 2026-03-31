import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function SmartDietPage() {
  return (
    <ProjectDetailLayout
      title="SmartDiet Recommendation System"
      tagline="ML-powered diet planner using scikit-learn classification — achieving 87% recommendation accuracy on held-out test cases."
      category="🤖 Machine Learning"
      tech={["Flask", "scikit-learn", "Python", "Pandas", "NumPy", "HTML/CSS"]}
      github="https://github.com/ChiragRathod25/smartdiet"
      live="https://smartdiet-recommender.onrender.com/"
      image="/ProjectSnapshots/smartDiet.png"
      gradient="from-orange-500/20 to-amber-500/10"
      overview="SmartDiet uses scikit-learn classification models (Random Forest + feature selection) to analyze a user's current meal input and recommend a balanced, personalized diet plan. The system considers nutritional values and meal composition to generate contextual recommendations.\n\nModel performance: 87% classification accuracy on held-out test set using 5-fold cross-validation. Random Forest outperformed KNN and Naive Bayes baselines by +11% accuracy on the nutritional dataset, attributed to its ability to handle feature interactions between macronutrients."
      features={[
        "Random Forest classifier — 87% recommendation accuracy (5-fold CV)",
        "Feature importance: protein/carb ratio most predictive feature",
        "+11% accuracy over KNN and Naive Bayes baselines",
        "Nutritional dataset with 500+ food items and 15 features",
        "User meal input form with food item multi-select",
        "Personalized diet plan with nutritional breakdown",
        "Flask REST API backend with model serialization (joblib)",
        "Deployed on Render with persistent model serving",
      ]}
      challenges="Training on a nutritionally diverse dataset where macro and micro-nutrient interactions matter required careful feature engineering. Selecting the right classification boundary for 'balanced vs. unbalanced' diet required domain knowledge. Integrating the serialized Random Forest model into a clean Flask API with proper error handling for edge-case inputs (e.g., single-item meals) was key to a production-ready deployment."
    />
  );
}
