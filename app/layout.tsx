import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zoomies Run Club NYC | Presence > pace.",
    template: "%s | Zoomies Run Club NYC",
  },
  description:
    "A dog-friendly NYC run club for runners, walkers, joggers, dog parents, and everyone in between.",
  keywords: [
    "Zoomies Run Club",
    "NYC run club",
    "dog friendly run club",
    "beginner friendly running",
    "New York City running",
  ],
  openGraph: {
    title: "Zoomies Run Club NYC",
    description:
      "Presence > pace. A dog-friendly NYC run club for runners, walkers, joggers, dog parents, and everyone in between.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoomies Run Club NYC",
    description:
      "Presence > pace. Join a dog-friendly, beginner-friendly run club in NYC.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#e0edf5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
