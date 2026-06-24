"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { skillCategories } from "@/lib/constants";

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Skills & Technologies"
            subtitle="Technologies I work with"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <ScrollReveal key={category.name} delay={catIndex * 100}>
              <TiltCard effect="glow">
                <div
                  className="p-6 rounded-xl h-full"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h3
                      className="text-lg font-bold font-[family-name:var(--font-outfit)]"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
                        style={{
                          backgroundColor: "var(--accent-light)",
                          color: "var(--accent)",
                        }}
                      >
                        <span>{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                    ))}
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
