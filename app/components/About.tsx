"use client";

import { motion } from "framer-motion";
import "../../public/assets/style.css";

const education = [
  {
    title: "Master of Technology, Computer Science and Engineering",
    description: "Indian Institute of Science, Bangalore | CGPA: 7.0/10",
    date: "Aug 2025 – Jun 2027",
  },
  {
    title: "Bachelor of Engineering, Computer Science and Engineering",
    description: "Visvesvaraya Technological University | CGPA: 8.75/10",
    date: "Aug 2020 – Jun 2024",
  },
];

const skills = [
  "C++",
  "Python",
  "MySQL",
  "Machine Learning",
  "Data Structures and Algorithms",
  "Software Development Life Cycle",
  "Database Management",
  "Object-Oriented Programming",
  "System Design (Basics)",
];

export default function About() {
  return (
    <div>
      <h2 className="md:text-4xl text-xl text-white font-semibold mb-8 md:mt-48 mt-20">About</h2>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-gray-900/70 backdrop-blur-sm border border-white/5 p-6 rounded-lg lg:w-[70%] w-[95%] mb-8"
      >
        <p className="gray md:text-lg text-sm leading-relaxed">
          I am a computer science engineer focused on machine learning, data-centric systems, and dependable software
          engineering. My recent work includes benchmarking deep learning models for brain tumor classification,
          building ensemble-based heart disease prediction, and implementing core ML algorithms from scratch.
        </p>
      </motion.div>

      <section id="education">
        <h3 className="mb-6 text-xl md:text-3xl text-white font-semibold">Education</h3>
        <div className="timeline" aria-label="Education timeline">
          <ul>
            {education.map((event) => (
              <li key={event.title}>
                <div className="content-working">
                  <h3 className="text-xl text-gray-200">{event.title}</h3>
                  <p className="text-sm text-gray-400">{event.description}</p>
                </div>
                <div className="time">
                  <h4 className="text-gray-300">{event.date}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="mb-6 text-xl md:text-3xl text-white font-semibold">Technical Skills</h3>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill} className="px-4 py-2 rounded-full bg-white/10 text-[#e2e8f0] text-sm md:text-base">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
