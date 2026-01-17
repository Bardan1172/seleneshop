export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfbf7]">
      {/* Bagian Cara Order - Mirip Layout BangBlaze */}
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#b89a5e] mb-2 uppercase tracking-widest">
          Cara Order Mudah
        </h2>
        <div className="h-1 w-24 bg-[#b89a5e] mx-auto mb-6"></div>
        <p className="text-gray-600 mb-12">Hanya 3 langkah sederhana untuk mendapatkan produk kreatifmu</p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Kotak 1 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#b89a5e] shadow-sm transition-all duration-300">
            <div className="bg-[#b89a5e] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
            <h3 className="text-xl font-bold mb-4">Pilih Produk</h3>
            <p className="text-gray-500 leading-relaxed">Pilih layanan Minecraft atau Art yang diinginkan. Siapkan referensi jika ada custom request.</p>
          </div>

          {/* Kotak 2 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#b89a5e] shadow-sm transition-all duration-300">
            <div className="bg-[#b89a5e] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
            <h3 className="text-xl font-bold mb-4">Bayar & Konfirmasi</h3>
            <p className="text-gray-500 leading-relaxed">Lakukan pembayaran via E-Wallet (DANA/OVO). Kirim bukti transfer untuk diproses sesuai antrean.</p>
          </div>

          {/* Kotak 3 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-[#b89a5e] shadow-sm transition-all duration-300">
            <div className="bg-[#b89a5e] text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
            <h3 className="text-xl font-bold mb-4">Terima Produk</h3>
            <p className="text-gray-500 leading-relaxed">Produk akan dikirim melalui Discord atau WhatsApp dengan detail yang rapi dan estetik.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
