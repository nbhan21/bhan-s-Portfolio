"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { experiences } from "@/lib/constants";
import { Briefcase } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Experience"
            subtitle="My professional journey"
          />
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2"
            style={{ backgroundColor: "var(--border)" }}
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal
                key={exp.id}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 100}
              >
                <div
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  } items-start md:items-center gap-8`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 z-10"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <div
                      className="absolute inset-0 rounded-full animate-ping"
                      style={{ backgroundColor: "var(--accent)", opacity: 0.2 }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    } pl-8 md:pl-0`}
                  >
                    <TiltCard effect="glow">
                      <div
                        className="p-6 rounded-xl"
                        style={{
                          backgroundColor: "var(--card-bg)",
                          border: "1px solid var(--border)",
                        }}
                      >
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase size={18} style={{ color: "var(--accent)" }} />
                        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                          {exp.period}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold font-[family-name:var(--font-outfit)] mb-1"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {exp.role}
                      </h3>
                      <p className="font-medium mb-3" style={{ color: "var(--accent)" }}>
                        {exp.company}
                      </p>
                      <p className="mb-4" style={{ color: "var(--text-secondary)" }}>
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm rounded-full"
                            style={{
                              backgroundColor: "var(--accent-light)",
                              color: "var(--accent)",
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    </TiltCard>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
