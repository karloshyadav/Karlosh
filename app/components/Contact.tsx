export default function Contact() {
  return (
    <section
      id="contact"
      className="sec"
      style={{ borderTop: "1px solid var(--line)", position: "relative" }}
    >
      <div className="wrap">
        <p className="mono acc rv" style={{ marginBottom: "28px" }}>
          (06) Contact
        </p>
        <h2
          className="serif rv"
          style={{
            fontSize: "clamp(48px,8.4vw,132px)",
            lineHeight: ".94",
            letterSpacing: "-.025em",
            maxWidth: "14ch",
          }}
        >
          Let&apos;s build something that{" "}
          <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
            holds up.
          </span>
        </h2>
        <div className="rv" style={{ marginTop: "clamp(36px,5vw,64px)" }}>
          <a className="big serif" href="mailto:karloshyadav@iisc.ac.in">
            karloshyadav@iisc.ac.in
          </a>
        </div>
        <div
          className="rv"
          style={{
            display: "flex",
            gap: "14px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <a className="btn primary" href="mailto:karloshyadav@iisc.ac.in">
            Send an email
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path
                d="M2 10 10 2M4 2h6v6"
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
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path
                d="M2 10 10 2M4 2h6v6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
          <a
            className="btn"
            href="/assets/Karlosh_Yadav_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download résumé
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path
                d="M6 1v9M2 6l4 4 4-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "clamp(72px,10vw,140px)",
            paddingTop: "28px",
            borderTop: "1px solid var(--line2)",
          }}
        >
          <p className="mono muted">© 2026 Karlosh Yadav · Bengaluru, India</p>
          <a className="mono muted" href="#top">
            Back to top ↑
          </a>
        </div>
      </div>
    </section>
  );
}
