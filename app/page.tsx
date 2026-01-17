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

      {/* PRODUK */}
      <section
        id="produk"
        className="min-h-screen bg-black px-6 py-24"
      >
        <h2 className="text-3xl font-semibold text-purple-200 text-center mb-12">
          Produk Selene Shop
        </h2>

        <div className="grid gap-6 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {[
            "Cosmetica Face MC",
            "Skin Minecraft",
            "Art / Commission",
            "Minecraft Build",
          ].map((item) => (
            <div
              key={item}
              className="bg-[#0b0b2e]/60 border border-purple-500/20 rounded-2xl p-6"
            >
              <h3 className="text-purple-200 font-semibold mb-2">
                {item}
              </h3>
              <p className="text-sm text-purple-100/80">
                Custom sesuai request, aesthetic & fantasy theme.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ORDER */}
      <section
        id="order"
        className="min-h-screen bg-gradient-to-t from-[#0b0b2e] to-black flex items-center justify-center"
      >
        <a
          href="https://discord.gg/muH44HDrea"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition"
        >
          Order via Discord
        </a>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-purple-300/60 text-sm py-6 border-t border-purple-500/10">
        © {new Date().getFullYear()} Selene Shop
      </footer>
    </main>
  );
}
