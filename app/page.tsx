"use client";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-purple-200 font-title font-semibold text-lg">
            Selene Shop 🌙
          </span>

          <div className="flex gap-6 text-sm">
            <a href="#beranda" className="text-purple-100 hover:text-purple-300">
              Beranda
            </a>
            <a href="#produk" className="text-purple-100 hover:text-purple-300">
              Produk
            </a>
            <a
              href="https://discord.gg/muH44HDrea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200"
            >
              Discord
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-16 min-h-screen text-white bg-black">

        {/* BERANDA / HERO */}
        <section
          id="beranda"
          className="min-h-[80vh] bg-gradient-to-b from-[#0b0b2e] to-black flex items-center justify-center border-b border-purple-500/10"
        >
          <div className="text-center max-w-2xl px-6">
            <h1 className="text-5xl md:text-6xl font-title font-bold text-purple-200 mb-6">
              Selene Shop 🌙
            </h1>

            <p className="text-purple-100 mb-8 leading-relaxed">
              Moonlit Minecraft Skin, Cosmetica Face, Art Commission,
              dan Build aesthetic dengan sentuhan fantasy & night theme.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="#produk"
                className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition"
              >
                Lihat Produk
              </a>

              <a
                href="https://discord.gg/muH44HDrea"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full border border-purple-400 hover:bg-purple-400/10 transition"
              >
                Order via Discord
              </a>
            </div>
          </div>
        </section>

        {/* TENTANG */}
        <section id="tentang" className="bg-[#05051a] px-6 py-32 relative overflow-hidden">
          {/* Aksen Partikel/Cahaya di Latar Belakang */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full"></div>

          <div className="max-w-4xl mx-auto relative group">
            {/* Outer Glow Decor */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-[#0b0b2e]/40 border border-purple-500/10 backdrop-blur-xl p-12 md:p-16 rounded-[40px] shadow-2xl">
              <div className="flex flex-col items-center">

                {/* Header Section */}
                <h2 className="text-4xl font-title font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-300 text-center mb-4 tracking-tight">
                  Tentang Selene Shop
                </h2>

                {/* Slogan dengan gaya lebih puitis */}
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-[1px] w-8 bg-purple-500/30"></div>
                  <p className="text-purple-300/90 font-light tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                    "Where creativity meets the moonlight"
                  </p>
                  <div className="h-[1px] w-8 bg-purple-500/30"></div>
                </div>

                {/* Content Body */}
                <div className="space-y-6 text-center max-w-2xl">
                  <p className="text-purple-100/80 leading-relaxed text-lg font-light">
                    Selene Shop adalah <span className="text-purple-200 font-medium">studio kreatif digital</span> bertema bulan yang menghadirkan layanan khusus <span className="text-purple-200 font-medium">Minecraft</span> dan <span className="text-purple-200 font-medium">commission art</span>. 
                  </p>

                  <p className="text-purple-100/60 leading-relaxed text-sm md:text-base italic border-t border-purple-500/10 pt-6">
                    Terinspirasi dari keindahan malam yang elegan dan lembut, kami berkomitmen memberikan hasil desain yang rapi dan konsisten melalui proses yang transparan. Kami siap membantu kamu tampil beda dan estetik di dunia digital.
                  </p>
                </div>

                {/* Moon Icon / Ornament */}
                <div className="mt-10 text-purple-400/30 text-2xl">
                  ✦
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ALASAN / KEUNGGULAN */}
        <section id="alasan" className="bg-[#05051a] px-6 py-28 relative overflow-hidden">
          {/* Efek Cahaya Latar Belakang (Ambient Glow) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/10 blur-[120px] rounded-full -z-0"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-title font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-400 text-center mb-16 tracking-wide">
              Mengapa Harus Memilih Selene?
            </h2>

            <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2">
              {[
                { title: "Custom Sesuai Request", desc: "Kami menerjemahkan imajinasi kamu ke dalam desain yang presisi agar merepresentasikan identitas unik kamu." },
                { title: "Tema Aesthetic & Fantasy", desc: "Spesialisasi kami terletak pada perpaduan nuansa fantasi yang ajaib dengan gaya malam yang lembut." },
                { title: "Komunikasi Jelas via Discord", desc: "Wadah diskusi yang responsif dan transparan. Kamu akan mendapatkan update berkala mengenai progres pesanan." },
                { title: "Hasil Rapi & Original", desc: "Setiap piksel dikerjakan dengan tingkat ketelitian tinggi. Kami menjamin keaslian karya yang profesional." },
              ].map((reason) => (
                <div
                  key={reason.title}
                  className="group bg-gradient-to-br from-white/[0.05] to-transparent border border-purple-500/10 backdrop-blur-md rounded-2xl p-8 transition-all duration-500 hover:border-purple-500/40 hover:-translate-y-1 hover:shadow-[0_0_30px_-10px_rgba(168,85,247,0.3)]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl group-hover:animate-pulse">✨</span>
                    <h4 className="font-semibold text-lg text-purple-200 tracking-tight group-hover:text-white transition-colors">
                      {reason.title}
                    </h4>
                  </div>
                  <p className="text-purple-100/60 leading-relaxed text-sm group-hover:text-purple-100/80 transition-colors">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUK LIST */}
<section id="produk" className="bg-black px-6 py-24 relative overflow-hidden">
  {/* Aksen cahaya tambahan di background */}
  <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <h2 className="text-4xl font-title font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-400 text-center mb-16 tracking-wide text-moonlight">
      Layanan Kreatif Kami
    </h2>

    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      
      {/* 1. Cosmetica Face */}
      <div className="group relative bg-gradient-to-b from-white/[0.05] to-transparent border border-purple-500/20 backdrop-blur-xl rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] hover:border-purple-400/50 flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-title font-bold text-purple-200 mb-1 group-hover:text-white transition-colors">🌙 Cosmetica Face</h3>
          <p className="text-[10px] uppercase tracking-widest text-purple-400/60 mb-6">*Khusus Minecraft Premium</p>
          <div className="space-y-5 mb-8 text-sm">
            <div className="border-l-2 border-purple-500/40 pl-4 transition-all group-hover:border-purple-400">
              <p className="font-bold text-purple-300">ONLY FACE: 30K</p>
              <p className="text-xs text-purple-100/60">Custom mata, alis, dan mulut sesuai request.</p>
            </div>
            <div className="border-l-2 border-blue-500/40 pl-4 transition-all group-hover:border-blue-400">
              <p className="font-bold text-blue-300">FACE + RAMBUT HD: 50K</p>
              <p className="text-xs text-purple-100/60">Termasuk shading rambut detail dan ekspresi.</p>
            </div>
          </div>
        </div>
        <a href="https://discord.gg/muH44HDrea" className="block text-center py-3 bg-purple-600/20 border border-purple-500/40 text-purple-100 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300">Order Face</a>
      </div>

      {/* 2. Minecraft Skin */}
      <div className="group relative bg-gradient-to-b from-white/[0.05] to-transparent border border-purple-500/20 backdrop-blur-xl rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] hover:border-purple-400/50 flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-title font-bold text-purple-200 mb-1 group-hover:text-white transition-colors">🎮 Minecraft Skin</h3>
          <p className="text-[10px] uppercase tracking-widest text-purple-400/60 mb-6">Classic / Slim Model</p>
          <div className="space-y-5 mb-8 text-sm">
            <div className="border-l-2 border-green-500/40 pl-4 transition-all group-hover:border-green-400">
              <p className="font-bold text-green-300">SIMPLE: 10K</p>
              <p className="text-xs text-purple-100/60">Desain minimalis dengan shading standar.</p>
            </div>
            <div className="border-l-2 border-purple-500/40 pl-4 transition-all group-hover:border-purple-400">
              <p className="font-bold text-purple-300">FULL DETAIL: 15K</p>
              <p className="text-xs text-purple-100/60">Shading kompleks untuk Anime atau Fantasy.</p>
            </div>
          </div>
        </div>
        <a href="https://discord.gg/muH44HDrea" className="block text-center py-3 bg-purple-600/20 border border-purple-500/40 text-purple-100 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300">Order Skin</a>
      </div>

      {/* 3. Art & Illustration */}
      <div className="group relative bg-gradient-to-b from-white/[0.05] to-transparent border border-purple-500/20 backdrop-blur-xl rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] hover:border-purple-400/50 flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-title font-bold text-purple-200 mb-1 group-hover:text-white transition-colors">🎨 Art & Illustration</h3>
          <p className="text-[10px] uppercase tracking-widest text-purple-400/60 mb-6">Digital Hand-Drawn</p>
          <div className="space-y-4 mb-8 text-[11px]">
            <div className="border-l-2 border-yellow-500/40 pl-4">
              <p className="font-bold text-yellow-400 text-sm">SIMPLE SHADE: 25K</p>
              <p className="text-purple-100/60">Fanart atau Original Character (OC).</p>
            </div>
            <div className="border-l-2 border-pink-500/40 pl-4">
              <p className="font-bold text-pink-400 text-sm">CHIBI PNGTUBER: 25K</p>
              <p className="text-purple-100/60">Karakter mungil untuk streaming/konten.</p>
            </div>
            <div className="border-l-2 border-purple-500/40 pl-4">
              <p className="font-bold text-purple-300 text-sm">PNGTUBER: 30K</p>
              <p className="text-purple-100/60">Model PNGtuber standar (Bust-up).</p>
            </div>
          </div>
        </div>
        <a href="https://discord.gg/muH44HDrea" className="block text-center py-3 bg-purple-600/20 border border-purple-500/40 text-purple-100 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300">Order Art</a>
      </div>

      {/* 4. MC Photoshoot */}
      <div className="group relative bg-gradient-to-b from-white/[0.05] to-transparent border border-purple-500/20 backdrop-blur-xl rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] hover:border-purple-400/50 flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-title font-bold text-purple-200 mb-1 group-hover:text-white transition-colors">📸 MC Photoshoot</h3>
          <p className="text-[10px] uppercase tracking-widest text-purple-400/60 mb-6">Cinematic Renders</p>
          <div className="space-y-5 mb-8 text-xs">
            <div className="border-l-2 border-blue-400/40 pl-4">
              <p className="font-bold text-blue-300 text-sm">CINEMATIC RENDER</p>
              <p className="text-purple-100/60">Single, Couple, atau Group (3-5 orang).</p>
            </div>
            <div className="border-l-2 border-orange-400/40 pl-4">
              <p className="font-bold text-orange-300 text-sm">CUSTOM SCENE</p>
              <p className="text-purple-100/60">Background Nether, End, atau build milikmu.</p>
            </div>
            <p className="italic text-purple-400/60 pt-2 font-light">*Harga sesuai kerumitan</p>
          </div>
        </div>
        <a href="https://discord.gg/muH44HDrea" className="block text-center py-3 bg-purple-600/20 border border-purple-500/40 text-purple-100 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300">Booking Session</a>
      </div>

      {/* 5. Custom Sticker */}
      <div className="group relative bg-gradient-to-b from-white/[0.05] to-transparent border border-purple-500/20 backdrop-blur-xl rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] hover:border-purple-400/50 flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-title font-bold text-purple-200 mb-1 group-hover:text-white transition-colors">😆 Custom Sticker</h3>
          <p className="text-[10px] uppercase tracking-widest text-purple-400/60 mb-6">Discord & WhatsApp</p>
          <div className="space-y-4 mb-8 text-sm">
            <div className="border-l-2 border-green-400/40 pl-4">
              <p className="font-bold text-green-300 uppercase text-xs tracking-wider font-sans">PER PCS: 10K</p>
            </div>
            <div className="border-l-2 border-blue-400/40 pl-4">
              <p className="font-bold text-blue-300 uppercase text-xs tracking-wider font-sans">PACK (6 STICKER): 50K</p>
            </div>
            <div className="border-l-2 border-purple-500/40 pl-4">
              <p className="font-bold text-purple-300 uppercase text-xs tracking-wider font-sans">PACK (12 STICKER): 100K</p>
            </div>
          </div>
        </div>
        <a href="https://discord.gg/muH44HDrea" className="block text-center py-3 bg-purple-600/20 border border-purple-500/40 text-purple-100 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300">Order Sticker</a>
      </div>

      {/* 6. Minecraft Build */}
      <div className="group relative bg-gradient-to-b from-white/[0.05] to-transparent border border-purple-500/20 backdrop-blur-xl rounded-[32px] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(168,85,247,0.3)] hover:border-purple-400/50 flex flex-col">
        <div className="flex-grow">
          <h3 className="text-2xl font-title font-bold text-purple-200 mb-1 group-hover:text-white transition-colors">🏗️ Minecraft Build</h3>
          <p className="text-[10px] uppercase tracking-widest text-purple-400/60 mb-6">Structural & Aesthetic</p>
          <div className="space-y-3 mb-8 text-[11px]">
            <div className="border-l-2 border-green-500/40 pl-4">
              <p className="font-bold text-green-300 text-xs">BASIC: 15K – 75K</p>
              <p className="text-purple-100/60 italic">Small structures.</p>
            </div>
            <div className="border-l-2 border-blue-500/40 pl-4">
              <p className="font-bold text-blue-300 text-xs">ADVANCED: 75K – 300K</p>
              <p className="text-purple-100/60 italic">Fantasy base / Villages.</p>
            </div>
            <div className="border-l-2 border-purple-500/40 pl-4">
              <p className="font-bold text-purple-300 text-xs">ELITE: 450K – 1.5JT</p>
              <p className="text-purple-100/60 italic">Complex cities / Castles.</p>
            </div>
          </div>
        </div>
        <a href="https://discord.gg/muH44HDrea" className="block text-center py-3 bg-purple-600/20 border border-purple-500/40 text-purple-100 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-all duration-300">Custom Build</a>
      </div>

    </div>
  </div>
</section>
        
        {/* CARA ORDER */}
<section id="cara-order" className="bg-[#05051a] px-6 py-28 relative">
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-title font-bold text-purple-100 mb-4 text-moonlight">
        Cara Order Mudah
      </h2>
      <p className="slogan-text text-purple-400/60 text-[10px]">
        Simple steps to your moonlit creation
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { n: "1", t: "Join Discord", d: "Masuk ke server kami, pergi ke channel #create-ticket." },
        { n: "2", t: "Pilih Produk", d: "Pilih layanan di dalam tiket & kirim referensi custom kamu." },
        { n: "3", t: "Konfirmasi", d: "Lakukan pembayaran & kirim bukti transfer di dalam tiket." },
        { n: "4", t: "Terima Hasil", d: "Pesanan dikerjakan & hasil final dikirim via room tiket." },
      ].map((step) => (
        <div key={step.n} className="group relative p-8 rounded-[40px] bg-white/[0.03] border border-purple-500/10 transition-all duration-500 hover:bg-purple-500/[0.05] hover:border-purple-500/40">
          {/* Background Number Ornament */}
          <span className="absolute top-4 right-8 text-6xl font-bold text-purple-500/5 group-hover:text-purple-500/10 transition-colors selection:bg-none pointer-events-none">
            0{step.n}
          </span>
          
          <div className="relative z-10">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center text-xl font-bold mb-6 shadow-[0_0_15px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
              {step.n}
            </div>
            <h3 className="text-xl font-bold text-purple-200 mb-3 group-hover:text-white transition-colors">{step.t}</h3>
            <p className="text-sm text-purple-100/50 leading-relaxed group-hover:text-purple-100/80 transition-colors">
              {step.d}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* METODE PEMBAYARAN */}
        <section id="pembayaran" className="bg-black px-6 py-24">
          <div className="max-w-5xl mx-auto bg-[#0b0b2e]/60 border border-purple-500/20 rounded-[40px] p-8 md:p-12 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
            <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-2">
              Metode Pembayaran
            </h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-purple-100/60 text-center mb-10 max-w-md mx-auto">
              Gunakan Sociabuzz untuk pembayaran otomatis via QRIS & Bank, atau pilih metode manual lainnya.
            </p>

            <div className="flex flex-col gap-6">
              <a 
                href="https://sociabuzz.com/seleneshop/tribe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-[2px] transition-transform hover:scale-[1.02] active:scale-95"
              >
                <div className="bg-[#0b0b2e] rounded-2xl p-6 flex items-center justify-between group-hover:bg-transparent transition-colors">
                  <div className="flex items-center gap-4 text-left">
                    <span className="text-4xl">🛡️</span>
                    <div>
                      <span className="block font-bold text-white text-xl">Sociabuzz (Bayar Otomatis)</span>
                      <p className="text-xs text-purple-200/70">Mendukung QRIS, GoPay, Dana, OVO, & Semua Bank Transfer.</p>
                    </div>
                  </div>
                  <div className="hidden sm:block bg-white/10 px-4 py-2 rounded-lg border border-white/20 text-white font-semibold group-hover:bg-white group-hover:text-purple-600 transition">
                    Klik di Sini
                  </div>
                </div>
              </a>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-[#0b0b2e]/80 border border-purple-500/10 rounded-2xl p-6 flex flex-col items-center transition hover:border-purple-500/40">
                  <div className="text-3xl mb-3 drop-shadow-[0_0_10px_rgba(168,85,247,0.4)]">💜</div>
                  <span className="font-bold text-purple-100">OVO</span>
                  <p className="text-[10px] text-purple-100/40 uppercase mt-1">Manual</p>
                </div>

                <div className="bg-[#0b0b2e]/80 border border-purple-500/10 rounded-2xl p-6 flex flex-col items-center transition hover:border-purple-500/40">
                  <div className="text-3xl mb-3 drop-shadow-[0_0_10px_rgba(59,130,246,0.4)]">💙</div>
                  <span className="font-bold text-purple-100">DANA</span>
                  <p className="text-[10px] text-purple-100/40 uppercase mt-1">Manual</p>
                </div>

                <div className="bg-[#0b0b2e]/80 border border-purple-500/10 rounded-2xl p-6 flex flex-col items-center transition hover:border-purple-500/40">
                  <div className="text-3xl mb-3 drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">🧡</div>
                  <span className="font-bold text-purple-100">ShopeePay</span>
                  <p className="text-[10px] text-purple-100/40 uppercase mt-1">Manual</p>
                </div>

                <div className="bg-[#0b0b2e]/80 border border-purple-500/10 rounded-2xl p-6 flex flex-col items-center transition hover:border-purple-500/40">
                  <div className="text-3xl mb-3 drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">💹</div>
                  <span className="font-bold text-purple-100">QRIS</span>
                  <p className="text-[10px] text-purple-100/40 uppercase mt-1">Scan & Pay</p>
                </div>
              </div>
            </div>
            
            <p className="text-center text-[11px] text-purple-100/30 mt-8 italic">
              *Setelah membayar via Sociabuzz, jangan lupa kirim bukti pembayarannya di room tiket Discord ya!
            </p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-purple-300/60 text-sm py-12 border-t border-purple-500/10 bg-black">
          © {new Date().getFullYear()} Selene Shop • Moonlit Creations
          <br />
          <span className="text-xs opacity-50">Handcrafted with passion for the Minecraft Community</span>
        </footer>
      </main>
    </>
  );
}
