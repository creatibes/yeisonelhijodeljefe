"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function FloatingWhatsApp() {
    return (
        <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/numerod whatsapp" // Reemplazar
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] overflow-hidden p-2.5"
            aria-label="Contactar por WhatsApp"
        >
            <div className="relative w-full h-full">
                <Image src="/WhatsApp.png" alt="WhatsApp" fill className="object-contain brightness-0 invert" />
            </div>
        </motion.a>
    );
}
