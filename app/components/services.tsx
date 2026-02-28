"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Pastikan sudah install lucide-react

const SERVICES_DATA = [
  // ... (Data sebelumnya tetap sama: Cosmetica, Skin, Art, Sticker, Build)
  { 
    title: "✦ COSMETICA FACE", 
    tag: "*KHUSUS MINECRAFT PREMIUM", 
    items: [
      { label: "FACE 512px: 30K", desc: "Custom mata, alis, dan mulut sesuai request." }, 
      { label: "FACE 1024px: 50K", desc: "lebih detail dan lebih tajam." }
    ], 
    btn: "ORDER FACE" 
  },
  { 
    title: "◈ MINECRAFT SKIN", 
    tag: "CLASSIC / SLIM MODEL", 
    items: [
      { label: "SIMPLE: 10K", desc: "Desain minimalis dengan shading standar." }, 
      { label: "FULL DETAIL: 15K", desc: "Shading kompleks untuk Anime atau Fantasy." }
    ], 
    btn: "ORDER SKIN" 
  },
  { 
    title: "✎ ART & ILLUSTRATION", 
    tag: "DIGITAL HAND-DRAWN", 
    items: [
      { label: "SIMPLE SHADE: 25K", desc: "Fanart atau OC." }, 
      { label: "CHIBI PNGTUBER: 25K", desc: "Karakter mungil untuk konten." }, 
      { label: "PNGTUBER: 30K", desc: "Model PNGtuber (Bust-up)." }
    ], 
    btn: "ORDER ART" 
  },
  { 
    title: "✉ CUSTOM STICKER", 
    tag: "DISCORD & WHATSAPP", 
    items: [
      { label: "PER PCS: 10K", desc: "Bust-up atau Head Only." }, 
      { label: "PACK (6 STICKER): 50K", desc: "Lebih hemat untuk koleksi." }
    ], 
    btn: "ORDER STICKER" 
  },
  { 
    title: "🏛 MINECRAFT BUILD", 
    tag: "STRUCTURAL & AESTHETIC", 
    items: [
      { label: "BASIC: 15K – 75K", desc: "Small structures." }, 
      { label: "ADVANCED: 75K – 300K", desc: "Fantasy base." }, 
      { label: "ELITE: 450K – 1.5JT", desc: "Complex cities." }
    ], 
    btn: "CUSTOM BUILD" 
  }
];

// Data khusus untuk Slide Render
const RENDER_SAMPLES = [
  "/render1.png", // Ganti dengan path foto sample kamu di folder public
  "/render2.png",
  "/render3.png"
];

export default function ServicesSection({ fantasyFont }: { fantasyFont: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % RENDER_SAMPLES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + RENDER_SAMPLES.length) % RENDER_SAMPLES.length);

  return (
    <section id="layanan" className="relative z-10 py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
        <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">COLLECTIONS</span>
        <h2 className={`${fantasyFont} text-5xl md:text-8xl font-bold py-4 text-white`}>LAYANAN</h2>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* --- SECTION MINECRAFT RENDER (SISTEM SLIDE) --- */}
        <ScrollReveal>
          <div className="relative bg-white/[0.02] border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-md">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              
              {/* KIRI: DETAIL HARGA */}
              <div className="p-8 md:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="mb-8">
                  <h3 className={`${fantasyFont} text-3xl md:text-5xl font-bold text-white mb-2 uppercase tracking-tighter`}>
                    MINECRAFT RENDER
                  </h3>
                  <p className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">CINEMATIC GFX & SCENE</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="space-y-4">
                    <h4 className="text-white text-[11px] font-black tracking-widest uppercase italic border-b border-purple-500/30 pb-2">✦ TEMA RENDER</h4>
                    <ul className="text-[10px] text-white/50 space-y-2 font-bold uppercase tracking-widest">
                      <li>• GFX</li>
                      <li>• SCENE</li>
                      <li>• MANIP</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-white text-[11px] font-black tracking-widest uppercase italic border-b border-purple-500/30 pb-2">✦ UKURAN / HARGA</h4>
                    <ul className="text-[10px] text-white/50 space-y-2 font-bold uppercase tracking-widest">
                      <li className="text-white">HARGA: 25K - 45K</li>
                      <li>• RATIO 1:1 : +2K</li>
                      <li>• RATIO 16:9 : FREE</li>
                      <li>• RATIO 9:16 : +2K</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-500/5 border border-purple-500/20 p-6 rounded-3xl mb-10">
                  <p className={`${fantasyFont} text-purple-400 text-sm mb-2 italic`}>"Khusus No Background"</p>
                  <p className="text-[10px] text-white/40 leading-relaxed uppercase tracking-wider font-medium">
                    Harga mulai 8k - 22k. Tambahan request (efek/lainnya) +1k.
                  </p>
                </div>

                <motion.a 
                  whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#000000" }}
                  whileTap={{ scale: 0.98 }}
                  href="https://discord.gg/muH44HDrea" 
                  target="_blank" 
                  className="w-full text-center py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-[10px] text-white uppercase tracking-[0.3em] transition-all"
                >
                  BOOKING RENDER
                </motion.a>
              </div>

              {/* KANAN: SLIDE SAMPLE PRODUCT */}
              <div className="relative h-[400px] lg:h-auto bg-black/40 group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentSlide}
                    src={RENDER_SAMPLES[currentSlide]}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                    alt="Sample Render"
                  />
                </AnimatePresence>
                
                {/* Navigasi Slide */}
                <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={prevSlide} className="p-2 rounded-full bg-black/50 border border-white/10 text-white hover:bg-purple-600 transition-colors">
                    <ChevronLeft size={20} />
                  </button>
                  <button onClick={nextSlide} className="p-2 rounded-full bg-black/50 border border-white/10 text-white hover:bg-purple-600 transition-colors">
                    <ChevronRight size={20} />
                  </button>
                </div>

                {/* Indikator Slide */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                  {RENDER_SAMPLES.map((_, i) => (
                    <div key={i} className={`h-1 w-8 rounded-full transition-all ${i === currentSlide ? "bg-purple-500" : "bg-white/20"}`} />
                  ))}
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* --- GRID LAYANAN LAINNYA --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {SERVICES_DATA.map((s, i) => (
            <ScrollReveal key={i}>
              <motion.div 
                whileHover={{ y: -12, borderColor: "rgba(168, 85, 247, 0.4)", backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                className="group relative bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[40px] flex flex-col h-full overflow-hidden backdrop-blur-md shadow-2xl"
              >
                <div className="flex-grow z-10 text-left">
                  <h3 className={`${fantasyFont} text-xl md:text-2xl font-bold text-white mb-2 transition-colors group-hover:text-purple-400`}>{s.title}</h3>
                  <p className="text-[9px] text-purple-400 font-bold mb-8 tracking-[0.2em] uppercase">{s.tag}</p>
                  <div className="space-y-8 mb-10">
                    {s.items.map((item, idx) => (
                      <div key={idx} className="border-l border-white/10 pl-4 group-hover:border-purple-500/30 transition-colors">
                        <p className="text-[11px] font-black text-white/90 tracking-[0.1em] mb-1.5 uppercase leading-tight">{item.label}</p>
                        <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-tighter italic">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#000000" }}
                  href="https://discord.gg/muH44HDrea" 
                  className="relative z-10 block w-full text-center py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-[9px] text-white uppercase tracking-[0.2em]"
                >
                  {s.btn}
                </motion.a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
