"use client";

import { useEffect, useState } from "react";

function MoonBackground() {
  const [sparkles, setSparkles] = useState<{id: number, top: string, left: string, delay: string, duration: string, size: string}[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 80 }).map((_, i) => ({
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
      <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute top-0 left-1/4 w-[1px] h-[60px] bg-gradient-to-b from-transparent via-purple-400 to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '2s' }} />
      
      <div className="absolute top-16 right-[8%] w-32 h-32 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white via-purple-50 to-purple-300 shadow-[0_0_80px_rgba(192,132,252,0.4)] z-10">
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-10">
            <div className="absolute top-8 left-10 w-8 h-8 bg-black rounded-full blur-lg" />
        </div>
      </div>
      
      {sparkles.map((s) => (
        <span key={s.id} className="absolute bg-white rounded-full animate-twinkle"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.duration }}
        />
      ))}

      <style jsx>{`
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 0; }
          10% { opacity: 1; }
          20% { transform: translateX(-400px) translateY(400px) rotate(45deg); opacity: 0; }
          100% { transform: translateX(-400px) translateY(400px) rotate(45deg); opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .animate-shooting-star { animation: shooting-star 10s infinite linear; }
        .animate-twinkle { animation: twinkle infinite ease-in-out; }
      `}</style>
    </div>
  );
}

export default function Home() {
  const services = [
    { title: "🌙 COSMETICA FACE", tag: "*PREMIUM", items: [{ label: "FACE ONLY: 30K", desc: "Custom mata, alis, mulut." }, { label: "FACE + HAIR: 50K", desc: "HD shading." }] },
    { title: "🎮 MINECRAFT SKIN", tag: "ALL MODELS", items: [{ label: "SIMPLE: 10K", desc: "Standard shading." }, { label: "FULL DETAIL: 15K", desc: "Complex shading." }] },
    { title: "🎨 ART & ILLUSTRATION", tag: "HAND DRAWN", items: [{ label: "SIMPLE: 25K", desc: "Fanart/OC." }, { label: "PNGTUBER: 30K", desc: "Bust-up model." }] },
    { title: "📸 MC PHOTOSHOOT", tag: "RENDERS", items: [{ label: "CINEMATIC", desc: "Render group/single." }, { label: "CUSTOM SCENE", desc: "Custom background." }] },
    { title: "😆 CUSTOM STICKER", tag: "DISCORD/WA", items: [{ label: "PER PCS: 10K", desc: "Bust up." }, { label: "PACK: 50K", desc: "6 Stickers." }] },
    { title: "🏗️ MINECRAFT BUILD", tag: "STRUCTURAL", items: [{ label: "BASIC: 15K+", desc: "Small builds." }, { label: "ELITE: 450K+", desc: "Large cities." }] }
  ];

  const sectionHeader = (title: string, subtitle: string) => (
    <div className="text-center mb-16 relative group">
      <span className="text-purple-500 text-[9px] font-black tracking-[1em] uppercase mb-2 block animate-pulse">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic group-hover:scale-105 transition-transform duration-500">{title}</h2>
      <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-4 shadow-[0_0_15px_#a855f7]"></div>
    </div>
  );

  return (
    <div className="bg-[#02020a] min-h-screen text-white selection:bg-purple-500/30 font-sans scroll-smooth overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-black text-lg tracking-tighter italic uppercase">SELENE <span className="text-purple-500">SHOP</span></a>
          <div className="hidden md:flex gap-8 text-[9px] font-black tracking-[0.2em] uppercase opacity-50">
            {["HOME", "TENTANG", "LAYANAN", "BAYAR"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 hover:opacity-100 transition-all">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative pt-16">
        <MoonBackground />

        {/* HERO SECTION */}
        <section id="home" className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-8xl font-black leading-none tracking-tighter mb-4 uppercase italic">
            SELENE <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-800 drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">SHOP</span>
          </h1>
          <p className="text-purple-300/40 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-12 max-w-2xl mx-auto leading-loose animate-fade-in">
            Crafting Premium Minecraft Identities & Digital Art Excellence
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["TENTANG KAMI", "KENAPA KAMI", "LAYANAN KREATIF", "CARA ORDER", "PEMBAYARAN"].map((btn) => (
              <a key={btn} href={`#${btn.split(' ')[0].toLowerCase()}`} 
                className="px-6 py-4 bg-white/[0.03] border border-white/10 rounded-xl transition-all font-bold text-[9px] uppercase tracking-widest hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                {btn}
              </a>
            ))}
          </div>
        </section>

        {/* OFFICIAL PARTNERS - RE-ADDED & IMPROVED */}
        <section className="relative z-20 py-16 border-y border-white/5 bg-black/40">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-[10px] font-black tracking-[1em] text-purple-500/40 mb-10 uppercase italic">Official Strategic Partners</p>
                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24">
                    {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map(p => (
                        <span key={p} className="text-xl md:text-3xl font-black text-white/20 hover:text-white transition-all duration-500 tracking-tighter italic uppercase cursor-default">{p}</span>
                    ))}
                </div>
            </div>
        </section>

        {/* TENTANG KAMI - EFFECT: INNER GLOW */}
        <section id="tentang" className="relative z-10 py-24 px-6">
          <div className="max-w-4xl mx-auto">
            {sectionHeader("TENTANG KAMI", "WHO WE ARE")}
            <div className="p-10 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 shadow-2xl backdrop-blur-sm hover:border-purple-500/30 transition-all duration-700">
              <p className="text-white/50 leading-relaxed text-center font-light italic text-base md:text-xl">
                "Selene Shop adalah studio kreatif yang mendedikasikan diri untuk mempercantik pengalaman visual Anda di Minecraft. Kami percaya bahwa setiap pemain layak memiliki identitas unik yang dikerjakan dengan profesionalisme tinggi."
              </p>
            </div>
          </div>
        </section>

        {/* KENAPA KAMI - EFFECT: FLOATING CARDS */}
        <section id="kenapa" className="relative z-10 py-24 px-6">
          <div className="max-w-5xl mx-auto">
            {sectionHeader("KEUNGGULAN", "ADVANTAGES")}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "HASIL PRESISI", d: "Pixel shading mendalam untuk hasil visual tajam.", icon: "✨" },
                { t: "FAST RESPONSE", d: "Update progres harian via sistem discord.", icon: "💬" },
                { t: "CUSTOM ART", d: "Setiap pesanan dijamin original & eksklusif.", icon: "🎨" }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:-translate-y-3 hover:bg-white/[0.04] hover:border-purple-500/50 transition-all duration-500 shadow-xl">
                  <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-500">{item.icon}</div>
                  <h4 className="font-black text-white mb-3 text-xs tracking-widest uppercase">{item.t}</h4>
                  <p className="text-[11px] text-white/30 font-light leading-relaxed">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LAYANAN - EFFECT: NEON CARDS */}
        <section id="layanan" className="relative z-10 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            {sectionHeader("LAYANAN KREATIF", "OUR SERVICES")}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="group relative bg-black/60 border border-white/5 p-8 rounded-[2rem] hover:border-purple-500 transition-all duration-500 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-600/5 blur-3xl group-hover:bg-purple-600/20 transition-all"></div>
                  <h3 className="text-lg font-black mb-1 tracking-tighter uppercase italic group-hover:text-purple-400 transition-colors">{s.title}</h3>
                  <p className="text-[9px] text-purple-600 font-black tracking-widest mb-8">{s.tag}</p>
                  <div className="space-y-4 mb-8">
                    {s.items.map((item, idx) => (
                      <div key={idx}><p className="font-black text-xs mb-0.5">{item.label}</p><p className="text-[10px] text-white/30">{item.desc}</p></div>
                    ))}
                  </div>
                  <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full text-center py-3 bg-white/5 group-hover:bg-white group-hover:text-black rounded-xl font-black text-[9px] transition-all uppercase tracking-[0.2em]">ORDER NOW</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARA ORDER - EFFECT: PROGRESSIVE BOX */}
        <section id="cara" className="relative z-10 py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            {sectionHeader("CARA ORDER", "THE PROCESS")}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { s: "STEP 1", t: "JOIN COMMUNITY", d: "Masuk ke server discord kami." },
                { s: "STEP 2", t: "OPEN TICKET", d: "Pilih kategori layanan anda." },
                { s: "STEP 3", t: "DONE", d: "Pembayaran & terima hasil." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-white/20 transition-all">
                  <span className="block text-[10px] font-black text-purple-500 mb-2">{item.s}</span>
                  <h4 className="font-black text-white text-xs mb-2 tracking-widest uppercase">{item.t}</h4>
                  <p className="text-[10px] text-white/40 font-light italic">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAYMENT */}
        <section id="pembayaran" className="relative z-10 py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {sectionHeader("PEMBAYARAN", "SECURE PAYMENT")}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["DANA", "OVO", "QRIS", "GOPAY"].map((m) => (
                <div key={m} className="px-6 py-3 bg-white/[0.03] border border-white/10 rounded-xl font-black text-[9px] tracking-widest opacity-40">
                  {m}
                </div>
              ))}
            </div>
            <a href="https://sociabuzz.com/seleneshop/tribe" target="_blank" className="group relative inline-flex items-center gap-6 bg-purple-600/80 px-10 py-6 rounded-2xl hover:bg-purple-600 transition-all hover:scale-105 shadow-[0_10px_40px_rgba(147,51,234,0.3)]">
                <span className="text-2xl">🛡️</span>
                <div className="text-left"><h4 className="text-xl font-black uppercase tracking-tighter italic">Sociabuzz Gateway</h4><p className="text-[8px] font-bold opacity-70 uppercase tracking-[0.2em] mt-1">Automatic Payment Approval</p></div>
            </a>
          </div>
        </section>

        <footer className="relative z-10 py-16 text-center border-t border-white/5">
           <p className="text-[9px] font-black tracking-[1em] text-white/10 uppercase mb-4 italic">SELENE SHOP • EST 2024</p>
           <div className="h-1 w-12 bg-purple-900/30 mx-auto rounded-full"></div>
        </footer>
      </main>
    </div>
  );
}
