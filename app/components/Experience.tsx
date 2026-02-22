"use client";

import { motion } from "framer-motion";

const profileHighlights = [
  { label: "GRE", value: "333 / 340" },
  { label: "Languages", value: "English, Hindi, Maithili, Nepali" },
  { label: "Focus Areas", value: "Machine Learning, Databases, OOP, DSA" },
];

export default function Experience() {
  return (
    <div className="md:ml-40 px-4 md:px-0 lg:mt-20">
      <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">Profile Snapshot</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {profileHighlights.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
            className="border border-white/10 bg-[#111126]/80 rounded-2xl p-6 shadow-lg backdrop-blur"
          >
            <p className="text-[#13adc7] text-sm uppercase tracking-wider">{item.label}</p>
            <p className="text-white text-lg mt-3">{item.value}</p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
