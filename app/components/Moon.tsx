"use client";

import { useEffect, useState } from "react";

type Sparkle = {
  id: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
  size: string;
};

export default function Moon() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Menambah jumlah sparkle menjadi 80 agar lebih "rame"
    const generated: Sparkle[] = Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${2 + Math.random() * 4}s`,
      size: `${Math.random() * 3 + 1}px`, // Ukuran bervariasi
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 🌌 Cosmic Nebula (Kabut warna-warni di latar belakang) */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-900/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

      {/* 🌠 Meteor / Shooting Stars (Efek tambahan agar langit tidak statis) */}
      <div className="absolute top-0 left-1/4 w-[2px] h-[100px] bg-gradient-to-b from-transparent via-white/50 to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/4 left-1/2 w-[1px] h-[80px] bg-gradient-to-b from-transparent via-purple-300/40 to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '4s' }} />
      <div className="absolute top-0 left-[80%] w-[2px] h-[120px] bg-gradient-to-b from-transparent via-blue-300/30 to-transparent rotate-[45deg] animate-shooting-star" style={{ animationDelay: '7s' }} />

      {/* 🌙 The Great Moon (Lebih banyak lapisan glow) */}
      {/* Cahaya inti bulan */}
      <div className="absolute top-24 right-10 md:right-24 w-40 h-40 rounded-full bg-gradient-to-br from-white via-purple-100 to-purple-300 opacity-90 shadow-[0_0_60px_rgba(192,132,252,0.5)] z-10" />
      
      {/* Lapisan Aura Luar 1 */}
      <div className="absolute top-20 right-6 md:right-20 w-48 h-48 rounded-full bg-purple-500/20 blur-2xl animate-pulse" />
      
      {/* Lapisan Aura Luar 2 (Super Blur) */}
      <div className="absolute top-12 right-0 md:right-12 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl animate-moon-glow" />

      {/* ✨ Random Sparkles (Bintang-bintang) */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="absolute bg-white rounded-full animate-twinkle shadow-[0_0_5px_white]"
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

      {/* CSS Animasi Khusus (Tambahkan di globals.css jika belum ada) */}
      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes moon-glow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        @keyframes shooting-star {
          0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 0; }
          10% { opacity: 1; }
          20% { transform: translateX(-500px) translateY(500px) rotate(45deg); opacity: 0; }
          100% { transform: translateX(-500px) translateY(500px) rotate(45deg); opacity: 0; }
        }
        .animate-twinkle { animation: twinkle infinite ease-in-out; }
        .animate-moon-glow { animation: moon-glow 8s infinite ease-in-out; }
        .animate-shooting-star { animation: shooting-star 10s infinite linear; }
      `}</style>
    </div>
  );
}
