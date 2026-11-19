const ticker = [
  "Machine Learning",
  "Theorem Proving",
  "Deep Learning",
  "Autoformalization",
  "Ensemble Learning",
  "Cross-Validation",
  "Scalable Systems",
  "Database Design",
  "Secure Software",
  "Algorithms",
];

export default function Marquee() {
  const items = [...ticker, ...ticker];
  return (
    <div className="mq" aria-hidden="true">
      <div className="tr">
        {items.map((t, i) => (
          <div className="it serif" key={i}>
            <span>{t}</span>
            <b></b>
          </div>
        ))}
      </div>
    </div>
  );
}
