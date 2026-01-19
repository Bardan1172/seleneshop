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
      size: `${Math.random() * 2 + 1}px` // Mengecilkan bintang sedikit
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-[-5%] left-[-5%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" />
      
      {/* 🌠 Shooting Stars */}
      <div className="absolute top-0 left-1/4 w-[1px] h-[60px] bg-gradient-to-b from-transparent via-purple-400 to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/4 left-3/4 w-[1px] h-[50px] bg-gradient-to-b from-transparent via-white to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '5s' }} />

      {/* 🌙 The Moon - Ukuran lebih proporsional */}
      <div className="absolute top-16 right-[8%] w-32 h-32 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white via-purple-50 to-purple-300 shadow-[0_0_80px_rgba(192,132,252,0.4)] z-10 opacity-90">
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-10">
            <div className="absolute top-8 left-10 w-8 h-8 bg-black rounded-full blur-lg" />
            <div className="absolute bottom-12 right-12 w-12 h-12 bg-black rounded-full blur-xl" />
        </div>
      </div>
      
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute bg-white rounded-full animate-twinkle"
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
    { title: "🌙 COSMETICA FACE", tag: "*PREMIUM ONLY", items: [{ label: "FACE ONLY: 30K", desc: "Custom mata, alis, mulut." }, { label: "FACE + HAIR: 50K", desc: "HD shading & detail." }], btn: "ORDER FACE" },
    { title: "🎮 MINECRAFT SKIN", tag: "ALL MODELS", items: [{ label: "SIMPLE: 10K", desc: "Standard shading." }, { label: "FULL DETAIL: 15K", desc: "Complex shading." }], btn: "ORDER SKIN" },
    { title: "🎨 ART & ILLUSTRATION", tag: "HAND DRAWN", items: [{ label: "SIMPLE: 25K", desc: "Fanart/OC." }, { label: "PNGTUBER: 30K", desc: "Bust-up model." }], btn: "ORDER ART" },
    { title: "📸 MC PHOTOSHOOT", tag: "RENDERS", items: [{ label: "CINEMATIC", desc: "Render group/single." }, { label: "CUSTOM SCENE", desc: "Custom background." }], btn: "ORDER RENDER" },
    { title: "😆 CUSTOM STICKER", tag: "DISCORD/WA", items: [{ label: "PER PCS: 10K", desc: "Bust up." }, { label: "PACK: 50K", desc: "6 Stickers." }], btn: "ORDER STICKER" },
    { title: "🏗️ MINECRAFT BUILD", tag: "STRUCTURAL", items: [{ label: "BASIC: 15K+", desc: "Small builds." }, { label: "ELITE: 450K+", desc: "Large cities." }], btn: "ORDER BUILD" }
  ];

  const sectionHeader = (title: string, subtitle: string) => (
    <div className="text-center mb-16">
      <span className="text-purple-500 text-[10px] font-black tracking-[0.6em] uppercase mb-2 block">{subtitle}</span>
      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase leading-tight drop-shadow-lg">
        {title}
      </h2>
      <div className="h-1 w-20 bg-purple-600 mx-auto mt-4 rounded-full opacity-50"></div>
    </div>
  );

  return (
    <div className="bg-[#02020a] min-h-screen text-white selection:bg-purple-500/30 font-sans scroll-smooth overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-black text-xl tracking-tighter italic uppercase">SELENE <span className="text-purple-500">SHOP</span></a>
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-widest uppercase opacity-60">
            <a href="#home" className="hover:text-purple-400 transition-colors">HOME</a>
            <a href="#tentang" className="hover:text-purple-400 transition-colors">TENTANG</a>
            <a href="#layanan" className="hover:text-purple-400 transition-colors">LAYANAN</a>
            <a href="#pembayaran" className="hover:text-purple-400 transition-colors">BAYAR</a>
          </div>
        </div>
      </nav>

      <main className="relative pt-16">
        <MoonBackground />

        {/* HERO SECTION */}
        <section id="home" className="relative z-10 min-h-[85vh] flex flex-col items-center justify-center text-center px-6">
          <div className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-purple-400 text-[9px] font-black tracking-[0.4em] uppercase">Premium Creative Studio</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-10 uppercase italic">
            SELENE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-700 drop-shadow-xl">SHOP</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
            {["TENTANG KAMI", "KENAPA KAMI", "LAYANAN KREATIF", "CARA ORDER", "PEMBAYARAN"].map((btn) => (
              <a 
                key={btn}
                href={`#${btn.split(' ')[0].toLowerCase()}`} 
                className="min-w-[150px] px-6 py-4 bg-white/5 border border-white/10 rounded-xl transition-all font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black shadow-lg backdrop-blur-md"
              >
                {btn}
              </a>
            ))}
          </div>
        </section>

        {/* PARTNERS */}
        <section className="relative z-20 py-12 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
                    {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map(p => (
                        <span key={p} className="text-xl md:text-2xl font-black text-white/10 hover:text-purple-500/30 transition-all tracking-tighter italic uppercase cursor-default">{p}</span>
                    ))}
                </div>
            </div>
        </section>

        {/* TENTANG KAMI */}
        <section id="tentang" className="relative z-10 py-24 px-6">
          <div className="max-w-3xl mx-auto">
            {sectionHeader("TENTANG KAMI", "WHO WE ARE")}
            <p className="text-white/50 leading-relaxed text-base md:text-lg text-center font-light italic mb-12">
              Terinspirasi dari estetika malam, kami membangun identitas Minecraft Anda dengan kualitas visual premium.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <h4 className="text-3xl font-black text-purple-400">100+</h4>
                <p className="text-[9px] font-black uppercase opacity-30">Projects</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center">
                <h4 className="text-3xl font-black text-purple-400">PRO</h4>
                <p className="text-[9px] font-black uppercase opacity-30">Quality</p>
              </div>
            </div>
          </div>
        </section>

        {/* KENAPA KAMI */}
        <section id="kenapa" className="relative z-10 py-24 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            {sectionHeader("KENAPA KAMI?", "ADVANTAGES")}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "PRESISI", d: "Setiap detail pixel dikerjakan secara teliti.", icon: "✨" },
                { t: "RESPONSIF", d: "Update progres berkala via sistem tiket.", icon: "💬" },
                { t: "CUSTOM", d: "Dibuat khusus berdasarkan imajinasi Anda.", icon: "🎨" }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/50 transition-all text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h4 className="font-black text-white mb-2 text-sm tracking-widest">{item.t}</h4>
                  <p className="text-xs text-white/40 font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LAYANAN */}
        <section id="layanan" className="relative z-10 py-24 px-6">
          <div className="max-w-6xl mx-auto">
            {sectionHeader("LAYANAN KAMI", "OUR SERVICES")}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((s, i) => (
                <div key={i} className="group bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-purple-500/50 transition-all shadow-xl">
                  <h3 className="text-lg font-black mb-1 tracking-tight uppercase italic">{s.title}</h3>
                  <p className="text-[9px] text-purple-500 font-black tracking-widest mb-6">{s.tag}</p>
                  <div className="space-y-4 mb-8">
                    {s.items.map((item, idx) => (
                      <div key={idx}><p className="font-black text-xs mb-1">{item.label}</p><p className="text-[10px] text-white/40">{item.desc}</p></div>
                    ))}
                  </div>
                  <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full text-center py-3 bg-white/5 group-hover:bg-white group-hover:text-black rounded-xl font-black text-[10px] transition-all uppercase tracking-widest">ORDER</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARA ORDER */}
        <section id="cara" className="relative z-10 py-24 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-4xl mx-auto text-center">
            {sectionHeader("CARA ORDER", "PROCESS")}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", t: "JOIN", d: "Masuk ke server Discord resmi kami." },
                { step: "02", t: "TICKET", d: "Buka tiket sesuai kategori layanan." },
                { step: "03", t: "PAY", d: "Bayar aman via QRIS/E-Wallet." }
              ].map((item, idx) => (
                <div key={idx} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
                  <span className="block text-4xl font-black text-purple-600/10 mb-2">{item.step}</span>
                  <h4 className="font-black text-white text-sm mb-2 tracking-widest">{item.t}</h4>
                  <p className="text-[11px] text-white/40 font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAYMENT */}
        <section id="pembayaran" className="relative z-10 py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {sectionHeader("PEMBAYARAN", "SECURE GATEWAY")}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {["DANA", "OVO", "SHOPEEPAY", "QRIS", "GOPAY"].map((m) => (
                <div key={m} className="px-8 py-3 bg-white/[0.03] border border-white/10 rounded-xl font-black text-[9px] tracking-[0.2em] shadow-md">
                  {m}
                </div>
              ))}
            </div>
            <a href="https://sociabuzz.com/seleneshop/tribe" target="_blank" className="inline-flex items-center gap-6 bg-purple-600 px-8 py-6 rounded-2xl hover:bg-purple-500 transition-all hover:scale-105 shadow-xl">
                <span className="text-3xl">🛡️</span>
                <div className="text-left"><h4 className="text-xl font-black uppercase tracking-tighter italic">Sociabuzz Gateway</h4><p className="text-[9px] font-bold opacity-80 uppercase tracking-widest">Instant & Secured Payment</p></div>
                <span className="text-xl ml-2">→</span>
            </a>
          </div>
        </section>

        <footer className="relative z-10 py-16 text-center border-t border-white/5 bg-black">
           <h2 className="text-2xl font-black italic mb-3 opacity-20 uppercase tracking-tighter">SELENE SHOP</h2>
           <p className="text-[9px] font-black tracking-[0.5em] text-white/10 uppercase mb-4">ESTABLISHED 2024 • ALL RIGHTS RESERVED</p>
        </footer>
      </main>
    </div>
  );
}
