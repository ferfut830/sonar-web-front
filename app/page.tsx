import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SessionTypesSection from '@/components/sections/SessionTypesSection';
import FreeTrialSection from '@/components/sections/FreeTrialSection';
import MethodologySection from '@/components/sections/MethodologySection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import PackagesSection from '@/components/sections/PackagesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Empieza hoy con tu primera sesión gratis. Descubre el camino hacia tu bienestar emocional a través de la musicoterapia y psicología en SONAR.',
  openGraph: {
    title: 'SONAR - Empieza Hoy, Primera Sesión Gratis',
    description: 'Descubre el camino hacia tu bienestar emocional ahora mismo. Primera sesión gratuita de 60 minutos.',
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <SessionTypesSection />
      <FreeTrialSection />
      <MethodologySection />
      <BenefitsSection />
      <PackagesSection />
      <TestimonialsSection />
    </>
  );
}
