export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-purple-200 font-semibold">
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

        {/* PRODUK */}
        <section id="produk" className="bg-black px-6 py-24">
          <h2 className="text-3xl font-semibold text-purple-200 text-center mb-12">
            Produk Selene Shop
          </h2>

          <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "Cosmetica Face MC",
                desc: "Custom wajah Minecraft (mata, alis, mulut), bisa request ekspresi.",
                price: "Mulai 15K",
                time: "1–2 hari",
              },
              {
                name: "Skin Minecraft",
                desc: "Skin full body custom, support Java & Bedrock.",
                price: "Mulai 25K",
                time: "2–4 hari",
              },
              {
                name: "Art / Commission",
                desc: "Fanart / OC sesuai style dan request.",
                price: "Mulai 30K",
                time: "3–7 hari",
              },
              {
                name: "Minecraft Build",
                desc: "Build rumah, base, atau map sesuai konsep.",
                price: "Mulai 50K",
                time: "By request",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-[#0b0b2e]/60 border border-purple-500/20 rounded-2xl overflow-hidden"
              >
                <div className="h-40 bg-gradient-to-br from-purple-500/20 to-purple-900/40 flex items-center justify-center text-purple-200/60 text-sm">
                  Preview
                </div>

                <div className="p-6 space-y-2">
                  <h3 className="text-purple-200 font-semibold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-purple-100/80">
                    {item.desc}
                  </p>

                  <p className="text-sm text-purple-300">
                    💰 {item.price}
                  </p>

                  <p className="text-xs text-purple-100/60">
                    ⏱ Estimasi: {item.time}
                  </p>

                  <a
                    href="https://discord.gg/muH44HDrea"
                    target="_blank"
                    className="inline-block text-sm text-purple-300 hover:underline mt-2"
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
            <li>4️⃣ Admin konfirmasi harga & estimasi</li>
            <li>5️⃣ Lakukan pembayaran</li>
            <li>6️⃣ Proses dikerjakan & hasil dikirim</li>
          </ol>

          <div className="text-center mt-10">
            <a
              href="https://discord.gg/muH44HDrea"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition"
            >
              Join Discord & Order
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-purple-300/60 text-sm py-6 border-t border-purple-500/10">
          © {new Date().getFullYear()} Selene Shop • Moonlit Creations
        </footer>
      </main>
    </>
  );
}
