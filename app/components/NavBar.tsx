import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  return (
    <nav className="nav" aria-label="Primary">
      <a
        href="#top"
        style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}
        aria-label="Karlosh Yadav, back to top"
      >
        <svg width="30" height="34" viewBox="0 0 30 34" aria-hidden="true">
          <path
            d="M2 33V15a13 13 0 0 1 26 0v18"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="1.6"
          />
          <path
            d="M8 33V16a7 7 0 0 1 14 0v17"
            fill="none"
            stroke="var(--ink)"
            strokeWidth="1.2"
            opacity=".55"
          />
        </svg>
        <span className="serif" style={{ fontSize: "26px", lineHeight: "1" }}>
          Karlosh Yadav
        </span>
      </a>
      <div className="links">
        <a className="lk" href="#experience">
          Experience
        </a>
        <a className="lk" href="#work">
          Work
        </a>
        <a className="lk" href="#about">
          About
        </a>
        <a className="lk" href="#education">
          Education
        </a>
        <a className="lk" href="#beyond">
          Beyond
        </a>
        <a className="lk" href="#contact">
          Contact
        </a>
      </div>
      <div className="navr">
        <ThemeToggle />
        <a
          className="btn"
          href="/assets/Karlosh_Yadav_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé
          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
            <path
              d="M2 10 10 2M4 2h6v6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
}
