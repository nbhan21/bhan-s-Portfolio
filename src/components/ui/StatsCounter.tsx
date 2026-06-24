"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface StatsCounterProps {
  value: number;
  label: string;
  suffix?: string;
}

export function StatsCounter({ value, label, suffix = "" }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.5 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-sora)] mb-2"
        style={{ color: "var(--accent)" }}
      >
        {count}
        {suffix}
      </div>
      <div
        className="text-sm md:text-base"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
      </div>
    </div>
  );
}
