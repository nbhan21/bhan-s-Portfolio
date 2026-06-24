import { describe, it, expect } from "vitest";
import { contactFormSchema } from "@/lib/validations";

describe("Contact Form Validation", () => {
  describe("name field", () => {
    it("should accept valid name", () => {
      const result = contactFormSchema.safeParse({
        name: "Naufal Bhanu",
        email: "naufal@example.com",
        message: "Hello, this is a test message",
      });
      expect(result.success).toBe(true);
    });

    it("should reject name shorter than 2 characters", () => {
      const result = contactFormSchema.safeParse({
        name: "N",
        email: "naufal@example.com",
        message: "Hello, this is a test message",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          "Name must be at least 2 characters"
        );
      }
    });

    it("should reject name longer than 100 characters", () => {
      const result = contactFormSchema.safeParse({
        name: "A".repeat(101),
        email: "naufal@example.com",
        message: "Hello, this is a test message",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          "Name must be less than 100 characters"
        );
      }
    });

    it("should reject empty name", () => {
      const result = contactFormSchema.safeParse({
        name: "",
        email: "naufal@example.com",
        message: "Hello, this is a test message",
      });
      expect(result.success).toBe(false);
    });
  });

  describe("email field", () => {
    it("should accept valid email", () => {
      const result = contactFormSchema.safeParse({
        name: "Naufal",
        email: "naufal@example.com",
        message: "Hello, this is a test message",
      });
      expect(result.success).toBe(true);
    });

    it("should reject invalid email format", () => {
      const result = contactFormSchema.safeParse({
        name: "Naufal",
        email: "invalid-email",
        message: "Hello, this is a test message",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          "Please enter a valid email address"
        );
      }
    });

    it("should reject email without @", () => {
      const result = contactFormSchema.safeParse({
        name: "Naufal",
        email: "naufalexample.com",
        message: "Hello, this is a test message",
      });
      expect(result.success).toBe(false);
    });

    it("should reject email without domain", () => {
      const result = contactFormSchema.safeParse({
        name: "Naufal",
        email: "naufal@",
        message: "Hello, this is a test message",
      });
      expect(result.success).toBe(false);
    });
  });

  describe("message field", () => {
    it("should accept valid message", () => {
      const result = contactFormSchema.safeParse({
        name: "Naufal",
        email: "naufal@example.com",
        message: "Hello, this is a test message with enough characters",
      });
      expect(result.success).toBe(true);
    });

    it("should reject message shorter than 10 characters", () => {
      const result = contactFormSchema.safeParse({
        name: "Naufal",
        email: "naufal@example.com",
        message: "Short",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          "Message must be at least 10 characters"
        );
      }
    });

    it("should reject message longer than 1000 characters", () => {
      const result = contactFormSchema.safeParse({
        name: "Naufal",
        email: "naufal@example.com",
        message: "A".repeat(1001),
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues[0].message).toBe(
          "Message must be less than 1000 characters"
        );
      }
    });

    it("should reject empty message", () => {
      const result = contactFormSchema.safeParse({
        name: "Naufal",
        email: "naufal@example.com",
        message: "",
      });
      expect(result.success).toBe(false);
    });
  });

  describe("complete form validation", () => {
    it("should accept all valid fields", () => {
      const result = contactFormSchema.safeParse({
        name: "Naufal Bhanu",
        email: "naufal@example.com",
        message:
          "Hello, I would like to discuss a project with you. This message is long enough.",
      });
      expect(result.success).toBe(true);
    });

    it("should reject when all fields are invalid", () => {
      const result = contactFormSchema.safeParse({
        name: "",
        email: "invalid",
        message: "short",
      });
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.length).toBeGreaterThanOrEqual(3);
      }
    });

    it("should reject when fields are missing", () => {
      const result = contactFormSchema.safeParse({});
      expect(result.success).toBe(false);
    });
  });
});
