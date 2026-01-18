"use client"; // Tambahkan ini di baris paling atas

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
            <a href="#beranda" className="text-purple-100 hover:text-purple-300 transition">
              Beranda
            </a>
            <a href="#produk" className="text-purple-100 hover:text-purple-300 transition">
              Produk
            </a>
            <a
              href="https://discord.gg/muH44HDrea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-200 transition"
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
            <h1 className="text-5xl md:text-6xl font-bold text-purple-200 mb-6 tracking-tighter">
              Selene Shop 🌙
            </h1>

            <p className="text-purple-100 mb-8 leading-relaxed">
              Moonlit Minecraft Skin, Cosmetica Face, Art Commission,
              dan Build aesthetic dengan sentuhan fantasy & night theme.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#produk"
                className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition font-bold"
              >
                Lihat Produk
              </a>

              <a
                href="https://discord.gg/muH44HDrea"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full border border-purple-400 hover:bg-purple-400/10 transition font-bold"
              >
                Order via Discord
              </a>
            </div>
          </div>
        </section>

        {/* TENTANG */}
        <section id="tentang" className="bg-[#05051a] px-6 py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full"></div>

          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[40px] blur opacity-25"></div>
            
            <div className="relative bg-[#0b0b2e]/40 border border-purple-500/10 backdrop-blur-xl p-12 md:p-16 rounded-[40px] shadow-2xl">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-300 text-center mb-4 tracking-tight">
                  Tentang Selene Shop
                </h2>
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-[1px] w-8 bg-purple-500/30"></div>
                  <p className="text-purple-300/90 font-light tracking-[0.2em] uppercase text-[10px]">
                    "Where creativity meets the moonlight"
                  </p>
                  <div className="h-[1px] w-8 bg-purple-500/30"></div>
                </div>

                <div className="space-y-6 text-center max-w-2xl">
                  <p className="text-purple-100/80 leading-relaxed text-lg">
                    Selene Shop adalah <span className="text-purple-200 font-medium">studio kreatif digital</span> bertema bulan yang menghadirkan layanan khusus <span className="text-purple-200 font-medium">Minecraft</span> dan <span className="text-purple-200 font-medium">commission art</span>. 
                  </p>
                  <p className="text-purple-100/60 text-sm md:text-base italic border-t border-purple-500/10 pt-6">
                    Terinspirasi dari keindahan malam yang elegan, kami berkomitmen memberikan hasil desain yang rapi dan konsisten melalui proses yang transparan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUK LIST (Sama seperti kodemu, sudah sangat bagus) */}
        <section id="produk" className="bg-black px-6 py-24">
          <div className="max-w-7xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-purple-200 mb-4">Layanan Kreatif Kami</h2>
            <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
          </div>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {/* Pakai layout card yang kamu buat, sudah oke! */}
            {/* ... bagian ini tetap sama dengan kodemu ... */}
          </div>
        </section>

        {/* PEMBAYARAN */}
        <section id="pembayaran" className="bg-black px-6 py-24">
          <div className="max-w-5xl mx-auto bg-[#0b0b2e]/60 border border-purple-500/20 rounded-[40px] p-8 md:p-12 shadow-[0_0_50px_rgba(168,85,247,0.1)] text-center">
            <h2 className="text-3xl font-bold text-purple-200 mb-2">Metode Pembayaran</h2>
            <div className="h-1 w-20 bg-purple-500 mx-auto mb-10"></div>
            
            <a 
              href="https://sociabuzz.com/seleneshop/tribe" 
              target="_blank" 
              className="inline-flex items-center gap-4 bg-purple-600 hover:bg-purple-500 px-8 py-4 rounded-2xl transition shadow-lg shadow-purple-600/20"
            >
              <span className="text-2xl">🛡️</span>
              <span className="font-bold text-lg">Bayar Otomatis via Sociabuzz</span>
            </a>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 opacity-70">
              {['OVO', 'DANA', 'ShopeePay', 'QRIS'].map((pay) => (
                <div key={pay} className="bg-white/5 border border-white/10 py-4 rounded-xl">
                  <span className="font-bold text-sm tracking-widest">{pay}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-purple-300/60 text-sm py-12 border-t border-purple-500/10 bg-black">
          © {new Date().getFullYear()} Selene Shop • Moonlit Creations
          <br />
          <span className="text-[10px] opacity-50 uppercase tracking-[0.2em]">Crafted for the Minecraft Community</span>
        </footer>
      </main>
    </>
  );
}
