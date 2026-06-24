"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { projects } from "@/lib/constants";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

export function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map((p) => p.category))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Projects"
            subtitle="Some of my recent work"
          />
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                style={{
                  backgroundColor:
                    filter === category ? "var(--accent)" : "var(--card-bg)",
                  color:
                    filter === category ? "var(--background)" : "var(--text-secondary)",
                  border: "1px solid var(--border)",
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 75}>
              <TiltCard effect="tilt">
                <div
                  className="rounded-xl overflow-hidden"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                {/* Image placeholder */}
                <div
                  className="aspect-video flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: "var(--accent-light)" }}
                >
                  <span className="text-6xl">
                    🚀
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium" style={{ color: "var(--accent)" }}>
                      {project.category}
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors"
                        style={{ color: "var(--text-secondary)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                        aria-label="View repository"
                      >
                        <GithubIcon size={18} />
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors"
                        style={{ color: "var(--text-secondary)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
                        aria-label="View demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h3
                    className="text-xl font-bold font-[family-name:var(--font-outfit)] mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full"
                        style={{
                          backgroundColor: "var(--background-secondary)",
                          color: "var(--text-secondary)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
