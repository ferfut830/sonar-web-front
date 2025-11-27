'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { openWhatsApp, whatsappMessages } from '@/utils/whatsapp';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/psicologos', label: 'Psicólogos' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md" role="banner">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Basado en la imagen del logo real */}
          <Link href="/" className="flex items-center space-x-3" aria-label="SONAR - Ir a inicio">
            <div className="relative w-16 h-16 flex items-center justify-center">
              {/* Logo icon - círculo con onda sonora central y ondas laterales */}
              <svg
                className="w-16 h-16 text-blue-900"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Círculo principal */}
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" fill="none" />
                {/* Onda sonora central (forma de igualador) */}
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
              <span className="text-2xl font-bold text-blue-900">SONAR</span>
              <span className="text-xs text-blue-700 -mt-1">TU BIENESTAR EN SINTONÍA</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Menú de navegación">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => openWhatsApp(whatsappMessages.pruebaGratis)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              EMPEZAR AHORA!
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
            <nav className="flex flex-col space-y-4 pt-4" aria-label="Menú móvil">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  openWhatsApp(whatsappMessages.pruebaGratis);
                }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105"
              >
                EMPEZAR AHORA!
              </button>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}

