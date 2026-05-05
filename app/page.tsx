"use client";

import { useEffect, useState, useRef } from "react";
import WelcomeScreen from "./WelcomeScreen"; 
import MoonBackground from "./MoonBackground"; 
import { ScrollReveal } from "./ScrollReveal"; 
import ServicesSection from "./components/services"; 
import TestimonialsSection from "./components/Testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Menu } from "lucide-react";
import Link from "next/link";

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
    title: "ART & ILLUSTRATION",
    tag: "DIGITAL HAND-DRAWN",
    items: [
      { name: "SIMPLE SHADE / CHIBI", price: "25.000", desc: "Gaya chibi simple shading" },
      { name: "PNGTUBER MODEL", price: "30.000", desc: "Model pngtuber full color" },
    ],
  },
  {
    id: "sticker",
    title: "CUSTOM STICKER",
    tag: "DISCORD & WHATSAPP",
    items: [
      { name: "PER PCS (BUST UP)", price: "10.000", desc: "Single sticker per karakter" },
      { name: "PACK (6 STICKERS)", price: "50.000", desc: "6 sticker verschiedene poses" },
    ],
  },
  {
    id: "render",
    title: "MINECRAFT RENDER",
    tag: "CINEMATIC GFX & SCENE",
    items: [
      { name: "GFX (TEMA)", price: "25.000", desc: "Graphic design style" },
      { name: "SCENE (TEMA)", price: "35.000", desc: "Landscape scene" },
      { name: "MANIP (TEMA)", price: "45.000", desc: "Manipulation style" },
      { name: "RATIO 1:1 / 9:16", price: "+2.000", desc: "Additional ratio" },
      { name: "NO BACKGROUND", price: "8.000 - 22.000", desc: "Tanpa background" },
    ],
  },
];

const DROPDOWN_ITEMS = {
  MENU: [
    { label: "Daftar Harga", href: "/pricelist" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "FAQ", href: "/faq" },
    { label: "Our Team", href: "/team" },
    { label: "Berita", href: "/berita" },
  ],
};

const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("/")) {
    e.preventDefault();
    window.location.href = href;
    return;
  }
  if (href.startsWith("#")) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export default function Home() {
  const fantasyFont = "font-serif italic tracking-wider uppercase";
  const [isLoading, setIsLoading] = useState(true);
  const [openSections, setOpenSections] = useState<string[]>(["face"]);
  const smoothSpring = { type: "spring", stiffness: 300, damping: 20 };
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  if (isLoading) return <WelcomeScreen onLoadingComplete={() => setIsLoading(false)} />;

return (
    <div className="min-h-screen bg-black text-white">
      <main className="relative">
        <MoonBackground />

        {/* Mobile Menu Button - Fixed Top Right */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-3 py-2 rounded-lg text-xs font-bold md:hidden"
        >
          <Menu size={18} />
          MENU
        </button>

        {/* Mobile Menu Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-black/90"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 z-[101] w-72 h-full bg-[#010108] border-l border-white/10"
              >
                <div className="p-4 border-b border-white/10">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-purple-400 uppercase">Menu</h2>
                    <button onClick={() => setMobileMenuOpen(false)} className="text-white/60 hover:text-white text-xl">✕</button>
                  </div>
                  <p className="text-xs text-white/40 mt-1">Pilih ingin kemana</p>
                </div>
                <div className="p-4 flex flex-col gap-2">
                  <Link href="/pricelist" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm text-white/60 hover:bg-white/10 hover:text-white rounded-xl transition-all uppercase">Daftar Harga</Link>
                  <Link href="/portfolio" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm text-white/60 hover:bg-white/10 hover:text-white rounded-xl transition-all uppercase">Portfolio</Link>
                  <Link href="/team" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm text-white/60 hover:bg-white/10 hover:text-white rounded-xl transition-all uppercase">Team</Link>
                  <Link href="/faq" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm text-white/60 hover:bg-white/10 hover:text-white rounded-xl transition-all uppercase">FAQ</Link>
                  <Link href="/berita" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-sm text-white/60 hover:bg-white/10 hover:text-white rounded-xl transition-all uppercase">Berita</Link>
                  <Link href="https://discord.gg/muH44HDrea" target="_blank" onClick={() => setMobileMenuOpen(false)} className="mt-4 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 rounded-xl font-medium">Join Discord</Link>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* --- 1. HERO SECTION --- */}
        <section id="beranda" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
          <div className="animate-fade-in flex flex-col items-center w-full">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-12">
              <div className="relative animate-float">
                <div className="absolute inset-0 bg-purple-600/20 blur-[60px] rounded-full" />
                <img src="/selene_shop.png" alt="Logo" className="relative w-36 h-36 md:w-64 md:h-64 object-contain mix-blend-screen drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]" />
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h1 className={`${fantasyFont} text-6xl md:text-[10rem] font-bold text-white leading-[0.8]`}>SELENE</h1>
                <h1 className={`${fantasyFont} text-6xl md:text-[10rem] font-bold leading-[0.8] text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-600`}>SHOP</h1>
              </div>
            </div>
            <p className="text-white/40 max-w-2xl mx-auto text-[9px] md:text-sm mb-12 tracking-[0.4em] uppercase font-light italic px-4 text-center">Digital Craftsmanship for the Midnight Dreamers</p>
            <div className="flex flex-wrap justify-center gap-4">
               <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#layanan" className="px-8 py-4 bg-white text-black rounded-full text-[10px] font-black tracking-widest uppercase">EXPLORE SERVICES</motion.a>
               <motion.a whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }} whileTap={{ scale: 0.95 }} href="#tentang" className="px-8 py-4 border border-white/10 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase">LEARN MORE</motion.a>
            </div>
          </div>
        </section>

        {/* --- 2. BRAND STRIP --- */}
        <section className="relative z-20 py-12 md:py-20 border-y border-white/5 bg-white/[0.01] backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-6 md:gap-24 opacity-40">
            {["SELENE SHOP", "HEPPYCLOUD", "BANGBLAZE"].map((brand) => (
              <span key={brand} className={`${fantasyFont} text-sm md:text-3xl font-bold tracking-[0.3em]`}>{brand}</span>
            ))}
          </div>
        </section>

        {/* --- 3. TENTANG KAMI --- */}
        <ScrollReveal>
          <section id="tentang" className="relative z-10 py-24 md:py-40 px-6">
            <div className="max-w-5xl mx-auto bg-white/[0.02] border border-white/5 rounded-[40px] md:rounded-[80px] p-8 md:p-20 backdrop-blur-xl">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="text-center md:text-left">
                  <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-4 md:mb-6 block uppercase">THE STORY</span>
                  <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold leading-tight mb-6 md:mb-8`}>TENTANG<br className="hidden md:block"/>KAMI</h2>
                  <div className="w-16 h-[2px] bg-purple-500 mx-auto md:mx-0 opacity-50" />
                </div>
                <div className="flex flex-col gap-8 md:gap-10">
                  <p className="text-white/50 leading-loose text-xs md:text-lg uppercase tracking-widest italic font-light text-center md:text-left">
                    Sebuah manifestasi kreativitas yang baru saja merekah. Selene Shop hadir untuk menciptakan standar keanggunan baru di semesta digital.
                  </p>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <motion.div whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }} transition={smoothSpring} className="p-4 md:p-6 rounded-3xl bg-white/5 border border-white/5 text-center flex flex-col justify-center">
                      <h4 className={`${fantasyFont} text-xl md:text-3xl text-purple-400 font-bold`}>100+</h4>
                      <p className="text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em] mt-1">DONE</p>
                    </motion.div>
                    <motion.div whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }} transition={smoothSpring} className="p-4 md:p-6 rounded-3xl bg-white/5 border border-white/5 text-center flex flex-col justify-center overflow-hidden">
                      <h4 className={`${fantasyFont} text-sm md:text-2xl text-purple-400 font-bold leading-none truncate`}>PREMIUM</h4>
                      <p className="text-[7px] md:text-[9px] text-white/30 uppercase tracking-[0.2em] mt-1">QUALITY</p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* --- 4. PHILOSOPHY --- */}
        <ScrollReveal>
          <section className="relative z-10 py-20 px-4 md:px-6">
            <div className="max-w-6xl mx-auto border border-white/5 bg-white/[0.01] rounded-[40px] md:rounded-[60px] p-8 md:p-20 backdrop-blur-xl">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-6 block uppercase">PHILOSOPHY</span>
                  <h2 className={`${fantasyFont} text-3xl md:text-6xl font-bold mb-8 uppercase`}>MENGAPA KAMI?</h2>
                  <p className="text-white/40 leading-relaxed tracking-wide uppercase text-[10px] md:text-xs italic">Kami percaya bahwa identitas digital adalah refleksi dari jiwa. Itulah sebabnya setiap karya melewati proses kurasi detail.</p>
                </div>
                <div className="space-y-6 md:space-y-8">
                  {[{ t: "ARTISTIC PRECISION", d: "Setiap pixel diletakkan dengan penuh pertimbangan estetika." }, { t: "EXCLUSIVE DESIGN", d: "Karya unik yang mencerminkan kepribadian eksklusifmu." }, { t: "NIGHTFALL SERVICE", d: "Dukungan layanan yang responsif dan profesional." }].map((item, i) => (
                    <motion.div key={i} whileHover={{ x: 10 }} transition={smoothSpring} className="border-l border-white/10 pl-6 cursor-default text-left">
                      <h4 className={`${fantasyFont} text-white text-base md:text-lg mb-2`}>✦ {item.t}</h4>
                      <p className="text-white/30 text-[9px] md:text-[10px] tracking-widest uppercase">{item.d}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* --- 5. LAYANAN --- */}
        <ServicesSection fantasyFont={fantasyFont} />

        {/* --- 6. CARA ORDER --- */}
        <ScrollReveal>
          <section id="caraorder" className="relative z-10 py-16 md:py-24 px-6 text-center">
            <h2 className={`${fantasyFont} text-4xl md:text-7xl font-bold mb-16 text-white uppercase`}>CARA ORDER</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[{ s: "01", t: "JOIN COMMUNITY", d: "Masuk ke server Discord kami." }, { s: "02", t: "CREATE TICKET", d: "Pilih kategori layanan dan konsultasi." }, { s: "03", t: "PAYMENT", d: "Bayar sesuai nominal di ticket." }].map((item, idx) => (
                <motion.div key={idx} whileHover={{ scale: 1.03 }} className="relative p-10 rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-md">
                  <span className={`${fantasyFont} text-5xl font-black text-purple-500/10 absolute top-8 right-10`}>{item.s}</span>
                  <h4 className={`${fantasyFont} font-bold text-white text-xl mb-4 relative z-10`}>{item.t}</h4>
                  <p className="text-[10px] text-white/40 uppercase italic tracking-widest">{item.d}</p>
                </motion.div>
              ))}
</div>
          </section>
        </ScrollReveal>

        {/* --- 7. TESTIMONI --- */}
        <section id="testimoni">
          <TestimonialsSection fantasyFont={fantasyFont} />
        </section>

        {/* 8. FOOTER */}
        <footer className="relative z-10 py-10 border-t border-white/5 bg-[#010108] px-6">
          <div className="max-w-7xl mx-auto flex flex-col items-center">
            <div className={`${fantasyFont} text-base md:text-lg font-bold mb-4 tracking-[0.5em] opacity-80 uppercase text-center`}>SELENE SHOP</div>
            <div className="flex flex-col items-center gap-2 text-center w-full">
              <p className="text-white/40 text-[9px] md:text-[11px] uppercase tracking-[0.15em]">© 2026 <span className="text-white/60">SeleneShop</span>. All rights reserved.</p>
              <div className="flex flex-wrap justify-center items-center gap-x-2 gap-y-1 text-[9px] md:text-[11px] tracking-[0.1em]">
                <p className="text-white/40 uppercase"><span className="text-blue-400 font-bold">Bardan1172</span> Visual Series</p>
                <span className="opacity-30 mx-1">—</span> 
                <p className="text-white/40 uppercase">Powered by <span className="text-white/60">SeleneShop.</span></p>
              </div>
            </div>
            <div className="w-10 h-[1px] bg-purple-500 mt-6 opacity-30" />
          </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-20px); } }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
