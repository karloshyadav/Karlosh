"use client";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";
import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";

export default function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="text-white text-poppins mt-12 ">
      <div className="md:flex md:justify-around md:items-center grid-cols-2 grid gap-y-4 md:px-0 px-5">
        <div className="md:col-span-1 order-1 sm:order-1">
          <p className="md:text-3xl text-2xl font-semibold tracking-wide">Karlosh Yadav</p>
          <p className="text-xs uppercase tracking-[0.3em] text-gray-400 hidden md:block">
            Data & Front-end Engineer
          </p>
        </div>
        <div className="flex md:gap-16 gap-6 md:text-lg text-nowrap text-sm font-medium md:col-span-1 order-3 sm:order-3  ">
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About me
          </ScrollLink>
          <ScrollLink
            to="experience"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Experience
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="achievements"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Achievements
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact me
          </ScrollLink>
        </div>
        <div className="flex gap-8 items-center   justify-center  md:order-3 order-2">
          <Link href={"https://www.linkedin.com/in/karloshyadav/"} target="_blank" aria-label="Karlosh on LinkedIn">
            <FaLinkedin className="md:w-7 w-6 h-6 md:h-7 text-white" />
          </Link>
          <Link href={"https://github.com/karloshyadav"} target="_blank" aria-label="Karlosh on GitHub">
            <FaGithub className="md:w-7 md:h-7 w-6 h-6  text-white" />
          </Link>
          <Link href={"https://www.instagram.com/karloshyadav/"} target="_blank" aria-label="Karlosh on Instagram">
            <FaInstagram className="md:w-7 md:h-7 w-6 h-6 text-white" />
          </Link>
          <Link
            href={"https://cricheroes.com/player-profile/9928702/karlosh-yadav/matches"}
            target="_blank"
            aria-label="Karlosh on CricHeroes"
          >
            <GiCricketBat className="md:w-7 md:h-7 w-6 h-6 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
