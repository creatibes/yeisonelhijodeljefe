"use client";

import { motion } from "framer-motion";
import { Flame, ExternalLink } from "lucide-react";

const games = [
    { title: "Lucky Jet", src: "/juegos/lucky-jet.jpg", href: "https://lkmv.cc/f8b6380b", tag: "🔥 TOP 1" },
    { title: "Tower Rush", src: "/juegos/tower-rush.jpg", href: "https://lkuf.cc/8a74ce74", tag: "🚀 TENDENCIA" },
    { title: "Chicken Subway", src: "/juegos/chicken-subway.jpg", href: "https://lksi.pro/f34aaa", tag: "⚡ NUEVO" },
    { title: "Bono 2000 USDT", src: "/juegos/bono-2000-usdt.jpg", href: "https://lkde.cc/7e1b", tag: "💰 BONO" },
];

export function TopGames() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-2xl mx-auto"
        >
            {/* Título llamativo */}
            <div className="relative text-center mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] animate-pulse">
                    <Flame className="w-3.5 h-3.5" /> En vivo ahora
                </div>
                <h2 className="text-2xl sm:text-4xl font-black italic uppercase leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 drop-shadow-[0_0_25px_rgba(251,146,60,0.45)]">
                    Los juegos más jugados del momento
                </h2>
                <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500" />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {games.map((game, i) => (
                    <motion.a
                        key={game.href}
                        href={game.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        suppressHydrationWarning
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.75 + i * 0.08 }}
                        className="group relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:border-orange-400/60 hover:shadow-[0_0_30px_rgba(251,146,60,0.35)] hover:-translate-y-1 transition-all duration-300"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={game.src}
                            alt={game.title}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 border border-white/15 text-[9px] sm:text-[10px] font-black text-white tracking-wider backdrop-blur-sm">
                            {game.tag}
                        </span>
                        <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-3 flex items-center justify-between gap-2">
                            <span className="text-white font-black text-xs sm:text-base uppercase truncate drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                                {game.title}
                            </span>
                            <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-r from-orange-500 to-pink-600 text-white text-[9px] sm:text-[11px] font-black uppercase">
                                Jugar <ExternalLink className="w-3 h-3" />
                            </span>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.section>
    );
}
