"use client";

import { ReactNode, useRef, useState } from "react";

interface TiltCardProps {
  children: ReactNode;
  effect?: "tilt" | "glow";
  className?: string;
}

export function TiltCard({
  children,
  effect = "tilt",
  className = "",
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  );
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    // Cancel any pending animation frame for smooth updates
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const rect = cardRef.current!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      if (effect === "tilt") {
        const rotateX = ((y - centerY) / centerY) * -8;
        const rotateY = ((x - centerX) / centerX) * 8;
        setTransform(
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
        );
      }

      // Glare/glow position (percentage)
      setGlarePosition({
        x: (x / rect.width) * 100,
        y: (y / rect.height) * 100,
      });
    });
  };

  const handleMouseLeave = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        transform,
        willChange: "transform",
        transition: "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      {children}

      {/* Glow Border Effect */}
      {effect === "glow" && (
        <div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            opacity: isHovered ? 1 : 0,
            transition: "opacity 0.5s ease",
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, var(--accent) 0%, transparent 50%)`,
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
            padding: "2px",
          }}
        />
      )}

      {/* Glare Overlay (for tilt effect) */}
      {effect === "tilt" && (
        <div
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{
            opacity: isHovered ? 0.15 : 0,
            transition: "opacity 0.5s ease",
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.8) 0%, transparent 50%)`,
          }}
        />
      )}
    </div>
  );
}
