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
    title: "Health Guard — AI Disease Monitoring",
    description:
      "Real-time IoT platform that tracks chronic patients, detects anomalies with ML, and pushes personalised alerts to caregivers.",
    features: [
      "Continuous IoT telemetry ingestion",
      "Machine learning powered anomaly detection",
      "Personalised alerting and escalation rules",
    ],
    tags: ["IoT", "Python", "Machine Learning", "Edge"],
    duration: "Oct 2022 – Mar 2023",
    githubUrl: "https://github.com/karloshyadav/health-guard",
    illustration: <HealthGuardIllustration />,
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
  {
    title: "Shop Management System",
    description:
      "Desktop solution that digitises inventory, billing, and vendor management workflows for neighbourhood retailers.",
    features: [
      "Inventory tracking with reorder alerts",
      "GST-ready billing templates",
      "Vendor statement exports",
    ],
    tags: ["Java", "MySQL", "Swing", "JasperReports"],
    duration: "Sep 2021 – Nov 2021",
    githubUrl: "https://github.com/karloshyadav/shop-management-system",
    illustration: <ShopManagementIllustration />,
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

            {/* Right Side (Image) */}
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

function HeartDiseaseIllustration() {
  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 800 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="heart-disease-title heart-disease-subtitle"
    >
      <defs>
        <linearGradient id="heartDiseaseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="50%" stopColor="#1d4ed8" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
        <linearGradient id="heartDiseasePulse" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="heartDiseaseGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="800" height="560" rx="32" fill="url(#heartDiseaseGrad)" />
      <g filter="url(#heartDiseaseGlow)">
        <polyline
          points="80,360 150,280 220,320 300,200 360,260 420,140 500,220 580,120 660,240 720,180"
          fill="none"
          stroke="url(#heartDiseasePulse)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g fill="#e0f2fe" fontFamily="'Inter', 'Segoe UI', sans-serif">
        <text id="heart-disease-title" x="60" y="120" fontSize="64" fontWeight="700">
          Heart Disease
        </text>
        <text id="heart-disease-subtitle" x="60" y="180" fontSize="64" fontWeight="700">
          Prediction System
        </text>
        <text x="60" y="240" fontSize="26" opacity="0.85">
          Hybrid ML pipeline with SMOTE balancing, SHAP explainability, and
        </text>
        <text x="60" y="276" fontSize="26" opacity="0.85">
          Grid Search optimization for reliable cardiology insights.
        </text>
      </g>
    </svg>
  );
}

function HealthGuardIllustration() {
  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 800 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="health-guard-title health-guard-subtitle"
    >
      <defs>
        <linearGradient id="healthGuardBackground" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0b1120" />
          <stop offset="40%" stopColor="#0369a1" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
        <linearGradient id="healthGuardSignal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <rect width="800" height="560" rx="32" fill="url(#healthGuardBackground)" />
      <g stroke="url(#healthGuardSignal)" strokeWidth="12" fill="none" strokeLinecap="round">
        <path d="M120 420 Q200 340 280 400 T440 340 T600 360 T720 260" />
        <circle cx="280" cy="400" r="22" fill="#0f172a" stroke="url(#healthGuardSignal)" strokeWidth="12" />
        <circle cx="440" cy="340" r="18" fill="#0f172a" stroke="url(#healthGuardSignal)" strokeWidth="10" />
        <circle cx="600" cy="360" r="24" fill="#0f172a" stroke="url(#healthGuardSignal)" strokeWidth="12" />
      </g>
      <g fill="#ecfeff" fontFamily="'Inter', 'Segoe UI', sans-serif">
        <text id="health-guard-title" x="60" y="120" fontSize="64" fontWeight="700">
          Health Guard
        </text>
        <text id="health-guard-subtitle" x="60" y="180" fontSize="36" fontWeight="600">
          AI-Powered Disease Monitoring
        </text>
        <text x="60" y="240" fontSize="26" opacity="0.85">
          IoT telemetry, anomaly detection, and personalized alerts
        </text>
        <text x="60" y="276" fontSize="26" opacity="0.85">
          for proactive care of chronic patients.
        </text>
      </g>
    </svg>
  );
}

function VehicleCareIllustration() {
  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 800 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="vehicle-care-title vehicle-care-subtitle"
    >
      <defs>
        <linearGradient id="vehicleCareGarage" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#111827" />
          <stop offset="60%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="vehicleCareAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f87171" />
          <stop offset="50%" stopColor="#fb923c" />
          <stop offset="100%" stopColor="#facc15" />
        </linearGradient>
      </defs>
      <rect width="800" height="560" rx="32" fill="url(#vehicleCareGarage)" />
      <g stroke="url(#vehicleCareAccent)" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M140 380 H660" />
        <path d="M200 380 Q260 280 320 280 Q380 280 440 380" />
        <path d="M460 380 Q520 300 580 300 Q640 300 700 380" />
      </g>
      <g fill="#f8fafc" fontFamily="'Inter', 'Segoe UI', sans-serif">
        <text id="vehicle-care-title" x="60" y="140" fontSize="64" fontWeight="700">
          Vehicle Care Manager
        </text>
        <text id="vehicle-care-subtitle" x="60" y="200" fontSize="26" opacity="0.85">
          Digital maintenance logs, service reminders, and cost analytics
        </text>
        <text x="60" y="236" fontSize="26" opacity="0.85">
          to keep vehicle fleets healthy and on schedule.
        </text>
      </g>
    </svg>
  );
}

function ShopManagementIllustration() {
  return (
    <svg
      className="h-auto w-full"
      viewBox="0 0 800 560"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="shop-management-title shop-management-subtitle"
    >
      <defs>
        <linearGradient id="shopManagementRetail" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1f2937" />
          <stop offset="100%" stopColor="#3b0764" />
        </linearGradient>
        <linearGradient id="shopManagementShelves" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#f472b6" />
        </linearGradient>
      </defs>
      <rect width="800" height="560" rx="32" fill="url(#shopManagementRetail)" />
      <g stroke="url(#shopManagementShelves)" strokeWidth="14" fill="none" strokeLinecap="round">
        <rect x="140" y="220" width="520" height="200" rx="28" />
        <line x1="140" y1="280" x2="660" y2="280" />
        <line x1="140" y1="340" x2="660" y2="340" />
      </g>
      <g fill="#f1f5f9" fontFamily="'Inter', 'Segoe UI', sans-serif">
        <text id="shop-management-title" x="60" y="140" fontSize="60" fontWeight="700">
          Shop Management System
        </text>
        <text id="shop-management-subtitle" x="60" y="200" fontSize="26" opacity="0.85">
          Inventory, billing, and vendor workflows designed for
        </text>
        <text x="60" y="236" fontSize="26" opacity="0.85">
          small retailers embracing digital operations.
        </text>
      </g>
    </svg>
  );
}
