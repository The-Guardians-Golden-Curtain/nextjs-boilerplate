// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mont = Montserrat({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-mont" });

export const metadata: Metadata = {
  title: "The Golden Curtain — Guarding hope. Empowering change.",
  description: "Donation-first platform by The Guardians.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mont.variable}`}>
      <body className={`${inter.variable} ${mont.variable}`}>
        <header className="gc-header">
          <div className="gc-logo">
            <img
              src="/tgc-emblem.png"
              alt="The Golden Curtain Emblem"
              width={100}
              height={140}
              style={{ objectFit: "contain" }}
            />
            <span className="gc-brand">The Golden Curtain</span>
          </div>

          <nav className="gc-nav">
            <a href="/how-it-works">How it Works</a>
            <a href="#plans">Plans</a>
            <a href="/guardians/sample-guardian">Guardians</a>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
