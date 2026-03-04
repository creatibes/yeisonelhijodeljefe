"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Secuencia requerida: Logo 1Win, Texto Bono, Logo 1Win, Texto Bono...
const items = [
    { type: 'logo', src: '/1win.png', width: 90, height: 35 },
    { type: 'text', text: 'BONO +500%' },
    { type: 'logo', src: '/1win.png', width: 90, height: 35 },
    { type: 'text', text: 'BONO +500%' },
    { type: 'logo', src: '/1win.png', width: 90, height: 35 },
    { type: 'text', text: 'BONO +500%' },
];

const RepeatedList = () => (
    <>
        {items.map((item, index) => (
            <div
                key={index}
                className="relative flex-shrink-0 flex items-center justify-center transition-all duration-500"
            >
                {item.type === 'logo' ? (
                    <div
                        className="relative opacity-80 hover:opacity-100 transition-opacity"
                        style={{ width: item.width, height: item.height }}
                    >
                        <Image
                            src={item.src as string}
                            alt="1Win"
                            fill
                            className="object-contain"
                        />
                    </div>
                ) : (
                    <span className="text-2xl sm:text-3xl font-black italic tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-blue-400 drop-shadow-[0_2px_10px_rgba(59,130,246,0.8)] px-4">
                        {item.text}
                    </span>
                )}
            </div>
        ))}
    </>
);

export function SponsorsSlider() {
    return (
        <div
            className="w-full max-w-5xl mx-auto overflow-hidden relative mt-2 mb-4"
            style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
        >
            <motion.div
                className="flex w-max items-center transform-gpu"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    ease: "linear",
                    duration: 15, // Aumentada la velocidad para un flujo más suave
                    repeat: Infinity,
                }}
                style={{ willChange: 'transform' }}
            >
                {/* Block 1 */}
                <div className="flex items-center justify-center gap-12 sm:gap-20 px-6 sm:px-10">
                    <RepeatedList />
                </div>
                {/* Block 2 (identical to Block 1 so it seamlessly loops when it reaches -50%) */}
                <div className="flex items-center justify-center gap-12 sm:gap-20 px-6 sm:px-10">
                    <RepeatedList />
                </div>
            </motion.div>
        </div>
    );
}
