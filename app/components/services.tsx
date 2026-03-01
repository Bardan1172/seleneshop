"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

// Struktur Data Baru: Setiap kategori punya sub-item preview
const MASTER_SERVICES = [
  {
    id: "render",
    title: "MINECRAFT RENDER",
    tag: "CINEMATIC GFX & SCENE",
    details: [
      { label: "TEMA: GFX, SCENE, MANIP", price: "25K - 45K" },
      { label: "RATIO 1:1 / 9:16", price: "+2K" },
      { label: "NO BACKGROUND", price: "8K - 22K" }
    ],
    previews: ["/comingsoon.png", "/comingsoon.png", "/comingsoon.png"],
    btn: "BOOKING RENDER"
  },
  {
    id: "face",
    title: "COSMETICA FACE",
    tag: "*KHUSUS MINECRAFT PREMIUM",
    details: [
      { label: "FACE 512px", price: "30K" },
      { label: "FACE 1024px", price: "50K" },
      { label: "CUSTOM EXPRESSION", price: "FREE" }
    ],
    previews: ["/comingsoon.png", "/comingsoon.png", "/comingsoon.png"],
    btn: "ORDER FACE"
  },
  {
    id: "skin",
    title: "MINECRAFT SKIN",
    tag: "CLASSIC / SLIM MODEL",
    details: [
      { label: "SIMPLE SHADING", price: "10K" },
      { label: "FULL DETAIL (ANIME/FANTASY)", price: "15K" }
    ],
    previews: ["/comingsoon.png", "/comingsoon.png", "/comingsoon.png"],
    btn: "ORDER SKIN"
  },
  {
    id: "art",
    title: "ART & ILLUSTRATION",
    tag: "DIGITAL HAND-DRAWN",
    details: [
      { label: "SIMPLE SHADE / CHIBI", price: "25K" },
      { label: "PNGTUBER MODEL", price: "30K" }
    ],
    previews: ["/comingsoon.png", "/comingsoon.png", "/comingsoon.png"],
    btn: "ORDER ART"
  },
  {
    id: "sticker",
    title: "CUSTOM STICKER",
    tag: "DISCORD & WHATSAPP",
    details: [
      { label: "PER PCS (BUST UP)", price: "10K" },
      { label: "PACK (6 STICKERS)", price: "50K" }
    ],
    previews: ["/comingsoon.png", "/comingsoon.png", "/comingsoon.png"],
    btn: "ORDER STICKER"
  },
  {
    id: "build",
    title: "MINECRAFT BUILD",
    tag: "STRUCTURAL & AESTHETIC",
    details: [
      { label: "BASIC (SMALL)", price: "15K+" },
      { label: "ADVANCED (FANTASY)", price: "75K+" },
      { label: "ELITE (COMPLEX CITY)", price: "450K+" }
    ],
    previews: ["/comingsoon.png", "/comingsoon.png", "/comingsoon.png"],
    btn: "CUSTOM BUILD"
  }
];

export default function ServicesSection({ fantasyFont }: { fantasyFont: string }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activePreview, setActivePreview] = useState(0);

  // Navigasi Kategori (Layanan Utama)
  const nextCat = () => {
    setActiveCategory((prev) => (prev + 1) % MASTER_SERVICES.length);
    setActivePreview(0);
  };
  const prevCat = () => {
    setActiveCategory((prev) => (prev - 1 + MASTER_SERVICES.length) % MASTER_SERVICES.length);
    setActivePreview(0);
  };

  // Navigasi Preview Gambar (3 Gambar per layanan)
  const nextPrev = () => setActivePreview((prev) => (prev + 1) % 3);
  const prevPrev = () => setActivePreview((prev) => (prev - 1 + 3) % 3);

  const currentData = MASTER_SERVICES[activeCategory];

  return (
    <section id="layanan" className="relative z-10 py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">SERVICES CATALOG</span>
        <h2 className={`${fantasyFont} text-5xl md:text-8xl font-bold text-white uppercase`}>LAYANAN</h2>
      </div>

      {/* --- MENU NAVIGASI LAYANAN (TOP SLIDE) --- */}
      <div className="max-w-4xl mx-auto mb-12 flex items-center justify-between bg-white/[0.02] border border-white/10 p-4 rounded-3xl backdrop-blur-xl">
        <button onClick={prevCat} className="p-3 hover:text-purple-500 transition-colors text-white/50"><ChevronLeft /></button>
        <div className="flex flex-col items-center">
          <motion.p 
            key={currentData.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${fantasyFont} text-lg md:text-2xl font-bold text-purple-400 tracking-widest text-center`}
          >
            {activeCategory + 1} / {MASTER_SERVICES.length} — {currentData.title}
          </motion.p>
        </div>
        <button onClick={nextCat} className="p-3 hover:text-purple-500 transition-colors text-white/50"><ChevronRight /></button>
      </div>

      {/* --- MAIN DISPLAY BOX --- */}
      <ScrollReveal>
        <div className="max-w-6xl mx-auto relative bg-white/[0.03] border border-white/10 rounded-[40px] md:rounded-[60px] overflow-hidden backdrop-blur-2xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            
            {/* KIRI: INFO HARGA & DETAIL */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentData.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="p-8 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10"
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="text-purple-500 w-4 h-4" />
                    <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">{currentData.tag}</span>
                  </div>
                  <h3 className={`${fantasyFont} text-4xl md:text-6xl font-bold text-white mb-8 leading-tight`}>
                    {currentData.title.split(' ')[0]} <br/> 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                      {currentData.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>

                  <div className="space-y-6">
                    {currentData.details.map((detail, idx) => (
                      <div key={idx} className="group border-l-2 border-white/5 hover:border-purple-500/50 pl-6 transition-all">
                        <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1 group-hover:text-white/60">{detail.label}</p>
                        <p className="text-xl font-bold text-white tracking-tighter">{detail.price}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.a 
                  whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#000000" }}
                  whileTap={{ scale: 0.98 }}
                  href="https://discord.gg/muH44HDrea" 
                  target="_blank" 
                  className="mt-12 w-full text-center py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-[11px] text-white uppercase tracking-[0.4em] shadow-lg transition-all"
                >
                  {currentData.btn}
                </motion.a>
              </motion.div>
            </AnimatePresence>

            {/* KANAN: PREVIEW PRODUK (SUB-SLIDE) */}
            <div className="relative group aspect-square lg:aspect-auto bg-black/40 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={`${currentData.id}-${activePreview}`}
                  src={currentData.previews[activePreview]}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  alt="Sample Product"
                />
              </AnimatePresence>

              {/* Glassmorphism Navigation for Preview */}
              <div className="absolute inset-x-6 bottom-8 flex items-center justify-between">
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <div 
                      key={i} 
                      className={`h-1.5 transition-all duration-300 rounded-full ${i === activePreview ? "w-8 bg-purple-500 shadow-[0_0_10px_#a855f7]" : "w-2 bg-white/20"}`} 
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button onClick={prevPrev} className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-purple-600 transition-all"><ChevronLeft size={18} /></button>
                  <button onClick={nextPrev} className="p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-purple-600 transition-all"><ChevronRight size={18} /></button>
                </div>
              </div>

              {/* Label Preview */}
              <div className="absolute top-8 right-8 px-4 py-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                <p className="text-[9px] font-bold text-white/70 tracking-widest uppercase">Sample Preview {activePreview + 1}</p>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>

      {/* FOOTER TIP */}
      <div className="mt-12 text-center">
        <p className="text-[9px] text-white/20 uppercase tracking-[0.3em] italic">Gunakan panah untuk menavigasi kategori dan preview produk</p>
      </div>
    </section>
  );
}
