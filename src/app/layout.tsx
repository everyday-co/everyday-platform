import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Everyday Design System",
  description: "Everyday Design System Playbook",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${workSans.variable} ${GeistMono.variable}`}>
      <body className="min-h-dvh bg-white text-slate-900 antialiased">
        <SiteHeader />
        <div className="mx-auto w-full max-w-6xl px-4 py-8">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}


