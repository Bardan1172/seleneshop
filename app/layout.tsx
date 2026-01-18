import "./globals.css";
import Navbar from "./components/Navbar";
import LoadingScreen from "./components/LoadingScreen"; // Pastikan sudah membuat file ini
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selene Shop 🌙",
  description: "Moonlit Minecraft & Art Commission Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`
          ${playfair.variable}
          ${poppins.variable}
          bg-[#05051a] text-purple-100 antialiased font-sans
        `}
      >
        {/* 1. Komponen Loading Screen */}
        <LoadingScreen />

        {/* 2. Wrapper Utama */}
        {/* Kita bungkus agar konten tidak muncul mendadak */}
        <div className="relative min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Footer bisa diletakkan di sini jika ada */}
        </div>
      </body>
    </html>
  );
}
