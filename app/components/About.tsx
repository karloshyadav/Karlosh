import React from "react";
import { motion } from "framer-motion";
import "../../public/assets/style.css"
import Softskills from "./Softskills";

const events = [
  { title: 'Successfully completed high school', description: 'Successfully completed high school with excellent academic performance, achieving a GPA of 8.4/10', date: 'May 2022' },
  { title: 'Achieved Top 10 in the Youth-on Hackathon competition in Da Nang', description: 'Developed Bitstorm, a web platform enabling users to connect and consult with doctors quickly and efficiently', date: 'March 2023' },
  { title: 'Interned at Swapbrain', description: 'Participated in a real-world project as a Python Developer, focusing on building efficient and scalable solutions', date: 'September 2023' },
  { title: 'IT graduate from Passerelles Numériques', description: 'Currently studying at Passerelles Numériques, a non-governmental organization specializing in IT education and training', date: 'October 2025' },
];
const technical = [
  {
    img: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/html-1.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/nodejs-3.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/gitlab.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/postman.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/python-4.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/fastapi-1.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/jira-3.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg",
    alt: "Logo 1",
    className: "client-logo w-21 h-20 object-contain"
  },
  {
    img: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    alt: "Logo 1",
    className: "client-logo w-10 h-10 object-contain"
  },
]

export default function About() {
  return (
    <div className=" ">
      <h2 className="md:text-4xl text-xl text-white font-semibold mb-12  md:mt-48 mt-20 text-color">
        About me
      </h2>
      <motion.div
        initial={{ y: 50 }}
        animate={{
          y: 0,
        }}
        viewport={{ amount: 0.5 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * 1 }}
        className="flex md:justify-center md:ml-0  md:items-center items-start flex-col "
      >
        <div className="bg-gray-900 p-6 md:mx-0 mx-4 rounded-lg lg:w-[50%] w-[90%]   mb-8 ">
          <p className="gray md:text-lg text-sm">
            I am a final-year student majoring in Information Technology with a solid background in programming, especially in Frontend development. I have practical experience in web application development through academic and personal projects.
          </p>

          <p className="gray pt-4 md:text-lg text-sm">
            I wish to join a dynamic team to apply my skills, gain practical experience and contribute to the success of the organization. My goal is to constantly develop myself and become a valuable factor for the company.
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
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className=""
        initial={{ y: 50 }}
        animate={{
          y: 0,
        }}
        viewport={{ amount: 0.5 }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * 1 }}
      >
          <div className="timeline">
                <ul>
                    {events.map((event, index) => (
                        <li
                          key={index}
                        >
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
