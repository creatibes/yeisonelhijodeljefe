"use client";

import { useEffect, useState } from "react";

/** Monta el contenido solo cuando coincide el breakpoint (evita descargar el video dos veces). */
export function useIsDesktop() {
    const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
    useEffect(() => {
        const mq = window.matchMedia("(min-width: 1024px)");
        const update = () => setIsDesktop(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);
    return isDesktop;
}

export function PromoVideo({
    src,
    label,
    className = "",
    maxHeight = "max-h-[70vh]",
}: {
    src: string;
    label?: string;
    className?: string;
    maxHeight?: string;
}) {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <div className="mb-2 flex items-center justify-center gap-2 text-[11px] sm:text-xs font-black uppercase tracking-[0.25em] text-gray-300">
                    <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    {label}
                </div>
            )}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black shadow-[0_0_35px_rgba(147,51,234,0.25)] flex items-center justify-center">
                <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    className={`w-full h-auto ${maxHeight} object-contain bg-black`}
                >
                    Tu navegador no soporta el formato de video.
                </video>
            </div>
        </div>
    );
}
