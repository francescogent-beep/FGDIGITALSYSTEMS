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
          "url": "https://i.imgur.com/ILoCkO3.png"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${CANONICAL_DOMAIN}/#website`,
        "url": CANONICAL_DOMAIN,
        "name": "FG Digital Systems",
        "inLanguage": "es-ES"
      }
    ]
  };

  return (
    <main>
      <SEO {...METADATA.home} schema={homeSchema} />
      
      {/* 1. HERO - Padding reducido para móvil */}
      <section className="bg-white pt-10 md:pt-20 pb-12 md:pb-24 border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-900 rounded-full text-[10px] md:text-sm font-black mb-6 border border-blue-100 uppercase tracking-widest">
            <ShieldCheck size={14} className="text-blue-600" />
            Diseño Web y SEO Local para Pymes
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
            Diseño Web y SEO que atrae <span className="text-blue-600">clientes</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-700 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
           Creamos sistemas web pensados para que tu <strong>teléfono suene y entren contactos reales</strong>. Sin cuotas mensuales obligatorias.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-10 py-5 text-lg shadow-2xl shadow-blue-500/20">
              Solicitar Propuesta Clara
            </Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-10 py-5 text-lg">
              Ver Packs y Precios
            </Button>
          </div>
          <div className="mt-12 text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><CircleCheck size={14} className="text-green-700" /> Pago único</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><CircleCheck size={14} className="text-green-700" /> Propiedad tuya</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><CircleCheck size={14} className="text-green-700" /> Sin permanencias</span>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMS & SOLUTIONS */}
      <Section className="bg-slate-50 border-y border-slate-100 py-16 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <div className="space-y-8">
              <div className="mb-4 md:mb-10">
                <span className="text-red-700 font-black uppercase tracking-widest text-xs mb-2 block">Tu situación actual</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Tu negocio está online, pero no vende...
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  { t: "“Mi web no me trae clientes”", d: "Es bonita, pero el teléfono no suena.", icon: <UserX /> },
                  { t: "“No aparezco en Google”", d: "Tus vecinos encuentran a tu competencia antes.", icon: <Search /> },
                  { t: "“Dependo solo del boca a boca”", d: "Si no te recomiendan hoy, no facturas mañana.", icon: <CircleAlert /> }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
                    <div className="bg-red-50 p-3 rounded-xl h-fit text-red-700">{p.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base">{p.t}</h3>
                      <p className="text-sm text-slate-600 font-medium">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-16 text-white shadow-2xl relative flex flex-col justify-center">
              <div className="mb-10">
                <span className="text-white font-black uppercase tracking-widest text-[10px] mb-2 block opacity-80">Nuestra solución</span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white tracking-tight">Convertimos tu web en una máquina de contactos</h2>
              </div>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Entendemos tu negocio", desc: "Analizamos qué buscas realmente tu cliente local.", icon: <Search /> },
                  { step: "02", title: "Diseñamos para convertir", desc: "Cada sección guía al usuario hacia WhatsApp o llamada.", icon: <TrendingUp /> },
                  { step: "03", title: "Google Maps + SEO", desc: "Hacemos que aparezcas primero en tu zona.", icon: <Zap /> }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-950 flex items-center justify-center font-black text-white text-xl border border-white/20">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{s.title}</h3>
                      <p className="text-blue-50 text-base leading-relaxed font-medium">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-white/20 text-center">
                <Button tallyId="q4GKJO" variant="secondary" className="w-full py-5 text-blue-600 font-black text-lg">
                  Solicitar Auditoría Gratis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. IMAGE STRATEGY - ELIMINACIÓN DE BLOQUEO LCP */}
      <Section className="bg-white py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* OPTIMIZACIÓN LCP: w=600 y q=60 es ideal para móviles */}
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&q=60&w=600" 
              alt="Optimización de diseño web para conversión" 
              className="rounded-[3rem] shadow-2xl border-8 border-slate-50 w-full h-auto bg-slate-100"
              width="600"
              height="400"
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
            <div className="space-y-6 text-slate-800 text-lg leading-relaxed font-medium">
              <p>
                La mayoría de negocios locales cometen el error de ver su web como un mueble. Pero en 2026, si tu web no está optimizada para <strong>SEO Local y conversión</strong>, es simplemente invisible.
              </p>
              <ul className="grid gap-4">
                <li className="flex items-center gap-4 font-bold text-slate-900"><Target className="text-blue-600 shrink-0" size={24} /> Estrategia basada en retorno de inversión.</li>
                <li className="flex items-center gap-4 font-bold text-slate-900"><BarChart3 className="text-blue-600 shrink-0" size={24} /> Decisiones basadas en datos de búsqueda reales.</li>
                <li className="flex items-center gap-4 font-bold text-slate-900"><BookOpen className="text-blue-600 shrink-0" size={24} /> Textos escritos para vender, no para rellenar.</li>
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
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-lg mx-auto font-medium leading-relaxed">
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
