"use client";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

export default function NavBar() {
  return (
    <div className="text-white text-poppins mt-12">
      <div className="md:flex md:justify-around md:items-center grid-cols-2 grid gap-y-4 md:px-0 px-5">
        <div className="md:col-span-1 order-1 sm:order-1 flex items-center gap-4">
          <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden ring-2 ring-white/20 shadow-lg">
            <Image
              src="/assets/profile.png"
              alt="Karlosh Yadav portrait"
              fill
              className="object-cover"
              sizes="64px"
              priority
            />
          </div>
          <div>
            <p className="md:text-3xl text-2xl font-semibold tracking-wide">Karlosh Yadav</p>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-400 hidden md:block">
              M.Tech CSE @ IISc Bangalore
            </p>
          </div>
        </div>

        <div className="flex md:gap-12 gap-6 md:text-lg text-nowrap text-sm font-medium md:col-span-1 order-3 sm:order-3">
          <ScrollLink to="about" smooth duration={500} className="cursor-pointer">About</ScrollLink>
          <ScrollLink to="education" smooth duration={500} className="cursor-pointer">Education</ScrollLink>
          <ScrollLink to="projects" smooth duration={500} className="cursor-pointer">Projects</ScrollLink>
          <ScrollLink to="achievements" smooth duration={500} className="cursor-pointer">Achievements</ScrollLink>
          <ScrollLink to="contact" smooth duration={500} className="cursor-pointer">Contact</ScrollLink>
        </div>

        <div className="flex gap-8 items-center justify-center md:order-3 order-2">
          <Link href="https://www.linkedin.com/in/karloshyadav" target="_blank" aria-label="Karlosh on LinkedIn">
            <FaLinkedin className="md:w-7 w-6 h-6 md:h-7 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
