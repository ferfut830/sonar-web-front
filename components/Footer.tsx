import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-16 h-16 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-white"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path
                    d="M60 100 L70 60 L80 140 L90 40 L100 160 L110 50 L120 150 L130 70 L140 130"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">SONAR</span>
                <span className="text-xs -mt-1">TU BIENESTAR EN SINTONÍA</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Cuidamos tu salud emocional a través de la escucha y la música.
              Innovación, ciencia y arte trabajando juntos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/psicologos" className="text-gray-400 hover:text-white transition-colors">
                  Psicólogos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/psicologia" className="text-gray-400 hover:text-white transition-colors">
                  SONAR PSICOLOGÍA
                </Link>
              </li>
              <li>
                <Link href="/arte-canto" className="text-gray-400 hover:text-white transition-colors">
                  SONAR ARTE Y CANTO
                </Link>
              </li>
              <li>
                <Link href="/salud" className="text-gray-400 hover:text-white transition-colors">
                  SONAR SALUD
                </Link>
              </li>
              <li>
                <Link href="/lab" className="text-gray-400 hover:text-white transition-colors">
                  SONAR LAB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SONAR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

