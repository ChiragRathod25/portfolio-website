import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function AnimalClassificationPage() {
  return (
    <ProjectDetailLayout
      title="Animal Image Classification"
      tagline="CNN + transfer learning model achieving 94.2% top-1 accuracy on 10-class animal dataset using ResNet50 backbone."
      category="🤖 Deep Learning"
      tech={["TensorFlow", "Keras", "CNN", "ResNet50", "Python", "Transfer Learning", "NumPy"]}
      github="https://github.com/ChiragRathod25/animal-image-classification"
      live={null}
      image="/ProjectSnapshots/animalImageClassification.png"
      gradient="from-green-500/20 to-teal-500/10"
      overview="A CNN-based image classification system using transfer learning (ResNet50 pretrained on ImageNet) to classify animal images into 10 ecological categories. Strategic data augmentation addressed class imbalance, while fine-tuning the top layers of ResNet50 achieved strong generalization.\n\nKey result: 94.2% top-1 accuracy on the held-out test set. Outperformed a vanilla CNN trained from scratch by +18.7% (75.5% → 94.2%), demonstrating the power of transfer learning on domain-specific classification tasks."
      features={[
        "ResNet50 transfer learning — 94.2% top-1 test accuracy",
        "+18.7% over vanilla CNN trained from scratch (75.5% baseline)",
        "10-class ecological animal classification",
        "Dataset: 5,000+ images with class balancing via augmentation",
        "Data augmentation: horizontal flip, rotation, zoom, brightness",
        "Grad-CAM visualization for model explainability",
        "Fine-tuning strategy: frozen backbone → gradual unfreezing",
        "Confusion matrix + per-class F1 scores for evaluation",
      ]}
      challenges="Class imbalance across 10 animal categories (some with 3x fewer samples) required targeted augmentation strategies per class. Deciding how many layers to freeze during fine-tuning was the key experimental variable — unfreezing the top 2 ResNet blocks gave the best accuracy-efficiency tradeoff. Grad-CAM visualizations confirmed the model was attending to biologically relevant features (animal body regions) rather than background artifacts."
    />
  );
}
