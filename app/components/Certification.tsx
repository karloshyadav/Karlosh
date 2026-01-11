"use client";

import { motion } from "framer-motion";

interface Achievement {
  title: string;
  organisation: string;
  date: string;
  description: string;
  category: string;
}

const achievements: Achievement[] = [
  // Leadership & Positions
  {
    title: "President, International Student Club (ISC)",
    organisation: "CMR Institute of Technology",
    date: "Apr 2023 – Apr 2024",
    description:
      "Led international student initiatives, coordinated cultural events, and represented student interests at institutional forums.",
    category: "Leadership",
  },
  {
    title: "Secretary, Soft Research Computing Society",
    organisation: "CMR Institute of Technology",
    date: "Apr 2022 – Apr 2023",
    description:
      "Managed event planning, technical workshops, and student collaboration activities within the society.",
    category: "Leadership",
  },
  {
    title: "Class Representative",
    organisation: "CMR Institute of Technology",
    date: "Oct 2022 – Oct 2023",
    description:
      "Acted as a liaison between faculty and students, ensuring smooth academic communication and coordination.",
    category: "Leadership",
  },

  // Certifications
  {
    title: "Machine Learning for All",
    organisation: "Coursera",
    date: "Mar 2023",
    description:
      "Gained foundational knowledge of machine learning concepts, real-world applications, and ethical considerations.",
    category: "Certification",
  },
  {
    title: "Copyright for Educators and Librarians",
    organisation: "Coursera",
    date: "Oct 2023",
    description:
      "Learned copyright laws, fair use principles, and licensing practices for educational content.",
    category: "Certification",
  },
  {
    title: "Linux Fundamentals",
    organisation: "Coursera",
    date: "Aug 2022",
    description:
      "Built a strong understanding of Linux operating systems, shell commands, and file system management.",
    category: "Certification",
  },
  {
    title: "Programming Foundations with JavaScript, HTML & CSS",
    organisation: "Coursera",
    date: "Mar 2022",
    description:
      "Developed core web development skills including responsive design and front-end programming basics.",
    category: "Certification",
  },
  {
    title: "C++ for Everyone: Programming Fundamentals",
    organisation: "Coursera",
    date: "Sep 2021",
    description:
      "Strengthened programming fundamentals including loops, functions, data structures, and OOP basics.",
    category: "Certification",
  },
  {
    title: "DevOps Fundamentals",
    organisation: "Udemy",
    date: "Sep 2021",
    description:
      "Learned CI/CD concepts, version control, automation, and DevOps lifecycle fundamentals.",
    category: "Certification",
  },

  // Achievements & Volunteering
  {
    title: "Academic Excellence – Fifth Semester",
    organisation: "CMR Institute of Technology",
    date: "Jul 2023",
    description:
      "Recognized for strong academic performance and consistency during the fifth semester.",
    category: "Achievement",
  },
  {
    title: "Rotaract Blood Donation Drive",
    organisation: "CMR Institute of Technology",
    date: "Dec 2021",
    description:
      "Coordinated volunteers and logistics for a campus-wide blood donation program supporting local hospitals.",
    category: "Volunteering",
  },
  {
    title: "Rotaract Dog Feeding Drive",
    organisation: "CMR Institute of Technology",
    date: "Jul 2022",
    description:
      "Organized and participated in community animal welfare initiatives ensuring regular food supply.",
    category: "Volunteering",
  },
  {
    title: "Second Place – Technical Event",
    organisation: "Coders Club, CMRIT",
    date: "2022",
    description:
      "Secured second place in a competitive technical event focused on problem-solving and coding skills.",
    category: "Achievement",
  },
  {
    title: "Solved 200+ DSA Problems",
    organisation: "LeetCode & Codeforces",
    date: "Ongoing",
    description:
      "Consistently practiced data structures and algorithms, improving problem-solving and coding efficiency.",
    category: "Achievement",
  },

  // Sports & Hobbies
  {
    title: "Chess – Inter-College Player",
    organisation: "College Level",
    date: "Ongoing",
    description:
      "Inter-college chess player with an approximate rating of 1000, demonstrating strategic thinking.",
    category: "Hobby",
  },
  {
    title: "Cricket – College & District Level",
    organisation: "College & District Teams",
    date: "2019 – 2023",
    description:
      "Represented college and district teams, balancing competitive sports with engineering academics.",
    category: "Sports",
  },
];

export default function Achievements() {
  return (
    <div className="container mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="text-center mt-20">
        <p className="text-white text-xl font-bold opacity-60">
          Leadership, learning, service & sports
        </p>
        <h3 className="mb-10 text-xl md:text-4xl text-white font-semibold">
          Achievements & Volunteering
        </h3>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {achievements.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-white/10 bg-[#141326]/80 p-6 shadow-xl backdrop-blur"
          >
            <div className="flex items-start justify-between gap-4">
              <h4 className="text-lg font-semibold text-white">
                {item.title}
              </h4>
              <span className="text-xs uppercase tracking-widest text-[#13adc7] bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">
                {item.date}
              </span>
            </div>

            <p className="text-sm text-[#9ca3af] mt-2">
              {item.organisation}
            </p>

            <span className="inline-block mt-3 text-xs uppercase tracking-wider text-purple-400">
              {item.category}
            </span>

            <p className="text-sm md:text-base text-[#e2e8f0] mt-4 leading-relaxed">
              {item.description}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
