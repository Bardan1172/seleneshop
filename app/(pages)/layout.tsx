"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        <div className="max-w-5xl mx-auto flex justify-between items-center pointer-events-auto bg-black/30 backdrop-blur-lg border-b border-white/10 rounded-2xl md:rounded-3xl p-2 pl-3 md:pl-4 pr-2 md:pr-6">
          <div className="flex items-center gap-2 group">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/selene_shop.png" alt="Logo" className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full transition-transform group-hover:scale-110" />
              <div className="text-[10px] md:text-sm font-bold tracking-[0.3em] hidden sm:block">SELENE</div>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-1" ref={dropdownRef}>
            {navItems.map((nav) => (
              <Link 
                key={nav.label} 
                href={nav.href}
                onClick={(e) => handleNavClick(e, nav.href)}
                className="px-3 py-2 text-xs font-medium tracking-wider rounded-xl transition-all hover:bg-white/10"
              >
                {nav.label}
              </Link>
            ))}
            {["MENU"].map((label) => (
              <div key={label} className="relative">
                <button 
                  onClick={() => setOpenDropdown(openDropdown === label ? null : label)}
                  onMouseEnter={() => openDropdown && setOpenDropdown(label)}
                  className="flex items-center gap-1 px-3 py-2 text-xs font-medium tracking-wider hover:bg-white/10 rounded-xl transition-all"
                >
                  {label}
                  <ChevronDown size={12} className={`transition-transform ${openDropdown === label ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openDropdown === label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full right-0 mt-2 w-44 bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl overflow-hidden z-50"
                    >
                      {DROPDOWN_ITEMS.MENU.map((item) => (
                        <Link 
                          key={item.label}
                          href={item.href}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-xs hover:bg-white/10 transition-all"
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
          <Link href="https://discord.gg/muH44HDrea" target="_blank" className="hidden md:flex bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-xl text-xs font-medium transition">JOIN DISCORD</Link>
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 bg-black/30 backdrop-blur-lg rounded-lg"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <main className="pt-24 md:pt-28">
        {children}
      </main>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[150] bg-black/70"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 z-[151] w-64 h-full bg-black/90 backdrop-blur-lg border-l border-white/10"
            >
              <div className="p-4 border-b border-white/10">
                <div className="flex justify-between items-center">
                  <h2 className="text-base font-bold">Menu</h2>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-lg">✕</button>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                {navItems.map((item) => (
                  <Link 
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 border-t border-white/10" />
                {DROPDOWN_ITEMS.MENU.map((item) => (
                  <Link 
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="https://discord.gg/muH44HDrea"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg text-center"
                >
                  Join Discord
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
    </div>
  );
}