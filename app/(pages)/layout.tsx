"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fantasyFont = "font-serif italic tracking-wider uppercase";

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
  if (href.startsWith("#")) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
};

export default function PageLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { label: "BERANDA", href: "/" },
    { label: "TENTANG", href: "/#tentang" },
    { label: "LAYANAN", href: "/#layanan" },
    { label: "TESTIMONI", href: "/#testimoni" },
  ];

  return (
    <div className="bg-[#010108] text-white selection:bg-purple-500/30 min-h-screen font-sans">
      <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4 pointer-events-none">
        <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-2 pl-3 md:pl-4 pr-3 md:pr-6 shadow-2xl">
          <div className="flex items-center gap-2 group">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/selene_shop.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full mix-blend-screen transition-transform group-hover:scale-110" />
              <div className={`${fantasyFont} text-[10px] md:text-sm font-bold tracking-[0.3em] hidden sm:block`}>SELENE<span className="text-purple-500 ml-1">✦</span></div>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((nav) => (
              <Link 
                key={nav.label} 
                href={nav.href}
                onClick={(e) => handleNavClick(e, nav.href)}
                className={`px-3 py-2 text-[9px] font-bold tracking-[0.2em] rounded-2xl transition-all uppercase ${pathname === nav.href ? 'bg-white/10 text-white' : 'opacity-60 hover:opacity-100 hover:bg-white/5'}`}
              >
                {nav.label}
              </Link>
            ))}
            {["MENU"].map((label) => (
              <div key={label} className="relative">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
                  onMouseEnter={() => openDropdown && setOpenDropdown(label)}
                  className="flex items-center gap-1 px-3 py-2 text-[9px] font-bold tracking-[0.2em] hover:bg-white/5 rounded-2xl transition-opacity duration-300 opacity-60 hover:opacity-100 uppercase"
                >
                  {label}
                  <ChevronDown size={10} className={`transition-transform ${openDropdown === label ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-[#010108] border border-white/10 rounded-xl backdrop-blur-xl shadow-2xl overflow-hidden z-50"
                    >
                      {DROPDOWN_ITEMS.MENU.map((item) => (
                        <Link 
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-[9px] text-white/60 hover:bg-white/10 hover:text-white transition-all uppercase"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
          <Link href="https://discord.gg/muH44HDrea" target="_blank" className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-xl text-[9px] font-black tracking-[0.2em] uppercase hover:scale-105 active:scale-95 transition-transform">JOIN DISCORD</Link>
        </div>
      </nav>

      <main className="pt-24 md:pt-28">
        {children}
      </main>

      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
}