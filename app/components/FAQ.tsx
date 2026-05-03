"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { ChevronDown, MessageCircle } from "lucide-react";

const FAQ_DATA = [
  {
    q: "Selene Shop menyediakan layanan apa saja?",
    a: "Kami melayani pembuatan aset digital berkualitas: Cosmetica Face, Skin Minecraft, Art Commission, Minecraft Render, Custom Sticker, Minecraft Custom Model.",
  },
  {
    q: "Apa itu Cosmetica Face?",
    a: "Detail wajah kustom untuk skin Minecraft (makeup, mata, blush, tattoo, dll). Catatan: Ini adalah produk digital khusus Minecraft, bukan barang fisik/kosmetik asli.",
  },
  {
    q: "Bagaimana cara melakukan pemesanan?",
    a: "Silakan gunakan Template Order yang tersedia di channel khusus atau langsung Buka Ticket. Pesanan akan segera masuk antrean setelah pembayaran kami terima.",
  },
  {
    q: "Untuk pengerjaan Skin, base-nya dari siapa?",
    a: "Base skin bisa berasal dari Buyer (Anda menyediakan file skin awal) atau Selene Shop (Kami buatkan dari nol, tergantung paket yang dipilih).",
  },
  {
    q: "Berapa lama waktu pengerjaannya?",
    a: "Estimasi waktu bergantung pada panjang antrean dan tingkat kesulitan proyek. Kami akan memberikan estimasi waktu saat Anda melakukan konfirmasi order.",
  },
  {
    q: "Apakah saya bisa meminta revisi?",
    a: "Bisa. Kami memberikan jatah maksimal 3x revisi minor. Revisi besar yang mengubah konsep dasar atau tambahan revisi di luar jatah akan dikenakan biaya tambahan.",
  },
  {
    q: "Hasil akhirnya dikirim dalam format apa?",
    a: "Umum: Dikirim dalam format .png atau file model terkait. Cosmetica Face: Khusus layanan ini tidak diberikan file. Hasil langsung diunggah/diaplikasikan ke akun Minecraft Anda.",
  },
  {
    q: "Apakah bisa mengajukan Refund?",
    a: "Tidak bisa jika proses pengerjaan sudah dimulai. Bisa, hanya jika terjadi kesalahan fatal atau kendala teknis dari pihak Selene Shop.",
  },
  {
    q: "Bolehkah saya menjual ulang atau klaim hasil karya?",
    a: "Dilarang keras. Anda tidak diperbolehkan menjual ulang, mengedit tanpa izin, atau mengklaim karya kami sebagai milik pribadi. Semua karya adalah milik intelektual Selene Shop.",
  },
  {
    q: "Apakah produk bisa digunakan untuk kebutuhan Komersial?",
    a: "Bisa, namun wajib konfirmasi di awal karena akan dikenakan biaya lisensi komersial tambahan.",
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

            <p className="mt-8 text-white/60 text-sm italic">🌙 Masih ada pertanyaan yang belum terjawab? Jangan ragu untuk menghubungi Admin / Customer Service kami melalui sistem ticket!</p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}