export default function NosotrosPage() {
  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 text-center mb-12">
          Nosotros
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              En SONAR, creemos en el poder transformador de la música y la terapia para el
              bienestar emocional. Nuestra misión es brindar servicios de alta calidad que
              integren la psicología, el arte, el canto y la salud, ofreciendo un enfoque
              integral y personalizado para cada persona.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestra Visión</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ser líderes en la integración de la musicoterapia y la psicología, creando
              espacios seguros donde las personas puedan encontrar su bienestar emocional a
              través de la escucha, la música y el acompañamiento profesional.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Valores</h2>
            <ul className="space-y-3">
              {[
                'Compromiso con la excelencia profesional',
                'Empatía y respeto hacia cada persona',
                'Innovación en metodologías terapéuticas',
                'Integridad y transparencia en nuestros servicios',
                'Trabajo interdisciplinario y colaborativo',
              ].map((value, index) => (
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
                  <span className="text-lg text-gray-700">{value}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}


