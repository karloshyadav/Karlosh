import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "../../public/assets/style.css";
import Softskills from "./Softskills";

// Karlosh: education timeline
const events = [
  {
    title: "Master of Technology in Computer Science and Engineering",
    description:
      "Indian Institute of Science, Bengaluru | GPA: 7/10",
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

// Karlosh: tech logos (core stack)
const technical = [
  { img: "https://cdn.worldvectorlogo.com/logos/java-4.svg", alt: "Java", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/c.svg", alt: "C/C++", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/python-4.svg", alt: "Python", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg", alt: "JavaScript", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/typescript.svg", alt: "TypeScript", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/react-2.svg", alt: "React", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/next-js.svg", alt: "Next.js", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/html-1.svg", alt: "HTML5", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/css-3.svg", alt: "CSS3", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/pandas.svg", alt: "Pandas", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/numpy-1.svg", alt: "NumPy", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/matplotlib.svg", alt: "Matplotlib", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/seaborn-1.svg", alt: "Seaborn", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/scikit-learn.svg", alt: "Scikit-learn", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg", alt: "GitHub", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", alt: "Git", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/postman.svg", alt: "Postman", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/vercel.svg", alt: "Vercel", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg", alt: "MySQL", className: "client-logo w-10 h-10 object-contain" },
  { img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg", alt: "Tailwind CSS", className: "client-logo w-10 h-10 object-contain" },
];

export default function About() {
  return (
    <div>
      <h2 className="md:text-4xl text-xl text-white font-semibold mb-12 md:mt-48 mt-20 text-color">
        About me
      </h2>

      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        viewport={{ amount: 0.5 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
        className="flex md:justify-center md:items-center items-start flex-col"
      >
        <div className="bg-gray-900/70 backdrop-blur-sm border border-white/5 p-6 md:mx-0 mx-4 rounded-lg lg:w-[55%] w-[90%] mb-8 space-y-4">
          <p className="gray md:text-lg text-sm">
            I’m <b>Karlosh Yadav</b>, a Bangalore-based engineer blending
            <b> data science, product thinking, and front-end craft</b>.
            After graduating with distinction from VTU, I’m heading to
            <b> IISc Bengaluru</b> to deepen my research foundation.
          </p>

          <p className="gray md:text-lg text-sm">
            My work spans front-end engineering, analytics, and student leadership—
            focusing on inclusive systems, measurable outcomes, and scalable design.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md bg-white/5 p-3">
              <p className="text-sm uppercase tracking-wide text-[#13adc7]">What drives me</p>
              <ul className="mt-2 space-y-1 text-sm text-[#d1d5db]">
                <li>• Human-centred analytics</li>
                <li>• Clean, performant interfaces</li>
                <li>• Community-first leadership</li>
              </ul>
            </div>

            <div className="rounded-md bg-white/5 p-3">
              <p className="text-sm uppercase tracking-wide text-[#945dd6]">Highlights</p>
              <ul className="mt-2 space-y-1 text-sm text-[#d1d5db]">
                <li>• VTU academic honour</li>
                <li>• Led International Student Club</li>
                <li>• Rotaract community initiatives</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="logos-marquee mt-5">
          <div className="home-logo-wrapper">
            <div className="animate-marquee">
              <div className="grid grid-cols-6 gap-4">
                {technical.map((item, index) => (
                  <Image
                    key={index}
                    src={item.img}
                    alt={item.alt}
                    className={item.className}
                    width={40}
                    height={40}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        viewport={{ amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
      >
        <div className="timeline">
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <div className="content-working">
                  <h3 className="text-xl text-gray-800">{event.title}</h3>
                  <p className="text-sm">{event.description}</p>
                </div>
                <div className="time">
                  <h4>{event.date}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div>
        <Softskills />
      </motion.div>
    </div>
  );
}
