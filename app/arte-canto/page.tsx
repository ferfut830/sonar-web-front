'use client';

import { categories } from '@/constants/categories';
import { openWhatsApp, whatsappMessages } from '@/utils/whatsapp';

const category = categories.find((c) => c.id === 'arte-canto')!;

export default function ArteCantoPage() {
  const handleServiceClick = (serviceTitle: string) => {
    openWhatsApp(whatsappMessages.servicio('SONAR ARTE Y CANTO', serviceTitle));
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-500 via-purple-600 to-purple-800 text-white py-16 rounded-3xl mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, white 0%, transparent 50%)'
          }} />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{category.name}</h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto">
            {category.tagline}
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
              className="group relative bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-purple-200 text-left overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 group-hover:translate-x-1 transition-all duration-300">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center text-sm text-purple-600 font-semibold">
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
