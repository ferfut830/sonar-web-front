'use client';

import Image from 'next/image';

export default function PsicologosPage() {
  const advisors = [
    {
      id: '1',
      name: 'Dr. Juan Pérez',
      role: 'Psicólogo Clínico',
      bio: 'Especialista en terapia cognitivo-conductual con más de 10 años de experiencia.',
      image: '/images/psicologo-1.jpg',
    },
    {
      id: '2',
      name: 'Dra. María González',
      role: 'Musicoterapeuta',
      bio: 'Experta en integración de música y terapia emocional.',
      image: '/images/psicologo-2.jpg',
    },
    {
      id: '3',
      name: 'Lic. Carlos Ramírez',
      role: 'Terapeuta de Parejas',
      bio: 'Especializado en terapia de parejas y familia con enfoque gestáltico.',
      image: '/images/psicologo-3.jpg',
    },
    {
      id: '4',
      name: 'Dra. Ana Martínez',
      role: 'Psicóloga Infantil',
      bio: 'Experta en atención psicológica para niños y adolescentes.',
      image: '/images/psicologo-4.jpg',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 text-center mb-4">
          Nuestros Psicólogos
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Conoce a nuestro equipo de profesionales comprometidos con tu bienestar emocional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advisors.map((advisor) => (
            <div
              key={advisor.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
            >
              {/* Imagen con placeholder mejorado */}
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden relative group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300" />
                <svg
                  className="w-16 h-16 text-blue-600 relative z-10 opacity-70"
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
                {/* Nota: Cuando tengas las imágenes reales, descomenta esto y comenta el div de arriba */}
                {/* 
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                */}
              </div>
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2 group-hover:text-blue-600 transition-colors">
                {advisor.name}
              </h3>
              <p className="text-blue-600 text-center mb-4 font-medium">{advisor.role}</p>
              <p className="text-gray-600 text-sm text-center leading-relaxed">{advisor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
