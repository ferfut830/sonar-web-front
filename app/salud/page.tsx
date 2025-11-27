'use client';

import { categories } from '@/constants/categories';
import { openWhatsApp, whatsappMessages } from '@/utils/whatsapp';

const category = categories.find((c) => c.id === 'salud')!;

export default function SaludPage() {
  const handleServiceClick = (serviceTitle: string) => {
    openWhatsApp(whatsappMessages.servicio('SONAR SALUD', serviceTitle));
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-800 text-white py-16 rounded-3xl mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)'
          }} />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{category.name}</h1>
          <p className="text-xl md:text-2xl text-teal-100 max-w-3xl mx-auto">
            {category.tagline}
          </p>
          <p className="mt-4 text-teal-200 italic">
            En colaboración con especialistas médicos y odontológicos certificados
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {category.services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleServiceClick(service.title)}
              className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-teal-200 text-left overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-200 group-hover:translate-x-1 transition-all duration-300">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center text-sm text-teal-600 font-semibold">
                  <span>Consultar por WhatsApp</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-10 group-hover:translate-x-full transition-all duration-1000" style={{ transform: 'skewX(-20deg)' }} />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
