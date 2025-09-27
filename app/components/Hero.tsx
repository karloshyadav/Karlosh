'use client';
import Link from "next/link";
import { motion } from "framer-motion";

const RESUME_URL =
  process.env.NEXT_PUBLIC_RESUME_URL ??
  "https://www.linkedin.com/in/karloshyadav/details/featured/";

export default function Hero() {
  return (
    <div className="">
      <div className="lg:flex lg:items-center justify-center items-center flex-col flex lg:flex-row lg:justify-around lg:mt-48 mt-20">
        <div>
          <p className="text lg:mx-0 mx-4 md:text-6xl text-3xl font-semibold max-w-prose mb-6">
            Namaste, I&apos;m <span className="whitespace-nowrap">Karlosh Yadav</span>
          </p>

          <p className="lg:mx-0 mx-4 text-white mb-6 md:text-5xl text-2xl font-semibold">
            Builder of data-driven, human-centered products
          </p>

          <p className="lg:mx-0 mx-4 max-w-prose gray font-medium lg:text-lg text-sm mb-4 capitalize-sentences">
            Incoming M.Tech student in Computer Science at <b>IISc Bangalore</b> and recent CSE graduate from CMRIT (VTU).
            I specialise in crafting responsive interfaces, translating messy datasets into insight, and shipping
            machine-learning features that people trust.
          </p>

          <p className="lg:mx-0 mx-4 max-w-prose gray font-medium lg:text-lg text-sm mb-8 capitalize-sentences">
            My honours thesis delivered a <b>Heart Disease Prediction System</b> powered by Python, SMOTE, and SHAP, and internships at
            <b> Next24 Technology</b> and <b>Relanto Software</b> sharpened my product intuition. I’m eager to contribute across data, front-end,
            and full-stack teams where empathy and experimentation meet.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start lg:mx-0 mx-4">
            <Link
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="download-button button inline-flex items-center justify-center text-center"
            >
              View Résumé
            </Link>

            <div className="flex gap-4 flex-wrap justify-center md:justify-start">
              <Link
                href="mailto:karloshyadav18@gmail.com"
                className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
              >
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/karloshyadav/"
                className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
                target="_blank"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/karloshyadav"
                className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
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
            <div className="profile-image aspect-square flex items-center justify-center bg-[#0f1624] text-6xl font-semibold text-white shadow-[0_40px_100px_-23px_#13adc7] ring-1 ring-white/10">
              <span className="bg-gradient-to-br from-[#38bdf8] via-[#6366f1] to-[#ec4899] bg-clip-text text-transparent">
                KY
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="md:ml-40 md:mt-0 mt-44 md:mx-0 mx-4"></div>
    </div>
  );
}
