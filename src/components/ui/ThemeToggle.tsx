"use client";

import { useThemeContext } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-[var(--glass-hover)]"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? (
        <Sun size={20} className="text-[var(--accent)]" />
      ) : (
        <Moon size={20} className="text-[var(--text-secondary)]" />
      )}
    </button>
  );
}
