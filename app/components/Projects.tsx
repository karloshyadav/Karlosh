"use client";
import { motion } from "framer-motion";

interface Project {
  title: string;
  duration?: string;
  bullets: string[];
  tags: string[];
}

const projects: Project[] = [
  {
    title:
      "Benchmarking Deep Learning Models for Brain Tumor Classification: YOLOv8, ResNet50, and MobileNetV3",
    duration: "Aug 2025 – Dec 2025",
    bullets: [
      "Conducted comparative analysis of MRI-based brain tumor classification across YOLOv8, ResNet50, and MobileNetV3.",
      "Performed hyperparameter optimization and ablation studies for model accuracy and generalization.",
      "Applied K-fold cross-validation for statistical reliability and reproducibility.",
      "Built TensorFlow training/evaluation pipeline for stable and fair model benchmarking.",
    ],
    tags: ["TensorFlow", "Deep Learning", "YOLOv8", "ResNet50", "MobileNetV3", "K-Fold CV"],
  },
  {
    title: "Heart Disease Prediction System (Ensemble Learning)",
    duration: "Sep 2023 – May 2024",
    bullets: [
      "Built a Soft Voting ensemble using Logistic Regression, Random Forest, and XGBoost.",
      "Handled preprocessing: missing values, encoding, scaling, and train-test splitting.",
      "Addressed class imbalance using SMOTE and optimized with K-fold CV + GridSearchCV.",
    ],
    tags: ["Python", "Scikit-learn", "XGBoost", "SMOTE", "GridSearchCV"],
  },
  {
    title: "Machine Learning Algorithms from Scratch",
    bullets: [
      "Implemented Linear Regression, Logistic Regression, Decision Tree, and Random Forest using NumPy.",
      "Implemented MSE, Binary Cross-Entropy, Gradient Descent, and Information Gain mathematically from scratch.",
      "Applied bootstrap sampling and feature randomization for stronger generalization in Random Forest.",
    ],
    tags: ["NumPy", "Machine Learning", "Algorithms", "Optimization"],
  },
  {
    title: "Vehicle Care Management System",
    bullets: [
      "Designed normalized relational schema with ACID-compliant transactions and concurrency control.",
      "Implemented JWT-based stateless auth, RBAC, and bcrypt-secured password management.",
      "Configured secure environment variables and CORS policies for production safety.",
    ],
    tags: ["Database Design", "JWT", "RBAC", "bcrypt", "CORS"],
  },
];

export default function Projects() {
  return (
    <div className="md:ml-40 px-4 md:px-0 lg:mt-20">
      <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">Projects</h3>

      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ amount: 0.2, once: true }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.08 * index }}
        >
          <div className="card px-8 py-6 mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4">
              <h4 className="text-white text-xl md:text-2xl">{project.title}</h4>
              {project.duration && <p className="text-[#13adc7] text-sm">{project.duration}</p>}
            </div>

            <ul className="space-y-2 mb-4">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="text-[#cbd5e1] text-sm md:text-base flex gap-2">
                  <span>•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
