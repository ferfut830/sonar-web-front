export default function PsicologosPage() {
  const advisors = [
    {
      id: '1',
      name: 'Dr. Juan Pérez',
      role: 'Psicólogo Clínico',
      bio: 'Especialista en terapia cognitivo-conductual con más de 10 años de experiencia.',
    },
    {
      id: '2',
      name: 'Dra. María González',
      role: 'Musicoterapeuta',
      bio: 'Experta en integración de música y terapia emocional.',
    },
    {
      id: '3',
      name: 'Lic. Carlos Ramírez',
      role: 'Terapeuta de Parejas',
      bio: 'Especializado en terapia de parejas y familia con enfoque gestáltico.',
    },
    {
      id: '4',
      name: 'Dra. Ana Martínez',
      role: 'Psicóloga Infantil',
      bio: 'Experta en atención psicológica para niños y adolescentes.',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
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
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
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
              <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                {advisor.name}
              </h3>
              <p className="text-blue-600 text-center mb-4 font-medium">{advisor.role}</p>
              <p className="text-gray-600 text-sm text-center">{advisor.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


