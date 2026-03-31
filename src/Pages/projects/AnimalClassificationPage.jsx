import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function AnimalClassificationPage() {
  return (
    <ProjectDetailLayout
      title="Animal Image Classification"
      tagline="CNN-based deep learning model classifying animals into ecological survival categories using transfer learning."
      category="🤖 Deep Learning"
      tech={["TensorFlow", "Keras", "CNN", "Python", "Transfer Learning", "NumPy"]}
      github="https://github.com/ChiragRathod25/animal-image-classification"
      live={null}
      image="/ProjectSnapshots/animalImageClassification.png"
      gradient="from-green-500/20 to-teal-500/10"
      overview="A convolutional neural network (CNN) model built with TensorFlow and Keras to classify animal images into different ecological survival categories. The model uses transfer learning with a pre-trained backbone to achieve high accuracy on a curated animal image dataset, demonstrating practical deep learning for wildlife and environmental applications."
      features={[
        "Multi-class classification across animal categories",
        "Transfer learning with pre-trained CNN backbone",
        "Data augmentation pipeline for improved generalization",
        "Training/validation/test split with accuracy metrics",
        "Confusion matrix and performance visualization",
        "Model saved in SavedModel format for reuse",
        "Python-based inference script",
      ]}
      challenges="Handling class imbalance in the animal dataset and preventing overfitting with limited training samples were the primary challenges. Applying strategic data augmentation (horizontal flip, rotation, zoom) and using transfer learning from a pre-trained backbone significantly improved classification accuracy."
    />
  );
}
