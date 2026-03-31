import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function HealthPredictionPage() {
  return (
    <ProjectDetailLayout
      title="AI Health Prediction System"
      tagline="Deep learning time-series system forecasting personalized health scores using TFT, LSTM, and Attention models."
      category="🤖 Deep Learning / ML"
      tech={["PyTorch", "LSTM", "TFT", "Attention Mechanism", "Python", "Pandas", "NumPy", "Time-Series"]}
      github={null}
      live={null}
      image={null}
      gradient="from-pink-500/20 to-rose-500/10"
      overview="An AI-powered health forecasting system that uses advanced deep learning models — Temporal Fusion Transformer (TFT), Long Short-Term Memory (LSTM), and multi-head Attention — to predict personalized health scores based on user lifestyle data. The system analyzes time-series health metrics to provide proactive wellness recommendations. Developed under faculty guidance."
      features={[
        "Time-series health score forecasting",
        "Temporal Fusion Transformer (TFT) implementation",
        "LSTM with Attention mechanism for sequence modeling",
        "Lifestyle data input: sleep, exercise, diet, stress",
        "Personalized health trajectory visualization",
        "Multi-step future prediction (7-day outlook)",
        "Feature importance analysis",
        "PyTorch training pipeline with early stopping",
        "Health recommendation engine based on predictions",
      ]}
      challenges="Implementing the Temporal Fusion Transformer from scratch in PyTorch and ensuring it outperformed baseline LSTM models was the primary challenge. Handling variable-length time-series inputs, engineering meaningful health features, and preventing data leakage in temporal cross-validation required careful design. Developed under faculty supervision with publication in progress."
    />
  );
}
