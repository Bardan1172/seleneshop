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
    <div className="bg-[#02020a] min-h-screen text-white selection:bg-purple-500/30 font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#beranda" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400 font-bold text-xl tracking-tight">Selene Shop 🌙</a>
          <div className="hidden md:flex gap-6 text-[10px] font-bold tracking-widest uppercase">
            <a href="#tentang" className="text-white/50 hover:text-purple-300 transition">Tentang</a>
            <a href="#keunggulan" className="text-white/50 hover:text-purple-300 transition">Kenapa Kami</a>
            <a href="#produk" className="text-white/50 hover:text-purple-300 transition">Layanan</a>
            <a href="#alur" className="text-white/50 hover:text-purple-300 transition">Cara Order</a>
            <a href="#pembayaran" className="text-purple-400 hover:text-purple-200 transition font-black">Bayar</a>
          </div>
        </div>
      </nav>

      <main className="relative pt-16">
        <MoonBackground />

        {/* SECTION 1: HERO */}
        <section id="beranda" className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-8 tracking-tighter">
            Selene <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-500">Shop</span>
          </h1>
          <p className="text-white/60 max-w-2xl text-lg md:text-xl mb-14 leading-relaxed font-light italic">"Eksplorasi estetika malam dalam dunia digital."</p>
          
          <div className="flex flex-wrap justify-center gap-5 max-w-4xl">
            <a href="#tentang" className="px-8 py-4 border border-white/10 hover:border-purple-500/40 hover:bg-white/5 rounded-full transition-all font-bold text-xs uppercase tracking-[0.2em] backdrop-blur-md">Tentang</a>
            <a href="#keunggulan" className="px-8 py-4 border border-white/10 hover:border-purple-500/40 hover:bg-white/5 rounded-full transition-all font-bold text-xs uppercase tracking-[0.2em] backdrop-blur-md">Kenapa Kami</a>
            <a href="#produk" className="px-8 py-4 bg-white text-black hover:bg-purple-200 rounded-full transition-all font-bold text-xs uppercase tracking-[0.2em] shadow-[0_10px_40px_rgba(255,255,255,0.15)]">Layanan</a>
            <a href="#alur" className="px-8 py-4 border border-white/10 hover:border-purple-500/40 hover:bg-white/5 rounded-full transition-all font-bold text-xs uppercase tracking-[0.2em] backdrop-blur-md">Cara Order</a>
            <a href="#pembayaran" className="px-8 py-4 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 rounded-full transition-all font-bold text-xs uppercase tracking-[0.2em] backdrop-blur-md text-purple-200">Payment Gateway</a>
          </div>
        </section>

        {/* PARTNERS */}
        <section className="relative z-20 py-12 border-y border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-24 opacity-30">
              {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
                <span key={brand} className="text-sm md:text-base font-bold text-white tracking-[0.5em] hover:text-purple-400 transition-all duration-700 cursor-default">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: TENTANG KAMI */}
        <section id="tentang" className="relative z-10 py-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.6em] uppercase block mb-2">Heritage</span>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-10 tracking-tight">Tentang Kami</h2>
            <p className="text-white/40 leading-[2] text-lg md:text-xl mb-16 font-light max-w-3xl mx-auto">
              Terinspirasi oleh keindahan Bulan, Selene Shop mengintegrasikan seni digital dengan fungsionalitas game. Kami adalah partner kreatif Anda dalam membangun identitas digital yang ikonik.
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
              <div className="group">
                <h4 className="text-4xl text-white font-light mb-2">100<span className="text-purple-500">+</span></h4>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-bold">Project Selesai</p>
              </div>
              <div className="group">
                <h4 className="text-4xl text-white font-light mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-500 uppercase">Premium</h4>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.4em] font-bold">Kualitas Karya</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: MENGAPA MEMILIH KAMI */}
        <section id="keunggulan" className="relative z-10 py-40 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
                <span className="text-purple-400 text-[10px] font-bold tracking-[0.6em] uppercase mb-4 block">Values</span>
                <h3 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Kenapa Kami?</h3>
                <div className="mt-6 h-1 w-20 bg-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { t: "Hasil Presisi", d: "Setiap detail pixel dan shading dikerjakan secara teliti untuk hasil tajam.", icon: "✨" },
                { t: "Fast Response", d: "Diskusi aktif dan update progres berkala melalui sistem tiket Discord.", icon: "💬" },
                { t: "Customizable", d: "Setiap karya dibuat khusus berdasarkan imajinasi unik Anda.", icon: "🎨" }
              ].map((item, idx) => (
                <div key={idx} className="group text-center">
                  <div className="text-4xl mb-8 opacity-50 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                  <h4 className="font-bold text-white mb-4 text-xl tracking-wide uppercase">{item.t}</h4>
                  <div className="w-10 h-px bg-white/10 mx-auto mb-6 group-hover:w-20 group-hover:bg-purple-500 transition-all"></div>
                  <p className="text-sm text-white/40 leading-relaxed font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: LAYANAN KREATIF */}
        <section id="produk" className="relative z-10 py-40 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.6em] uppercase mb-4 block">Collections</span>
              <h2 className="text-6xl md:text-7xl font-bold text-white tracking-tighter">Layanan Kreatif</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((s, i) => (
                <div key={i} className="group relative bg-white/[0.02] border border-white/5 p-12 rounded-[50px] hover:border-purple-500/30 transition-all duration-700 flex flex-col h-full shadow-2xl">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2">{s.title}</h3>
                    <p className="text-[9px] text-purple-400 font-bold mb-12 uppercase tracking-[0.3em]">{s.tag}</p>
                    <div className="space-y-8 mb-12">
                      {s.items.map((item, idx) => (
                        <div key={idx}>
                          <p className="text-[10px] font-bold text-white tracking-widest mb-2 uppercase">{item.label}</p>
                          <p className="text-xs text-white/40 leading-relaxed font-light">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full text-center py-5 bg-white/5 hover:bg-white hover:text-black rounded-3xl font-bold text-[10px] transition-all duration-500 uppercase tracking-[0.4em] mt-auto">
                    {s.btn}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: CARA ORDER */}
        <section id="alur" className="relative z-10 py-40 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-24">
              <span className="text-purple-400 text-[10px] font-bold tracking-[0.6em] uppercase mb-4 block">Roadmap</span>
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">Cara Order</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                { step: "I", t: "Join Discord", d: "Masuk ke server kami melalui link undangan resmi Selene Shop." },
                { step: "II", t: "Create Ticket", d: "Buka tiket sesuai kategori layanan yang Anda butuhkan." },
                { step: "III", t: "Payment", d: "Selesaikan pembayaran aman via QRIS atau E-Wallet pilihan Anda." }
              ].map((item, idx) => (
                <div key={idx} className="relative group text-center">
                  <span className="text-8xl font-black text-white/[0.02] absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-purple-500/5 transition-colors">{item.step}</span>
                  <h4 className="relative z-10 font-bold text-white text-xl mb-6 tracking-widest uppercase">{item.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: SECURED PAYMENT */}
        <section id="pembayaran" className="relative z-10 py-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.6em] uppercase mb-8 block">Security</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">Payment Gateway</h2>
            
            <div className="flex flex-wrap justify-center gap-12 mb-24 opacity-20">
              {["DANA", "OVO", "SHOPEEPAY", "QRIS", "GOPAY"].map((m) => (
                <span key={m} className="text-[10px] font-bold tracking-[0.5em]">{m}</span>
              ))}
            </div>
            
            <a 
              href="https://sociabuzz.com/seleneshop/tribe" 
              target="_blank" 
              className="group relative inline-flex items-center gap-8 bg-white/[0.02] border border-white/5 rounded-[40px] p-10 hover:border-purple-500/40 transition-all duration-700 hover:scale-[1.02]"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-purple-500 group-hover:text-white transition-all">🛡️</div>
              <div className="text-left">
                <span className="block font-bold text-white text-2xl tracking-tight mb-1">Sociabuzz Gateway</span>
                <p className="text-sm text-white/30 font-light tracking-wide">Pembayaran otomatis & instan.</p>
              </div>
              <div className="ml-8 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                →
              </div>
            </a>
          </div>
        </section>

        <footer className="relative z-10 py-20 text-center border-t border-white/5 bg-black/40">
          <p className="text-white/20 text-[10px] font-bold tracking-[0.8em] uppercase mb-6">Selene Shop • Established 2024</p>
          <div className="flex justify-center gap-8 opacity-20 text-[9px] font-bold uppercase tracking-[0.3em]">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Support</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
