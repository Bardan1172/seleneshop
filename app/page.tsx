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
        <section id="tentang" className="bg-black px-6 py-24">
          <div className="max-w-4xl mx-auto bg-[#0b0b2e]/30 border border-purple-500/10 p-10 rounded-[40px]">
            <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-8">
              Tentang Selene Shop
            </h2>

            <p className="text-center text-purple-100/80 leading-relaxed italic mb-6">
              "Where creativity meets the moonlight"
            </p>
            
            <p className="text-center text-purple-100/80 leading-relaxed">
              Selene Shop adalah studio kreatif digital bertema bulan yang menghadirkan layanan khusus Minecraft dan commission art. Kami berfokus pada detail, estetika, dan kualitas tinggi untuk menciptakan karakter yang unik.
              <br /><br />
              Terinspirasi dari keindahan malam yang elegan dan lembut, kami berkomitmen memberikan hasil desain yang rapi dan konsisten melalui proses yang transparan. Kami siap membantu kamu tampil beda dan estetik di dunia digital.
            </p>
          </div>
        </section>

        {/* ALASAN / KEUNGGULAN */}
        <section id="alasan" className="bg-[#0b0b2e] px-6 py-24">
          <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-12">
            Mengapa Harus Beli di Selene Shop?
          </h2>

          <div className="grid gap-6 max-w-5xl mx-auto grid-cols-1 md:grid-cols-2">
            {[
              { title: "Custom Sesuai Request", desc: "Kami menerjemahkan imajinasi kamu ke dalam desain yang presisi agar merepresentasikan identitas unik kamu." },
              { title: "Tema Aesthetic & Fantasy", desc: "Spesialisasi kami terletak pada perpaduan nuansa fantasi yang ajaib dengan gaya malam yang lembut." },
              { title: "Komunikasi Jelas via Discord", desc: "Wadah diskusi yang responsif dan transparan. Kamu akan mendapatkan update berkala mengenai progres pesanan." },
              { title: "Hasil Rapi & Original", desc: "Setiap piksel dikerjakan dengan tingkat ketelitian tinggi. Kami menjamin keaslian karya yang profesional." },
            ].map((reason) => (
              <div
                key={reason.title}
                className="bg-black/40 border border-purple-500/20 rounded-xl p-6 text-purple-100/90"
              >
                <h4 className="font-bold text-purple-300 mb-2">✨ {reason.title}</h4>
                <p className="text-sm text-purple-100/70">{reason.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUK LIST */}
        <section id="produk" className="bg-black px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-12">
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
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition mt-auto">Order Face</a>
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
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition mt-auto">Order Skin</a>
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
                    <div className="border-l-2 border-purple-500 pl-2">
                      <p className="font-bold text-purple-400 text-sm">PNGTUBER: 30K</p>
                      <p>Model PNGtuber standar (Bust-up).</p>
                    </div>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition mt-auto">Order Art</a>
              </div>

              {/* 4. MC Photoshoot */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400 rounded-2xl p-6 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">📸 MC Photoshoot</h3>
                  <div className="space-y-4 text-xs text-purple-100/80 mb-6">
                    <div className="border-l-2 border-blue-400 pl-2">
                      <p className="font-bold text-blue-300 text-sm">CINEMATIC RENDER</p>
                      <p>Single, Couple, atau Group (3-5 orang).</p>
                    </div>
                    <div className="border-l-2 border-orange-400 pl-2">
                      <p className="font-bold text-orange-300 text-sm">CUSTOM SCENE</p>
                      <p>Background Nether, End, atau build milikmu.</p>
                    </div>
                    <p className="italic text-purple-300/70 pt-2">Harga disesuaikan jumlah karakter & kerumitan.</p>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition mt-auto">Booking Session</a>
              </div>

              {/* 5. Custom Sticker */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400 rounded-2xl p-6 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">😆 Custom Sticker</h3>
                  <div className="space-y-4 text-sm text-purple-100/80 mb-6">
                    <div className="border-l-2 border-green-400 pl-2">
                      <p className="font-bold text-green-300">PER PCS: 10K</p>
                      <p className="text-xs">Bust-up atau Head Only.</p>
                    </div>
                    <div className="border-l-2 border-blue-400 pl-2">
                      <p className="font-bold text-blue-300">PACK (6 STICKER): 50K</p>
                      <p className="text-xs">Lebih hemat untuk koleksi ekspresi.</p>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-2">
                      <p className="font-bold text-purple-400">PACK (12 STICKER): 100K</p>
                      <p className="text-xs">Paket lengkap untuk komunitas/Discord.</p>
                    </div>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition mt-auto">Order Sticker</a>
              </div>

              {/* 6. Minecraft Build */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400 rounded-2xl p-6 flex flex-col shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">🏗️ Minecraft Build</h3>
                  <div className="space-y-4 text-xs text-purple-100/80 mb-6">
                    <div className="border-l-2 border-green-500 pl-2">
                      <p className="font-bold text-green-400">BASIC: IDR 15K – 75K</p>
                      <p>Small structures & simple detail.</p>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-2">
                      <p className="font-bold text-blue-400">ADVANCED: IDR 75K – 300K</p>
                      <p>Fantasy base, mini villages, themes.</p>
                    </div>
                    <div className="border-l-2 border-purple-500 pl-2">
                      <p className="font-bold text-purple-400">ELITE: IDR 450K – 1.5JT</p>
                      <p>Complex cities & large castles.</p>
                    </div>
                    <div className="border-l-2 border-red-500 pl-2">
                      <p className="font-bold text-red-400">ORIGIN: IDR 2.2JT+</p>
                      <p>Mega projects & exclusive quality.</p>
                    </div>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition mt-auto">Custom Build</a>
              </div>

            </div>
          </div>
        </section>
        
        {/* CARA ORDER - Layout Kartu Horizontal */}
        <section id="cara-order" className="bg-[#0b0b2e] px-6 py-24 border-y border-purple-500/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-2">
              Cara Order Mudah
            </h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto mb-6"></div>
            <p className="text-purple-100/60 text-center mb-12 max-w-lg mx-auto">
              Hanya 3 langkah sederhana untuk mendapatkan produk kreatifmu.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-black/40 border border-purple-500/20 p-8 rounded-3xl text-center group">
                <div className="bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                <h3 className="text-xl font-bold text-purple-200 mb-4">Pilih Produk</h3>
                <p className="text-purple-100/70 text-sm">Pilih layanan Minecraft atau Art. Siapkan referensi custom kamu.</p>
              </div>

              <div className="bg-black/40 border border-purple-500/20 p-8 rounded-3xl text-center group">
                <div className="bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                <h3 className="text-xl font-bold text-purple-200 mb-4">Bayar & Konfirmasi</h3>
                <p className="text-purple-100/70 text-sm">Lakukan pembayaran via E-Wallet. Kirim bukti transfer untuk konfirmasi.</p>
              </div>

              <div className="bg-black/40 border border-purple-500/20 p-8 rounded-3xl text-center group">
                <div className="bg-purple-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                <h3 className="text-xl font-bold text-purple-200 mb-4">Terima Produk</h3>
                <p className="text-purple-100/70 text-sm">Pesanan dikerjakan sesuai antrean. Hasil dikirim langsung via Discord.</p>
              </div>
            </div>
          </div>
        </section>

        {/* METODE PEMBAYARAN - Layout Card Putih */}
        <section id="pembayaran" className="bg-black px-6 py-24">
          <div className="max-w-4xl mx-auto bg-[#0b0b2e]/40 border border-purple-500/10 rounded-[40px] p-12">
            <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-4">
              Metode Pembayaran
            </h2>
            <p className="text-purple-100/60 text-center mb-12">
              Kami menerima pembayaran melalui dompet digital populer.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-800">
              <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg transition-transform hover:scale-105">
                <div className="text-purple-600 text-4xl mb-3">💜</div>
                <span className="font-bold">OVO</span>
                <p className="text-[10px] text-gray-400 uppercase">Transfer Langsung</p>
              </div>

              <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg transition-transform hover:scale-105">
                <div className="text-blue-500 text-4xl mb-3">💙</div>
                <span className="font-bold">DANA</span>
                <p className="text-[10px] text-gray-400 uppercase">Bayar Cepat</p>
              </div>

              <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg transition-transform hover:scale-105">
                <div className="text-orange-500 text-4xl mb-3">🧡</div>
                <span className="font-bold">ShopeePay</span>
                <p className="text-[10px] text-gray-400 uppercase">Transfer Saldo</p>
              </div>
            </div>
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
