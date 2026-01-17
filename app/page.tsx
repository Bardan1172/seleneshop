"use client";

import { motion } from "framer-motion";
import { Sparkles, Hammer, Brush, Camera, Sticker, Box } from "lucide-react";

const products = [
  {
    title: "Cosmetica Face Minecraft",
    icon: <Sparkles />,
    items: [
      "Custom wajah (mata, alis, mulut)",
      "Bisa request ekspresi",
      "Cocok untuk skin personal / roleplay",
      "Only Face – Rp30.000",
      "Face + Rambut HD – Rp50.000",
    ],
  },
  {
    title: "Minecraft Skin",
    icon: <Box />,
    items: [
      "Skin full body custom",
      "Request tema (anime, fantasy, casual, dll)",
      "Support Java & Bedrock",
      "Simple – Rp10.000",
      "Full Detail – Rp15.000",
    ],
  },
  {
    title: "Art / Illustration",
    icon: <Brush />,
    items: [
      "Fanart / OC",
      "Style sesuai request",
      "Cocok untuk profil, banner, hadiah",
      "Simple Shade – Rp25.000",
      "Full Rendering – Request / DM",
    ],
  },
  {
    title: "Minecraft Build",
    icon: <Hammer />,
    items: [
      "Basic Class – Rp75.000 – Rp75.000",
      "Advanced Class – Rp75.000 – Rp300.000",
      "Elite Class – Rp450.000 – Rp1.500.000",
      "Origin Class – Rp2.250.000+",
    ],
    expandable: true,
  },
  {
    title: "Minecraft Photoshoot",
    icon: <Camera />,
    items: [
      "Single / Couple / Group (3–5 karakter)",
      "Custom background (Village, Nether, End, dll)",
      "HD / Cinematic Render",
    ],
  },
  {
    title: "Custom Sticker Chibi",
    icon: <Sticker />,
    items: [
      "Bust-up / Head Only – Rp10.000",
      "Sticker Pack 6 – Rp50.000",
      "Sticker Pack 12 – Rp100.000",
    ],
  },
  {
    title: "PNGtuber",
    icon: <Sparkles />,
    items: [
      "Simple Chibi PNGtuber – Rp25.000 (2 ekspresi)",
      "Simple PNGtuber – Rp30.000 (2 ekspresi)",
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-[#120018] to-black text-white px-6 py-24">
      <section className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-title text-center mb-12"
        >
          Produk Selene Shop
        </motion.h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative rounded-2xl p-6 bg-white/5 border border-purple-500/20 backdrop-blur hover:shadow-[0_0_30px_rgba(168,85,247,0.35)] transition"
            >
              <div className="flex items-center gap-3 mb-4 text-purple-300">
                {product.icon}
                <h2 className="text-xl font-semibold">{product.title}</h2>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                {product.items.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
