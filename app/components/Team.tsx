"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ScrollReveal";
import { MessageCircle } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Altra",
    role: "OWNER",
    desc: "Selene Management",
    discord: "altra",
    avatar: "altra",
  },
  {
    name: "Gabbie",
    role: "OWNER & WORKER",
    desc: "Art & Face",
    discord: "gabbie",
    avatar: "gabbie",
  },
  {
    name: "Ael",
    role: "CO-OWNER & WORKER",
    desc: "Minecraft Skin",
    discord: "ael",
    avatar: "ael",
  },
{
    name: "Kuboo",
    role: "CO-OWNER & STAFF",
    desc: "Worker Assistant",
    discord: "kuboo",
    avatar: "kubo",
  },
  {
    name: "Kinaki",
    role: "STAFF & WORKER",
    desc: "Minecraft 3D Model",
    discord: "kinaki",
    avatar: "kinaki",
  },
  {
    name: "Chilo",
    role: "MODERATOR",
    desc: "Ticket Support",
    discord: "chilo",
    avatar: "chilo",
  },
  {
    name: "Lopi",
    role: "STAFF & WORKER",
    desc: "Art Chibi & Custom Sticker",
    discord: "lopi",
    avatar: "lopi",
  },
  {
    name: "Alen",
    role: "STAFF & WORKER",
    desc: "Custom Sticker",
    discord: "alen",
    avatar: "alen",
  },
  {
    name: "Amyy",
    role: "STAFF & WORKER",
    desc: "Art Semi Realistis",
    discord: "amy_",
    avatar: "emyy",
  },
  {
    name: "Delicia",
    role: "STAFF & WORKER",
    desc: "Minecraft Skin",
    discord: "delicia",
    avatar: "delicia",
  },
  {
    name: "Nyx",
    role: "ADMIN & WORKER",
    desc: "MC Render & Minecraft Skin",
    discord: "nyx",
    avatar: "nyx",
  },
  {
    name: "Fumiya",
    role: "STAFF & WORKER",
    desc: "Minecraft Render",
    discord: "fumiya",
    avatar: "fumiya",
  },
];

export default function TeamSection({ fantasyFont }: { fantasyFont: string }) {
  const row1 = TEAM_MEMBERS.slice(0, 4);
  const row2 = TEAM_MEMBERS.slice(4, 8);
  const row3 = TEAM_MEMBERS.slice(8, 12);
  
  const renderRow = (members: typeof TEAM_MEMBERS, startIdx: number) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-4">
      {members.map((member, idx) => (
        <motion.div
          key={idx + startIdx}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: (idx + startIdx) * 0.1 }}
          className="group relative bg-white/[0.02] border border-white/10 rounded-3xl p-3 md:p-5 backdrop-blur-xl hover:bg-white/[0.05] hover:border-purple-500/30 transition-all"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-600/10 border border-white/20 flex items-center justify-center mb-2 md:mb-3 group-hover:scale-110 transition-transform overflow-hidden">
              <img src={`/avatar/${member.avatar}.png`} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h3 className={`${fantasyFont} text-xs md:text-sm font-bold text-white mb-1`}>
              {member.name}
            </h3>
            <p className="text-purple-400 text-[6px] md:text-[9px] font-black tracking-wider mb-1">
              {member.role}
            </p>
            <p className="text-white/40 text-[6px] md:text-[8px] mb-1">
              {member.desc}
            </p>
            <a
              href="https://discord.gg/muH44HDrea"
              target="_blank"
              className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-white/5 rounded-full text-[6px] md:text-[8px] text-white/60 hover:bg-purple-600 hover:text-white transition-all"
            >
              <MessageCircle className="w-2 h-2 md:w-3 md:h-3" />
              {member.discord}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
  
  return (
    <ScrollReveal>
      <section className="relative z-10 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {renderRow(row1, 0)}
          {renderRow(row2, 4)}
          {renderRow(row3, 8)}

          <div className="mt-12 text-center">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://discord.gg/muH44HDrea"
              target="_blank"
              className="inline-block px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              JOIN TIM KAMI
            </motion.a>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}