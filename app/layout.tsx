import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Arnold & Lockhart Electrical Ltd | Burton-on-Trent",
  description:
    "Expert electrical contractors based in Burton-on-Trent. Domestic installations, commercial fit-outs, fire alarms and security systems across the Midlands.",
  keywords: "electrician Burton-on-Trent, electrical contractor Midlands, domestic electrical, commercial electrical, fire alarm installation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#111111] text-white antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
