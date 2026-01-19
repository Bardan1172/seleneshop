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
      {/* 🌌 Cosmic Nebula Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-purple-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full" />

      {/* ☄️ Shooting Stars */}
      <div className="absolute top-0 left-1/4 w-[2px] h-[100px] bg-gradient-to-b from-transparent via-purple-400 to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 left-3/4 w-[2px] h-[80px] bg-gradient-to-b from-transparent via-white to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '5s' }} />

      {/* 🌙 The Great Moon */}
      <div className="absolute top-20 right-[5%] md:right-[10%] w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-white via-purple-100 to-purple-400 shadow-[0_0_100px_rgba(192,132,252,0.6)] z-10 opacity-90 animate-pulse">
        <div className="absolute inset-0 rounded-full bg-black/5 blur-[2px] overflow-hidden">
          {/* Moon Craters */}
          <div className="absolute top-10 left-10 w-8 h-8 bg-purple-900/10 rounded-full blur-sm" />
          <div className="absolute bottom-20 right-12 w-12 h-12 bg-purple-900/10 rounded-full blur-md" />
        </div>
      </div>
      
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute bg-white rounded-full animate-ping"
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
        .animate-shooting-star { animation: shooting-star 8s infinite linear; }
      `}</style>
    </div>
  );
}

export default function Home() {
  const sectionHeader = (title: string, subtitle: string) => (
    <div className="text-center mb-20">
      <span className="text-purple-400 text-xs font-black tracking-[0.8em] uppercase mb-4 block">{subtitle}</span>
      <h2 className="text-5xl md:text-7xl font-[1000] text-white tracking-tighter uppercase drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
        {title}
      </h2>
      <div className="h-2 w-32 bg-gradient-to-r from-transparent via-purple-600 to-transparent mx-auto mt-6 rounded-full"></div>
    </div>
  );

  return (
    <div className="bg-[#02020a] min-h-screen text-white selection:bg-purple-500/30 font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
          <a href="#" className="font-black text-2xl tracking-tighter italic">SELENE <span className="text-purple-500">SHOP</span></a>
          <div className="hidden md:flex gap-10 text-xs font-black tracking-widest uppercase opacity-70">
            {["Home", "Tentang", "Layanan", "Order", "Bayar"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-all">{item}</a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative pt-20">
        <MoonBackground />

        {/* HERO SECTION */}
        <section id="home" className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
          <div className="px-6 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-8">
            <span className="text-purple-400 text-[10px] font-black tracking-[0.4em] uppercase">Premium Studio Experience</span>
          </div>
          <h1 className="text-8xl md:text-[12rem] font-[1000] leading-none tracking-tighter mb-10">
            SELENE<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-purple-800 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">SHOP</span>
          </h1>
          
          {/* UNIFORM SHORTCUT BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
            {["Tentang Kami", "Kenapa Kami", "Layanan Kreatif", "Cara Order", "Payment Gateway"].map((btn) => (
              <a 
                key={btn}
                href={`#${btn.split(' ')[0].toLowerCase()}`} 
                className="min-w-[180px] px-8 py-5 bg-white/5 border border-white/10 rounded-2xl transition-all font-black text-[11px] uppercase tracking-widest hover:bg-white hover:text-black hover:scale-105 active:scale-95 shadow-2xl backdrop-blur-md"
              >
                {btn}
              </a>
            ))}
          </div>
        </section>

        {/* REIMAGINED OFFICIAL PARTNERS */}
        <section className="relative z-20 py-24 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
              <span className="text-white/20 font-black tracking-[0.5em] text-[10px] uppercase border-r border-white/10 pr-12 hidden md:block">Strategic Partners</span>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
                {["HEPPYCLOUD", "SELENE SHOP", "BANGBLAZE"].map((brand) => (
                  <div key={brand} className="group cursor-crosshair">
                    <span className="text-2xl md:text-4xl font-black text-white/20 group-hover:text-purple-500 transition-all duration-500 tracking-tighter italic uppercase">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PAYMENT GATEWAY SECTION */}
        <section id="payment" className="relative z-10 py-40 px-6">
          <div className="max-w-5xl mx-auto">
            {sectionHeader("Metode Pembayaran", "Secure Transaction")}
            
            {/* ENHANCED PAYMENT PILLS */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {["DANA", "OVO", "SHOPEEPAY", "QRIS", "GOPAY"].map((method) => (
                <div key={method} className="px-10 py-4 bg-white/[0.03] border border-white/5 rounded-xl shadow-xl">
                  <span className="text-xs font-black tracking-[0.3em] text-white group-hover:text-purple-400">{method}</span>
                </div>
              ))}
            </div>

            <div className="max-w-2xl mx-auto">
              <a 
                href="https://sociabuzz.com/seleneshop/tribe" 
                target="_blank" 
                className="group flex items-center justify-between bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 rounded-[35px] p-10 hover:border-purple-400 transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="flex items-center gap-8">
                  <div className="text-5xl group-hover:scale-110 transition-transform">🛡️</div>
                  <div className="text-left">
                    <h4 className="text-3xl font-black uppercase tracking-tighter">Sociabuzz Gateway</h4>
                    <p className="text-[10px] text-purple-400 font-bold uppercase tracking-[0.2em] mt-1">Otomatisasi Pembayaran QRIS & E-Wallet</p>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center font-black text-2xl group-hover:translate-x-2 transition-all">→</div>
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative z-10 py-20 text-center border-t border-white/5 bg-black">
           <h2 className="text-3xl font-black italic mb-4 opacity-50">SELENE <span className="text-purple-800">SHOP</span></h2>
           <p className="text-[10px] font-bold tracking-[0.5em] text-white/20 uppercase">Building Digital Identities Since 2024</p>
        </footer>
      </main>
    </div>
  );
}
