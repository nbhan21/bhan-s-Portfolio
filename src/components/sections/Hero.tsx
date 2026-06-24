"use client";

import { ArrowDown, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { personalInfo } from "@/lib/constants";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Typewriter } from "@/components/ui/Typewriter";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: reduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0.1 : 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Greeting */}
        <motion.p
          className="text-lg mb-4"
          style={{ color: "var(--text-secondary)" }}
          variants={itemVariants}
        >
          Hello, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-sora)] mb-6"
          style={{ color: "var(--text-primary)" }}
          variants={itemVariants}
        >
          {personalInfo.name}
        </motion.h1>

        {/* Role with Typing Animation */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-semibold font-[family-name:var(--font-outfit)] mb-6"
          style={{ color: "var(--accent)" }}
          variants={itemVariants}
        >
          <Typewriter
            texts={personalInfo.roleTexts}
            speed={100}
            deleteSpeed={50}
            pauseDuration={2000}
          />
        </motion.h2>

        {/* Tagline */}
        <motion.p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
          variants={itemVariants}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 rounded-lg font-medium transition-colors"
            style={{
              backgroundColor: "var(--accent)",
              color: "var(--background)",
            }}
          >
            View Projects
          </button>
          <button
            onClick={scrollToContact}
            className="px-8 py-3 border-2 rounded-lg font-medium transition-colors"
            style={{
              borderColor: "var(--accent)",
              color: "var(--accent)",
            }}
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6"
          variants={itemVariants}
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            aria-label="GitHub"
          >
            <GithubIcon size={24} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={24} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-3 transition-colors"
            style={{ color: "var(--text-secondary)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          style={{ color: "var(--text-secondary)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
