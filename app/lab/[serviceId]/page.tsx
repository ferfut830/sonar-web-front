'use client';

import { categories } from '@/constants/categories';
import { openWhatsApp, whatsappMessages } from '@/utils/whatsapp';
import { notFound, useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface PageProps {
  params: {
    serviceId: string;
  };
}

export default function LabServicePage({ params }: PageProps) {
  const router = useRouter();
  const category = categories.find((c) => c.id === 'lab');
  
  if (!category) {
    notFound();
  }

  const service = category.services.find((s) => s.id === params.serviceId);
  
  useEffect(() => {
    if (service) {
      openWhatsApp(whatsappMessages.servicio('SONAR LAB', service.title));
      setTimeout(() => {
        router.push('/lab');
      }, 100);
    }
  }, [service, router]);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-center">
      <p className="text-lg text-gray-600">Redirigiendo a WhatsApp...</p>
    </div>
  );
}
