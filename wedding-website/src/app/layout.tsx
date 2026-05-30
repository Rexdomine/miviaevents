import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, Montserrat, DM_Serif_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mivia Events | Luxury Wedding & Event Planning",
  description: "Creating timeless celebrations with intention, elegance, and impeccable detail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" style={{ margin: 0, padding: 0, borderRadius: 0, border: 'none', background: '#FFFFFF' }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${cormorant.variable} ${playfair.variable} ${montserrat.variable} ${dmSerifDisplay.variable} font-sans antialiased bg-background-light text-[#1b180d] dark:bg-background-dark dark:text-[#f8f7f6] transition-colors duration-300`}
        style={{ margin: 0, padding: 0, borderRadius: 0, border: 'none', background: '#FFFFFF' }}
      >
        <Navbar />
        <main className="w-full relative z-10 bg-white dark:bg-background-dark" style={{ margin: 0, padding: 0, borderRadius: 0, border: 'none' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


