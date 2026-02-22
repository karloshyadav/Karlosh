"use client";

import { motion } from "framer-motion";

interface Item {
  title: string;
  organisation: string;
  date?: string;
  description: string;
}

const certifications: Item[] = [
  {
    title: "Graduate Record Examination",
    organisation: "ETS",
    description: "Score: 333/340.",
  },
  {
    title: "C++ for Everyone",
    organisation: "University of California",
    date: "2021",
    description: "Completed foundational C++ programming coursework.",
  },
  {
    title: "Machine Learning for All",
    organisation: "University of London",
    date: "2023",
    description: "Completed introductory machine learning course with practical applications.",
  },
];

const activities: Item[] = [
  {
    title: "President",
    organisation: "International Student Club (ISC)",
    date: "04/2023 – 04/2024",
    description: "Led club initiatives and coordinated student activities.",
  },
  {
    title: "Secretary",
    organisation: "Soft Research Computing Society",
    date: "04/2022 – 04/2023",
    description: "Managed communications and organized society events.",
  },
  {
    title: "Chess",
    organisation: "Inter-Institution Level",
    description: "Active competitive player.",
  },
  {
    title: "Cricket",
    organisation: "College and District Cricket Team",
    description: "Represented teams in competitive matches.",
  },
];

function Card({ item, index }: { item: Item; index: number }) {
  return (
    <motion.article
      key={item.title + item.organisation}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-2xl border border-white/10 bg-[#141326]/80 p-6 shadow-xl backdrop-blur"
    >
      <h4 className="text-lg font-semibold text-white">{item.title}</h4>
      <p className="text-sm text-[#9ca3af] mt-1">{item.organisation}</p>
      {item.date && <p className="text-xs uppercase tracking-widest text-[#13adc7] mt-2">{item.date}</p>}
      <p className="text-sm md:text-base text-[#e2e8f0] mt-3">{item.description}</p>
    </motion.article>
  );
}

export default function Certifications() {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mt-20">
        <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">Certifications & Activities</h3>
      </div>

      <h4 className="text-white text-xl mb-4">Certifications</h4>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mt-4">
        {certifications.map((item, index) => (
          <Card key={item.title} item={item} index={index} />
        ))}
      </div>

      <h4 className="text-white text-xl mb-4 mt-12">Extra-Curricular Activities</h4>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mt-4">
        {activities.map((item, index) => (
          <Card key={item.title} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
