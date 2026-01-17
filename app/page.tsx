export default function Home() {
  return (
    <main className="min-h-screen text-white bg-black">

      {/* BERANDA */}
      <section
        id="beranda"
        className="min-h-screen bg-gradient-to-b from-[#0b0b2e] to-black flex items-center justify-center"
      >
        <div className="text-center max-w-2xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-purple-200 mb-6">
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
        <h2 className="text-3xl font-semibold text-purple-200 text-center mb-8">
          Tentang Selene Shop
        </h2>

        <p className="max-w-3xl mx-auto text-center text-purple-100/80 leading-relaxed">
          Selene Shop adalah studio kreatif bertema bulan dan malam
          yang menyediakan layanan custom Minecraft dan art commission
          dengan sentuhan fantasy, aesthetic, dan detail tinggi.
        </p>
      </section>

      {/* ALASAN */}
      <section id="alasan" className="bg-[#0b0b2e] px-6 py-24">
        <h2 className="text-3xl font-semibold text-purple-200 text-center mb-12">
          Mengapa Harus Beli di Selene Shop?
        </h2>

        <div className="grid gap-6 max-w-5xl mx-auto grid-cols-1 md:grid-cols-2">
          {[
            "Custom sesuai request",
            "Tema aesthetic & fantasy",
            "Komunikasi jelas via Discord",
            "Hasil rapi & berkualitas",
          ].map((reason) => (
            <div
              key={reason}
              className="bg-black/40 border border-purple-500/20 rounded-xl p-6 text-purple-100/90"
            >
              ✨ {reason}
            </div>
          ))}
        </div>
      </section>

      {/* PRODUK */}
      <section id="produk" className="bg-black px-6 py-24">
        <h2 className="text-3xl font-semibold text-purple-200 text-center mb-12">
          Produk Selene Shop
        </h2>

        <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Cosmetica Face MC",
            "Skin Minecraft",
            "Art / Commission",
            "Minecraft Build",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#0b0b2e]/60 border border-purple-500/20 rounded-2xl overflow-hidden"
            >
              <div className="h-40 bg-gradient-to-br from-purple-500/20 to-purple-900/40 flex items-center justify-center text-purple-200/60 text-sm">
                Preview Image
              </div>

              <div className="p-6">
                <h3 className="text-purple-200 font-semibold mb-2">
                  {item}
                </h3>
                <p className="text-sm text-purple-100/80 mb-4">
                  Custom sesuai request, aesthetic & fantasy theme.
                </p>

                <a
                  href="https://discord.gg/muH44HDrea"
                  target="_blank"
                  className="text-sm text-purple-300 hover:underline"
                >
                  Order →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CARA ORDER */}
      <section id="cara-order" className="bg-[#0b0b2e] px-6 py-24">
        <h2 className="text-3xl font-semibold text-purple-200 text-center mb-12">
          Cara Order
        </h2>

        <ol className="max-w-3xl mx-auto space-y-4 text-purple-100/90">
          <li>1️⃣ Join Discord Selene Shop</li>
          <li>2️⃣ Pilih produk yang ingin dipesan</li>
          <li>3️⃣ Kirim detail & request ke admin</li>
          <li>4️⃣ Lakukan pembayaran</li>
          <li>5️⃣ Tunggu proses & hasil dikirim</li>
        </ol>
      </section>

      {/* PEMBAYARAN */}
      <section id="pembayaran" className="bg-black px-6 py-24">
        <h2 className="text-3xl font-semibold text-purple-200 text-center mb-8">
          Metode Pembayaran
        </h2>

        <div className="max-w-3xl mx-auto text-center text-purple-100/80 space-y-2">
          <p>💳 Dana</p>
          <p>💳 OVO</p>
          <p>💳 GoPay</p>
          <p>💳 Bank Transfer</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-purple-300/60 text-sm py-6 border-t border-purple-500/10">
        © {new Date().getFullYear()} Selene Shop • Moonlit Creations
      </footer>
    </main>
  );
}
