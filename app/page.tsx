import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import About from "./components/About";
import Education from "./components/Education";
import Certifications from "./components/Certification";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="ky">
      <Hero />
      <Marquee />
      <Experience />
      <Projects />
      <About />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}
