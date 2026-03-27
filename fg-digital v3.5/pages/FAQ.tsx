import React from 'react';
import { Section, FAQAccordion, Button, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { FAQS } from '../constants';
import { HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const FAQ: React.FC = () => {
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
      <SEO {...METADATA.faq} schema={faqSchema} />
      
      <Section className="pt-6 md:pt-20 bg-slate-50 pb-8">
        <Breadcrumbs items={[{ label: 'Preguntas Frecuentes' }]} />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px] md:text-sm font-bold mb-4 border border-blue-200 uppercase tracking-widest">
            <HelpCircle size={14} />
            Centro de Ayuda
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Preguntas Frecuentes</h1>
          <p className="text-sm md:text-xl text-slate-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            Todo lo que necesitas saber antes de empezar.
          </p>
          <Link to="/servicios-diseno-web-seo" className="inline-flex items-center gap-2 text-blue-600 text-xs md:text-base font-bold hover:underline">
            Ver servicios <ArrowRight size={14} />
          </Link>
        </motion.div>
      </Section>

      <Section className="py-4 md:py-16">
        <div className="max-w-4xl mx-auto">
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

export default FAQ;