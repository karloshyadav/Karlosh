"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Softskills from "./Softskills";
import "../../public/assets/style.css";

// =====================
// Education / Timeline
// =====================
const events = [
  {
    title: "Master of Technology in Computer Science and Engineering",
    description:
      "Indian Institute of Science (IISc), Bengaluru | GPA: 7/10",
    date: "2025 – 2027",
  },
  {
    title: "Bachelor of Engineering in Computer Science and Engineering",
    description:
      "CMR Institute of Technology, Visvesvaraya Technological University | GPA: 8.75/10",
    date: "Jun 2024",
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
// Technical Logos
// =====================
const technical = [
  { img: "/assets/react.svg", alt: "React", className: "opacity-80" },
  { img: "/assets/nextjs.svg", alt: "Next.js", className: "opacity-80" },
  { img: "/assets/python.svg", alt: "Python", className: "opacity-80" },
  { img: "/assets/tensorflow.svg", alt: "TensorFlow", className: "opacity-80" },
  { img: "/assets/docker.svg", alt: "Docker", className: "opacity-80" },
  { img: "/assets/git.svg", alt: "Git", className: "opacity-80" },
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
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex md:justify-center md:items-center items-start flex-col"
      >
        <div className="bg-gray-900/70 backdrop-blur-sm border border-white/5 p-6 md:mx-0 mx-4 rounded-lg lg:w-[55%] w-[90%] mb-8 space-y-4">
          <p className="gray md:text-lg text-sm">
            I’m <b>Karlosh Yadav</b>, a Bangalore-based engineer who blends{" "}
            <b>data science, product thinking, and front-end craft</b>. After
            graduating at the top of my class from Visvesvaraya Technological
            University, I’m heading to <b>IISc Bangalore</b> for my master’s in
            Computer Science to deepen my research toolkit.
          </p>

          <p className="gray md:text-lg text-sm">
            Internship tours at <b>Next24 Technology</b> and{" "}
            <b>Soft Research</b> gave me a front-row seat to agile delivery,
            stakeholder alignment, and data storytelling. Whether I am building
            dashboards, experimenting with ML explainability, or organising
            international student communities, I focus on inclusive, measurable
            outcomes.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md bg-white/5 p-3">
              <p className="text-sm uppercase tracking-wide text-[#13adc7]">
                What drives me
              </p>
              <ul className="mt-2 space-y-1 text-sm text-[#d1d5db]">
                <li>• Human-centred analytics that instil trust</li>
                <li>• Clean, performant web experiences</li>
                <li>• Collaborative communities that lift others up</li>
              </ul>
            </div>

            <div className="rounded-md bg-white/5 p-3">
              <p className="text-sm uppercase tracking-wide text-[#945dd6]">
                Recent highlights
              </p>
              <ul className="mt-2 space-y-1 text-sm text-[#d1d5db]">
                <li>• Academic honour in 5th semester at VTU</li>
                <li>• Led International Student Club for 600+ peers</li>
                <li>• Spearheaded Rotaract community initiatives</li>
              </ul>
            </div>
          </div>
        </div>

        {/* =====================
            Logos Marquee
        ====================== */}
        <div className="logos-marquee mt-5">
          <div className="home-logo-wrapper">
            <div className="animate-marquee">
              <div className="grid grid-cols-6 gap-4">
                {technical.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={item.img}
                      alt={item.alt}
                      className={item.className}
                      width={40}
                      height={40}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* =====================
          Timeline
      ====================== */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="timeline" aria-label="Education timeline">
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
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Softskills />
      </motion.div>
    </div>
  );
}
