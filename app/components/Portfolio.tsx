"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { ChevronDown, ZoomIn } from "lucide-react";

const PORTFOLIO_DATA = [
  {
    id: "face",
    title: "COSMETICA FACE",
    tag: "PREMIUM SKIN TEXTURE",
    items: [
      { src: "/portofolio/face-512px-1.png", alt: "Face 512px 1" },
      { src: "/portofolio/face-512px-2.png", alt: "Face 512px 2" },
      { src: "/portofolio/face-512px-3.png", alt: "Face 512px 3" },
      { src: "/portofolio/face-512px-4.png", alt: "Face 512px 4" },
      { src: "/portofolio/face-1024px-1.png", alt: "Face 1024px 1" },
      { src: "/portofolio/face-1024px-2.png", alt: "Face 1024px 2" },
      { src: "/portofolio/face-1024px-3.png", alt: "Face 1024px 3" },
      { src: "/portofolio/face-1024px-4.png", alt: "Face 1024px 4" },
      { src: "/portofolio/face-2048px-1.png", alt: "Face 2048px 1" },
      { src: "/portofolio/face-2048px-2.png", alt: "Face 2048px 2" },
    ],
  },
  {
    id: "skin",
    title: "MINECRAFT SKIN",
    tag: "CLASSIC / SLIM MODEL",
    items: [
      { src: "/portofolio/skin-1.png", alt: "Skin 1" },
      { src: "/portofolio/skin-2.png", alt: "Skin 2" },
      { src: "/portofolio/skin-3.png", alt: "Skin 3" },
      { src: "/portofolio/skin-4.png", alt: "Skin 4" },
      { src: "/portofolio/skin-5.png", alt: "Skin 5" },
      { src: "/portofolio/skin-6.png", alt: "Skin 6" },
      { src: "/portofolio/skin-7.png", alt: "Skin 7" },
      { src: "/portofolio/skin-8.png", alt: "Skin 8" },
      { src: "/portofolio/skin-9.png", alt: "Skin 9" },
      { src: "/portofolio/skin-10.png", alt: "Skin 10" },
    ],
  },
  {
    id: "art",
    title: "ART & ILLUSTRATION",
    tag: "DIGITAL HAND-DRAWN",
    items: [
      { src: "/portofolio/art-1.png", alt: "Art 1" },
      { src: "/portofolio/art-2.png", alt: "Art 2" },
      { src: "/portofolio/art-3.png", alt: "Art 3" },
      { src: "/portofolio/art-4.png", alt: "Art 4" },
      { src: "/portofolio/art-5.png", alt: "Art 5" },
      { src: "/portofolio/art-6.png", alt: "Art 6" },
      { src: "/portofolio/art-7.png", alt: "Art 7" },
      { src: "/portofolio/art-8.png", alt: "Art 8" },
      { src: "/portofolio/art-9.png", alt: "Art 9" },
      { src: "/portofolio/art-10.png", alt: "Art 10" },
    ],
  },
  {
    id: "render",
    title: "MINECRAFT RENDER",
    tag: "GFX & SCENE",
    items: [
      { src: "/portofolio/render-1.png", alt: "Render 1" },
      { src: "/portofolio/render-2.png", alt: "Render 2" },
      { src: "/portofolio/render-3.png", alt: "Render 3" },
      { src: "/portofolio/render-4.png", alt: "Render 4" },
      { src: "/portofolio/render-5.png", alt: "Render 5" },
      { src: "/portofolio/render-6.png", alt: "Render 6" },
      { src: "/portofolio/render-7.png", alt: "Render 7" },
      { src: "/portofolio/render-8.png", alt: "Render 8" },
      { src: "/portofolio/render-9.png", alt: "Render 9" },
      { src: "/portofolio/render-10.png", alt: "Render 10" },
    ],
  },
];

export default function PortfolioSection({ fantasyFont }: { fantasyFont: string }) {
  const [openSections, setOpenSections] = useState<string[]>(["face"]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxData, setLightboxData] = useState<{ items: { src: string; alt: string }[]; index: number; category: string }>({ items: [], index: 0, category: "" });

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const openLightbox = (items: { src: string; alt: string }[], idx: number, category: string) => {
    setLightboxData({ items, index: idx, category });
    setLightboxOpen(true);
  };

  const nextLightbox = () =>
    setLightboxData((prev) => ({
      ...prev,
      index: (prev.index + 1) % prev.items.length,
    }));

  const prevLightbox = () =>
    setLightboxData((prev) => ({
      ...prev,
      index: (prev.index - 1 + prev.items.length) % prev.items.length,
    }));

  return (
    <ScrollReveal>
      <section className="relative z-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {PORTFOLIO_DATA.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
              >
                <button
                  onClick={() => toggleSection(category.id)}
                  className="w-full p-6 md:p-8 flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className={`${fantasyFont} text-sm md:text-lg text-purple-400 font-bold`}>
                        {category.title[0]}
                      </span>
                    </div>
                    <div className="text-left">
                      <h3 className={`${fantasyFont} text-xl md:text-3xl font-bold text-white`}>{category.title}</h3>
                      <p className="text-white/30 text-[9px] md:text-[10px] uppercase tracking-wider mt-1">{category.tag}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: openSections.includes(category.id) ? 180 : 0 }}
                    className="text-white/50"
                  >
                    <ChevronDown size={24} />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openSections.includes(category.id) ? "auto" : 0,
                    opacity: openSections.includes(category.id) ? 1 : 0,
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="border-t border-white/10 pt-6 md:pt-8">
                      <div className="grid grid-cols-2 gap-3 md:gap-6">
                        {category.items.map((item, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            className="relative group aspect-square md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                            onClick={() => openLightbox(category.items, idx, category.id)}
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
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

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

        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
              onClick={() => setLightboxOpen(false)}
            >
              <div className="relative flex items-center justify-center gap-2 md:gap-4" onClick={(e) => e.stopPropagation()}>
                <button
                  onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
                  className="text-white/50 hover:text-purple-400 p-2 md:p-4"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="relative">
                  <motion.img
                    key={lightboxData.index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    src={lightboxData.items[lightboxData.index].src}
                    alt={lightboxData.items[lightboxData.index].alt}
                    className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                  />
                  <button
                    className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-8 h-8 md:w-10 md:h-10 bg-black/70 hover:bg-purple-500 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors"
                    onClick={() => setLightboxOpen(false)}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <button
                  onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
                  className="text-white/50 hover:text-purple-400 p-2 md:p-4"
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-xs md:text-sm">
                {lightboxData.index + 1} / {lightboxData.items.length} • {lightboxData.category}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </ScrollReveal>
  );
}