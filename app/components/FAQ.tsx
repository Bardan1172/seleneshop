"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { ChevronDown, MessageCircle } from "lucide-react";

const FAQ_DATA = [
  {
    q: "Berapa lama proses pesanan?",
    a: "Untuk Face: 1-3 hari kerja, Skin: 1-2 hari kerja, Render: 2-4 hari kerja, Art: 3-5 hari kerja. Waktu bisa lebih lama jika ada revisi.",
  },
  {
    q: "Bagaimana cara membayar?",
    a: "Scan QRIS yang tersedia di website kami. Setelah pembayaran, buat ticket di Discord dan upload bukti transfer. Konfirmasi otomatis via ticket Discord.",
  },
  {
    q: "Apakah bisa request revisi?",
    a: "Ya, setiap layanan mendapat 1x free revision. Revisi tambahan dikenakan biaya tambahan sesuai kompleksitas.",
  },
  {
    q: "Berapa resolusi yang didapat?",
    a: "Face: 512px/1024px/2048px, Skin: 64x32 (default Minecraft), Render: sesuai request (GFX/Scene/Manip), Art: resolusi tinggi sesuai kebutuhan.",
  },
  {
    q: "Apakah bisa buat model 3D?",
    a: "Layanan Custom Model masih dalam pengembangan. Stay tuned untuk update-nya!",
  },
  {
    q: "Bagaimana jika ada masalah dengan pesanan?",
    a: "Langsung hubungi admin melalui Discord. Kami siap membantu menyelesaikan setiap masalah dengan cepat.",
  },
  {
    q: "Apakah melayani rush order?",
    a: "Ya, layanan rush order tersedia dengan biaya tambahan. Hubungi kami di Discord untuk info lebih lanjut.",
  },
  {
    q: "Bagaimana cara memesan?",
    a: "1. Join Discord kami, 2. Buat ticket di kategori layanan yang kamu pilih, 3. Isi form order, 4. Bayar via QRIS, 5. Tunggu proses hingga selesai.",
  },
];

export default function FAQSection({ fantasyFont }: { fantasyFont: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ScrollReveal>
      <section id="faq" className="relative z-10 py-24 md:py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 block uppercase">HELP CENTER</span>
            <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold text-white uppercase`}>FAQ</h2>
            <p className="text-white/40 text-[10px] md:text-xs mt-4 uppercase tracking-widest italic">Pertanyaan yang sering diajukan</p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {FAQ_DATA.map((item, idx) => (
              <motion.div
                key={idx}
                initial={false}
                className="bg-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-md"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full p-5 md:p-6 flex items-center justify-between text-left group"
                >
                  <span className={`${fantasyFont} text-xs md:text-base font-bold text-white/80 group-hover:text-white transition-colors pr-4`}>
                    {item.q}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-500 flex-shrink-0"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <div className="h-[1px] bg-white/10 mb-4" />
                        <p className="text-white/50 text-[10px] md:text-sm leading-relaxed tracking-wide">{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://discord.gg/muH44HDrea"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-full text-[10px] font-black tracking-widest uppercase shadow-lg"
            >
              <MessageCircle size={18} />
              TANYA LEWAT DISCORD
            </motion.a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}