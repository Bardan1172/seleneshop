"use client";

import { useEffect, useRef } from "react";

export default function MoonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let w: number, h: number;
    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const meteors: { x: number; y: number; len: number; speed: number; opacity: number }[] = [];

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      
      // Init Bintang (Hanya data, bukan DOM elemen)
      stars.length = 0;
      for (let i = 0; i < 200; i++) { // Kurangi jadi 200 agar tetap cantik tapi ringan
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.5,
          speed: Math.random() * 0.05,
          opacity: Math.random()
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      
      // Draw Stars
      ctx.fillStyle = "white";
      stars.forEach(s => {
        ctx.globalAlpha = Math.abs(Math.sin(Date.now() * 0.001 + s.x)); // Twinkle effect
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw Meteors
      if (Math.random() > 0.98 && meteors.length < 3) {
        meteors.push({
          x: Math.random() * w,
          y: Math.random() * h * 0.5,
          len: Math.random() * 100 + 50,
          speed: Math.random() * 10 + 5,
          opacity: 1
        });
      }

      meteors.forEach((m, i) => {
        ctx.strokeStyle = `rgba(255, 255, 255, ${m.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x - m.len, m.y + m.len);
        ctx.stroke();
        
        m.x -= m.speed;
        m.y += m.speed;
        m.opacity -= 0.01;
        if (m.opacity <= 0) meteors.splice(i, 1);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", init);
    init();
    draw();

    return () => {
      window.removeEventListener("resize", init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#02010a]">
      {/* 1. Nebula (Statis, tanpa animasi agar enteng) */}
      <div className="absolute inset-0 opacity-40">
        <div 
          className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] blur-[120px]"
          style={{
            background: `radial-gradient(circle at 50% 30%, rgba(162, 28, 175, 0.15) 0%, rgba(76, 29, 149, 0.1) 50%, transparent 80%)`
          }}
        />
      </div>

      {/* 2. Canvas Layer (Bintang & Meteor) */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* 3. Premium Moon (Gunakan CSS murni tanpa wave animation yang berat) */}
      <div className="absolute top-20 right-[10%] opacity-80 scale-75 md:scale-100">
        <div className="relative w-32 h-32 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-[#FFFDF5] to-[#E6D296] shadow-[0_0_60px_rgba(255,249,229,0.2),inset_-10px_-10px_20px_rgba(0,0,0,0.1)] border border-white/10">
           {/* Tekstur Kawah Statis */}
           <div className="absolute top-[20%] left-[25%] w-8 h-3 bg-black/5 rounded-full rotate-[-15deg]" />
           <div className="absolute bottom-[30%] right-[30%] w-6 h-6 bg-black/5 rounded-full" />
        </div>
      </div>
    </div>
  );
}
