export default function Certifications() {
  return (
    <section
      id="beyond"
      className="sec"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="sh rv">
          <div>
            <p className="mono acc" style={{ marginBottom: "20px" }}>
              (05) Beyond the code
            </p>
            <h2 className="serif">
              Certified, elected, <em>competitive.</em>
            </h2>
          </div>
        </div>

        <div className="bg12">
          <article className="card c12 rv">
            <p className="mono acc">Certifications &amp; awards</p>
            <div className="cg">
              <div className="cert">
                <h3
                  className="serif"
                  style={{ fontSize: "28px", lineHeight: "1.08" }}
                >
                  Machine Learning for All
                </h3>
                <p className="mono muted">University of London · 2023</p>
              </div>
              <div className="cert">
                <h3
                  className="serif"
                  style={{ fontSize: "28px", lineHeight: "1.08" }}
                >
                  Best Project
                </h3>
                <p className="mono muted">
                  Visvesvaraya Technological University
                </p>
              </div>
              <div className="cert">
                <h3
                  className="serif"
                  style={{ fontSize: "28px", lineHeight: "1.08" }}
                >
                  C for Everyone: Programming Fundamentals
                </h3>
                <p className="mono muted">
                  University of California, Santa Cruz · 2021
                </p>
              </div>
              <div className="cert">
                <h3
                  className="serif"
                  style={{ fontSize: "28px", lineHeight: "1.08" }}
                >
                  Programming Foundation with HTML, CSS and JavaScript
                </h3>
                <p className="mono muted">Duke University</p>
              </div>
              <div className="cert">
                <h3
                  className="serif"
                  style={{ fontSize: "28px", lineHeight: "1.08" }}
                >
                  Linux Fundamentals
                </h3>
                <p className="mono muted">Coursera</p>
              </div>
              <div className="cert">
                <h3
                  className="serif"
                  style={{ fontSize: "28px", lineHeight: "1.08" }}
                >
                  Copyrights for Educators and Librarians
                </h3>
                <p className="mono muted">
                  Coursera · Duke University, Emory University, University of
                  North Carolina
                </p>
              </div>
            </div>
          </article>
          <article className="card c7 rv">
            <p className="mono acc" style={{ marginBottom: "12px" }}>
              Leadership
            </p>
            <div className="row">
              <h3
                className="serif"
                style={{ fontSize: "34px", lineHeight: "1.05" }}
              >
                President
              </h3>
              <p className="mono muted" style={{ marginTop: "8px" }}>
                International Student Club (ISC) · 04/2023 – 04/2024
              </p>
              <p
                className="muted"
                style={{ marginTop: "10px", fontSize: "15.5px" }}
              >
                Led club initiatives and coordinated student activities.
              </p>
            </div>
            <div className="row">
              <h3
                className="serif"
                style={{ fontSize: "34px", lineHeight: "1.05" }}
              >
                Secretary
              </h3>
              <p className="mono muted" style={{ marginTop: "8px" }}>
                Soft Research Computing Society · 04/2022 – 04/2023
              </p>
              <p
                className="muted"
                style={{ marginTop: "10px", fontSize: "15.5px" }}
              >
                Managed communications and organized society events.
              </p>
            </div>
          </article>
          <article className="card fill c5 rv">
            <p className="mono" style={{ marginBottom: "12px" }}>
              Off the clock
            </p>
            <div className="row">
              <h3
                className="serif"
                style={{ fontSize: "34px", lineHeight: "1.05" }}
              >
                Chess
              </h3>
              <p className="mono" style={{ marginTop: "8px" }}>
                Inter-Institution level
              </p>
              <p style={{ marginTop: "10px", fontSize: "15.5px" }}>
                Active competitive player.
              </p>
            </div>
            <div className="row">
              <h3
                className="serif"
                style={{ fontSize: "34px", lineHeight: "1.05" }}
              >
                Cricket
              </h3>
              <p className="mono" style={{ marginTop: "8px" }}>
                College &amp; district teams
              </p>
              <p style={{ marginTop: "10px", fontSize: "15.5px" }}>
                Represented teams in competitive matches.
              </p>
            </div>
          </article>
          <article
            className="card c12 rv"
            style={{
              display: "flex",
              gap: "24px 56px",
              flexWrap: "wrap",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <p className="mono acc">Speaks</p>
            <p
              className="serif"
              style={{
                fontSize: "clamp(34px,5.4vw,80px)",
                lineHeight: "1",
                letterSpacing: "-.02em",
              }}
            >
              English <span className="muted">·</span> Hindi{" "}
              <span className="muted">·</span>{" "}
              <span style={{ fontStyle: "italic" }}>Maithili</span>{" "}
              <span className="muted">·</span> Nepali
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
