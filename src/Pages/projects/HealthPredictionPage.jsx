import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function HealthPredictionPage() {
  return (
    <ProjectDetailLayout
      title="AI Health Prediction System"
      tagline="Deep learning time-series system forecasting personalized health scores using TFT, LSTM, and Attention — TFT achieved 23% lower RMSE vs baseline."
      category="🤖 Deep Learning / ML Research"
      tech={["PyTorch", "LSTM", "TFT", "Attention Mechanism", "Python", "Pandas", "NumPy", "Optuna"]}
      github={null}
      live={null}
      image={null}
      gradient="from-pink-500/20 to-rose-500/10"
      overview="An AI-powered health forecasting system that benchmarks three deep learning architectures — Temporal Fusion Transformer (TFT), LSTM with Attention, and a baseline MLP — for personalized health score prediction from lifestyle time-series data. The system analyzes multi-variate temporal signals (sleep, exercise, diet, stress) to forecast 7-day health trajectories.\n\nKey quantitative result: TFT achieved RMSE of 0.38 (↓23% vs LSTM baseline, R²=0.91), demonstrating superior interpretability via its multi-head attention mechanism. Developed under faculty guidance — results documented for potential publication."
      features={[
        "7-day multi-step health score forecasting",
        "Temporal Fusion Transformer (TFT) — RMSE: 0.38, R²: 0.91",
        "LSTM + Attention baseline — RMSE: 0.47, R²: 0.74",
        "Lifestyle data engineering: sleep, exercise, diet, stress features",
        "Hyperparameter optimization with Optuna (50+ trials)",
        "Rolling window temporal cross-validation (no data leakage)",
        "Feature importance via TFT attention weights visualization",
        "Health recommendation engine based on predicted trajectories",
        "PyTorch training with early stopping + LR scheduling",
      ]}
      challenges="Implementing TFT from scratch in PyTorch required deep understanding of its gating mechanisms (GLU), variable selection networks, and multi-horizon attention. Ensuring no temporal data leakage during cross-validation and handling variable-length input sequences were critical design decisions. The 23% RMSE improvement over LSTM validated the hypothesis that TFT's interpretable attention architecture better captures complex temporal dependencies in health data."
    />
  );
}
