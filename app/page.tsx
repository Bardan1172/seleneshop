"use client";

import { useEffect, useState, useRef } from "react";

// --- KOMPONEN BACKGROUND (STARS, METEORS, & MOON) ---
function MoonBackground() {
  const [stars, setStars] = useState<{id: number, top: string, left: string, size: string, delay: string}[]>([]);
  const [meteors, setMeteors] = useState<{id: number, top: string, left: string, delay: string, duration: string}[]>([]);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStars(Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.3}px`,
      delay: `${Math.random() * 5}s`,
    })));

    setMeteors(Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 40}%`,
      left: `${Math.random() * 80 + 20}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${1.5 + Math.random() * 2}s`,
    })));

    const handleMouseMove = (e: MouseEvent) => {
      if (!moonRef.current || window.innerWidth < 768) return;
      const x = (e.clientX - window.innerWidth / 2) / 45;
      const y = (e.clientY - window.innerHeight / 2) / 45;
      moonRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#010108]">
      <div className="absolute inset-0 z-[10]">
        {meteors.map((m) => (
          <div key={m.id} className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-meteor-new"
            style={{ top: m.top, left: m.left, width: '200px', animationDelay: m.delay, animationDuration: m.duration }} />
        ))}
      </div>
      <div className="absolute inset-0 z-[2]">
        {stars.map((s) => (
          <div key={s.id} className="absolute bg-white rounded-full animate-twinkle"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }} />
        ))}
      </div>
      <div ref={moonRef} className="absolute top-16 md:top-24 right-[5%] md:right-[15%] transition-transform duration-700 ease-out z-[20]">
        <div className="relative w-28 h-28 md:w-64 md:h-64 rounded-full bg-[#e8e8e8] shadow-[inset_-10px_-5px_30px_rgba(0,0,0,0.9),inset_-25px_-15px_60px_rgba(0,0,0,0.9)] border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
        </div>
      </div>
      <style jsx>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.2; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes meteor-new { 0% { transform: rotate(-35deg) translateX(0) scaleX(0); opacity: 0; } 10% { opacity: 1; scaleX(1); } 30% { transform: rotate(-35deg) translateX(-1000px); opacity: 0; } }
        .animate-twinkle { animation: twinkle 4s infinite ease-in-out; }
        .animate-meteor-new { animation: meteor-new 10s infinite linear; }
      `}</style>
    </div>
  );
}

export default function Home() {
  const fantasyFont = "font-serif italic tracking-wider uppercase";

  const services = [
    { title: "✦ COSMETICA FACE", tag: "*KHUSUS MINECRAFT PREMIUM", items: [{ label: "ONLY FACE: 30K", desc: "Custom mata, alis, dan mulut." }, { label: "FACE + RAMBUT HD: 50K", desc: "Shading rambut detail." }], btn: "ORDER FACE" },
    { title: "◈ MINECRAFT SKIN", tag: "CLASSIC / SLIM MODEL", items: [{ label: "SIMPLE: 10K", desc: "Desain minimalis." }, { label: "FULL DETAIL: 15K", desc: "Shading kompleks." }], btn: "ORDER SKIN" },
    { title: "✎ ART & ILLUSTRATION", tag: "DIGITAL HAND-DRAWN", items: [{ label: "SIMPLE SHADE: 25K", desc: "Fanart atau OC." }, { label: "PNGTUBER: 30K", desc: "Model Bust-up." }], btn: "ORDER ART" },
    { title: "▣ MC PHOTOSHOOT", tag: "CINEMATIC RENDERS", items: [{ label: "CINEMATIC RENDER", desc: "Single/Group." }, { label: "CUSTOM SCENE", desc: "Custom Background." }], btn: "BOOKING SESSION" },
    { title: "✉ CUSTOM STICKER", tag: "DISCORD & WHATSAPP", items: [{ label: "PER PCS: 10K", desc: "Head Only." }, { label: "PACK (6): 50K", desc: "Lebih hemat." }], btn: "ORDER STICKER" },
    { title: "🏛 MINECRAFT BUILD", tag: "STRUCTURAL & AESTHETIC", items: [{ label: "BASIC: 15K – 75K", desc: "Small structures." }, { label: "ELITE: 450K+", desc: "Complex cities." }], btn: "CUSTOM BUILD" }
  ];

  return (
    <div className="bg-[#010108] text-white selection:bg-purple-500/30 scroll-smooth min-h-screen font-sans overflow-x-hidden">
      
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 py-4 md:py-6 pointer-events-none">
        <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-2 pl-4 md:pl-6 shadow-2xl">
          <div className={`${fantasyFont} text-xs md:text-lg font-bold tracking-[0.2em]`}>SELENE<span className="text-purple-500 ml-1">✦</span></div>
          <div className="hidden md:flex items-center gap-1">
            {["BERANDA", "TENTANG", "LAYANAN", "CARA ORDER"].map((label) => (
              <a key={label} href={`#${label.toLowerCase().replace(' ', '')}`} className="px-3 md:px-5 py-2 text-[9px] font-bold tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity">{label}</a>
            ))}
          </div>
          <a href="https://discord.gg/muH44HDrea" target="_blank" className="bg-purple-600 hover:bg-purple-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-[9px] md:text-[10px] font-black tracking-[0.1em] transition-all uppercase">JOIN DISCORD</a>
        </div>
      </nav>

      <main className="relative">
        <MoonBackground />

        {/* 1. HERO SECTION */}
        <section id="beranda" className="relative z-10 min-h-[90vh] md:min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className={`${fantasyFont} text-5xl sm:text-7xl md:text-9xl font-bold text-white mb-6 leading-tight`}>
            SELENE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-600">SHOP</span>
          </h1>
          <p className="text-white/40 max-w-2xl mx-auto text-[10px] md:text-base mb-10 tracking-[0.2em] md:tracking-[0.4em] uppercase font-light italic">Digital Craftsmanship for the Midnight Dreamers</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#tentang" className="px-8 py-4 border border-white/10 bg-white/5 rounded-2xl text-[9px] font-black tracking-[0.3em] hover:bg-white/10 transition-all uppercase">TENTANG</a>
            <a href="#layanan" className="px-8 py-4 border border-purple-500/30 bg-purple-500/10 rounded-2xl text-[9px] font-black tracking-[0.3em] hover:bg-purple-500/20 text-purple-200 transition-all uppercase shadow-lg shadow-purple-500/10">LAYANAN</a>
          </div>
        </section>

        {/* 2. TENTANG */}
        <section id="tentang" className="relative z-10 py-20 md:py-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-purple-400 text-[9px] md:text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">THE STORY</span>
            <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold py-4 mb-6`}>TENTANG KAMI</h2>
            <p className="text-white/40 leading-relaxed text-sm md:text-lg mb-12 uppercase tracking-widest italic px-2">Sebuah manifestasi kreativitas yang baru saja merekah di tahun 2026. Selene Shop hadir bukan sekadar mengikuti tren, melainkan menciptakan standar keanggunan baru di semesta digital.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 max-w-xl mx-auto">
              {[{v: "100+", l: "SUCCESS PROJECT"}, {v: "PREMIUM", l: "QUALITY GRADE"}].map((st, i) => (
                <div key={i} className="p-8 md:p-10 rounded-[30px] md:rounded-[40px] bg-white/[0.02] border border-white/5 shadow-xl">
                  <h4 className={`${fantasyFont} text-3xl md:text-4xl text-purple-400 font-bold mb-2`}>{st.v}</h4>
                  <p className="text-[8px] md:text-[9px] text-white/30 uppercase font-black tracking-[0.3em]">{st.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. KENAPA MEMILIH KAMI (DIKEMBALIKAN KE GAYA AWAL) */}
        <section className="relative z-10 py-20 px-6 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {[
              { t: "ELEGANT DESIGN", d: "Setiap karya kami memiliki sentuhan estetika premium yang berfokus pada detail terkecil." },
              { t: "FAST DELIVERY", d: "Waktu adalah aset. Kami memastikan pengerjaan tepat waktu tanpa mengurangi kualitas." },
              { t: "UNIQUE STYLE", d: "Tidak ada karya yang sama. Setiap pesanan dibuat khusus sesuai karakter pemesan." }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-10 h-[1px] bg-purple-500 mb-6" />
                <h4 className={`${fantasyFont} text-lg md:text-xl text-white mb-4 tracking-[0.2em]`}>{item.t}</h4>
                <p className="text-[10px] md:text-[11px] text-white/30 uppercase tracking-widest leading-relaxed italic">{item.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. LAYANAN */}
        <section id="layanan" className="relative z-10 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">COLLECTIONS</span>
              <h2 className={`${fantasyFont} text-5xl md:text-8xl font-bold py-4`}>LAYANAN</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
              {services.map((s, i) => (
                <div key={i} className="group relative bg-[#05050a] border border-white/5 p-8 md:p-12 rounded-[40px] md:rounded-[50px] hover:border-purple-500/50 transition-all duration-500 flex flex-col h-full shadow-2xl">
                  <div className="flex-grow">
                    <h3 className={`${fantasyFont} text-xl md:text-2xl font-bold text-white mb-2`}>{s.title}</h3>
                    <p className="text-[9px] text-purple-400 font-bold mb-8 tracking-[0.1em]">{s.tag}</p>
                    <div className="space-y-6 md:space-y-10 mb-10">
                      {s.items.map((item, idx) => (
                        <div key={idx} className="border-l border-white/10 pl-4">
                          <p className="text-[11px] md:text-[12px] font-black text-white/90 tracking-[0.1em] mb-1 uppercase">{item.label}</p>
                          <p className="text-[10px] text-white/30 leading-relaxed uppercase">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full text-center py-4 bg-white/5 border border-white/10 hover:bg-white hover:text-black rounded-xl font-bold text-[9px] transition-all uppercase tracking-[0.2em]">{s.btn}</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CARA ORDER */}
        <section id="caraorder" className="relative z-10 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold text-center mb-16 md:mb-24`}>CARA ORDER</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { s: "01", t: "JOIN COMMUNITY", d: "Masuk ke server Discord melalui link navigasi." },
                { s: "02", t: "CREATE TICKET", d: "Pilih kategori layanan dan konsultasikan kebutuhanmu." },
                { s: "03", t: "SECURE PAYMENT", d: "Lakukan pembayaran aman melalui payment gateway kami." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-8 md:p-12 rounded-[35px] md:rounded-[45px] bg-white/[0.02] border border-white/5">
                  <span className={`${fantasyFont} text-4xl md:text-6xl font-black text-purple-500/10 absolute top-6 right-8`}>{item.s}</span>
                  <h4 className={`${fantasyFont} font-bold text-white text-lg md:text-2xl mb-4 tracking-widest`}>{item.t}</h4>
                  <p className="text-[10px] md:text-[11px] text-white/40 leading-relaxed uppercase tracking-widest italic">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="relative z-10 py-12 md:py-16 border-t border-white/5 bg-[#010108] px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className={`${fantasyFont} text-lg md:text-xl font-bold mb-6 tracking-[0.5em] opacity-80`}>SELENE SHOP</div>
            <p className="text-white/40 text-[9px] md:text-[11px] uppercase tracking-[0.2em] mb-4">© 2026 SeleneShop. Digital Craftsmanship.</p>
            <p className="text-white/20 text-[8px] md:text-[10px] uppercase">Visual Series by Bardan1172</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
