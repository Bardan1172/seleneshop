"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#beranda", label: "Beranda" },
    { href: "#produk", label: "Produk" },
    { href: "#order", label: "Order" },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          
          <div className="text-lg font-semibold text-purple-200">
            Selene Shop
          </div>

          <div className="hidden md:flex gap-6 text-sm text-purple-100">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-purple-300 transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden text-purple-200 p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

        </div>
      </nav>

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
              className="fixed top-0 right-0 z-[101] w-64 h-full bg-black border-l border-purple-500/30 pt-16 pb-8 px-6"
            >
              <button
                className="absolute top-4 right-4 text-purple-200 p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-4 mt-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-lg text-purple-100 hover:text-purple-300 py-3 border-b border-purple-500/20"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="/portfolio"
                  className="text-left text-lg text-purple-100 hover:text-purple-300 py-3 border-b border-purple-500/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  href="/team"
                  className="text-left text-lg text-purple-100 hover:text-purple-300 py-3 border-b border-purple-500/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Team
                </a>
                <a
                  href="/faq"
                  className="text-left text-lg text-purple-100 hover:text-purple-300 py-3 border-b border-purple-500/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <a
                  href="/berita"
                  className="text-left text-lg text-purple-100 hover:text-purple-300 py-3 border-b border-purple-500/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Berita
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}