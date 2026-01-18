import "./globals.css";
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

/* ===== FONT SETUP ===== */
const playfair = Playfair_Display({
  subsets: ["latin"],
  // Menambahkan varian Italic untuk kesan puitis
  style: ['normal', 'italic'],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  // Menambah weight 200 (Extra Light) untuk kesan premium
  weight: ["200", "300", "400", "500", "600"], 
  variable: "--font-poppins",
  display: "swap",
});

/* ===== METADATA ===== */
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
          font-sans bg-black text-white antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
