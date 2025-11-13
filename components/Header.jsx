"use client";

import ThemeToggle from "./ThemeToggle";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 border-b"
      style={{ borderColor: "rgba(0,0,0,0.06)", background: "transparent" }}
    >
      {/* Project name — use strong weight */}
      <h1 className="text-2xl tracking-tight" style={{ fontWeight: 900, color: "var(--foreground)" }}>
        SkillSphere
      </h1>

      {/* Search */}
      <div className="relative w-full max-w-md mx-4">
        <Search className="absolute left-3 top-2.5" size={18} style={{ color: "var(--muted)" }} />
        <input
          type="text"
          placeholder="Pesquisar profissionais..."
          className="w-full rounded-full py-2 pl-10 pr-4 text-sm outline-none"
          style={{
            background: "var(--card)",
            color: "var(--foreground)",
            border: "1px solid rgba(0,0,0,0.06)"
          }}
        />
      </div>

      <ThemeToggle />
    </header>
  );
}
