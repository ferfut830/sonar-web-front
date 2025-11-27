const WHATSAPP_NUMBER = '51948042220';

export function getWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function openWhatsApp(message: string) {
  window.open(getWhatsAppUrl(message), '_blank', 'noopener,noreferrer');
}

// Mensajes predefinidos
export const whatsappMessages = {
  pruebaGratis: 'Hola, me gustaría solicitar mi primera sesión gratuita de 60 minutos.',
  sesionPresencial: 'Hola, me gustaría reservar una sesión presencial.',
  sesionVirtual: 'Hola, me gustaría reservar una sesión virtual.',
  paqueteA: 'Hola, me interesa el Paquete A (4 sesiones de asesoría).',
  paqueteB: 'Hola, me interesa el Paquete B (8 sesiones de asesoría).',
  paqueteC: 'Hola, me interesa el Paquete C (12 sesiones de asesoría).',
  categoria: (categoria: string) => `Hola, me gustaría obtener más información sobre ${categoria}.`,
  servicio: (categoria: string, servicio: string) => 
    `Hola, me interesa el servicio "${servicio}" de ${categoria}. Me gustaría obtener más información.`,
};

