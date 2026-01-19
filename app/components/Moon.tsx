"use client";

import { useEffect, useState, useRef } from "react";

function MoonBackground() {
  const [stars, setStars] = useState<{id: number, top: string, left: string, size: string, opacity: number, delay: string}[]>([]);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate 150 bintang dengan variasi ukuran dan kejernihan untuk kedalaman (Depth of Field)
    const generatedStars = Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.5}px`, // Ada yang sangat kecil (jauh), ada yang agak besar (dekat)
      opacity: Math.random() * 0.7 + 0.3,
      delay: `${Math.random() * 10}s`,
    }));
    setStars(generatedStars);

    const handleMouseMove = (e: MouseEvent) => {
      if (!moonRef.current) return;
      // Parallax sangat halus (pembagi 80) agar terasa berat dan jauh
      const x = (e.clientX - window.innerWidth / 2) / 80;
      const y = (e.clientY - window.innerHeight / 2) / 80;
      moonRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#010105]">
      {/* LAYER 1: VAST SPACE NEBULA (Sentuhan warna ungu dan biru gelap) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(30,20,80,0.4),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(15,10,40,0.5),transparent_60%)]" />
      
      {/* LAYER 2: MILKY WAY DUST (Tekstur debu angkasa tipis) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      {/* LAYER 3: THE STARS (Berkelip pelan seperti aslinya) */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-full animate-slow-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            animationDelay: s.delay,
            boxShadow: parseInt(s.size) > 1.5 ? '0 0 4px rgba(255,255,255,0.8)' : 'none',
          }}
        />
      ))}

      {/* LAYER 4: THE MOON (Fokus Utama yang Elegan) */}
      <div 
        ref={moonRef}
        className="absolute top-24 right-[10%] md:right-[15%] transition-transform duration-1000 ease-out z-10"
      >
        {/* Soft Moon Halo */}
        <div className="absolute inset-[-60px] rounded-full bg-purple-500/5 blur-[100px]" />
        
        {/* The Body */}
        <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full bg-[#fcfcfc] shadow-[inset_-20px_-20px_60px_rgba(0,0,0,0.4),0_0_80px_rgba(180,160,255,0.15)] overflow-hidden border border-white/10">
          {/* Subtle Lunar Map Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] contrast-125" />
          {/* Shading 3D */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
        </div>
      </div>

      {/* LAYER 5: DISTANT SATELLITE (Opsional: Sangat kecil dan pelan) */}
      <div className="absolute top-1/2 left-1/4 w-[1px] h-[1px] bg-white opacity-20 animate-satellite" />

      <style jsx>{`
        @keyframes slow-twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.1); }
        }

        @keyframes satellite {
          from { transform: translateX(-100vw); }
          to { transform: translateX(100vw); }
        }

        .animate-slow-twinkle {
          animation: slow-twinkle 4s infinite ease-in-out;
        }

        .animate-satellite {
          animation: satellite 60s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default MoonBackground;
