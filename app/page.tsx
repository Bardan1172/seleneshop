"use client";

import { useEffect, useState } from "react";

function MoonBackground() {
  const [sparkles, setSparkles] = useState<{id: number, top: string, left: string, delay: string, duration: string}[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 4}s`,
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-blue-900/10 blur-[100px] rounded-full" />
      <div className="absolute top-20 right-[10%] md:right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-100 to-purple-300 opacity-70 blur-[2px] shadow-[0_0_80px_rgba(192,132,252,0.4)]" />
      <div className="absolute top-20 right-[10%] md:right-[15%] w-40 h-40 md:w-60 md:h-60 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const services = [
    {
      title: "🌙 COSMETICA FACE",
      tag: "*KHUSUS MINECRAFT PREMIUM",
      items: [
        { label: "ONLY FACE: 30K", desc: "Custom mata, alis, dan mulut sesuai request." },
        { label: "FACE + RAMBUT HD: 50K", desc: "Termasuk shading rambut detail dan ekspresi." }
      ],
      btn: "ORDER FACE"
    },
    {
      title: "🎮 MINECRAFT SKIN",
      tag: "CLASSIC / SLIM MODEL",
      items: [
        { label: "SIMPLE: 10K", desc: "Desain minimalis dengan shading standar." },
        { label: "FULL DETAIL: 15K", desc: "Shading kompleks untuk Anime atau Fantasy." }
      ],
      btn: "ORDER SKIN"
    },
    {
      title: "🎨 ART & ILLUSTRATION",
      tag: "DIGITAL HAND-DRAWN",
      items: [
        { label: "SIMPLE SHADE: 25K", desc: "Fanart atau Original Character (OC)." },
        { label: "CHIBI PNGTUBER: 25K", desc: "Karakter mungil untuk streaming/konten." },
        { label: "PNGTUBER: 30K", desc: "Model PNGtuber standar (Bust-up)." }
      ],
      btn: "ORDER ART"
    },
    {
      title: "📸 MC PHOTOSHOOT",
      tag: "CINEMATIC RENDERS",
      items: [
        { label: "CINEMATIC RENDER", desc: "Single, Couple, atau Group (3-5 orang)." },
        { label: "CUSTOM SCENE", desc: "Background Nether, End, atau build milikmu." }
      ],
      btn: "BOOKING SESSION"
    },
    {
      title: "😆 CUSTOM STICKER",
      tag: "DISCORD & WHATSAPP",
      items: [
        { label: "PER PCS: 10K", desc: "Bust-up atau Head Only." },
        { label: "PACK (6 STICKER): 50K", desc: "Lebih hemat untuk koleksi ekspresi." }
      ],
      btn: "ORDER STICKER"
    },
    {
      title: "🏗️ MINECRAFT BUILD",
      tag: "STRUCTURAL & AESTHETIC",
      items: [
        { label: "BASIC: 15K – 75K", desc: "Small structures & simple detail." },
        { label: "ADVANCED: 75K – 300K", desc: "Fantasy base, mini villages, themes." },
        { label: "ELITE: 450K – 1.5JT", desc: "Complex cities & large castles." }
      ],
      btn: "CUSTOM BUILD"
    }
  ];

  // CSS class for Fantasy Font style
  const fantasyFont = "font-serif italic tracking-tighter";

  return (
    <div className="bg-[#02020a] min-h-screen text-white selection:bg-purple-500/30 font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#beranda" className={`${fantasyFont} text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400 font-bold text-2xl uppercase`}>SELENE SHOP 🌙</a>
          <div className="hidden md:flex gap-6 text-[10px] font-bold tracking-widest uppercase">
            <a href="#tentang" className="text-white/50 hover:text-purple-300 transition">TENTANG</a>
            <a href="#keunggulan" className="text-white/50 hover:text-purple-300 transition">KENAPA KAMI</a>
            <a href="#produk" className="text-white/50 hover:text-purple-300 transition">LAYANAN</a>
            <a href="#alur" className="text-white/50 hover:text-purple-300 transition">CARA ORDER</a>
            <a href="#pembayaran" className="text-purple-400 hover:text-purple-200 transition font-black">BAYAR</a>
          </div>
        </div>
      </nav>

      <main className="relative pt-16">
        <MoonBackground />

        {/* SECTION 1: HERO */}
        <section id="beranda" className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
          {/* Tagline removed as requested */}
          <h1 className={`${fantasyFont} text-7xl md:text-9xl font-bold text-white mb-6 tracking-tighter uppercase`}>
            SELENE <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-purple-500">SHOP</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg mb-12 leading-relaxed font-light uppercase tracking-wide">Eksplorasi estetika malam dalam dunia digital. Kami menghadirkan karya berkualitas tinggi untuk identitas Minecraft Anda.</p>
          
          {/* UNIFORM SHORTCUT BUTTONS */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 w-full max-w-3xl px-4">
            {["TENTANG", "KEUNGGULAN", "LAYANAN", "CARA ORDER", "PEMBAYARAN"].map((label) => (
              <a 
                key={label}
                href={`#${label.toLowerCase().replace(" ", "")}`} 
                className="flex-1 md:flex-none md:min-w-[160px] text-center px-6 py-4 border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 rounded-xl transition-all font-bold text-[10px] uppercase tracking-widest backdrop-blur-md"
              >
                {label}
              </a>
            ))}
          </div>
        </section>

        {/* PARTNERS */}
        <section className="relative z-20 py-16 border-y border-white/5 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
              {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
                <span key={brand} className={`${fantasyFont} text-xl md:text-2xl font-bold text-white/10 hover:text-purple-400 transition-all duration-700 cursor-default uppercase`}>
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: TENTANG KAMI */}
        <section id="tentang" className="relative z-10 py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">IDENTITY</span>
            <h2 className={`${fantasyFont} text-5xl font-bold text-white mb-6 uppercase`}>TENTANG KAMI</h2>
            <p className="text-white/50 leading-relaxed text-lg mb-12 uppercase text-sm tracking-wide">
              Terinspirasi oleh keindahan Bulan, Selene Shop mengintegrasikan seni digital dengan fungsionalitas game. Kami bukan sekadar toko, kami adalah partner kreatif Anda dalam membangun identitas digital yang ikonik.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
              <div className="p-8 rounded-[30px] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all group/card">
                <h4 className={`${fantasyFont} text-4xl text-purple-300 font-bold mb-1`}>100+</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">PROJECT SELESAI</p>
              </div>
              <div className="p-8 rounded-[30px] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all group/card">
                <h4 className={`${fantasyFont} text-4xl text-purple-300 font-bold mb-1`}>PREMIUM</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">KUALITAS KARYA</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MENGAPA MEMILIH KAMI */}
        <section id="keunggulan" className="relative z-10 py-32 px-6 bg-white/[0.01]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <span className="text-purple-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">ADVANTAGES</span>
                <h3 className={`${fantasyFont} text-5xl font-bold text-white uppercase`}>MENGAPA MEMILIH KAMI?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "HASIL PRESISI", d: "Setiap detail pixel dan shading dikerjakan secara teliti untuk hasil tajam di dalam game.", icon: "✨" },
                { t: "FAST RESPONSE", d: "Diskusi aktif dan update progres berkala melalui sistem tiket server Discord kami.", icon: "💬" },
                { t: "CUSTOMIZABLE", d: "Setiap karya dibuat khusus berdasarkan referensi dan imajinasi unik pelanggan.", icon: "🎨" }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 rounded-[35px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-500">
                  <div className="text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <h4 className={`${fantasyFont} font-bold text-white mb-3 text-xl uppercase`}>{item.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed uppercase tracking-tighter">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: LAYANAN KREATIF */}
        <section id="produk" className="relative z-10 py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20 text-center md:text-left">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">CATALOGUE</span>
              <h2 className={`${fantasyFont} text-6xl font-bold text-white uppercase`}>LAYANAN KREATIF</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div key={i} className="group relative bg-white/[0.02] border border-white/5 p-10 rounded-[40px] hover:border-purple-500/30 transition-all flex flex-col h-full overflow-hidden">
                  <div className="flex-grow">
                    <h3 className={`${fantasyFont} text-2xl font-bold text-white mb-1 uppercase`}>{s.title}</h3>
                    <p className="text-[10px] text-purple-400 font-bold mb-10 uppercase tracking-widest">{s.tag}</p>
                    <div className="space-y-8 mb-12">
                      {s.items.map((item, idx) => (
                        <div key={idx} className="relative">
                          <p className="text-[11px] font-black text-white tracking-widest mb-1 uppercase">{item.label}</p>
                          <p className="text-xs text-white/40 leading-relaxed font-light uppercase tracking-tighter">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full text-center py-4 bg-purple-500/10 border border-purple-500/20 hover:bg-white hover:text-black rounded-2xl font-bold text-xs transition-all duration-500 uppercase tracking-widest mt-auto">
                    {s.btn}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: CARA ORDER */}
        <section id="alur" className="relative z-10 py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">PROCESS</span>
              <h2 className={`${fantasyFont} text-5xl font-bold text-white uppercase`}>CARA ORDER</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", t: "JOIN DISCORD", d: "Masuk ke server kami melalui link undangan resmi Selene Shop." },
                { step: "02", t: "CREATE TICKET", d: "Buka tiket sesuai kategori layanan yang Anda butuhkan." },
                { step: "03", t: "PAYMENT", d: "Selesaikan pembayaran aman via QRIS atau E-Wallet pilihan Anda." }
              ].map((item, idx) => (
                <div key={idx} className="group relative p-10 rounded-[35px] bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.04]">
                  <span className={`${fantasyFont} text-6xl font-black text-white/[0.03] absolute top-4 right-6 uppercase`}>{item.step}</span>
                  <h4 className={`${fantasyFont} font-bold text-purple-200 text-2xl mb-4 uppercase`}>{item.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed uppercase tracking-tighter">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: SECURED PAYMENT */}
        <section id="pembayaran" className="relative z-10 py-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.4em] uppercase mb-8 block">TRANSACTION</span>
            <h2 className={`${fantasyFont} text-4xl font-bold text-white mb-12 uppercase`}>PAYMENT GATEWAY</h2>
            
            <a 
              href="https://sociabuzz.com/seleneshop/tribe" 
              target="_blank" 
              className="group relative inline-flex items-center gap-6 bg-white/[0.03] border border-white/10 rounded-[30px] p-8 hover:border-purple-500/40 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">🛡️</div>
              <div className="text-left">
                <span className={`${fantasyFont} block font-bold text-white text-2xl uppercase`}>SOCIABUZZ GATEWAY</span>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Verifikasi otomatis untuk QRIS & semua E-Wallet.</p>
              </div>
              <div className="ml-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                →
              </div>
            </a>
          </div>
        </section>

        <footer className="relative z-10 py-16 text-center border-t border-white/5 bg-black/40">
          <p className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase mb-4">SELENE SHOP • ESTABLISHED 2024</p>
          <p className="text-white/10 text-[9px] uppercase tracking-widest">Premium Digital Services for the Minecraft Community.</p>
        </footer>
      </main>
    </div>
  );
}
