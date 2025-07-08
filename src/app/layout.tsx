import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from 'next-themes'

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
        <ThemeProvider attribute="class">
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono text-gray-800 dark:text-white
                      bg-gray-100 
                      `}>

          {/* Navbar */}
          <Navbar />
          {/* Main content */}
          <main className="min-h-[calc(100svh-64px)]">
            {children}
          </main>
      </body>
    </html>
    </ThemeProvider>
  );
}

