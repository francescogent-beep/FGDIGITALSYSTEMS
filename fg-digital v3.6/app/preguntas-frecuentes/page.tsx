import React from 'react';
import { Section, FAQAccordion, Breadcrumbs } from '@/components/UI';
import { METADATA, CANONICAL_DOMAIN } from '@/seo/metadata';
import { FAQS } from '@/constants';
import { HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: METADATA.faq.title,
  description: METADATA.faq.description,
  alternates: {
    canonical: `${CANONICAL_DOMAIN}${METADATA.faq.path}`,
  },
};

const FAQPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_DOMAIN}${METADATA.faq.path}/#webpage`,
        "url": `${CANONICAL_DOMAIN}${METADATA.faq.path}`,
        "name": METADATA.faq.title,
        "isPartOf": { "@id": `${CANONICAL_DOMAIN}/#website` },
        "breadcrumb": { "@id": `${CANONICAL_DOMAIN}${METADATA.faq.path}/#breadcrumb` },
        "inLanguage": "es-ES",
        "description": METADATA.faq.description
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_DOMAIN}${METADATA.faq.path}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": "Preguntas Frecuentes" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_DOMAIN}${METADATA.faq.path}/#faq`,
        "mainEntity": FAQS.map(f => ({
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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <Section className="pt-6 md:pt-20 bg-slate-50 pb-8">
        <Breadcrumbs items={[{ label: 'Preguntas Frecuentes' }]} />
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px] md:text-sm font-bold mb-4 border border-blue-200 uppercase tracking-widest">
            <HelpCircle size={14} />
            Centro de Ayuda
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Preguntas Frecuentes</h1>
          <p className="text-sm md:text-xl text-slate-600 max-w-7xl mx-auto mb-4 leading-relaxed">
            Todo lo que necesitas saber antes de empezar.
          </p>
          <Link href="/servicios" className="inline-flex items-center gap-2 text-blue-600 text-xs md:text-base font-bold hover:underline">
            Ver servicios <ArrowRight size={14} />
          </Link>
        </div>
      </Section>

      <Section className="py-4 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
};

export default FAQPage;
