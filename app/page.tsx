"use client";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-purple-200 font-semibold text-lg">
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

      <main className="min-h-screen text-white bg-black">
        {/* BERANDA / HERO */}
        <section
          id="beranda"
          className="pt-32 pb-20 bg-gradient-to-b from-[#0b0b2e] to-black flex items-center justify-center border-b border-purple-500/10"
        >
          <div className="text-center max-w-2xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-200 mb-6">
              Selene Shop 🌙
            </h1>

            <p className="text-purple-100 mb-8 leading-relaxed">
              Moonlit Minecraft Skin, Cosmetica Face, Art Commission, dan Build
              aesthetic dengan sentuhan fantasy & night theme.
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
        <section
          id="tentang"
          className="bg-[#05051a] px-6 py-32 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full"></div>

          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>

            <div className="relative bg-[#0b0b2e]/40 border border-purple-500/10 backdrop-blur-xl p-12 md:p-16 rounded-[40px] shadow-2xl text-center">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-300 mb-4">
                Tentang Selene Shop
              </h2>

              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-[1px] w-8 bg-purple-500/30"></div>
                <p className="text-purple-300/90 font-light tracking-[0.2em] uppercase text-[10px] sm:text-xs">
                  "Where creativity meets the moonlight"
                </p>
                <div className="h-[1px] w-8 bg-purple-500/30"></div>
              </div>

              <div className="space-y-6 max-w-2xl mx-auto">
                <p className="text-purple-100/80 leading-relaxed text-lg font-light">
                  Selene Shop adalah{" "}
                  <span className="text-purple-200 font-medium">
                    studio kreatif digital
                  </span>{" "}
                  bertema bulan yang menghadirkan layanan khusus{" "}
                  <span className="text-purple-200 font-medium">Minecraft</span>{" "}
                  dan{" "}
                  <span className="text-purple-200 font-medium">
                    commission art
                  </span>
                  .
                </p>

                <p className="text-purple-100/60 leading-relaxed text-sm md:text-base italic border-t border-purple-500/10 pt-6">
                  Terinspirasi dari keindahan malam yang elegan dan lembut, kami
                  berkomitmen memberikan hasil desain yang rapi dan konsisten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ALASAN */}
        <section id="alasan" className="bg-[#05051a] px-6 py-28 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-400 text-center mb-16">
              Mengapa Harus Memilih Selene?
            </h2>

            <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2">
              {[
                {
                  title: "Custom Sesuai Request",
                  desc: "Kami menerjemahkan imajinasi kamu ke dalam desain yang presisi agar merepresentasikan identitas unik kamu.",
                },
                {
                  title: "Tema Aesthetic & Fantasy",
                  desc: "Spesialisasi kami terletak pada perpaduan nuansa fantasi yang ajaib dengan gaya malam yang lembut.",
                },
                {
                  title: "Komunikasi Jelas via Discord",
                  desc: "Wadah diskusi yang responsif dan transparan. Kamu akan mendapatkan update berkala mengenai progres pesanan.",
                },
                {
                  title: "Hasil Rapi & Original",
                  desc: "Setiap piksel dikerjakan dengan tingkat ketelitian tinggi. Kami menjamin keaslian karya yang profesional.",
                },
              ].map((reason) => (
                <div
                  key={reason.title}
                  className="group bg-gradient-to-br from-white/[0.05] to-transparent border border-purple-500/10 backdrop-blur-md rounded-2xl p-8 transition-all hover:border-purple-500/40"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl group-hover:animate-pulse">✨</span>
                    <h4 className="font-semibold text-lg text-purple-200">
                      {reason.title}
                    </h4>
                  </div>
                  <p className="text-purple-100/60 leading-relaxed text-sm">
                    {reason.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUK LIST */}
        <section id="produk" className="bg-black px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-200 text-center mb-12">
              Layanan Kreatif Kami
            </h2>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* 1. Cosmetica Face */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400 rounded-2xl p-6 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-300 mb-2">🌙 Cosmetica Face</h3>
                  <p className="text-xs text-purple-100/60 mb-4">*Khusus Minecraft Premium</p>
                  <div className="space-y-4 text-sm text-purple-100/80 mb-6">
                    <div className="border-l-2 border-purple-500 pl-2">
                      <p className="font-bold text-purple-400">ONLY FACE: 30K</p>
                      <p className="text-xs">Custom mata, alis, dan mulut sesuai request.</p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-2">
                      <p className="font-bold text-blue-400">FACE + RAMBUT HD: 50K</p>
                      <p className="text-xs">Termasuk shading rambut detail dan ekspresi.</p>
                    </div>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition">Order Face</a>
              </div>

              {/* 2. Minecraft Skin */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400 rounded-2xl p-6 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">🎮 Minecraft Skin</h3>
                  <div className="space-y-4 text-sm text-purple-100/80 mb-6">
                    <div className="border-l-2 border-green-500 pl-2">
                      <p className="font-bold text-green-400">SIMPLE: 10K</p>
                      <p className="text-xs">Desain minimalis dengan shading standar.</p>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-2">
                      <p className="font-bold text-purple-400">FULL DETAIL: 15K</p>
                      <p className="text-xs">Shading kompleks untuk Anime atau Fantasy.</p>
                    </div>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition">Order Skin</a>
              </div>

              {/* 3. Art & Illustration */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400 rounded-2xl p-6 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">🎨 Art & Illustration</h3>
                  <div className="space-y-3 text-xs text-purple-100/80 mb-6">
                    <div className="border-l-2 border-yellow-500 pl-2">
                      <p className="font-bold text-yellow-400 text-sm">SIMPLE SHADE: 25K</p>
                      <p>Fanart atau Original Character (OC).</p>
                    </div>
                    <div className="border-l-2 border-pink-500 pl-2">
                      <p className="font-bold text-pink-400 text-sm">CHIBI PNGTUBER: 25K</p>
                      <p>Karakter mungil untuk streaming/konten.</p>
                    </div>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition">Order Art</a>
              </div>

              {/* 4. MC Photoshoot */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400 rounded-2xl p-6 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">📸 MC Photoshoot</h3>
                  <div className="space-y-4 text-xs text-purple-100/80 mb-6">
                    <div className="border-l-2 border-blue-400 pl-2">
                      <p className="font-bold text-blue-300 text-sm">CINEMATIC RENDER</p>
                    </div>
                    <p className="italic text-purple-300/70 pt-2">Harga disesuaikan jumlah karakter.</p>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition">Booking Session</a>
              </div>

              {/* 5. Custom Sticker */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400 rounded-2xl p-6 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">😆 Custom Sticker</h3>
                  <div className="space-y-4 text-sm text-purple-100/80 mb-6">
                    <div className="border-l-2 border-green-400 pl-2">
                      <p className="font-bold text-green-300">PER PCS: 10K</p>
                    </div>
                    <div className="border-l-2 border-blue-400 pl-2">
                      <p className="font-bold text-blue-300">PACK (6 STICKER): 50K</p>
                    </div>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition">Order Sticker</a>
              </div>

              {/* 6. Minecraft Build */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400 rounded-2xl p-6 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">🏗️ Minecraft Build</h3>
                  <div className="space-y-4 text-xs text-purple-100/80 mb-6">
                    <div className="border-l-2 border-green-500 pl-2">
                      <p className="font-bold text-green-400">BASIC: 15K – 75K</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-2">
                      <p className="font-bold text-red-400">ORIGIN: 2.2JT+</p>
                    </div>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition">Custom Build</a>
              </div>
            </div>
          </div>
        </section>

        {/* CARA ORDER */}
        <section id="cara-order" className="bg-[#0b0b2e] px-6 py-24 border-y border-purple-500/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-200 text-center mb-12">Cara Order Mudah</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { n: 1, t: "Join Discord", d: "Masuk ke server kami dan buka tiket di #create-ticket." },
                { n: 2, t: "Pilih Produk", d: "Pilih layanan dan siapkan referensi custom kamu." },
                { n: 3, t: "Bayar", d: "Bayar via E-Wallet dan kirim bukti transfer." },
                { n: 4, t: "Terima", d: "Hasil final dikirim langsung melalui tiket Discord." },
              ].map((step) => (
                <div key={step.n} className="bg-black/40 border border-purple-500/20 p-8 rounded-3xl text-center">
                  <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold mx-auto mb-4">{step.n}</div>
                  <h3 className="font-bold text-purple-200 mb-2">{step.t}</h3>
                  <p className="text-purple-100/70 text-xs">{step.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* METODE PEMBAYARAN */}
        <section id="pembayaran" className="bg-black px-6 py-24">
          <div className="max-w-5xl mx-auto bg-[#0b0b2e]/60 border border-purple-500/20 rounded-[40px] p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-purple-200 mb-6">Metode Pembayaran</h2>
            <a href="https://sociabuzz.com/seleneshop/tribe" target="_blank" className="inline-block bg-purple-600 px-8 py-3 rounded-xl font-bold mb-10 hover:bg-purple-700 transition">
              Bayar via Sociabuzz (QRIS/Bank)
            </a>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["OVO", "DANA", "ShopeePay", "QRIS"].map((pay) => (
                <div key={pay} className="bg-[#0b0b2e]/80 border border-purple-500/10 p-4 rounded-xl text-purple-100 font-bold">{pay}</div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-purple-300/60 text-sm py-12 border-t border-purple-500/10 bg-black">
          © {new Date().getFullYear()} Selene Shop • Moonlit Creations
        </footer>
      </main>
    </>
  );
}
