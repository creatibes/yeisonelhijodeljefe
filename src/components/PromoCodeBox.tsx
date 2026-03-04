"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function PromoCodeBox({ code }: { code: string }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            onClick={handleCopy}
            className="group relative flex items-center justify-between w-full p-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-all duration-300 hover:border-white/20"
        >
            <div className="flex flex-col">
                <span className="text-xs text-gray-400 font-medium mb-0.5 uppercase tracking-wider">
                    {copied ? "¡Código copiado!" : "Código Promocional"}
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    {code}
                </span>
            </div>

            <div className={`p-2.5 rounded-lg flex items-center justify-center transition-all duration-300 ${copied ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-white/10 text-gray-300 border border-transparent group-hover:bg-white/20 group-hover:text-white'}`}>
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </div>

            {copied && (
                <div className="absolute inset-0 rounded-xl bg-green-500/5 pointer-events-none animate-pulse"></div>
            )}
        </div>
    );
}
