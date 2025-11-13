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
      document.documentElement.style.setProperty('--background', '#0a0a0a');
      document.documentElement.style.setProperty('--foreground', '#ededed');
      document.documentElement.style.setProperty('--muted', '#9ca3af');
      document.documentElement.style.setProperty('--card', '#0f1724');
      document.documentElement.style.setProperty('--interactive', '#f9fafb');
    } else {
      document.documentElement.style.setProperty('--background', '#ffffff');
      document.documentElement.style.setProperty('--foreground', '#171717');
      document.documentElement.style.setProperty('--muted', '#6b7280');
      document.documentElement.style.setProperty('--card', '#ffffff');
      document.documentElement.style.setProperty('--interactive', '#111827');
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
