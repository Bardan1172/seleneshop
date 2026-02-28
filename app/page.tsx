"use client";

import { useEffect, useState } from "react";
// Import disesuaikan agar Vercel tidak "Module Not Found"
import WelcomeScreen from "./WelcomeScreen"; 
import MoonBackground from "./MoonBackground"; 
import { ScrollReveal } from "./ScrollReveal"; 
import ServicesSection from "./components/services"; 
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
          <div className="animate-fade-in flex flex-col items-center w-full text-center">
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
            <p className="text-white/40 max-w-2xl mx-auto text-[9px] md:text-sm mb-12 tracking-[0.4em] uppercase font-light italic px-4">Digital Craftsmanship for the Midnight Dreamers</p>
            <div className="flex flex-wrap justify-center gap-4">
               <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#layanan" className="px-8 py-4 bg-white text-black rounded-full text-[10px] font-black tracking-widest uppercase">EXPLORE SERVICES</motion.a>
               <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.95 }} href="#tentang" className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase">LEARN MORE</motion.a>
            </div>
          </div>
        </section>

        {/* --- SECTION LAYANAN --- */}
        <ServicesSection fantasyFont={fantasyFont} />

        {/* --- CARA ORDER --- */}
        <ScrollReveal>
          <section id="caraorder" className="relative z-10 py-24 md:py-40 px-6 text-center">
            <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold mb-16 text-white`}>CARA ORDER</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[{ s: "01", t: "JOIN COMMUNITY", d: "Masuk ke server Discord kami." }, { s: "02", t: "CREATE TICKET", d: "Pilih kategori layanan dan konsultasi." }, { s: "03", t: "SECURE PAYMENT", d: "Scan QRIS yang tersedia di ticket order." }].map((item, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.03 }} className="relative p-10 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-md">
                  <span className={`${fantasyFont} text-5xl font-black text-purple-500/10 absolute top-8 right-10`}>{item.s}</span>
                  <h4 className={`${fantasyFont} font-bold text-white text-xl mb-4 relative z-10`}>{item.t}</h4>
                  <p className="text-[10px] text-white/40 uppercase italic tracking-widest">{item.d}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* --- SECTION QRIS PAYMENT --- */}
        <ScrollReveal>
          <section className="relative z-10 py-20 px-6 border-y border-white/5 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-10 uppercase">OFFICIAL PAYMENT</p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white/[0.02] border border-white/10 p-10 rounded-[50px] backdrop-blur-sm">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative bg-white p-4 rounded-3xl shadow-2xl overflow-hidden">
                    <img src="/qris-code.png" alt="QRIS Selene Shop" className="w-48 h-48 md:w-64 md:h-64 object-contain grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>

                <div className="text-left space-y-6">
                  <h3 className={`${fantasyFont} text-3xl md:text-5xl font-bold text-white`}>QRIS <span className="text-purple-500 text-xl block md:inline md:ml-2 tracking-tighter italic">ALL PAYMENT</span></h3>
                  <div className="space-y-4">
                    <p className="text-[11px] text-white/60 tracking-widest uppercase">Mendukung Pembayaran Melalui:</p>
                    <div className="flex flex-wrap gap-4 text-xs font-black tracking-widest text-white/40 italic uppercase">
                       <span>DANA</span> • <span>GOPAY</span> • <span>OVO</span> • <span>SHOPEEPAY</span> • <span>BANK</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-purple-400 font-bold tracking-[0.2em] border-l-2 border-purple-500 pl-4 uppercase">
                    Scan otomatis & Konfirmasi via Ticket
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* --- FOOTER --- */}
        <footer className="relative z-10 py-20 border-t border-white/5 bg-[#010108] px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="flex items-center gap-3 mb-8">
               <img src="/selene_shop.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full mix-blend-screen" />
               <div className={`${fantasyFont} text-xl md:text-3xl font-bold tracking-[0.3em] text-white`}>SELENE<span className="text-purple-500 ml-1">✦</span></div>
            </div>
            
            <div className="flex gap-8 mb-12">
               {["INSTAGRAM", "DISCORD", "TIKTOK"].map((social) => (
                 <a key={social} href="#" className="text-[10px] font-black tracking-[0.3em] text-white/40 hover:text-purple-500 transition-colors uppercase">{social}</a>
               ))}
            </div>

            <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />
            
            <p className="text-white/20 text-[9px] md:text-[11px] uppercase tracking-[0.2em] leading-loose max-w-lg">
              Crafting premium digital assets for the Minecraft community and beyond. 
              All rights reserved. © 2026 SeleneShop. 
              <span className="block mt-2 opacity-50">Powered by Bardan1172 Visual Series.</span>
            </p>
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
