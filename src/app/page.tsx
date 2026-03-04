"use client";

import { useState } from "react";
import { Background } from "@/components/Background";
import { Header } from "@/components/Header";
import { LinkButton } from "@/components/LinkButton";
import { BaseModal } from "@/components/BaseModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { PromoCodeBox } from "@/components/PromoCodeBox";
import { SponsorsSlider } from "@/components/SponsorsSlider";
import { Rocket, Trophy, Video, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative flex flex-col pb-24">
      <Background />

      {/* Contenedor principal 2 columnas en Desktop */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between px-0 sm:px-4 gap-4 lg:gap-12 relative z-10 lg:pt-8 min-h-screen">

        {/* Columna Izquierda (Perfil y Redes) - Centrada verticalmente al contenedor derecho */}
        <div className="w-full lg:w-[45%] flex-shrink-0 flex items-center justify-center">
          <Header />
        </div>

        {/* Columna Derecha (Enlaces y Promos) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-[55%] flex flex-col gap-4 px-4 mt-0 pb-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-2xl mx-auto mb-2 flex flex-col gap-3"
          >
            <SponsorsSlider />
            <PromoCodeBox code="ELHIJODELJEFE" />

          </motion.div>

          <LinkButton
            href="https://lkpf.pro/f904"
            title="Regístrate Aquí y Obtén Bonos"
            subtitle="Plataforma principal recomendada"
            icon={<Rocket className="w-6 h-6" />}
            featured
            highlightBadge="Código: ELHIJODELJEFE"
            pulse
            delay={0.7}
            rightContent={
              <div className="relative flex flex-col items-center justify-center -my-1 ml-0 sm:ml-2 mr-0 sm:mr-1 px-3 sm:px-5 py-2 sm:py-3 rounded-xl bg-gradient-to-br from-green-600/30 to-emerald-900/40 border border-green-500/20 shadow-[0_0_25px_rgba(52,211,153,0.3)] backdrop-blur-md overflow-hidden group-hover:shadow-[0_0_30px_rgba(52,211,153,0.4)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] animate-[sweep_2s_ease-in-out_infinite]" />
                <div className="absolute inset-0 bg-green-400/10 animate-pulse rounded-xl" />
                <span className="relative text-[9px] sm:text-[11px] font-black text-green-300 uppercase tracking-[0.3em] mb-0.5 opacity-90 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">Bono</span>
                <span className="relative text-lg sm:text-3xl leading-none font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-green-200 to-green-500 drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">+500%</span>
              </div>
            }
          />

          <LinkButton
            href="https://t.me/YeisonDanielSmith1"
            title="Únete a la Comunidad (Telegram)"
            subtitle="Estrategias, señales y sesiones en vivo gratuitas"
            icon={<Trophy className="w-6 h-6" />}
            highlightBadge="🔥 HOT"
            badgeStyle="hot"
            badgePosition="top-right"
            pulse
            subtleAnimatedBg
            delay={0.8}
          />

          <LinkButton
            onClick={() => setIsRegisterModalOpen(true)}
            title="¿Cómo Registrarse Correctamente?"
            subtitle="Tutorial paso a paso en video de 25s."
            icon={<Video className="w-6 h-6" />}
            delay={0.9}
          />

          <LinkButton
            onClick={() => setIsWithdrawModalOpen(true)}
            title="Guía: Cómo Retirar tus Ganancias"
            subtitle="Pasos rápidos para disfrutar tus ingresos"
            icon={<Wallet className="w-6 h-6" />}
            delay={1.0}
          />
        </motion.div>
      </div>

      <FloatingWhatsApp />

      {/* Modals */}
      <BaseModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        title="Tutorial de Registro"
      >
        <div className="aspect-[9/16] max-h-[60vh] sm:max-h-[70vh] w-full max-w-sm mx-auto rounded-xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
          <video
            src="/comoregistrarse.mp4"
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            Tu navegador no soporta el formato de video.
          </video>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 w-full">
          <p className="text-gray-300 text-sm text-center">
            Asegúrate de usar el código para acceder a los bonos exclusivos dentro de la plataforma:
          </p>

          <div className="w-full">
            <PromoCodeBox code="ELHIJODELJEFE" />
          </div>

          <a
            href="https://lkpf.pro/f904"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full relative px-6 py-3 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] flex items-center justify-center gap-2 mt-2 group border border-white/20"
          >
            Ir a la Plataforma
            <Rocket className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </BaseModal>

      <BaseModal
        isOpen={isWithdrawModalOpen}
        onClose={() => setIsWithdrawModalOpen(false)}
        title="Bono Especial +500%"
        maxWidth="max-w-4xl" // Wider modal for the split layout
      >
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-stretch">
          {/* Left side: Promo Image */}
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-white/10 relative h-[400px] md:h-auto min-h-[400px]">
            <img
              src="/ElHijodeljefe (15).jfif.jpeg"
              alt="Bono 500% en primeros depósitos"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Optional dark gradient overlay if needed for text over image, though the image seems to have its own */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent md:hidden"></div>
          </div>

          {/* Right side: Content and Action */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                Multiplica tus primeros depósitos
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Sigue estos pasos para reclamar tu bono de más de 500% y empezar con ventaja.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">1</div>
                <p className="text-sm text-gray-300">Copia el código promocional a continuación.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">2</div>
                <p className="text-sm text-gray-300">Regístrate en la plataforma usando nuestro enlace seguro.</p>
              </div>
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0 font-bold text-sm mt-0.5">3</div>
                <p className="text-sm text-gray-300">¡Pega el código durante el registro y recibe tus bonos en los primeros depósitos!</p>
              </div>
            </div>

            <div className="pt-2 w-full flex flex-col gap-4">
              <PromoCodeBox code="ELHIJODELJEFE" />

              <a
                href="https://lkpf.pro/f904"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full relative px-6 py-3.5 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] flex items-center justify-center gap-2 group border border-white/20"
              >
                Reclamar Bono Ahora
                <Wallet className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </BaseModal>

    </main>
  );
}
