import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'psicologia',
    name: 'SONAR PSICOLOGÍA',
    description: 'Cuidamos tu salud emocional a través de la escucha y la música.',
    tagline: 'Cuidamos tu salud emocional a través de la escucha y la música.',
    color: 'blue',
    gradient: 'from-blue-500 to-blue-700',
    services: [
      {
        id: 'terapia-individual-pareja-familiar',
        title: 'Terapia psicológica individual, de pareja y familiar',
        description: 'Acompañamiento profesional para individuos, parejas y familias.',
      },
      {
        id: 'canto-terapia',
        title: 'Canto terapia y estimulación musical emocional',
        description: 'Utilizamos la música y el canto como herramientas terapéuticas.',
      },
      {
        id: 'ansiedad-expresion',
        title: 'Programas de manejo de ansiedad y expresión emocional',
        description: 'Programas especializados para el manejo de ansiedad y expresión emocional.',
      },
      {
        id: 'acompanamiento',
        title: 'Acompañamiento personalizado',
        description: 'Seguimiento personalizado adaptado a tus necesidades.',
      },
    ],
  },
  {
    id: 'arte-canto',
    name: 'SONAR ARTE Y CANTO',
    description: 'Tu voz también puede sanar.',
    tagline: 'Tu voz también puede sanar.',
    color: 'purple',
    gradient: 'from-purple-500 to-purple-700',
    services: [
      {
        id: 'clases-canto-artistico',
        title: 'Clases de canto artístico y expresivo',
        description: 'Desarrolla tu voz de manera artística y expresiva.',
      },
      {
        id: 'entrenamiento-vocal',
        title: 'Entrenamiento vocal con enfoque emocional',
        description: 'Técnicas vocales que integran el bienestar emocional.',
      },
      {
        id: 'talleres',
        title: 'Talleres para niños, adolescentes y adultos',
        description: 'Programas adaptados para diferentes edades.',
      },
      {
        id: 'canto-mindfulness',
        title: 'Canto y mindfulness',
        description: 'Combina el canto con técnicas de mindfulness.',
      },
    ],
  },
  {
    id: 'salud',
    name: 'SONAR SALUD',
    description: 'La música como herramienta que acompaña al bienestar y salud física.',
    tagline: 'La música como herramienta que acompaña al bienestar y salud física.',
    color: 'teal',
    gradient: 'from-teal-500 to-teal-700',
    services: [
      {
        id: 'atencion-odontologica',
        title: 'Atención odontológica',
        description: 'Servicios odontológicos con acompañamiento musical.',
      },
      {
        id: 'reduccion-ansiedad',
        title: 'Estrategias para reducir ansiedad en pacientes',
        description: 'Técnicas musicales para reducir ansiedad durante tratamientos.',
      },
      {
        id: 'neurorehabilitacion',
        title: 'Música para neurorehabilitación y relajación durante procedimientos',
        description: 'Uso de música en procesos de rehabilitación neurológica.',
      },
      {
        id: 'coordinacion-profesionales',
        title: 'Coordinación entre profesionales de la salud y atención psicológica',
        description: 'Trabajo interdisciplinario entre diferentes especialidades.',
      },
    ],
  },
  {
    id: 'lab',
    name: 'SONAR LAB',
    description: 'Innovación, ciencia y arte trabajando juntos.',
    tagline: 'Innovación, ciencia y arte trabajando juntos.',
    color: 'indigo',
    gradient: 'from-indigo-500 to-indigo-700',
    services: [
      {
        id: 'investigacion',
        title: 'Investigación en atención psicológica de la mano con la música y neurociencia',
        description: 'Proyectos de investigación que combinan psicología, música y neurociencia.',
      },
      {
        id: 'proyectos-instituciones',
        title: 'Proyectos de salud emocional y musical en instituciones',
        description: 'Programas implementados en instituciones educativas y de salud.',
      },
      {
        id: 'talleres-interdisciplinarios',
        title: 'Talleres interdisciplinarios',
        description: 'Espacios de aprendizaje colaborativo entre diferentes disciplinas.',
      },
      {
        id: 'colaboraciones',
        title: 'Colaboraciones con profesionales de distintas áreas',
        description: 'Red de colaboración con profesionales de diversas especialidades.',
      },
    ],
  },
];


