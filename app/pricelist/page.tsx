"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import PageLayout from "../(pages)/layout";

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
    title: "ART COMMISSION",
    tag: "CUSTOM ART & SKETCH",
    items: [
      { name: "HEADSHOT ART", price: "25.000", desc: "Art kepala/halfbody" },
      { name: "FULLBODY ART", price: "50.000", desc: "Art fullbody" },
      { name: "COUPLE ART", price: "80.000", desc: "Art couple/duo" },
    ],
  },
  {
    id: "sticker",
    title: "CUSTOM STICKER",
    tag: "TELEGRAM/WHATSAPP STICKER",
    items: [
      { name: "CHIBI STICKER", price: "15.000", desc: "7-10 sticker chibi" },
      { name: "CUSTOM STICKERPACK", price: "35.000", desc: "15-20 sticker custom" },
    ],
  },
  {
    id: "render",
    title: "RENDER & GFX",
    tag: "VISUAL EDITING",
    items: [
      { name: "PNG TUBER", price: "20.000", desc: "PNGTuber base + edit" },
      { name: "SCENE RENDER", price: "35.000", desc: "Custom scene render" },
      { name: "MANIPULATION", price: "50.000", desc: "Full manip/editing" },
    ],
  },
];

export default function PricelistPage() {
  const [openSections, setOpenSections] = useState<string[]>(["face"]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">PRICE LIST</span>
          <h1 className="font-serif italic tracking-wider uppercase text-5xl md:text-7xl font-bold text-white">DAFTAR HARGA</h1>
          <p className="text-white/40 text-xs mt-4 uppercase tracking-widest italic max-w-2xl mx-auto">
            Semua harga sudah termasuk kualitas premium dan service terbaik dari Tim Selene Shop
          </p>
        </div>

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
                    <h3 className="font-serif italic tracking-wider uppercase text-xl md:text-3xl font-bold text-white">{service.title}</h3>
                    <p className="text-white/30 text-[9px] uppercase tracking-wider mt-1">{service.tag}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: openSections.includes(service.id) ? 180 : 0 }}
                  className="text-white/50"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
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
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <div className="border-t border-white/10 pt-6 space-y-3">
                    {service.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-white">{item.name}</h4>
                          <p className="text-white/40 text-[10px] mt-1">{item.desc}</p>
                        </div>
                        <span className="text-purple-400 font-bold text-sm">Rp {item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-10 uppercase">OFFICIAL PAYMENT</p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 bg-white/[0.02] border border-white/10 p-10 md:p-16 rounded-[50px] backdrop-blur-md shadow-2xl relative overflow-hidden">
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full" />

            <div className="relative group">
              <div className="relative bg-white p-3 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-105">
                <img 
                  src="/qris.png" 
                  alt="QRIS Selene Shop" 
                  className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-lg"
                />
                <div className="absolute inset-0 border-2 border-purple-500/0 group-hover:border-purple-500/50 rounded-2xl transition-all duration-500">
                   <div className="absolute top-0 left-0 w-full h-[2px] bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] opacity-0 group-hover:opacity-100" />
                </div>
              </div>
            </div>

            <div className="text-left space-y-6 relative z-10">
              <h3 className="font-serif italic tracking-wider uppercase text-4xl md:text-6xl font-bold text-white">
                QRIS <span className="text-purple-500 italic text-2xl md:text-3xl block md:inline md:ml-2">ALL PAYMENT</span>
              </h3>
              
              <div className="space-y-4">
                <p className="text-[11px] text-white/60 tracking-[0.3em] font-bold uppercase">Mendukung Pembayaran:</p>
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] md:text-xs font-black tracking-widest text-white/40 italic uppercase">
                   <span className="hover:text-purple-400 transition-colors">DANA</span> • 
                   <span className="hover:text-purple-400 transition-colors">GOPAY</span> • 
                   <span className="hover:text-purple-400 transition-colors">OVO</span> • 
                   <span className="hover:text-purple-400 transition-colors">SHOPEEPAY</span> • 
                   <span className="hover:text-purple-400 transition-colors">BANK</span>
                </div>
              </div>

              <div className="pt-4">
                <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full">
                  <p className="text-[9px] text-purple-400 font-bold tracking-widest uppercase italic">
                    Scan & Konfirmasi Otomatis via Ticket
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}