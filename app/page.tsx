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
          className="min-h-[70vh] bg-gradient-to-b from-[#0b0b2e] to-black flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="text-center max-w-2xl px-6 relative z-10">
            <h1 className="text-5xl md:text-6xl font-title font-bold text-purple-200 mb-6 drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
              Selene Shop 🌙
            </h1>

            <p className="text-purple-100 mb-8 leading-relaxed">
              Moonlit Minecraft Skin, Cosmetica Face, Art Commission,
              dan Build aesthetic dengan sentuhan fantasy & night theme.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="#produk"
                className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-[0_4px_15px_rgba(168,85,247,0.3)]"
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

        {/* BRAND PARTNERS SECTION */}
        <section className="bg-black border-y border-purple-500/10 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center justify-center gap-14">
              
              {/* Official Partners - Sangat Jelas & Besar */}
              <div className="text-center relative">
                <span className="text-purple-200 text-xl md:text-3xl uppercase tracking-[0.7em] font-black drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  Official Partners
                </span>
                <div className="h-[3px] w-48 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-4"></div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
                
                {/* SELENE SHOP - Hover: Ungu Langit Malam */}
                <div className="group cursor-default">
                  <span className="text-3xl md:text-5xl font-bold tracking-tighter text-white/10 group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-b group-hover:from-[#e0e7ff] group-hover:via-[#818cf8] group-hover:to-[#4338ca] transition-all duration-700 group-hover:drop-shadow-[0_0_20px_rgba(129,140,248,0.6)]">
                    SELENE SHOP
                  </span>
                </div>

                <span className="text-purple-500/20 text-3xl font-light hidden lg:block">✕</span>

                {/* HEPPYCLOUD - Hover: Ungu ke Magenta */}
                <div className="group cursor-default">
                  <span className="text-3xl md:text-5xl font-bold tracking-tighter text-white/10 group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#a855f7] group-hover:to-[#d946ef] transition-all duration-700 group-hover:drop-shadow-[0_0_25px_rgba(217,70,239,0.7)]">
                    HEPPYCLOUD
                  </span>
                </div>

                <span className="text-purple-500/20 text-3xl font-light hidden lg:block">✕</span>

                {/* BANGBLAZE - Hover: Orange Kemerahan */}
                <div className="group cursor-default">
                  <span className="text-3xl md:text-5xl font-bold tracking-tighter text-white/10 group-hover:text-transparent bg-clip-text group-hover:bg-gradient-to-br group-hover:from-[#fb923c] group-hover:via-[#f97316] group-hover:to-[#dc2626] transition-all duration-700 group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.6)]">
                    BANGBLAZE
                  </span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* TENTANG */}
        <section id="tentang" className="bg-[#05051a] px-6 py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full"></div>

          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-[#0b0b2e]/40 border border-purple-500/10 backdrop-blur-xl p-12 md:p-16 rounded-[40px] shadow-2xl">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-title font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-300 text-center mb-4 tracking-tight">
                  Tentang Selene Shop
                </h2>

                <div className="flex items-center gap-4 mb-10">
                  <div className="h-[1px] w-8 bg-purple-500/30"></div>
                  <p className="text-purple-300/90 font-light tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                    "Where creativity meets the moonlight"
                  </p>
                  <div className="h-[1px] w-8 bg-purple-500/30"></div>
                </div>

                <div className="space-y-6 text-center max-w-2xl">
                  <p className="text-purple-100/80 leading-relaxed text-lg font-light">
                    Selene Shop adalah <span className="text-purple-200 font-medium">studio kreatif digital</span> bertema bulan yang menghadirkan layanan khusus <span className="text-purple-200 font-medium">Minecraft</span> dan <span className="text-purple-200 font-medium">commission art</span>. 
                  </p>

                  <p className="text-purple-100/60 leading-relaxed text-sm md:text-base italic border-t border-purple-500/10 pt-6">
                    Terinspirasi dari keindahan malam yang elegan dan lembut, kami berkomitmen memberikan hasil desain yang rapi dan konsisten melalui proses yang transparan. Kami siap membantu kamu tampil beda dan estetik di dunia digital.
                  </p>
                </div>

                <div className="mt-10 text-purple-400/30 text-2xl">✦</div>
              </div>
            </div>
          </div>
        </section>

        {/* ALASAN / KEUNGGULAN */}
        <section id="alasan" className="bg-[#05051a] px-6 py-28 relative overflow-hidden">
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
          <div className="max-w-7xl mx-auto relative z-10">
            <h2 className="text-4xl font-title font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-400 text-center mb-16 tracking-wide text-moonlight">
              Layanan Kreatif Kami
            </h2>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {[
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
                    { label: "CUSTOM SCENE", desc: "Background Nether, End, atau build milikmu." },
                    { label: "INFO", desc: "Harga disesuaikan jumlah karakter & kerumitan.", isItalic: true }
                  ],
                  btn: "Booking Session"
                },
                {
                  title: "😆 Custom Sticker",
                  tag: "Discord & WhatsApp",
                  items: [
                    { label: "PER PCS: 10K", desc: "Bust-up atau Head Only." },
                    { label: "PACK (6 STICKER): 50K", desc: "Lebih hemat untuk koleksi ekspresi." },
                    { label: "PACK (12 STICKER): 100K", desc: "Paket lengkap untuk komunitas/Discord." }
                  ],
                  btn: "Order Sticker"
                },
                {
                  title: "🏗️ Minecraft Build",
                  tag: "Structural & Aesthetic",
                  items: [
                    { label: "BASIC: 15K – 75K", desc: "Small structures & simple detail." },
                    { label: "ADVANCED: 75K – 300K", desc: "Fantasy base, mini villages, themes." },
                    { label: "ELITE: 450K – 1.5JT", desc: "Complex cities & large castles." },
                    { label: "ORIGIN: 2.2JT+", desc: "Mega projects & exclusive quality." }
                  ],
                  btn: "Custom Build"
                }
              ].map((service, index) => (
                <div 
                  key={index}
                  className="group relative bg-[#0b0b2e]/60 border border-purple-400/40 rounded-2xl p-6 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                >
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-purple-300 mb-1 group-hover:text-white transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[10px] text-purple-100/60 mb-6 italic">{service.tag}</p>
                    
                    <div className="space-y-4 text-sm text-purple-100/80 mb-8">
                      {service.items.map((item, i) => (
                        <div key={i} className="border-l-2 border-purple-500/50 pl-4 group-hover:border-purple-400 transition-colors">
                          <p className={`font-bold text-purple-200 uppercase text-xs tracking-wider ${item.isItalic ? 'italic opacity-70' : ''}`}>
                            {item.label}
                          </p>
                          <p className="text-[11px] text-purple-100/60 mt-1 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a 
                    href="https://discord.gg/muH44HDrea" 
                    className="block text-center py-2.5 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-all shadow-[0_4px_15px_rgba(168,85,247,0.2)]"
                  >
                    {service.btn}
                  </a>
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
              <p className="text-purple-400/60 text-[10px] tracking-widest uppercase">
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
                  <span className="absolute top-4 right-8 text-6xl font-bold text-purple-500/5 group-hover:text-purple-500/10 transition-colors pointer-events-none">
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
