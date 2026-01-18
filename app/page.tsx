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
  {/* Ambient Background Glow */}
  <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-900/10 blur-[120px] rounded-full"></div>
  <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <h2 className="text-4xl font-title font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-400 text-center mb-16 tracking-wide text-moonlight">
      Layanan Kreatif Kami
    </h2>

    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      
      {/* MAPPING SEMUA LAYANAN AGAR EFEKNYA SERAGAM */}
      {[
        {
          title: "🌙 Cosmetica Face",
          tag: "*Khusus Minecraft Premium",
          items: [
            { label: "ONLY FACE", price: "30K", desc: "Custom mata, alis, dan mulut." },
            { label: "FACE + RAMBUT HD", price: "50K", desc: "Shading rambut detail & ekspresi." }
          ],
          btn: "Order Face"
        },
        {
          title: "🎮 Minecraft Skin",
          tag: "Classic / Slim Model",
          items: [
            { label: "SIMPLE", price: "10K", desc: "Desain minimalis, shading standar." },
            { label: "FULL DETAIL", price: "15K", desc: "Shading kompleks Anime/Fantasy." }
          ],
          btn: "Order Skin"
        },
        {
          title: "🎨 Art & Illustration",
          tag: "Digital Hand-Drawn",
          items: [
            { label: "SIMPLE SHADE", price: "25K", desc: "Fanart atau Original Character (OC)." },
            { label: "PNGTUBER", price: "30K+", desc: "Model karakter untuk streaming." }
          ],
          btn: "Order Art"
        },
        {
          title: "📸 MC Photoshoot",
          tag: "Cinematic Renders",
          items: [
            { label: "SINGLE / COUPLE", price: "Varies", desc: "Render karakter dengan shader premium." },
            { label: "CUSTOM SCENE", price: "Varies", desc: "Background Nether, End, atau build." }
          ],
          btn: "Booking Session"
        },
        {
          title: "😆 Custom Sticker",
          tag: "Discord & WhatsApp",
          items: [
            { label: "PER PCS", price: "10K", desc: "Bust-up atau Head Only." },
            { label: "PACK (6-12)", price: "50K-100K", desc: "Lebih hemat untuk koleksi ekspresi." }
          ],
          btn: "Order Sticker"
        },
        {
          title: "🏗️ Minecraft Build",
          tag: "Structural & Aesthetic",
          items: [
            { label: "BASIC", price: "15K+", desc: "Struktur kecil & detail simpel." },
            { label: "ELITE / MEGA", price: "450K+", desc: "Kota kompleks & proyek besar." }
          ],
          btn: "Custom Build"
        }
      ].map((service, index) => (
        <div 
          key={index}
          className="group relative p-[1px] rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-2"
        >
          {/* Efek Border Gradient Tipis (Selalu Muncul) */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent group-hover:from-purple-500/50 group-hover:to-blue-500/30 transition-all duration-500"></div>

          {/* Isi Card */}
          <div className="relative bg-[#0b0b2e]/90 backdrop-blur-xl rounded-[31px] p-8 h-full flex flex-col border border-white/[0.03]">
            
            {/* Background Glow Internal (Hanya Muncul saat Hover) */}
            <div className="absolute inset-0 bg-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[31px]"></div>

            <div className="relative z-10 flex-grow">
              <h3 className="text-2xl font-title font-bold text-purple-100 mb-1 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-purple-400/60 mb-6 font-light">
                {service.tag}
              </p>

              <div className="space-y-6 mb-8">
                {service.items.map((item, i) => (
                  <div key={i} className="group/item">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="text-xs font-semibold text-purple-200/80 group-hover/item:text-purple-100 transition-colors uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-purple-400">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[11px] text-purple-100/40 leading-relaxed font-light">
                      {item.desc}
                    </p>
                    {/* Divider Tipis */}
                    <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/10 to-transparent mt-3"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button dengan efek glow saat hover */}
            <a 
              href="https://discord.gg/muH44HDrea" 
              className="relative z-10 block text-center py-3 bg-white/[0.03] border border-purple-500/30 text-purple-200 rounded-xl font-bold hover:bg-purple-600 hover:text-white hover:border-purple-600 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300 text-sm"
            >
              {service.btn}
            </a>
          </div>
        </div>
      ))}

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
