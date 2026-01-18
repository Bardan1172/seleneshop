'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-[#05051a]/80 backdrop-blur-md py-4 border-b border-purple-500/20' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg rotate-45 group-hover:rotate-[225deg] transition-transform duration-700 flex items-center justify-center">
             <span className="text-white text-xs -rotate-45 group-hover:rotate-[-225deg] transition-transform duration-700">S</span>
          </div>
          <span className="text-purple-50 font-title font-bold text-xl tracking-tight">
            Selene<span className="text-purple-400">Shop</span>
          </span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Beranda', 'Tentang', 'Produk'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-purple-100/70 hover:text-purple-300 transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-purple-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
          <a
            href="https://discord.gg/muH44HDrea"
            target="_blank"
            className="px-5 py-2 rounded-full bg-purple-600/20 border border-purple-500/40 text-purple-200 text-sm hover:bg-purple-600 hover:text-white transition-all duration-300"
          >
            Join Discord
          </a>
        </div>
      </div>
    </nav>
  );
}
