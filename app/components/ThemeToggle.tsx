"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "paper";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ky-theme");
      if (saved === "dark" || saved === "paper") {
        setTheme(saved);
        document.documentElement.dataset.theme = saved;
      }
    } catch {
      /* storage unavailable: keep the default theme */
    }
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "paper" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("ky-theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      className="tg"
      onClick={toggle}
      aria-label={
        theme === "dark"
          ? "Switch to light paper theme"
          : "Switch to dark theme"
      }
    >
      <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M12 4a8 8 0 0 1 0 16z" fill="currentColor" />
      </svg>
    </button>
  );
}
