"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Search } from "lucide-react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return newMode;
    });
  };

  return (
    <header className="flex items-center justify-between w-full px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      {/* Nome do projeto */}
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        SkillSphere
      </h1>

      {/* Barra de pesquisa */}
      <div className="relative w-full max-w-md mx-4">
        <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Pesquisar profissionais..."
          className="w-full rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 py-2 pl-10 pr-4 text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400 outline-none"
        />
      </div>

      {/* Botão Dark/Light */}
      <button
        onClick={toggleDarkMode}
        className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
      >
        {darkMode ? (
          <Sun className="text-yellow-400" size={20} />
        ) : (
          <Moon className="text-gray-700 dark:text-gray-200" size={20} />
        )}
      </button>
    </header>
  );
}
