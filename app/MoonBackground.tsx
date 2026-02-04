"use client";

import { useEffect, useState, useRef } from "react";

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  delay: string;
  depth: number;
}

interface Meteor {
  id: number;
  top: string;
  left: string;
  delay: string;
}

export default function MoonBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Inisialisasi Bintang (Meningkatkan performa dengan inisialisasi satu kali)
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 1.8 + 0.3}px`,
      delay: `${Math.random() * 5}s`,
      depth: Math.random() * 15 + 5, // Kecepatan parallax
    }));
    setStars(generatedStars);

    // 2. Inisialisasi Meteor
    const generatedMeteors = Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 40}%`,
      left: `${70 + Math.random() * 30}%`,
      delay: `${Math.random() * 25}s`,
    }));
    setMeteors(generatedMeteors);

    // 3. Efek Parallax saat Mouse Bergerak
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const starLayers = document.querySelectorAll('.star-layer');
      starLayers.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.getAttribute('data-speed') || "0");
        const x = (centerX - clientX) * speed / 1000;
        const y = (centerY - clientY) * speed / 1000;
        htmlEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#010108]">
      
      {/* 1. LAYER NEBULA (Atmospheric Glow) */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-[-10%] left-[-5%] w-[70%] h-[70%] bg-purple-900/10 blur-[130px] rounded-full opacity-60" />
        <div className="absolute bottom-[5%] right-[-5%] w-[60%] h-[60%] bg-indigo-900/10 blur-[130px] rounded-full opacity-50" />
      </div>

      {/* 2. LAYER STARS (Parallax & Twinkle) */}
      <div className="absolute inset-0 z-[2]">
        {stars.map((s) => (
          <div 
            key={s.id} 
            className="star-layer absolute bg-white rounded-full animate-twinkle shadow-[0_0_3px_rgba(255,255,255,0.8)]"
            data-speed={s.depth}
            style={{ 
              top: s.top, 
              left: s.left, 
              width: s.size, 
              height: s.size, 
              animationDelay: s.delay 
            }} 
          />
        ))}
      </div>

      {/* 3. PREMIUM MOON (The Focal Point) */}
      <div className="absolute top-20 right-[8%] md:right-[12%] z-[5] transition-transform duration-1000 ease-out">
        <div className="relative">
            {/* Moon Glow Layers */}
            <div className="absolute inset-0 rounded-full bg-yellow-100/20 animate-moon-glow-wave scale-110" />
            <div className="absolute inset-0 rounded-full bg-yellow-100/15 animate-moon-glow-wave [animation-delay:2s] scale-125" />
            <div className="absolute inset-0 rounded-full bg-yellow-100/10 animate-moon-glow-wave [animation-delay:4s] scale-150" />
            
            {/* Actual Moon Body */}
            <div className="relative w-32 h-32 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-[#FFFDF5] via-[#FFF9E5] to-[#E6D296] shadow-[inset_-15px_-10px_20px_rgba(184,156,70,0.3),0_0_60px_rgba(255,249,229,0.3)] border border-white/20 overflow-hidden">
              {/* Moon Craters */}
              <div className="absolute top-[20%] left-[25%] w-[25%] h-[10%] bg-black/5 rounded-full rotate-[-15deg] blur-[2px]" />
              <div className="absolute top-[30%] left-[40%] w-8 h-8 md:w-12 md:h-12 bg-[#D9C17E]/20 rounded-full shadow-inner blur-[1px]" />
              <div className="absolute bottom-[25%] left-[55%] w-6 h-6 md:w-10 md:h-10 bg-[#D9C17E]/20 rounded-full shadow-inner blur-[1px]" />
              <div className="absolute top-[60%] left-[20%] w-4 h-4 md:w-7 md:h-7 bg-[#D9C17E]/15 rounded-full shadow-inner" />
            </div>
        </div>
      </div>

      {/* 4. LAYER SHOOTING STARS (Meteor) */}
      <div className="absolute inset-0 z-[10]">
        {meteors.map((m) => (
          <div 
            key={m.id} 
            className="absolute h-[1.5px] bg-gradient-to-l from-white via-purple-300 to-transparent opacity-0 animate-star-rain"
            style={{ 
              top: m.top, 
              left: m.left, 
              width: '150px', 
              animationDelay: m.delay 
            }} 
          />
        ))}
      </div>
    </div>
  );
}
