export default function Moon() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Moon */}
      <div className="absolute top-24 right-24 w-40 h-40 rounded-full bg-gradient-to-br from-purple-200 to-purple-400 opacity-80 blur-sm animate-moon" />

      {/* Glow */}
      <div className="absolute top-24 right-24 w-52 h-52 rounded-full bg-purple-400/30 blur-3xl animate-pulse" />

      {/* Sparkles */}
      <span className="sparkle top-1/3 left-1/4" />
      <span className="sparkle top-1/2 left-1/3" />
      <span className="sparkle top-2/3 left-2/3" />
      <span className="sparkle top-1/4 left-3/4" />
      <span className="sparkle top-3/4 left-1/5" />
    </div>
  );
}
