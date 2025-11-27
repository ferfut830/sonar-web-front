import Link from 'next/link';
import { categories } from '@/constants/categories';

const category = categories.find((c) => c.id === 'salud')!;

export default function SaludPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-800 text-white py-20 rounded-2xl mb-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{category.name}</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {category.services.map((service) => (
            <Link
              key={service.id}
              href={`/salud/${service.id}`}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all hover:-translate-y-2 group"
            >
              <h3 className="text-2xl font-bold text-teal-900 mb-4 group-hover:text-teal-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-end">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center group-hover:bg-teal-200 transition-colors">
                  <svg
                    className="w-6 h-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}


