"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  duration: string;
  githubUrl: string;
  imageSrc: string;
}

const projects: Project[] = [
  {
    title: "Heart Disease Prediction System",
    description:
      "Hybrid ML system that predicts heart disease likelihood using SMOTE for data balancing and SHAP for interpretability.",
    features: [
      "SMOTE for class balancing",
      "SHAP for model explainability",
      "Optimized with Grid Search CV",
    ],
    tags: ["Python", "Scikit-learn", "SMOTE", "SHAP", "GridSearchCV"],
    duration: "Jul 2023 – Mar 2024",
    githubUrl: "https://github.com/karloshyadav/heart-disease-prediction",
    imageSrc: "/heart.jpg", // must be inside /public
  },
  {
    title: "Health Guard — AI-Powered Disease Monitoring",
    description:
      "IoT-based system to monitor chronic patients and predict complications in real-time, with personalized health alerts.",
    features: [
      "IoT sensors integration",
      "Machine learning risk detection",
      "Personalized early warnings",
    ],
    tags: ["IoT", "Python", "Machine Learning", "AWS"],
    duration: "Nov 2022 – Apr 2023",
    githubUrl: "https://github.com/karloshyadav/health-guard",
    imageSrc: "/health.jpg",
  },
  {
    title: "Vehicle Care Manager",
    description:
      "Web app to track vehicle maintenance schedules, send reminders, and log repair/service history.",
    features: [
      "Dashboard for vehicles & service records",
      "Automated reminders",
      "Maintenance cost reports",
    ],
    tags: ["ReactJS", "Node.js", "MongoDB", "Tailwind CSS"],
    duration: "2023",
    githubUrl: "https://github.com/karloshyadav/vehicle-care-manager",
    imageSrc: "/vehicle.jpg",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing my projects, skills, and experiences.",
    features: [
      "Responsive UI with Tailwind + React",
      "Dynamic project cards and timeline",
      "Deployed on Vercel with custom domain",
    ],
    tags: ["Next.js", "ReactJS", "Tailwind CSS"],
    duration: "2024 – Ongoing",
    githubUrl: "https://github.com/karloshyadav/portfolio",
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
          key={project.title}
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          viewport={{ amount: 0.5 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * index }}
        >
          <div className="card flex flex-col lg:flex-row lg:gap-12 justify-between items-start lg:items-center px-8 mb-12">
            {/* Left Side */}
            <div className="max-w-prose gray font-medium text-lg flex flex-col gap-4 w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-white text-2xl mt-4">{project.title}</h1>
              <p className="gray text-sm md:text-md leading-relaxed">
                {project.description}
              </p>
              <p className="font-semibold">Features:</p>
              <ul className="text-sm md:text-md space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-[#607b96] mr-2">*</span>
                    <p className="md:text-md text-sm">{feature}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-2">
                <Link href={project.githubUrl} target="_blank">
                  <FaGithub className="w-7 h-7 text-white" />
                </Link>
                <p className="text-gray-400">{project.duration}</p>
              </div>
            </div>

            {/* Right Side (Image) */}
            <motion.div
              initial={false}
              animate={
                imageLoaded
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <Image
                onLoad={() => setImageLoaded(true)}
                src={project.imageSrc}
                alt={`${project.title} preview`}
                width={1000}
                height={750}
                style={{ borderRadius: "1rem" }}
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
