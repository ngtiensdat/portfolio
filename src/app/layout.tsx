import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolioData } from "@/data/portfolioData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://nguyentiendat.dev"),
  title: `${portfolioData.personal.name} | Web Developer Portfolio`,
  description: `Portfolio cá nhân của ${portfolioData.personal.name} - ${portfolioData.personal.title}. ${portfolioData.personal.subtitle}`,
  keywords: [
    "Web Developer",
    "Frontend Developer",
    "Full-stack Developer",
    "Next.js Portfolio",
    "React",
    "TypeScript",
    "Tailwind CSS",
  ],
  authors: [{ name: portfolioData.personal.name }],
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-emerald-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
