'use client';
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const RESUME_URL = process.env.NEXT_PUBLIC_RESUME_URL ?? "assets/Karlosh_Yadav_Resume.pdf";

export default function Hero() {
  return (
    <div>
      <div className="lg:flex lg:items-center justify-center items-center flex-col flex lg:flex-row lg:justify-around lg:mt-48 mt-20">
        <div>
          <p className="text lg:mx-0 mx-4 md:text-6xl text-3xl font-semibold max-w-prose mb-6">
            KARLOSH YADAV
          </p>

          <p className="lg:mx-0 mx-4 text-white mb-6 md:text-4xl text-2xl font-semibold">
            Computer Science Engineer focused on Machine Learning and Scalable Systems
          </p>

          <p className="lg:mx-0 mx-4 max-w-prose gray font-medium lg:text-lg text-sm mb-8">
            M.Tech student (CSE) at Indian Institute of Science, Bangalore (2025–2027), with a BE in CSE from
            Visvesvaraya Technological University (2020–2024). I build reliable ML systems, design secure software,
            and enjoy solving practical problems with data-driven engineering.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start lg:mx-0 mx-4">
            <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer" className="download-button button inline-flex items-center justify-center text-center">
              View Résumé
            </Link>
            <Link href="https://www.linkedin.com/in/karloshyadav" className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition" target="_blank">
              LinkedIn
            </Link>
            <Link href="https://karloshyadav.com.np" className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition" target="_blank">
              Website
            </Link>
          </div>
        </div>

        <div className="container-profile lg:mb-0 md:mb-12">
          <div className="profile-glow-2"></div>
          <div className="profile-glow"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-full ring-1 ring-white/10 shadow-[0_40px_100px_-23px_#13adc7] bg-[#0f1624] w-64 h-64 md:w-80 md:h-80 lg:w-[480px] lg:h-[480px]">
              <Image
                src="/assets/profile.png"
                alt="Karlosh Yadav"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 320px, 256px"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
