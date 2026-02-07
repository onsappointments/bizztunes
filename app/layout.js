import { DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AppBoot from "./components/AppBoot";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-mono",
});

export const metadata = {
  title: "BizzTunes - Professional Business Callertunes & Voice Branding",
  description:
    "Transform your business calls with professional callertunes, jingles, and voice branding. Lifetime validity, all network compatible.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceMono.variable}`}>
      <body className={`${dmSans.className} bg-[#05070e] text-white`}>
        {/* Navbar should NOT be gated by loader */}
        <Navbar />

        {/* AppBoot controls loader + page readiness */}
        <AppBoot>
          {children}
        </AppBoot>
      </body>
    </html>
  );
}
