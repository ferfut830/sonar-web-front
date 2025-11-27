export default function BlogPage() {
  const posts = [
    {
      id: '1',
      title: 'El poder de la música en la terapia emocional',
      excerpt: 'Descubre cómo la música puede ser una herramienta poderosa en el proceso terapéutico.',
      date: '15 de Enero, 2024',
    },
    {
      id: '2',
      title: 'Manejo de ansiedad: técnicas musicales',
      excerpt: 'Aprende técnicas basadas en música para manejar la ansiedad de manera efectiva.',
      date: '10 de Enero, 2024',
    },
    {
      id: '3',
      title: 'Canto terapia: sanar con la voz',
      excerpt: 'Explora cómo el canto puede ser una forma de expresión y sanación emocional.',
      date: '5 de Enero, 2024',
    },
  ];

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 text-center mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Artículos y recursos sobre musicoterapia, psicología y bienestar emocional.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}


