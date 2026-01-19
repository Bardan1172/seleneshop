"use client";

import { useEffect, useState } from "react";

type Sparkle = {
  id: number;
  top: string;
  left: string;
  delay: string;
  duration: string;
};

export default function Moon() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generated: Sparkle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
    setSparkles(generated);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 🌙 Moon */}
      <div className="absolute top-24 right-24 w-40 h-40 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 opacity-80 blur-sm animate-moon" />
      <div className="absolute top-24 right-24 w-56 h-56 rounded-full bg-purple-400/30 blur-3xl animate-pulse" />

      {/* ✨ Random Sparkles */}
      {sparkles.map((s) => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
    </div>
  );
}
