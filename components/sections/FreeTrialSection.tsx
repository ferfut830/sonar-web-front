'use client';

import { openWhatsApp, whatsappMessages } from '@/utils/whatsapp';
import Image from 'next/image';

export default function FreeTrialSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Explora Nuestro Servicio Con Una Prueba Gratis
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Sabemos que dar el primer paso no siempre es fácil. Por eso, queremos acompañarte desde el inicio con una sesión gratuita de 60 minutos. Un espacio seguro para que te escuches, respires y descubras si este camino puede ser el comienzo del cambio que estás buscando.
            </p>
            <button
              onClick={() => openWhatsApp(whatsappMessages.pruebaGratis)}
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              ¡QUIERO MI PRUEBA GRATIS!
            </button>
          </div>

          {/* Illustration con imagen placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 h-96 flex items-center justify-center overflow-hidden relative">
              {/* Imagen placeholder - reemplazar con imagen real */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20" />
              <div className="text-center relative z-10">
                <svg
                  className="w-32 h-32 mx-auto text-blue-600 mb-4 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
                <p className="text-blue-800 font-semibold text-lg">Sesión de 60 minutos</p>
                <p className="text-blue-700 text-sm mt-2">Imagen: Profesional atendiendo paciente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
