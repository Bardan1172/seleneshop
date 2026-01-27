"use client";

import { useEffect, useState, useRef } from "react";

// --- KOMPONEN BACKGROUND BULAN & ATMOSFER ---
function MoonBackground() {
  const [stars, setStars] = useState<{id: number, top: string, left: string, size: string, delay: string}[]>([]);
  const [meteors, setMeteors] = useState<{id: number, top: string, left: string, delay: string, duration: string}[]>([]);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStars(Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.3}px`,
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
      if (!moonRef.current) return;
      const x = (e.clientX - window.innerWidth / 2) / 45;
      const y = (e.clientY - window.innerHeight / 2) / 45;
      moonRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#010108]">
      <div className="absolute inset-0 z-[5] opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(15,10,60,0.3),transparent_70%)] animate-pulse" />
        <div className="absolute top-[20%] w-full h-[30%] bg-purple-500/5 blur-[120px] animate-cloud-drift" />
      </div>
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
      <div ref={moonRef} className="absolute top-24 right-[10%] md:right-[15%] transition-transform duration-700 ease-out z-[20]">
        <div className="absolute inset-[-40px] rounded-full bg-blue-400/10 blur-[60px]" />
        <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full bg-[#e8e8e8] shadow-[inset_-25px_-15px_60px_rgba(0,0,0,0.9)] border border-white/5 overflow-hidden">
          <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_35%,rgba(255,255,255,0.3)_0%,transparent_60%)]" />
        </div>
      </div>
      <style jsx>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.2; transform: scale(0.8); } 50% { opacity: 1; transform: scale(1.1); } }
        @keyframes cloud-drift { 0% { transform: translateX(-100%); } 100% { transform: translateX(150%); } }
        @keyframes meteor-new { 0% { transform: rotate(-35deg) translateX(0) scaleX(0); opacity: 0; } 10% { opacity: 1; scaleX(1); } 30% { transform: rotate(-35deg) translateX(-1000px); opacity: 0; } }
        .animate-twinkle { animation: twinkle 4s infinite ease-in-out; }
        .animate-cloud-drift { animation: cloud-drift 40s infinite linear; }
        .animate-meteor-new { animation: meteor-new 10s infinite linear; }
      `}</style>
    </div>
  );
}

export default function Home() {
  const fantasyFont = "font-serif italic tracking-wider uppercase";

  const services = [
    { title: "✦ COSMETICA FACE", tag: "*KHUSUS MINECRAFT PREMIUM", items: [{ label: "ONLY FACE: 30K", desc: "Custom mata, alis, dan mulut sesuai request." }, { label: "FACE + RAMBUT HD: 50K", desc: "Termasuk shading rambut detail dan ekspresi." }], btn: "ORDER FACE" },
    { title: "◈ MINECRAFT SKIN", tag: "CLASSIC / SLIM MODEL", items: [{ label: "SIMPLE: 10K", desc: "Desain minimalis dengan shading standar." }, { label: "FULL DETAIL: 15K", desc: "Shading kompleks untuk Anime atau Fantasy." }], btn: "ORDER SKIN" },
    { title: "✎ ART & ILLUSTRATION", tag: "DIGITAL HAND-DRAWN", items: [{ label: "SIMPLE SHADE: 25K", desc: "Fanart atau OC." }, { label: "CHIBI PNGTUBER: 25K", desc: "Karakter mungil untuk konten." }, { label: "PNGTUBER: 30K", desc: "Model PNGtuber (Bust-up)." }], btn: "ORDER ART" },
    { title: "▣ MC PHOTOSHOOT", tag: "CINEMATIC RENDERS", items: [{ label: "CINEMATIC RENDER", desc: "Single, Couple, atau Group." }, { label: "CUSTOM SCENE", desc: "Background Nether, End, atau build milikmu." }], btn: "BOOKING SESSION" },
    { title: "✉ CUSTOM STICKER", tag: "DISCORD & WHATSAPP", items: [{ label: "PER PCS: 10K", desc: "Bust-up atau Head Only." }, { label: "PACK (6 STICKER): 50K", desc: "Lebih hemat untuk koleksi." }], btn: "ORDER STICKER" },
    { title: "🏛 MINECRAFT BUILD", tag: "STRUCTURAL & AESTHETIC", items: [{ label: "BASIC: 15K – 75K", desc: "Small structures." }, { label: "ADVANCED: 75K – 300K", desc: "Fantasy base." }, { label: "ELITE: 450K – 1.5JT", desc: "Complex cities." }], btn: "CUSTOM BUILD" }
  ];

  return (
    <div className="bg-[#010108] text-white selection:bg-purple-500/30 scroll-smooth min-h-screen">
      
      {/* --- NEW ELEGANT NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-6 pointer-events-none">
        <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-2 pl-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Logo / Brand Name */}
          <div className={`${fantasyFont} text-sm md:text-lg font-bold tracking-[0.3em]`}>
            SELENE<span className="text-purple-500 ml-1">✦</span>
          </div>

          {/* Nav Items */}
          <div className="hidden md:flex items-center gap-1">
            {[
              { label: "BERANDA", href: "#beranda" },
              { label: "TENTANG", href: "#tentang" },
              { label: "LAYANAN", href: "#layanan" },
              { label: "CARA ORDER", href: "#caraorder" },
            ].map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="px-5 py-2 text-[10px] font-bold tracking-[0.2em] hover:bg-white/5 rounded-2xl transition-all duration-300 opacity-60 hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
             <a href="#pembayaran" className="hidden sm:block px-5 py-2 text-[10px] font-bold tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity">PEMBAYARAN</a>
             <a 
               href="https://discord.gg/muH44HDrea" 
               target="_blank"
               className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-2xl text-[10px] font-black tracking-[0.2em] transition-all duration-300 shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-purple-500/50 uppercase"
             >
               JOIN DISCORD
             </a>
          </div>
        </div>
      </nav>

      <main className="relative">
        <MoonBackground />

        {/* 1. HERO SECTION */}
        <section id="beranda" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
          <div className="animate-fade-in">
            <h1 className={`${fantasyFont} text-7xl md:text-9xl font-bold text-white mb-6 leading-tight`}>
              SELENE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-600">SHOP</span>
            </h1>
            <p className="text-white/40 max-w-2xl mx-auto text-xs md:text-base mb-12 tracking-[0.4em] uppercase font-light italic">
              Digital Craftsmanship for the Midnight Dreamers
            </p>
            <div className="flex justify-center gap-6">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-500 to-transparent" />
            </div>
          </div>
        </section>

        {/* 2. BRAND STRIP */}
        <section className="relative z-20 py-20 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-30 hover:opacity-100 transition-opacity duration-1000">
            {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
              <span key={brand} className={`${fantasyFont} text-xl md:text-2xl font-bold tracking-[0.3em] cursor-default`}>
                {brand}
              </span>
            ))}
          </div>
        </section>

        {/* 3. TENTANG */}
        <section id="tentang" className="relative z-10 py-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">THE STORY</span>
            <h2 className={`${fantasyFont} text-5xl md:text-7xl font-bold py-6 leading-tight`}>TENTANG KAMI</h2>
            <p className="text-white/40 leading-loose text-lg mb-16 uppercase tracking-widest italic font-light">
              Mewujudkan imajinasi menjadi aset digital berkualitas tinggi sejak 2024.
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

        {/* 4. LAYANAN */}
        <section id="layanan" className="relative z-10 py-32 px-6">
           <div className="max-w-7xl mx-auto">
             <div className="text-center mb-24">
               <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">COLLECTIONS</span>
               <h2 className={`${fantasyFont} text-6xl md:text-8xl font-bold py-6`}>LAYANAN</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {services.map((s, i) => (
                 <div key={i} className="group relative bg-[#05050a] border border-white/5 p-12 rounded-[50px] hover:border-purple-500/50 hover:-translate-y-3 transition-all duration-700 flex flex-col h-full overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-[60px] group-hover:bg-purple-600/20 transition-all" />
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

        {/* 5. CARA ORDER */}
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
                { s: "03", t: "SECURE PAYMENT", d: "Lakukan pembayaran aman melalui payment gateway kami." }
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

        {/* 6. PEMBAYARAN */}
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

        {/* FOOTER */}
        <footer className="relative z-10 py-24 text-center border-t border-white/5 bg-[#010108]">
          <div className={`${fantasyFont} text-xl font-bold mb-10 tracking-[0.5em]`}>SELENE SHOP</div>
          <p className="text-white/20 text-[9px] uppercase tracking-[0.6em] font-black italic mb-2">© 2024 ALL RIGHTS RESERVED</p>
          <div className="w-12 h-[1px] bg-purple-500 mx-auto opacity-50" />
        </footer>
      </main>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
      `}</style>
    </div>
  );
}
