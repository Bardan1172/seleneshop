"use client";

import { useEffect, useState, useRef } from "react";

export default function MoonBackground() {
  const [stars, setStars] = useState<{id: number, top: string, left: string, size: string, delay: string, depth: number}[]>([]);
  const [meteors, setMeteors] = useState<{id: number, top: string, left: string, delay: string}[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inisialisasi Bintang
    setStars(Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.8 + 0.3}px`,
      delay: `${Math.random() * 5}s`,
      depth: Math.random() * 12 + 4,
    })));

    // Inisialisasi Meteor
    setMeteors(Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 40}%`,
      left: `${70 + Math.random() * 30}%`,
      delay: `${Math.random() * 25}s`,
    })));

    // Efek Parallax saat Mouse Bergerak
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const starLayers = document.querySelectorAll('.star-layer');
      starLayers.forEach((el: any) => {
        const speed = el.getAttribute('data-speed') || 0;
        const x = (centerX - clientX) * speed / 1000;
        const y = (centerY - clientY) * speed / 1000;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#010108]">
      {/* 1. LAYER NEBULA */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-purple-900/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[5%] right-[-5%] w-[50%] h-[50%] bg-blue-900/10 blur-[120px] rounded-full" />
      </div>

      {/* 2. LAYER STAR RAIN */}
      <div className="absolute inset-0 z-[10]">
        {meteors.map((m) => (
          <div key={m.id} 
            className="absolute h-[1.5px] bg-gradient-to-l from-white via-purple-400 to-transparent opacity-0 animate-star-rain shadow-[0_0_10px_rgba(255,255,255,0.8)]"
            style={{ top: m.top, left: m.left, width: '120px', animationDelay: m.delay }} 
          />
        ))}
      </div>

      {/* 3. LAYER STARS (Parallax) */}
      <div className="absolute inset-0 z-[2]">
        {stars.map((s) => (
          <div key={s.id} 
            className="star-layer absolute bg-white rounded-full animate-twinkle shadow-[0_0_2px_rgba(255,255,255,0.5)]"
            data-speed={s.depth}
            style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }} 
          />
        ))}
      </div>

      {/* 4. PREMIUM MOON */}
      <div className="absolute top-24 right-[5%] md:right-[10%] z-[5] animate-moon">
        <div className="absolute inset-0 rounded-full bg-yellow-100/20 animate-moon-glow-wave" />
        <div className="absolute inset-0 rounded-full bg-yellow-100/15 animate-moon-glow-wave [animation-delay:2s]" />
        <div className="absolute inset-0 rounded-full bg-yellow-100/10 animate-moon-glow-wave [animation-delay:4s]" />
        <div className="absolute inset-[-15px] rounded-full bg-yellow-100/5 blur-[40px]" />
        
        <div className="relative w-32 h-32 md:w-64 md:h-64 rounded-full bg-[#FFF9E5] shadow-[inset_-15px_-10px_0px_rgba(230,210,150,0.5),0_0_50px_rgba(255,249,229,0.2)] border-2 border-white/10 overflow-hidden">
          <div className="absolute top-[15%] left-[20%] w-[30%] h-[12%] bg-white/40 rounded-full rotate-[-15deg] blur-[1px]" />
          <div className="absolute top-[25%] left-[35%] w-8 h-8 md:w-12 md:h-12 bg-[#E6D296]/40 rounded-full shadow-inner" />
          <div className="absolute bottom-[30%] left-[52%] w-6 h-6 md:w-10 md:h-10 bg-[#E6D296]/30 rounded-full shadow-inner" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_55%,rgba(230,210,150,0.4)_100%)]" />
        </div>
      </div>
    </div>
  );
}
