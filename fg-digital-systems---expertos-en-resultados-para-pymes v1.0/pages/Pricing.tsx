
import React from 'react';
import { Section, PricingCard, FAQAccordion, Button, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA } from '../seo/metadata';
import { PRICING_PLANS, FAQS, ADD_ONS, RETAINERS } from '../constants';
import { ShieldCheck, Info, ArrowRight, CheckCircle2, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <main>
      <SEO {...METADATA.pricing} />
      
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0 mb-12">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
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
            <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">Servicios Extra</span>
            <h2 className="text-3xl font-black text-slate-900 mb-6">Completa tu pack con Add-ons</h2>
            <p className="text-slate-600 mb-8 leading-relaxed max-w-md">
              Si necesitas algo más específico para tu negocio, puedes añadir estos módulos a cualquiera de nuestros packs principales.
            </p>
            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
               <Zap className="text-blue-500 mb-4" size={32} />
               <h4 className="text-xl font-bold mb-2">¿Buscas algo a medida?</h4>
               <p className="text-slate-400 text-sm mb-6 leading-relaxed">Dinos tu necesidad exacta y te daremos un presupuesto cerrado en 24h.</p>
               <Button to="/contacto" variant="secondary" className="w-full text-blue-600 font-bold">Contactar ahora</Button>
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
          <p className="text-slate-600 max-w-xl mx-auto">Opcional. Para negocios que quieren delegar todo y centrarse solo en trabajar.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           {RETAINERS.map((plan, i) => (
             <div key={i} className={`p-8 md:p-10 rounded-[2.5rem] bg-white border ${plan.recommended ? 'border-blue-600 shadow-xl' : 'border-slate-200 shadow-sm'} relative`}>
                {plan.recommended && (
                   <span className="absolute -top-4 right-10 bg-blue-600 text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full">Más Recomendado</span>
                )}
                <h3 className="text-2xl font-black text-slate-900 mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm font-bold uppercase mb-4">{plan.desc}</p>
                <div className="mb-8">
                   <span className="text-3xl font-black text-blue-600">{plan.price}</span>
                </div>
                <ul className="space-y-4 mb-10">
                   {plan.features.map((f, j) => (
                     <li key={j} className="flex gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                        {f}
                     </li>
                   ))}
                </ul>
                <Button to="/contacto" variant={plan.recommended ? 'primary' : 'outline'} className="w-full">Me interesa este plan</Button>
             </div>
           ))}
        </div>
      </Section>

      {/* 5. CTA */}
      <Section className="py-20 text-center bg-white">
        <div className="bg-slate-900 text-white p-8 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32"></div>
          <h3 className="text-2xl md:text-4xl font-black mb-6 relative z-10">¿Aún con dudas sobre la inversión?</h3>
          <p className="text-slate-400 text-lg mb-10 max-w-lg mx-auto relative z-10 leading-relaxed">
            Te explicamos por qué cada euro invertido volverá a tu negocio en forma de nuevos clientes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Button to="/contacto" variant="secondary" className="px-12 py-4 text-blue-600 font-black">
              Solicitar Presupuesto Gratis
            </Button>
            <Button to="/faq" variant="outline" className="px-12 py-4 border-white text-white hover:bg-white/10">
              Ver Preguntas Frecuentes
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Pricing;
