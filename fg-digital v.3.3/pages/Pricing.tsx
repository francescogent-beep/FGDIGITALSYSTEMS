import React from 'react';
import { Section, PricingCard, FAQAccordion, Button, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { PRICING_PLANS, FAQS, ADD_ONS, RETAINERS } from '../constants';
import { ShieldCheck, Info, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router';

const Pricing: React.FC = () => {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": "Tarifas" }
        ]
      },
      {
        "@type": "ItemList",
        "name": "Nuestros Packs de Diseño Web y SEO",
        "itemListElement": PRICING_PLANS.map((plan, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "Offer",
            "name": plan.name,
            "description": plan.description,
            "price": plan.price.replace('€', '').trim(),
            "priceCurrency": "EUR",
            "seller": { "@id": `${CANONICAL_DOMAIN}/#organization` }
          }
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.slice(0, 6).map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }
    ]
  };

  return (
    <main>
      <SEO {...METADATA.pricing} schema={pricingSchema} />
      
      {/* 1. HEADER */}
      <Section className="pt-6 md:pt-20 bg-white pb-6">
        <Breadcrumbs items={[{ label: 'Tarifas y Packs' }]} />
        <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Inversión Transparente</h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Sabes exactamente lo que pagas y lo que obtienes. Sin presupuestos infinitos ni cuotas ocultas.
          </p>
        </div>
      </Section>

      {/* 2. MAIN PACKS */}
      <Section className="bg-slate-50 border-y border-slate-200 py-12">
        <div className="text-center mb-10">
          <p className="text-sm md:text-base text-slate-500 font-medium italic">
            “Si dudas entre dos packs, el Pack 2 — Consigue Clientes suele ser el punto de equilibrio perfecto entre coste y resultados.”
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0 mb-12">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
        
        {/* PACK 4 - ONLY PRICING PAGE */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white border-t-8 border-blue-600 shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
              <div>
                <span className="bg-blue-600 text-[10px] font-black uppercase px-4 py-1.5 rounded-full mb-3 inline-block">Solución Avanzada</span>
                <h3 className="text-3xl font-black">{PRICING_PLANS[3].name}</h3>
                <p className="text-slate-400 mt-2 max-w-md">{PRICING_PLANS[3].description}</p>
              </div>
              <div className="text-left md:text-right">
                <span className="text-slate-500 text-sm block italic">Inversión desde</span>
                <span className="text-4xl md:text-5xl font-black text-blue-500">{PRICING_PLANS[3].price}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
              {PRICING_PLANS[3].features.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 size={18} className="text-blue-500 shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <Button tallyId="q4GKJO" variant="primary" className="w-full md:w-auto px-12 py-5 text-lg">Me interesa el sistema completo</Button>
          </div>
        </div>

        <div className="flex justify-center">
           <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl flex gap-3 max-w-2xl shadow-sm">
              <Info className="text-blue-600 shrink-0" size={20} />
              <p className="text-xs md:text-sm text-blue-800 leading-relaxed font-medium">
                <strong>¿Por qué pago único?</strong> Porque creemos que tu web debe ser un activo de tu negocio, no una suscripción eterna. <Link to="/faq" className="font-bold underline">Más info en FAQ</Link>.
              </p>
           </div>
        </div>
      </Section>

      {/* 3. ADD-ONS */}
      <Section className="py-12 md:py-24 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">Complementos</span>
            <h2 className="text-3xl font-black text-slate-900 mb-6">Completa tu pack con Add-ons</h2>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-md">
              Añade estos módulos naturales a cualquier pack inicial para potenciar tus resultados.
            </p>
            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
               <Zap className="text-blue-500 mb-4" size={32} />
               <h4 className="text-xl font-bold mb-2">¿Buscas algo a medida?</h4>
               <p className="text-slate-400 text-sm mb-6 leading-relaxed">Dinos tu necesidad exacta y te daremos un presupuesto cerrado en 24h.</p>
               <Button tallyId="q4GKJO" variant="secondary" className="w-full text-blue-600 font-bold">Contactar ahora</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
             {ADD_ONS.map((addon, i) => (
               <div key={i} className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-blue-200 transition-all group">
                  <div className="flex items-center gap-3">
                     <div className="bg-white p-2 rounded-lg text-blue-600 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <CheckCircle2 size={18} />
                     </div>
                     <span className="font-bold text-slate-800 text-sm md:text-base">{addon.name}</span>
                  </div>
                  <span className="font-black text-blue-600">{addon.price}</span>
               </div>
             ))}
          </div>
        </div>
      </Section>

      {/* 4. RETAINERS / MONTHLY PLANS */}
      <Section className="bg-slate-50 border-t border-slate-200 py-12 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Planes de Acompañamiento Mensual</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Delegación total. Nos encargamos de que tu visibilidad siga creciendo mes a mes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {RETAINERS.map((plan, i) => (
             <div key={i} className={`p-8 md:p-10 rounded-[2.5rem] bg-white border ${plan.recommended ? 'border-blue-600 shadow-xl scale-105' : 'border-slate-200 shadow-sm'} relative flex flex-col`}>
                {plan.recommended && (
                   <span className="absolute -top-4 right-10 bg-blue-600 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full">Más Elegido</span>
                )}
                <h3 className="text-2xl font-black text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm font-bold uppercase mb-4">{plan.desc}</p>
                <div className="mb-8">
                   <span className="text-3xl font-black text-blue-600">{plan.price}</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                   {plan.features.map((f, j) => (
                     <li key={j} className="flex gap-3 text-sm text-slate-700 font-medium leading-tight">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                        {f}
                     </li>
                   ))}
                </ul>
                <Button tallyId="q4GKJO" variant={plan.recommended ? 'primary' : 'outline'} className="w-full">Me interesa este plan</Button>
             </div>
           ))}
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-white py-12 md:py-24 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Preguntas sobre facturación e inversión</h2>
            <p className="text-slate-600">Resolvemos tus dudas antes de contratar.</p>
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

      {/* 5. CTA */}
      <Section className="py-20 text-center bg-slate-50 border-t border-slate-200">
        <div className="bg-slate-900 text-white p-8 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl md:text-4xl font-black mb-6 relative z-10">¿Listo para una propuesta clara?</h3>
          <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto relative z-10 leading-relaxed">
            Te respondemos en menos de 24h con el pack que mejor encaja con tu negocio y objetivos actuales.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Button tallyId="q4GKJO" variant="secondary" className="px-12 py-4 text-blue-600 font-black">
              Solicitar Propuesta Gratis
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Pricing;