import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from 'react-icons/fa';

// === Karlosh's Projects ===
const projects = [
  {
    title: "Heart Disease Prediction System",
    description:
      "A hybrid machine learning system that predicts heart disease likelihood. Focused on data balancing and model interpretability.",
    features: [
      "Implemented SMOTE for class balancing",
      "Applied SHAP for model explainability",
      "Optimized models with Grid Search CV",
    ],
    tags: ["Python", "Scikit-learn", "SMOTE", "SHAP", "GridSearchCV"],
    duration: "Jul 2023 – Mar 2024",
    githubUrl: "https://github.com/karloshyadav/heart-disease-prediction", // replace if different
    imageSrc: "/heart.jpg",
  },
  {
    title: "Health Guard — AI-Powered Disease Monitoring",
    description:
      "IoT-based system to monitor chronic patients and predict complications in real-time, providing early warnings and health insights.",
    features: [
      "Integrated sensors for live monitoring",
      "Machine learning models for risk detection",
      "Delivered personalized health alerts",
    ],
    tags: ["IoT", "Python", "Machine Learning", "AWS"],
    duration: "Nov 2022 – Apr 2023",
    githubUrl: "https://github.com/karloshyadav/health-guard", // replace if different
    imageSrc: "/health.jpg",
  },
  {
    title: "Vehicle Care Manager",
    description:
      "A web application to track vehicle maintenance schedules, send reminders, and log repair/service history for better care management.",
    features: [
      "Dashboard for vehicles and service records",
      "Automated reminders for service dates",
      "Reports on cost and maintenance trends",
    ],
    tags: ["ReactJS", "Node.js", "MongoDB", "Tailwind CSS"],
    duration: "2023",
    githubUrl: "https://github.com/karloshyadav/vehicle-care-manager", // replace if different
    imageSrc: "/vehicle.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio showcasing projects, skills, and experience. Built with modern web tools and responsive design.",
    features: [
      "Responsive UI with Tailwind + React",
      "Dynamic project cards and timeline",
      "Deployed on Vercel with custom domain",
    ],
    tags: ["ReactJS", "Next.js", "Tailwind CSS"],
    duration: "2024 – Ongoing",
    githubUrl: "https://github.com/karloshyadav/portfolio", // replace if different
    imageSrc: "/portfolio.png",
  },
];

const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Projects() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="md:ml-40 px-4 md:px-0 lg:mt-20">
      <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
        Projects
      </h3>
      {projects.map((project, index) => (
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          viewport={{ amount: 0.5 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * index }}
          key={index}
        >
          <div className="card flex flex-col lg:flex-row lg:gap-12 justify-between items-start lg:items-center px-8 mb-12">
            <div className="max-w-prose gray font-medium text-lg flex flex-col gap-4 w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-white text-2xl mt-4">{project.title}</h1>
              <p className="gray text-sm md:text-md leading-relaxed">
                {project.description}
              </p>
              <p>Features:</p>
              <ul className="text-sm md:text-md space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-[#607b96] mr-2">*</span>
                    <p className="md:text-md text-sm">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <ul className="tags">
                  {project.tags.map((tag, index) => (
                    <li key={index}>
                      <a href="#" className="tag">{tag}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center items-center md:items-start md:justify-start flex-col sm:flex-row gap-4 md:mb-4">
                <Link href={project.githubUrl} target="_blank">
                  <FaGithub size={30} color="#fff" />
                </Link>
                <p className="text-gray-400 mt-2 ml-auto">{project.duration}</p>
              </div>
            </div>
            <motion.div
              initial={false}
              animate={
                imageLoaded
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2 lg:pb-0 pb-4 lg:mt-0"
            >
              <Image
                onLoad={() => setImageLoaded(true)}
                src={project.imageSrc}
                alt={`${project.title} project`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ borderRadius: '1rem' }}
                width={1000}
                height={750}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
