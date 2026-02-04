"use client";

import { useEffect, useState, useRef } from "react";

// ... (Interface Star & Meteor tetap sama)

export default function MoonBackground() {
  const [stars, setStars] = useState<Star[]>([]);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Penyesuaian warna bintang agar lebih variatif (putih, soft pink, pale purple)
    const colors = ["#ffffff", "#fbcfe8", "#e9d5ff", "#fdf2f8"];
    const generatedStars = Array.from({ length: 450 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.6 + 0.3,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.8 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
      depth: Math.random() * 12 + 3,
    }));
    setStars(generatedStars);

    // Meteor tetap meluncur dari kanan-atas
    setMeteors(Array.from({ length: 4 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 35}%`,
      left: `${65 + Math.random() * 35}%`,
      delay: `${Math.random() * 25}s`,
    })));

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      document.querySelectorAll('.star-layer').forEach((el: any) => {
        const speed = parseFloat(el.getAttribute('data-speed') || "0");
        el.style.transform = `translate3d(${(centerX - clientX) * speed / 1200}px, ${(centerY - clientY) * speed / 1200}px, 0)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#02010a]">
      
      {/* 1. LAYER NEBULA (Magenta & Purple Glow) */}
      <div className="absolute inset-0 z-[1] opacity-60">
        {/* Inti Galaksi - Ungu ke Magenta */}
        <div 
          className="absolute top-[-25%] left-[-15%] w-[150%] h-[150%] rotate-[-30deg] blur-[120px]"
          style={{
            background: `radial-gradient(circle at center, rgba(139, 92, 246, 0.12) 0%, rgba(217, 70, 239, 0.08) 35%, transparent 70%),
                         linear-gradient(to bottom right, rgba(162, 28, 175, 0.05), transparent, rgba(88, 28, 135, 0.05))`
          }}
        />
        {/* Aksen Magenta Tambahan */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-magenta-900/10 blur-[130px] rounded-full opacity-40 mix-blend-screen" />
      </div>

      {/* 2. LAYER STARS */}
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
              boxShadow: s.size > 1.3 ? `0 0 6px ${s.color}` : 'none',
              animationDelay: s.delay 
            }} 
          />
        ))}
      </div>

      {/* 3. PREMIUM MOON */}
      <div className="absolute top-20 right-[10%] z-[5] animate-moon">
        <div className="relative">
            {/* Glow bulan disesuaikan dengan aura magenta */}
            <div className="absolute inset-0 rounded-full bg-magenta-200/5 animate-moon-glow-wave scale-125 blur-2xl" />
            
            <div className="relative w-28 h-28 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-[#fffdf5] via-[#fff9e5] to-[#e6d296] shadow-[inset_-10px_-8px_20px_rgba(184,156,70,0.3),0_0_60px_rgba(255,249,229,0.15)] border border-white/10 overflow-hidden" />
        </div>
      </div>

      {/* 4. METEORS */}
      <div className="absolute inset-0 z-[10]">
        {meteors.map((m) => (
          <div 
            key={m.id} 
            className="absolute h-[1px] bg-gradient-to-r from-white via-magenta-400 to-transparent opacity-0 animate-star-rain"
            style={{ top: m.top, left: m.left, width: '200px', animationDelay: m.delay }} 
          />
        ))}
      </div>
    </div>
  );
}
