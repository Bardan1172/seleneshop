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
            <a href="#beranda" className="text-purple-100 hover:text-purple-300 transition">Beranda</a>
            <a href="#produk" className="text-purple-100 hover:text-purple-300 transition">Produk</a>
            <a href="https://discord.gg/muH44HDrea" target="_blank" className="text-purple-300 hover:text-purple-200 transition">Discord</a>
          </div>
        </div>
      </nav>

      <main className="min-h-screen text-white bg-black">
        
        {/* 1. BERANDA / HERO */}
        <section id="beranda" className="pt-32 pb-20 bg-gradient-to-b from-[#0b0b2e] to-black flex items-center justify-center border-b border-purple-500/10">
          <div className="text-center max-w-2xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-purple-200 mb-6">Selene Shop 🌙</h1>
            <p className="text-purple-100 mb-8 leading-relaxed">
              Moonlit Minecraft Skin, Cosmetica Face, Art Commission, dan Build aesthetic dengan sentuhan fantasy & night theme.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#produk" className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition">Lihat Produk</a>
              <a href="https://discord.gg/muH44HDrea" target="_blank" className="px-6 py-3 rounded-full border border-purple-400 hover:bg-purple-400/10 transition">Order via Discord</a>
            </div>
          </div>
        </section>

        {/* 2. TENTANG */}
        <section id="tentang" className="bg-[#05051a] px-6 py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full"></div>
          <div className="max-w-4xl mx-auto relative bg-[#0b0b2e]/40 border border-purple-500/10 backdrop-blur-xl p-12 rounded-[40px]">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-purple-100 mb-4">Tentang Selene Shop</h2>
              <p className="text-purple-100/80 text-lg font-light mb-6">
                Selene Shop adalah <span className="text-purple-200 font-medium">studio kreatif digital</span> bertema bulan khusus Minecraft dan commission art.
              </p>
              <p className="text-purple-100/60 italic border-t border-purple-500/10 pt-6">
                Terinspirasi dari keindahan malam yang elegan, kami berkomitmen memberikan hasil desain yang rapi dan konsisten.
              </p>
            </div>
          </div>
        </section>

        {/* 3. ALASAN */}
        <section id="alasan" className="bg-black px-6 py-24 border-y border-purple-500/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-200 text-center mb-16">Mengapa Memilih Kami?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="p-6 bg-white/5 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition">
                <h4 className="font-bold text-purple-200 mb-2">✨ Custom Request</h4>
                <p className="text-sm text-purple-100/60">Desain presisi sesuai identitas unik kamu.</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-purple-500/10 hover:border-purple-500/30 transition">
                <h4 className="font-bold text-purple-200 mb-2">✨ Tema Aesthetic</h4>
                <p className="text-sm text-purple-100/60">Perpaduan nuansa fantasi dan gaya malam yang lembut.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRODUK LIST */}
        <section id="produk" className="bg-[#05051a] px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-purple-200 text-center mb-12">Layanan Kreatif Kami</h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              
              {/* Card Cosmetica */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400/30 rounded-2xl p-6 flex flex-col hover:border-purple-400 transition">
                <h3 className="text-xl font-bold text-purple-300 mb-2">🌙 Cosmetica Face</h3>
                <p className="text-xs text-purple-100/60 mb-4">*Minecraft Premium Only</p>
                <div className="space-y-3 mb-6">
                   <p className="text-sm font-bold text-purple-400">ONLY FACE: 30K</p>
                   <p className="text-sm font-bold text-blue-400">FACE + RAMBUT HD: 50K</p>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="mt-auto block text-center py-2 bg-purple-600 rounded-lg font-bold">Order Face</a>
              </div>

              {/* Card Skin */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400/30 rounded-2xl p-6 flex flex-col hover:border-purple-400 transition">
                <h3 className="text-xl font-bold text-purple-300 mb-2">🎮 Minecraft Skin</h3>
                <p className="text-xs text-purple-100/60 mb-4">Custom skin high quality</p>
                <div className="space-y-3 mb-6">
                   <p className="text-sm font-bold text-green-400">SIMPLE: 10K</p>
                   <p className="text-sm font-bold text-purple-400">FULL DETAIL: 15K</p>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="mt-auto block text-center py-2 bg-purple-600 rounded-lg font-bold">Order Skin</a>
              </div>

              {/* Card Build */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400/30 rounded-2xl p-6 flex flex-col hover:border-purple-400 transition">
                <h3 className="text-xl font-bold text-purple-300 mb-2">🏗️ Minecraft Build</h3>
                <p className="text-xs text-purple-100/60 mb-4">Mega Project & Aesthetic Build</p>
                <div className="space-y-2 mb-6 text-[10px]">
                   <p className="font-bold text-blue-400">ADVANCED: 75K - 300K</p>
                   <p className="font-bold text-purple-400">ELITE: 450K - 1.5JT</p>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="mt-auto block text-center py-2 bg-purple-600 rounded-lg font-bold">Order Build</a>
              </div>

            </div>
          </div>
        </section>

        {/* 5. PEMBAYARAN */}
        <section id="pembayaran" className="bg-black px-6 py-24">
          <div className="max-w-4xl mx-auto bg-[#0b0b2e]/60 border border-purple-500/20 rounded-[40px] p-10 text-center">
            <h2 className="text-3xl font-bold text-purple-200 mb-8">Metode Pembayaran</h2>
            <a href="https://sociabuzz.com/seleneshop/tribe" target="_blank" className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl font-bold transition mb-8">
              Bayar via Sociabuzz (QRIS/Bank)
            </a>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-60">
              <div className="border border-white/10 py-2 rounded-lg">OVO</div>
              <div className="border border-white/10 py-2 rounded-lg">DANA</div>
              <div className="border border-white/10 py-2 rounded-lg">SPay</div>
              <div className="border border-white/10 py-2 rounded-lg">QRIS</div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-purple-300/40 text-xs py-12 bg-black border-t border-purple-500/10">
          © {new Date().getFullYear()} Selene Shop • Moonlit Creations
        </footer>
      </main>
    </>
  );
}
