"use client";

import { useEffect, useState, useRef } from "react";

// --- KOMPONEN BACKGROUND BULAN & ATMOSFER ---
function MoonBackground() {
  const [stars, setStars] = useState<{id: number, top: string, left: string, size: string, delay: string}[]>([]);
  const [meteors, setMeteors] = useState<{id: number, top: string, left: string, delay: string, duration: string}[]>([]);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate Bintang
    setStars(Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.3}px`,
      delay: `${Math.random() * 5}s`,
    })));

    // Generate Meteor
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
      {/* Kabut Kosmik */}
      <div className="absolute inset-0 z-[5] opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(15,10,60,0.3),transparent_70%)] animate-pulse" />
        <div className="absolute top-[20%] w-full h-[30%] bg-purple-500/5 blur-[120px] animate-cloud-drift" />
      </div>

      {/* Meteor */}
      <div className="absolute inset-0 z-[10]">
        {meteors.map((m) => (
          <div key={m.id} className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-meteor-new"
            style={{ top: m.top, left: m.left, width: '250px', animationDelay: m.delay, animationDuration: m.duration }} />
        ))}
      </div>

      {/* Bintang Berkelip */}
      <div className="absolute inset-0 z-[2]">
        {stars.map((s) => (
          <div key={s.id} className="absolute bg-white rounded-full animate-twinkle"
            style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }} />
        ))}
      </div>

      {/* Bulan Parallax */}
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

// --- KOMPONEN UTAMA ---
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
    <div className="bg-[#010108] text-white selection:bg-purple-500/30 scroll-smooth">
      <main className="relative">
        <MoonBackground />

        {/* 1. HERO / BERANDA */}
        <section id="beranda" className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24">
          <h1 className={`${fantasyFont} text-7xl md:text-9xl font-bold text-white mb-10 leading-[1.3] py-8`}>
            SELENE <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 via-purple-300 to-purple-600 drop-shadow-2xl">SHOP</span>
          </h1>
          
          <p className="text-white/60 max-w-2xl text-sm md:text-lg mb-14 tracking-[0.3em] uppercase font-light leading-relaxed italic">
            Eksplorasi estetika malam dalam dunia digital.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl px-4">
            {[
              { label: "TENTANG", href: "#tentang" },
              { label: "CARA ORDER", href: "#caraorder" },
              { label: "PEMBAYARAN", href: "#pembayaran" },
              { label: "DISCORD", href: "https://discord.gg/muH44HDrea", isExternal: true },
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                target={item.isExternal ? "_blank" : "_self"}
                rel={item.isExternal ? "noopener noreferrer" : ""}
                className="w-full text-center px-4 py-5 border border-white/10 bg-white/5 hover:border-purple-500/50 hover:bg-purple-500/10 rounded-2xl transition-all duration-300 font-bold text-[10px] uppercase tracking-[0.2em] backdrop-blur-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </section>

        {/* 2. BRAND STRIP */}
        <section className="relative z-20 py-20 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-30 hover:opacity-100 transition-opacity duration-1000">
            {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
              <span key={brand} className={`${fantasyFont} text-xl md:text-2xl font-bold text-white tracking-[0.3em] hover:text-purple-400 transition-all cursor-default`}>
                {brand}
              </span>
            ))}
          </div>
        </section>

        {/* 3. TENTANG */}
        <section id="tentang" className="relative z-10 py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">IDENTITY</span>
            <h2 className={`${fantasyFont} text-5xl md:text-6xl font-bold py-6 leading-tight`}>TENTANG KAMI</h2>
            <p className="text-white/50 leading-loose text-lg mb-16 uppercase tracking-widest italic text-center">
              Kami adalah partner kreatif dalam membangun identitas digital yang ikonik.
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-xl mx-auto">
              {[{v: "100+", l: "PROJECT"}, {v: "PREMIUM", l: "QUALITY"}].map((st, i) => (
                <div key={i} className="p-10 rounded-[40px] bg-white/[0.03] border border-white/10 hover:border-purple-500/50 transition-all group">
                  <h4 className={`${fantasyFont} text-4xl text-purple-300 font-bold mb-2`}>{st.v}</h4>
                  <p className="text-[10px] text-white/40 uppercase font-black tracking-widest">{st.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. KATALOG LAYANAN */}
        <section id="layanan" className="relative z-10 py-32 px-6">
           <div className="max-w-7xl mx-auto">
             <div className="text-center mb-24">
               <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">CATALOGUE</span>
               <h2 className={`${fantasyFont} text-6xl md:text-7xl font-bold py-6`}>LAYANAN KREATIF</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
               {services.map((s, i) => (
                 <div key={i} className="group relative bg-white/[0.02] border border-white/5 p-12 rounded-[50px] hover:border-purple-500/50 hover:-translate-y-3 transition-all duration-500 flex flex-col h-full">
                   <div className="flex-grow z-10">
                     <h3 className={`${fantasyFont} text-2xl font-bold text-white mb-2`}>{s.title}</h3>
                     <p className="text-[10px] text-purple-400 font-bold mb-10 tracking-[0.2em]">{s.tag}</p>
                     <div className="space-y-10 mb-12">
                       {s.items.map((item, idx) => (
                         <div key={idx}>
                           <p className="text-[12px] font-black text-white/90 tracking-[0.15em] mb-2 uppercase">{item.label}</p>
                           <p className="text-[11px] text-white/30 leading-relaxed uppercase tracking-tighter">{item.desc}</p>
                         </div>
                       ))}
                     </div>
                   </div>
                   <a href="https://discord.gg/muH44HDrea" target="_blank" className="relative z-10 block w-full text-center py-5 bg-white/5 border border-white/10 hover:bg-white hover:text-black rounded-2xl font-bold text-xs transition-all duration-500 uppercase tracking-[0.2em] mt-auto">
                     {s.btn}
                   </a>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* 5. CARA ORDER */}
        <section id="caraorder" className="relative z-10 py-32 px-6 bg-white/[0.01]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">PROCESS</span>
              <h2 className={`${fantasyFont} text-5xl md:text-6xl font-bold py-6`}>CARA ORDER</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { s: "I", t: "JOIN DISCORD", d: "Masuk ke server resmi kami melalui tombol navigasi." },
                { s: "II", t: "CREATE TICKET", d: "Buka tiket di channel order sesuai kategori layanan." },
                { s: "III", t: "PAYMENT", d: "Selesaikan pembayaran via QRIS atau E-Wallet yang tersedia." }
              ].map((item, idx) => (
                <div key={idx} className="group relative p-12 rounded-[45px] bg-white/[0.02] border border-white/5 hover:border-purple-500/40 transition-all duration-500">
                  <span className={`${fantasyFont} text-7xl font-black text-white/[0.04] absolute top-6 right-8`}>{item.s}</span>
                  <h4 className={`${fantasyFont} font-bold text-purple-200 text-2xl mb-6 relative z-10`}>{item.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed uppercase tracking-tighter italic">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. PEMBAYARAN */}
        <section id="pembayaran" className="relative z-10 py-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-10 block uppercase">TRANSACTION</span>
            <h2 className={`${fantasyFont} text-4xl md:text-5xl font-bold py-6`}>PAYMENT GATEWAY</h2>
            <a href="https://sociabuzz.com/seleneshop/tribe" target="_blank" className="group relative inline-flex flex-col md:flex-row items-center gap-8 bg-white/[0.03] border border-white/10 rounded-[40px] p-10 md:p-14 hover:border-purple-500/50 hover:bg-white/[0.06] transition-all duration-700">
              <div className="w-20 h-20 bg-purple-500/10 rounded-3xl flex items-center justify-center text-4xl text-purple-200">⧓</div>
              <div className="text-center md:text-left uppercase">
                <span className={`${fantasyFont} block font-bold text-white text-3xl mb-2`}>SOCIABUZZ GATEWAY</span>
                <p className="text-[11px] text-white/40 font-bold tracking-[0.3em]">Verifikasi otomatis QRIS & E-Wallet.</p>
              </div>
              <div className="md:ml-10 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 text-xl">→</div>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative z-10 py-20 text-center border-t border-white/5 bg-black/60">
          <p className={`${fantasyFont} text-white/30 text-[12px] tracking-[0.8em] mb-6`}>SELENE SHOP • 2024</p>
          <p className="text-white/10 text-[10px] uppercase tracking-[0.4em] font-black italic">Premium Digital Services for the Minecraft Community.</p>
        </footer>
      </main>
    </div>
  );
}
