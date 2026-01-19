"use client";

import { useEffect, useState, useRef } from "react";

function MoonBackground() {
  const [sparkles, setSparkles] = useState<{id: number, top: string, left: string, delay: string, duration: string, size: string}[]>([]);
  const [shootingStars, setShootingStars] = useState<{id: number, top: string, left: string, delay: string, duration: string}[]>([]);
  const moonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Background Stars (Twinkling)
    const generatedStars = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 2}s`,
      size: `${Math.random() * 2 + 1}px`,
    }));
    setSparkles(generatedStars);

    // 2. Realistic Shooting Stars (Bervariasi)
    const generatedMeteors = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      // Start position (beberapa dari luar layar atas/kanan)
      top: `${Math.random() * 40 - 10}%`, 
      left: `${Math.random() * 50 + 50}%`,
      delay: `${Math.random() * 20}s`,
      duration: `${2 + Math.random() * 4}s`,
    }));
    setShootingStars(generatedMeteors);

    const handleMouseMove = (e: MouseEvent) => {
      if (!moonRef.current) return;
      const x = (e.clientX - window.innerWidth / 2) / 45;
      const y = (e.clientY - window.innerHeight / 2) / 45;
      moonRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#02020a]">
      {/* ATMOSPHERIC GLOW */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(88,28,135,0.15),transparent_70%)]" />

      {/* REALISTIC SHOOTING STARS */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-gradient-to-l from-white via-purple-400 to-transparent rounded-full animate-meteor-fast"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
            animationDuration: star.duration,
            width: '200px',
            height: '2px',
            transform: "rotate(-35deg)",
            filter: 'drop-shadow(0 0 8px rgba(192, 132, 252, 0.8))'
          }}
        />
      ))}

      {/* BACKGROUND MOONS */}
      <div className="absolute top-[60%] left-[10%] w-20 h-20 rounded-full bg-purple-500/5 blur-xl animate-pulse" />
      <div className="absolute top-[20%] left-[80%] w-12 h-12 rounded-full bg-blue-500/5 blur-lg" />

      {/* MAIN MOON */}
      <div 
        ref={moonRef}
        className="absolute top-24 right-[10%] md:right-[15%] transition-transform duration-1000 ease-out z-10"
      >
        <div className="absolute inset-[-40px] rounded-full bg-purple-600/10 blur-[80px] animate-pulse" />
        <div className="relative w-44 h-44 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-[#ffffff] via-[#f3f0ff] to-[#d8d2ff] shadow-[inset_-15px_-15px_60px_rgba(0,0,0,0.4),0_0_100px_rgba(168,85,247,0.2)] border border-white/20">
          <div className="absolute top-[20%] left-[30%] w-10 h-10 bg-purple-900/5 rounded-full blur-[4px]" />
          <div className="absolute bottom-[35%] right-[25%] w-16 h-16 bg-purple-900/5 rounded-full blur-[6px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_60%)]" />
        </div>
      </div>

      {/* TWINKLING STARS */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute bg-white rounded-full animate-twinkle shadow-[0_0_8px_white]"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes meteor-realistic {
          0% { 
            transform: rotate(-35deg) translateX(0) scale(0); 
            opacity: 0; 
          }
          10% { 
            transform: rotate(-35deg) translateX(-100px) scale(1.2); 
            opacity: 1; 
          }
          60% { 
            opacity: 0.8; 
          }
          100% { 
            transform: rotate(-35deg) translateX(-1200px) scale(0.2); 
            opacity: 0; 
          }
        }

        @keyframes twinkle {
          0%, 100% { transform: scale(0.8); opacity: 0.2; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        .animate-meteor-fast {
          animation-name: meteor-realistic;
          animation-iteration-count: infinite;
          animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .animate-twinkle {
          animation-name: twinkle;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
