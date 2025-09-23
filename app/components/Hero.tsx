'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
  const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;

  return (
    <div className="">
      <div className="lg:flex lg:items-center justify-center items-center flex-col flex lg:flex-row lg:justify-around lg:mt-48 mt-20">
        <div>
          <p className="text lg:mx-0 mx-4 md:text-6xl text-2xl font-semibold max-w-prose mb-8">
            Hello, I&apos;m <span className="whitespace-nowrap">Karlosh Yadav</span>
          </p>

          <p className="lg:mx-0 mx-4 text-white mb-8 md:text-6xl text-2xl font-semibold">
            Data Analyst & Developer
          </p>

          <p className="lg:mx-0 mx-4 max-w-prose gray font-medium lg:text-lg text-sm mb-8 capitalize-sentences">
            Computer Science graduate (CMRIT, VTU). I build clean, responsive UIs and apply
            machine learning + analytics to solve real problems. Thesis: a Heart Disease
            Prediction System using Python, SMOTE, and SHAP. Interested in Software/Front-End
            and Data roles.
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start lg:mx-0 mx-4">
            <a download href="/Karlosh_Yadav_Resume.pdf">
              <button className="download-button button">Download CV</button>
            </a>

            <div className="flex gap-4">
              <Link
                href="mailto:ykarlosh@gmail.com"
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
            initial={false}
            animate={
              imageLoaded
                ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
                : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
            }
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/karlosh.jpg"           // <- put your headshot here (in /public)
              alt="Karlosh Yadav — Developer"
              width={301}
              height={301}
              blurDataURL="/karlosh.jpg"
              onLoad={() => setImageLoaded(true)}
              quality={100}
              priority
              placeholder="blur"
              className="hover:scale-[1.025] transition-all duration-300 ease-in profile-image filter"
            />
          </motion.div>
        </div>
      </div>

      <div className="md:ml-40 md:mt-0 mt-44 md:mx-0 mx-4"></div>
    </div>
  );
}
