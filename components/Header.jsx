"use client";

import ThemeToggle from "./ThemeToggle";
import { Search } from "lucide-react";

export default function Header({ onSearch }) {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 border-gray-100 dark:border-gray-800">

      <h1 className="text-2xl tracking-tight font-bold text-indigo-600 dark:text-indigo-400">
        SkillSphere
      </h1>

      <div className="relative w-full max-w-lg mx-8">
        <Search className="absolute left-3 top-2.5" size={18} style={{ color: "var(--muted)" }} />
        <input
          type="text"
          placeholder="Pesquisar por Nome, Área, Cidade ou Tecnologia..."
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-full py-2 pl-10 pr-4 text-sm outline-none transition-colors focus:ring-2 focus:ring-indigo-500"
          style={{
            background: "var(--card)",
            color: "var(--foreground)",
            border: "1px solid var(--muted)"
          }}
        />
      </div>

      <ThemeToggle />
    </header>
  );
}