"use client";

import { useEffect, useState, useRef } from "react";

function MoonBackground() {
  const [stars, setStars] = useState<{id: number, top: string, left: string, size: string, delay: string}[]>([]);
  const [meteors, setMeteors] = useState<{id: number, top: string, left: string, delay: string, duration: string}[]>([]);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Generate Bintang (Twinkling)
    setStars(Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 0.5}px`,
      delay: `${Math.random() * 5}s`,
    })));

    // 2. Generate Bintang Jatuh (Meteor) - Muncul berkala
    setMeteors(Array.from({ length: 5 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 40}%`,
      left: `${Math.random() * 80 + 20}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${2 + Math.random() * 3}s`,
    })));

    const handleMouseMove = (e: MouseEvent) => {
      if (!moonRef.current) return;
      const x = (e.clientX - window.innerWidth / 2) / 50;
      const y = (e.clientY - window.innerHeight / 2) / 50;
      moonRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#02020a]">
      
      {/* 1. LAYER AWAN TIPIS (MIST) */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute top-[20%] -left-[10%] w-[70%] h-[30%] bg-white/5 blur-[100px] rounded-full animate-cloud-drift" />
        <div className="absolute bottom-[20%] -right-[10%] w-[60%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full animate-cloud-drift-reverse" />
      </div>

      {/* 2. BINTANG JATUH (METEOR) */}
      {meteors.map((m) => (
        <div
          key={m.id}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 animate-meteor-new"
          style={{
            top: m.top,
            left: m.left,
            width: '150px',
            animationDelay: m.delay,
            animationDuration: m.duration,
            transform: 'rotate(-35deg)',
          }}
        />
      ))}

      {/* 3. BINTANG BERKELIP */}
      {stars.map((s) => (
        <div
          key={s.id}
          className="absolute bg-white rounded-full animate-twinkle"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            boxShadow: '0 0 5px white',
          }}
        />
      ))}

      {/* 4. BULAN UTAMA */}
      <div 
        ref={moonRef}
        className="absolute top-24 right-[10%] md:right-[15%] transition-transform duration-700 ease-out z-20"
      >
        <div className="absolute inset-[-40px] rounded-full bg-purple-500/10 blur-[60px]" />
        <div className="relative w-32 h-32 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-white via-gray-200 to-gray-400 shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.5),0_0_40px_rgba(255,255,255,0.1)] border border-white/10 overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_70%)]" />
           <div className="absolute top-[20%] left-[25%] w-8 h-8 bg-black/5 rounded-full blur-md" />
           <div className="absolute bottom-[30%] right-[20%] w-12 h-12 bg-black/5 rounded-full blur-lg" />
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes cloud-drift {
          0% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(100px, 20px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes cloud-drift-reverse {
          0% { transform: translate(0, 0) scale(1.1); }
          50% { transform: translate(-80px, -30px) scale(1); }
          100% { transform: translate(0, 0) scale(1.1); }
        }
        @keyframes meteor-new {
          0% { transform: rotate(-35deg) translateX(0) scaleX(0); opacity: 0; }
          10% { opacity: 1; scaleX(1); }
          30% { transform: rotate(-35deg) translateX(-500px) scaleX(1); opacity: 0; }
          100% { transform: rotate(-35deg) translateX(-500px) scaleX(0); opacity: 0; }
        }
        .animate-twinkle { animation: twinkle 3s infinite ease-in-out; }
        .animate-cloud-drift { animation: cloud-drift 25s infinite ease-in-out; }
        .animate-cloud-drift-reverse { animation: cloud-drift-reverse 30s infinite ease-in-out; }
        .animate-meteor-new { animation: meteor-new 10s infinite linear; }
      `}</style>
    </div>
  );
}
