'use client';

import Link from 'next/link';
import { categories } from '@/constants/categories';
import { useState, useEffect } from 'react';

// Animaciones SVG más complejas y elegantes
const CategoryAnimations = {
  psicologia: ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="3" fill="none" className="animate-pulse" />
        <path
          d="M40 100 Q50 70 60 100 T80 100"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: '0s' }}
        />
        <path
          d="M60 100 Q70 60 80 100 T100 100"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: '0.2s' }}
        />
        <path
          d="M80 100 Q90 50 100 100 T120 100"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: '0.4s' }}
        />
        <path
          d="M100 100 Q110 50 120 100 T140 100"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: '0.6s' }}
        />
        <path
          d="M120 100 Q130 60 140 100 T160 100"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: '0.8s' }}
        />
        <circle cx="70" cy="60" r="3" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0s', animationDuration: '2s' }} />
        <circle cx="130" cy="60" r="3" fill="currentColor" className="animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '2s' }} />
        <circle cx="90" cy="140" r="3" fill="currentColor" className="animate-bounce" style={{ animationDelay: '1s', animationDuration: '2s' }} />
        <circle cx="110" cy="140" r="3" fill="currentColor" className="animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '2s' }} />
      </svg>
    </div>
  ),
  'arte-canto': ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M60 40 Q70 30 80 40 Q90 50 80 60 Q70 70 60 60 Q50 50 60 40"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          className="group-hover:scale-110 transition-transform duration-300"
        />
        <g className="animate-bounce" style={{ animationDuration: '1.5s' }}>
          <circle cx="120" cy="80" r="8" fill="currentColor" />
          <line x1="120" y1="88" x2="120" y2="120" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </g>
        <g className="animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }}>
          <circle cx="140" cy="100" r="8" fill="currentColor" />
          <line x1="140" y1="108" x2="140" y2="140" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </g>
        <path
          d="M40 160 Q60 140 80 160 T120 160"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <path
          d="M50 170 Q65 155 80 170 T110 170"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </svg>
    </div>
  ),
  salud: ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M100 80 C90 60, 60 60, 60 90 C60 110, 100 150, 100 150 C100 150, 140 110, 140 90 C140 60, 110 60, 100 80 Z"
          fill="currentColor"
          className="animate-pulse"
        />
        <circle cx="80" cy="50" r="4" fill="currentColor" className="animate-bounce" style={{ animationDuration: '2s' }} />
        <circle cx="120" cy="50" r="4" fill="currentColor" className="animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
        <circle cx="70" cy="120" r="3" fill="currentColor" className="animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.6s' }} />
        <circle cx="130" cy="120" r="3" fill="currentColor" className="animate-bounce" style={{ animationDuration: '2s', animationDelay: '0.9s' }} />
        <line x1="50" y1="100" x2="60" y2="100" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
        <line x1="140" y1="100" x2="150" y2="100" stroke="currentColor" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      </svg>
    </div>
  ),
  lab: ({ className }: { className?: string }) => (
    <div className={`relative ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="80" y="60" width="40" height="80" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M70 60 L90 40 L110 40 L130 60" stroke="currentColor" strokeWidth="3" fill="none" />
        <rect x="85" y="100" width="30" height="35" rx="2" fill="currentColor" className="animate-pulse" style={{ opacity: 0.6 }} />
        <circle cx="100" cy="50" r="2" fill="currentColor" className="animate-bounce" style={{ animationDuration: '1.5s' }} />
        <circle cx="90" cy="45" r="2" fill="currentColor" className="animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0.3s' }} />
        <circle cx="110" cy="45" r="2" fill="currentColor" className="animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0.6s' }} />
        <path
          d="M40 160 Q50 150 60 160 T80 160"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
        />
        <path
          d="M120 160 Q130 150 140 160 T160 160"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </svg>
    </div>
  ),
};

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-600 to-blue-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const AnimationComponent = CategoryAnimations[category.id as keyof typeof CategoryAnimations];
            
            return (
              <Link
                key={category.id}
                href={`/${category.id}`}
                className={`group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none',
                }}
              >
                {/* Gradient Header con Animación */}
                <div className={`relative h-40 bg-gradient-to-br ${category.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="w-32 h-32 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
                      {AnimationComponent && <AnimationComponent className="w-full h-full" />}
                    </div>
                  </div>
                  {/* Overlay animado */}
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                  {/* Efecto de brillo al hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:translate-x-full transition-all duration-1000" style={{ transform: 'skewX(-20deg)' }} />
                </div>

                {/* Content Compacto */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-800 mb-1.5 group-hover:text-blue-600 transition-colors line-clamp-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-snug">{category.tagline}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-600 font-semibold group-hover:text-blue-700">
                      Ver servicios →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
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
