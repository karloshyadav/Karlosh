import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Karlosh Yadav · Machine Learning & Systems Engineer",
  description:
    "Portfolio of Karlosh Yadav – M.Tech CSE at IISc Bangalore, focused on machine learning, theorem proving and scalable systems. Software Engineer Intern at Google, 2026.",
  manifest: "/manifest.json",
  keywords: [
    "Karlosh Yadav",
    "Portfolio",
    "Machine Learning",
    "Autoformalization",
    "Lean 4",
    "Software Engineer",
    "Bangalore",
    "IISc",
  ],
  openGraph: {
    title: "Karlosh Yadav · Machine Learning & Systems Engineer",
    description:
      "Projects, experience and achievements of Karlosh Yadav, M.Tech CSE at IISc Bangalore.",
    type: "website",
    url: "https://karloshyadav.com.np",
  },
};

export const viewport: Viewport = {
  themeColor: "#0C0B0A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
