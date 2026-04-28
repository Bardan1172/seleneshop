"use client";

import { useEffect, useState } from "react";
import WelcomeScreen from "./WelcomeScreen"; 
import MoonBackground from "./MoonBackground"; 
import { ScrollReveal } from "./ScrollReveal"; 
import ServicesSection from "./components/services"; 
import { motion } from "framer-motion";

export default function Home() {
  const fantasyFont = "font-serif italic tracking-wider uppercase";
  const [isLoading, setIsLoading] = useState(true);
  const smoothSpring = { type: "spring", stiffness: 300, damping: 20 };

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

        {/* --- 1. HERO SECTION --- */}
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

        {/* --- 2. BRAND STRIP --- */}
        <section className="relative z-20 py-12 md:py-20 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-6 md:gap-24 opacity-40">
            {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
              <span key={brand} className={`${fantasyFont} text-sm md:text-3xl font-bold tracking-[0.3em]`}>{brand}</span>
            ))}
          </div>
        </section>

        {/* --- 3. TENTANG KAMI --- */}
        <ScrollReveal>
          <section id="tentang" className="relative z-10 py-24 md:py-40 px-6">
            <div className="max-w-5xl mx-auto bg-white/[0.02] border border-white/5 rounded-[40px] md:rounded-[80px] p-8 md:p-20 backdrop-blur-xl">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="text-center md:text-left">
                  <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 md:mb-6 block uppercase">THE STORY</span>
                  <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold leading-tight mb-6 md:mb-8`}>TENTANG<br className="hidden md:block"/>KAMI</h2>
                  <div className="w-16 h-[2px] bg-purple-500 mx-auto md:mx-0 opacity-50" />
                </div>
                <div className="flex flex-col gap-8 md:gap-10">
                  <p className="text-white/50 leading-loose text-xs md:text-lg uppercase tracking-widest italic font-light text-center md:text-left">
                    Sebuah manifestasi kreativitas yang baru saja merekah. Selene Shop hadir untuk menciptakan standar keanggunan baru di semesta digital.
                  </p>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <motion.div whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }} transition={smoothSpring} className="p-4 md:p-6 rounded-3xl bg-white/5 border border-white/5 text-center flex flex-col justify-center">
                      <h4 className={`${fantasyFont} text-xl md:text-3xl text-purple-400 font-bold`}>100+</h4>
                      <p className="text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em] mt-1">DONE</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }} transition={smoothSpring} className="p-4 md:p-6 rounded-3xl bg-white/5 border border-white/5 text-center flex flex-col justify-center overflow-hidden">
                      <h4 className={`${fantasyFont} text-sm md:text-2xl text-purple-400 font-bold leading-none truncate`}>PREMIUM</h4>
                      <p className="text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em] mt-1">QUALITY</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* --- 4. PHILOSOPHY --- */}
        <ScrollReveal>
          <section className="relative z-10 py-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto border border-white/5 bg-white/[0.01] rounded-[40px] md:rounded-[60px] p-8 md:p-20 backdrop-blur-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">PHILOSOPHY</span>
                  <h2 className={`${fantasyFont} text-3xl md:text-6xl font-bold mb-8 uppercase`}>MENGAPA KAMI?</h2>
                  <p className="text-white/40 leading-relaxed tracking-wide uppercase text-[10px] md:text-xs italic">Kami percaya bahwa identitas digital adalah refleksi dari jiwa. Itulah sebabnya setiap karya melewati proses kurasi detail.</p>
                </div>
                <div className="space-y-6 md:space-y-8">
                  {[{ t: "ARTISTIC PRECISION", d: "Setiap pixel diletakkan dengan penuh pertimbangan estetika." }, { t: "EXCLUSIVE DESIGN", d: "Karya unik yang mencerminkan kepribadian eksklusifmu." }, { t: "NIGHTFALL SERVICE", d: "Dukungan layanan yang responsif dan profesional." }].map((item, i) => (
                    <motion.div key={i} whileHover={{ x: 10 }} transition={smoothSpring} className="border-l border-white/10 pl-6 cursor-default text-left">
                      <h4 className={`${fantasyFont} text-white text-base md:text-lg mb-2`}>✦ {item.t}</h4>
                      <p className="text-white/30 text-[9px] md:text-[10px] tracking-widest uppercase">{item.d}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* --- 5. LAYANAN --- */}
        <ServicesSection fantasyFont={fantasyFont} />

        {/* --- 6. CARA ORDER --- */}
        <ScrollReveal>
          <section id="caraorder" className="relative z-10 py-24 md:py-40 px-6 text-center">
            <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold mb-16 text-white uppercase`}>CARA ORDER</h2>
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

        {/* --- 7. QRIS PAYMENT --- */}
<ScrollReveal>
  <section className="relative z-10 py-20 px-6 border-y border-white/5 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-10 uppercase">OFFICIAL PAYMENT</p>
      
      {/* Container Utama Kartu */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white/[0.02] border border-white/10 p-10 md:p-16 rounded-[50px] backdrop-blur-md shadow-2xl relative overflow-hidden">
        
        {/* Dekorasi Cahaya di belakang QR */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full" />

        {/* Frame Kotak QRIS */}
        <div className="relative group">
          <div className="relative bg-white p-3 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105">
            {/* Image QRIS */}
            <img 
              src="/qris.png" 
              alt="QRIS Selene Shop" 
              className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-lg"
            />
            
            {/* Overlay Garis Pemindai (Animasi) */}
            <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-2xl transition-all duration-500">
               <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] opacity-0 group-hover:opacity-100 group-hover:animate-scan" />
            </div>
          </div>
        </div>

        {/* Deskripsi Pembayaran */}
        <div className="text-left space-y-6 relative z-10">
          <h3 className={`${fantasyFont} text-4xl md:text-6xl font-bold text-white tracking-tight`}>
            QRIS <span className="text-purple-500 italic text-2xl md:text-3xl block md:inline md:ml-2">ALL PAYMENT</span>
          </h3>
          
          <div className="space-y-4">
            <p className="text-[11px] text-white/60 tracking-[0.3em] font-bold uppercase">Mendukung Pembayaran:</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] md:text-xs font-black tracking-widest text-white/40 italic uppercase">
               <span className="hover:text-purple-400 transition-colors">DANA</span> • 
               <span className="hover:text-purple-400 transition-colors">GOPAY</span> • 
               <span className="hover:text-purple-400 transition-colors">OVO</span> • 
               <span className="hover:text-purple-400 transition-colors">SHOPEEPAY</span> • 
               <span className="hover:text-purple-400 transition-colors">BANK</span>
            </div>
          </div>

          <div className="pt-4">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
              <p className="text-[9px] text-purple-400 font-bold tracking-widest uppercase italic">
                Scan & Konfirmasi Otomatis via Ticket
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</ScrollReveal>

        {/* 8.5 OUR TEAM */}
        <ScrollReveal>
          <section className="relative z-10 py-24 px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">COLLABORATION</span>
                <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold text-white uppercase`}>OUR TEAM</h2>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                {[
                  { name: "Altra", role: "OWNER" },
                  { name: "Gabbie", role: "OWNER & WORKER" },
                  { name: "Aellaryn", role: "CO OWNER & WORKER" },
                  { name: "Kuba", role: "CO OWNER & STAFF" },
                  { name: "Nyx", role: "ADMIN & WORKER" },
                  { name: "Chilo", role: "MODERATOR" },
                  { name: "Alen", role: "STAFF & WORKER" },
                  { name: "Amyy", role: "STAFF & WORKER" },
                  { name: "Delicia", role: "STAFF & WORKER" },
                  { name: "Kinaki", role: "STAFF & WORKER" },
                  { name: "Lopi", role: "STAFF & WORKER" }
                ].map((member, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={smoothSpring}
                    className="relative p-6 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-center group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-white/10 flex items-center justify-center">
                      <span className={`${fantasyFont} text-xl md:text-2xl text-purple-400 font-bold`}>{member.name[0]}</span>
                    </div>
                    <h4 className={`${fantasyFont} text-sm md:text-base font-bold text-white mb-1`}>{member.name}</h4>
                    <p className="text-[8px] md:text-[9px] text-white/30 uppercase tracking-[0.2em]">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 8. FOOTER */}
        <footer className="relative z-10 py-10 border-t border-white/5 bg-[#010108] px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className={`${fantasyFont} text-base md:text-lg font-bold mb-4 tracking-[0.5em] opacity-80 uppercase text-center`}>SELENE SHOP</div>
            <div className="flex flex-col items-center gap-2 text-center w-full">
              <p className="text-white/40 text-[9px] md:text-[11px] uppercase tracking-[0.15em]">© 2026 <span className="text-white/60">SeleneShop</span>. All rights reserved.</p>
              <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[9px] md:text-[11px] tracking-[0.1em]">
                <p className="text-white/40 uppercase"><span className="text-blue-400 font-bold">Atra Caeltharion</span> Visual Series</p>
                <span className="opacity-30 mx-1">—</span> 
                <p className="text-white/40 uppercase">Powered by <span className="text-white/60">SeleneShop.</span></p>
              </div>
            </div>
            <div className="w-10 h-[1px] bg-purple-500 mt-6 opacity-30" />
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
