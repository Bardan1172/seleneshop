"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const PRODUCTS = [
  {
    id: "face",
    title: "COSMETICA FACE",
    image: "/portofolio/face-512px-1.png",
    minPrice: "30K",
  },
  {
    id: "skin",
    title: "MINECRAFT SKIN",
    image: "/portofolio/skin-1.png",
    minPrice: "5K",
  },
  {
    id: "chibi",
    title: "CHIBI PNG TUBER",
    image: "/portofolio/art-1.png",
    minPrice: "15K",
  },
  {
    id: "anime",
    title: "ART ANIME STYLE",
    image: "/portofolio/art-2.png",
    minPrice: "15K",
  },
  {
    id: "semirealis",
    title: "ART SEMIREALIS",
    image: "/portofolio/art-3.png",
    minPrice: "35K",
  },
  {
    id: "lineart",
    title: "LINEART",
    image: "/portofolio/art-4.png",
    minPrice: "10K",
  },
  {
    id: "sticker",
    title: "CUSTOM STICKER",
    image: "/portofolio/comingsoon.png",
    minPrice: "10K",
  },
  {
    id: "render",
    title: "MC RENDER",
    image: "/portofolio/render-1.png",
    minPrice: "25K",
  },
  {
    id: "model",
    title: "CUSTOM MODEL",
    image: "/portofolio/comingsoon.png",
    minPrice: "25K",
  },
];

export default function ServicesSection({ fantasyFont }: { fantasyFont: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 100);
    }
  };

  return (
    <section id="layanan" className="relative z-10 py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">OUR SERVICES</span>
        <h2 className={`${fantasyFont} text-5xl md:text-8xl font-bold text-white uppercase`}>PRODUCT LIST</h2>
      </div>

      <ScrollReveal>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`shrink-0 p-2 md:p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all ${
                canScrollLeft ? "hover:bg-white/10 text-white" : "text-white/20 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-3 md:gap-4 overflow-x-auto scroll-smooth hide-scrollbar px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {PRODUCTS.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="shrink-0 w-32 md:w-40 bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl p-3 md:p-4 backdrop-blur-xl hover:bg-white/[0.05] hover:border-purple-500/30 transition-all flex flex-col"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-3 md:mb-4">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow text-center">
                    <h3 className={`${fantasyFont} text-[9px] md:text-xs font-bold text-white mb-1 uppercase leading-tight`}>
                      {product.title}
                    </h3>
                    <p className={`${fantasyFont} text-xs md:text-sm font-bold text-purple-400`}>
                      Start {product.minPrice}
                    </p>
                  </div>

                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://discord.gg/muH44HDrea"
                    target="_blank"
                    className="w-full flex items-center justify-center gap-1 py-2 md:py-2.5 bg-white/5 border border-white/10 rounded-lg text-[7px] md:text-[8px] font-black text-white/60 uppercase tracking-wider hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all mt-3"
                  >
                    ORDER
                    <ArrowRight size={10} />
                  </motion.a>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`shrink-0 p-2 md:p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl transition-all ${
                canScrollRight ? "hover:bg-white/10 text-white" : "text-white/20 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </ScrollReveal>

      <div className="mt-12 text-center">
        <a href="#daftarharga" className="inline-block px-6 py-3 border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-all">
          LIHAT SEMUA HARGA
        </a>
      </div>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}