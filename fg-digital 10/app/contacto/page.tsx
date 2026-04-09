import React from 'react';
import { Section, Button, Breadcrumbs, FAQAccordion } from '@/components/UI';
import { METADATA, CANONICAL_DOMAIN } from '@/seo/metadata';
import { FAQS } from '@/constants';
import { MessageCircle, ShieldCheck, ArrowRight, Zap, Send, Mail, Phone, MapPin, User } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: METADATA.contact.title,
  description: METADATA.contact.description,
  alternates: {
    canonical: `${CANONICAL_DOMAIN}${METADATA.contact.path}`,
  },
};

const ContactPage = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_DOMAIN}${METADATA.contact.path}/#webpage`,
        "url": `${CANONICAL_DOMAIN}${METADATA.contact.path}`,
        "name": METADATA.contact.title,
        "isPartOf": { "@id": `${CANONICAL_DOMAIN}/#website` },
        "breadcrumb": { "@id": `${CANONICAL_DOMAIN}${METADATA.contact.path}/#breadcrumb` },
        "inLanguage": "es-ES",
        "description": METADATA.contact.description
      },
      {
        "@type": "ContactPage",
        "@id": `${CANONICAL_DOMAIN}${METADATA.contact.path}/#contact`,
        "mainEntity": { "@id": `${CANONICAL_DOMAIN}/#organization` }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_DOMAIN}${METADATA.contact.path}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": "Contacto" }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_DOMAIN}${METADATA.contact.path}/#faq`,
        "mainEntity": FAQS.slice(0, 6).map(f => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      
      <Section className="pt-12 md:pt-24 pb-16 md:pb-32">
        <Breadcrumbs items={[{ label: 'Contacto' }]} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-slate-800 tracking-tightest leading-[1.02]">Hablemos de tus próximos clientes</h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed font-medium">
              Estamos listos para analizar tu negocio y darte una ruta clara hacia el crecimiento. Sin presión ni técnicas agresivas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
               <div className="flex flex-col gap-4 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group">
                 <div className="bg-slate-50 p-3 rounded-2xl text-blue-500 w-fit group-hover:bg-blue-500 group-hover:text-white shadow-sm"><User size={20} /></div>
                 <div>
                    <h4 className="font-bold text-slate-400 text-[11px] uppercase tracking-widest mb-1">Consultor</h4>
                    <p className="text-slate-800 font-bold text-lg">Francesco Gentile</p>
                 </div>
               </div>
               <a href="tel:+34694285438" className="flex flex-col gap-4 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-md group">
                 <div className="bg-slate-50 p-3 rounded-2xl text-blue-500 w-fit group-hover:bg-blue-500 group-hover:text-white shadow-sm"><Phone size={20} /></div>
                 <div>
                    <h4 className="font-bold text-slate-400 text-[11px] uppercase tracking-widest mb-1">Llámanos</h4>
                    <p className="text-slate-800 font-bold text-lg">+34 694 28 54 38</p>
                 </div>
               </a>
               <a href="mailto:info@fgdigitalsystems.com" className="flex flex-col gap-4 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:border-blue-500 hover:shadow-md group">
                 <div className="bg-blue-50 p-3 rounded-2xl text-blue-500 w-fit group-hover:bg-blue-500 group-hover:text-white shadow-sm"><Mail size={20} /></div>
                 <div>
                    <h4 className="font-bold text-slate-400 text-[11px] uppercase tracking-widest mb-1">Escríbenos</h4>
                    <p className="text-slate-800 font-bold text-lg">info@fgdigitalsystems.com</p>
                 </div>
               </a>
               <div className="flex flex-col gap-4 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm group">
                 <div className="bg-slate-50 p-3 rounded-2xl text-blue-500 w-fit group-hover:bg-blue-500 group-hover:text-white shadow-sm"><MapPin size={20} /></div>
                 <div>
                    <h4 className="font-bold text-slate-400 text-[11px] uppercase tracking-widest mb-1">Ubicación</h4>
                    <p className="text-slate-800 font-bold text-lg">Murcia, España</p>
                 </div>
               </div>
            </div>

            <div className="bg-slate-800 p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               <h3 className="text-2xl font-bold mb-4 relative z-10 tracking-tight">WhatsApp Directo</h3>
               <p className="mb-8 text-slate-400 text-base leading-relaxed relative z-10 font-medium">Si prefieres la inmediatez, escríbenos directamente para una consulta rápida.</p>
               <a 
                href="https://wa.me/34694285438" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-10 py-4 rounded-full font-bold hover:bg-green-600 shadow-lg shadow-green-500/20 relative z-10"
               >
                 <MessageCircle size={20} />
                 Contactar por WhatsApp
               </a>
            </div>
          </div>

          <div className="bg-white p-10 md:p-20 rounded-[3.5rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
            <div className="bg-blue-500 text-white p-8 rounded-[2rem] mb-10 shadow-lg shadow-blue-500/20">
              <Zap size={48} />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6 tracking-tight">Solicita tu Propuesta</h2>
            <p className="text-slate-500 mb-12 max-w-7xl mx-auto leading-relaxed text-lg font-medium">
              Pulsa el botón de abajo para completar un breve formulario y recibir tu presupuesto personalizado.
            </p>
            <Button tallyId="q4GKJO" variant="primary" className="w-full text-xl py-6 flex items-center justify-center gap-3 shadow-lg">
              <Send size={24} />
              Enviar Solicitud
            </Button>
            <div className="mt-12 flex items-center gap-6 opacity-30">
              <ShieldCheck size={20} />
              <span className="text-[11px] font-bold uppercase tracking-widest">Protección de Datos RGPD</span>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-slate-50 py-12 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Preguntas frecuentes antes de contactar</h2>
            <p className="text-slate-600">Resolvemos las últimas dudas para que nos escribas con confianza.</p>
          </div>
          <div className="space-y-2">
            {FAQS.slice(0, 6).map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/preguntas-frecuentes" className="text-blue-600 font-bold flex items-center justify-center gap-2 hover:underline">
              Ver todas las preguntas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ContactPage;
