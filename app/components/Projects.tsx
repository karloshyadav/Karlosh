"use client";

import { useState } from "react";

type Category = "ml" | "sys";
type Filter = "all" | "llm" | "dl" | Category;

const chips: { id: Filter; label: string }[] = [
  { id: "all", label: "All work" },
  { id: "llm", label: "LLMs & proving" },
  { id: "dl", label: "Deep learning" },
  { id: "ml", label: "Classical ML" },
  { id: "sys", label: "Systems & data" },
];

const projects: {
  cat: Category;
  idx: string;
  when: string;
  title: string;
  bullets: string[];
  tags: string[];
}[] = [
  {
    cat: "ml",
    idx: "03",
    when: "Sep 2023 – May 2024",
    title: "Heart Disease Prediction System (Ensemble Learning)",
    bullets: [
      "Built a Soft Voting ensemble using Logistic Regression, Random Forest, and XGBoost.",
      "Handled preprocessing: missing values, encoding, scaling, and train-test splitting.",
      "Addressed class imbalance using SMOTE and optimized with K-fold CV + GridSearchCV.",
    ],
    tags: ["Python", "Scikit-learn", "XGBoost", "SMOTE", "GridSearchCV"],
  },
  {
    cat: "ml",
    idx: "04",
    when: "Personal project",
    title: "Machine Learning Algorithms from Scratch",
    bullets: [
      "Implemented Linear Regression, Logistic Regression, Decision Tree, and Random Forest using NumPy.",
      "Implemented MSE, Binary Cross-Entropy, Gradient Descent, and Information Gain mathematically from scratch.",
      "Applied bootstrap sampling and feature randomization for stronger generalization in Random Forest.",
    ],
    tags: ["NumPy", "Machine Learning", "Algorithms", "Optimization"],
  },
  {
    cat: "sys",
    idx: "05",
    when: "Systems project",
    title: "Vehicle Care Management System",
    bullets: [
      "Designed normalized relational schema with ACID-compliant transactions and concurrency control.",
      "Implemented JWT-based stateless auth, RBAC, and bcrypt-secured password management.",
      "Configured secure environment variables and CORS policies for production safety.",
    ],
    tags: ["Database Design", "JWT", "RBAC", "bcrypt", "CORS"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const showLean = filter === "all" || filter === "llm";
  const showFeat = filter === "all" || filter === "dl";
  const visible = projects.filter((p) => filter === "all" || filter === p.cat);

  return (
    <section
      id="work"
      className="sec"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div className="wrap">
        <div className="sh rv">
          <div>
            <p className="mono acc" style={{ marginBottom: "20px" }}>
              (02) Selected work
            </p>
            <h2 className="serif">
              Models, measured <em>honestly.</em>
            </h2>
          </div>
          <div className="chips" role="group" aria-label="Filter projects">
            {chips.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`chip ${filter === c.id ? "on" : ""}`}
                aria-pressed={filter === c.id}
                onClick={() => setFilter(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {showLean && (
          <article className="card feat rv">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "22px" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <p className="mono acc">01 · Lead project</p>
                <p className="mono muted">Lean 4 · Mathlib</p>
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: "clamp(34px,4vw,56px)",
                  lineHeight: "1.02",
                  letterSpacing: "-.015em",
                }}
              >
                Retrieval-Augmented Autoformalization in Lean 4
              </h3>
              <p style={{ fontSize: "18px", fontWeight: "500" }}>
                Turning mathematics into machine-checked proofs
              </p>
              <ul className="bl">
                <li>
                  Designed and implemented a two-phase autoformalization
                  pipeline using InternLM2 and PyPantograph, generating and
                  proving 22/50 theorems (44% success).
                </li>
                <li>
                  Built a FASS-based premise retriever indexing 292,496 Mathlib
                  definitions, 57.41% Peak Recall@10.
                </li>
                <li>
                  Trained ByT5 RePrower using SFT &amp; GRPO on 100,000+ traces
                  for interactive step-by-step tactic generation.
                </li>
              </ul>
              <div className="tags" style={{ marginTop: "auto" }}>
                <span className="tag">Lean 4</span>
                <span className="tag">InternLM2</span>
                <span className="tag">PyPantograph</span>
                <span className="tag">FASS</span>
                <span className="tag">Mathlib</span>
                <span className="tag">ByT5</span>
                <span className="tag">SFT</span>
                <span className="tag">GRPO</span>
              </div>
            </div>
            <div className="res">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <p className="mono">Results</p>
                <span className="mono acc">Measured</span>
              </div>
              <div className="mg">
                <div className="mt">
                  <p className="v serif">
                    22<small>/50</small>
                  </p>
                  <p className="mono muted">Theorems formalized &amp; proved</p>
                </div>
                <div className="mt">
                  <p className="v serif">
                    44<small>%</small>
                  </p>
                  <p className="mono muted">End-to-end success</p>
                </div>
                <div className="mt">
                  <p className="v serif">
                    57.41<small>%</small>
                  </p>
                  <p className="mono muted">Peak Recall@10</p>
                </div>
                <div className="mt">
                  <p className="v serif">292,496</p>
                  <p className="mono muted">Mathlib definitions indexed</p>
                </div>
              </div>
              <div
                className="mt"
                style={{
                  flexDirection: "row",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <p
                  className="v serif"
                  style={{ fontSize: "clamp(34px,3.4vw,48px)" }}
                >
                  100,000+
                </p>
                <p className="mono muted">Traces for SFT &amp; GRPO training</p>
              </div>
            </div>
          </article>
        )}

        {showFeat && (
          <article className="card feat rv">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "22px" }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <p className="mono acc">02 · Featured</p>
                <p className="mono muted">Aug 2025 – Dec 2025</p>
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: "clamp(34px,4vw,56px)",
                  lineHeight: "1.02",
                  letterSpacing: "-.015em",
                }}
              >
                Benchmarking Deep Learning Models for Brain Tumor Classification
              </h3>
              <p style={{ fontSize: "18px", fontWeight: "500" }}>
                YOLOv8 · ResNet50 · MobileNetV3
              </p>
              <ul className="bl">
                <li>
                  Conducted comparative analysis of MRI-based brain tumor
                  classification across YOLOv8, ResNet50, and MobileNetV3.
                </li>
                <li>
                  Performed hyperparameter optimization and ablation studies for
                  model accuracy and generalization.
                </li>
                <li>
                  Applied K-fold cross-validation for statistical reliability
                  and reproducibility.
                </li>
                <li>
                  Built TensorFlow training/evaluation pipeline for stable and
                  fair model benchmarking.
                </li>
              </ul>
              <div className="tags" style={{ marginTop: "auto" }}>
                <span className="tag">TensorFlow</span>
                <span className="tag">Deep Learning</span>
                <span className="tag">YOLOv8</span>
                <span className="tag">ResNet50</span>
                <span className="tag">MobileNetV3</span>
                <span className="tag">K-Fold CV</span>
              </div>
            </div>
            <div className="res">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <p className="mono">Benchmark results</p>
                <span className="ph">Add your numbers</span>
              </div>
              <div className="tbl">
                <div className="tr4 hd mono">
                  <span>Model</span>
                  <span>Accuracy</span>
                  <span>F1</span>
                  <span>Latency</span>
                </div>
                <div className="tr4">
                  <span style={{ fontWeight: "500" }}>YOLOv8</span>
                  <span className="ph" style={{ justifySelf: "start" }}>
                    —
                  </span>
                  <span className="ph" style={{ justifySelf: "start" }}>
                    —
                  </span>
                  <span className="ph" style={{ justifySelf: "start" }}>
                    —
                  </span>
                </div>
                <div className="tr4">
                  <span style={{ fontWeight: "500" }}>ResNet50</span>
                  <span className="ph" style={{ justifySelf: "start" }}>
                    —
                  </span>
                  <span className="ph" style={{ justifySelf: "start" }}>
                    —
                  </span>
                  <span className="ph" style={{ justifySelf: "start" }}>
                    —
                  </span>
                </div>
                <div className="tr4">
                  <span style={{ fontWeight: "500" }}>MobileNetV3</span>
                  <span className="ph" style={{ justifySelf: "start" }}>
                    —
                  </span>
                  <span className="ph" style={{ justifySelf: "start" }}>
                    —
                  </span>
                  <span className="ph" style={{ justifySelf: "start" }}>
                    —
                  </span>
                </div>
              </div>
              <div className="fig">
                <svg
                  width="120"
                  height="64"
                  viewBox="0 0 120 64"
                  aria-hidden="true"
                >
                  <path
                    d="M6 4v54h110"
                    fill="none"
                    stroke="var(--line)"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12 48C30 44 38 20 58 22s30 18 54 6"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="1.6"
                    strokeDasharray="4 5"
                  />
                </svg>
                <p className="mono">Figure slot</p>
                <p style={{ fontSize: "14px", maxWidth: "30ch" }}>
                  Drop in a confusion matrix or training curves here.
                </p>
              </div>
            </div>
          </article>
        )}

        <div className="pg">
          {visible.map((p) => (
            <article key={p.idx} className="card pc rv">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <p className="mono acc">{p.idx}</p>
                <p className="mono muted">{p.when}</p>
              </div>
              <h3
                className="serif"
                style={{
                  fontSize: "clamp(30px,2.6vw,40px)",
                  lineHeight: "1.04",
                  letterSpacing: "-.01em",
                }}
              >
                {p.title}
              </h3>
              <ul className="bl">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <div className="rr">
                <span className="ph">Headline result</span>
                <span className="ph">Repo link</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
