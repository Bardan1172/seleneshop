"use client";

import { motion } from "framer-motion";
// PERBAIKAN: Menggunakan "../" karena ScrollReveal berada di folder luar (app)
import { ScrollReveal } from "../ScrollReveal";

const SERVICES_DATA = [
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
    title: "▣ MC PHOTOSHOOT", 
    tag: "CINEMATIC RENDERS", 
    items: [
      { label: "CINEMATIC RENDER", desc: "Single, Couple, atau Group." }, 
      { label: "CUSTOM SCENE", desc: "Background Nether, End, atau build milikmu." }
    ], 
    btn: "BOOKING SESSION" 
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

export default function ServicesSection({ fantasyFont }: { fantasyFont: string }) {
  return (
    <section id="layanan" className="relative z-10 py-20 md:py-32 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center mb-16 md:mb-24">
        <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">COLLECTIONS</span>
        <h2 className={`${fantasyFont} text-5xl md:text-8xl font-bold py-4 text-white`}>LAYANAN</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {SERVICES_DATA.map((s, i) => (
          <ScrollReveal key={i}>
            <motion.div 
              whileHover={{ 
                y: -12, 
                borderColor: "rgba(168, 85, 247, 0.4)",
                backgroundColor: "rgba(255, 255, 255, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-[40px] flex flex-col h-full overflow-hidden backdrop-blur-md shadow-2xl shadow-transparent hover:shadow-purple-500/10"
            >
              <div className="flex-grow z-10 text-left">
                <h3 className={`${fantasyFont} text-xl md:text-2xl font-bold text-white mb-2 transition-colors group-hover:text-purple-400`}>
                  {s.title}
                </h3>
                <p className="text-[9px] text-purple-400 font-bold mb-8 tracking-[0.2em] uppercase">
                  {s.tag}
                </p>
                <div className="space-y-8 mb-10">
                  {s.items.map((item, idx) => (
                    <div key={idx} className="border-l border-white/10 pl-4 group-hover:border-purple-500/30 transition-colors">
                      <p className="text-[11px] font-black text-white/90 tracking-[0.1em] mb-1.5 uppercase leading-tight">
                        {item.label}
                      </p>
                      <p className="text-[10px] text-white/30 leading-relaxed uppercase tracking-tighter italic">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              <motion.a 
                whileHover={{ scale: 1.02, backgroundColor: "#ffffff", color: "#000000" }}
                whileTap={{ scale: 0.98 }}
                href="https://discord.gg/muH44HDrea" 
                target="_blank" 
                className="relative z-10 block w-full text-center py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-[9px] text-white uppercase tracking-[0.2em] transition-all"
              >
                {s.btn}
              </motion.a>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
