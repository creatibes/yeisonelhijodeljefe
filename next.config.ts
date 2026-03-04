import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Cachear imágenes y videos (imágenes de perfil, íconos sociales, video tutorial)
        source: "/(.*)\\.(png|jpg|jpeg|gif|svg|mp4|webp|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Cachear la fuente seleccionada y estilos estáticos si hay
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
