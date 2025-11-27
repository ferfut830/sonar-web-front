import Link from 'next/link';
import { Service, Category } from '@/types';

interface ServiceDetailPageProps {
  category: Category;
  service: Service;
}

export default function ServiceDetailPage({ category, service }: ServiceDetailPageProps) {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className={`bg-gradient-to-br ${category.gradient} text-white py-20 rounded-2xl mb-12`}>
        <div className="container mx-auto text-center">
          <Link
            href={`/${category.id}`}
            className="inline-block mb-4 text-white/80 hover:text-white transition-colors"
          >
            ← Volver a {category.name}
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre este servicio</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Este servicio forma parte de nuestro compromiso por brindar atención de calidad
                que integra la música y la terapia para tu bienestar emocional.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Nuestro equipo de profesionales certificados está comprometido con tu salud
                emocional y utiliza metodologías respaldadas científicamente para garantizar
                resultados efectivos.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Beneficios</h3>
              <ul className="space-y-3">
                {[
                  'Atención personalizada adaptada a tus necesidades',
                  'Metodologías respaldadas científicamente',
                  'Equipo de profesionales certificados',
                  'Resultados tangibles y duraderos',
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0"
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
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <Link
                href="/reservar"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                RESERVAR SESIÓN
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


