export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-lg font-semibold text-purple-200">
          Selene Shop 🌙
        </div>

        <div className="flex gap-6 text-sm text-purple-100">
          <a href="#beranda" className="hover:text-purple-300 transition">
            Beranda
          </a>
          <a href="#produk" className="hover:text-purple-300 transition">
            Produk
          </a>
          <a href="#order" className="hover:text-purple-300 transition">
            Order
          </a>
        </div>

      </div>
    </nav>
  );
}
