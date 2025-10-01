import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import "../../public/assets/style.css";
import Softskills from "./Softskills";

// Karlosh: timeline events anchored to resume
const events = [
  {
    title: "Incoming M.Tech CSE Scholar",
    description:
      "Indian Institute of Science (IISc), Bangalore — Joining the 2025–27 cohort to pursue research-driven computing.",
    date: "2025 – 2027",
  },
  {
    title: "B.E. in Computer Science & Engineering (GPA 8.75/10)",
    description:
      " VTU — Graduated with distinction; thesis on Heart Disease Prediction using ML.",
    date: "2020 – 2024",
  },
  {
    title: "Front-End Web Development Intern — Next24 Technology",
    description:
      "Delivered responsive React/Tailwind interfaces and collaborated on production releases in an agile pod.",
    date: "Mar 2024 – Apr 2024",
  },
  {
    title: "Executive Intern — Relanto Software",
    description:
      "Mapped user stories, supported sprint rituals, and aligned product requirements with delivery milestones.",
    date: "Dec 2023 – Jan 2024",
  },
  {
    title: "Intern Trainee — Soft Research Pvt. Ltd.",
    description:
      "Explored data analysis workflows, report automation, and end-to-end documentation for R&D efforts.",
    date: "Sep 2023 – Jan 2024",
  },
  {
    title: "President — International Student Club (ISC)",
    description:
      "Amplified student voices, hosted cultural events, and built support systems for international cohorts.",
    date: "Apr 2023 – Apr 2024",
  },
  {
    title: "Secretary — Soft Research Computing Society",
    description:
      "Orchestrated workshops, facilitated knowledge-sharing, and maintained society operations.",
    date: "Apr 2022 – Apr 2023",
  },
];

// Karlosh: tech logos (core stack)
const technical = [
  // Languages
  {
    img: "https://cdn.worldvectorlogo.com/logos/java-4.svg",
    alt: "Java",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/c.svg",
    alt: "C/C++",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/python-4.svg",
    alt: "Python",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    alt: "JavaScript",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    alt: "TypeScript",
    className: "client-logo w-10 h-10 object-contain",
  },
  // Frontend
  {
    img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    alt: "React",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    alt: "Next.js",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    alt: "HTML5",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/css-3.svg",
    alt: "CSS3",
    className: "client-logo w-10 h-10 object-contain",
  },
  // Data / ML
  {
    img: "https://cdn.worldvectorlogo.com/logos/pandas.svg",
    alt: "Pandas",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/numpy-1.svg",
    alt: "NumPy",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/matplotlib.svg",
    alt: "Matplotlib",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/seaborn-1.svg",
    alt: "Seaborn",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/scikit-learn.svg",
    alt: "Scikit-learn",
    className: "client-logo w-10 h-10 object-contain",
  },
  // Tools
  {
    img: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
    alt: "GitHub",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
    alt: "Git",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/postman.svg",
    alt: "Postman",
    className: "client-logo w-10 h-10 object-contain",
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/vercel.svg",
    alt: "Vercel",
    className: "client-logo w-10 h-10 object-contain",
  },
  // Databases
  {
    img: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg",
    alt: "MySQL",
    className: "client-logo w-10 h-10 object-contain",
  },
  // Styling
  {
    img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    alt: "Tailwind CSS",
    className: "client-logo w-10 h-10 object-contain",
  },
];

export default function About() {
  return (
    <div className=" ">
      <h2 className="md:text-4xl text-xl text-white font-semibold mb-12 md:mt-48 mt-20 text-color">
        About me
      </h2>

      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        viewport={{ amount: 0.5 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * 1 }}
        className="flex md:justify-center md:ml-0 md:items-center items-start flex-col "
      >
        <div className="bg-gray-900/70 backdrop-blur-sm border border-white/5 p-6 md:mx-0 mx-4 rounded-lg lg:w-[55%] w-[90%] mb-8 space-y-4">
          <p className="gray md:text-lg text-sm">
            I’m <b>Karlosh Yadav</b>, a Bangalore-based engineer who blends <b>data science, product thinking, and front-end craft</b>.
            After graduating top of class from Visvesvaraya Technological University, I’m heading to <b>IISc Bangalore</b> for my
            master’s in Computer Science to deepen my research toolkit.
          </p>

          <p className="gray md:text-lg text-sm">
            Internship tours at <b>Next24 Technology</b>, <b>Relanto Software</b>, and <b>Soft Research</b> gave me a front-row seat to
            agile delivery, stakeholder alignment, and data storytelling. Whether I am building dashboards,
            experimenting with ML explainability, or organising international student communities,
            I focus on inclusive, measurable outcomes.
          </p>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-md bg-white/5 p-3">
              <p className="text-sm uppercase tracking-wide text-[#13adc7]">What drives me</p>
              <ul className="mt-2 space-y-1 text-sm text-[#d1d5db]">
                <li>• Human-centred analytics that instil trust</li>
                <li>• Clean, performant web experiences</li>
                <li>• Collaborative communities that lift others up</li>
              </ul>
            </div>
            <div className="rounded-md bg-white/5 p-3">
              <p className="text-sm uppercase tracking-wide text-[#945dd6]">Recent highlights</p>
              <ul className="mt-2 space-y-1 text-sm text-[#d1d5db]">
                <li>• Academic honour in 5th semester at VTU</li>
                <li>• Led International Student Club for 600+ peers</li>
                <li>• Spearheaded Rotaract community initiatives</li>
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
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * 1 }}
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
