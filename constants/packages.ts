import { Package } from '@/types';

export const packages: Package[] = [
  {
    id: 'a',
    name: 'PAQUETE A',
    letter: 'A',
    features: [
      'Prueba Gratuita',
      '4 sesiones de Asesoría',
      '1 sesión de seguimiento',
    ],
    highlighted: false,
  },
  {
    id: 'b',
    name: 'PAQUETE B',
    letter: 'B',
    features: [
      'Prueba Gratuita',
      '8 sesiones de Asesoría',
      '1 sesión de seguimiento',
    ],
    highlighted: true,
  },
  {
    id: 'c',
    name: 'PAQUETE C',
    letter: 'C',
    features: [
      'Prueba Gratuita',
      '12 sesiones de Asesoría',
      '1 sesión de seguimiento',
    ],
    highlighted: false,
  },
];


