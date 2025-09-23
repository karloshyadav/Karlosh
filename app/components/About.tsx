import React from "react";
import { motion } from "framer-motion";
import "../../public/assets/style.css";
import Softskills from "./Softskills";

// === Karlosh: timeline events (no GRE, no MK Paper Mills) ===
const events = [
  {
    title: "B.E. in Computer Science & Engineering (GPA 8.75/10)",
    description:
      "CMR Institute of Technology, VTU — Completed degree with thesis on Heart Disease Prediction using ML.",
    date: "2020 – 2024",
  },
  {
    title: "Front-End Web Development Intern — Next24 Technology",
    description:
      "Built and refined responsive UIs; collaborated with dev team to implement features and use cases.",
    date: "Mar–Apr 2024",
  },
  {
    title: "President — International Student Club (ISC)",
    description:
      "Led student initiatives, organized cultural events, supported international students, and liaised with administration.",
    date: "Apr 2023 – Apr 2024",
  },
  {
    title: "Secretary — Soft Research Computing Society",
    description:
      "Managed communications, coordinated workshops, and assisted with society operations.",
    date: "Apr 2022 – Apr 2023",
  },
  {
    title: "Class Representative",
    description:
      "Represented classmates’ concerns to faculty and organized class activities.",
    date: "Oct 2022 – Oct 2023",
  },
];

// === Karlosh: tech logos (stack only) ===
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
  // Frontend
  {
    img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    alt: "React",
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
        <div className="bg-gray-900 p-6 md:mx-0 mx-4 rounded-lg lg:w-[50%] w-[90%] mb-8">
          <p className="gray md:text-lg text-sm">
            I’m <b>Karlosh Yadav</b>, a computer science graduate passionate about{" "}
            <b>data analysis, machine learning, and front-end development</b>.
            I enjoy solving problems with code, creating clean user interfaces,
            and turning data into actionable insights.
          </p>

          <p className="gray pt-4 md:text-lg text-sm">
            My thesis focused on a <b>Heart Disease Prediction System</b> using Python,
            SMOTE, and SHAP to balance data and improve interpretability. 
            I’m skilled in <b>Python, Java, C++, JavaScript, React, and SQL/MySQL</b>,
            with experience in data analysis libraries like <b>Pandas, NumPy, Matplotlib, and Seaborn</b>.
            I love building practical projects and collaborating with teams to deliver real impact.
          </p>
        </div>

        <div className="logos-marquee mt-5">
          <div className="home-logo-wrapper">
            <div className="animate-marquee">
              <div className="grid grid-cols-6 gap-4">
                {technical.map((item, index) => (
                  <img
                    key={index}
                    src={item.img}
                    alt={item.alt}
                    className={item.className}
                    loading="lazy"
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
