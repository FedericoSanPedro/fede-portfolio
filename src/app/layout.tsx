import { Fraunces, Outfit, JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Federico San Pedro — Full Stack Developer",
  description:
    "Full Stack Developer specialized in Node.js, NestJS, React and TypeScript. Based in Buenos Aires.",
  openGraph: {
    title: "Federico San Pedro — Full Stack Developer",
    description: "Node.js · React · TypeScript. Fullstack products with solid APIs.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
