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
            <a href="#keunggulan" className="text-white/50 hover:text-purple-300 transition">Keunggulan</a>
            <a href="#produk" className="text-white/50 hover:text-purple-300 transition">Layanan</a>
            <a href="#alur" className="text-white/50 hover:text-purple-300 transition">Cara Order</a>
            <a href="#pembayaran" className="text-purple-400 hover:text-purple-200 transition">Pembayaran</a>
          </div>
        </div>
      </nav>

      <main className="relative pt-16">
        <MoonBackground />

        {/* HERO */}
        <section id="beranda" className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
            Selene <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-purple-500">Shop</span>
          </h1>
          <p className="text-white/60 max-w-xl text-lg mb-10 leading-relaxed font-light">Eksplorasi estetika malam dalam dunia digital. Kami menghadirkan karya berkualitas tinggi untuk identitas Minecraft Anda.</p>
          
          {/* NAVIGATION BUTTONS GRID */}
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl">
            <a href="#produk" className="px-8 py-4 bg-white text-black hover:bg-purple-200 rounded-full transition-all font-bold text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(255,255,255,0.1)]">Layanan Kreatif</a>
            <a href="#tentang" className="px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full transition-all font-bold text-xs uppercase tracking-widest backdrop-blur-md">Tentang Kami</a>
            <a href="#alur" className="px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full transition-all font-bold text-xs uppercase tracking-widest backdrop-blur-md">Cara Order</a>
            <a href="#pembayaran" className="px-8 py-4 border border-purple-500/20 bg-purple-500/5 hover:bg-purple-500/10 rounded-full transition-all font-bold text-xs uppercase tracking-widest backdrop-blur-md text-purple-300">Payment Gateway</a>
          </div>
          
          <a href="https://discord.gg/muH44HDrea" target="_blank" className="mt-8 text-white/30 hover:text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase transition-all underline underline-offset-8">Masuk ke Community Discord</a>
        </section>

        {/* BRAND PARTNERS */}
        <section className="relative z-20 py-16 border-y border-white/5 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-purple-200 text-xs uppercase tracking-[0.8em] mb-10 font-black opacity-50">Official Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
              {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
                <span key={brand} className="text-lg md:text-xl font-bold text-white/10 hover:text-purple-400 transition-all duration-700 cursor-default hover:tracking-[0.2em]">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TENTANG KAMI */}
        <section id="tentang" className="relative z-10 pt-32 pb-16 px-6">
          <div className="max-w-4xl mx-auto text-center group transition-all duration-500">
            <h2 className="text-4xl font-bold text-white mb-6 group-hover:text-purple-300 transition-colors">Tentang Kami</h2>
            <p className="text-white/50 leading-relaxed text-lg mb-12">
              Terinspirasi oleh keindahan Bulan, Selene Shop mengintegrasikan seni digital dengan fungsionalitas game. Kami bukan sekadar toko, kami adalah partner kreatif Anda dalam membangun identitas digital yang ikonik.
            </p>
            <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
              <div className="p-8 rounded-[30px] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all">
                <h4 className="text-3xl text-purple-300 font-bold mb-1">100+</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Project Selesai</p>
              </div>
              <div className="p-8 rounded-[30px] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all">
                <h4 className="text-3xl text-purple-300 font-bold mb-1">Premium</h4>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Kualitas Karya</p>
              </div>
            </div>
          </div>
        </section>

        {/* MENGAPA MEMILIH KAMI */}
        <section id="keunggulan" className="relative z-10 pb-32 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <div className="w-12 h-1 bg-purple-500/30 mx-auto mb-6 rounded-full"></div>
                <h3 className="text-xs font-bold tracking-[0.4em] text-purple-400 uppercase">Mengapa Memilih Kami?</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { t: "Hasil Presisi", d: "Setiap detail pixel dan shading dikerjakan secara teliti untuk hasil tajam.", icon: "✨" },
                { t: "Fast Response", d: "Diskusi aktif dan update progres berkala melalui server Discord kami.", icon: "💬" },
                { t: "Customizable", d: "Setiap karya dibuat khusus berdasarkan referensi dan imajinasi unik Anda.", icon: "🎨" }
              ].map((item, idx) => (
                <div key={idx} className="group p-8 rounded-[35px] bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] hover:border-purple-500/30 transition-all duration-500">
                  <div className="text-3xl mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">{item.icon}</div>
                  <h4 className="font-bold text-white mb-3 text-lg group-hover:text-purple-200 transition-colors">{item.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUK */}
        <section id="produk" className="relative z-10 py-32 px-6 bg-gradient-to-b from-transparent via-purple-900/[0.02] to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <span className="text-purple-400 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Katalog</span>
              <h2 className="text-5xl font-bold text-white tracking-tighter">Layanan Kreatif</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((s, i) => (
                <div key={i} className="group relative bg-white/[0.02] border border-white/5 p-10 rounded-[40px] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-700 flex flex-col h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-3xl group-hover:bg-purple-600/10 transition-all" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-1">{s.title}</h3>
                    <p className="text-[10px] text-purple-400 font-bold mb-10 uppercase tracking-widest">{s.tag}</p>
                    <div className="space-y-8 mb-12">
                      {s.items.map((item, idx) => (
                        <div key={idx} className="relative">
                          <p className="text-[11px] font-black text-white tracking-widest mb-1 uppercase group-hover:text-purple-200 transition-colors">{item.label}</p>
                          <p className="text-xs text-white/40 leading-relaxed font-light">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full text-center py-4 bg-white/5 hover:bg-white hover:text-black rounded-2xl font-bold text-xs transition-all duration-500 uppercase tracking-widest mt-auto">
                    {s.btn}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARA ORDER */}
        <section id="alur" className="relative z-10 py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-white mb-20 tracking-widest uppercase">Cara Order</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", t: "Join Discord", d: "Masuk ke server kami melalui link undangan di navigasi." },
                { step: "02", t: "Create Ticket", d: "Buka tiket bantuan dan pilih kategori jasa yang Anda inginkan." },
                { step: "03", t: "Payment", d: "Lakukan pembayaran aman melalui QRIS atau E-Wallet pilihan Anda." }
              ].map((item, idx) => (
                <div key={idx} className="group relative p-10 rounded-[35px] bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-500 hover:border-purple-500/30 hover:bg-white/[0.04]">
                  <span className="text-5xl font-black text-white/[0.03] absolute top-4 right-6 group-hover:text-purple-500/10 transition-colors">{item.step}</span>
                  <h4 className="font-bold text-purple-200 text-lg mb-4 group-hover:translate-x-1 transition-transform">{item.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECURED PAYMENT */}
        <section id="pembayaran" className="relative z-10 py-32 px-6 bg-gradient-to-t from-purple-900/[0.05] to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xs font-bold tracking-[0.5em] text-white/30 uppercase mb-12 text-center">Secured Payment Gateway</h2>
            <div className="flex flex-wrap justify-center gap-10 mb-20 opacity-20 hover:opacity-40 transition-opacity duration-700">
              {["DANA", "OVO", "SHOPEEPAY", "QRIS"].map((m) => (
                <span key={m} className="text-xs font-black tracking-widest">{m}</span>
              ))}
            </div>
            
            <a 
              href="https://sociabuzz.com/seleneshop/tribe" 
              target="_blank" 
              className="group relative inline-flex items-center gap-6 bg-white/[0.03] border border-white/10 rounded-[30px] p-8 hover:bg-white/[0.05] hover:border-purple-500/40 transition-all duration-500 hover:scale-[1.02] shadow-[0_20px_50px_rgba(0,0,0,0.2)]"
            >
              <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">🛡️</div>
              <div className="text-left">
                <span className="block font-bold text-white text-xl tracking-tight group-hover:text-purple-200 transition-colors">Sociabuzz Gateway</span>
                <p className="text-xs text-white/40">Pembayaran otomatis yang aman, instan & terverifikasi.</p>
              </div>
              <div className="ml-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                →
              </div>
            </a>
          </div>
        </section>

        <footer className="relative z-10 py-16 text-center border-t border-white/5 bg-black/40">
          <p className="text-white/20 text-[10px] font-bold tracking-[0.5em] uppercase mb-4">Selene Shop • Established 2024</p>
          <p className="text-white/10 text-[9px]">Crafted for the premium Minecraft community.</p>
        </footer>
      </main>
    </div>
  );
}
