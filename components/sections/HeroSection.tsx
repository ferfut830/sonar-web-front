'use client';

import { openWhatsApp, whatsappMessages } from '@/utils/whatsapp';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Empieza Hoy, Primera Sesión Gratis
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Un centro integral donde la música se une con la salud física y emocional para crear una experiencia de bienestar real.
        </p>
        <button
          onClick={() => openWhatsApp(whatsappMessages.pruebaGratis)}
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          EMPEZAR AHORA!
        </button>
      </div>
    </section>
  );
}
