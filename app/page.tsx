"use client";

import { motion } from "framer-motion";
import { Sparkles, Hammer, Brush, Camera, Sticker, Box, CheckCircle2, Moon, ShoppingCart } from "lucide-react";

const products = [
  {
    title: "Cosmetica Face Minecraft",
    icon: <Sparkles className="w-5 h-5" />,
    note: "Harus MC Premium",
    items: ["Only Face: Rp30.000", "Face + Rambut HD: Rp50.000"],
    desc: "Custom wajah (mata, alis, mulut) tajam & halus."
  },
  {
    title: "Minecraft Skin",
    icon: <Box className="w-5 h-5" />,
    items: ["Simple: Rp10.000", "Full Detail: Rp15.000"],
    desc: "Custom full body, support Java & Bedrock."
  },
  {
    title: "Art / Illustration",
    icon: <Brush className="w-5 h-5" />,
    items: ["Simple Shade: Rp25.000", "Full Rendering: Request/DM"],
    desc: "Fanart/OC untuk profil, banner, atau hadiah."
  },
  {
    title: "Minecraft Build",
    icon: <Hammer className="w-5 h-5" />,
    isSpecial: true,
    classes: [
      { name: "Basic", price: "$1-$5" },
      { name: "Advanced", price: "$5-$20" },
      { name: "Elite", price: "$30-$100" },
      { name: "Origin", price: "$150+" }
    ],
    desc: "Rumah, base, atau map dengan detail rapi."
  },
  {
    title: "Custom Sticker Chibi",
    icon: <Sticker className="w-5 h-5" />,
    items: ["Unit: Rp10.000", "6 Pack: Rp50.000", "12 Pack: Rp100.000"],
    desc: "Sticker ekspresi lucu gaya Chibi."
  },
  {
    title: "PNGtuber",
    icon: <Moon className="w-5 h-5" />,
    items: ["Chibi Style: Rp25.000", "Simple Style: Rp30.000"],
    desc: "Model 2 ekspresi, bebas request."
  }
];

export default function HomePage() {
  return (
    <div className="bg-black text-white font-sans selection:bg-purple-500/30">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-purple-500/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg text-purple-300">
            <Moon className="w-5 h-5" /> Selene Shop
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/60">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#produk" className="hover:text-purple-400 transition">Products</a>
            <a href="https://discord.gg/muH44HDrea" target="_blank" className="text-purple-400">Discord</a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent -z-10" />
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-purple-400"
          >
            Where Creativity <br /> Meets Moonlight
          </motion.h1>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Layanan kreatif khusus Minecraft & Art digital dengan sentuhan estetika fantasy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#produk" className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-bold transition flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" /> Lihat Produk
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-6 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-purple-300 tracking-tight text-center md:text-left uppercase">About Selene Shop</h2>
              <p className="text-white/70 leading-relaxed mb-6">
                Selene Shop adalah studio digital bertema bulan yang menyediakan layanan kreatif khusus Minecraft & Art. Kami fokus pada detail dan estetika untuk membuat karakter kamu tampil unik.
              </p>
              <div className="space-y-3">
                {["Detail rapi & konsisten", "Bisa custom sesuai request", "Proses transparan", "Ramah & Profesional"].map((text) => (
                  <div key={text} className="flex items-center gap-3 text-sm text-white/60">
                    <CheckCircle2 className="w-4 h-4 text-purple-500" /> {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-purple-900/10 border border-purple-500/20 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="font-bold text-purple-200 mb-4">Informasi Penting</h3>
              <ul className="text-sm text-white/50 space-y-4">
                <li>• Order dikerjakan setelah pembayaran.</li>
                <li>• Pengerjaan sesuai antrian.</li>
                <li>• Order berarti setuju dengan rules kami.</li>
              </ul>
              <p className="mt-8 text-xs font-medium text-purple-400/80 italic text-center">
                "Thank you for choosing Selene Shop"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="produk" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 uppercase tracking-widest text-white/90">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <motion.div 
                key={i} whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 group-hover:scale-110 transition">{p.icon}</div>
                  <h3 className="font-bold tracking-tight">{p.title}</h3>
                </div>
                <p className="text-xs text-white/40 mb-6">{p.desc}</p>
                <div className="space-y-2 mb-6">
                  {p.isSpecial ? (
                    p.classes?.map((c, idx) => (
                      <div key={idx} className="flex justify-between text-sm py-1 border-b border-white/5">
                        <span className="text-white/60">{c.name}</span>
                        <span className="font-bold text-purple-300">{c.price}</span>
                      </div>
                    ))
                  ) : (
                    p.items.map((item, idx) => (
                      <div key={idx} className="text-sm font-medium text-purple-100/80 bg-white/5 px-3 py-2 rounded-lg">
                        {item}
                      </div>
                    ))
                  )}
                </div>
                {p.note && <p className="text-[10px] text-pink-400 font-bold mb-4 uppercase tracking-widest">{p.note}</p>}
                <a href="https://discord.gg/muH44HDrea" target="_blank" className="block text-center py-2 text-xs font-bold bg-white/5 hover:bg-purple-600 rounded-xl transition">ORDER NOW</a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5 text-center text-white/20 text-xs">
        <p>© {new Date().getFullYear()} Selene Shop • Moonlit Creations</p>
      </footer>
    </div>
  );
}
