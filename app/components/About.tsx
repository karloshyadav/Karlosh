export default function About() {
  return (
    <section
      id="about"
      className="sec"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="ag">
          <div className="rv">
            <p className="mono acc" style={{ marginBottom: "24px" }}>
              (03) About
            </p>
            <p
              className="serif"
              style={{
                fontSize: "clamp(34px,4.4vw,64px)",
                lineHeight: "1.08",
                letterSpacing: "-.015em",
              }}
            >
              I build machine learning, data-centric systems and{" "}
              <span style={{ fontStyle: "italic", color: "var(--accent)" }}>
                dependable
              </span>{" "}
              software, and I like it best when the numbers hold up.
            </p>
            <p
              className="muted"
              style={{ marginTop: "32px", maxWidth: "58ch" }}
            >
              My recent work includes benchmarking deep learning models for
              brain tumor classification, building ensemble-based heart disease
              prediction, implementing core ML algorithms from scratch, and
              automating theorem proving in Lean 4 with retrieval-augmented
              autoformalization.
            </p>
          </div>
          <div className="sg rv">
            <div>
              <h4 className="mono">Languages &amp; data</h4>
              <div className="tags">
                <span className="sp">C++</span>
                <span className="sp">Python</span>
                <span className="sp">MySQL</span>
              </div>
            </div>
            <div>
              <h4 className="mono">Core</h4>
              <div className="tags">
                <span className="sp">Machine Learning</span>
                <span className="sp">Data Structures and Algorithms</span>
                <span className="sp">Object-Oriented Programming</span>
              </div>
            </div>
            <div>
              <h4 className="mono">Engineering</h4>
              <div className="tags">
                <span className="sp">Software Development Life Cycle</span>
                <span className="sp">Database Management</span>
                <span className="sp">System Design (Basics)</span>
              </div>
            </div>
            <div>
              <h4 className="mono">Used in my projects</h4>
              <div className="tags">
                <span className="tag">Lean 4</span>
                <span className="tag">InternLM2</span>
                <span className="tag">PyPantograph</span>
                <span className="tag">ByT5</span>
                <span className="tag">TensorFlow</span>
                <span className="tag">YOLOv8</span>
                <span className="tag">ResNet50</span>
                <span className="tag">MobileNetV3</span>
                <span className="tag">Scikit-learn</span>
                <span className="tag">XGBoost</span>
                <span className="tag">SMOTE</span>
                <span className="tag">GridSearchCV</span>
                <span className="tag">NumPy</span>
                <span className="tag">JWT</span>
                <span className="tag">RBAC</span>
                <span className="tag">bcrypt</span>
                <span className="tag">CORS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
