"use client";

import { motion } from "framer-motion";
import { Sparkles, Hammer, Brush, Camera, Sticker, Box, DollarSign, CheckCircle2 } from "lucide-react";

const products = [
  {
    title: "Cosmetica Face Minecraft",
    icon: <Sparkles className="w-6 h-6" />,
    note: "Harus MC Premium",
    items: [
      "Custom wajah (mata, alis, mulut)",
      "Bisa request ekspresi",
      "Cocok untuk skin personal / roleplay",
    ],
    pricing: [
      { label: "Only Face", price: "Rp30.000" },
      { label: "Face + Rambut HD", price: "Rp50.000" }
    ],
    details: "Face + Rambut HD memiliki detail lebih halus & tajam."
  },
  {
    title: "Minecraft Skin",
    icon: <Box className="w-6 h-6" />,
    items: [
      "Skin full body custom",
      "Request tema (anime, fantasy, casual, dll)",
      "Support Java & Bedrock",
    ],
    pricing: [
      { label: "Simple", price: "Rp10.000" },
      { label: "Full Detail", price: "Rp15.000" }
    ]
  },
  {
    title: "Art / Illustration",
    icon: <Brush className="w-6 h-6" />,
    items: [
      "Fanart / OC",
      "Style sesuai request",
      "Cocok untuk profil, banner, atau hadiah",
    ],
    pricing: [
      { label: "Simple Shade", price: "Rp25.000" },
      { label: "Full Rendering (Close Up)", price: "Request / DM" }
    ]
  },
  {
    title: "Minecraft Build",
    icon: <Hammer className="w-6 h-6" />,
    isSpecial: true,
    items: [
      "Build rumah / base / map",
      "Detail rapi & sesuai tema",
      "Custom ukuran dan konsep",
    ],
    classes: [
      { name: "Basic", price: "$1 – $5", desc: "Small builds, houses, shops" },
      { name: "Advanced", price: "$5 – $20", desc: "Fantasy bases, landmarks" },
      { name: "Elite", price: "$30 – $100", desc: "Large castles, detailed cities" },
      { name: "Origin", price: "$150+", desc: "Mega builds, exclusive quality" }
    ]
  },
  {
    title: "Photoshoot Minecraft",
    icon: <Camera className="w-6 h-6" />,
    items: [
      "Single / Couple / Group (3-5 karakter)",
      "Custom Background (Village, Forest, End, dll)",
      "HD / Cinematic Render",
      "Pencahayaan realistis & kualitas tinggi",
    ],
    pricing: [{ label: "Start from", price: "DM for detail" }]
  },
  {
    title: "Custom Sticker Chibi",
    icon: <Sticker className="w-6 h-6" />,
    items: [
      "Bust-up / Head Only",
      "Custom Expression (Marah, Senang, dll)",
    ],
    pricing: [
      { label: "Unit", price: "Rp10.000" },
      { label: "Pack (6 Sticker)", price: "Rp50.000" },
      { label: "Pack (12 Sticker)", price: "Rp100.000" }
    ]
  },
  {
    title: "PNGtuber",
    icon: <Sparkles className="w-6 h-6" />,
    items: [
      "Simple Chibi / Simple Style",
      "2 Ekspresi & Bebas Request",
    ],
    pricing: [
      { label: "Simple Chibi", price: "Rp25.000" },
      { label: "Simple Normal", price: "Rp30.000" }
    ]
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#120018] to-black text-white px-4 py-20">
      <section className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Selene Shop
          </h1>
          <p className="text-white/60 text-lg">Premium Minecraft Services & Digital Art</p>
        </motion.div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl p-8 bg-white/5 border border-purple-500/10 backdrop-blur-xl hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-purple-500/20 text-purple-300">
                  {product.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold tracking-tight">{product.title}</h2>
                  {product.note && <span className="text-[10px] text-pink-400 uppercase font-bold tracking-widest">{product.note}</span>}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {product.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-purple-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tampilan khusus untuk Build Price List */}
              {product.isSpecial ? (
                <div className="space-y-3 border-t border-white/10 pt-6">
                  {product.classes?.map((cls, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
                      <div>
                        <p className="text-xs font-bold text-purple-300 uppercase tracking-tighter">{cls.name}</p>
                        <p className="text-[10px] text-white/40">{cls.desc}</p>
                      </div>
                      <span className="font-mono text-sm text-green-400 font-bold">{cls.price}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2 border-t border-white/10 pt-6">
                  {product.pricing?.map((p, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-white/50">{p.label}</span>
                      <span className="font-bold text-purple-300">{p.price}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-8 rounded-3xl bg-purple-900/10 border border-purple-500/20 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Butuh Custom Build Besar?</h3>
          <p className="text-white/60 text-sm max-w-2xl mx-auto mb-6">
            Harga build dapat berubah tergantung tingkat kerumitan, ukuran, dan deadline. 
            Format pengiriman bisa berupa .world atau .schematic.
          </p>
          <button className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-full font-bold transition-colors">
            Order Via WhatsApp / Discord
          </button>
        </motion.div>
      </section>
    </main>
  );
}
