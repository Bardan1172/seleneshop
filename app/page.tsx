"use client";

import { useEffect, useState, useRef } from "react";

// --- KOMPONEN BACKGROUND (STARS, METEORS, & MOON) ---
function MoonBackground() {
  const [stars, setStars] = useState<{id: number, top: string, left: string, size: string, delay: string}[]>([]);
  const [meteors, setMeteors] = useState<{id: number, top: string, left: string, delay: string, duration: string}[]>([]);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStars(Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.5}px`,
      delay: `${Math.random() * 5}s`,
    })));

    setMeteors(Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 40}%`,
      left: `${Math.random() * 80 + 20}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${1.5 + Math.random() * 2}s`,
    })));

    const handleMouseMove = (e: MouseEvent) => {
      if (!moonRef.current || window.innerWidth < 768) return;
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
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
            style={{ top: m.top, left: m.left, width: '250px', animationDelay: m.delay, animationDuration: m.duration }} />
        ))}
      </div>
      <div className="absolute inset-0 z-[2]">
        {stars.map((s) => (
          <div key={s.id} className="absolute bg-white rounded-full animate-twinkle"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }} />
        ))}
      </div>
      <div ref={moonRef} className="absolute top-24 right-[8%] md:right-[15%] transition-transform duration-700 ease-out z-[20]">
        <div className="animate-moon relative">
          <div className="absolute inset-[-40px] rounded-full bg-purple-500/10 blur-[80px]" />
          <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full bg-[#e8e8e8] shadow-[inset_-25px_-15px_60px_rgba(0,0,0,0.9)] border border-white/5 overflow-hidden">
            <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.2; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes meteor-new { 
          0% { transform: rotate(-35deg) translateX(0) scaleX(0); opacity: 0; } 
          10% { opacity: 1; scaleX(1); } 
          30% { transform: rotate(-35deg) translateX(-1000px); opacity: 0; } 
        }
        .animate-twinkle { animation: twinkle 4s infinite ease-in-out; }
        .animate-meteor-new { animation: meteor-new 10s infinite linear; }
      `}</style>
    </div>
  );
}

export default function Home() {
  const services = [
    { title: "✦ COSMETICA FACE", tag: "*MINECRAFT PREMIUM", items: [{ label: "ONLY FACE: 30K", desc: "Custom mata & mulut." }, { label: "FACE + HAIR: 50K", desc: "Shading rambut detail." }], btn: "ORDER FACE", color: "from-blue-500/10" },
    { title: "◈ MINECRAFT SKIN", tag: "CLASSIC / SLIM", items: [{ label: "SIMPLE: 10K", desc: "Minimalist shading." }, { label: "FULL DETAIL: 15K", desc: "Anime/Fantasy detail." }], btn: "ORDER SKIN", color: "from-purple-500/10" },
    { title: "✎ ART & ILLUSTRATION", tag: "HAND-DRAWN", items: [{ label: "SIMPLE SHADE: 25K", desc: "OC / Fanart." }, { label: "PNGTUBER: 30K", desc: "Model Bust-up." }], btn: "ORDER ART", color: "from-pink-500/10" },
    { title: "▣ MC PHOTOSHOOT", tag: "CINEMATIC", items: [{ label: "RENDER", desc: "Single / Group." }, { label: "CUSTOM SCENE", desc: "Background End/Nether." }], btn: "BOOKING", color: "from-indigo-500/10" },
    { title: "✉ CUSTOM STICKER", tag: "DC & WA", items: [{ label: "PER PCS: 10K", desc: "Bust-up / Head." }, { label: "PACK (6): 50K", desc: "Save more." }], btn: "ORDER STICKER", color: "from-cyan-500/10" },
    { title: "🏛 MINECRAFT BUILD", tag: "STRUCTURAL", items: [{ label: "BASIC: 15K - 75K", desc: "Small builds." }, { label: "ELITE: 450K - 1.5JT", desc: "Complex cities." }], btn: "CUSTOM BUILD", color: "from-emerald-500/10" }
  ];

  return (
    <div className="bg-[#010108] text-white selection:bg-purple-500/30 scroll-smooth min-h-screen font-sans overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 py-6 pointer-events-none">
        <div className="max-w-6xl mx-auto flex justify-between items-center pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-2 pl-6 shadow-2xl">
          <div className="font-title text-sm md:text-xl font-bold tracking-[0.3em] text-moonlight uppercase">
            SELENE<span className="text-purple-500 ml-1">✦</span>
          </div>
          <div className="hidden lg:flex gap-8">
            {["BERANDA", "TENTANG", "LAYANAN", "CARA ORDER"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '')}`} className="text-[9px] tracking-[0.3em] font-bold opacity-50 hover:opacity-100 transition-all uppercase">{item}</a>
            ))}
          </div>
          <a href="https://discord.gg/muH44HDrea" target="_blank" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-2.5 rounded-xl text-[10px] font-black tracking-widest transition-all shadow-lg uppercase">JOIN DISCORD</a>
        </div>
      </nav>

      <main className="relative">
        <MoonBackground />

        {/* 1. HERO SECTION */}
        <section id="beranda" className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6">
          <h1 className="heading-premium text-6xl sm:text-8xl md:text-9xl font-bold text-white mb-6 text-moonlight uppercase">
            SELENE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-600">SHOP</span>
          </h1>
          <p className="slogan-text text-[10px] md:text-sm text-white/40 mb-12 uppercase italic">
            Digital Craftsmanship for the Midnight Dreamers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#layanan" className="px-10 py-4 bg-white text-black rounded-full font-bold text-[9px] tracking-[0.2em] hover:scale-105 transition-transform uppercase">EXPLORE SERVICES</a>
            <a href="#caraorder" className="px-10 py-4 border border-white/20 rounded-full font-bold text-[9px] tracking-[0.2em] hover:bg-white/5 transition-all uppercase">PROCEDURE</a>
          </div>
        </section>

        {/* 2. BRAND STRIP */}
        <section className="relative z-20 py-16 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-30 hover:opacity-100 transition-opacity duration-1000">
            {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
              <span key={brand} className="font-title text-lg md:text-2xl font-bold tracking-[0.4em] cursor-default">{brand}</span>
            ))}
          </div>
        </section>

        {/* 3. TENTANG */}
        <section id="tentang" className="relative z-20 py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="slogan-text text-purple-400 text-[10px] block mb-6">THE STORY</span>
            <h2 className="font-title text-4xl md:text-7xl text-white mb-8 uppercase">TENTANG KAMI</h2>
            <p className="text-white/40 leading-relaxed text-sm md:text-lg mb-16 uppercase tracking-widest italic font-light">
              Sebuah manifestasi kreativitas yang baru saja merekah di tahun 2026. Selene Shop hadir untuk menciptakan standar keanggunan baru di semesta digital.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              {[{v: "100+", l: "SUCCESS PROJECT"}, {v: "PREMIUM", l: "QUALITY GRADE"}].map((st, i) => (
                <div key={i} className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all shadow-xl backdrop-blur-sm">
                  <h4 className="font-title text-4xl text-purple-400 font-bold mb-2 uppercase">{st.v}</h4>
                  <p className="text-[9px] text-white/30 uppercase font-black tracking-[0.3em]">{st.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. PHILOSOPHY & EXCELLENCE (BAGIAN YANG HILANG) */}
        <section className="relative z-20 py-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: "ELEGANT DESIGN", d: "Setiap karya kami memiliki sentuhan estetika premium yang berfokus pada detail terkecil." },
              { t: "FAST DELIVERY", d: "Waktu adalah aset. Kami memastikan pengerjaan tepat waktu tanpa mengurangi kualitas." },
              { t: "UNIQUE STYLE", d: "Tidak ada karya yang sama. Setiap pesanan dibuat khusus sesuai karakter pemesan." }
            ].map((p, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-10 h-[1px] bg-purple-500 mb-6 mx-auto md:mx-0" />
                <h4 className="font-title text-xl text-white mb-4 tracking-[0.2em] uppercase">{p.t}</h4>
                <p className="text-[11px] text-white/30 uppercase tracking-widest leading-relaxed italic">{p.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. LAYANAN */}
        <section id="layanan" className="relative z-20 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="slogan-text text-purple-400 text-[10px] block mb-4 uppercase">COLLECTIONS</span>
              <h2 className="font-title text-5xl md:text-8xl text-white uppercase">LAYANAN</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div key={i} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} to-transparent blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  <div className="relative h-full bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[40px] p-10 flex flex-col hover:border-white/20 transition-all duration-500 shadow-2xl">
                    <h3 className="font-title text-2xl text-white mb-2 uppercase">{s.title}</h3>
                    <p className="text-[9px] font-bold text-purple-400 tracking-widest mb-10 uppercase">{s.tag}</p>
                    <div className="space-y-8 mb-12 flex-grow">
                      {s.items.map((item, idx) => (
                        <div key={idx} className="border-l border-white/10 pl-4">
                          <p className="text-[11px] font-bold text-white/90 mb-1 uppercase tracking-wider">{item.label}</p>
                          <p className="text-[10px] text-white/30 uppercase leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                    <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full text-center py-4 bg-white/5 border border-white/10 hover:bg-white hover:text-black rounded-2xl font-bold text-[9px] transition-all uppercase tracking-[0.2em]">
                      {s.btn}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. CARA ORDER */}
        <section id="caraorder" className="relative z-20 py-32 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-title text-4xl md:text-7xl text-white mb-20 uppercase">CARA ORDER</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { s: "01", t: "JOIN COMMUNITY", d: "Masuk ke server Discord melalui link navigasi." },
                { s: "02", t: "CREATE TICKET", d: "Pilih kategori layanan dan konsultasikan kebutuhanmu." },
                { s: "03", t: "SECURE PAYMENT", d: "Lakukan pembayaran aman melalui payment gateway kami." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-12 rounded-[45px] bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all backdrop-blur-sm shadow-xl">
                  <span className="font-title text-6xl font-black text-purple-500/10 absolute top-8 right-10">{item.s}</span>
                  <h4 className="font-title font-bold text-white text-2xl mb-6 relative z-10 tracking-widest uppercase">{item.t}</h4>
                  <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-widest italic">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. PAYMENT */}
        <section className="relative z-20 py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="slogan-text text-purple-400 text-[10px] block mb-10 uppercase font-bold">PAYMENT GATEWAY</span>
            <a href="https://sociabuzz.com/seleneshop/tribe" target="_blank" className="group relative inline-flex flex-col md:flex-row items-center gap-8 bg-black/50 backdrop-blur-2xl border border-white/10 rounded-[50px] p-10 md:p-14 hover:border-purple-500/50 transition-all shadow-2xl">
              <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center text-4xl text-purple-400 group-hover:scale-110 transition-transform">✦</div>
              <div className="text-center md:text-left">
                <span className="font-title block font-bold text-white text-3xl mb-2 tracking-widest uppercase">SOCIABUZZ</span>
                <p className="text-[9px] text-white/30 font-bold tracking-[0.4em] uppercase">QRIS • E-WALLET • BANK TRANSFER</p>
              </div>
              <div className="md:ml-10 w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-purple-600 transition-all text-xl">→</div>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative z-20 py-20 border-t border-white/5 text-center px-6">
          <div className="font-title text-xl text-white/80 mb-6 tracking-[0.5em] uppercase">SELENE SHOP</div>
          <p className="text-white/40 text-[9px] uppercase tracking-[0.3em] mb-4 font-bold">© 2026 SELENE SHOP. ALL RIGHTS RESERVED.</p>
          <div className="text-[8px] text-white/20 tracking-[0.2em] uppercase font-bold">Visual Series by Bardan1172 • Powered by Selene Engine</div>
        </footer>
      </main>
    </div>
  );
}
