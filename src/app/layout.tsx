import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Sans, JetBrains_Mono, Fraunces } from "next/font/google";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import CustomCursor from "@/components/CustomCursor";
import Intro from "@/components/Intro";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad — Full-Stack Developer & Automation Engineer",
  description:
    "Full-stack developer crafting high-performance web apps (React, Next.js, Laravel, MERN), mobile apps (Flutter, Android) and n8n automation pipelines.",
  keywords: [
    "full-stack developer",
    "Next.js",
    "React",
    "Laravel",
    "Flutter",
    "n8n",
    "automation",
    "MERN",
  ],
  openGraph: {
    title: "Ahmad — Full-Stack Developer & Automation Engineer",
    description:
      "High-performance web, mobile and automation. React · Next.js · Laravel · Flutter · n8n.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060910",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plexSans.variable} ${jetbrainsMono.variable} ${fraunces.variable} h-full scroll-smooth antialiased`}
    >
      <body className="vignette noise flex min-h-full flex-col bg-ink-950 font-sans text-fog-100">
        <CustomCursor />
        <Intro />
        <ScrollProgress />
        <ScrollToTop />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}