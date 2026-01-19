"use client";

import { useEffect, useState } from "react";

export default function SeleneShop() {
  const [sparkles, setSparkles] = useState<{id: number, top: string, left: string, delay: string}[]>([]);

  useEffect(() => {
    setSparkles(Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`
    })));
  }, []);

  return (
    <div className="bg-[#05050a] min-h-screen text-white font-sans selection:bg-purple-500/30 overflow-x-hidden">
      {/* Background Stars */}
      <div className="fixed inset-0 pointer-events-none">
        {sparkles.map(s => (
          <div key={s.id} className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse opacity-20" 
               style={{ top: s.top, left: s.left, animationDelay: s.delay }} />
        ))}
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <div className="absolute top-20 right-[15%] w-64 h-64 bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-[10px] font-bold tracking-widest uppercase mb-6">Premium Studio</div>
        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mb-6 uppercase italic">Selene <span className="text-purple-400">Shop</span></h1>
        <p className="max-w-2xl text-white/50 text-xs md:text-sm tracking-[0.2em] uppercase mb-10">Eksplorasi estetika malam dalam dunia digital. Kami menghadirkan karya berkualitas tinggi untuk identitas Minecraft Anda.</p>
        <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all">Mulai Eksplorasi</button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all">Komunitas Discord</button>
        </div>
      </section>

      {/* 2. OFFICIAL PARTNERS */}
      <section className="py-16 border-y border-white/5 bg-black/40">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[10px] font-black tracking-[1em] text-purple-500/50 uppercase mb-10 italic">Official Strategic Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30">
            <span className="text-2xl font-bold tracking-tighter italic">SELENE SHOP</span>
            <span className="text-2xl font-bold tracking-tighter italic">HEPPYCLOUD</span>
            <span className="text-2xl font-bold tracking-tighter italic">BANGBLAZE</span>
          </div>
        </div>
      </section>

      {/* 3. LAYANAN KREATIF (FULL PRICE LIST) */}
      <section id="layanan" className="py-32 px-6">
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
                  <h3 className="text-2xl font-black mb-2 italic">🏗️ MINECRAFT BUILD</h3>
                  <p className="text-[10px] text-white/40 mb-8 leading-relaxed">Starting prices vary depending on complexity & size.</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-green-500/30 transition-all">
                      <span className="text-[9px] font-bold text-green-500 uppercase">🟢 BASIC</span>
                      <p className="font-bold text-sm my-1">Rp 16k - 80k</p>
                      <ul className="text-[9px] text-white/40 space-y-1 mt-3"><li>▸ Small structure</li><li>▸ Light detailing</li><li>▸ Short build time</li></ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all">
                      <span className="text-[9px] font-bold text-blue-500 uppercase">🔵 ADVANCED</span>
                      <p className="font-bold text-sm my-1">Rp 80k - 320k</p>
                      <ul className="text-[9px] text-white/40 space-y-1 mt-3"><li>▸ 1–3 structures</li><li>▸ Medium terraforming</li><li>▸ Free revisions</li></ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all">
                      <span className="text-[9px] font-bold text-purple-500 uppercase">🟣 ELITE</span>
                      <p className="font-bold text-sm my-1">Rp 480k - 1.6jt</p>
                      <ul className="text-[9px] text-white/40 space-y-1 mt-3"><li>▸ Large build area</li><li>▸ High detail density</li><li>▸ Visual-focused</li></ul>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all">
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
                  Prices may change based on build size. All builds protected under GTMN Studio Usage License. Reselling is strictly prohibited.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: ART & SKINS */}
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* PNGTUBER */}
                <div className="p-8 rounded-[2rem] bg-black border border-white/5 hover:border-purple-500 transition-all group">
                   <h3 className="text-lg font-black mb-4 group-hover:text-purple-400 transition-colors">🧸 PNGTUBER</h3>
                   <div className="space-y-4">
                     <div><p className="text-xs font-bold">Simple Chibi: 25k</p><p className="text-[9px] text-white/30">2 Ekspresi + Bebas Request</p></div>
                     <div><p className="text-xs font-bold">Simple Normal: 30k</p><p className="text-[9px] text-white/30">2 Ekspresi + Bebas Request</p></div>
                   </div>
                </div>
                {/* ILLUSTRATION */}
                <div className="p-8 rounded-[2rem] bg-black border border-white/5 hover:border-purple-500 transition-all group">
                   <h3 className="text-lg font-black mb-4 group-hover:text-purple-400 transition-colors">🎨 ART</h3>
                   <div className="space-y-4">
                     <div><p className="text-xs font-bold">Simple Shade: 25k</p></div>
                     <div><p className="text-xs font-bold">Full Rendering: DM First</p><p className="text-[9px] text-white/30">Detail tinggi & pewarnaan full.</p></div>
                   </div>
                </div>
                {/* COSMETICA */}
                <div className="p-8 rounded-[2rem] bg-black border border-white/5 hover:border-purple-500 transition-all group">
                   <h3 className="text-lg font-black mb-4 group-hover:text-purple-400 transition-colors">🎭 COSMETICA</h3>
                   <div className="space-y-4">
                     <div><p className="text-xs font-bold">Only Face: 30k</p></div>
                     <div><p className="text-xs font-bold">Face + Hair HD: 50k</p><p className="text-[9px] text-white/30">Fokus wajah & rambut halus.</p></div>
                   </div>
                </div>
                {/* SKINS */}
                <div className="p-8 rounded-[2rem] bg-black border border-white/5 hover:border-purple-500 transition-all group">
                   <h3 className="text-lg font-black mb-4 group-hover:text-purple-400 transition-colors">👕 MC SKIN</h3>
                   <div className="space-y-4">
                     <div><p className="text-xs font-bold">Simple: 10k</p></div>
                     <div><p className="text-xs font-bold">Full Detail: 15k</p></div>
                   </div>
                </div>
              </div>

              {/* STICKERS */}
              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-purple-900/20 to-black border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-4xl opacity-20 group-hover:scale-110 transition-all">😊</div>
                <h3 className="text-lg font-black mb-6 italic">🎨 CUSTOM STICKER CHIBI</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black text-purple-400 uppercase">Single</p>
                    <p className="text-xs font-bold">Bust-up: 10k</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                    <p className="text-[10px] font-black text-purple-400 uppercase">Packs</p>
                    <p className="text-xs font-bold">6 Pcs: 50k / 12 Pcs: 100k</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full py-5 bg-white text-black text-center rounded-[1.5rem] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-purple-600 hover:text-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                ✨ OPEN COMMISSION - ORDER NOW ✨
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WORKFLOW & STATS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-4">
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem]"><h4 className="text-3xl font-black text-purple-400">100+</h4><p className="text-[9px] text-white/40 uppercase font-black tracking-widest mt-2">Projects</p></div>
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem]"><h4 className="text-3xl font-black text-purple-400">Premium</h4><p className="text-[9px] text-white/40 uppercase font-black tracking-widest mt-2">Kualitas</p></div>
            <div className="p-8 bg-white/[0.03] border border-white/5 rounded-[2rem] md:col-span-2 flex items-center justify-between">
                <div><h4 className="text-lg font-black italic">WORKFLOW</h4><p className="text-[9px] text-white/30 uppercase mt-1">Join Discord → Open Ticket → Payment</p></div>
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">→</div>
            </div>
        </div>
      </section>

      {/* 5. PAYMENT */}
      <section className="py-24 px-6 text-center border-t border-white/5">
        <p className="text-[10px] font-black tracking-[1em] text-white/20 uppercase mb-8 italic">Secured Payment Gateway</p>
        <div className="flex flex-wrap justify-center gap-8 mb-16 opacity-30 text-[10px] font-bold tracking-widest uppercase">
          <span>DANA</span><span>OVO</span><span>SHOPEEPAY</span><span>QRIS</span><span>GOPAY</span>
        </div>
        <div className="max-w-xl mx-auto p-10 bg-white/[0.02] border border-white/10 rounded-[3rem] group hover:border-purple-500/50 transition-all flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-purple-600/10 rounded-3xl flex items-center justify-center text-3xl border border-purple-500/20 shadow-inner">🛡️</div>
            <div className="text-left"><h4 className="text-xl font-black italic">Sociabuzz Gateway</h4><p className="text-[9px] text-white/30 uppercase mt-1">Automatic & Instant Approval</p></div>
          </div>
          <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all cursor-pointer">→</div>
        </div>
      </section>

      <footer className="py-12 text-center opacity-10 text-[8px] font-black tracking-[1.5em] uppercase">Selene Shop • Built for Excellence</footer>
    </div>
  );
}
