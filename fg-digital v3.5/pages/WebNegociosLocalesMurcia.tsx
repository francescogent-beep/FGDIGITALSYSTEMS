import React from 'react';
import { Section, Button, PricingCard, FAQAccordion, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { PRICING_PLANS } from '../constants';
import { 
  ArrowRight, 
  CircleCheck, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Search, 
  UserX, 
  CircleAlert, 
  MousePointerClick,
  Clock,
  UserCheck,
  CreditCard,
  Lock,
  ArrowDown,
  PhoneCall,
  Globe,
  MessageCircle,
  Calendar,
  CheckCircle2,
  Layout
} from 'lucide-react';
import { Link } from 'react-router';

const WebNegociosLocalesMurcia: React.FC = () => {
  const faqs = [
    { question: "¿Cómo me contactarán los clientes de Murcia?", answer: "Integramos botones de WhatsApp directo, formularios simplificados y botones de llamada para que el contacto sea instantáneo desde el móvil del cliente." },
    { question: "¿La web incluye sistema de reservas en la Región?", answer: "Sí, podemos integrar calendarios inteligentes para que tus clientes murcianos reserven cita directamente sin que tengas que coger el teléfono." },
    { question: "¿Funciona para cualquier sector en Murcia?", answer: "Absolutamente. Está diseñado para clínicas, abogados, reformas, restaurantes y cualquier servicio en la Región que necesite clientes locales." },
    { question: "¿Tengo que pagar una cuota mensual por los leads?", answer: "No. En FG Advisory pagas por el sistema y es tuyo. No cobramos comisiones por los contactos que generes." },
    { question: "¿Es fácil de gestionar por mi cuenta?", answer: "Te entregamos un sistema que no requiere conocimientos técnicos. Cambiar una oferta o un horario será coser y cantar." }
  ];

  const salesSystemSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_DOMAIN}${METADATA.webNegociosLocalesMurcia.path}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": "Web para Negocios Murcia" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_DOMAIN}${METADATA.webNegociosLocalesMurcia.path}/#webpage`,
        "url": `${CANONICAL_DOMAIN}${METADATA.webNegociosLocalesMurcia.path}`,
        "name": "Web para Negocios Locales en Murcia | Sistemas de Venta",
        "isPartOf": { "@id": `${CANONICAL_DOMAIN}/#website` },
        "breadcrumb": { "@id": `${CANONICAL_DOMAIN}${METADATA.webNegociosLocalesMurcia.path}/#breadcrumb` },
        "inLanguage": "es-ES"
      },
      {
        "@type": "Service",
        "name": "Sistemas de Captación de Leads para Negocios Murcianos",
        "description": "Diseño de embudos de venta y captación de clientes locales en Murcia.",
        "provider": { "@id": `${CANONICAL_DOMAIN}/#organization` },
        "areaServed": [
          {
            "@type": "City",
            "@id": "https://www.wikidata.org/wiki/Q12225",
            "name": "Murcia",
            "sameAs": "https://es.wikipedia.org/wiki/Murcia"
          }
        ]
      }
    ]
  };

  return (
    <main>
      <SEO {...METADATA.webNegociosLocalesMurcia} schema={salesSystemSchema} />
      
      {/* 1. HERO */}
      <Section className="pt-12 md:pt-32 pb-10 md:pb-16 text-center bg-slate-50">
        <Breadcrumbs items={[{ label: 'Web Captación Murcia' }]} />
        <div className="max-w-7xl mx-auto mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-bold mb-6 border border-blue-200">
            <MousePointerClick size={16} />
            Especialistas en Captación de Leads en Murcia
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 text-balance tracking-tight">
            Webs para captar clientes <span className="text-blue-600">en Murcia.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 mb-10 md:mb-12 max-w-7xl mx-auto leading-relaxed">
            Especialistas en negocios murcianos de servicios. Si eres autónomo o PYME en Murcia, necesitas una web que <strong>convierta visitas en dinero.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-10 py-5 text-lg shadow-2xl shadow-blue-500/20">
              Ver Packs Locales Murcia
            </Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-10 py-5 text-lg">
              Ver Tarifas de Venta
            </Button>
          </div>
          <div className="mt-10 md:mt-12 text-slate-400 text-xs font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-500" /> WhatsApp Directo</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-500" /> Sin Comisiones</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-500" /> 100% Conversión</span>
          </div>
        </div>
      </Section>

      {/* 2. PROBLEMS & SOLUTIONS */}
      <Section className="bg-white border-y border-slate-100 py-8 md:py-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
            <div className="space-y-6 md:space-y-8">
              <div className="mb-4 md:mb-10">
                <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2 block">Dudas de captación</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  ¿Recibes pocas llamadas en Murcia?
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  { t: "“El WhatsApp está vacío”", d: "Tu web no invita al cliente murciano a iniciar la conversación.", icon: <MessageCircle className="text-red-500" /> },
                  { t: "“Me pierdo en llamadas perdidas”", d: "No tienes un sistema que capture los datos cuando no estás.", icon: <PhoneCall className="text-red-500" /> },
                  { t: "“La gente solo entra y sale”", d: "Tu tasa de rebote es alta porque no ofreces una solución rápida.", icon: <UserX className="text-red-500" /> },
                  { t: "“No tengo reservas online”", d: "Sigues anotando citas en papel como hace 20 años.", icon: <Calendar className="text-red-500" /> }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 p-4 md:p-5 bg-white border border-slate-100 rounded-2xl shadow-sm group hover:border-red-100">
                    <div className="bg-red-50 p-2.5 rounded-xl h-fit">{p.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm md:text-base">{p.t}</h4>
                      <p className="text-xs md:text-sm text-slate-700">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-white shadow-2xl relative flex flex-col justify-center mt-8 lg:mt-0">
              <div className="mb-6 md:mb-10">
                <span className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-2 block italic">Sistemas de Venta Murcia</span>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">Tu comercial 24/7 en la Región</h2>
              </div>
              <div className="space-y-6 md:space-y-8">
                {[
                  { step: "01", title: "Copywriting Murciano", desc: "Textos escritos para convencer al cliente local.", icon: <TrendingUp className="text-white" /> },
                  { step: "02", title: "Embudos Directos", desc: "Guíamos al usuario hacia el botón de contacto sin rodeos.", icon: <Zap className="text-white" /> },
                  { step: "03", title: "Automatización de Citas", desc: "Deja que tu web agende por ti mientras trabajas.", icon: <Calendar className="text-white" /> }
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 relative group">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center font-black text-blue-200 text-lg md:text-xl border border-white/20 group-hover:bg-white group-hover:text-blue-600">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="text-lg md:text-xl font-bold mb-1">{s.title}</h4>
                      <p className="text-blue-100/80 text-xs md:text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
                <Button tallyId="q4GKJO" variant="secondary" className="w-full py-4 text-blue-600 font-black">
                  Solicitar Propuesta Murcia
                </Button>
              </div>
            </div>
          </div>
      </Section>

      {/* 3. LA DIFERENCIA */}
      <Section className="py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight">Venta pura para negocios de Murcia</h2>
            <p className="text-base md:text-lg text-slate-700 mb-8 md:mb-10 leading-relaxed">
              Mientras otros se centran en el diseño artístico, nosotros nos centramos en <strong>que tu teléfono no pare de sonar.</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
               {[
                 { t: "WhatsApp Directo", d: "El canal preferido murciano." },
                 { t: "Formularios de Venta", d: "Diseñados para filtrar interesados." },
                 { t: "Sin Comisiones", d: "El beneficio es 100% tuyo." },
                 { t: "Hosting de Alta Velocidad", d: "Carga instantánea en toda la Región." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center group">
                    <div className="bg-blue-100 text-blue-600 p-2.5 rounded-full h-fit shrink-0 group-hover:bg-blue-600 group-hover:text-white">
                      <CheckCircle2 size={20} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg md:text-xl leading-tight mb-1">{item.t}</h4>
                      <p className="text-slate-700 text-sm md:text-base leading-tight">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="order-1 md:order-2 bg-slate-100 p-6 md:p-12 rounded-[2rem] border border-slate-200 relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
             <div className="space-y-4 md:space-y-6">
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-200">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-slate-400">Web Estática</span>
                   </div>
                   <p className="text-slate-700 text-xs italic">"Mi web solo tiene un número de teléfono perdido abajo..."</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-800">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-blue-400">FG SALES SYSTEM MURCIA</span>
                   </div>
                   <p className="text-white font-bold text-base leading-tight">"Recibo 3 WhatsApps de nuevos clientes al día."</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 4. TRUST BAR */}
      <Section className="bg-white py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-slate-900">Tu aliado comercial en Murcia</h2>
          <p className="text-slate-600 text-sm md:text-lg">Convertimos visitas anónimas en clientes reales.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
          {[
            { title: "WhatsApp CRM", desc: "Gestión directa.", icon: <MessageCircle className="w-6 h-6" /> },
            { title: "Reserva Citas", icon: <Calendar className="w-6 h-6" />, desc: "Agenda llena." },
            { title: "Pago Seguro", icon: <ShieldCheck className="w-6 h-6" />, desc: "Confianza total." },
            { title: "Leads Filtrados", icon: <UserCheck className="w-6 h-6" />, desc: "Calidad vs Cantidad." },
            { title: "Ventas 24/7", icon: <Zap className="w-6 h-6" />, desc: "Negocio siempre activo.", featured: true }
          ].map((item, i) => (
            <div key={i} className={`p-4 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50 group ${item.featured ? 'col-span-2 md:col-span-1' : ''}`}>
              <div className="text-blue-600 mb-3 bg-white p-3 rounded-xl shadow-sm">
                {item.icon}
              </div>
              <h4 className="font-extrabold text-slate-900 mb-1 text-[11px] md:text-sm">{item.title}</h4>
              <p className="text-slate-700 text-[10px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. PRICING */}
      <Section id="packs" className="bg-slate-50 border-t border-slate-200">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-slate-900">Packs de Captación Local</h2>
          <p className="text-slate-700 text-sm md:text-base max-w-7xl mx-auto">Selecciona el sistema que te traerá clientes en Murcia.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* 6. RESULTS */}
      <Section className="bg-white py-12 md:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Casos de Captación en Murcia</h2>
            <p className="text-slate-600 max-w-7xl mx-auto">Sistemas que han revolucionado negocios murcianos de servicios.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <MousePointerClick size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Más Leads de Calidad</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Tus formularios no solo recibirán spam. Recibirás clientes de Murcia preguntando por servicios específicos.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <MessageCircle size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Atención Inmediata</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                El murciano agradece la rapidez. Con WhatsApp integrado, cerrarás ventas en minutos desde tu propio móvil.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Calendar size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Agenda Optimizada</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Si vendes citas, tu web se encargará de rellenar los huecos libres sin que muevas un solo dedo.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ */}
      <Section className="bg-slate-50 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Preguntas sobre Captación Murcia</h2>
            <p className="text-slate-700">Resolvemos las dudas de conversión para la Región.</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Section>

      {/* 8. FINAL CTA */}
      <Section className="py-20 text-center bg-white">
        <div className="max-w-7xl mx-auto bg-slate-900 text-white p-8 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight">¿Convertimos tu web <br/> en un imán de clientes?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-7xl mx-auto leading-relaxed">
            Consigue hoy mismo tu propuesta personalizada y empieza a vender más en Murcia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contacto" variant="primary" className="px-12 py-4 md:px-14 md:py-6 text-xl w-full sm:w-auto">
              Propuesta Captación Murcia
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default WebNegociosLocalesMurcia;