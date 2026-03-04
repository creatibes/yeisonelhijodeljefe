"use client";

import { motion } from "framer-motion";
import { ExternalLink, PlayCircle } from "lucide-react";
import React from "react";

interface LinkButtonProps {
    href?: string;
    onClick?: () => void;
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    featured?: boolean;
    highlightBadge?: string;
    badgeStyle?: 'promo' | 'hot';
    badgePosition?: 'inline' | 'top-right';
    pulse?: boolean;
    delay?: number;
    rightContent?: React.ReactNode;
    subtleAnimatedBg?: boolean;
}

export function LinkButton({
    href,
    onClick,
    title,
    subtitle,
    icon,
    featured,
    highlightBadge,
    badgeStyle = 'promo',
    badgePosition = 'inline',
    pulse,
    delay = 0,
    rightContent,
    subtleAnimatedBg,
}: LinkButtonProps) {
    const content = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`group relative flex items-center w-full max-w-2xl mx-auto p-4 rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer
        ${featured ? "glass-hover animate-sweep-border" : "glass hover:bg-white/5 animate-border-glow"}
      `}
            onClick={onClick}
        >
            {/* Background glow and Sweep effect for featured */}
            {featured && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-50 z-0"></div>
                    <div className="absolute top-0 bottom-0 w-[150px] bg-gradient-to-r from-transparent via-white/40 to-transparent z-0 skew-x-[-20deg] animate-sweep pointer-events-none"></div>
                </>
            )}

            {/* Subtle animated background for secondary emphasis */}
            {subtleAnimatedBg && !featured && (
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-2xl">
                    <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${badgeStyle === 'hot' ? 'from-red-500/10 via-orange-500/5 to-transparent' : 'from-blue-500/10 via-purple-500/5 to-transparent'}`}
                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </div>
            )}

            {/* Top-Right Corner Badge */}
            {highlightBadge && badgePosition === 'top-right' && (
                <div className="absolute top-0 right-0 z-20">
                    <div className="relative">
                        {pulse && (
                            <span className={`absolute inset-0 blur-sm animate-pulse rounded-tr-2xl rounded-bl-xl ${badgeStyle === 'hot' ? 'bg-orange-500/60' : 'bg-blue-500/60'}`}></span>
                        )}
                        <span className={`relative flex items-center justify-center px-3 py-1 text-[10px] sm:text-xs font-bold text-white shadow-lg whitespace-nowrap rounded-tr-2xl rounded-bl-xl ${badgeStyle === 'hot' ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
                            {highlightBadge}
                        </span>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 flex items-center justify-between w-full">
                <div className="flex flex-row items-center gap-3 sm:gap-4 w-full">
                    <div className={`p-3 rounded-xl flex-shrink-0 flex items-center justify-center ${featured ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white' : 'bg-white/10 text-gray-200'}`}>
                        {icon || <ExternalLink className="w-5 h-5" />}
                    </div>

                    <div className="flex flex-col w-full text-left py-1 pr-2">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-1 lg:gap-4">
                            <div className="flex flex-col">
                                <span className="font-semibold text-gray-100 text-[15px] sm:text-base leading-tight">{title}</span>
                                {subtitle && <span className="text-xs sm:text-sm text-gray-400 font-medium mt-0.5">{subtitle}</span>}
                            </div>

                            {highlightBadge && badgePosition === 'inline' && (
                                <div className="flex flex-shrink-0 relative self-start lg:self-center mt-1 sm:mt-0">
                                    {pulse && (
                                        <span className={`absolute -inset-1 rounded-full blur-sm animate-pulse ${badgeStyle === 'hot' ? 'bg-orange-500/50' : 'bg-blue-500/50'}`}></span>
                                    )}
                                    <span className={`relative px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-bold text-white rounded-full shadow-lg whitespace-nowrap ${badgeStyle === 'hot' ? 'bg-gradient-to-r from-red-500 to-orange-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
                                        {highlightBadge}
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {rightContent ? (
                    <div className="flex-shrink-0 ml-1 sm:ml-2 flex items-center justify-center">
                        {rightContent}
                    </div>
                ) : (
                    <div className="ml-2 flex-shrink-0 text-white/30 hidden sm:flex items-center justify-center">
                        {onClick ? <PlayCircle className="w-5 h-5" /> : <ExternalLink className="w-5 h-5" />}
                    </div>
                )}
            </div>
        </motion.div>
    );

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full">
                {content}
            </a>
        );
    }

    return <button className="w-full text-left focus:outline-none">{content}</button>;
}
