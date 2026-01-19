"use client";

import { useEffect, useState } from "react";

export default function SeleneShop() {
  const [sparkles, setSparkles] = useState<{id: number, top: string, left: string, delay: string}[]>([]);

  useEffect(() => {
    setSparkles(Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`
    })));
  }, []);

  return (
    <div className="bg-[#05050a] min-h-screen text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background Stars & Moon */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-white/80 via-purple-300/40 to-transparent blur-sm opacity-50 shadow-[0_0_80px_rgba(168,85,247,0.2)]" />
        {sparkles.map(s => (
          <div key={s.id} className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse opacity-20" 
               style={{ top: s.top, left: s.left, animationDelay: s.delay }} />
        ))}
        {/* Shooting Stars */}
        <div className="absolute top-[10%] left-[-10%] w-[200px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent rotate-[35deg] animate-[shooting_10s_linear_infinite]" />
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute top-20 right-[15%] w-64 h-64 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-bold tracking-widest uppercase mb-6 animate-pulse">Premium Studio</div>
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 uppercase italic">Selene <span className="text-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">Shop</span></h1>
        <p className="max-w-2xl text-white/50 text-xs md:text-sm tracking-[0.2em] uppercase mb-10 leading-relaxed">Eksplorasi estetika malam dalam dunia digital. Kami menghadirkan karya berkualitas tinggi untuk identitas Minecraft Anda.</p>
        <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-xl">Mulai Eksplorasi</button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">Komunitas Discord</button>
        </div>
      </section>

      {/* 2. OFFICIAL PARTNERS */}
      <section className="relative z-10 py-16 border-y border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black tracking-[1em] text-purple-500/50 uppercase mb-10 italic">Official Strategic Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30">
            <span className="text-2xl font-bold tracking-tighter italic hover:opacity-100 transition-opacity">SELENE SHOP</span>
            <span className="text-2xl font-bold tracking-tighter italic hover:opacity-100 transition-opacity">HEPPYCLOUD</span>
            <span className="text-2xl font-bold tracking-tighter italic hover:opacity-100 transition-opacity">BANGBLAZE</span>
          </div>
        </div>
      </section>

      {/* 3. LAYANAN KREATIF (FULL PRICE LIST) */}
      <section id="layanan" className="relative z-10 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-purple-500 text-[10px] font-black tracking-[1em] uppercase block mb-4">Commission</span>
            <h2 className="text-5xl font-black tracking-tighter italic uppercase">Layanan Kreatif</h2>
            <div className="h-1 w-20 bg-purple-600 mx-auto mt-6 rounded-full shadow-[0_0_20px_#9333ea]"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT COLUMN: BUILDER SERVICES */}
            <div className="space-y-8">
              <div className="p-1 w-full bg-gradient-to-r from-purple-900/50 to-transparent rounded-[2.5rem]">
                <div className="bg-[#0a0a14] p-10 rounded-[2.4rem] border border-white/5 relative overflow-hidden">
                  <h3 className="text-2xl font-black mb-2 italic">🏗️ MINECRAFT BUILD PRICE</h3>
                  <p className="text-[10px] text-white/40 mb-8 leading-relaxed">Starting prices vary depending on complexity & size.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all group">
                      <span className="text-[9px] font-bold text-green-500 uppercase">🟢 BASIC</span>
                      <p className="font-bold text-sm my-1">Rp 16k - 80k</p>
                      <ul className="text-[9px] text-white/40 space-y-1 mt-3"><li>▸ 1 main structure</li><li>▸ Light detailing</li><li>▸ Short build time</li></ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all group">
                      <span className="text-[9px] font-bold text-blue-500 uppercase">🔵 ADVANCED</span>
                      <p className="font-bold text-sm my-1">Rp 80k - 320k</p>
                      <ul className="text-[9px] text-white/40 space-y-1 mt-3"><li>▸ 1–3 structures</li><li>▸ Medium terraforming</li><li>▸ Free revisions</li></ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all group">
                      <span className="text-[9px] font-bold text-purple-500 uppercase">🟣 ELITE</span>
                      <p className="font-bold text-sm my-1">Rp 480k - 1.6jt</p>
                      <ul className="text-[9px] text-white/40 space-y-1 mt-3"><li>▸ Large build area</li><li>▸ High detail density</li><li>▸ Visual-focused</li></ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all group">
                      <span className="text-[9px] font-bold text-red-500 uppercase">🔴 ORIGIN</span>
                      <p className="font-bold text-sm my-1">Rp 2.4jt++</p>
                      <ul className="text-[9px] text-white/40 space-y-1 mt-3"><li>▸ Mega builds</li><li>▸ Organic sculptures</li><li>▸ Exclusive license</li></ul>
                    </div>
                  </div>

                  <div className="mt-8 p-6 rounded-2xl bg-purple-500/5 border border-purple-500/10">
                    <h4 className="text-[10px] font-black uppercase tracking-widest mb-4">🧩 Optional Add-ons</h4>
                    <div className="grid grid-cols-2 gap-y-3 text-[10px] text-white/60">
                      <p>Terraforming: <span className="text-white">32k-80k</span></p>
                      <p>Organic: <span className="text-white">160k-960k</span></p>
                      <p>Interior: <span className="text-white">80k-400k</span></p>
                      <p>Extra Revision: <span className="text-white">48k</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5">
                <h4 className="text-[10px] font-black mb-4">⚠️ IMPORTANT NOTES</h4>
                <p className="text-[9px] text-white/30 leading-relaxed uppercase tracking-tighter italic">
                  Prices may change based on build size. All builds are protected under GTMN Studio Usage License. Reselling, redistribution, or claiming ownership of our builds is strictly prohibited.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: ART & SKINS */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2rem] bg-black border border-white/5 hover:border-purple-500 transition-all group">
                   <h3 className="text-lg font-black mb-4 group-hover:text-purple-400 transition-colors uppercase italic italic">🧸 PNGtuber</h3>
                   <div className="space-y-4">
                     <div><p className="text-xs font-bold uppercase tracking-tighter">Simple Chibi: 25k</p><p className="text-[9px] text-white/30 italic">2 ekspresi, bebas request</p></div>
                     <div><p className="text-xs font-bold uppercase tracking-tighter">Simple Normal: 30k</p><p className="text-[9px] text-white/30 italic">2 ekspresi, bebas request</p></div>
                   </div>
                </div>
                <div className="p-8 rounded-[2rem] bg-black border border-white/5 hover:border-purple-500 transition-all group">
                   <h3 className="text-lg font-black mb-4 group-hover:text-purple-400 transition-colors uppercase italic">🎨 Illustration</h3>
                   <div className="space-y-4">
                     <div><p className="text-xs font-bold uppercase tracking-tighter">Simple Shade: 25k</p></div>
                     <div><p className="text-xs font-bold uppercase tracking-tighter">Full Rendering: DM First</p><p className="text-[9px] text-white/30 italic">Detail tinggi & full render</p></div>
                   </div>
                </div>
                <div className="p-8 rounded-[2rem] bg-black border border-white/5 hover:border-purple-500 transition-all group">
                   <h3 className="text-lg font-black mb-4 group-hover:text-purple-400 transition-colors uppercase italic">🎭 Cosmetica Face</h3>
                   <div className="space-y-4">
                     <div><p className="text-xs font-bold uppercase tracking-tighter">Only Face: 30k</p></div>
                     <div><p className="text-xs font-bold uppercase tracking-tighter">Face + Rambut HD: 50k</p><p className="text-[9px] text-white/30 italic">Fokus wajah & detail tajam</p></div>
                   </div>
                </div>
                <div className="p-8 rounded-[2rem] bg-black border border-white/5 hover:border-purple-500 transition-all group">
                   <h3 className="text-lg font-black mb-4 group-hover:text-purple-400 transition-colors uppercase italic">👕 Minecraft Skin</h3>
                   <div className="space-y-4">
                     <div><p className="text-xs font-bold uppercase tracking-tighter">Simple: 10k</p></div>
                     <div><p className="text-xs font-bold uppercase tracking-tighter">Full Detail: 15k</p></div>
                   </div>
                </div>
              </div>

              {/* STICKERS */}
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-purple-900/20 to-black border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 text-4xl opacity-10 group-hover:opacity-30 group-hover:rotate-12 transition-all">😊</div>
                <h3 className="text-lg font-black mb-6 italic uppercase">🎨 Custom Sticker Chibi</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black text-purple-400 uppercase">Single Head</p>
                    <p className="text-xs font-bold">Price: 10k</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black text-purple-400 uppercase">Sticker Pack</p>
                    <p className="text-xs font-bold">6: 50k / 12: 100k</p>
                  </div>
                </div>
              </div>

              <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full py-5 bg-white text-black text-center rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-purple-600 hover:text-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                ✨ OPEN COMMISSION - ORDER NOW ✨
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW & STATS */}
      <section className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4">
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] relative overflow-hidden group">
              <span className="absolute -top-4 -right-2 text-6xl font-black text-white/[0.02] group-hover:text-purple-500/10 transition-colors">01</span>
              <h4 className="text-3xl font-black text-purple-400">100+</h4>
              <p className="text-[9px] text-white/40 uppercase font-black tracking-widest mt-2">Projects Selesai</p>
            </div>
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] relative overflow-hidden group">
              <span className="absolute -top-4 -right-2 text-6xl font-black text-white/[0.02] group-hover:text-purple-500/10 transition-colors">02</span>
              <h4 className="text-3xl font-black text-purple-400">Premium</h4>
              <p className="text-[9px] text-white/40 uppercase font-black tracking-widest mt-2">Kualitas Karya</p>
            </div>
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] md:col-span-2 flex items-center justify-between relative overflow-hidden group">
                <span className="absolute -top-4 -right-2 text-6xl font-black text-white/[0.02] group-hover:text-purple-500/10 transition-colors">03</span>
                <div className="relative z-10">
                  <h4 className="text-lg font-black italic uppercase">Workflow Utama</h4>
                  <p className="text-[9px] text-white/30 uppercase mt-1 tracking-tighter font-bold italic">Join Discord → Open Ticket → Payment Easy</p>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center relative z-10 group-hover:bg-purple-600 transition-colors">→</div>
            </div>
        </div>
      </section>

      {/* 5. PAYMENT */}
      <section className="relative z-10 py-24 px-6 text-center border-t border-white/5">
        <p className="text-[10px] font-black tracking-[1em] text-white/20 uppercase mb-8 italic">Secured Payment Gateway</p>
        <div className="flex flex-wrap justify-center gap-8 mb-16 opacity-30 text-[10px] font-bold tracking-[0.3em] uppercase">
          <span>DANA</span><span>OVO</span><span>SHOPEEPAY</span><span>QRIS</span><span>GOPAY</span>
        </div>
        <div className="max-w-xl mx-auto p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] group hover:border-purple-500/50 transition-all flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-purple-600/10 rounded-3xl flex items-center justify-center text-3xl border border-purple-500/20 shadow-inner">🛡️</div>
            <div className="text-left">
              <h4 className="text-xl font-black italic uppercase">Sociabuzz Gateway</h4>
              <p className="text-[9px] text-white/30 uppercase mt-1 italic tracking-widest">Otomatisasi pembayaran & Instant Approval</p>
            </div>
          </div>
          <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer">→</div>
        </div>
      </section>

      <footer className="relative z-10 py-12 text-center opacity-10 text-[8px] font-black tracking-[1.5em] uppercase italic">
        Selene Shop • Established 2024 • Excellence in Minecraft Digital Art
      </footer>

      <style jsx>{`
        @keyframes shooting {
          0% { transform: translateX(0) rotate(35deg); opacity: 1; }
          20% { transform: translateX(100vw) rotate(35deg); opacity: 0; }
          100% { transform: translateX(100vw) rotate(35deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
