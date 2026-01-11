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
    title: "Academic Excellence Award",
    organisation: "Visvesvaraya Technological University",
    date: "Jul 2023",
    description:
      "Recognised among the top performers during the fifth semester for consistent academic distinction and peer mentorship.",
  },
  {
    title: "Rotaract Blood Donation Drive",
    organisation: "Visvesvaraya Technological University",
    date: "Dec 2021",
    description:
      "Coordinated logistics and volunteer outreach for a campus-wide blood donation initiative supporting local hospitals.",
  },
  {
    title: "Rotaract Community Feeding",
    organisation: "Visvesvaraya Technological University",
    date: "Jul 2022",
    description:
      "Led a student crew to organise pet nourishment drives, ensuring consistent supplies for local animal shelters.",
  },
  {
    title: "Cricket — College & District Levels",
    organisation: "Visvesvaraya Technological University",
    date: "2019 – 2023",
    description:
      "Represented college and district teams as an all-rounder, balancing athletics with full-time engineering studies.",
  },

  /* ================= Added Achievements ================= */

  {
    title: "President, International Student Club (ISC)",
    organisation: "CMR Institute of Technology",
    date: "Apr 2023 – Apr 2024",
    description:
      "Led international student initiatives, cultural exchanges, and academic collaborations while overseeing club operations.",
  },
  {
    title: "Secretary, Soft Research Computing Society",
    organisation: "CMR Institute of Technology",
    date: "Apr 2022 – Apr 2023",
    description:
      "Managed documentation, coordinated technical events, and supported research-oriented student activities.",
  },
  {
    title: "Class Representative",
    organisation: "CMR Institute of Technology",
    date: "Oct 2022 – Oct 2023",
    description:
      "Acted as a liaison between faculty and students, ensuring effective communication and academic coordination.",
  },

  /* ================= Certifications ================= */

  {
    title: "Machine Learning for All",
    organisation: "Coursera",
    date: "Mar 2023",
    description:
      "Completed foundational training in machine learning concepts, applications, and real-world use cases.",
  },
  {
    title: "Copyright for Educators and Librarians",
    organisation: "Coursera",
    date: "Oct 2023",
    description:
      "Gained knowledge of copyright laws, fair use policies, and digital content ethics in education.",
  },
  {
    title: "Linux Fundamentals",
    organisation: "Coursera",
    date: "Aug 2022",
    description:
      "Learned Linux system basics including file systems, commands, and environment configuration.",
  },
  {
    title: "Programming Foundations with JavaScript, HTML & CSS",
    organisation: "Coursera",
    date: "Mar 2022",
    description:
      "Built strong foundations in web development using JavaScript, HTML, and CSS.",
  },
  {
    title: "C++ for Everyone: Programming Fundamentals",
    organisation: "Coursera",
    date: "Sep 2021",
    description:
      "Developed problem-solving skills using C++ with a focus on core programming concepts.",
  },
  {
    title: "DevOps Fundamentals",
    organisation: "Udemy",
    date: "Sep 2021",
    description:
      "Introduced to DevOps principles including CI/CD, automation, and development workflows.",
  },

  /* ================= Achievements, Volunteering & Hobbies ================= */

  {
    title: "Academic Achievement – Fifth Semester",
    organisation: "CMR Institute of Technology",
    date: "Jul 2023",
    description:
      "Secured academic distinction during the fifth semester through consistent performance.",
  },
  {
    title: "Rotaract Blood Donation",
    organisation: "CMR Institute of Technology",
    date: "Dec 2021",
    description:
      "Volunteered and supported campus-wide blood donation initiatives in collaboration with local hospitals.",
  },
  {
    title: "Rotaract Dog Feeding Drive",
    organisation: "CMR Institute of Technology",
    date: "Jul 2022",
    description:
      "Participated in animal welfare activities by organising dog feeding drives on campus.",
  },
  {
    title: "Second Place – Technical Event",
    organisation: "Coders Club, CMRIT",
    date: "2023",
    description:
      "Secured second place in a technical competition organised by Coders CMRIT Club.",
  },
  {
    title: "Solved 200+ DSA Problems",
    organisation: "LeetCode & Codeforces",
    date: "Ongoing",
    description:
      "Practiced data structures and algorithms extensively across competitive programming platforms.",
  },
  {
    title: "Chess — Inter-College Player",
    organisation: "Inter-College Tournaments",
    date: "Ongoing",
    description:
      "Active competitive chess player with an approximate rating of 1000.",
  },
];

export default function Certifications() {
  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="text-center mt-20">
        <p className="text-white text-xl font-bold opacity-60">
          Celebrating learning, service, and teamwork
        </p>
        <div className="inline-block text-center group">
          <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
            Achievements & Volunteering
          </h3>
        </div>
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
