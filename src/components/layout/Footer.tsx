"use client";

import { Mail, Heart, Coffee } from "lucide-react";
import { personalInfo } from "@/lib/constants";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--background-secondary)",
        borderColor: "var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Attribution + Copyright */}
          <div className="text-center md:text-left">
            <div className="text-sm mb-1" style={{ color: "var(--text-secondary)" }}>
              Made with{" "}
              <Heart
                size={14}
                className="inline-block mx-1"
                style={{ color: "var(--accent)" }}
                fill="currentColor"
              />{" "}
              &{" "}
              <Coffee
                size={14}
                className="inline-block mx-1"
                style={{ color: "var(--accent)" }}
              />{" "}
              by bhann
            </div>
            <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
              © {currentYear} All rights reserved.
            </div>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 transition-colors"
              style={{ color: "var(--text-secondary)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
