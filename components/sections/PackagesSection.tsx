'use client';

import Link from 'next/link';
import { packages } from '@/constants/packages';
import { useState, useEffect } from 'react';

export default function PackagesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('packages-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="packages-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 text-center mb-4">
          PAQUETES
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto italic">
          Elige el plan que mejor se adapte a tus necesidades emocionales. Calidad profesional a un costo accesible, sin sorpresas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`group rounded-2xl p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                pkg.highlighted
                  ? 'bg-gradient-to-b from-blue-500 to-blue-700 text-white'
                  : 'bg-white border border-gray-200 hover:border-blue-300'
              } ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.15}s both` : 'none',
              }}
            >
              <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? 'text-white' : 'text-blue-900'}`}>
                {pkg.name}
              </h3>
              <div className={`text-9xl font-bold mb-6 ${pkg.highlighted ? 'text-white opacity-30' : 'text-blue-200'}`}>
                {pkg.letter}
              </div>
              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className={`w-6 h-6 mr-3 flex-shrink-0 ${pkg.highlighted ? 'text-white' : 'text-blue-600'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={pkg.highlighted ? 'text-white' : 'text-gray-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={`/reservar?paquete=${pkg.id}`}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 ${
                  pkg.highlighted
                    ? 'bg-blue-800 hover:bg-blue-900 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                RESERVAR {pkg.name}
              </Link>
            </div>
          ))}
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

