import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://sonar.com'),
  title: {
    default: "SONAR - Tu Bienestar en Sintonía | Musicoterapia y Psicología",
    template: "%s | SONAR"
  },
  description: "Cuidamos tu salud emocional a través de la escucha y la música. Servicios de psicología, arte, canto y salud. Terapia individual, de pareja y familiar. Primera sesión gratis.",
  keywords: [
    "musicoterapia",
    "psicología",
    "terapia psicológica",
    "canto terapia",
    "salud emocional",
    "terapia de pareja",
    "terapia familiar",
    "ansiedad",
    "neurorehabilitación",
    "SONAR",
    "bienestar emocional",
    "terapia online",
    "terapia presencial",
    "psicólogo",
    "musicoterapeuta"
  ],
  authors: [{ name: "SONAR" }],
  creator: "SONAR",
  publisher: "SONAR",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "/",
    siteName: "SONAR - Tu Bienestar en Sintonía",
    title: "SONAR - Tu Bienestar en Sintonía | Musicoterapia y Psicología",
    description: "Cuidamos tu salud emocional a través de la escucha y la música. Servicios de psicología, arte, canto y salud.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SONAR - Tu Bienestar en Sintonía",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SONAR - Tu Bienestar en Sintonía",
    description: "Cuidamos tu salud emocional a través de la escucha y la música.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "tu-codigo-de-verificacion-google",
    // yandex: "tu-codigo-de-verificacion-yandex",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://sonar.com'} />
      </head>
      <body className={`${inter.variable} antialiased font-sans`}>
        <StructuredData />
        <Header />
        <main className="min-h-screen" id="main-content">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
