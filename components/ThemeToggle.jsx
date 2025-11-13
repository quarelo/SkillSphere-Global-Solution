"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDark = stored === "dark" || (!stored && prefersDark);
    setIsDark(initialDark);
    applyVars(initialDark);
  }, []);

  const applyVars = (dark) => {
    if (dark) {
      document.documentElement.style.setProperty('--background', '#1a1a1a'); // cinza escuro
      document.documentElement.style.setProperty('--foreground', '#f5f5f5');
      document.documentElement.style.setProperty('--muted', '#a3a3a3');
      document.documentElement.style.setProperty('--card', '#262626');
      document.documentElement.style.setProperty('--interactive', '#fafafa');
    } else {
      document.documentElement.style.setProperty('--background', '#fffbe6'); // branco amarelado
      document.documentElement.style.setProperty('--foreground', '#202020');
      document.documentElement.style.setProperty('--muted', '#78716c');
      document.documentElement.style.setProperty('--card', '#ffffff');
      document.documentElement.style.setProperty('--interactive', '#1f2937');
    }
  };

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
    applyVars(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="p-2 rounded-md transition"
      style={{ color: "var(--interactive)" }}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
