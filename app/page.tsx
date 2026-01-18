'use client';

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen text-white bg-black overflow-x-hidden">
      
      {/* BERANDA / HERO */}
      <section
        id="beranda"
        className="min-h-screen bg-gradient-to-b from-[#0b0b2e] to-black flex items-center justify-center border-b border-purple-500/10"
      >
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl px-6"
        >
          <h1 className="text-5xl md:text-7xl font-title font-bold text-purple-200 mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
            Selene Shop 🌙
          </h1>

          <p className="text-purple-100 mb-8 leading-relaxed text-lg opacity-80">
            Moonlit Minecraft Skin, Cosmetica Face, Art Commission,
            dan Build aesthetic dengan sentuhan fantasy & night theme.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#produk"
              className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-all hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)] font-bold"
            >
              Lihat Produk
            </a>

            <a
              href="https://discord.gg/muH44HDrea"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full border border-purple-400 hover:bg-purple-400/10 transition-all hover:scale-105 font-bold"
            >
              Order via Discord
            </a>
          </div>
        </motion.div>
      </section>

      {/* TENTANG */}
      <section id="tentang" className="bg-[#05051a] px-6 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-purple-600/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full"></div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-[40px] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
          
          <div className="relative bg-[#0b0b2e]/40 border border-purple-500/10 backdrop-blur-xl p-12 md:p-16 rounded-[40px] shadow-2xl">
            <div className="flex flex-col items-center">
              <h2 className="text-4xl font-title font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-100 to-purple-300 text-center mb-4 tracking-tight">
                Tentang Selene Shop
              </h2>
              
              <div className="flex items-center gap-4 mb-10">
                <div className="h-[1px] w-8 bg-purple-500/30"></div>
                <p className="text-purple-300/90 font-light tracking-[0.2em] uppercase text-[10px] sm:text-xs text-center">
                  "Where creativity meets the moonlight"
                </p>
                <div className="h-[1px] w-8 bg-purple-500/30"></div>
              </div>

              <div className="space-y-6 text-center max-w-2xl">
                <p className="text-purple-100/80 leading-relaxed text-lg font-light">
                  Selene Shop adalah <span className="text-purple-200 font-medium">studio kreatif digital</span> bertema bulan yang menghadirkan layanan khusus <span className="text-purple-200 font-medium">Minecraft</span> dan <span className="text-purple-200 font-medium">commission art</span>. 
                </p>
                
                <p className="text-purple-100/60 leading-relaxed text-sm md:text-base italic border-t border-purple-500/10 pt-6">
                  Terinspirasi dari keindahan malam yang elegan dan lembut, kami berkomitmen memberikan hasil desain yang rapi dan konsisten melalui proses yang transparan. Kami siap membantu kamu tampil beda dan estetik di dunia digital.
                </p>
              </div>
              <div className="mt-10 text-purple-400/30 text-2xl">✦</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* PRODUK LIST */}
      <section id="produk" className="bg-black px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-12">
            Layanan Kreatif Kami
          </h2>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            {/* 1. Cosmetica Face */}
            <div className="bg-[#0b0b2e]/60 border border-purple-400/30 rounded-2xl p-6 flex flex-col hover:border-purple-400 transition-colors group">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-purple-300 mb-2 transition-colors group-hover:text-white">🌙 Cosmetica Face</h3>
                <p className="text-xs text-purple-100/60 mb-4">*Khusus Minecraft Premium</p>
                <div className="space-y-4 text-sm text-purple-100/80 mb-6">
                  <div className="border-l-2 border-purple-500 pl-2">
                    <p className="font-bold text-purple-400">ONLY FACE: 30K</p>
                    <p className="text-xs opacity-70">Custom mata, alis, dan mulut sesuai request.</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-2">
                    <p className="font-bold text-blue-400">FACE + RAMBUT HD: 50K</p>
                    <p className="text-xs opacity-70">Termasuk shading rambut detail dan ekspresi.</p>
                  </div>
                </div>
              </div>
              <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition mt-auto shadow-lg shadow-purple-900/20">Order Face</a>
            </div>

            {/* 2. Minecraft Skin */}
            <div className="bg-[#0b0b2e]/60 border border-purple-400/30 rounded-2xl p-6 flex flex-col hover:border-purple-400 transition-colors group">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-purple-300 mb-4 transition-colors group-hover:text-white">🎮 Minecraft Skin</h3>
                <div className="space-y-4 text-sm text-purple-100/80 mb-6">
                  <div className="border-l-2 border-green-500 pl-2">
                    <p className="font-bold text-green-400">SIMPLE: 10K</p>
                    <p className="text-xs opacity-70">Desain minimalis dengan shading standar.</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-2">
                    <p className="font-bold text-purple-400">FULL DETAIL: 15K</p>
                    <p className="text-xs opacity-70">Shading kompleks untuk Anime atau Fantasy.</p>
                  </div>
                </div>
              </div>
              <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition mt-auto shadow-lg shadow-purple-900/20">Order Skin</a>
            </div>

            {/* 3. Art & Illustration */}
            <div className="bg-[#0b0b2e]/60 border border-purple-400/30 rounded-2xl p-6 flex flex-col hover:border-purple-400 transition-colors group">
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-purple-300 mb-4 transition-colors group-hover:text-white">🎨 Art & Illustration</h3>
                <div className="space-y-3 text-xs text-purple-100/80 mb-6">
                  <div className="border-l-2 border-yellow-500 pl-2">
                    <p className="font-bold text-yellow-400 text-sm">SIMPLE SHADE: 25K</p>
                    <p className="opacity-70">Fanart atau Original Character (OC).</p>
                  </div>
                  <div className="border-l-2 border-pink-500 pl-2">
                    <p className="font-bold text-pink-400 text-sm">CHIBI PNGTUBER: 25K</p>
                    <p className="opacity-70">Karakter mungil untuk streaming/konten.</p>
                  </div>
                  <div className="border-l-2 border-purple-500 pl-2">
                    <p className="font-bold text-purple-400 text-sm">PNGTUBER: 30K</p>
                    <p className="opacity-70">Model PNGtuber standar (Bust-up).</p>
                  </div>
                </div>
              </div>
              <a href="https://discord.gg/muH44HDrea" className="block text-center py-2 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition mt-auto shadow-lg shadow-purple-900/20">Order Art</a>
            </div>

          </div>
        </div>
      </section>

      {/* METODE PEMBAYARAN */}
      <section id="pembayaran" className="bg-black px-6 py-24">
        <div className="max-w-5xl mx-auto bg-[#0b0b2e]/60 border border-purple-500/20 rounded-[40px] p-8 md:p-12 shadow-[0_0_50px_rgba(168,85,247,0.1)]">
          <h2 className="text-3xl font-title font-semibold text-purple-200 text-center mb-6">
            Metode Pembayaran
          </h2>
          <div className="flex flex-col gap-6">
            <a 
              href="https://sociabuzz.com/seleneshop/tribe" 
              target="_blank" 
              className="bg-purple-600 hover:bg-purple-700 p-6 rounded-2xl flex flex-col md:flex-row items-center justify-between transition-all"
            >
              <div className="text-center md:text-left">
                <span className="font-bold text-xl block text-white">Sociabuzz (QRIS & Bank)</span>
                <p className="text-sm text-purple-100/70">Pembayaran otomatis, lebih cepat & aman.</p>
              </div>
              <span className="mt-4 md:mt-0 px-6 py-2 bg-white/10 rounded-full font-bold">Bayar Sekarang</span>
            </a>
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
  );
}
