import type { Metadata } from "next";
import { Newsreader } from "next/font/google"; // Import Newsreader
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mivia Events | Elevated Wedding Planning & Design",
  description: "Creating timeless celebrations with intention, elegance, and impeccable detail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${newsreader.variable} font-serif antialiased bg-background-light text-[#1b180d] dark:bg-background-dark dark:text-[#f8f7f6] transition-colors duration-300`}
      >
        <Navbar />
        <main className="w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
