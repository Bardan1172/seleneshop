"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rexxy_",
    role: "Customer Face 1024px",
    text: "Bagus banget hasilnya, detailnya清澈dan warnanya juga sesuai request. Adminnya responsif dan fast response!",
    rating: 5,
  },
  {
    name: "Kyvaa",
    role: "Customer Skin Anime",
    text: "Skinnya cakep poll! Hasilnya lebih bagus dari yang aku bayangin. Recommended banget deh, tidak mengecewakan.",
    rating: 5,
  },
  {
    name: "MikaOnichan",
    role: "Customer Render GFX",
    text: "Render-nya aesthetic poll, perfect buat showcase._TIMEOUT服从安排_tunggu lagi next project!",
    rating: 5,
  },
  {
    name: "NotFound404",
    role: "Customer Art Pngtuber",
    text: "Artnya cutee poll, sesuai sama yang aku minta. Revisi juga dilayanin dengan baik. Thank you Selene!",
    rating: 5,
  },
  {
    name: "ZyraMain",
    role: "Customer Art Chibi",
    text: "Hasilnya memuaskan, warnanya vibey bgtt. Prosesnya juga cepat, tidak perlu menunggu lama. Mantap!",
    rating: 5,
  },
  {
    name: "AxelGaming",
    role: "Customer Face 2048px",
    text: "Kualitas premium! Worth it sama harganya. Detailnyajos gandos. Recommended seller!",
    rating: 5,
  },
];

export default function TestimonialsSection({ fantasyFont }: { fantasyFont: string }) {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <ScrollReveal>
      <section className="relative z-10 py-24 md:py-40 px-4 md:px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">REVIEWS</span>
            <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold text-white uppercase`}>TESTIMONI</h2>
            <p className="text-white/40 text-[10px] md:text-xs mt-4 uppercase tracking-widest italic">Apa kata customer kami</p>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white/[0.03] border border-white/10 rounded-[40px] md:rounded-[60px] p-8 md:p-16 backdrop-blur-xl"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6 md:mb-8">
                    {[...Array(TESTIMONIALS[active].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-purple-500 text-purple-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/70 text-sm md:text-lg leading-relaxed italic mb-8 md:mb-10 max-w-2xl">
                    "{TESTIMONIALS[active].text}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/10 border border-white/20 flex items-center justify-center">
                      <span className={`${fantasyFont} text-sm md:text-lg text-purple-400 font-bold`}>
                        {TESTIMONIALS[active].name[0]}
                      </span>
                    </div>
                    <div className="text-left">
                      <h4 className={`${fantasyFont} text-sm md:text-base font-bold text-white`}>
                        {TESTIMONIALS[active].name}
                      </h4>
                      <p className="text-white/40 text-[9px] md:text-[10px] uppercase tracking-wider">
                        {TESTIMONIALS[active].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-white/[0.05] border border-white/10 text-white/50 hover:text-purple-400 hover:bg-white/10 transition-all"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === active ? "w-8 bg-purple-500" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-3 rounded-full bg-white/[0.05] border border-white/10 text-white/50 hover:text-purple-400 hover:bg-white/10 transition-all"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className={`${fantasyFont} text-2xl md:text-4xl font-bold text-purple-400`}>100+</h3>
              <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-wider mt-1">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className={`${fantasyFont} text-2xl md:text-4xl font-bold text-purple-400`}>5.0</h3>
              <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-wider mt-1">Average Rating</p>
            </div>
            <div className="text-center">
              <h3 className={`${fantasyFont} text-2xl md:text-4xl font-bold text-purple-400`}>50+</h3>
              <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-wider mt-1">Projects Done</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}