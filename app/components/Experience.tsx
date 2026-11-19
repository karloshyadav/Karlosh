export default function Experience() {
  return (
    <section id="experience" className="sec">
      <div className="wrap">
        <div className="sh rv">
          <div>
            <p className="mono acc" style={{ marginBottom: "20px" }}>
              (01) Experience
            </p>
            <h2 className="serif">
              Real systems, <em>real constraints.</em>
            </h2>
          </div>
        </div>
        <article className="card xg rv">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            <p className="mono acc">May 2026 – Jul 2026 · 3 mos</p>
            <p
              className="serif"
              style={{
                fontSize: "clamp(64px,9vw,140px)",
                lineHeight: ".9",
                letterSpacing: "-.03em",
              }}
            >
              Google
            </p>
            <h3
              style={{ fontSize: "22px", fontWeight: "500", lineHeight: "1.3" }}
            >
              Software Engineer Intern
            </h3>
            <p className="muted">
              Full-time · On-site
              <br />
              Bengaluru, Karnataka, India
            </p>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "26px" }}
          >
            <p
              className="serif"
              style={{
                fontSize: "clamp(26px,2.7vw,38px)",
                lineHeight: "1.2",
                letterSpacing: "-.01em",
              }}
            >
              Modernized a critical datacenter validation framework by migrating
              its hard-coded complex structure to a configuration-driven generic
              architecture using dynamic &amp; reflection-based mechanisms,
              while maintaining exact parity with legacy requirements.
            </p>
            <ul className="bl">
              <li>
                Designed and implemented a scalable pipeline, analyzed patterns
                in the existing system, reduced engineering overhead,
                implemented modular design to achieve lower latency and
                efficiency.
              </li>
            </ul>
            <div className="tags" style={{ marginTop: "auto" }}>
              <span className="tag">Datacenter validation</span>
              <span className="tag">Configuration-driven architecture</span>
              <span className="tag">Reflection-based mechanisms</span>
              <span className="tag">Modular design</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
