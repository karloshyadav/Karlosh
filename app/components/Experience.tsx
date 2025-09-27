"use client";

import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  organisation: string;
  duration: string;
  summary: string;
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Front-End Web Development Intern",
    organisation: "Next24 Technology Pvt Ltd, Bangalore",
    duration: "Mar 2024 – Apr 2024",
    summary:
      "Embedded with the product team to level-up the company’s SaaS dashboards and marketing sites.",
    achievements: [
      "Shipped responsive React + Tailwind views that improved lighthouse scores by 18%.",
      "Partnered with designers and QA to iterate on accessibility and micro-interaction details.",
    ],
  },
  {
    role: "Executive Intern",
    organisation: "Relanto Software",
    duration: "Dec 2023 – Jan 2024",
    summary:
      "Supported a fast-moving release cycle by aligning delivery sprints with customer expectations.",
    achievements: [
      "Facilitated backlog refinement and wrote user stories that clarified acceptance criteria.",
      "Analysed stakeholder feedback to prioritise roadmap experiments and report weekly progress.",
    ],
  },
  {
    role: "Intern Trainee",
    organisation: "Soft Research Private Limited",
    duration: "Sep 2023 – Jan 2024",
    summary:
      "Worked with the research division on data-heavy experiments and documentation initiatives.",
    achievements: [
      "Automated data cleaning notebooks that reduced manual prep time by 40%.",
      "Co-authored study notes and visual reports consumed by leadership during reviews.",
    ],
  },
  {
    role: "Academic Project Lead",
    organisation: "CMR Institute of Technology",
    duration: "Sep 2021 – Nov 2021",
    summary:
      "Led a crop recommendation system that matches soil profiles with profitable yield suggestions.",
    achievements: [
      "Engineered end-to-end pipeline from data ingestion to inference dashboards.",
      "Presented findings to faculty panel and captured feedback for future iterations.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="md:ml-40 px-4 md:px-0 lg:mt-20">
      <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">Experience</h3>
      <p className="gray max-w-3xl mb-10 text-sm md:text-lg">
        A snapshot of the teams and missions that have shaped how I build — from agile shipping sprints to
        research-driven explorations. Each role strengthened my empathy for users and the craft behind
        maintainable systems.
      </p>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.article
            key={experience.role}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.1 }}
            className="border border-white/10 bg-[#111126]/80 rounded-2xl p-6 md:p-8 shadow-lg backdrop-blur"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h4 className="text-2xl text-white font-semibold">{experience.role}</h4>
                <p className="text-sm md:text-base text-[#9ca3af]">{experience.organisation}</p>
              </div>
              <span className="text-sm font-medium text-[#13adc7]">{experience.duration}</span>
            </div>

            <p className="gray mt-4 md:text-base text-sm">{experience.summary}</p>

            <ul className="mt-4 space-y-2">
              {experience.achievements.map((achievement, i) => (
                <li key={achievement} className="flex gap-2 text-sm md:text-base text-[#e2e8f0]">
                  <span className="text-[#945dd6] mt-1">●</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
