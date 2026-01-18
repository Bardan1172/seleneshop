import "./globals.css";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Selene Shop 🌙 | Moonlit Creations",
  description: "Minecraft Skin, Cosmetica Face, and Art Commission Shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${playfair.variable} ${poppins.variable} font-sans bg-[#05051a] text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
