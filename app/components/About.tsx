"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Softskills from "./Softskills";
import "../../public/assets/style.css";

// =====================
// Education Timeline
// =====================
const events = [
  {
    title: "Master of Technology in Computer Science and Engineering",
    description: "Indian Institute of Science, Bengaluru | GPA: 7/10",
    date: "2025 – 2027",
  },
  {
    title: "Bachelor of Engineering in Computer Science and Engineering",
    description:
      "CMR Institute of Technology, Visvesvaraya Technological University | GPA: 8.75/10",
    date: "2020 – 2024",
  },
  {
    title: "School Leaving Certificate Examination (Grade XII)",
    description:
      "United Academy, National Examination Board | GPA: 8.33/10",
    date: "2020",
  },
  {
    title: "Secondary Education Examination (Grade X)",
    description:
      "English Preparatory Secondary School, National Examination Board | GPA: 9.0/10",
    date: "2018",
  },
];

// =====================
// Technical Stack Logos
// =====================
const technical = [
  { img: "/assets/react.svg", alt: "React" },
  { img: "/assets/nextjs.svg", alt: "Next.js" },
  { img: "/assets/python.svg", alt: "Python" },
  { img: "/assets/docker.svg", alt: "Docker" },
  { img: "/assets/git.svg", alt: "Git" },
];

export default function About() {
  return (
    <div>
      <h2 className="md:text-4xl text-xl text-white font-semibold mb-12 md:mt-48 mt-20">
        About me
      </h2>

      {/* =====================
          About Card
      ====================== */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex justify-center items-center flex-col"
      >
        <div className="bg-gray-900/70 backdrop-blur-sm border border-white/5 p-6 rounded-lg lg:w-[55%] w-[90%] mb-8 space-y-4">
          <p className="gray md:text-lg text-sm">
            I’m <b>Karlosh Yadav</b>, a computer science graduate with a strong
            foundation in <b>machine learning, data analysis, and software systems</b>.
            I am currently pursuing an <b>M.Tech in Computer Science and Engineering
            at IISc Bengaluru</b>, driven by an interest in research-oriented
            problem solving.
          </p>

          <p className="gray md:text-lg text-sm">
            My academic interests lie at the intersection of{" "}
            <b>data-driven systems, interpretable machine learning, and scalable
            web technologies</b>. I enjoy translating theoretical ideas into
            working systems through analytical models and interactive interfaces.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md bg-white/5 p-3">
              <p className="text-sm uppercase tracking-wide text-[#13adc7]">
                What drives me
              </p>
              <ul className="mt-2 space-y-1 text-sm text-[#d1d5db]">
                <li>• Research-driven problem solving</li>
                <li>• Interpretable and ethical machine learning</li>
                <li>• Scalable, explainable systems</li>
              </ul>
            </div>

            <div className="rounded-md bg-white/5 p-3">
              <p className="text-sm uppercase tracking-wide text-[#945dd6]">
                Highlights
              </p>
              <ul className="mt-2 space-y-1 text-sm text-[#d1d5db]">
                <li>• M.Tech CSE @ IISc Bengaluru</li>
                <li>• Undergraduate thesis in ML-based systems</li>
                <li>• Strong academic performance in core CS</li>
              </ul>
            </div>
          </div>
        </div>

        {/* =====================
            Tech Stack
        ====================== */}
        <div className="grid grid-cols-5 gap-6 mt-6 opacity-80">
          {technical.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              alt={item.alt}
              width={40}
              height={40}
            />
          ))}
        </div>
      </motion.div>

      {/* =====================
          Education Timeline
      ====================== */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="timeline mt-16" aria-label="Education timeline">
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <div className="content-working">
                  <h3 className="text-xl text-gray-200">{event.title}</h3>
                  <p className="text-sm text-gray-400">
                    {event.description}
                  </p>
                </div>
                <div className="time">
                  <h4 className="text-gray-300">{event.date}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* =====================
          Soft Skills
      ====================== */}
      <Softskills />
    </div>
  );
}
