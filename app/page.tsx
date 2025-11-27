import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import SessionTypesSection from '@/components/sections/SessionTypesSection';
import FreeTrialSection from '@/components/sections/FreeTrialSection';
import MethodologySection from '@/components/sections/MethodologySection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import PackagesSection from '@/components/sections/PackagesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';

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
