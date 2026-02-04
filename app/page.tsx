"use client";

import { useEffect, useState } from "react";
// --- IMPORT KOMPONEN EKSTERNAL ---
import WelcomeScreen from "./WelcomeScreen"; 
import MoonBackground from "./MoonBackground"; 

export default function Home() {
  const fantasyFont = "font-serif italic tracking-wider uppercase";
  const [isLoading, setIsLoading] = useState(true);

  // --- DATA SERVICES ---
  const services = [
    { 
      title: "✦ COSMETICA FACE", 
      tag: "*KHUSUS MINECRAFT PREMIUM", 
      items: [
        { label: "ONLY FACE: 30K", desc: "Custom mata, alis, dan mulut sesuai request." }, 
        { label: "FACE + RAMBUT HD: 50K", desc: "Termasuk shading rambut detail dan ekspresi." }
      ], 
      btn: "ORDER FACE" 
    },
    { 
      title: "◈ MINECRAFT SKIN", 
      tag: "CLASSIC / SLIM MODEL", 
      items: [
        { label: "SIMPLE: 10K", desc: "Desain minimalis dengan shading standar." }, 
        { label: "FULL DETAIL: 15K", desc: "Shading kompleks untuk Anime atau Fantasy." }
      ], 
      btn: "ORDER SKIN" 
    },
    { 
      title: "✎ ART & ILLUSTRATION", 
      tag: "DIGITAL HAND-DRAWN", 
      items: [
        { label: "SIMPLE SHADE: 25K", desc: "Fanart atau OC." }, 
        { label: "CHIBI PNGTUBER: 25K", desc: "Karakter mungil untuk konten." }, 
        { label: "PNGTUBER: 30K", desc: "Model PNGtuber (Bust-up)." }
      ], 
      btn: "ORDER ART" 
    },
    { 
      title: "▣ MC PHOTOSHOOT", 
      tag: "CINEMATIC RENDERS", 
      items: [
        { label: "CINEMATIC RENDER", desc: "Single, Couple, atau Group." }, 
        { label: "CUSTOM SCENE", desc: "Background Nether, End, atau build milikmu." }
      ], 
      btn: "BOOKING SESSION" 
    },
    { 
      title: "✉ CUSTOM STICKER", 
      tag: "DISCORD & WHATSAPP", 
      items: [
        { label: "PER PCS: 10K", desc: "Bust-up atau Head Only." }, 
        { label: "PACK (6 STICKER): 50K", desc: "Lebih hemat untuk koleksi." }
      ], 
      btn: "ORDER STICKER" 
    },
    { 
      title: "🏛 MINECRAFT BUILD", 
      tag: "STRUCTURAL & AESTHETIC", 
      items: [
        { label: "BASIC: 15K – 75K", desc: "Small structures." }, 
        { label: "ADVANCED: 75K – 300K", desc: "Fantasy base." }, 
        { label: "ELITE: 450K – 1.5JT", desc: "Complex cities." }
      ], 
      btn: "CUSTOM BUILD" 
    }
  ];

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return <WelcomeScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="bg-[#010108] text-white selection:bg-purple-500/30 scroll-smooth min-h-screen font-sans overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 pointer-events-none">
        <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-2 pl-3 md:pl-4 pr-3 md:pr-6 shadow-2xl">
          <div className="flex items-center gap-2 group">
            <img 
              src="/selene_shop.png" 
              alt="Logo" 
              className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-full mix-blend-screen transition-transform group-hover:scale-110"
            />
            <div className={`${fantasyFont} text-[10px] md:text-sm font-bold tracking-[0.3em] hidden sm:block`}>
              SELENE<span className="text-purple-500 ml-1">✦</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {[{ label: "BERANDA", href: "#beranda" }, { label: "TENTANG", href: "#tentang" }, { label: "LAYANAN", href: "#layanan" }, { label: "CARA ORDER", href: "#caraorder" }].map((link) => (
              <a key={link.label} href={link.href} className="px-4 py-2 text-[10px] font-bold tracking-[0.2em] hover:bg-white/5 rounded-2xl transition-all duration-300 opacity-60 hover:opacity-100 uppercase">{link.label}</a>
            ))}
          </div>
          <a href="https://discord.gg/muH44HDrea" target="_blank" className="bg-purple-600 hover:bg-purple-500 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-xl md:rounded-2xl text-[9px] md:text-[10px] font-black tracking-[0.2em] transition-all duration-300 uppercase shadow-lg">JOIN DISCORD</a>
        </div>
      </nav>

      <main className="relative">
        <MoonBackground />

        {/* 1. HERO SECTION - LOGO DI KIRI NAMA */}
        <section id="beranda" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          <div className="animate-fade-in flex flex-col items-center w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
              {/* Logo di Kiri */}
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-purple-600/20 blur-[60px] rounded-full" />
                <img 
                  src="/selene_shop.png" 
                  alt="Logo" 
                  className="relative w-36 h-36 md:w-64 md:h-64 object-contain mix-blend-screen drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                />
              </div>
              {/* Nama Selene Shop */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className={`${fantasyFont} text-6xl md:text-[10rem] font-bold text-white leading-[0.8] tracking-tighter`}>SELENE</h1>
                <h1 className={`${fantasyFont} text-6xl md:text-[10rem] font-bold leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-600`}>SHOP</h1>
              </div>
            </div>
            
            <p className="text-white/40 max-w-2xl mx-auto text-[9px] md:text-sm mb-12 tracking-[0.4em] uppercase font-light italic px-4">
              Digital Craftsmanship for the Midnight Dreamers
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
              {[
                { label: "EXPLORE SERVICES", href: "#layanan", style: "bg-white text-black" },
                { label: "LEARN MORE", href: "#tentang", style: "border-white/10 bg-white/5 backdrop-blur-md" }
              ].map((btn) => (
                <a key={btn.label} href={btn.href} className={`px-8 md:px-10 py-4 border rounded-full text-[10px] font-black tracking-[0.2em] transition-all uppercase ${btn.style}`}>{btn.label}</a>
              ))}
            </div>
          </div>
        </section>

        {/* 2. BRAND STRIP */}
        <section className="relative z-20 py-12 md:py-20 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-6 md:gap-24 opacity-40">
            {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
              <span key={brand} className={`${fantasyFont} text-sm md:text-3xl font-bold tracking-[0.3em]`}>{brand}</span>
            ))}
          </div>
        </section>

        {/* 3. TENTANG KAMI - PERBAGUS DESAIN */}
        <section id="tentang" className="relative z-10 py-24 md:py-40 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center bg-white/[0.02] border border-white/5 rounded-[40px] md:rounded-[80px] p-10 md:p-20 backdrop-blur-xl">
              <div className="text-center md:text-left">
                <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">THE STORY</span>
                <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold leading-tight mb-8`}>TENTANG<br/>KAMI</h2>
                <div className="w-20 h-[2px] bg-purple-500 mx-auto md:mx-0 mb-8 opacity-50" />
              </div>
              <div>
                <p className="text-white/50 leading-loose text-sm md:text-lg mb-10 uppercase tracking-widest italic font-light">
                  Sebuah manifestasi kreativitas yang baru saja merekah. Selene Shop hadir untuk menciptakan standar keanggunan baru di semesta digital melalui sentuhan pixel yang presisi.
                </p>
                <div className="grid grid-cols-2 gap-6">
                   <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                      <h4 className={`${fantasyFont} text-2xl text-purple-400 font-bold`}>100+</h4>
                      <p className="text-[8px] text-white/30 uppercase tracking-widest">Done</p>
                   </div>
                   <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                      <h4 className={`${fantasyFont} text-2xl text-purple-400 font-bold`}>PREMIUM</h4>
                      <p className="text-[8px] text-white/30 uppercase tracking-widest">Quality</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PHILOSOPHY */}
        <section className="relative z-10 py-20 px-4 md:px-6">
          <div className="max-w-6xl mx-auto border border-white/5 bg-white/[0.01] rounded-[40px] md:rounded-[60px] p-8 md:p-20 backdrop-blur-xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">PHILOSOPHY</span>
                <h2 className={`${fantasyFont} text-3xl md:text-6xl font-bold mb-8 uppercase`}>MENGAPA KAMI?</h2>
                <p className="text-white/40 leading-relaxed tracking-wide uppercase text-[10px] md:text-xs italic">
                  Kami percaya bahwa identitas digital adalah refleksi dari jiwa. Itulah sebabnya setiap karya melewati proses kurasi detail.
                </p>
              </div>
              <div className="space-y-6 md:space-y-8">
                {[
                  { t: "ARTISTIC PRECISION", d: "Setiap pixel diletakkan dengan penuh pertimbangan estetika." },
                  { t: "EXCLUSIVE DESIGN", d: "Karya unik yang mencerminkan kepribadian eksklusifmu." },
                  { t: "NIGHTFALL SERVICE", d: "Dukungan layanan yang responsif dan profesional." }
                ].map((item, i) => (
                  <div key={i} className="border-l border-white/10 pl-6">
                    <h4 className={`${fantasyFont} text-white text-base md:text-lg mb-2`}>✦ {item.t}</h4>
                    <p className="text-white/30 text-[9px] md:text-[10px] tracking-widest uppercase">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. LAYANAN - TRANSPARAN BLUR (GLASSMORPHISM) */}
        <section id="layanan" className="relative z-10 py-20 md:py-32 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">COLLECTIONS</span>
              <h2 className={`${fantasyFont} text-5xl md:text-8xl font-bold py-4`}>LAYANAN</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {services.map((s, i) => (
                <div key={i} className="group relative bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[40px] flex flex-col h-full overflow-hidden backdrop-blur-md hover:bg-white/[0.05] transition-all duration-500">
                  <div className="flex-grow z-10">
                    <h3 className={`${fantasyFont} text-xl md:text-2xl font-bold text-white mb-2`}>{s.title}</h3>
                    <p className="text-[9px] md:text-[10px] text-purple-400 font-bold mb-8 tracking-[0.2em] uppercase">{s.tag}</p>
                    <div className="space-y-8 mb-10">
                      {s.items.map((item, idx) => (
                        <div key={idx} className="border-l border-white/10 pl-4">
                          <p className="text-[11px] md:text-[12px] font-black text-white/90 tracking-[0.1em] mb-1.5 uppercase leading-tight">{item.label}</p>
                          <p className="text-[10px] md:text-[11px] text-white/30 leading-relaxed uppercase tracking-tighter italic">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://discord.gg/muH44HDrea" target="_blank" className="relative z-10 block w-full text-center py-4 bg-white/5 border border-white/10 hover:bg-white hover:text-black rounded-2xl font-bold text-[9px] md:text-[10px] transition-all duration-500 uppercase tracking-[0.2em] mt-auto">
                    {s.btn}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CARA ORDER - GLASSMORPHISM */}
        <section id="caraorder" className="relative z-10 py-24 md:py-40 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold py-6`}>CARA ORDER</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { s: "01", t: "JOIN COMMUNITY", d: "Masuk ke server Discord kami." },
                { s: "02", t: "CREATE TICKET", d: "Pilih kategori layanan dan konsultasi." },
                { s: "03", t: "SECURE PAYMENT", d: "Pembayaran aman melalui gateway." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-10 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-md">
                  <span className={`${fantasyFont} text-5xl font-black text-purple-500/10 absolute top-8 right-10`}>{item.s}</span>
                  <h4 className={`${fantasyFont} font-bold text-white text-xl mb-4 relative z-10`}>{item.t}</h4>
                  <p className="text-[10px] text-white/40 leading-relaxed uppercase italic tracking-widest">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PEMBAYARAN - GLASSMORPHISM */}
        <section id="pembayaran" className="relative z-10 py-24 md:py-40 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`${fantasyFont} text-4xl md:text-6xl font-bold mb-10`}>GATEWAY</h2>
            <a href="https://sociabuzz.com/seleneshop/tribe" target="_blank" className="group relative inline-flex flex-col md:flex-row items-center gap-6 bg-white/[0.02] border border-white/10 rounded-[40px] p-10 md:p-14 hover:border-purple-500/50 transition-all w-full md:w-auto backdrop-blur-md">
              <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center text-3xl text-purple-400 animate-pulse">✦</div>
              <div className="text-center md:text-left">
                <span className={`${fantasyFont} block font-bold text-white text-2xl md:text-3xl mb-2 tracking-widest`}>SOCIABUZZ</span>
                <p className="text-[9px] md:text-[10px] text-white/30 font-bold tracking-[0.3em]">QRIS • E-WALLET • BANK TRANSFER</p>
              </div>
            </a>
          </div>
        </section>

        {/* 8. FOOTER */}
        <footer className="relative z-10 py-10 border-t border-white/5 bg-[#010108] px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className={`${fantasyFont} text-base md:text-lg font-bold mb-4 tracking-[0.5em] opacity-80 uppercase text-center`}>
              SELENE SHOP
            </div>
            <div className="flex flex-col items-center gap-2 text-center w-full">
              <p className="text-white/40 text-[9px] md:text-[11px] uppercase tracking-[0.15em]">
                © 2026 <span className="text-white/60">SeleneShop</span>. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[9px] md:text-[11px] tracking-[0.1em]">
                <p className="text-white/40 uppercase">
                  <span className="text-blue-400 font-bold">Bardan1172</span> Visual Series 
                </p>
                <span className="opacity-30 mx-1">—</span> 
                <p className="text-white/40 uppercase">
                  Powered by <span className="text-white/60">SeleneShop.</span>
                </p>
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
        
        /* Smooth Scroll behavior */
        html { scroll-behavior: smooth; }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #010108; }
        ::-webkit-scrollbar-thumb { background: #2d1b4e; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #4c1d95; }
      `}</style>
    </div>
  );
}
