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
        <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto bg-black/40 backdrop-blur-md border-b border-purple-500/20 px-6">
          <div className="text-lg font-semibold text-purple-200">
            Selene Shop 🌙
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm text-purple-100" ref={dropdownRef}>
            {navItems.map((nav) => (
              <Link 
                key={nav.label} 
                href={nav.href}
                onClick={(e) => handleNavClick(e, nav.href)}
                className="hover:text-purple-300 transition uppercase"
              >
                {nav.label}
              </Link>
            ))}
            <div className="relative">
              <button 
                onClick={() => setOpenDropdown(openDropdown === 'MENU' ? null : 'MENU')}
                onMouseEnter={() => openDropdown && setOpenDropdown('MENU')}
                className="flex items-center gap-1 hover:text-purple-300 transition uppercase"
              >
                Menu
                <ChevronDown size={14} className={`transition-transform ${openDropdown === 'MENU' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openDropdown === 'MENU' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-black/80 backdrop-blur-md border border-purple-500/20 rounded-xl shadow-xl overflow-hidden z-50"
                  >
                    {DROPDOWN_ITEMS.MENU.map((item) => (
                      <Link 
                        key={item.label}
                        href={item.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2 text-sm text-purple-100 hover:text-purple-300 hover:bg-purple-500/10 transition-all uppercase"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link href="https://discord.gg/muH44HDrea" target="_blank" className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              Join Discord
            </Link>
          </div>
          
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden flex items-center gap-2 text-purple-100 hover:text-purple-300"
          >
            <Menu size={24} />
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
              className="fixed inset-0 z-[150] bg-black/80"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 z-[151] w-80 h-full bg-black/90 backdrop-blur-md border-l border-purple-500/20"
            >
              <div className="p-6 border-b border-purple-500/20">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-purple-200">Menu</h2>
                  <button onClick={() => setMobileMenuOpen(false)} className="text-purple-100 hover:text-purple-300">
                    ✕
                  </button>
                </div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base text-purple-100 hover:text-purple-300 transition uppercase"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="my-2 border-t border-purple-500/20" />
                <p className="text-xs text-purple-300/60 uppercase">Menu</p>
                {DROPDOWN_ITEMS.MENU.map((item) => (
                  <Link 
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base text-purple-100 hover:text-purple-300 transition uppercase"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="https://discord.gg/muH44HDrea"
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-4 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 rounded-lg font-medium"
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