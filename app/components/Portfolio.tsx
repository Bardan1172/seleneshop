"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const PORTFOLIO_DATA = {
  face: {
    title: "COSMETICA FACE",
    items: [
      { src: "/face-1.png", alt: "Face Premium 1" },
      { src: "/face-2.png", alt: "Face Premium 2" },
      { src: "/face-3.png", alt: "Face Premium 3" },
      { src: "/face-1.png", alt: "Face Premium 4" },
      { src: "/face-2.png", alt: "Face Premium 5" },
      { src: "/face-3.png", alt: "Face Premium 6" },
    ],
  },
  skin: {
    title: "MINECRAFT SKIN",
    items: [
      { src: "/skin-1.png", alt: "Skin Anime 1" },
      { src: "/skin-2.png", alt: "Skin Fantasy 2" },
      { src: "/skin-3.png", alt: "Skin Detail 3" },
      { src: "/skin-1.png", alt: "Skin Anime 4" },
      { src: "/skin-2.png", alt: "Skin Fantasy 5" },
      { src: "/skin-3.png", alt: "Skin Detail 6" },
    ],
  },
  art: {
    title: "ART & ILLUSTRATION",
    items: [
      { src: "/art-1.png", alt: "Art Chibi 1" },
      { src: "/art-2.png", alt: "Art Illustration 2" },
      { src: "/art-3.png", alt: "Art Pngtuber 3" },
      { src: "/art-1.png", alt: "Art Chibi 4" },
      { src: "/art-2.png", alt: "Art Illustration 5" },
      { src: "/art-3.png", alt: "Art Pngtuber 6" },
    ],
  },
  render: {
    title: "MINECRAFT RENDER",
    items: [
      { src: "/render-1.png", alt: "Render GFX 1" },
      { src: "/render-2.png", alt: "Render Scene 2" },
      { src: "/render-1.png", alt: "Render Manip 3" },
      { src: "/render-2.png", alt: "Render GFX 4" },
      { src: "/render-1.png", alt: "Render Scene 5" },
      { src: "/render-2.png", alt: "Render Manip 6" },
    ],
  },
};

const CATEGORIES = Object.keys(PORTFOLIO_DATA) as (keyof typeof PORTFOLIO_DATA)[];

export default function PortfolioSection({ fantasyFont }: { fantasyFont: string }) {
  const [activeCat, setActiveCat] = useState<keyof typeof PORTFOLIO_DATA>("face");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentData = PORTFOLIO_DATA[activeCat];

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const nextLightbox = () => setLightboxIndex((prev) => (prev + 1) % currentData.items.length);
  const prevLightbox = () => setLightboxIndex((prev) => (prev - 1 + currentData.items.length) % currentData.items.length);

  return (
    <ScrollReveal>
      <section id="portfolio" className="relative z-10 py-24 md:py-40 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">OUR WORKS</span>
            <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold text-white uppercase`}>PORTFOLIO</h2>
            <p className="text-white/40 text-[10px] md:text-xs mt-4 uppercase tracking-widest italic">Karya-karya terbaru dari Selene Shop</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-[9px] md:text-xs font-black tracking-[0.2em] uppercase transition-all ${
                  activeCat === cat
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-white/[0.05] text-white/40 border border-white/10 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCat}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6"
            >
              {currentData.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative group aspect-square md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                  onClick={() => openLightbox(idx)}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <ZoomIn className="text-white w-8 h-8 md:w-10 md:h-10" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* See More Button */}
          <div className="mt-12 text-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://discord.gg/muH44HDrea"
              target="_blank"
              className="inline-block px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              LIHAT LEBIH BANYAK
            </motion.a>
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
              onClick={() => setLightboxOpen(false)}
            >
              <button
                className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white p-2"
                onClick={() => setLightboxOpen(false)}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
                className="absolute left-4 md:left-8 text-white/50 hover:text-purple-400 p-2 md:p-4"
              >
                <ChevronLeft size={32} />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                src={currentData.items[lightboxIndex].src}
                alt={currentData.items[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
                className="absolute right-4 md:right-8 text-white/50 hover:text-purple-400 p-2 md:p-4"
              >
                <ChevronRight size={32} />
              </button>

              <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs md:text-sm">
                {lightboxIndex + 1} / {currentData.items.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ScrollReveal>
  );
}