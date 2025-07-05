import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar/Navbar";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hitori Portfolio",
  description: "An innovative software developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono text-gray-800
                      bg-gray-100 
                      `}>
        {/* Navbar */}
        <Navbar />
        {/* Main content */}
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
      </body>
    </html>
  );
}

