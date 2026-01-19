"use client";

import Moon from "@/components/Moon";

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

      <main className="relative pt-16 min-h-screen text-white bg-black overflow-hidden">
        
        {/* 🌙 KOMPONEN MOON - Diletakkan paling atas agar jadi background */}
        <Moon />

        {/* BERANDA / HERO */}
        <section
          id="beranda"
          className="min-h-[70vh] flex flex-col items-center justify-center relative z-10"
        >
          <div className="text-center max-w-2xl px-6">
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

        {/* BRAND PARTNERS SECTION - VERSI DI-UPGRADE */}
        <section className="relative z-20 bg-black/40 border-y border-purple-500/10 py-16 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col items-center justify-center gap-12">
              <div className="text-center">
                <span className="text-purple-200 text-xl md:text-3xl uppercase tracking-[0.7em] font-black drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  Official Partners
                </span>
                <div className="h-[3px] w-48 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-4"></div>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                <div className="group cursor-default">
                  <span className="text-3xl md:text-5xl font-bold tracking-tighter text-white/10 group-hover:text-white transition-all duration-700 group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                    SELENE SHOP
                  </span>
                </div>
                
                <span className="text-purple-500/20 text-4xl font-light">✕</span>
                
                <div className="group cursor-default">
                  <span className="text-3xl md:text-5xl font-bold tracking-tighter text-white/10 group-hover:text-blue-300 transition-all duration-700 group-hover:drop-shadow-[0_0_20px_rgba(147,197,253,0.4)]">
                    HEPPYCLOUD
                  </span>
                </div>

                <span className="text-purple-500/20 text-4xl font-light">✕</span>

                <div className="group cursor-default">
                  <span className="text-3xl md:text-5xl font-bold tracking-tighter text-white/10 group-hover:text-orange-400 transition-all duration-700 group-hover:drop-shadow-[0_0_20px_rgba(251,146,60,0.4)]">
                    BANGBLAZE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TENTANG */}
        <section id="tentang" className="relative z-10 bg-[#05051a]/80 px-6 py-32 overflow-hidden border-b border-purple-500/10">
          <div className="max-w-4xl mx-auto relative group">
            <div className="relative bg-[#0b0b2e]/40 border border-purple-500/10 backdrop-blur-xl p-12 md:p-16 rounded-[40px] shadow-2xl">
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-title font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-300 text-center mb-4 tracking-tight">
                  Tentang Selene Shop
                </h2>
                <div className="flex items-center gap-4 mb-10">
                  <div className="h-[1px] w-8 bg-purple-500/30"></div>
                  <p className="text-purple-300/90 font-light tracking-[0.2em] uppercase text-xs">
                    "Where creativity meets the moonlight"
                  </p>
                  <div className="h-[1px] w-8 bg-purple-500/30"></div>
                </div>
                <p className="text-purple-100/80 leading-relaxed text-lg font-light text-center">
                  Selene Shop adalah <span className="text-purple-200 font-medium">studio kreatif digital</span> bertema bulan yang menghadirkan layanan khusus <span className="text-purple-200 font-medium">Minecraft</span> dan <span className="text-purple-200 font-medium">commission art</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ALASAN / KEUNGGULAN */}
        <section id="alasan" className="relative z-10 bg-[#05051a]/60 px-6 py-28">
            <h2 className="text-4xl font-title font-bold text-center mb-16 text-purple-200 tracking-wide">
              Mengapa Harus Memilih Selene?
            </h2>
            <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 md:grid-cols-2">
              {[
                { title: "Custom Sesuai Request", desc: "Kami menerjemahkan imajinasi kamu ke dalam desain yang presisi agar merepresentasikan identitas unik kamu." },
                { title: "Tema Aesthetic & Fantasy", desc: "Spesialisasi kami terletak pada perpaduan nuansa fantasi yang ajaib dengan gaya malam yang lembut." },
                { title: "Komunikasi via Discord", desc: "Wadah diskusi yang responsif dan transparan. Kamu akan mendapatkan update berkala mengenai progres pesanan." },
                { title: "Hasil Rapi & Original", desc: "Setiap piksel dikerjakan dengan tingkat ketelitian tinggi. Kami menjamin keaslian karya yang profesional." },
              ].map((reason) => (
                <div key={reason.title} className="bg-white/[0.05] border border-purple-500/10 backdrop-blur-md rounded-2xl p-8 hover:border-purple-500/40 transition-all">
                  <h4 className="font-semibold text-lg text-purple-200 mb-2">{reason.title}</h4>
                  <p className="text-purple-100/60 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              ))}
            </div>
        </section>

        {/* PRODUK LIST */}
        <section id="produk" className="relative z-10 bg-black/80 px-6 py-24">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-title font-bold text-center mb-16 text-purple-200 text-moonlight">
              Layanan Kreatif Kami
            </h2>
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Gunakan loop Produk Anda di sini */}
              {/* Contoh satu produk */}
              <div className="bg-[#0b0b2e]/60 border border-purple-400/40 rounded-2xl p-6 flex flex-col hover:-translate-y-2 transition-all">
                <h3 className="text-xl font-bold text-purple-300 mb-1">🌙 Cosmetica Face</h3>
                <p className="text-[10px] text-purple-100/60 mb-6 italic">*Khusus Minecraft Premium</p>
                <div className="flex-grow space-y-4 mb-8">
                  <div className="border-l-2 border-purple-500 pl-4">
                    <p className="font-bold text-purple-200 text-xs uppercase">ONLY FACE: 30K</p>
                    <p className="text-[11px] text-purple-100/60">Custom mata, alis, dan mulut sesuai request.</p>
                  </div>
                </div>
                <a href="https://discord.gg/muH44HDrea" className="text-center py-2.5 bg-purple-600 text-white rounded-xl font-bold shadow-[0_4px_15px_rgba(168,85,247,0.2)]">Order Face</a>
              </div>
              {/* Ulangi untuk produk lainnya sesuai data Anda */}
            </div>
          </div>
        </section>

        {/* CARA ORDER */}
        <section id="cara-order" className="relative z-10 bg-[#05051a]/90 px-6 py-28">
           <div className="max-w-7xl mx-auto">
             <h2 className="text-4xl font-title font-bold text-center text-purple-100 mb-16">Cara Order Mudah</h2>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               {[
                 { n: "1", t: "Join Discord", d: "Masuk ke server kami, pergi ke channel #create-ticket." },
                 { n: "2", t: "Pilih Produk", d: "Pilih layanan di dalam tiket & kirim referensi custom kamu." },
                 { n: "3", t: "Konfirmasi", d: "Lakukan pembayaran & kirim bukti transfer di dalam tiket." },
                 { n: "4", t: "Terima Hasil", d: "Pesanan dikerjakan & hasil final dikirim via room tiket." },
               ].map((step) => (
                 <div key={step.n} className="bg-white/[0.03] border border-purple-500/10 p-8 rounded-[40px] relative overflow-hidden group">
                   <span className="absolute -top-2 -right-2 text-6xl font-bold text-white/5">0{step.n}</span>
                   <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center font-bold mb-4">{step.n}</div>
                   <h3 className="text-lg font-bold text-purple-200 mb-2">{step.t}</h3>
                   <p className="text-sm text-purple-100/50">{step.d}</p>
                 </div>
               ))}
             </div>
           </div>
        </section>

        {/* PEMBAYARAN */}
        <section id="pembayaran" className="relative z-10 bg-black px-6 py-24">
          <div className="max-w-5xl mx-auto bg-[#0b0b2e]/60 border border-purple-500/20 rounded-[40px] p-8 md:p-12">
            <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-10">Metode Pembayaran</h2>
            <a href="https://sociabuzz.com/seleneshop/tribe" target="_blank" className="flex items-center gap-4 bg-[#0b0b2e] border border-purple-500/30 rounded-2xl p-6 hover:bg-purple-600/10 transition">
               <span className="text-4xl">🛡️</span>
               <div>
                 <span className="block font-bold text-white text-xl">Sociabuzz (Bayar Otomatis)</span>
                 <p className="text-xs text-purple-200/70">Mendukung QRIS, GoPay, Dana, OVO, & Bank.</p>
               </div>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative z-10 text-center text-purple-300/60 text-sm py-12 border-t border-purple-500/10 bg-black">
          © {new Date().getFullYear()} Selene Shop • Moonlit Creations
          <br />
          <span className="text-xs opacity-50">Handcrafted with passion for the Minecraft Community</span>
        </footer>
      </main>
    </>
  );
}
