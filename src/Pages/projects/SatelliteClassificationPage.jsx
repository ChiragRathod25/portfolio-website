import { ProjectDetailLayout } from "./ProjectDetailLayout";

export default function SatelliteClassificationPage() {
  return (
    <ProjectDetailLayout
      title="Satellite Image Classification"
      tagline="Research project applying deep learning to classify satellite imagery for land cover analysis and environmental monitoring."
      category="🛰️ ML Research"
      tech={["TensorFlow", "Keras", "CNN", "Python", "Deep Learning", "Remote Sensing", "NumPy"]}
      github={null}
      live={null}
      image={null}
      gradient="from-sky-500/20 to-blue-500/10"
      overview="A research-grade satellite image classification system using deep learning (CNNs) to identify different land cover types — including urban areas, forests, water bodies, and agricultural land — from satellite imagery. Built under faculty supervision with a research publication currently in progress. The system demonstrates practical deep learning for remote sensing and environmental monitoring applications."
      features={[
        "Multi-class land cover classification from satellite images",
        "Deep CNN architecture optimized for aerial imagery",
        "Data preprocessing for satellite image formats",
        "Transfer learning from remote sensing pre-trained models",
        "Per-class accuracy and IoU metrics evaluation",
        "Visualization of classification results on image maps",
        "Training pipeline with augmentation for geospatial data",
        "Research documentation and analysis",
      ]}
      challenges="Working with raw satellite imagery posed unique challenges: high-resolution images required memory-efficient data pipelines, spectral bands beyond RGB needed specialized preprocessing, and achieving good generalization across different geographic regions required strategic augmentation and transfer learning strategies. This is an ongoing research project under faculty supervision."
    />
  );
}
