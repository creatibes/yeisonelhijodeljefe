"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Sparkles, X } from "lucide-react";

const withdrawals = [
    {
        id: 1,
        src: "/retiros/retiro-1.jpg",
        amount: "+$350.00 USD",
        label: "Retiro Aceptado · Binance Pay",
        badge: "CÓDIGO: MASPLATA500",
    },
    {
        id: 2,
        src: "/retiros/retiro-2.jpg",
        amount: "+$390.00 USD",
        label: "Retiro Aceptado · Binance Pay",
        badge: "CÓDIGO: MASPLATA500",
    },
    {
        id: 3,
        src: "/retiros/retiro-4.jpg",
        amount: "$542.86 USD",
        label: "Ganancia VIP con Bono Activo",
        badge: "VIP CLUB 1WIN",
    },
    {
        id: 4,
        src: "/retiros/retiro-3.jpg",
        amount: "$495.55 USD",
        label: "Saldo Disponible para Retiro",
        badge: "CÓDIGO: MASPLATA500",
    },
    {
        id: 5,
        src: "/retiros/retiro-5.jpg",
        amount: "$387.12 USD",
        label: "Ganancia Retirada al Instante",
        badge: "VIP LOYALTY",
    },
    {
        id: 6,
        src: "/retiros/retiro-6.jpg",
        amount: "Bs. 827.683,10",
        label: "Pago Recibido en Banco",
        badge: "RETIRO VERIFICADO",
    },
];

export function WithdrawalsSlider() {
    const [active, setActive] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [lightboxItem, setLightboxItem] = useState<(typeof withdrawals)[0] | null>(null);
    const total = withdrawals.length;

    const next = useCallback(() => {
        setActive((prev) => (prev + 1) % total);
    }, [total]);

    const prev = useCallback(() => {
        setActive((prev) => (prev - 1 + total) % total);
    }, [total]);

    useEffect(() => {
        if (isPaused || lightboxItem) return;
        const timer = setInterval(next, 3200);
        return () => clearInterval(timer);
    }, [isPaused, lightboxItem, next]);

    // Signed circular offset in [-total/2, total/2]
    const getOffset = (index: number) => {
        let diff = index - active;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        return diff;
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-2xl mx-auto my-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            {/* Título idéntico al estilo de LOS JUEGOS MÁS JUGADOS DEL MOMENTO */}
            <div className="relative text-center mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] animate-pulse">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Comprobantes Reales · MASPLATA500
                </div>
                <h2 className="text-2xl sm:text-4xl font-black italic uppercase leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 drop-shadow-[0_0_25px_rgba(251,146,60,0.45)]">
                    ¡Con este código están cobrando de verdad!
                </h2>
                <div className="mx-auto mt-2 h-1 w-28 rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500" />
            </div>

            {/* Escenario 3D Coverflow */}
            <div
                className="relative w-full h-[350px] sm:h-[400px] flex items-center justify-center select-none overflow-hidden"
                style={{ perspective: "1200px" }}
            >
                {/* Glow de fondo */}
                <div className="pointer-events-none absolute w-64 h-64 rounded-full bg-gradient-to-tr from-emerald-500/20 via-orange-500/15 to-pink-500/20 blur-3xl" />

                <div
                    className="relative w-full h-full flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {withdrawals.map((item, index) => {
                        const offset = getOffset(index);
                        const abs = Math.abs(offset);
                        if (abs > 2) return null;

                        const isCenter = offset === 0;
                        const translateX = offset * 56; // %
                        const scale = isCenter ? 1 : abs === 1 ? 0.82 : 0.66;
                        const rotateY = offset * -28; // deg
                        const zIndex = 20 - abs * 5;
                        const opacity = isCenter ? 1 : abs === 1 ? 0.65 : 0.25;

                        return (
                            <motion.div
                                key={item.id}
                                initial={false}
                                animate={{
                                    x: `${translateX}%`,
                                    scale,
                                    rotateY,
                                    opacity,
                                    zIndex,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 26,
                                    mass: 0.9,
                                }}
                                drag={isCenter ? "x" : false}
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.2}
                                onDragEnd={(_, info) => {
                                    if (info.offset.x < -35) next();
                                    else if (info.offset.x > 35) prev();
                                }}
                                onClick={() => {
                                    if (isCenter) setLightboxItem(item);
                                    else setActive(index);
                                }}
                                style={{
                                    transformStyle: "preserve-3d",
                                    willChange: "transform, opacity",
                                }}
                                className={`absolute w-[235px] sm:w-[275px] h-[320px] sm:h-[365px] rounded-2xl overflow-hidden cursor-pointer border transition-shadow duration-300 ${
                                    isCenter
                                        ? "border-orange-400/70 shadow-[0_15px_45px_rgba(251,146,60,0.35)]"
                                        : "border-white/15 shadow-[0_10px_25px_rgba(0,0,0,0.7)]"
                                } bg-[#0b0d13] flex flex-col`}
                            >
                                {/* Cabecera de la tarjeta */}
                                <div className="px-3 py-2 bg-gradient-to-r from-black/90 via-zinc-900/90 to-black/90 border-b border-white/10 flex items-center justify-between gap-2">
                                    <span className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] font-black uppercase tracking-wider text-emerald-400">
                                        <CheckCircle2 className="w-3 h-3" /> Verificado
                                    </span>
                                    <span className="px-2 py-0.5 rounded-full bg-orange-500/20 border border-orange-400/40 text-[8px] sm:text-[9px] font-black text-orange-300 tracking-wider">
                                        {item.badge}
                                    </span>
                                </div>

                                {/* Imagen del comprobante */}
                                <div className="relative flex-1 w-full bg-black/90 flex items-center justify-center overflow-hidden p-1.5">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={item.src}
                                        alt={item.label}
                                        loading="lazy"
                                        draggable={false}
                                        className="w-full h-full object-contain rounded-lg select-none"
                                    />
                                </div>

                                {/* Footer con monto retirado */}
                                <div className="px-3.5 py-2.5 bg-gradient-to-t from-black via-zinc-950/95 to-zinc-900/90 border-t border-white/10 flex items-center justify-between gap-2">
                                    <div className="min-w-0">
                                        <div className="text-[10px] text-gray-400 font-semibold truncate">
                                            {item.label}
                                        </div>
                                        <div className="text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-green-400 to-teal-300 leading-tight">
                                            {item.amount}
                                        </div>
                                    </div>
                                    <span className="flex-shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[9px] font-black uppercase">
                                        <Sparkles className="w-2.5 h-2.5" /> Pagado
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Botones laterales */}
                <button
                    type="button"
                    onClick={prev}
                    aria-label="Anterior"
                    className="absolute left-1 sm:left-3 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/75 border border-white/20 text-white hover:bg-orange-500 hover:border-orange-300 transition-all flex items-center justify-center shadow-lg backdrop-blur-md active:scale-95"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                    type="button"
                    onClick={next}
                    aria-label="Siguiente"
                    className="absolute right-1 sm:right-3 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/75 border border-white/20 text-white hover:bg-orange-500 hover:border-orange-300 transition-all flex items-center justify-center shadow-lg backdrop-blur-md active:scale-95"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Indicadores inferiores */}
            <div className="mt-2 flex items-center justify-center gap-2">
                {withdrawals.map((item, idx) => (
                    <button
                        key={item.id}
                        type="button"
                        onClick={() => setActive(idx)}
                        aria-label={`Ver comprobante ${idx + 1}`}
                        className={`h-2 rounded-full transition-all duration-300 ${
                            idx === active
                                ? "w-7 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 shadow-[0_0_10px_rgba(251,146,60,0.7)]"
                                : "w-2 bg-white/25 hover:bg-white/50"
                        }`}
                    />
                ))}
            </div>

            {/* Vista ampliada al tocar la tarjeta central */}
            <AnimatePresence>
                {lightboxItem && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxItem(null)}
                        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative max-w-md w-full rounded-2xl overflow-hidden border border-orange-400/50 bg-zinc-950 shadow-2xl"
                        >
                            <button
                                type="button"
                                onClick={() => setLightboxItem(null)}
                                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <div className="max-h-[75vh] w-full bg-black flex items-center justify-center p-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={lightboxItem.src}
                                    alt={lightboxItem.label}
                                    className="max-h-[72vh] w-auto object-contain rounded-lg"
                                />
                            </div>
                            <div className="p-4 flex items-center justify-between border-t border-white/10">
                                <div>
                                    <div className="text-xs text-gray-400">{lightboxItem.label}</div>
                                    <div className="text-xl font-black text-emerald-400">{lightboxItem.amount}</div>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-orange-500/20 border border-orange-400/40 text-xs font-black text-orange-300">
                                    {lightboxItem.badge}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}
