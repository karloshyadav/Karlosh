import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Cursor from "./components/Cursor";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Karlosh Yadav · Data & Front-end Engineer",
  description:
    "Portfolio of Karlosh Yadav – data-focused front-end engineer building inclusive, insight-driven digital products.",
  manifest: "/manifest.json",
  keywords: [
    "Karlosh Yadav",
    "Portfolio",
    "Front-end Engineer",
    "Data Engineer",
    "Bangalore",
    "IISc",
  ],
  openGraph: {
    title: "Karlosh Yadav · Data & Front-end Engineer",
    description:
      "Explore the projects, experience, and achievements of Karlosh Yadav, a data-driven front-end engineer from Bangalore.",
    type: "website",
    url: "https://karlosh.vercel.app/",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-back font-poppins">
      <body className={poppins.className}>
        <Cursor />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
