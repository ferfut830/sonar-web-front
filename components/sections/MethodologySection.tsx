'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function MethodologySection() {
  // Placeholder para imágenes - reemplazar con imágenes reales
  const teamImages = [
    { src: '/images/profesional-1.jpg', alt: 'Profesional de SONAR', fallback: 1 },
    { src: '/images/profesional-2.jpg', alt: 'Profesional de SONAR', fallback: 2 },
    { src: '/images/profesional-3.jpg', alt: 'Profesional de SONAR', fallback: 3 },
    { src: '/images/profesional-4.jpg', alt: 'Profesional de SONAR', fallback: 4 },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Metodología
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Nuestro equipo de asesores terapéuticos cuenta con amplia experiencia y utiliza metodologías respaldadas científicamente, como el enfoque Cognitivo-Conductual y la Gestalt.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Gracias a esta combinación de herramientas, brindamos un acompañamiento personalizado de alto impacto, con resultados tangibles y duraderos desde el primer encuentro.
            </p>
            <Link
              href="/nosotros"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              MÁS SOBRE NOSOTROS
            </Link>
          </div>

          {/* Images Grid con placeholders mejorados */}
          <div className="grid grid-cols-2 gap-4">
            {teamImages.map((img, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl aspect-square flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-shadow group relative"
              >
                {/* Intentar cargar imagen real, si falla mostrar placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 text-center p-4">
                  <svg
                    className="w-16 h-16 mx-auto text-blue-600 mb-2 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <p className="text-xs text-blue-700 font-medium">Profesional {index + 1}</p>
                  <p className="text-xs text-blue-600 mt-1">Agregar imagen</p>
                </div>
                {/* Nota: Cuando tengas las imágenes reales, descomenta esto y comenta el div de arriba */}
                {/* 
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Si la imagen no existe, mostrar placeholder
                    e.currentTarget.style.display = 'none';
                  }}
                />
                */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
