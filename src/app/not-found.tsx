import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <h1
          className="text-6xl font-bold font-[family-name:var(--font-sora)] mb-4"
          style={{ color: "var(--accent)" }}
        >
          404
        </h1>
        <h2
          className="text-2xl font-semibold font-[family-name:var(--font-outfit)] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Page Not Found
        </h2>
        <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 rounded-lg font-medium transition-colors"
          style={{
            backgroundColor: "var(--accent)",
            color: "var(--background)",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
