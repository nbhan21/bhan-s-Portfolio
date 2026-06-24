"use client";

import { useEffect, useState } from "react";
import { useThemeContext } from "@/context/ThemeContext";

interface BlurOrb {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

function generateRandomOrb(id: number): BlurOrb {
  return {
    id,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 200 + Math.random() * 200,
    duration: 15 + Math.random() * 15,
    delay: Math.random() * -30,
  };
}

export function BlurBackground() {
  const [orbs, setOrbs] = useState<BlurOrb[]>([]);
  const { isDark } = useThemeContext();

  useEffect(() => {
    const initialOrbs = Array.from({ length: 6 }, (_, i) => generateRandomOrb(i));
    setOrbs(initialOrbs);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full blur-3xl animate-float"
          style={{
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: isDark
              ? `radial-gradient(circle, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.08) 40%, rgba(255, 255, 255, 0.02) 60%, transparent 70%)`
              : `radial-gradient(circle, rgba(59, 130, 246, 0.85) 0%, rgba(37, 99, 235, 0.5) 40%, rgba(29, 78, 216, 0.2) 60%, transparent 70%)`,
            opacity: isDark ? 0.6 : 0.7,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
