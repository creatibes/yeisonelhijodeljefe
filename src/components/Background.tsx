"use client";

import { motion } from "framer-motion";

export function Background() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black selection:bg-white/10">
            {/* Base blurred profile image - Less blur for more clarity */}
            <div
                className="absolute -inset-10 bg-[url('/elhijodeljefe.jpeg')] bg-cover bg-center opacity-50 sm:opacity-60 blur-[20px] sm:blur-[30px] pointer-events-none"
                style={{ transform: 'translate3d(0, 0, 0)' }} // Hardware acceleration for blur
            ></div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            {/* Subtle moving lights / gradients */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.35, 0.6, 0.35],
                    x: ["-5%", "10%", "-5%"],
                    y: ["-5%", "15%", "-5%"],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 left-[-10%] w-[80vw] sm:w-[50%] h-[50vh] sm:h-[50%] rounded-full bg-purple-600/30 blur-[130px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: ["5%", "-15%", "5%"],
                    y: ["10%", "-20%", "10%"],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute bottom-[-10%] sm:bottom-0 right-[-20%] sm:right-[-10%] w-[90vw] sm:w-[60%] h-[60vh] sm:h-[60%] rounded-full bg-blue-500/30 blur-[140px]"
            />

            <motion.div
                animate={{
                    scale: [0.8, 1.2, 0.8],
                    opacity: [0.2, 0.5, 0.2],
                    x: ["10%", "-10%", "10%"],
                    y: ["0%", "20%", "0%"],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 3,
                }}
                className="absolute top-[30%] left-[20%] w-[50vw] sm:w-[40%] h-[40vh] sm:h-[40%] rounded-full bg-indigo-500/20 blur-[100px]"
            />

            {/* Gradient Overlay for better contrast - Raised slightly */}
            <div className="absolute inset-x-0 bottom-0 h-[65%] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10"></div>
        </div>
    );
}
