import Image from "next/image";

export default function Education() {
  return (
    <section
      id="education"
      className="sec"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="sh rv">
          <div>
            <p className="mono acc" style={{ marginBottom: "20px" }}>
              (04) Education
            </p>
            <h2 className="serif">
              Trained at <em>India&apos;s</em> finest.
            </h2>
          </div>
        </div>

        <div className="ban rv">
          <Image
            src="/assets/iisc-web.jpg"
            alt="The main building of the Indian Institute of Science with its clock tower and flower beds"
            fill
            sizes="(min-width: 1280px) 1280px, 100vw"
          />
          <div className="cp">
            <p
              className="mono"
              style={{ marginBottom: "12px", opacity: ".85" }}
            >
              Currently
            </p>
            <p
              className="serif"
              style={{
                fontSize: "clamp(36px,5.4vw,80px)",
                lineHeight: "1",
                letterSpacing: "-.02em",
              }}
            >
              Indian Institute of Science,{" "}
              <span style={{ fontStyle: "italic" }}>Bangalore</span>
            </p>
          </div>
        </div>

        <div className="eg">
          <article className="card rv">
            <p className="yr serif acc">
              2025<span className="muted">—Now</span>
            </p>
            <h3
              style={{
                marginTop: "28px",
                fontSize: "22px",
                fontWeight: "500",
                lineHeight: "1.3",
              }}
            >
              Master of Technology, Computer Science and Engineering
            </h3>
            <p className="muted" style={{ marginTop: "8px" }}>
              Indian Institute of Science, Bangalore
            </p>
            <div
              style={{
                marginTop: "22px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <span className="tag">Jul 2025 – Present</span>
              <span className="tag">CGPA 7.0 / 10</span>
            </div>
          </article>
          <article className="card rv">
            <p className="yr serif">
              2020<span className="muted">—24</span>
            </p>
            <h3
              style={{
                marginTop: "28px",
                fontSize: "22px",
                fontWeight: "500",
                lineHeight: "1.3",
              }}
            >
              Bachelor of Engineering, Computer Science and Engineering
            </h3>
            <p className="muted" style={{ marginTop: "8px" }}>
              Visvesvaraya Technological University
            </p>
            <div
              style={{
                marginTop: "22px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <span className="tag">Jun 2020 – May 2024</span>
              <span className="tag">CGPA 8.75 / 10</span>
            </div>
          </article>
          <article className="card rv">
            <p className="yr serif">
              2018<span className="muted">—20</span>
            </p>
            <h3
              style={{
                marginTop: "28px",
                fontSize: "22px",
                fontWeight: "500",
                lineHeight: "1.3",
              }}
            >
              High school, Computer Science
            </h3>
            <p className="muted" style={{ marginTop: "8px" }}>
              United Academy
            </p>
            <div
              style={{
                marginTop: "22px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <span className="tag">Apr 2018 – Apr 2020</span>
              <span className="tag">Grade 8.3 / 10</span>
            </div>
          </article>
          <article className="card rv">
            <p className="yr serif">
              2008<span className="muted">—18</span>
            </p>
            <h3
              style={{
                marginTop: "28px",
                fontSize: "22px",
                fontWeight: "500",
                lineHeight: "1.3",
              }}
            >
              Secondary School
            </h3>
            <p className="muted" style={{ marginTop: "8px" }}>
              National Examination Board
            </p>
            <div
              style={{
                marginTop: "22px",
                display: "flex",
                gap: "10px",
                flexWrap: "wrap",
              }}
            >
              <span className="tag">Apr 2008 – Apr 2018</span>
              <span className="tag">Grade 9.0 / 10</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
