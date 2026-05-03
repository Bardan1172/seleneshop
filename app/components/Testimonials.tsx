"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  { nama: "AgaaXD", produk: "Skin", username: "AgaaXD2117", rating: 5, komentar: "BAGUS BANGET PLSSS RECOMEND BANGET ORDER DISINIIII" },
  { nama: "Airuma", produk: "Skin", username: "Airuma", rating: 5, komentar: "cocok shadingnya suka" },
  { nama: "Rexxa", produk: "Skin", username: "rexxa1_b", rating: 5, komentar: "beh mantab penyabar klo mau revisi" },
  { nama: "Puding", produk: "Skin", username: "nakosannn", rating: 5, komentar: "yang jualan ramah" },
  { nama: "James", produk: "Skin", username: "IgnJames_", rating: 5, komentar: "keren keren" },
  { nama: "Arion", produk: "Render", username: "HypN123", rating: 5, komentar: "Bagus pake banget, terus cepet juga" },
  { nama: "Izanami", produk: "Skin", username: "IzanamiMizuki2251", rating: 5, komentar: "Keren Skin nya bagus bangett" },
  { nama: "Rein", produk: "Skin", username: "sugarncinnamon", rating: 5, komentar: "bagus sesuai ekspetasi" },
  { nama: "Altra Caeltharion", produk: "Skin", username: "AltraCaeltharion", rating: 5, komentar: "bagus" },
  { nama: "Asengg", produk: "3D Model", username: "OMNIP0TEN", rating: 5, komentar: "Harus cobain sendiri pokoknyaa" },
  { nama: "Vinsen", produk: "Skin", username: "LANYnation", rating: 5, komentar: "nice awesome" },
  { nama: "Jes", produk: "Skin", username: "Tje_", rating: 5, komentar: "sangat keren" },
  { nama: "Victoria", produk: "Face", username: "Viicctoriaa67", rating: 5, komentar: "BAGUS BANGET CAKEP CAKEP" },
  { nama: "Vonsens", produk: "Face", username: "llunnatiic", rating: 5, komentar: "bagus" },
  { nama: "Puding", produk: "Face", username: "Nakosannn", rating: 5, komentar: "BAGUD BANGET IMUP BANGET GWEHH" },
  { nama: "Rein", produk: "Face", username: "sugarncinnamon", rating: 5, komentar: "sangat bagus dan keren" },
  { nama: "Amelisiya", produk: "Skin", username: "Amelisiya", rating: 5, komentar: "naiseee" },
  { nama: "Zell", produk: "Skin", username: "Azellstecu", rating: 5, komentar: "sangat bagus dan cepat" },
  { nama: "Mappoy", produk: "Skin & Render", username: "Mappoy", rating: 5, komentar: "Jujur diluar ekspetasi BAGUS BANGET ANJAY" },
  { nama: "Arkana", produk: "Skin", username: "MegumiFuji", rating: 5, komentar: "baguss bangett untuk skinnya" },
  { nama: "Kalil", produk: "Skin", username: "kalilwkwkwk", rating: 5, komentar: "bagus skin nya" },
  { nama: "Nino", produk: "Skin", username: "Amertaaa", rating: 5, komentar: "gelo skin nya bagus" },
  { nama: "Razor", produk: "Skin", username: "ItzRazorr1212", rating: 5, komentar: "pelayanannya baik" },
  { nama: "Amelisiya", produk: "Skin", username: "Amelisiya", rating: 5, komentar: "cakef bgtf woif anjiranjir" },
  { nama: "Ccendyyy", produk: "Face", username: "Ccendy", rating: 5, komentar: "gilakk baguss bangett woyyy" },
  { nama: "Ray", produk: "Skin", username: "noirveil", rating: 5, komentar: "kereennnn" },
  { nama: "Arkaan & Nafa", produk: "Art", username: "Arkaannanda", rating: 5, komentar: "DABEL U SESUAI EKSPETASI DAWG!!!!" },
  { nama: "Nafa", produk: "Art", username: "grezseishu", rating: 5, komentar: "kereeenennn pasutri baruu jugaa sukaa banggeettt" },
  { nama: "Aseng", produk: "Komis Muka", username: "Asengg", rating: 5, komentar: "PUAS!!! JANGAN RAGU PESEN!!!" },
  { nama: "Swordblaze", produk: "Skin", username: "SwordBlaze876", rating: 5, komentar: "Bagus banget hasil pengerjaan" },
  { nama: "Nasgor", produk: "Face", username: "FriedRiceEgg", rating: 5, komentar: "gacor banget jir gw jadi very happy" },
  { nama: "Nafaryn", produk: "Art", username: "grezseishu", rating: 5, komentar: "NAAAIIICEEEEEEE NAFA VERSII" },
  { nama: "Xander", produk: "Face", username: "XanderIgn_", rating: 5, komentar: "GANTENG BANGETTT WOEE" },
  { nama: "Kairaa", produk: "Face", username: "oxsyrss", rating: 5, komentar: "CAKEEEP BANGET JUJUR ASLI" },
  { nama: "Nasgor", produk: "Skin", username: "friedriceegg", rating: 5, komentar: "KEREN BANGET COK ANJAY" },
  { nama: "Kaira", produk: "Face", username: "oxsyrss", rating: 5, komentar: "CANTIKK BANGETTTTT" },
  { nama: "Qwenty", produk: "Face", username: "ajobajow", rating: 5, komentar: "bagus banget worth it" },
  { nama: "Zea", produk: "Skin", username: "MBUD4699", rating: 5, komentar: "skin nya bagus kali min" },
  { nama: "Ramtodak", produk: "Skin", username: "ramtodak", rating: 5, komentar: "kelas king" },
  { nama: "Nevin", produk: "Skin", username: "NevinSeokk", rating: 5, komentar: "KEREN BANG SKIN NYA" },
  { nama: "Azaell", produk: "Art", username: "Riffaa", rating: 5, komentar: "Lucu amat iniih, gemes" },
  { nama: "Adit", produk: "Skin", username: "Belom bikin", rating: 5, komentar: "Adminnya fast respon" },
  { nama: "Orang ganteng", produk: "Skin", username: "Fqrkyy", rating: 5, komentar: "gacor bgt kang skin" },
  { nama: "Arion", produk: "Face", username: "HypN123", rating: 5, komentar: "melebihi ekspetasi dan cepat" },
  { nama: "Noya", produk: "Skin", username: "Noyaw312", rating: 5, komentar: "Bagusss bangett" },
  { nama: "Jelvin", produk: "Mata", username: "ItzJelviun", rating: 5, komentar: "Cosmeticnya Bagus" },
  { nama: "AzuraDavael", produk: "Skin", username: "AzuraDavael", rating: 5, komentar: "muach love you" },
  { nama: "eL", produk: "Skin", username: "eLooback", rating: 5, komentar: "Matap yaa next req lagi" },
  { nama: "Xiao", produk: "Skin", username: "XiaooZo", rating: 5, komentar: "bagus banget kak" },
  { nama: "Nevin", produk: "Art", username: "NevinSeokk", rating: 5, komentar: "lucuu bangettt imup" },
  { nama: "Lian", produk: "Face", username: "NicoSaver", rating: 5, komentar: "admin cepet bgt jir" },
  { nama: "Ikkan", produk: "Face", username: "Nakosannn", rating: 5, komentar: "imup bbanget makasi" },
  { nama: "Kyo", produk: "Face", username: "RumahMakanJawa", rating: 5, komentar: "bagus banget sumpah" },
  { nama: "Rasyaa", produk: "Face", username: "Rsyaa_", rating: 5, komentar: "Bagus bngt sumpah" },
  { nama: "Ray", produk: "Face", username: "madebyray", rating: 5, komentar: "cepet 100/10" },
  { nama: "Setsuii", produk: "Mata", username: "Setsu_sann", rating: 5, komentar: "proses cepet bet" },
  { nama: "Qwenty", produk: "Mata", username: "b4ckburner", rating: 5, komentar: "makasih alwasy good" },
  { nama: "Asengg", produk: "Face", username: "Asengg", rating: 5, komentar: "Editor sabar bangett" },
  { nama: "Amelisssiyaa", produk: "Skin", username: "Amelisiya", rating: 5, komentar: "bagus skinnya imup" },
  { nama: "Azaelle", produk: "Face", username: "Arvierra", rating: 5, komentar: "ganteng amat kyk gw" },
  { nama: "Vell", produk: "Face", username: "NathaBot", rating: 5, komentar: "baguss bangett" },
  { nama: "Shiizu", produk: "Face", username: "shiizu9", rating: 5, komentar: "baguss bangett" },
  { nama: "Sean", produk: "Face", username: "lixyxx_", rating: 5, komentar: "Proses cepat hasil memuaskan" },
  { nama: "Nafaryn", produk: "Skin", username: "grezseishu", rating: 5, komentar: "KEREENN BANGEETTT" },
  { nama: "Eju", produk: "Face", username: "4ezu", rating: 5, komentar: "bagus bgt" },
  { nama: "Damon", produk: "Face", username: "DamonZei", rating: 5, komentar: "cepet dan memuaskan" },
  { nama: "Amelisiya", produk: "Skin", username: "Amelisiya", rating: 5, komentar: "luvvvv" },
  { nama: "Ella", produk: "Face", username: "SheraAayy", rating: 5, komentar: "BAGUS BANGET order lagi" },
  { nama: "Ellaa", produk: "Skin", username: "brielllaaaa", rating: 5, komentar: "Skinnya lucu bangett" },
  { nama: "Xander", produk: "Face", username: "XanderIgn_", rating: 5, komentar: "ganteng sumpahhh" },
  { nama: "Xiao", produk: "PNGTuber", username: "xiaoozo", rating: 5, komentar: "bagus banget keren" },
];

const ITEMS_PER_PAGE = 6;

export default function TestimonialsSection({ fantasyFont }: { fantasyFont: string }) {
  const [active, setActive] = useState(0);
  const totalPages = Math.ceil(TESTIMONIALS.length / ITEMS_PER_PAGE);
  const currentItems = TESTIMONIALS.slice(active * ITEMS_PER_PAGE, (active + 1) * ITEMS_PER_PAGE);

  const next = () => setActive((prev) => (prev + 1) % totalPages);
  const prev = () => setActive((prev) => (prev - 1 + totalPages) % totalPages);

  return (
    <ScrollReveal>
      <section id="testimoni" className="relative z-10 py-20 md:py-32 px-4 md:px-6 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-purple-400 text-[10px] font-bold tracking-[0.5em] mb-3 block uppercase">REVIEWS</span>
            <h2 className={`${fantasyFont} text-4xl md:text-6xl font-bold text-white uppercase`}>TESTIMONI</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {currentItems.map((testi, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-4 md:p-5 backdrop-blur-xl flex flex-col h-full"
              >
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-white/70 text-xs md:text-sm italic mb-3 line-clamp-2 flex-grow">
                  "{testi.komentar}"
                </p>
                
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1">
                    <span className="text-purple-400 text-xs md:text-sm font-bold">{testi.nama}</span>
                    <span className="text-white/20 text-[8px]">•</span>
                    <span className="text-white/50 text-[8px] md:text-[9px]">{testi.produk}</span>
                  </div>
                  <p className="text-white/40 text-[10px] md:text-xs">@{testi.username}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-white/50 hover:text-purple-400 hover:bg-white/10 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === active ? "w-6 bg-purple-500" : "w-1.5 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full bg-white/[0.05] border border-white/10 text-white/50 hover:text-purple-400 hover:bg-white/10 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className={`${fantasyFont} text-2xl md:text-4xl font-bold text-purple-400`}>70+</h3>
              <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-wider mt-1">Happy Customers</p>
            </div>
            <div className="text-center">
              <h3 className={`${fantasyFont} text-2xl md:text-4xl font-bold text-purple-400`}>5.0</h3>
              <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-wider mt-1">Average Rating</p>
            </div>
            <div className="text-center">
              <h3 className={`${fantasyFont} text-2xl md:text-4xl font-bold text-purple-400`}>120+</h3>
              <p className="text-white/40 text-[8px] md:text-[10px] uppercase tracking-wider mt-1">Projects Done</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}