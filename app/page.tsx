"use client";

import { useEffect, useState } from "react";
import WelcomeScreen from "@/components/WelcomeScreen"; 
import MoonBackground from "@/components/MoonBackground"; 
import { ScrollReveal } from "@/components/ScrollReveal"; 
import ServicesSection from "@/components/services"; 
import { motion } from "framer-motion";

export default function Home() {
  const fantasyFont = "font-serif italic tracking-wider uppercase";
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) return <WelcomeScreen onLoadingComplete={() => setIsLoading(false)} />;

  return (
    <div className="bg-[#010108] text-white selection:bg-purple-500/30 scroll-smooth min-h-screen font-sans overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 pointer-events-none">
        <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-2 pl-3 md:pl-4 pr-3 md:pr-6 shadow-2xl">
          <div className="flex items-center gap-2 group">
            <img src="/selene_shop.png" alt="Logo" className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-full mix-blend-screen transition-transform group-hover:scale-110" />
            <div className={`${fantasyFont} text-[10px] md:text-sm font-bold tracking-[0.3em] hidden sm:block`}>SELENE<span className="text-purple-500 ml-1">✦</span></div>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {["BERANDA", "TENTANG", "LAYANAN", "CARA ORDER"].map((nav) => (
              <a key={nav} href={`#${nav.toLowerCase().replace(" ", "")}`} className="px-4 py-2 text-[10px] font-bold tracking-[0.2em] hover:bg-white/5 rounded-2xl transition-opacity duration-300 opacity-60 hover:opacity-100 uppercase">{nav}</a>
            ))}
          </div>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://discord.gg/muH44HDrea" target="_blank" className="bg-purple-600 hover:bg-purple-500 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase shadow-lg">JOIN DISCORD</motion.a>
        </div>
      </nav>

      <main className="relative">
        <MoonBackground />

        {/* --- HERO SECTION --- */}
        <section id="beranda" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          <div className="animate-fade-in flex flex-col items-center w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-purple-600/20 blur-[60px] rounded-full" />
                <img src="/selene_shop.png" alt="Logo" className="relative w-36 h-36 md:w-64 md:h-64 object-contain mix-blend-screen drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]" />
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className={`${fantasyFont} text-6xl md:text-[10rem] font-bold text-white leading-[0.8]`}>SELENE</h1>
                <h1 className={`${fantasyFont} text-6xl md:text-[10rem] font-bold leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-600`}>SHOP</h1>
              </div>
            </div>
            <p className="text-white/40 max-w-2xl mx-auto text-[9px] md:text-sm mb-12 tracking-[0.4em] uppercase font-light italic px-4 text-center">Digital Craftsmanship for the Midnight Dreamers</p>
            <div className="flex flex-wrap justify-center gap-4">
               <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#layanan" className="px-8 py-4 bg-white text-black rounded-full text-[10px] font-black tracking-widest uppercase">EXPLORE SERVICES</motion.a>
               <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.95 }} href="#tentang" className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase">LEARN MORE</motion.a>
            </div>
          </div>
        </section>

        {/* --- BRAND STRIP --- */}
        <section className="relative z-20 py-12 md:py-20 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-6 md:gap-24 opacity-40">
            {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
              <span key={brand} className={`${fantasyFont} text-sm md:text-3xl font-bold tracking-[0.3em]`}>{brand}</span>
            ))}
          </div>
        </section>

        {/* --- SECTION LAYANAN --- */}
        <ServicesSection fantasyFont={fantasyFont} />

        {/* --- CARA ORDER --- */}
        <ScrollReveal>
          <section id="caraorder" className="relative z-10 py-24 md:py-40 px-6 text-center">
            <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold mb-16 text-white`}>CARA ORDER</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[{ s: "01", t: "JOIN COMMUNITY", d: "Masuk ke server Discord kami." }, { s: "02", t: "CREATE TICKET", d: "Pilih kategori layanan dan konsultasi." }, { s: "03", t: "SECURE PAYMENT", d: "Pembayaran aman melalui gateway." }].map((item, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.03 }} className="relative p-10 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-md">
                  <span className={`${fantasyFont} text-5xl font-black text-purple-500/10 absolute top-8 right-10`}>{item.s}</span>
                  <h4 className={`${fantasyFont} font-bold text-white text-xl mb-4 relative z-10`}>{item.t}</h4>
                  <p className="text-[10px] text-white/40 uppercase italic tracking-widest">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* --- SECTION METODE PEMBAYARAN (BARU) --- */}
        <ScrollReveal>
          <section className="relative z-10 py-20 px-6 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-10 uppercase">ACCEPTED PAYMENTS</p>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
                <img src="/payments/qris.png" alt="QRIS" className="h-6 md:h-10 object-contain" />
                <img src="/payments/dana.png" alt="DANA" className="h-6 md:h-10 object-contain" />
                <img src="/payments/gopay.png" alt="GOPAY" className="h-6 md:h-10 object-contain" />
                <img src="/payments/ovo.png" alt="OVO" className="h-5 md:h-8 object-contain" />
                <img src="/payments/paypal.png" alt="PAYPAL" className="h-6 md:h-10 object-contain" />
              </div>
              <p className="mt-10 text-[9px] text-white/20 tracking-[0.2em] uppercase">And many more via Discord Ticket</p>
            </div>
          </section>
        </ScrollReveal>

        {/* --- FOOTER --- */}
        <footer className="relative z-10 py-10 border-t border-white/5 bg-[#010108] px-6 text-center">
          <div className="max-w-7xl mx-auto">
            <div className={`${fantasyFont} text-base md:text-lg font-bold mb-4 tracking-[0.5em] opacity-80 uppercase text-white`}>SELENE SHOP</div>
            <p className="text-white/40 text-[9px] md:text-[11px] uppercase tracking-[0.15em]">© 2026 SeleneShop. Powered by Bardan1172 Visual Series.</p>
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
