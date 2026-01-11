"use client";

import { motion } from "framer-motion";

interface Achievement {
  title: string;
  organisation: string;
  date: string;
  description: string;
  certificateUrl?: string;
}

const achievements: Achievement[] = [
  {
    title: "Academic Excellence Award",
    organisation: "Visvesvaraya Technological University",
    date: "Jul 2023",
    description:
      "Recognised among the top performers during the fifth semester for consistent academic distinction and peer mentorship.",
    certificateUrl: "https://drive.google.com/file/d/1SMzWVTbMGDH7M0gBW38TpgdjnNAHyeTg/view?usp=drive_link",
  },
  {
    title: "Rotaract Blood Donation Drive",
    organisation: "Visvesvaraya Technological University",
    date: "Dec 2021",
    description:
      "Coordinated logistics and volunteer outreach for a campus-wide blood donation initiative supporting local hospitals.",
    certificateUrl: "https://drive.google.com/file/d/1YKXGlot59_oGyemd32vLj93QzdUcBZD1/view?usp=drive_link",
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
    certificateUrl: "https://drive.google.com/file/d/1lMcAmMZuxLQf_XdE0yWxXOvXzlTGt-3g/view?usp=drive_link",

  /* ================= Leadership ================= */

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
     certificateUrl: "https://students.scrs.in/students/cmr-institute-of-technology-bangalore",
  },
  {
    title: "Class Representative",
    organisation: "CMR Institute of Technology",
    date: "Oct 2022 – Oct 2023",
    description:
      "Acted as a liaison between faculty and students, ensuring effective communication and academic coordination.",
         certificateUrl: "https://drive.google.com/file/d/1EniaBMPaUCpBVd5QSQhMZac_JKn4Sf0U/view?usp=sharing",
  },
  {
    title: "Machine Learning for All",
    organisation: "Coursera",
    date: "Mar 2023",
    description:
      "Completed foundational training in machine learning concepts, applications, and real-world use cases.",
    certificateUrl: "https://drive.google.com/file/d/1AcEbg864c4EeNirUe_93Uo4r8svpz4sx/view?usp=drive_link",
  },
  {
    title: "Copyright for Educators and Librarians",
    organisation: "Coursera",
    date: "Oct 2023",
    description:
      "Gained knowledge of copyright laws, fair use policies, and digital content ethics in education.",
    certificateUrl: "https://drive.google.com/file/d/1NSOChp0wYZhck6m8l7unjTCh7xEjP_Jl/view?usp=drive_link",
  },
  {
    title: "Linux Fundamentals",
    organisation: "Coursera",
    date: "Aug 2022",
    description:
      "Learned Linux system basics including file systems, commands, and environment configuration.",
    certificateUrl: "https://drive.google.com/file/d/1CMytcg_GCO5-hlR4fFBTd_9AVE6ZsvdH/view?usp=drive_link",
  },
  {
    title: "Programming Foundations with JavaScript, HTML & CSS",
    organisation: "Coursera",
    date: "Mar 2022",
    description:
      "Built strong foundations in web development using JavaScript, HTML, and CSS.",
    certificateUrl: "https://drive.google.com/file/d/1vq23rHg1hlh1wlh7gQeJVHCrGQCJEPNA/view?usp=drive_link",
  },
  {
    title: "C++ for Everyone: Programming Fundamentals",
    organisation: "Coursera",
    date: "Sep 2021",
    description:
      "Developed problem-solving skills using C++ with a focus on core programming concepts.",
    certificateUrl: "https://drive.google.com/file/d/1QWi5Y8HLGNfdnfGCre3JK22Ic2Znthrk/view?usp=drive_link",
  },
  {
    title: "DevOps Fundamentals",
    organisation: "Udemy",
    date: "Sep 2021",
    description:
      "Introduced to DevOps principles including CI/CD, automation, and development workflows.",
    certificateUrl: "https://drive.google.com/file/d/1BIHoteD6inykJFbIpfM_NsOOcBVgLfcH/view?usp=drive_link",
  },

  /* ================= Achievements & Hobbies ================= */

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
    certificateUrl: "https://www.chess.com/member/ykarlosh",
  },
  {
    title: "Cricket",
    organisation: "College & District Level",
    date: "Ongoing",
    description:
      "Played at both college and district levels, showcasing cricketing skills",
    certificateUrl: "https://drive.google.com/file/d/1lMcAmMZuxLQf_XdE0yWxXOvXzlTGt-3g/view",
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
            className="rounded-2xl border border-white/10 bg-[#141326]/80 p-6 shadow-xl backdrop-blur flex flex-col"
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

            <p className="text-sm md:text-base text-[#e2e8f0] mt-4 leading-relaxed flex-grow">
              {achievement.description}
            </p>

            {achievement.certificateUrl && (
              <a
                href={achievement.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-xl
                           bg-gradient-to-r from-[#13adc7] to-[#6978ff]
                           px-4 py-2 text-sm font-medium text-white
                           transition hover:opacity-90"
              >
                View Certificate
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </div>
  );
}
