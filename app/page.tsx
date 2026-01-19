"use client";

import { useEffect, useState } from "react";

function MoonBackground() {
  const [sparkles, setSparkles] = useState<{id: number, top: string, left: string, delay: string, duration: string}[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 50 }).map((_, i) => ({
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
      <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-purple-900/20 blur-[130px] rounded-full" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-900/10 blur-[110px] rounded-full" />
      <div className="absolute top-24 right-[10%] md:right-[15%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-purple-100 to-purple-300 opacity-70 blur-[2px] shadow-[0_0_80px_rgba(192,132,252,0.4)] animate-pulse" />
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-0 animate-ping"
          style={{ top: s.top, left: s.left, animationDelay: s.delay, animationDuration: s.duration }}
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

  const sectionHeader = (title: string, subtitle: string) => (
    <div className="text-center mb-24">
      <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] uppercase mb-4 block">{subtitle}</span>
      <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-widest uppercase">
        {title}
      </h2>
      <div className="h-1 w-20 bg-purple-600/50 mx-auto mt-6 rounded-full blur-[1px]"></div>
    </div>
  );

  return (
    <div className="bg-[#02020a] min-h-screen text-white selection:bg-purple-500/30 font-sans scroll-smooth">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#beranda" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400 font-bold text-xl tracking-tighter">SELENE SHOP 🌙</a>
          <div className="hidden md:flex gap-8 text-[10px] font-black tracking-[0.2em] uppercase">
            <a href="#beranda" className="hover:text-purple-300 transition-colors">HOME</a>
            <a href="#tentang" className="text-white/40 hover:text-purple-300 transition-colors">TENTANG</a>
            <a href="#keunggulan" className="text-white/40 hover:text-purple-300 transition-colors">KENAPA KAMI</a>
            <a href="#produk" className="text-white/40 hover:text-purple-300 transition-colors">LAYANAN</a>
            <a href="#alur" className="text-white/40 hover:text-purple-300 transition-colors">CARA ORDER</a>
            <a href="#pembayaran" className="text-purple-400 hover:text-purple-200 transition-colors border-b border-purple-400/30 font-black">BAYAR</a>
          </div>
        </div>
      </nav>

      <main className="relative pt-16">
        <MoonBackground />

        {/* HERO SECTION */}
        <section id="beranda" className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-7xl md:text-9xl font-black text-white mb-8 tracking-tighter uppercase">
            SELENE <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-200 to-purple-600">SHOP</span>
          </h1>
          <p className="text-white/50 max-w-2xl text-lg md:text-xl mb-16 leading-relaxed font-light italic tracking-wide">
            "Eksplorasi estetika malam dalam dunia digital. Kami menghadirkan karya berkualitas tinggi untuk identitas Minecraft Anda."
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
            <a href="#beranda" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full transition-all font-bold text-[10px] uppercase tracking-widest backdrop-blur-md hover:bg-white/10 shadow-lg">Home</a>
            <a href="#tentang" className="px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full transition-all font-bold text-[10px] uppercase tracking-widest backdrop-blur-md shadow-lg">Tentang Kami</a>
            <a href="#keunggulan" className="px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full transition-all font-bold text-[10px] uppercase tracking-widest backdrop-blur-md shadow-lg">Kenapa Kami</a>
            <a href="#produk" className="px-8 py-4 bg-white text-black hover:bg-purple-200 rounded-full transition-all font-bold text-[10px] uppercase tracking-widest shadow-2xl">Layanan Kreatif</a>
            <a href="#alur" className="px-8 py-4 border border-white/10 hover:bg-white/5 rounded-full transition-all font-bold text-[10px] uppercase tracking-widest backdrop-blur-md shadow-lg">Cara Order</a>
            <a href="#pembayaran" className="px-8 py-4 border border-purple-500/30 bg-purple-500/10 hover:bg-purple-500/20 rounded-full transition-all font-bold text-[10px] uppercase tracking-widest backdrop-blur-md text-purple-200 shadow-lg">Payment Gateway</a>
          </div>
        </section>

        {/* OFFICIAL PARTNERS */}
        <section className="relative z-20 py-16 border-y border-white/5 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-[9px] font-black tracking-[0.6em] text-purple-400 mb-8 uppercase">Official Strategic Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-32 opacity-25 hover:opacity-70 transition-opacity duration-1000">
              {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
                <span key={brand} className="text-xl md:text-2xl font-black text-white tracking-[0.3em] cursor-default hover:text-purple-300 transition-colors">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* TENTANG KAMI */}
        <section id="tentang" className="relative z-10 py-40 px-6">
          <div className="max-w-4xl mx-auto">
            {sectionHeader("Tentang Kami", "Identity")}
            <p className="text-white/40 leading-[2] text-xl text-center mb-16 font-light">
              Terinspirasi oleh keindahan Bulan, Selene Shop mengintegrasikan seni digital dengan fungsionalitas game. Kami bukan sekadar toko, kami adalah partner kreatif Anda dalam membangun identitas digital yang ikonik.
            </p>
            <div className="grid grid-cols-2 gap-8 max-w-lg mx-auto">
              <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all text-center">
                <h4 className="text-4xl text-purple-300 font-bold mb-2 uppercase">100+</h4>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black">Project Selesai</p>
              </div>
              <div className="p-10 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all text-center">
                <h4 className="text-4xl text-purple-300 font-bold mb-2 uppercase">Premium</h4>
                <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black">Quality Standard</p>
              </div>
            </div>
          </div>
        </section>

        {/* MENGAPA MEMILIH KAMI */}
        <section id="keunggulan" className="relative z-10 py-40 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-6xl mx-auto">
            {sectionHeader("Kenapa Kami?", "Advantages")}
            <div className="grid md:grid-cols-3 gap-10">
              {[
                { t: "Hasil Presisi", d: "Setiap detail pixel dikerjakan secara teliti untuk hasil tajam.", icon: "✨" },
                { t: "Fast Response", d: "Diskusi aktif dan update progres berkala melalui sistem tiket.", icon: "💬" },
                { t: "Customizable", d: "Setiap karya dibuat khusus berdasarkan imajinasi unik Anda.", icon: "🎨" }
              ].map((item, idx) => (
                <div key={idx} className="group p-12 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-purple-500/30 transition-all text-center shadow-xl">
                  <div className="text-5xl mb-8 opacity-50 group-hover:opacity-100 transition-all">{item.icon}</div>
                  <h4 className="font-black text-white mb-4 text-xl uppercase tracking-tighter">{item.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LAYANAN KREATIF */}
        <section id="produk" className="relative z-10 py-40 px-6">
          <div className="max-w-7xl mx-auto">
            {sectionHeader("Layanan Kreatif", "Catalogue")}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((s, i) => (
                <div key={i} className="group relative bg-white/[0.02] border border-white/5 p-12 rounded-[50px] hover:border-purple-500/40 transition-all duration-700 flex flex-col h-full overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 blur-3xl" />
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight">{s.title}</h3>
                    <p className="text-[10px] text-purple-400 font-bold mb-10 uppercase tracking-widest">{s.tag}</p>
                    <div className="space-y-8 mb-12">
                      {s.items.map((item, idx) => (
                        <div key={idx}>
                          <p className="text-[11px] font-black text-white tracking-widest mb-1 uppercase group-hover:text-purple-200 transition-colors">{item.label}</p>
                          <p className="text-xs text-white/40 leading-relaxed font-light">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <a href="https://discord.gg/muH44HDrea" target="_blank" className="block w-full text-center py-5 bg-white/5 hover:bg-white hover:text-black rounded-3xl font-black text-[10px] transition-all duration-500 uppercase tracking-[0.3em] mt-auto">
                    {s.btn}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARA ORDER */}
        <section id="alur" className="relative z-10 py-40 px-6 bg-white/[0.01] border-y border-white/5">
          <div className="max-w-5xl mx-auto text-center">
            {sectionHeader("Cara Order", "Process")}
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { step: "01", t: "Join Discord", d: "Masuk ke server kami melalui link undangan resmi Selene Shop." },
                { step: "02", t: "Create Ticket", d: "Buka tiket sesuai kategori layanan yang Anda butuhkan." },
                { step: "03", t: "Payment", d: "Selesaikan pembayaran aman via QRIS atau E-Wallet." }
              ].map((item, idx) => (
                <div key={idx} className="group relative p-12 rounded-[45px] bg-white/[0.02] border border-white/5">
                  <span className="block text-7xl font-black text-purple-500/5 mb-6 group-hover:text-purple-500/10 transition-colors">{item.step}</span>
                  <h4 className="font-bold text-white text-xl mb-4 uppercase tracking-widest">{item.t}</h4>
                  <p className="text-sm text-white/40 leading-relaxed font-light">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECURED PAYMENT GATEWAY */}
        <section id="pembayaran" className="relative z-10 py-40 px-6">
          <div className="max-w-4xl mx-auto text-center">
            {sectionHeader("Payment Gateway", "Transaction")}
            <div className="flex flex-wrap justify-center gap-10 mb-20 opacity-20">
              {["DANA", "OVO", "SHOPEEPAY", "QRIS", "GOPAY"].map((m) => (
                <span key={m} className="text-[10px] font-bold tracking-[0.5em]">{m}</span>
              ))}
            </div>
            <a 
              href="https://sociabuzz.com/seleneshop/tribe" 
              target="_blank" 
              className="group relative inline-flex items-center gap-10 bg-white/[0.03] border border-white/10 rounded-[50px] p-12 hover:border-purple-500/40 transition-all duration-700 hover:scale-[1.02] shadow-2xl"
            >
              <div className="w-20 h-20 bg-purple-500/10 rounded-3xl flex items-center justify-center text-4xl group-hover:rotate-12 transition-transform shadow-inner">🛡️</div>
              <div className="text-left">
                <span className="block font-black text-white text-3xl tracking-tighter uppercase group-hover:text-purple-200 transition-colors">Sociabuzz Gateway</span>
                <p className="text-sm text-white/40 uppercase tracking-widest font-black mt-1">Secure & Instant Verification</p>
              </div>
              <div className="ml-6 w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                →
              </div>
            </a>
          </div>
        </section>

        <footer className="relative z-10 py-24 text-center border-t border-white/5 bg-black/40">
          <p className="text-white/20 text-[10px] font-black tracking-[0.8em] uppercase mb-6">SELENE SHOP • ESTABLISHED 2024</p>
          <div className="flex justify-center gap-10 opacity-30 text-[9px] font-bold uppercase tracking-[0.3em]">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Support</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
