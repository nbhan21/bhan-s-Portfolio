import { NextRequest, NextResponse } from "next/server";

const MAINTENANCE_MODE = process.env.MAINTENANCE_MODE === "true";
const BYPASS_SECRET = process.env.MAINTENANCE_BYPASS_SECRET || "";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files, API routes, and the maintenance page itself
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/maintenance") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.svg" ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname === "/manifest.json"
  ) {
    return NextResponse.next();
  }

  // Check for bypass
  const bypassParam = request.nextUrl.searchParams.get("bypass");
  const bypassCookie = request.cookies.get("maintenance_bypass")?.value;

  // If bypass query param is provided and matches secret
  if (bypassParam && BYPASS_SECRET && bypassParam === BYPASS_SECRET) {
    const response = NextResponse.next();
    // Set cookie to persist bypass for 7 days
    response.cookies.set("maintenance_bypass", "true", {
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
      sameSite: "lax",
    });
    return response;
  }

  // If bypass cookie exists, allow access
  if (bypassCookie === "true") {
    return NextResponse.next();
  }

  // If maintenance mode is enabled, redirect to maintenance page
  if (MAINTENANCE_MODE) {
    const maintenanceUrl = new URL("/maintenance", request.url);
    return NextResponse.redirect(maintenanceUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
