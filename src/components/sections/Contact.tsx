"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { TiltCard } from "@/components/ui/TiltCard";
import { personalInfo } from "@/lib/constants";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "@/components/ui/Icons";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        setSubmitMessage(data.message);
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus("error");
        setSubmitMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <SectionHeading
            title="Get In Touch"
            subtitle="Have a project in mind? Let's talk!"
          />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                I&apos;m always open to discussing new projects, creative ideas,
                or opportunities to be part of your vision. Feel free to reach
                out!
              </p>

              <div className="space-y-4">
                <TiltCard effect="glow">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors group"
                    style={{
                      backgroundColor: "var(--background-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="p-3 rounded-lg transition-colors"
                      style={{ backgroundColor: "var(--accent-light)" }}
                    >
                      <Mail size={24} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Email
                      </p>
                      <p
                        className="font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {personalInfo.email}
                      </p>
                    </div>
                  </a>
                </TiltCard>

                <TiltCard effect="glow">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors group"
                    style={{
                      backgroundColor: "var(--background-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="p-3 rounded-lg transition-colors"
                      style={{ backgroundColor: "var(--accent-light)" }}
                    >
                      <GithubIcon
                        size={24}
                        className="text-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        GitHub
                      </p>
                      <p
                        className="font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        @nbhan21
                      </p>
                    </div>
                  </a>
                </TiltCard>

                <TiltCard effect="glow">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors group"
                    style={{
                      backgroundColor: "var(--background-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="p-3 rounded-lg transition-colors"
                      style={{ backgroundColor: "var(--accent-light)" }}
                    >
                      <LinkedinIcon
                        size={24}
                        className="text-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        LinkedIn
                      </p>
                      <p
                        className="font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        /in/nbhanu21
                      </p>
                    </div>
                  </a>
                </TiltCard>

                <TiltCard effect="glow">
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl transition-colors group"
                    style={{
                      backgroundColor: "var(--background-secondary)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div
                      className="p-3 rounded-lg transition-colors"
                      style={{ backgroundColor: "var(--accent-light)" }}
                    >
                      <InstagramIcon
                        size={24}
                        className="text-[var(--accent)]"
                      />
                    </div>
                    <div>
                      <p
                        className="text-sm"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        Instagram
                      </p>
                      <p
                        className="font-medium"
                        style={{ color: "var(--text-primary)" }}
                      >
                        @naufal.bhanu
                      </p>
                    </div>
                  </a>
                </TiltCard>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Success/Error Message */}
              {submitStatus !== "idle" && (
                <div
                  className="p-4 rounded-lg flex items-center gap-3"
                  style={{
                    backgroundColor:
                      submitStatus === "success"
                        ? "rgba(34, 197, 94, 0.1)"
                        : "rgba(239, 68, 68, 0.1)",
                    border: `1px solid ${submitStatus === "success" ? "rgba(34, 197, 94, 0.3)" : "rgba(239, 68, 68, 0.3)"}`,
                    color:
                      submitStatus === "success"
                        ? "rgb(34, 197, 94)"
                        : "rgb(239, 68, 68)",
                  }}
                >
                  {submitStatus === "success" ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  <span className="text-sm">{submitMessage}</span>
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  style={{
                    backgroundColor: "var(--background-secondary)",
                    border: errors.name
                      ? "1px solid rgb(239, 68, 68)"
                      : "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm" style={{ color: "rgb(239, 68, 68)" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: undefined });
                  }}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                  style={{
                    backgroundColor: "var(--background-secondary)",
                    border: errors.email
                      ? "1px solid rgb(239, 68, 68)"
                      : "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm" style={{ color: "rgb(239, 68, 68)" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message)
                      setErrors({ ...errors, message: undefined });
                  }}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none"
                  style={{
                    backgroundColor: "var(--background-secondary)",
                    border: errors.message
                      ? "1px solid rgb(239, 68, 68)"
                      : "1px solid var(--border)",
                    color: "var(--text-primary)",
                  }}
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm" style={{ color: "rgb(239, 68, 68)" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--background)",
                }}
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
