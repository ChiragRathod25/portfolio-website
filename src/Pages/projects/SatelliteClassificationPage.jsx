import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function SatelliteClassificationPage() {
  return (
    <ProjectDetailLayout
      title="Satellite Image Classification"
      tagline="CNN-based land cover classifier achieving 89.4% accuracy and 0.81 mean IoU — under faculty supervision, paper in preparation."
      category="🛰️ ML Research · Computer Vision"
      tech={["TensorFlow", "Keras", "CNN", "ResNet", "Python", "Deep Learning", "Remote Sensing", "NumPy"]}
      github={null}
      live={null}
      image={null}
      gradient="from-sky-500/20 to-blue-500/10"
      overview="A research-level deep learning system for classifying land cover types — urban, forest, water body, and agricultural land — from multi-spectral satellite imagery. Built under faculty supervision with a research paper currently in preparation.\n\nKey quantitative results: 89.4% overall accuracy and 0.81 mean IoU across 5 land cover classes, with Urban F1-score of 0.87 (the most challenging class due to spectral variation). Transfer learning from a remote-sensing-pretrained ResNet backbone reduced training time by ~40% while improving generalization across geographic regions."
      features={[
        "Multi-class land cover classification (5 classes): Urban, Forest, Water, Agriculture, Barren",
        "Overall accuracy: 89.4% · Mean IoU: 0.81 · Urban F1: 0.87",
        "Transfer learning from remote-sensing pre-trained ResNet backbone",
        "Multi-spectral input: RGB + NIR bands with band normalization",
        "Spatial data augmentation: flips, rotations, random cropping",
        "Per-class IoU and confusion matrix evaluation",
        "Cross-region generalization experiments (domain shift analysis)",
        "Patch extraction pipeline for high-resolution image processing",
        "Research paper in preparation — targeting environmental informatics venue",
      ]}
      challenges="Working with raw multi-spectral satellite imagery introduces unique challenges: memory-efficient tile extraction for high-resolution images, normalization across different spectral bands beyond RGB, and ensuring the model generalizes across geographic regions with different vegetation densities and urban characteristics. The domain shift experiments revealed that augmentation strategy (not model architecture) was the key lever for geographic generalization. This work is ongoing under faculty supervision."
    />
  );
}
