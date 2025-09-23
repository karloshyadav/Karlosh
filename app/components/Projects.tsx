import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaGithub } from 'react-icons/fa';
const projects = [
  {
    title: "Healthcare website",
    description:
      "The spa booking website is an online platform that helps users easily search, book and manage spa services quickly. Customers can look up the list of nearest spas, view service details, prices, reviews and schedule an appointment at a suitable time. The system also integrates calendar reminders via email or text message to ensure convenience.",
    features: [
      "Designing interfaces in Figma and creating responsive layouts",
      "Using JSON Server to provide support for a fake REST API",
      "Connecting with a third-party MOMO API",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    duration: "Sep 2023 - Nov 2023",
    githubUrl: "https://github.com/vanthu1223/Healthcare",
    imageSrc: "/spa.png"
  },

  {
    title: "Bitstorm website",
    description:
      "The psychology consulting doctor booking project is an online platform that helps users easily make appointments with psychological consultants through online consultations. In addition to the scheduling function, the project also provides a posting feature so users can share their feelings and thoughts anonymously and receive support from the community. Users can participate in a safe space where they can seek empathy and advice without worrying about being judged.",
    features: [
      "Utilizing MySQL for data retrieval and implementing CRUD and search functionalities",
      "Using PHP to display information according to the user's problem",
      "Designing interface using Figma and using Trello for project management",
    ],
    tags: ["Laravel", "Tailwind CSS", "JavaScript", "Figma", "React JS"],
    duration: "Dec 2023 - Jan 2024",
    githubUrl: "https://github.com/Pham-Gia-Bao1/BitStorm.",
    imageSrc: "/bitstorm.png",
  },
  {
    title: "ChatGPT website",
    description:
      "The ChatGPT project is a platform that uses AI technology to provide help and support to users in areas such as consulting, entertainment, learning, and problem solving. The project allows users to communicate with ChatGPT through a chat interface where they can ask questions, request explanations, or discuss various topics",
    features: [
      "Designing interfaces in Figma and creating responsive layouts.",
      "Handling API calls to Gemini and using React-Markdown for dynamic data rendering.",
      "Implementing Google login and storing user data in the database using Supabase.",
    ],
    tags: ["ReactJS", "Tailwind CSS", "JavaScript", "Supebase", "Gemini model"],
    duration: "Nov 2024 - Dec 2024",
    githubUrl: "https://github.com/chatbot-devplus/Chatbot.git",
    imageSrc: "/chat.jpg",
  },
  {
    title: "AUTOMATIC SUBTITLES - SWAPBRAIN COMPANY",
    description:
      "The Translation Video Subtitle project is a platform that helps users translate video subtitles into languages ​​that websites or video platforms do not automatically support. This project will help automatically download the original subtitles, use powerful translation tools to translate into the desired language, and finally sync the translated subtitles to the video. This is especially useful for users who want to watch videos from platforms like YouTube, Vimeo, or sites that do not offer subtitle services for their language.",
    features: [
      "Developing an API to connect endpoints using the WebSocket protocol.",
      "Implementing an algorithm to stream audio from a video and transcribe it into text in real time.",
      "Creating an endpoint that returns the language based on the user's selection.",
    ],
    tags: ["ReactJS", "Tailwind CSS", "JavaScript", "Supebase", "Gemini model"],
    duration: "June 2024 - Sep 2024",
    githubUrl: "#",
    imageSrc: "/extension.png",
  },
  {
    title: "Portfolio",
    description:
      "My portfolio is where I introduce the projects, skills and experiences I have accumulated throughout my studies and work. Here you'll find real projects I've worked on, along with the solutions and technologies I use to solve problems",
    features: [
      "Developing an API to connect endpoints using the WebSocket protocol.",
      "Implementing an algorithm to stream audio from a video and transcribe it into text in real time.",
      "Creating an endpoint that returns the language based on the user's selection.",
    ],
    tags: ["Javascript", "Tailwind css", "ReactJS", "CSS"],
    duration: "Dec 2024 - Feb 2025",
    githubUrl: "https://github.com/vthu191/portfolio.git",
    imageSrc: "/portfolio.png",
  },
  {
    title: "Employee Management System with Integrated Gemini AI",
    description:
      "Employee management website provides a comprehensive solution for tracking and managing human resource information. Integrated AI features allow users to interact directly and receive support through a smart question and answer system. AI technology helps automate management tasks and improve work efficiency. This website provides an easier and smarter employee management experience",
    features: [
      "Built an Employee Management System for tracking records and performance.",
      "Integrated Gemini AI for automated insights and task optimization.",
      "Added secure authentication and role-based access control.",
    ],
    tags: ["ReactJS", "Typescript", "Tailwind css", "MySQL"],
    duration: "Dec 2024 - Feb 2025",
    githubUrl: "https://github.com/chatbot-devplus/employee-project-tracker.git",
    imageSrc: "/chatbot.png",
  },

];
const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

export default function Projects() {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div className="md:ml-40  px-4 md:px-0  lg:mt-20">
      <h3 className="mb-8 text-xl md:text-4xl text-white font-semibold">
        Projects
      </h3>
      {projects.map((project, index) => (
        <motion.div
          initial={{ y: 50 }}
          animate={{
            y: 0,
          }}
          viewport={{ amount: 0.5 }}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 * index }}
          key={index}
        >
          <div className=" card flex flex-col lg:flex-row lg:gap-12 justify-between items-start lg:items-center px-8 mb-12">
            <div className="max-w-prose gray font-medium text-lg flex flex-col gap-4 w-full lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-white text-2xl mt-4">{project.title}</h1>
              <p className="gray text-sm md:text-md leading-relaxed">
                {project.description}
              </p>
              <p>Features:</p>
              <ul className="text-sm md:text-md space-y-1">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <span className="text-[#607b96] mr-2">*</span>
                    <p className="md:text-md text-sm">{feature}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <ul className="tags">
                  {project.tags.map((tag, index) => (
                    <li key={index}>
                      <a href="#" className="tag">{tag}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center items-center md:items-start md:justify-start flex-col sm:flex-row gap-4 md:mb-4">
                <Link href={project.githubUrl} target="_blank">
                  <FaGithub size={30} color="#fff" />
                </Link>
                <p className="text-gray-400 mt-2 ml-auto">{project.duration}</p>
              </div>
            </div>
            <motion.div
              initial={false}
              animate={
                imageLoaded
                  ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                  : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
              }
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full lg:w-1/2 lg:pb-0 pb-4 lg:mt-0"
            >
              <Image
                onLoad={() => setImageLoaded(true)}
                src={project.imageSrc}
                alt={`${project.title} project`}
                sizes="(max-width: 1024px) 100vw, 50vw"
                style={{ borderRadius: '1rem' }}
                width={1000}
                height={750}
              />

            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
