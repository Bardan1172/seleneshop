"use client";

import { useEffect, useState, useRef } from "react";

// --- DEFINISI INTERFACE (Penting agar tidak error saat build Vercel) ---
interface Star {
  id: number;
  top: string;
  left: string;
  size: number; // Diubah ke number untuk fleksibilitas style
  delay: string;
  opacity: number;
  color: string;
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
    // 1. Inisialisasi Bintang (Efek Milky Way: Lebih banyak & padat)
    // Variasi warna: Putih murni, Pink Magenta, dan Ungu Muda
    const colors = ["#ffffff", "#ffd6ff", "#e7c6ff", "#ffffff", "#fae8ff"];
    const generatedStars = Array.from({ length: 450 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.3,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      depth: Math.random() * 12 + 4,
    }));
    setStars(generatedStars);

    // 2. Inisialisasi Meteor
    const generatedMeteors = Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 35}%`,
      left: `${60 + Math.random() * 40}%`,
      delay: `${Math.random() * 25}s`,
    }));
    setMeteors(generatedMeteors);

    // 3. Efek Parallax Halus
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const starLayers = document.querySelectorAll('.star-layer');
      starLayers.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.getAttribute('data-speed') || "0");
        const x = (centerX - clientX) * speed / 1500;
        const y = (centerY - clientY) * speed / 1500;
        htmlEl.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#02010a]">
      
      {/* 1. LAYER NEBULA (Magenta & Purple Milky Way) */}
      <div className="absolute inset-0 z-[1] opacity-60">
        {/* Jalur Galaksi Utama (Diagonal) */}
        <div 
          className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] rotate-[-35deg] blur-[100px]"
          style={{
            background: `radial-gradient(ellipse at center, rgba(162, 28, 175, 0.15) 0%, rgba(76, 29, 149, 0.1) 40%, transparent 75%)`
          }}
        />
        {/* Glow Magenta tambahan di sisi bawah */}
        <div className="absolute bottom-[-5%] right-[-5%] w-[60%] h-[60%] bg-fuchsia-900/10 blur-[130px] rounded-full mix-blend-screen opacity-40" />
      </div>

      {/* 2. LAYER BINTANG (Twinkle & Glow) */}
      <div className="absolute inset-0 z-[2]">
        {stars.map((s) => (
          <div 
            key={s.id} 
            className="star-layer absolute rounded-full animate-twinkle"
            data-speed={s.depth}
            style={{ 
              top: s.top, 
              left: s.left, 
              width: `${s.size}px`, 
              height: `${s.size}px`, 
              backgroundColor: s.color,
              opacity: s.opacity,
              boxShadow: s.size > 1.2 ? `0 0 5px ${s.color}` : 'none',
              animationDelay: s.delay 
            }} 
          />
        ))}
      </div>

      {/* 3. PREMIUM MOON (Focal Point) */}
      <div className="absolute top-20 right-[10%] z-[5] animate-moon">
        <div className="relative">
            {/* Glow Aura Magenta di sekitar Bulan */}
            <div className="absolute inset-0 rounded-full bg-fuchsia-500/5 animate-moon-glow-wave scale-125 blur-3xl" />
            
            <div className="relative w-32 h-32 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-[#FFFDF5] via-[#FFF9E5] to-[#E6D296] shadow-[inset_-12px_-8px_20px_rgba(184,156,70,0.3),0_0_60px_rgba(255,249,229,0.2)] border border-white/20 overflow-hidden">
              <div className="absolute top-[20%] left-[25%] w-[25%] h-[10%] bg-black/5 rounded-full rotate-[-15deg] blur-[1px]" />
              <div className="absolute top-[30%] left-[40%] w-10 h-10 bg-[#D9C17E]/20 rounded-full shadow-inner blur-[1px]" />
            </div>
        </div>
      </div>

      {/* 4. LAYER METEOR (Shooting Stars) */}
      <div className="absolute inset-0 z-[10]">
        {meteors.map((m) => (
          <div 
            key={m.id} 
            className="absolute h-[1px] bg-gradient-to-r from-white via-fuchsia-400 to-transparent opacity-0 animate-star-rain"
            style={{ top: m.top, left: m.left, width: '220px', animationDelay: m.delay }} 
          />
        ))}
      </div>
    </div>
  );
}
