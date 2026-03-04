import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "El Hijo Del Jefe | Link in Bio",
  description: "Todas mis redes y estrategias en un solo lugar. Únete a mi canal de Telegram y descubre cómo generar ingresos.",
  openGraph: {
    title: "El Hijo Del Jefe | Link in Bio",
    description: "Todas mis redes y estrategias en un solo lugar.",
    url: "https://elhijodeljefe.com",
    siteName: "El Hijo Del Jefe",
    images: [
      {
        url: "/elhijodeljefe.jpeg", // Must be placed in public/
        width: 800,
        height: 800,
        alt: "El Hijo Del Jefe Profile",
      },
    ],
    locale: "es_ES",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Yeison",
      "alternateName": "El Hijo del Jefe",
      "identifier": "elhijodeljefe",
      "url": "https://elhijodeljefe.com",
      "image": "https://elhijodeljefe.com/elhijodeljefe.jpeg",
      "sameAs": [
        "https://t.me/TuCanalTelegram", // Update these links later
        "https://tiktok.com/@elhijodeljefe",
        "https://youtube.com/@elhijodeljefe"
      ]
    }
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
