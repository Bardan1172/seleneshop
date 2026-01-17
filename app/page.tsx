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

        {/* BERANDA */}
        <section
          id="beranda"
          className="min-h-screen bg-gradient-to-b from-[#0b0b2e] to-black flex items-center justify-center"
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
          <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-8">
            Tentang Selene Shop
          </h2>

          <p className="max-w-3xl mx-auto text-center text-purple-100/80 leading-relaxed">
            Selene Shop adalah studio kreatif digital bertema bulan yang menghadirkan layanan khusus Minecraft dan commission art. Kami berfokus pada detail, estetika, dan kualitas tinggi untuk menciptakan karakter yang unik dan berkarakter, mulai dari pembuatan Cosmetica Face, kustomisasi Skin Minecraft, hingga karya seni digital sesuai permintaan.

Terinspirasi dari keindahan malam yang elegan dan lembut, kami berkomitmen memberikan hasil desain yang rapi dan konsisten melalui proses yang transparan. Kami mengutamakan kepuasan pelanggan dengan komunikasi yang ramah, di mana setiap pesanan dikerjakan secara profesional sesuai antrean setelah pembayaran dikonfirmasi.

Selene Shop adalah tempat di mana kreativitas bertemu dengan cahaya bulan. Kami siap membantu kamu tampil beda dan estetik di dunia digital.
            <br /><br />
            Fokus kami adalah menghadirkan hasil yang personal, rapi,
            dan sesuai karakter klien.
          </p>
        </section>

        {/* ALASAN */}
        <section id="alasan" className="bg-[#0b0b2e] px-6 py-24">
          <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-12">
            Mengapa Harus Beli di Selene Shop?
          </h2>

          <div className="grid gap-6 max-w-5xl mx-auto grid-cols-1 md:grid-cols-2">
            {[
              "ustom Sesuai Request & Referensi Kami sangat menghargai ide dan visi kamu. Selene Shop memberikan kebebasan penuh bagi pelanggan untuk mengajukan konsep sendiri atau memberikan referensi gambar tertentu. Kami akan menerjemahkan imajinasi tersebut ke dalam desain yang presisi agar hasilnya benar-benar merepresentasikan identitas unik kamu.",
              "ema Aesthetic, Fantasy, dan Night-Style Sesuai dengan nama kami, spesialisasi Selene Shop terletak pada estetika yang elegan. Kami ahli dalam memadukan nuansa fantasi yang ajaib dengan gaya malam yang lembut namun ikonik. Jika kamu mencari tampilan yang dreamy, misterius, atau artistik, gaya desain kami adalah pilihan yang paling tepat.",
              "Komunikasi Jelas & Ramah via Discord Kami percaya bahwa hasil yang bagus berawal dari komunikasi yang baik. Melalui Discord, kami menyediakan wadah diskusi yang responsif dan transparan. Kamu akan mendapatkan pembaruan berkala mengenai progres pesanan, sehingga kamu merasa tenang dan terlibat dalam proses kreatifnya.",
              "Hasil Rapi, Detail, dan Original Kualitas adalah prioritas utama kami. Setiap piksel pada skin Minecraft maupun setiap garis pada art commission dikerjakan dengan tingkat ketelitian tinggi. Kami menjamin keaslian karya (originalitas), memastikan bahwa apa yang kamu terima memiliki standar profesional dan tidak pasaran.",
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
          <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-12">
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
                className="bg-[#0b0b2e]/60 border border-purple-500/20 rounded-2xl overflow-hidden transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
              >
                <div className="h-40 bg-gradient-to-br from-purple-500/20 to-purple-900/40 flex items-center justify-center text-purple-200/40 text-xs tracking-widest">
                  IMAGE PREVIEW
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
                    rel="noopener noreferrer"
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
          <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-12">
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
