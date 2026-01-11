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
    title: "President, International Student Club (ISC)",
    organisation: "CMR Institute of Technology",
    date: "Apr 2023 – Apr 2024",
    description:
      "Led international student initiatives, organized cultural events, and represented student interests at institutional forums.",
  },
  {
    title: "Secretary, Soft Research Computing Society",
    organisation: "CMR Institute of Technology",
    date: "Apr 2022 – Apr 2023",
    description:
      "Handled coordination of technical events, workshops, and student engagement activities.",
  },
  {
    title: "Class Representative",
    organisation: "CMR Institute of Technology",
    date: "Oct 2022 – Oct 2023",
    description:
      "Acted as a bridge between faculty and students to ensure smooth academic communication.",
  },
  {
    title: "Machine Learning for All",
    organisation: "Coursera",
    date: "Mar 2023",
    description:
      "Learned the fundamentals of machine learning, real-world applications, and ethical considerations.",
  },
  {
    title: "Copyright for Educators and Librarians",
    organisation: "Coursera",
    date: "Oct 2023",
    description:
      "Studied copyright laws, fair use principles, and licensing models for educational content.",
  },
  {
    title: "Linux Fundamentals",
    organisation: "Coursera",
    date: "Aug 2022",
    description:
      "Gained hands-on knowledge of Linux operating systems, shell commands, and file management.",
  },
  {
    title: "Programming Foundations with JavaScript, HTML & CSS",
    organisation: "Coursera",
    date: "Mar 2022",
    description:
      "Built foundational skills in front-end web development and responsive design.",
  },
  {
    title: "C++ for Everyone: Programming Fundamentals",
    organisation: "Coursera",
    date: "Sep 2021",
    description:
      "Developed strong programming fundamentals including loops, functions, and OOP basics.",
  },
  {
    title: "DevOps Fundamentals",
    organisation: "Udemy",
    date: "Sep 2021",
    description:
      "Learned CI/CD pipelines, version control basics, and DevOps lifecycle concepts.",
  },
  {
    title: "Academic Excellence – Fifth Semester",
    organisation: "CMR Institute of Technology",
    date: "Jul 2023",
    description:
      "Recognized for strong academic performance during the fifth semester.",
  },
  {
    title: "Rotaract Blood Donation Drive",
    organisation: "CMR Institute of Technology",
    date: "Dec 2021",
    description:
      "Coordinated volunteers and logistics for a campus-wide blood donation program.",
  },
  {
    title: "Rotaract Dog Feeding Drive",
    organisation: "CMR Institute of Technology",
    date: "Jul 2022",
    description:
      "Participated in community animal welfare initiatives supporting local shelters.",
  },
  {
    title: "Second Place – Technical Event",
    organisation: "Coders Club, CMRIT",
    date: "2022",
    description:
      "Secured second place in a competitive technical event focused on coding and problem-solving.",
  },
  {
    title: "Solved 200+ DSA Problems",
    organisation: "LeetCode & Codeforces",
    date: "Ongoing",
    description:
      "Practiced data structures and algorithms to strengthen logical thinking and coding efficiency.",
  },
  {
    title: "Chess – Inter-College Player",
    organisation: "College Level",
    date: "Ongoing",
    description:
      "Inter-college chess player with an approximate rating of 1000.",
  },
  {
    title: "Cricket – College & District Level",
    organisation: "College & District Teams",
    date: "2019 – 2023",
    description:
      "Represented college and district teams while balancing academics and athletics.",
  },
];

export default function Certifications() {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mt-20">
        <p className="text-white text-xl font-bold opacity-60">
          Celebrating learning, service, and teamwork
        </p>
        <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
          Achievements & Volunteering
        </h3>
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
              <h4 className="text-lg font-semibold text-white max-w-[70%]">
                {achievement.title}
              </h4>
              <span className="text-xs uppercase tracking-widest text-[#13adc7] bg-white/5 px-3 py-1 rounded-full">
                {achievement.date}
              </span>
            </div>

            <p className="text-sm text-[#9ca3af] mt-3">
              {achievement.organisation}
            </p>

            <p className="text-sm md:text-base text-[#e2e8f0] mt-4 leading-relaxed">
              {achievement.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
