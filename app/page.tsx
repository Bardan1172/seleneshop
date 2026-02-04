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
    <div className="bg-[#010108] text-white selection:bg-purple-500/30 scroll-smooth min-h-screen font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 pointer-events-none">
        <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-2 pl-4 pr-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-500/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              <img 
                src="/selene_shop.png" 
                alt="Logo" 
                className="relative w-12 h-12 md:w-14 md:h-14 object-contain rounded-full mix-blend-screen transition-transform group-hover:scale-110"
              />
            </div>
            <div className={`${fantasyFont} text-[10px] md:text-sm font-bold tracking-[0.3em] hidden sm:block`}>
              SELENE<span className="text-purple-500 ml-1">✦</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {[{ label: "BERANDA", href: "#beranda" }, { label: "TENTANG", href: "#tentang" }, { label: "LAYANAN", href: "#layanan" }, { label: "CARA ORDER", href: "#caraorder" }].map((link) => (
              <a key={link.label} href={link.href} className="px-5 py-2 text-[10px] font-bold tracking-[0.2em] hover:bg-white/5 rounded-2xl transition-all duration-300 opacity-60 hover:opacity-100 uppercase">{link.label}</a>
            ))}
          </div>
          <a href="https://discord.gg/muH44HDrea" target="_blank" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-2xl text-[10px] font-black tracking-[0.2em] transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] uppercase">JOIN DISCORD</a>
        </div>
      </nav>

      <main className="relative">
        <MoonBackground />

        {/* 1. HERO SECTION */}
        <section id="beranda" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
          <div className="animate-fade-in flex flex-col items-center">
            <div className="flex flex-row items-center gap-4 md:gap-2 mb-8 mr-4 md:mr-12">
              <div className="relative animate-float -translate-x-4 md:-translate-x-8">
                <div className="absolute inset-0 bg-purple-600/20 blur-[60px] md:blur-[100px] rounded-full" />
                <img 
                  src="/selene_shop.png" 
                  alt="Selene Shop Logo" 
                  className="relative w-40 h-40 md:w-72 md:h-72 object-contain mix-blend-screen drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                />
              </div>
              <div className="flex flex-col items-start text-left relative z-[30]">
                <h1 className={`${fantasyFont} text-5xl md:text-9xl font-bold text-white leading-[0.75]`}>SELENE</h1>
                <h1 className={`${fantasyFont} text-5xl md:text-9xl font-bold leading-[0.75] text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-600`}>SHOP</h1>
              </div>
            </div>
            <p className="text-white/40 max-w-2xl mx-auto text-[10px] md:text-sm mb-12 tracking-[0.4em] uppercase font-light italic">
              Digital Craftsmanship for the Midnight Dreamers
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { label: "TENTANG KAMI", href: "#tentang", style: "border-white/10 bg-white/5 hover:bg-white/10" },
                { label: "LAYANAN", href: "#layanan", style: "bg-white text-black hover:scale-105" },
                { label: "CARA ORDER", href: "#caraorder", style: "border-white/10 bg-white/5 hover:bg-white/10" }
              ].map((btn) => (
                <a key={btn.label} href={btn.href} className={`px-8 py-4 border rounded-2xl text-[10px] font-black tracking-[0.3em] transition-all duration-500 uppercase ${btn.style}`}>{btn.label}</a>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-50" />
            </div>
          </div>
        </section>

        {/* 2. BRAND STRIP */}
        <section className="relative z-20 py-20 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-60">
            <span className={`${fantasyFont} text-xl md:text-3xl font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-600`}>SELENE SHOP</span>
            <span className={`${fantasyFont} text-xl md:text-3xl font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-violet-600`}>HEPPYCLOUD</span>
            <span className={`${fantasyFont} text-xl md:text-3xl font-bold tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500`}>BANGBLAZE</span>
          </div>
        </section>

        {/* 3. TENTANG */}
        <section id="tentang" className="relative z-10 py-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">THE STORY</span>
            <h2 className={`${fantasyFont} text-5xl md:text-7xl font-bold py-6 leading-tight`}>TENTANG KAMI</h2>
            <p className="text-white/40 leading-loose text-lg mb-16 uppercase tracking-widest italic font-light max-w-3xl mx-auto">
              Sebuah manifestasi kreativitas yang baru saja merekah. Selene Shop hadir bukan sekadar untuk mengikuti tren, melainkan untuk menciptakan standar keanggunan baru di semesta digital.
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-xl mx-auto">
              {[{v: "100+", l: "SUCCESS PROJECT"}, {v: "PREMIUM", l: "QUALITY GRADE"}].map((st, i) => (
                <div key={i} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all duration-700">
                  <h4 className={`${fantasyFont} text-4xl text-purple-400 font-bold mb-2`}>{st.v}</h4>
                  <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.3em]">{st.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PHILOSOPHY (KEMBALI DISINI) */}
        <section className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto border border-white/5 bg-white/[0.01] rounded-[60px] p-12 md:p-20">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">PHILOSOPHY</span>
                <h2 className={`${fantasyFont} text-4xl md:text-6xl font-bold mb-8`}>MENGAPA KAMI?</h2>
                <p className="text-white/40 leading-relaxed tracking-wide uppercase text-xs italic">
                  Kami percaya bahwa identitas digital adalah refleksi dari jiwa. Itulah sebabnya setiap karya melewati proses kurasi detail yang mendalam.
                </p>
              </div>
              <div className="space-y-8">
                {[
                  { t: "ARTISTIC PRECISION", d: "Setiap pixel diletakkan dengan penuh pertimbangan estetika." },
                  { t: "EXCLUSIVE DESIGN", d: "Karya unik yang mencerminkan kepribadian eksklusifmu." },
                  { t: "NIGHTFALL SERVICE", d: "Dukungan layanan yang responsif dan profesional." }
                ].map((item, i) => (
                  <div key={i} className="group">
                    <h4 className={`${fantasyFont} text-white text-lg mb-2 group-hover:text-purple-400 transition-colors`}>✦ {item.t}</h4>
                    <p className="text-white/30 text-[10px] tracking-widest uppercase">{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. LAYANAN */}
        <section id="layanan" className="relative z-10 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">COLLECTIONS</span>
              <h2 className={`${fantasyFont} text-6xl md:text-8xl font-bold py-6`}>LAYANAN</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((s, i) => (
                <div key={i} className="group relative bg-[#05050a] border border-white/5 p-12 rounded-[50px] hover:border-purple-500/50 hover:-translate-y-3 transition-all duration-700 flex flex-col h-full overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-[60px] group-hover:bg-purple-600/20" />
                  <div className="flex-grow z-10">
                    <h3 className={`${fantasyFont} text-2xl font-bold text-white mb-2`}>{s.title}</h3>
                    <p className="text-[10px] text-purple-400 font-bold mb-10 tracking-[0.2em]">{s.tag}</p>
                    <div className="space-y-10 mb-12">
                      {s.items.map((item, idx) => (
                        <div key={idx} className="border-l border-white/10 pl-4">
                          <p className="text-[12px] font-black text-white/90 tracking-[0.15em] mb-2 uppercase">{item.label}</p>
                          <p className="text-[11px] text-white/30 leading-relaxed uppercase tracking-tighter">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://discord.gg/muH44HDrea" target="_blank" className="relative z-10 block w-full text-center py-5 bg-white/5 border border-white/10 hover:bg-white hover:text-black rounded-2xl font-bold text-[10px] transition-all duration-500 uppercase tracking-[0.3em] mt-auto">
                    {s.btn}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CARA ORDER */}
        <section id="caraorder" className="relative z-10 py-40 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">PROCEDURE</span>
              <h2 className={`${fantasyFont} text-5xl md:text-7xl font-bold py-6`}>CARA ORDER</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { s: "01", t: "JOIN COMMUNITY", d: "Masuk ke server Discord melalui link navigasi di atas." },
                { s: "02", t: "CREATE TICKET", d: "Pilih kategori layanan dan konsultasikan kebutuhanmu." },
                { s: "03", t: "SECURE PAYMENT", d: "Lakukan pembayaran aman melalui gateway kami." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-12 rounded-[45px] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-500">
                  <span className={`${fantasyFont} text-6xl font-black text-purple-500/10 absolute top-8 right-10`}>{item.s}</span>
                  <h4 className={`${fantasyFont} font-bold text-white text-2xl mb-6 relative z-10 tracking-widest`}>{item.t}</h4>
                  <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-widest italic">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PEMBAYARAN (KEMBALI DISINI) */}
        <section id="pembayaran" className="relative z-10 py-40 px-6 bg-purple-600/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-10 block uppercase">PAYMENT METHOD</span>
            <h2 className={`${fantasyFont} text-4xl md:text-6xl font-bold py-6 mb-10`}>GATEWAY</h2>
            <a href="https://sociabuzz.com/seleneshop/tribe" target="_blank" className="group relative inline-flex flex-col md:flex-row items-center gap-8 bg-black border border-white/10 rounded-[50px] p-10 md:p-14 hover:border-purple-500/50 transition-all duration-700 shadow-2xl">
              <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center text-4xl text-purple-400 animate-pulse">✦</div>
              <div className="text-center md:text-left uppercase">
                <span className={`${fantasyFont} block font-bold text-white text-3xl mb-2 tracking-widest`}>SOCIABUZZ</span>
                <p className="text-[10px] text-white/30 font-bold tracking-[0.4em]">QRIS • E-WALLET • BANK TRANSFER</p>
              </div>
              <div className="md:ml-10 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-transparent transition-all duration-500 text-xl">→</div>
            </a>
          </div>
        </section>

        {/* 8. FOOTER DETAIL (KEMBALI DISINI) */}
        <footer className="relative z-10 py-16 border-t border-white/5 bg-[#010108] px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className={`${fantasyFont} text-xl font-bold mb-8 tracking-[0.5em] opacity-80 uppercase`}>
              SELENE SHOP
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <p className="text-white/40 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-medium">
                © 2026 <span className="text-white/60">SeleneShop</span>. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-[10px] md:text-[11px] tracking-[0.1em]">
                <span className="opacity-80">🎨</span>
                <p className="text-white/40 uppercase">
                  <span className="text-blue-400 font-bold">Bardan1172</span> Visual Series 
                  <span className="mx-2 opacity-30">—</span> 
                  Powered by <span className="text-white/60">SeleneShop.</span>
                </p>
              </div>
            </div>
            <div className="w-12 h-[1px] bg-purple-500 mt-8 opacity-30" />
          </div>
        </footer>
      </main>

      {/* --- GLOBAL STYLES --- */}
      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        
        @keyframes star-rain { 0% { opacity: 0; transform: translate(0, 0) rotate(-45deg); } 10% { opacity: 1; } 100% { opacity: 0; transform: translate(-500px, 500px) rotate(-45deg); } }
        .animate-star-rain { animation: star-rain 3s linear infinite; }
        @keyframes twinkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2); } }
        .animate-twinkle { animation: twinkle 3s ease-in-out infinite; }
        @keyframes moon-glow-wave { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }
        .animate-moon-glow-wave { animation: moon-glow-wave 6s linear infinite; }
      `}</style>
    </div>
  );
}
