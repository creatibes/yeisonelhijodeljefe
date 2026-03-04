"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Youtube } from "lucide-react";

export function Header() {
    return (
        <header className="flex flex-col items-center justify-center pt-16 pb-8 z-10 space-y-4">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] ring-4 ring-black"
            >
                <Image
                    src="/elhijodeljefe.jpeg"
                    alt="El Hijo Del Jefe"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                className="text-center space-y-1"
            >
                <h1 className="text-2xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
                    @elhijodeljefe
                    <span className="p-1 bg-blue-500 rounded-full inline-block" title="Verified">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </span>
                </h1>
                <p className="text-gray-400 font-medium text-sm">Entretenimiento | Vivo para Cristo ♥️</p>
            </motion.div>

            <div className="flex gap-4 pt-2">
                <SocialIcon href="https://t.me/YeisonDanielSmith1" icon={<Send className="w-6 h-6 rotate-[-15deg] -ml-1 text-white opacity-90 group-hover:opacity-100" />} label="Telegram" delay={0.3} />
                <SocialIcon href="https://www.instagram.com/yeisondanielsmith?igsh=MTA2bXByenl4OWR2Zw%3D%3D&utm_source=qr" iconSrc="/Instagram.png" label="Instagram" delay={0.4} />
                <SocialIcon href="https://www.tiktok.com/@yeisondanielsmith1?_r=1&_t=ZS-94JFSFFihPg" iconSrc="/Tik-Tok.png" label="TikTok" delay={0.5} />
                <SocialIcon href="https://www.youtube.com/@YeisonDanielSmith" icon={<Youtube className="w-6 h-6 text-white opacity-90 group-hover:opacity-100" />} label="YouTube" delay={0.6} />
            </div>
        </header>
    );
}

function SocialIcon({ href, iconSrc, icon, label, delay }: { href: string; iconSrc?: string; icon?: React.ReactNode; label: string; delay: number }) {
    return (
        <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay, type: "spring", stiffness: 200, damping: 15 }}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="w-14 h-14 rounded-full bg-white/5 border border-white/5 hover:bg-white/10 hover:scale-110 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md flex items-center justify-center group shadow-lg"
        >
            {icon ? (
                icon
            ) : iconSrc ? (
                <div className="relative w-8 h-8">
                    <Image
                        src={iconSrc}
                        alt={label}
                        fill
                        className="object-contain brightness-0 invert opacity-90 transition-opacity group-hover:opacity-100"
                    />
                </div>
            ) : null}
        </motion.a>
    );
}
