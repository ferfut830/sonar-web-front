'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function ReservarForm() {
  const searchParams = useSearchParams();
  const tipo = searchParams.get('tipo') || '';
  const paquete = searchParams.get('paquete') || '';

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoSesion: tipo || 'virtual',
    paquete: paquete || '',
    mensaje: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-900 text-center mb-4">
          Reservar Sesión
        </h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Completa el formulario y nos pondremos en contacto contigo para confirmar tu sesión.
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                id="nombre"
                required
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                id="telefono"
                required
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="tipoSesion" className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de Sesión *
              </label>
              <select
                id="tipoSesion"
                required
                value={formData.tipoSesion}
                onChange={(e) => setFormData({ ...formData, tipoSesion: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="virtual">Virtual</option>
                <option value="presencial">Presencial</option>
              </select>
            </div>

            <div>
              <label htmlFor="paquete" className="block text-sm font-medium text-gray-700 mb-2">
                Paquete (Opcional)
              </label>
              <select
                id="paquete"
                value={formData.paquete}
                onChange={(e) => setFormData({ ...formData, paquete: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Seleccionar paquete</option>
                <option value="a">Paquete A - 4 sesiones</option>
                <option value="b">Paquete B - 8 sesiones</option>
                <option value="c">Paquete C - 12 sesiones</option>
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                Mensaje (Opcional)
              </label>
              <textarea
                id="mensaje"
                rows={4}
                value={formData.mensaje}
                onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-bold text-lg transition-colors"
            >
              ENVIAR SOLICITUD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function ReservarPage() {
  return (
    <Suspense fallback={<div className="pt-32 pb-20 text-center">Cargando...</div>}>
      <ReservarForm />
    </Suspense>
  );
}
