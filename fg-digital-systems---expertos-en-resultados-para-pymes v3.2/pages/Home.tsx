import React, { useRef } from 'react';
import { Section, Button, PricingCard, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { PRICING_PLANS, FAQS, REVIEWS, ROUTES } from '../constants';
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
  ArrowDown,
  PhoneCall,
  Globe,
  Star,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Target,
  BarChart3
} from 'lucide-react';
import { Link } from 'react-router';

const Home: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${CANONICAL_DOMAIN}/#organization`,
        "name": "FG Digital Systems",
        "url": CANONICAL_DOMAIN,
        "logo": {
          "@type": "ImageObject",
          "@id": `${CANONICAL_DOMAIN}/#logo`,
          "url": "https://i.imgur.com/ILoCkO3.png",
          "contentUrl": "https://i.imgur.com/ILoCkO3.png",
          "caption": "FG Digital Systems Logo"
        },
        "image": { "@id": `${CANONICAL_DOMAIN}/#logo` },
        "sameAs": [
          "https://www.linkedin.com/company/fg-digital-systems",
          "https://www.instagram.com/fgdigitalsystems"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+34694285438",
          "contactType": "customer service",
          "areaServed": "ES",
          "availableLanguage": ["Spanish", "English", "Italian"]
        }
      },
      {
        "@type": "WebSite",
        "@id": `${CANONICAL_DOMAIN}/#website`,
        "url": CANONICAL_DOMAIN,
        "name": "FG Digital Systems",
        "description": "Diseño Web y SEO Local para Pymes",
        "publisher": { "@id": `${CANONICAL_DOMAIN}/#organization` },
        "inLanguage": "es-ES"
      }
    ]
  };

  return (
    <main>
      <SEO {...METADATA.home} schema={homeSchema} />
      
      {/* 1. HERO - Optimizado para evitar espacio excesivo */}
      <section className="bg-white pt-8 md:pt-16 pb-12 md:pb-24 border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-900 rounded-full text-sm font-bold mb-6 border border-blue-100">
            <ShieldCheck size={16} className="text-blue-600" />
            Diseño Web y SEO Local para Pymes
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Diseño Web y SEO que atrae <span className="text-blue-600">clientes</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed">
           Creamos sistemas web pensados para que tu <strong>teléfono suene y entren contactos reales</strong>. Sin palabrería técnica ni cuotas mensuales obligatorias.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-10 py-5 text-lg shadow-2xl shadow-blue-500/20">
              Solicitar Propuesta Clara
            </Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-10 py-5 text-lg">
              Ver Packs y Precios
            </Button>
          </div>
          <div className="mt-12 text-slate-800 text-xs font-black uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100"><CircleCheck size={16} className="text-green-700" /> Pago único</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100"><CircleCheck size={16} className="text-green-700" /> Propiedad tuya</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100"><CircleCheck size={16} className="text-green-700" /> Sin permanencias</span>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMS & SOLUTIONS */}
      <Section className="bg-slate-50 border-y border-slate-100 py-12 md:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
            <div className="space-y-6 md:space-y-8">
              <div className="mb-4 md:mb-10">
                <span className="text-red-900 font-black uppercase tracking-widest text-xs mb-2 block">Tu situación actual</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Tu negocio está online, pero no vende...
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  { t: "“Mi web no me trae clientes”", d: "Es bonita, pero el teléfono no suena.", icon: <UserX className="text-red-700" /> },
                  { t: "“No aparezco en Google”", d: "Tus vecinos encuentran a tu competencia antes que a ti.", icon: <Search className="text-red-700" /> },
                  { t: "“Dependo solo del boca a boca”", d: "Si no te recomiendan hoy, no facturas mañana.", icon: <CircleAlert className="text-red-800" /> },
                  { t: "“Recibo mensajes de curiosos”", d: "Contactos que no compran y te hacen perder el tiempo.", icon: <MousePointerClick className="text-red-800" /> }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-red-100 transition-all">
                    <div className="bg-red-50 p-3 rounded-xl h-fit text-red-700">{p.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{p.t}</h3>
                      <p className="text-sm text-slate-700">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2rem] md:rounded-[3.5rem] p-8 md:p-14 text-white shadow-2xl relative flex flex-col justify-center">
              <div className="mb-10">
                <span className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-2 block italic">Nuestra solución</span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Así convertimos tu web en una máquina de contactos</h2>
              </div>
              <div className="space-y-8 md:space-y-10">
                {[
                  { step: "01", title: "Entendemos tu negocio", desc: "Analizamos qué vendes realmente y qué busca tu cliente local en Google.", icon: <Search /> },
                  { step: "02", title: "Diseñamos para convertir", desc: "Cada sección guía al usuario hacia WhatsApp o llamada. Sin distracciones.", icon: <TrendingUp /> },
                  { step: "03", title: "Google Maps + SEO", desc: "Hacemos que aparezcas el primero cuando te busquen en tu zona.", icon: <Zap /> }
                ].map((s, i) => (
                  <div key={i} className="flex gap-5 md:gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-950 flex items-center justify-center font-black text-white text-xl border border-white/20 group-hover:bg-white group-hover:text-blue-600 transition-all">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{s.title}</h3>
                      <p className="text-blue-50 text-sm md:text-base leading-relaxed opacity-90">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/20">
                <Button tallyId="q4GKJO" variant="secondary" className="w-full py-5 text-blue-600 font-black text-lg">
                  Solicitar Auditoría Gratis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. TRUST & DIFFERENCE */}
      <Section className="py-16 md:py-32 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">Por qué FG Digital Systems es diferente</h2>
            <p className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed">
              Mientras otras agencias te hablan de "branding holístico", nosotros nos centramos en lo único que paga tus facturas: <strong>que el cliente te llame.</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
               {[
                 { t: "Precios Públicos", d: "Sin presupuestos sorpresa." },
                 { t: "Cero Humos", d: "Herramientas que sirven." },
                 { t: "Webs Rápidas", d: "Optimizado para móvil." },
                 { t: "Foco en Venta", d: "Diseño para contactar." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-start">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full h-fit shrink-0">
                      <CircleCheck size={22} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">{item.t}</h3>
                      <p className="text-slate-700 text-sm leading-snug">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="order-1 lg:order-2 bg-slate-100 p-8 md:p-16 rounded-[3rem] border border-slate-200 shadow-sm">
             <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Agencia Tradicional</span>
                   </div>
                   <p className="text-slate-800 text-sm italic">"Te entregaremos un informe de 50 páginas sobre la psicología del color en tu logo..."</p>
                </div>
                <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800 md:translate-x-10">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest">FG DIGITAL SYSTEMS</span>
                   </div>
                   <p className="text-white font-bold text-lg leading-tight">"Pack Crecimiento: Web + SEO Maps. Listo en 10 días para que empieces a facturar."</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 4. PRICING */}
      <Section id="packs" className="bg-slate-50 border-y border-slate-200 py-16 md:py-24">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-3 block">Inversión Transparente</span>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">Tarifas claras, sin sorpresas</h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto">Selecciona el pack que mejor encaja con tu negocio actual.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* 5. IMAGE STRATEGY - Optimización de LCP */}
      <Section className="bg-white py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&q=80&w=1200" 
              alt="Optimización de diseño web para conversión" 
              className="rounded-[3rem] shadow-2xl border-8 border-slate-50"
              width="800"
              height="500"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
              <p className="text-3xl font-black">90+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Google Performance</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">Por qué necesitas un sistema, no solo una web</h2>
            <div className="space-y-6 text-slate-800 text-lg leading-relaxed">
              <p>
                La mayoría de negocios locales cometen el error de ver su web como un mueble: la instalan y se olvidan. Pero en 2026, si tu web no está optimizada para <strong>SEO Local y conversión</strong>, es invisible.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-center gap-4 font-bold"><Target className="text-blue-600 shrink-0" size={24} /> Estrategia basada en retorno de inversión.</li>
                <li className="flex items-center gap-4 font-bold"><BarChart3 className="text-blue-600 shrink-0" size={24} /> Decisiones basadas en datos de búsqueda reales.</li>
                <li className="flex items-center gap-4 font-bold"><BookOpen className="text-blue-600 shrink-0" size={24} /> Textos escritos para vender, no para rellenar.</li>
              </ul>
            </div>
            <Button tallyId="q4GKJO" variant="primary" className="px-12 py-5 shadow-xl">Quiero mi auditoría gratuita</Button>
          </div>
        </div>
      </Section>

      {/* 6. FINAL CTA */}
      <Section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white p-10 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
          <h2 className="text-3xl md:text-6xl font-black mb-8 leading-tight tracking-tight">¿Hablamos de cómo <br/> traer más clientes?</h2>
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-lg mx-auto">
            Te damos una propuesta clara y un presupuesto cerrado en menos de 24h.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-14 py-6 text-xl shadow-2xl shadow-blue-500/40">
              Solicitar Propuesta Ahora
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Home;