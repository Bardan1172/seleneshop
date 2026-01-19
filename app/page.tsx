"use client";

import { useEffect, useState } from "react";

// --- KOMPONEN BACKGROUND (Internal untuk keamanan Build) ---
function MoonBackground() {
  const [sparkles, setSparkles] = useState<{id: number, top: string, left: string, delay: string, duration: string}[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 30 }).map((_, i) => ({
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
      <div className="absolute top-20 right-[10%] md:right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-100 to-purple-300 opacity-70 blur-[2px] animate-moon shadow-[0_0_50px_rgba(192,132,252,0.4)]" />
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
      title: "🌙 Cosmetica Face",
      tag: "*Khusus Minecraft Premium",
      items: [
        { label: "ONLY FACE: 30K", desc: "Custom mata, alis, dan mulut sesuai request." },
        { label: "FACE + RAMBUT HD: 50K", desc: "Termasuk shading rambut detail dan ekspresi." }
      ],
      btn: "Order Face"
    },
    {
      title: "🎮 Minecraft Skin",
      tag: "Classic / Slim Model",
      items: [
        { label: "SIMPLE: 10K", desc: "Desain minimalis dengan shading standar." },
        { label: "FULL DETAIL: 15K", desc: "Shading kompleks untuk Anime atau Fantasy." }
      ],
      btn: "Order Skin"
    },
    {
      title: "🎨 Art & Illustration",
      tag: "Digital Hand-Drawn",
      items: [
        { label: "SIMPLE SHADE: 25K", desc: "Fanart atau Original Character (OC)." },
        { label: "CHIBI PNGTUBER: 25K", desc: "Karakter mungil untuk streaming/konten." },
        { label: "PNGTUBER: 30K", desc: "Model PNGtuber standar (Bust-up)." }
      ],
      btn: "Order Art"
    },
    {
      title: "📸 MC Photoshoot",
      tag: "Cinematic Renders",
      items: [
        { label: "CINEMATIC RENDER", desc: "Single, Couple, atau Group (3-5 orang)." },
        { label: "CUSTOM SCENE", desc: "Background Nether, End, atau build milikmu." }
      ],
      btn: "Booking Session"
    },
    {
      title: "😆 Custom Sticker",
      tag: "Discord & WhatsApp",
      items: [
        { label: "PER PCS: 10K", desc: "Bust-up atau Head Only." },
        { label: "PACK (6 STICKER): 50K", desc: "Lebih hemat untuk koleksi ekspresi." }
      ],
      btn: "Order Sticker"
    },
    {
      title: "🏗️ Minecraft Build",
      tag: "Structural & Aesthetic",
      items: [
        { label: "BASIC: 15K – 75K", desc: "Small structures & simple detail." },
        { label: "ADVANCED: 75K – 300K", desc: "Fantasy base, mini villages, themes." },
        { label: "ELITE: 450K – 1.5JT", desc: "Complex cities & large castles." }
      ],
      btn: "Custom Build"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white selection:bg-purple-500/30 font-sans">
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-purple-200 font-bold text-lg tracking-tight">Selene Shop 🌙</span>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#beranda" className="text-purple-100/70 hover:text-purple-200 transition">Beranda</a>
            <a href="#produk" className="text-purple-100/70 hover:text-purple-200 transition">Produk</a>
            <a href="https://discord.gg/muH44HDrea" target="_blank" className="text-purple-300 hover:text-purple-200 transition">Discord</a>
          </div>
        </div>
      </nav>

      <main className="relative pt-16">
        <MoonBackground />

        {/* HERO */}
        <section id="beranda" className="relative z-10 min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-purple-200 mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">Selene Shop</h1>
          <p className="text-purple-100/80 max-w-2xl text-lg mb-10 leading-relaxed font-light">Sentuhan magis untuk karakter dan dunia Minecraft kamu dengan estetika malam yang elegan.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#produk" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition font-bold shadow-lg shadow-purple-500/20">Lihat Layanan</a>
            <a href="https://discord.gg/muH44HDrea" target="_blank" className="px-8 py-3 border border-purple-500/30 hover:bg-purple-500/10 rounded-full transition font-bold">Join Discord</a>
          </div>
        </section>

        {/* BRAND PARTNERS - ADJUSTED SIZES */}
        <section className="relative z-20 py-20 bg-black/40 backdrop-blur-sm border-y border-purple-500/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-purple-200 text-2xl md:text-3xl uppercase tracking-[0.7em] mb-12 font-black drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">Official Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <span className="text-2xl md:text-4xl font-bold text-white/20 hover:text-white transition-all duration-700 cursor-default">SELENE SHOP</span>
              <span className="text-purple-500/20 text-3xl hidden md:block">✕</span>
              <span className="text-2xl md:text-4xl font-bold text-white/20 hover:text-blue-300 transition-all duration-700 cursor-default">HEPPYCLOUD</span>
              <span className="text-purple-500/20 text-3xl hidden md:block">✕</span>
              <span className="text-2xl md:text-4xl font-bold text-white/20 hover:text-orange-400 transition-all duration-700 cursor-default">BANGBLAZE</span>
            </div>
          </div>
        </section>

        {/* TENTANG SELENE SHOP */}
        <section className="relative z-10 py-24 px-6 bg-[#05051a]/60">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-100 mb-8">Tentang Selene Shop</h2>
            <p className="text-purple-100/70 leading-relaxed text-lg">
              Kami adalah studio kreatif yang berfokus pada estetika digital Minecraft. Dengan tema "Selene" (Dewi Bulan), kami membawa nuansa malam yang tenang namun elegan ke setiap karya kami, mulai dari skin hingga struktur bangunan megah.
            </p>
          </div>
        </section>

        {/* KENAPA HARUS SELENE? */}
        <section className="relative z-10 py-24 px-6 bg-black/40">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-purple-100 mb-16">Mengapa Memilih Kami?</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-purple-900/10 border border-purple-500/10 rounded-3xl">
                <span className="text-4xl mb-4 block">✨</span>
                <h4 className="font-bold text-purple-200 mb-2">Kualitas Premium</h4>
                <p className="text-sm text-purple-100/60">Setiap detail dikerjakan dengan presisi tinggi untuk hasil yang estetik.</p>
              </div>
              <div className="p-8 bg-purple-900/10 border border-purple-500/10 rounded-3xl">
                <span className="text-4xl mb-4 block">💬</span>
                <h4 className="font-bold text-purple-200 mb-2">Konsultasi Ramah</h4>
                <p className="text-sm text-purple-100/60">Diskusi terbuka melalui Discord untuk memastikan hasil sesuai keinginan.</p>
              </div>
              <div className="p-8 bg-purple-900/10 border border-purple-500/10 rounded-3xl">
                <span className="text-4xl mb-4 block">⚡</span>
                <h4 className="font-bold text-purple-200 mb-2">Proses Transparan</h4>
                <p className="text-sm text-purple-100/60">Update berkala diberikan selama pengerjaan pesanan berlangsung.</p>
              </div>
            </div>
          </div>
        </section>

        {/* LAYANAN KREATIF - ALIGNED BUTTONS */}
        <section id="produk" className="relative z-10 py-24 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-100 tracking-tight">Layanan Kreatif</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="group bg-[#0b0b2e]/40 border border-purple-500/20 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-md flex flex-col h-full">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-purple-200 mb-1 group-hover:text-white transition-colors">{s.title}</h3>
                  <p className="text-[10px] text-purple-400/60 mb-8 italic uppercase tracking-wider">{s.tag}</p>
                  <div className="space-y-6 mb-10">
                    {s.items.map((item, idx) => (
                      <div key={idx} className="border-l border-purple-500/30 pl-4 group-hover:border-purple-500 transition-colors">
                        <p className="text-xs font-black text-purple-100 tracking-wide mb-1 uppercase">{item.label}</p>
                        <p className="text-[11px] text-purple-100/50 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full text-center py-3 bg-purple-600/80 hover:bg-purple-600 rounded-xl font-bold transition shadow-lg shadow-purple-900/20 mt-auto">
                  {s.btn}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CARA ORDER */}
        <section className="relative z-10 py-24 px-6 bg-[#05051a]/80">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-purple-100 mb-12">Cara Melakukan Order</h2>
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex-1">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <p className="font-bold text-purple-200">Join Discord</p>
                <p className="text-xs text-purple-100/50">Klik tombol Discord di atas.</p>
              </div>
              <div className="hidden md:block w-12 h-[2px] bg-purple-500/20"></div>
              <div className="flex-1">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <p className="font-bold text-purple-200">Buka Ticket</p>
                <p className="text-xs text-purple-100/50">Pilih kategori layanan.</p>
              </div>
              <div className="hidden md:block w-12 h-[2px] bg-purple-500/20"></div>
              <div className="flex-1">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <p className="font-bold text-purple-200">Diskusi & Bayar</p>
                <p className="text-xs text-purple-100/50">Selesaikan pembayaran via Sociabuzz.</p>
              </div>
            </div>
          </div>
        </section>

        {/* PEMBAYARAN - HOVER POP-UP & LINK ADDED */}
        <section className="relative z-10 py-24 px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 p-12 rounded-[40px] text-center backdrop-blur-sm shadow-[0_0_40px_rgba(168,85,247,0.1)]">
            <h2 className="text-3xl font-bold mb-8 text-purple-100">Metode Pembayaran</h2>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {["DANA", "OVO", "SHOPEEPAY", "QRIS"].map((m) => (
                <span key={m} className="px-6 py-2 bg-white/5 rounded-lg text-[10px] font-black tracking-widest border border-white/5 hover:bg-purple-500/20 hover:scale-110 transition-all cursor-default">
                  {m}
                </span>
              ))}
            </div>
            
            <a 
              href="https://sociabuzz.com/seleneshop/tribe" 
              target="_blank" 
              className="inline-flex items-center gap-4 bg-[#0b0b2e] border border-purple-500/30 rounded-2xl p-6 hover:bg-purple-600/20 hover:scale-105 transition-all group"
            >
              <span className="text-3xl">🛡️</span>
              <div className="text-left">
                <span className="block font-bold text-white text-lg">Bayar via Sociabuzz</span>
                <p className="text-[10px] text-purple-200/50">Mendukung semua E-Wallet & QRIS secara otomatis.</p>
              </div>
              <span className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </a>
          </div>
        </section>

        <footer className="relative z-10 py-12 text-center border-t border-purple-500/10 text-purple-300/30 text-[10px] font-medium tracking-[0.3em]">
          © {new Date().getFullYear()} SELENE SHOP • MOONLIT CREATIONS
        </footer>
      </main>
    </div>
  );
}
