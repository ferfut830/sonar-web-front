export default function ProyectosPage() {
  const proyectos = [
    {
      id: '1',
      title: 'Investigación en Musicoterapia y Neurociencia',
      description: 'Proyecto de investigación que explora los efectos de la música en el cerebro y su aplicación en terapia.',
      status: 'En curso',
    },
    {
      id: '2',
      title: 'Programa de Salud Emocional en Escuelas',
      description: 'Implementación de programas de musicoterapia en instituciones educativas para el bienestar emocional de estudiantes.',
      status: 'Activo',
    },
    {
      id: '3',
      title: 'Talleres Interdisciplinarios',
      description: 'Espacios de colaboración entre psicólogos, músicos y profesionales de la salud.',
      status: 'Disponible',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 text-center mb-4">
          Proyectos SONAR LAB
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Conoce nuestros proyectos de investigación e innovación en musicoterapia y psicología.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {proyecto.status}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{proyecto.title}</h2>
              <p className="text-gray-600">{proyecto.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


