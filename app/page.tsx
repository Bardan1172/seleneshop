export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0b0b2e] to-black text-white flex items-center justify-center">
      <section className="text-center max-w-2xl px-6">
        <h1 className="text-5xl font-bold text-purple-200 mb-6">
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
            href="https://discord.gg/ISI_DISCORD_KAMU"
            className="px-6 py-3 rounded-full border border-purple-400 hover:bg-purple-400/10 transition"
          >
            Order via Discord
          </a>
        </div>
      </section>
    </main>
  );
}

