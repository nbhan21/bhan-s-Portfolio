import type { Metadata } from "next";
import { inter, outfit, sora } from "@/lib/fonts";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://naufalbhanu.dev"),
  title: {
    default: "Bhan's Portfolio",
    template: "%s | Bhan's Portfolio",
  },
  description:
    "Full-Stack Developer specializing in React, Next.js, and modern web technologies. Building digital experiences that matter.",
  keywords: [
    "Naufal Bhanu",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Naufal Bhanu", url: "https://naufalbhanu.dev" }],
  creator: "Naufal Bhanu",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://naufalbhanu.dev",
    siteName: "Naufal Bhanu Portfolio",
    title: "Naufal Bhanu | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Naufal Bhanu - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naufal Bhanu | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Inline script to prevent flash of wrong theme (FOUC)
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

// Structured Data (JSON-LD)
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Naufal Bhanu",
  url: "https://naufalbhanu.dev",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, Next.js, and modern web technologies.",
  sameAs: [
    "https://github.com/nbhan21",
    "https://linkedin.com/in/nbhanu21",
    "https://instagram.com/naufal.bhanu",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "JavaScript",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${outfit.variable} ${sora.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
