'use client';

import { useState, useEffect } from 'react';
import { openWhatsApp, whatsappMessages } from '@/utils/whatsapp';

export default function SessionTypesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Subtle wave separator */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="url(#gradient)"
            className="opacity-30"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Presencial */}
          <button
            onClick={() => openWhatsApp(whatsappMessages.sesionPresencial)}
            className={`group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.1s both' : 'none',
            }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">
              Presencial
            </h3>
            <p className="text-gray-600 mb-6">Sede Surco y Miraflores</p>
            <div className="mb-6 relative">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-20 h-20 text-blue-600 group-hover:text-blue-700 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
            </div>
            <div className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              RESERVAR SESIÓN
            </div>
          </button>

          {/* Virtual */}
          <button
            onClick={() => openWhatsApp(whatsappMessages.sesionVirtual)}
            className={`group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-left ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              animation: isVisible ? 'fadeInUp 0.6s ease-out 0.2s both' : 'none',
            }}
          >
            <h3 className="text-3xl font-bold text-blue-900 mb-4 group-hover:text-blue-600 transition-colors">
              Virtual
            </h3>
            <p className="text-gray-600 mb-6">Primera Sesión de Prueba Gratis</p>
            <div className="mb-6 relative">
              <div className="w-40 h-40 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-20 h-20 text-teal-600 group-hover:text-teal-700 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
            <div className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              RESERVAR SESIÓN
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
