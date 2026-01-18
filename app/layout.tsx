import "./globals.css";
import Navbar from "./components/Navbar";
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";

/* ===== FONT SETUP ===== */
// Playfair untuk Judul (font-title)
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Poppins untuk teks isi (default body)
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

/* ===== METADATA ===== */
export const metadata: Metadata = {
  title: "Selene Shop 🌙 | Moonlit Minecraft & Art",
  description: "Moonlit Minecraft Skin, Cosmetica Face, Art Commission, dan Build aesthetic.",
  icons: {
    icon: "/favicon.ico", // Pastikan kamu punya file icon di folder public
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth"> {/* Tambah scroll-smooth agar perpindahan menu halus */}
      <body
        className={`
          ${playfair.variable} 
          ${poppins.variable} 
          font-sans bg-[#05051a] text-white antialiased
        `}
      >
        {/* Navbar akan selalu ada di setiap halaman */}
        <Navbar />
        
        {/* Area konten utama */}
        {children}
      </body>
    </html>
  );
}
