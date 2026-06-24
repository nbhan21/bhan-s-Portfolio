import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

// Rate limiting (in-memory, per IP)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function getRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60 * 1000 }); // 1 minute window
    return true;
  }

  if (limit.count >= 5) {
    // 5 requests per minute
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    // Check rate limit
    if (!getRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Validate with Zod
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          details: result.error.issues,
        },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    // TODO: Replace with actual email service (EmailJS, SendGrid, Resend, etc.)
    // For now, we simulate a successful submission
    console.log("Contact form submission:", { name, email, message });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({
      success: true,
      message: "Message sent successfully! Thank you for reaching out.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
