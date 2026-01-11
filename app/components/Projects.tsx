"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

interface Project {
  title: string;
  description: string;
  features: string[];
  tags: string[];
  duration: string;
  githubUrl: string;
  illustration: ReactNode;
}

const projects: Project[] = [
  {
    title: "Heart Disease Prediction System",
    description:
      "Hybrid ML workflow that blends SMOTE balancing, SHAP explanations, and Grid Search tuning to support clinical risk decisions.",
    features: [
      "SMOTE-powered dataset balancing",
      "Explainability with SHAP values",
      "Grid Search CV for optimal model selection",
    ],
    tags: ["Python", "Scikit-learn", "SMOTE", "SHAP", "GridSearchCV"],
    duration: "Jul 2023 – Apr 2024",
    githubUrl: "https://github.com/karloshyadav/heart-disease-prediction",
    illustration: <HeartDiseaseIllustration />,
  },
  {
    title: "Stock Market Prediction System",
    description:
      "Predictive model for stock price movement using Markov Chain probabilistic modelling to analyse state transitions from historical market data.",
    features: [
      "Markov Chain–based probabilistic modelling",
      "State transition analysis from historical prices",
      "Trend prediction using stochastic processes",
    ],
    tags: ["Python", "Markov Chain", "Statistics", "Time Series"],
    duration: "Jan 2023 – May 2023",
    githubUrl: "https://github.com/karloshyadav/stock-market-prediction",
    illustration: <StockMarketIllustration />,
  },
  {
    title: "Vehicle Care Manager",
    description:
      "Responsive web app that keeps service histories, automates maintenance reminders, and visualises ownership costs.",
    features: [
      "Service dashboards with status filters",
      "Reminder engine for due services",
      "Cost analytics across vehicles",
    ],
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    duration: "Jun 2022 – Sep 2022",
    githubUrl: "https://github.com/karloshyadav/vehicle-care-manager",
    illustration: <VehicleCareIllustration />,
  },
];

export default function Projects() {
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

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index, ease: "easeOut" }}
              className="w-full lg:w-1/2"
            >
              <div className="overflow-hidden rounded-3xl bg-[#0b162f] p-1 shadow-[0_30px_90px_-35px_rgba(19,173,199,0.65)] ring-1 ring-white/10">
                {project.illustration}
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ================= ILLUSTRATIONS ================= */

function HeartDiseaseIllustration() {
  return (
    <svg className="h-auto w-full" viewBox="0 0 800 560">
      <rect width="800" height="560" rx="32" fill="#0f172a" />
      <text x="60" y="140" fontSize="64" fill="#e0f2fe" fontWeight="700">
        Heart Disease
      </text>
      <text x="60" y="200" fontSize="36" fill="#bae6fd">
        Prediction System
      </text>
    </svg>
  );
}

function StockMarketIllustration() {
  return (
    <svg className="h-auto w-full" viewBox="0 0 800 560">
      <defs>
        <linearGradient id="marketBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
        <linearGradient id="marketLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#4ade80" />
        </linearGradient>
      </defs>

      <rect width="800" height="560" rx="32" fill="url(#marketBg)" />

      <polyline
        points="80,420 160,340 240,360 320,280 400,300 480,220 560,240 640,180 720,200"
        fill="none"
        stroke="url(#marketLine)"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <text x="60" y="120" fontSize="60" fill="#ecfeff" fontWeight="700">
        Stock Market
      </text>
      <text x="60" y="180" fontSize="36" fill="#bbf7d0">
        Prediction System
      </text>
      <text x="60" y="240" fontSize="26" fill="#d1fae5" opacity="0.85">
        Markov Chain probabilistic modelling for
      </text>
      <text x="60" y="276" fontSize="26" fill="#d1fae5" opacity="0.85">
        price movement and trend analysis
      </text>
    </svg>
  );
}

function VehicleCareIllustration() {
  return (
    <svg className="h-auto w-full" viewBox="0 0 800 560">
      <rect width="800" height="560" rx="32" fill="#111827" />
      <text x="60" y="140" fontSize="64" fill="#f8fafc" fontWeight="700">
        Vehicle Care Manager
      </text>
      <text x="60" y="200" fontSize="26" fill="#cbd5f5">
        Maintenance tracking and cost analytics
      </text>
    </svg>
  );
}
