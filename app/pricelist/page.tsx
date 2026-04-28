"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown } from "lucide-react";

const SERVICES_DATA = [
  {
    id: "face",
    title: "COSMETICA FACE",
    tag: "KHUSUS MINECRAFT PREMIUM",
    items: [
      { name: "FACE 512px", price: "30.000", desc: "Resolusi standar untuk player" },
      { name: "FACE 1024px", price: "65.000", desc: "Resolusi HD, detail lebih banyak" },
      { name: "FACE 2048px", price: "100.000", desc: "Resolusi Ultra, kualitas premium" },
    ],
  },
  {
    id: "skin",
    title: "MINECRAFT SKIN",
    tag: "CLASSIC / SLIM MODEL",
    items: [
      { name: "SIMPLE SHADING", price: "10.000", desc: "Basic shading, cocok untuk beginner" },
      { name: "FULL DETAIL (ANIME)", price: "15.000", desc: "Detail penuh gaya anime" },
      { name: "FULL DETAIL (FANTASY)", price: "15.000", desc: "Detail penuh gaya fantasy" },
    ],
  },
  {
    id: "art",
    title: "ART & ILLUSTRATION",
    tag: "DIGITAL HAND-DRAWN",
    items: [
      { name: "SIMPLE SHADE / CHIBI", price: "25.000", desc: "Gaya chibi simple shading" },
      { name: "PNGTUBER MODEL", price: "30.000", desc: "Model pngtuber full color" },
    ],
  },
  {
    id: "sticker",
    title: "CUSTOM STICKER",
    tag: "DISCORD & WHATSAPP",
    items: [
      { name: "PER PCS (BUST UP)", price: "10.000", desc: "Single sticker per karakter" },
      { name: "PACK (6 STICKERS)", price: "50.000", desc: "6 sticker verschiedene poses" },
    ],
  },
  {
    id: "render",
    title: "MINECRAFT RENDER",
    tag: "CINEMATIC GFX & SCENE",
    items: [
      { name: "GFX (TEMA)", price: "25.000", desc: "Graphic design style" },
      { name: "SCENE (TEMA)", price: "35.000", desc: "Landscape scene" },
      { name: "MANIP (TEMA)", price: "45.000", desc: "Manipulation style" },
      { name: "RATIO 1:1 / 9:16", price: "+2.000", desc: "Additional ratio" },
      { name: "NO BACKGROUND", price: "8.000 - 22.000", desc: "Tanpa background" },
    ],
  },
];

export default function PriceListPage() {
  const fantasyFont = "font-serif italic tracking-wider uppercase";
  const [isLoading, setIsLoading] = useState(true);
  const [openSections, setOpenSections] = useState<string[]>(["face"]);

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  if (isLoading) {
    return (
      <div className="bg-[#010108] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`${fantasyFont} text-4xl text-purple-500`}>LOADING...</motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#010108] text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 md:py-6 pointer-events-none">
        <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-2 pl-3 md:pl-4 pr-3 md:pr-6 shadow-2xl">
          <div className="flex items-center gap-2 group">
            <img src="/selene_shop.png" alt="Logo" className="w-10 h-10 md:w-14 md:h-14 object-contain rounded-full mix-blend-screen transition-transform group-hover:scale-110" />
            <div className={`${fantasyFont} text-[10px] md:text-sm font-bold tracking-[0.3em] hidden sm:block`}>SELENE<span className="text-purple-500 ml-1">✦</span></div>
          </div>
          <div className="flex items-center gap-3">
            <a href="/" className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase text-white/60 hover:text-white">HOME</a>
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="https://discord.gg/muH44HDrea" target="_blank" className="bg-purple-600 hover:bg-purple-500 text-white px-3 md:px-6 py-2 rounded-xl text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase shadow-lg">JOIN DISCORD</motion.a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">PRICE LIST</span>
            <h1 className={`${fantasyFont} text-5xl md:text-8xl font-bold text-white uppercase`}>DAFTAR HARGA</h1>
            <p className="text-white/40 text-[10px] md:text-sm mt-6 uppercase tracking-widest italic max-w-2xl mx-auto">
              Semua harga sudah termasuk kualitas premium dan service terbaik dari Tim Selene Shop
            </p>
          </div>

          {/* Price List Sections */}
          <div className="space-y-4">
            {SERVICES_DATA.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
              >
                <button
                  onClick={() => toggleSection(service.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Sparkles className="text-purple-500 w-4 h-4" />
                    <div className="text-left">
                      <h2 className={`${fantasyFont} text-xl md:text-3xl font-bold text-white`}>{service.title}</h2>
                      <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-wider mt-1">{service.tag}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openSections.includes(service.id) ? 180 : 0 }}
                    className="text-white/50"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openSections.includes(service.id) ? "auto" : 0,
                    opacity: openSections.includes(service.id) ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="border-t border-white/10 pt-6 md:pt-8 space-y-3 md:space-y-4">
                      {service.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                        >
                          <div>
                            <h3 className="text-sm md:text-base font-bold text-white">{item.name}</h3>
                            <p className="text-white/40 text-[9px] md:text-[10px] mt-1">{item.desc}</p>
                          </div>
                          <div className="text-right">
                            <span className={`${fantasyFont} text-lg md:text-2xl font-bold text-purple-400`}>
                              {item.price}
                            </span>
                            <span className="text-white/30 text-[9px] md:text-[10px] ml-1">IDR</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="https://discord.gg/muH44HDrea"
                        target="_blank"
                        className="inline-block px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-[9px] md:text-[10px] font-black tracking-widest uppercase hover:bg-purple-600 transition-all"
                      >
                        PESAN SEKARANG
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 p-6 md:p-8 bg-purple-500/5 border border-purple-500/20 rounded-3xl text-center">
            <p className="text-white/50 text-[10px] md:text-sm italic">
              *Harga dapat berubah sewaktu-waktu. Untuk info lebih lanjut, hubungi kami melalui Discord.<br />
              *Setiap pesanan mendapat 1x free revision.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-10 border-t border-white/5 bg-[#010108] px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className={`${fantasyFont} text-base md:text-lg font-bold mb-4 tracking-[0.5em] opacity-80 uppercase text-center`}>SELENE SHOP</div>
          <p className="text-white/40 text-[9px] md:text-[11px] uppercase tracking-[0.15em]">© 2026 SeleneShop. All rights reserved.</p>
          <div className="w-10 h-[1px] bg-purple-500 mt-6 opacity-30" />
        </div>
      </footer>
    </div>
  );
}