"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import NavBar from "./NavBar";

export default function Hero() {
  const [pos, setPos] = useState({ x: 420, y: 260 });
  const raf = useRef(0);

  useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      setPos({ x, y });
    });
  };

  return (
    <header
      id="top"
      className="hero"
      onMouseMove={onMove}
      style={{
        backgroundImage: `radial-gradient(560px circle at ${Math.round(pos.x)}px ${Math.round(pos.y)}px, var(--glow), transparent 70%)`,
      }}
    >
      <div className="wrap">
        <NavBar />

        <div className="hgrid">
          <div>
            <p className="mono acc in1" style={{ marginBottom: "28px" }}>
              M.Tech CSE · Indian Institute of Science, Bengaluru · 2025–27
            </p>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(68px,10.4vw,168px)",
                letterSpacing: "-.035em",
              }}
            >
              <span className="nm">
                <span>Karlosh</span>
              </span>
              <span className="nm l2">
                <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                  Yadav
                </span>
              </span>
            </h1>
            <p
              className="in1"
              style={{
                marginTop: "clamp(24px,3vw,40px)",
                fontSize: "clamp(21px,2.3vw,30px)",
                lineHeight: "1.3",
                maxWidth: "24ch",
                fontWeight: "500",
                letterSpacing: "-.01em",
              }}
            >
              Computer science engineer focused on machine learning and scalable
              systems.
            </p>
            <p
              className="in2 muted"
              style={{ marginTop: "20px", maxWidth: "56ch" }}
            >
              I build reliable ML systems, design secure software, and enjoy
              solving practical problems with data-driven engineering.
            </p>
            <p
              className="mono in2"
              style={{
                marginTop: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span className="acc" aria-hidden="true">
                ●
              </span>
              Software Engineer Intern · Google · May–Jul 2026
            </p>
            <div
              className="in3"
              style={{
                display: "flex",
                gap: "14px",
                flexWrap: "wrap",
                marginTop: "36px",
              }}
            >
              <a className="btn primary" href="#work">
                See selected work
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path
                    d="M6 1v10M2 7l4 4 4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
              <a
                className="btn"
                href="https://www.linkedin.com/in/karloshyadav"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  aria-hidden="true"
                >
                  <path
                    d="M2 10 10 2M4 2h6v6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="hv">
            <svg className="arcs" viewBox="0 0 600 700" aria-hidden="true">
              <path
                className="arc a0"
                pathLength="1"
                d="M0 700V320A300 300 0 0 1 600 320V700"
              />
              <path
                className="arc"
                pathLength="1"
                style={{ animationDelay: ".15s" }}
                d="M28 700V328A272 272 0 0 1 572 328V700"
              />
              <path
                className="arc"
                pathLength="1"
                style={{ animationDelay: ".3s" }}
                d="M56 700V336A244 244 0 0 1 544 336V700"
              />
              <path
                className="arc"
                pathLength="1"
                style={{ animationDelay: ".45s" }}
                d="M84 700V344A216 216 0 0 1 516 344V700"
              />
              <path
                className="arc"
                pathLength="1"
                style={{ animationDelay: ".6s" }}
                d="M112 700V352A188 188 0 0 1 488 352V700"
              />
            </svg>
            <div className="pt">
              <Image
                src="/assets/portrait.jpg"
                alt="Portrait of Karlosh Yadav standing by a misty lake"
                fill
                sizes="(min-width: 1000px) 340px, 60vw"
                priority
              />
            </div>
            <div className="mini">
              <Image
                src="/assets/iisc-web.jpg"
                alt="The main building of the Indian Institute of Science"
                fill
                sizes="180px"
              />
            </div>
            <span className="fl mono" style={{ right: "-2%", top: "22%" }}>
              <i></i>IISc · Bengaluru
            </span>
            <span
              className="fl mono"
              style={{ right: "2%", bottom: "16%", animationDelay: "-3s" }}
            >
              <i></i>ML · Systems
            </span>
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <p className="n serif">
              333<small>/340</small>
            </p>
            <p className="mono muted" style={{ marginTop: "10px" }}>
              GRE score
            </p>
          </div>
          <div className="stat">
            <p className="n serif">
              8.75<small>/10</small>
            </p>
            <p className="mono muted" style={{ marginTop: "10px" }}>
              B.E. CGPA · VTU
            </p>
          </div>
          <div className="stat">
            <p className="n serif">05</p>
            <p className="mono muted" style={{ marginTop: "10px" }}>
              Projects shipped
            </p>
          </div>
          <div className="stat">
            <p className="n serif">04</p>
            <p className="mono muted" style={{ marginTop: "10px" }}>
              Languages spoken
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
