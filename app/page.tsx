"use client";

import { useEffect, useState } from "react";

function BackgroundEffects() {
  const [sparkles, setSparkles] = useState<{id: number, top: string, left: string, delay: string, duration: string, size: string}[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 3}s`,
      size: `${Math.random() * 2 + 1}px`
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Glow Ambient */}
      <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      
      {/* Shooting Stars */}
      <div className="absolute top-0 left-1/4 w-[1px] h-[80px] bg-gradient-to-b from-transparent via-purple-400 to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/4 left-3/4 w-[1px] h-[60px] bg-gradient-to-b from-transparent via-white to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '6s' }} />

      {/* The Moon */}
      <div className="absolute top-20 right-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-white via-purple-100 to-purple-300 shadow-[0_0_80px_rgba(192,132,252,0.3)] z-10 opacity-80">
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
            <div className="absolute top-10 left-12 w-10 h-10 bg-black rounded-full blur-xl" />
        </div>
      </div>
      
      {/* Twinkling Stars */}
      {sparkles.map((s) => (
        <span key={s.id} className="absolute bg-white rounded-full animate-twinkle"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.duration }}
        />
      ))}

      <style jsx>{`
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 0; }
          10% { opacity: 1; }
          20% { transform: translateX(-500px) translateY(500px) rotate(45deg); opacity: 0; }
          100% { transform: translateX(-500px) translateY(500px) rotate(45deg); opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .animate-shooting-star { animation: shooting-star 12s infinite linear; }
        .animate-twinkle { animation: twinkle infinite ease-in-out; }
      `}</style>
    </div>
  );
}

export default function SeleneShop() {
  return (
    <div className="bg-[#02020a] min-h-screen text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      <main className="relative">
        <BackgroundEffects />

        {/* 1. HERO SECTION */}
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-bold tracking-widest uppercase mb-6 animate-bounce">Premium Studio</div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-4 uppercase italic">
            Selene <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">Shop</span>
          </h1>
          <p className="max-w-2xl text-purple-200/50 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-12 leading-loose">
            Eksplorasi estetika malam dalam dunia digital. Kami menghadirkan karya berkualitas tinggi untuk identitas Minecraft Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_20px_white]">Mulai Eksplorasi</button>
            <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-purple-600 transition-all">Komunitas Discord</button>
          </div>
        </section>

        {/* 2. OFFICIAL PARTNERS */}
        <section className="relative z-10 py-16 border-y border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[10px] font-black tracking-[1em] text-purple-500/60 uppercase mb-10 italic">Official Strategic Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 hover:opacity-100 transition-opacity duration-700">
              {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map(p => (
                <span key={p} className="text-2xl font-black tracking-tighter italic hover:text-purple-400 cursor-default">{p}</span>
              ))}
            </div>
          </div>
        </section>

        {/* 3. LAYANAN KREATIF */}
        <section id="layanan" className="relative z-10 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-purple-500 text-[10px] font-black tracking-[1em] uppercase block mb-4">Commission</span>
              <h2 className="text-5xl font-black tracking-tighter italic uppercase">Layanan Kreatif</h2>
              <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6 shadow-[0_0_15px_#a855f7]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* LEFT: BUILDER */}
              <div className="space-y-8">
                <div className="group bg-[#0a0a14] p-10 rounded-[2.5rem] border border-white/5 hover:border-purple-500/50 transition-all duration-500 shadow-2xl relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 bg-purple-600/5 rounded-full blur-3xl group-hover:bg-purple-600/10 transition-all" />
                  <h3 className="text-2xl font-black mb-2 italic">🏗️ MINECRAFT BUILD PRICE</h3>
                  <p className="text-[10px] text-white/30 mb-8 uppercase tracking-widest">Starting prices based on complexity</p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <span className="text-[9px] font-black text-green-500 uppercase tracking-tighter">🟢 BASIC (Small)</span>
                      <p className="font-black text-sm mt-1">Rp 16k - 80k</p>
                      <p className="text-[9px] text-white/40 mt-2 italic leading-tight">Houses, shops, simple structures, light detailing.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <span className="text-[9px] font-black text-blue-500 uppercase tracking-tighter">🔵 ADVANCED (Medium)</span>
                      <p className="font-black text-sm mt-1">Rp 80k - 320k</p>
                      <p className="text-[9px] text-white/40 mt-2 italic leading-tight">Fantasy bases, mini villages, med terraforming.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <span className="text-[9px] font-black text-purple-500 uppercase tracking-tighter">🟣 ELITE (Large)</span>
                      <p className="font-black text-sm mt-1">Rp 480k - 1.6jt</p>
                      <p className="text-[9px] text-white/40 mt-2 italic leading-tight">Detailed cities, major structures, high density.</p>
                    </div>
                    <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                      <span className="text-[9px] font-black text-red-500 uppercase tracking-tighter">🔴 ORIGIN (Exclusive)</span>
                      <p className="font-black text-sm mt-1">Rp 2.4jt++</p>
                      <p className="text-[9px] text-white/40 mt-2 italic leading-tight">Mega projects, organic sculptures, showcase quality.</p>
                    </div>
                  </div>

                  <div className="mt-6 p-5 rounded-2xl bg-white/[0.01] border border-white/5">
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-3 text-purple-400">🧩 Optional Add-ons</h4>
                    <div className="grid grid-cols-2 gap-3 text-[9px] text-white/50 uppercase font-bold">
                      <p>Terraforming: <span className="text-white">32k-80k</span></p>
                      <p>Organic: <span className="text-white">160k-960k</span></p>
                      <p>Interior: <span className="text-white">80k-400k</span></p>
                      <p>Extra Revision: <span className="text-white">48k</span></p>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                   <p className="text-[9px] text-white/20 font-bold uppercase tracking-[0.2em] text-center">Format: World File / Schematic • Non-Resell License Applies</p>
                </div>
              </div>

              {/* RIGHT: ART & OTHER */}
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { t: "🧸 PNGTUBER", d: "Chibi (25k) • Normal (30k)", s: "2 Ekspresi + Bebas Request" },
                    { t: "🎨 ART / ILLUSTRATION", d: "Simple Shade (25k) • Full Render", s: "Full Render: DM / Request" },
                    { t: "🎭 COSMETICA", d: "Face (30k) • Face+Hair (50k)", s: "Rambut HD detail & tajam" },
                    { t: "👕 MC SKIN", d: "Simple (10k) • Detail (15k)", s: "Custom shading premium" }
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-black border border-white/5 hover:border-purple-500/50 transition-all group">
                       <h4 className="text-sm font-black mb-2 group-hover:text-purple-400 transition-colors italic">{item.t}</h4>
                       <p className="text-xs font-bold text-white/80">{item.d}</p>
                       <p className="text-[9px] text-white/30 mt-2 italic uppercase">{item.s}</p>
                    </div>
                  ))}
                </div>

                <div className="p-8 rounded-[2rem] bg-gradient-to-br from-purple-900/20 to-black border border-white/10 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-6 text-5xl opacity-10 group-hover:opacity-30 transition-opacity">😊</div>
                  <h3 className="text-lg font-black mb-4 italic uppercase">🎨 CUSTOM STICKER CHIBI</h3>
                  <div className="flex gap-4">
                    <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-[9px] font-black text-purple-500 uppercase mb-1">Single</p>
                      <p className="text-xs font-bold">Bust-up: 10k</p>
                    </div>
                    <div className="flex-1 p-4 bg-white/5 rounded-2xl border border-white/5">
                      <p className="text-[9px] font-black text-purple-500 uppercase mb-1">Pack</p>
                      <p className="text-xs font-bold">6 Pcs: 50k / 12: 100k</p>
                    </div>
                  </div>
                </div>

                <a href="https://discord.gg/muH44HDrea" target="_blank" className="relative group block w-full py-6 bg-purple-600 rounded-[1.8rem] text-center overflow-hidden transition-all hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  <span className="relative font-black text-[11px] uppercase tracking-[0.4em]">✨ Open Commission - Order Now ✨</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. WORKFLOW - NUMBERS RE-ADDED */}
        <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "01", t: "JOIN COMMUNITY", d: "Masuk ke server discord kami melalui link undangan." },
              { n: "02", t: "SELECT CATEGORY", d: "Buka tiket pesanan sesuai dengan kategori layanan." },
              { n: "03", t: "SECURE PAYMENT", d: "Lakukan pembayaran dan kami akan mulai mengerjakan." }
            ].map((step, i) => (
              <div key={i} className="relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden group hover:bg-white/[0.04] transition-all">
                <span className="absolute -top-4 -right-2 text-8xl font-black text-white/[0.03] group-hover:text-purple-500/10 transition-colors duration-700">{step.n}</span>
                <h4 className="text-xs font-black mb-3 tracking-widest text-purple-400 relative z-10">{step.t}</h4>
                <p className="text-[11px] text-white/40 leading-relaxed italic relative z-10">{step.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PAYMENT */}
        <section className="relative z-10 py-32 px-6 text-center border-t border-white/5 bg-black/20">
          <div className="max-w-4xl mx-auto">
            <p className="text-[10px] font-black tracking-[1em] text-white/20 uppercase mb-10 italic text-center">Secured Payment Gateway</p>
            <div className="flex flex-wrap justify-center gap-10 mb-20 opacity-30 text-[10px] font-bold tracking-[0.3em]">
              {["DANA", "OVO", "SHOPEEPAY", "QRIS", "GOPAY"].map(m => <span key={m}>{m}</span>)}
            </div>
            
            <div className="p-10 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 rounded-[3rem] group hover:border-purple-500/50 transition-all flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-8">
                <div className="w-20 h-20 bg-purple-600/10 rounded-3xl flex items-center justify-center text-4xl border border-purple-500/20 shadow-[0_0_30px_rgba(168,85,247,0.1)]">🛡️</div>
                <div className="text-left">
                  <h4 className="text-xl font-black italic uppercase">Sociabuzz Gateway</h4>
                  <p className="text-[10px] text-white/30 uppercase mt-2 tracking-widest font-bold italic">Automatic & Instant Confirmation</p>
                </div>
              </div>
              <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer">
                <span className="text-2xl font-bold">→</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="relative z-10 py-16 text-center opacity-10 text-[9px] font-black tracking-[1.5em] uppercase italic">
          Selene Shop • Established 2024 • Excellence in Digital Art
        </footer>
      </main>
    </div>
  );
}
