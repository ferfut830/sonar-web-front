import { categories } from '@/constants/categories';
import ServiceDetailPage from '@/components/ServiceDetailPage';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    serviceId: string;
  };
}

export default function PsicologiaServicePage({ params }: PageProps) {
  const category = categories.find((c) => c.id === 'psicologia');
  if (!category) notFound();

  const service = category.services.find((s) => s.id === params.serviceId);
  if (!service) notFound();

  return <ServiceDetailPage category={category} service={service} />;
}


