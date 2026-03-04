"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
    { name: "1Win", src: "/1win.png", width: 80, height: 30 },
    { name: "Bera", src: "/bera.png", width: 70, height: 30, invert: true },
    { name: "Dezuca", src: "/dezuca.jpg", width: 90, height: 30 },
    { name: "Kick", src: "/kick.png", width: 70, height: 30 },
];

const RepeatedList = () => (
    <>
        {[...sponsors, ...sponsors, ...sponsors, ...sponsors, ...sponsors].map((sponsor, index) => (
            <div
                key={index}
                className="relative flex-shrink-0 flex items-center justify-center grayscale opacity-75 brightness-125 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                style={{
                    width: sponsor.width,
                    height: sponsor.height,
                }}
            >
                <Image
                    src={sponsor.src}
                    alt={sponsor.name}
                    fill
                    className={`object-contain ${sponsor.invert ? 'invert' : ''}`}
                />
            </div>
        ))}
    </>
);

export function SponsorsSlider() {
    return (
        <div
            className="w-full max-w-5xl mx-auto overflow-hidden relative mt-2 mb-4"
            // This mask makes it fade to transparent at the edges flawlessly on any background
            style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
        >
            <motion.div
                className="flex w-max items-center"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    ease: "linear",
                    duration: 40, // Smooth, slow elegant speed
                    repeat: Infinity,
                }}
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
