"use client";
import Image from "next/image";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Certifications from "./components/Certification";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <NavBar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="achievements">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
