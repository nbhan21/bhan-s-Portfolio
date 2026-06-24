"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { StatsCounter } from "@/components/ui/StatsCounter";
import { about } from "@/lib/constants";
import { MapPin } from "lucide-react";

interface BioSegment {
  text: string;
  highlight?: boolean;
}

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="About Me"
            subtitle="Get to know me better"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div
                className="aspect-square rounded-2xl flex items-center justify-center"
                style={{
                  background: "var(--accent-light)",
                }}
              >
                <span className="text-6xl">👨‍💻</span>
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full blur-2xl"
                style={{ backgroundColor: "var(--accent)", opacity: 0.1 }}
              />
            </div>
          </ScrollReveal>

          {/* Bio + Stats */}
          <ScrollReveal direction="right">
            <div className="space-y-8">
              <div className="space-y-6">
                {about.bio.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {paragraph.map((segment: BioSegment, sIndex) =>
                      segment.highlight ? (
                        <span
                          key={sIndex}
                          className="px-1.5 py-0.5 rounded"
                          style={{
                            backgroundColor: "var(--accent-light)",
                            color: "var(--accent)",
                          }}
                        >
                          {segment.text}
                        </span>
                      ) : (
                        <span key={sIndex}>{segment.text}</span>
                      )
                    )}
                  </p>
                ))}

                <div
                  className="flex items-center gap-2"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <MapPin size={18} style={{ color: "var(--accent)" }} />
                  <span>{about.location}</span>
                </div>
              </div>

              {/* Stats Counters */}
              <div
                className="grid grid-cols-3 gap-6 p-6 rounded-xl"
                style={{
                  backgroundColor: "var(--card-bg)",
                  border: "1px solid var(--border)",
                }}
              >
                <StatsCounter value={5} suffix="+" label="Years Experience" />
                <StatsCounter value={20} suffix="+" label="Projects Done" />
                <StatsCounter value={15} suffix="+" label="Happy Clients" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
