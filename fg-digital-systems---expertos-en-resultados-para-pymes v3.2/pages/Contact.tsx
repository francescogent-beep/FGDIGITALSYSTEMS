import React from 'react';
import { Section, Button, Breadcrumbs, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { FAQS } from '../constants';
import { MessageCircle, ShieldCheck, Clock, HelpCircle, ArrowRight, Zap, Send, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';

const Contact: React.FC = () => {
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
      }
    ]
  };

  return (
    <main>
      <SEO {...METADATA.contact} schema={contactSchema} />
      
      <Section className="pt-20">
        <Breadcrumbs items={[{ label: 'Contacto' }]} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">Hablemos de tus próximos clientes</h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Estamos listos para analizar tu negocio y darte una ruta clara hacia el crecimiento. Sin presión ni técnicas agresivas.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
               <a href="tel:+34694285438" className="flex flex-col gap-3 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-600 hover:shadow-md transition-all group">
                 <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors"><Phone size={20} /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Llámanos</h4>
                    <p className="text-slate-600 font-bold">+34 694 28 54 38</p>
                 </div>
               </a>
               <a href="mailto:info@fgdigitalsystems.com" className="flex flex-col gap-3 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-blue-600 hover:shadow-md transition-all group">
                 <div className="bg-blue-50 p-3 rounded-2xl text-blue-600 w-fit group-hover:bg-blue-600 group-hover:text-white transition-colors"><Mail size={20} /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-1">Escríbenos</h4>
                    <p className="text-slate-600 font-bold">info@fgdigitalsystems.com</p>
                 </div>
               </a>
            </div>

            <div className="space-y-4 mb-10">
               <div className="flex gap-4 items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                 <div className="bg-white p-2 rounded-xl text-slate-400"><MapPin size={20} /></div>
                 <div>
                    <h4 className="font-bold text-slate-800 text-xs uppercase">Ubicación</h4>
                    <p className="text-slate-500 text-sm">Murcia, España</p>
                 </div>
               </div>
               <div className="flex gap-4 items-center bg-slate-50 p-4 rounded-2xl border border-slate-100">
                 <div className="bg-white p-2 rounded-xl text-slate-400"><Clock size={20} /></div>
                 <div>
                    <h4 className="font-bold text-slate-800 text-xs uppercase">Tiempo de Respuesta</h4>
                    <p className="text-slate-500 text-sm">Presupuesto listo en menos de 24h.</p>
                 </div>
               </div>
            </div>

            <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
               <h3 className="text-xl font-bold mb-4 relative z-10">WhatsApp Directo</h3>
               <p className="mb-6 text-slate-400 text-sm leading-relaxed relative z-10">Si prefieres la inmediatez, escríbenos directamente para una consulta rápida.</p>
               <a 
                href="https://wa.me/34694285438" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 active:scale-95 relative z-10"
               >
                 <MessageCircle size={20} />
                 Contactar por WhatsApp
               </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
            <div className="bg-blue-600 text-white p-6 rounded-3xl mb-8 shadow-xl shadow-blue-500/20">
              <Zap size={48} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Solicita tu Propuesta</h2>
            <p className="text-slate-600 mb-10 max-w-sm mx-auto leading-relaxed">
              Pulsa el botón de abajo para completar un breve formulario y recibir tu presupuesto personalizado.
            </p>
            <Button tallyId="q4GKJO" variant="primary" className="w-full text-xl py-6 flex items-center gap-3">
              <Send size={24} />
              Enviar Solicitud
            </Button>
            <div className="mt-10 flex items-center gap-6 opacity-40">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Protección de Datos RGPD</span>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-slate-50 py-12 md:py-24 border-t border-slate-200">
        <div className="max-w-4xl mx-auto">
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
            <Link to="/preguntas-frecuentes" className="text-blue-600 font-bold flex items-center justify-center gap-2 hover:underline">
              Ver todas las preguntas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Contact;