"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { Calendar, ArrowRight } from "lucide-react";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Cara Pesan Face Premium di Selene Shop",
    excerpt: "Panduan lengkap cara memesan face 512px, 1024px, dan 2048px melalui Discord ticket system kami.",
    category: "TUTORIAL",
    date: "25 April 2026",
    image: "/face-1.png",
  },
  {
    id: 2,
    title: "New Service: Custom Sticker Pack!",
    excerpt: "Soon akan hadir layanan custom sticker untuk Discord dan WhatsApp. Stay tuned untuk informasi lebih lanjut!",
    category: "UPDATE",
    date: "20 April 2026",
    image: "/art-1.png",
  },
  {
    id: 3,
    title: "Tips Memilih Skin Anime yang Cocok",
    excerpt: "Jangan sampai salah pilih! Berikut tips memilih skin anime yang sesuai dengan karaktermu.",
    category: "TIPS",
    date: "15 April 2026",
    image: "/skin-1.png",
  },
];

export default function BlogSection({ fantasyFont }: { fantasyFont: string }) {
  return (
    <ScrollReveal>
      <section className="relative z-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white/[0.02] border border-white/10 rounded-3xl md:rounded-[40px] overflow-hidden backdrop-blur-xl hover:bg-white/[0.04] transition-all"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-[8px] md:text-[9px] font-black tracking-wider text-purple-400 uppercase">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-white/30 text-[8px] md:text-[9px]">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                  </div>
                  <h3 className={`${fantasyFont} text-sm md:text-lg font-bold text-white mb-3 leading-tight`}>
                    {post.title}
                  </h3>
                  <p className="text-white/40 text-[10px] md:text-sm leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button className="mt-4 flex items-center gap-2 text-purple-400 text-[9px] md:text-xs font-bold tracking-wider uppercase group-hover:gap-3 transition-all">
                    Baca Selengkapnya
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://discord.gg/muH44HDrea"
              target="_blank"
              className="inline-block px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              LIHAT SEMUA BERITA
            </motion.a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}