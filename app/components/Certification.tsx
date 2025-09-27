"use client";

import { motion } from "framer-motion";

interface Achievement {
  title: string;
  organisation: string;
  date: string;
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Academic Excellence Award",
    organisation: "CMR Institute of Technology",
    date: "Jul 2023",
    description:
      "Recognised among the top performers during the fifth semester for consistent academic distinction and peer mentorship.",
  },
  {
    title: "Rotaract Blood Donation Drive",
    organisation: "CMR Institute of Technology",
    date: "Dec 2021",
    description:
      "Coordinated logistics and volunteer outreach for a campus-wide blood donation initiative supporting local hospitals.",
  },
  {
    title: "Rotaract Community Feeding",
    organisation: "CMR Institute of Technology",
    date: "Jul 2022",
    description:
      "Led a student crew to organise pet nourishment drives, ensuring consistent supplies for local animal shelters.",
  },
  {
    title: "Cricket — College & District Levels",
    organisation: "CMR Institute of Technology",
    date: "2019 – 2023",
    description:
      "Represented college and district teams as an all-rounder, balancing athletics with full-time engineering studies.",
  },
];

export default function Certifications() {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mt-20">
        <p className="text-white text-xl font-bold opacity-60">Celebrating learning, service, and teamwork</p>
        <div className="inline-block text-center group">
          <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">Achievements & Volunteering</h3>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-12">
        {achievements.map((achievement, index) => (
          <motion.article
            key={achievement.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-[#141326]/80 p-6 shadow-xl backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold text-white max-w-[70%]">{achievement.title}</h4>
              <span className="text-xs uppercase tracking-widest text-[#13adc7] bg-white/5 px-3 py-1 rounded-full">
                {achievement.date}
              </span>
            </div>
            <p className="text-sm text-[#9ca3af] mt-3">{achievement.organisation}</p>
            <p className="text-sm md:text-base text-[#e2e8f0] mt-4 leading-relaxed">{achievement.description}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
