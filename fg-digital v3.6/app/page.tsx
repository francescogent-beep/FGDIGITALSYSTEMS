import React from 'react';
import { METADATA, CANONICAL_DOMAIN } from '@/seo/metadata';
import { FAQS } from '@/constants';
import HomeClient from '@/components/HomeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: METADATA.home.title,
  description: METADATA.home.description,
  keywords: METADATA.home.keywords,
  alternates: {
    canonical: CANONICAL_DOMAIN,
  },
  openGraph: {
    title: METADATA.home.title,
    description: METADATA.home.description,
    url: CANONICAL_DOMAIN,
    siteName: 'FG Digital Systems',
    images: [
      {
        url: METADATA.home.ogImage || '',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `https://fgdigitalsystems.com/#organization`,
        "name": "FG Digital Systems",
        "url": "https://fgdigitalsystems.com",
        "logo": {
          "@type": "ImageObject",
          "@id": `https://fgdigitalsystems.com/#logo`,
          "url": "https://i.imgur.com/ILoCkO3.png",
          "contentUrl": "https://i.imgur.com/ILoCkO3.png",
          "caption": "FG Digital Systems Logo",
          "width": "512",
          "height": "512"
        },
        "image": { "@id": `https://fgdigitalsystems.com/#logo` },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34694285438",
          "contactType": "customer service",
          "areaServed": "ES",
          "availableLanguage": ["Spanish", "English", "Italian"]
        },
        "sameAs": [
          "https://www.linkedin.com/in/francescogentile/",
          "https://www.instagram.com/fg_digital_systems/",
          "https://www.facebook.com/people/FG-Digital-Systems/61587041462172/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `https://fgdigitalsystems.com/#website`,
        "url": "https://fgdigitalsystems.com",
        "name": "FG Digital Systems",
        "description": "Diseño Web y SEO para Pymes en Murcia",
        "publisher": { "@id": `https://fgdigitalsystems.com/#organization` },
        "inLanguage": "es-ES"
      },
      {
        "@type": "ProfessionalService",
        "@id": `https://fgdigitalsystems.com/#service`,
        "name": "FG Digital Systems",
        "image": "https://i.imgur.com/ILoCkO3.png",
        "url": "https://fgdigitalsystems.com",
        "telephone": "+34694285438",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calle Rey Don Pedro I, 9",
          "addressLocality": "Murcia",
          "addressRegion": "Murcia",
          "postalCode": "30009",
          "addressCountry": "ES"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.9922,
          "longitude": -1.1307
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "19:00"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://fgdigitalsystems.com/#faq`,
        "mainEntity": FAQS.slice(0, 5).map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomeClient />
    </>
  );
}
