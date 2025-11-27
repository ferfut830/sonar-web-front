export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SONAR",
    "alternateName": "SONAR - Tu Bienestar en Sintonía",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://sonar-web-nine.vercel.app",
    "logo": `${process.env.NEXT_PUBLIC_SITE_URL || "https://sonar-web-nine.vercel.app"}/logo.png`,
    "image": `${process.env.NEXT_PUBLIC_SITE_URL || "https://sonar-web-nine.vercel.app"}/logo.png`,
    "description": "Cuidamos tu salud emocional a través de la escucha y la música. Servicios de psicología, arte, canto y salud.",
    "sameAs": [
      // Añadir redes sociales cuando estén disponibles
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": ["Spanish"]
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Musicoterapia y Psicología",
    "provider": {
      "@type": "Organization",
      "name": "SONAR"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Perú"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios SONAR",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SONAR PSICOLOGÍA",
            "description": "Terapia psicológica individual, de pareja y familiar"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SONAR ARTE Y CANTO",
            "description": "Clases de canto artístico y expresivo"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SONAR SALUD",
            "description": "Atención odontológica y médica con acompañamiento musical"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}


