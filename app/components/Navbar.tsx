"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Package, ShoppingCart, Users, HelpCircle, FileText, MessageSquare } from "lucide-react";

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
            className="md:flex md:hidden items-center justify-center min-w-[90px] h-10 bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={22} />
            <span className="ml-1">Menu</span>
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
className="fixed top-0 right-0 z-[101] w-80 h-full bg-black border-l border-purple-500/30 pt-16 pb-8 px-6"
              >
              <div className="text-center border-b border-purple-500/20 pb-4 mb-2">
                <h2 className="text-lg font-semibold text-purple-200">Menu</h2>
                <p className="text-sm text-purple-400">Pilih ingin kemana</p>
              </div>

              <button
                className="absolute top-4 right-4 text-purple-200 p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-2 mt-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="flex items-center gap-3 text-left text-base text-purple-100 hover:text-purple-300 py-3 px-3 rounded-lg hover:bg-purple-500/20 transition"
                  >
                    {link.href === "#beranda" && <Home size={20} />}
                    {link.href === "#produk" && <Package size={20} />}
                    {link.href === "#order" && <ShoppingCart size={20} />}
                    {link.label}
                  </button>
                ))}
                <a
                  href="/portfolio"
                  className="flex items-center gap-3 text-left text-base text-purple-100 hover:text-purple-300 py-3 px-3 rounded-lg hover:bg-purple-500/20 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Users size={20} />
                  Portfolio
                </a>
                <a
                  href="/team"
                  className="flex items-center gap-3 text-left text-base text-purple-100 hover:text-purple-300 py-3 px-3 rounded-lg hover:bg-purple-500/20 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Users size={20} />
                  Team
                </a>
                <a
                  href="/faq"
                  className="flex items-center gap-3 text-left text-base text-purple-100 hover:text-purple-300 py-3 px-3 rounded-lg hover:bg-purple-500/20 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HelpCircle size={20} />
                  FAQ
                </a>
                <a
                  href="/berita"
                  className="flex items-center gap-3 text-left text-base text-purple-100 hover:text-purple-300 py-3 px-3 rounded-lg hover:bg-purple-500/20 transition"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FileText size={20} />
                  Berita
                </a>
                <a
                  href="https://discord.gg/muH44HDrea"
                  target="_blank"
                  className="mt-4 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-4 py-3 rounded-xl font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageSquare size={20} />
                  Join Discord
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}