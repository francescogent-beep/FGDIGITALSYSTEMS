
import React from 'react';
import { Section, Button, Breadcrumbs, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { FAQS } from '../constants';
import { MessageCircle, ShieldCheck, Clock, HelpCircle, ArrowRight, Zap, Send } from 'lucide-react';
import { Link } from 'react-router';

const Contact: React.FC = () => {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto - FG Digital Systems",
    "description": METADATA.contact.description,
    "url": `${CANONICAL_DOMAIN}${METADATA.contact.path}`,
    "mainEntity": {
      "@type": "Organization",
      "name": "FG Digital Systems",
      "telephone": "+447865660599",
      "email": "contacto@fgdigitalsystems.com"
    }
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

            <div className="space-y-4 mb-10">
               <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                 <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><Clock /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase">Velocidad</h4>
                    <p className="text-slate-500 text-sm">Respuesta en menos de 24h.</p>
                 </div>
               </div>
               <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                 <div className="bg-green-100 p-3 rounded-xl text-green-600"><ShieldCheck /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase">Sin compromiso</h4>
                    <p className="text-slate-500 text-sm">La auditoría inicial es gratuita.</p>
                 </div>
               </div>
               <Link to="/preguntas-frecuentes" className="flex gap-4 items-center bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors group">
                 <div className="bg-slate-200 p-3 rounded-xl text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><HelpCircle /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase">¿Tienes dudas antes?</h4>
                    <p className="text-slate-500 text-sm font-bold">Lee nuestras preguntas frecuentes</p>
                 </div>
               </Link>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
               <h3 className="text-xl font-bold mb-4">¿Prefieres WhatsApp?</h3>
               <p className="mb-6 text-slate-400 text-sm leading-relaxed">Si tienes una duda rápida o prefieres la inmediatez, escríbenos directamente.</p>
               <a 
                href="https://wa.me/447865660599" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg"
               >
                 <MessageCircle size={20} />
                 WhatsApp Directo
               </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center text-center">
            <div className="bg-blue-600 text-white p-6 rounded-3xl mb-8 shadow-xl shadow-blue-500/20">
              <Zap size={48} />
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Solicita tu Propuesta</h2>
            <p className="text-slate-600 mb-10 max-w-sm mx-auto leading-relaxed">
              Pulsa el botón de abajo para completar un breve formulario y recibir tu presupuesto personalizado en menos de 24h.
            </p>
            <Button tallyId="q4GKJO" variant="primary" className="w-full text-xl py-6 flex items-center gap-3">
              <Send size={24} />
              Enviar Solicitud
            </Button>
            <div className="mt-10 flex items-center gap-6 opacity-40">
              <ShieldCheck size={20} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Datos Protegidos</span>
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
