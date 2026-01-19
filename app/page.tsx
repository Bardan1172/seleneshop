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
      size: `${Math.random() * 3 + 1}px`
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 🌌 Cosmic Nebula & Moon Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse" />
      <div className="absolute top-0 left-1/4 w-[2px] h-[100px] bg-gradient-to-b from-transparent via-purple-400 to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-3/4 w-[2px] h-[80px] bg-gradient-to-b from-transparent via-white to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '5s' }} />

      <div className="absolute top-20 right-[5%] md:right-[10%] w-48 h-48 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-white via-purple-100 to-purple-400 shadow-[0_0_120px_rgba(192,132,252,0.5)] z-10 opacity-95">
        <div className="absolute inset-0 rounded-full overflow-hidden opacity-20">
            <div className="absolute top-12 left-16 w-12 h-12 bg-black rounded-full blur-xl" />
            <div className="absolute bottom-20 right-20 w-20 h-20 bg-black rounded-full blur-2xl" />
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
          20% { transform: translateX(-600px) translateY(600px) rotate(45deg); opacity: 0; }
          100% { transform: translateX(-600px) translateY(600px) rotate(45deg); opacity: 0; }
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
    <div className="text-center mb-24">
      <span className="text-purple-500 text-xs font-black tracking-[1em] uppercase mb-4 block">{subtitle}</span>
      <h2 className="text-5xl md:text-8xl font-[1000] text-white tracking-tighter uppercase leading-none drop-shadow-2xl">
        {title}
      </h2>
      <div className="h-2 w-40 bg-gradient-to-r from-transparent via-purple-600 to-transparent mx-auto mt-8 rounded-full"></div>
    </div>
  );

  return (
    <div className="bg-[#02020a] min-h-screen text-white selection:bg-purple-500/30 font-sans scroll-smooth overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-3xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <a href="#" className="font-black text-2xl tracking-tighter italic uppercase">SELENE <span className="text-purple-500">SHOP</span></a>
          <div className="hidden md:flex gap-10 text-[11px] font-black tracking-widest uppercase opacity-70">
            <a href="#home" className="hover:text-purple-400">HOME</a>
            <a href="#tentang" className="hover:text-purple-400">TENTANG</a>
            <a href="#produk" className="hover:text-purple-400">LAYANAN</a>
            <a href="#pembayaran" className="hover:text-purple-400">BAYAR</a>
          </div>
        </div>
      </nav>

      <main className="relative pt-20">
        <MoonBackground />

        {/* HERO SECTION */}
        <section id="home" className="relative z-10 min-h-[95vh] flex flex-col items-center justify-center text-center px-6">
          <div className="px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-10">
            <span className="text-purple-400 text-[10px] font-black tracking-[0.5em] uppercase italic">Est. 2024 • Premium Creative Studio</span>
          </div>
          <h1 className="text-8xl md:text-[13rem] font-[1000] leading-none tracking-tighter mb-12 uppercase italic">
            SELENE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-300 to-purple-900 drop-shadow-[0_0_50px_rgba(168,85,247,0.3)]">SHOP</span>
          </h1>
          
          <div className="flex flex-wrap justify-center gap-5 max-w-5xl">
            {["TENTANG KAMI", "KENAPA KAMI", "LAYANAN KREATIF", "CARA ORDER", "PEMBAYARAN"].map((btn) => (
              <a 
                key={btn}
                href={`#${btn.split(' ')[0].toLowerCase()}`} 
                className="min-w-[190px] px-8 py-6 bg-white/5 border border-white/10 rounded-2xl transition-all font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:-translate-y-2 shadow-2xl backdrop-blur-md"
              >
                {btn}
              </a>
            ))}
          </div>
        </section>

        {/* OFFICIAL PARTNERS */}
        <section className="relative z-20 py-24 border-y border-white/5 bg-black/20">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-[10px] font-black tracking-[0.8em] text-white/20 mb-12 uppercase">Our Strategic Partners</p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-32">
                    {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map(p => (
                        <span key={p} className="text-3xl md:text-5xl font-black text-white/10 hover:text-purple-500/50 transition-all duration-700 tracking-tighter italic uppercase cursor-default">{p}</span>
                    ))}
                </div>
            </div>
        </section>

        {/* 1. TENTANG KAMI (RE-ADDED) */}
        <section id="tentang" className="relative z-10 py-48 px-6">
          <div className="max-w-4xl mx-auto">
            {sectionHeader("TENTANG KAMI", "WHO WE ARE")}
            <p className="text-white/40 leading-[2.2] text-xl md:text-2xl text-center font-light italic mb-20">
              "Menghidupkan imajinasi digital melalui sentuhan estetika malam. Selene Shop adalah pusat kreasi Minecraft yang berfokus pada kualitas premium dan kepuasan identitas visual Anda."
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
              <div className="p-12 rounded-[40px] bg-white/[0.02] border border-white/10 text-center">
                <h4 className="text-5xl font-black text-purple-400 mb-2">100+</h4>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-30">Projects</p>
              </div>
              <div className="p-12 rounded-[40px] bg-white/[0.02] border border-white/10 text-center">
                <h4 className="text-5xl font-black text-purple-400 mb-2">PRO</h4>
                <p className="text-[10px] font-black uppercase tracking-widest opacity-30">Quality</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. KENAPA KAMI (RE-ADDED) */}
        <section id="kenapa" className="relative z-10 py-48 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            {sectionHeader("KENAPA KAMI?", "ADVANTAGES")}
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { t: "HASIL PRESISI", d: "Setiap detail pixel dikerjakan secara teliti untuk hasil tajam.", icon: "✨" },
                { t: "FAST RESPONSE", d: "Diskusi aktif dan update progres berkala via sistem tiket.", icon: "💬" },
                { t: "CUSTOMIZABLE", d: "Setiap karya dibuat khusus berdasarkan imajinasi unik Anda.", icon: "🎨" }
              ].map((item, idx) => (
                <div key={idx} className="group p-12 rounded-[45px] bg-white/[0.02] border border-white/5 hover:border-purple-500 transition-all text-center">
                  <div className="text-6xl mb-8 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-black text-white mb-4 text-xl tracking-widest">{item.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. LAYANAN KREATIF (RE-ADDED) */}
        <section id="layanan" className="relative z-10 py-48 px-6">
          <div className="max-w-7xl mx-auto">
            {sectionHeader("LAYANAN KAMI", "OUR SERVICES")}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((s, i) => (
                <div key={i} className="group bg-white/[0.02] border border-white/10 p-12 rounded-[50px] hover:border-purple-500 transition-all duration-500 hover:-translate-y-4 shadow-2xl">
                  <h3 className="text-2xl font-black mb-2 tracking-tight uppercase italic">{s.title}</h3>
                  <p className="text-[10px] text-purple-500 font-black tracking-widest mb-10">{s.tag}</p>
                  <div className="space-y-6 mb-12">
                    {s.items.map((item, idx) => (
                      <div key={idx}><p className="font-black text-sm mb-1">{item.label}</p><p className="text-xs text-white/40">{item.desc}</p></div>
                    ))}
                  </div>
                  <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full text-center py-5 bg-white/5 group-hover:bg-white group-hover:text-black rounded-2xl font-black text-xs transition-all uppercase tracking-widest">ORDER NOW</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. CARA ORDER (RE-ADDED) */}
        <section id="cara" className="relative z-10 py-48 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            {sectionHeader("CARA ORDER", "PROCESS")}
            <div className="grid md:grid-cols-3 gap-12 text-center">
              {[
                { step: "01", t: "JOIN DISCORD", d: "Masuk ke server kami melalui link undangan resmi." },
                { step: "02", t: "CREATE TICKET", d: "Buka tiket sesuai kategori layanan yang dibutuhkan." },
                { step: "03", t: "PAYMENT", d: "Selesaikan pembayaran aman via QRIS atau E-Wallet." }
              ].map((item, idx) => (
                <div key={idx} className="relative p-12 bg-white/[0.02] border border-white/5 rounded-[50px]">
                  <span className="block text-7xl font-black text-purple-600/10 mb-6">{item.step}</span>
                  <h4 className="font-black text-white text-xl mb-4 tracking-widest uppercase">{item.t}</h4>
                  <p className="text-sm text-white/40 font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. PAYMENT GATEWAY */}
        <section id="pembayaran" className="relative z-10 py-48 px-6">
          <div className="max-w-5xl mx-auto text-center">
            {sectionHeader("PEMBAYARAN", "SECURE GATEWAY")}
            <div className="flex flex-wrap justify-center gap-6 mb-24">
              {["DANA", "OVO", "SHOPEEPAY", "QRIS", "GOPAY"].map((m) => (
                <div key={m} className="px-12 py-6 bg-white/[0.05] border border-white/10 rounded-2xl font-black text-xs tracking-[0.3em] hover:bg-purple-600 transition-all cursor-default shadow-xl">
                  {m}
                </div>
              ))}
            </div>
            <a href="https://sociabuzz.com/seleneshop/tribe" target="_blank" className="inline-flex items-center gap-10 bg-purple-600 p-12 rounded-[45px] hover:bg-purple-500 transition-all hover:scale-105 shadow-[0_0_80px_rgba(147,51,234,0.4)]">
                <span className="text-5xl">🛡️</span>
                <div className="text-left"><h4 className="text-4xl font-black uppercase tracking-tighter">Sociabuzz Gateway</h4><p className="text-xs font-bold opacity-80 uppercase tracking-widest">Instant & Secured Payment</p></div>
                <span className="text-4xl ml-4">→</span>
            </a>
          </div>
        </section>

        <footer className="relative z-10 py-32 text-center border-t border-white/5 bg-black">
           <h2 className="text-4xl font-[1000] italic mb-6 opacity-20 uppercase tracking-tighter italic">SELENE SHOP</h2>
           <p className="text-[11px] font-black tracking-[1em] text-white/10 uppercase mb-10">ESTABLISHED 2024 • ALL RIGHTS RESERVED</p>
        </footer>
      </main>
    </div>
  );
}
