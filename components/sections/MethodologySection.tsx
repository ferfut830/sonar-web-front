import Link from 'next/link';

export default function MethodologySection() {
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
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              MÁS SOBRE NOSOTROS
            </Link>
          </div>

          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center"
              >
                <svg
                  className="w-16 h-16 text-gray-400"
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


