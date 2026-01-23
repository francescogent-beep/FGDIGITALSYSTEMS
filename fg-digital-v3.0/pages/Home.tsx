import React, { useRef } from 'react';
import { Section, Button, PricingCard, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { PRICING_PLANS, FAQS, REVIEWS } from '../constants';
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
          "caption": "FG Digital Systems Logo"
        },
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
        "publisher": { "@id": `${CANONICAL_DOMAIN}/#organization` },
        "inLanguage": "es-ES"
      },
      {
        "@type": "ProfessionalService",
        "@id": `${CANONICAL_DOMAIN}/#service`,
        "name": "FG Digital Systems",
        "image": "https://i.imgur.com/ILoCkO3.png",
        "url": CANONICAL_DOMAIN,
        "telephone": "+34694285438",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calle Rey Don Pedro I, 9",
          "addressLocality": "Murcia",
          "addressRegion": "Murcia",
          "postalCode": "30009",
          "addressCountry": "ES"
        }
      }
    ]
  };

  return (
    <main>
      <SEO {...METADATA.home} schema={homeSchema} />
      
      {/* 1. HERO - RESTORED DESIGN */}
      <section className="pt-20 md:pt-32 pb-16 md:pb-24 px-4 text-center bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full text-sm font-bold mb-6 border border-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ShieldCheck size={16} className="text-blue-600" />
            Diseño Web y SEO Local para Pymes
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Diseño Web y SEO que atrae <span className="text-blue-600">clientes</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
           Creamos sistemas web pensados para una sola cosa:<strong> que tu teléfono suene y entren contactos reales desde Google</strong>. Sin palabrería técnica ni cuotas escondidas.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button tallyId="q4GKJO" variant="primary" className="px-10 py-5 text-lg shadow-2xl shadow-blue-500/20">
              Solicitar Propuesta Clara
            </Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-10 py-5 text-lg">
              Ver Packs y Precios
            </Button>
          </div>
          
          <div className="mt-12 md:mt-16 text-slate-500 text-xs font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-8 gap-y-4 animate-in fade-in duration-1000 delay-500">
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg"><CircleCheck size={16} className="text-green-600" /> Pago único</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg"><CircleCheck size={16} className="text-green-600" /> Propiedad 100% tuya</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg"><CircleCheck size={16} className="text-green-600" /> Sin permanencias</span>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMS & SOLUTIONS */}
      <Section className="bg-slate-50 border-y border-slate-100 py-12 md:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <div className="space-y-8">
              <div>
                <span className="text-red-700 font-bold uppercase tracking-widest text-xs mb-3 block">Tu situación actual</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Tu negocio está online, pero...
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  { t: "“Mi web no me trae clientes”", d: "Es bonita, pero el teléfono no suena.", icon: <UserX className="text-red-600" /> },
                  { t: "“No aparezco en Google”", d: "Tus vecinos encuentran a tu competencia antes que a ti.", icon: <Search className="text-red-600" /> },
                  { t: "“Dependo solo del boca a boca”", d: "Si no te recomiendan hoy, no facturas mañana.", icon: <CircleAlert className="text-red-700" /> },
                  { t: "“Me contactan, pero no convierten”", d: "Recibes mensajes de curiosos que no compran nada.", icon: <MousePointerClick className="text-red-700" /> }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-2xl shadow-sm group hover:border-red-100 transition-all hover:shadow-md">
                    <div className="bg-red-50 p-2.5 rounded-xl h-fit group-hover:scale-110 transition-transform">{p.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-base">{p.t}</h3>
                      <p className="text-sm text-slate-600">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2.5rem] p-8 md:p-12 text-white shadow-2xl relative flex flex-col justify-center lg:translate-y-4">
              <div className="mb-8">
                <span className="text-blue-50 font-bold uppercase tracking-widest text-xs mb-3 block italic">Nuestra solución</span>
                <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">Así convertimos una web en una máquina de contactos</h2>
              </div>
              <div className="space-y-8">
                {[
                  { step: "01", title: "Entendemos tu negocio", desc: "No plantillas genéricas. Analizamos qué vendes, a quién y cómo te buscan.", icon: <Search /> },
                  { step: "02", title: "Diseñamos para contactar", desc: "Cada sección tiene un objetivo: llamada, WhatsApp o formulario. Nada está ahí “porque queda bonito”.", icon: <TrendingUp /> },
                  { step: "03", title: "Google + Conversión", desc: "Estructura clara para Google, recorrido claro para el cliente. Tu web trabaja para ti 24/7.", icon: <Zap /> }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 relative group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center font-black text-white text-xl border border-white/30 group-hover:bg-white group-hover:text-blue-600 transition-all shadow-lg">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{s.title}</h3>
                      <p className="text-blue-50 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-8 border-t border-white/20">
                <Button tallyId="q4GKJO" variant="secondary" className="w-full py-5 text-blue-600 font-black shadow-xl">
                  Solicitar Propuesta Clara
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. LA DIFERENCIA */}
      <Section className="py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">Por qué FG Digital Systems es diferente</h2>
            <p className="text-lg text-slate-700 mb-10 leading-relaxed">
              Mientras otras agencias te hablan de "transformación digital", nosotros nos centramos en lo único que te importa: <strong>que tu teléfono suene.</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
               {[
                 { t: "Precios Públicos", d: "Sin presupuestos sorpresa." },
                 { t: "Cero Humos", d: "Herramientas que sirven." },
                 { t: "Webs Rápidas", d: "Optimizado para móvil." },
                 { t: "Foco en Venta", d: "Diseño para contactar." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center group">
                    <div className="bg-blue-100 text-blue-600 p-2.5 rounded-full h-fit shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <CircleCheck size={20} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-xl leading-tight mb-1">{item.t}</h3>
                      <p className="text-slate-600 text-sm leading-tight">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="order-1 md:order-2 bg-slate-100 p-8 md:p-12 rounded-[3rem] border border-slate-200 relative overflow-hidden group shadow-inner">
             <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600"></div>
             <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Agencia Tradicional</span>
                   </div>
                   <p className="text-slate-600 text-sm italic">"Vendemos sistemas holísticos digitales en 3 meses..."</p>
                </div>
                <div className="bg-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-800 transform md:translate-x-6 scale-105">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2.5 h-2.5 bg-green-400 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest">FG DIGITAL SYSTEMS</span>
                   </div>
                   <p className="text-white font-bold text-lg leading-tight">"Pack Inicial: 690€. Lanzamos en 5 días."</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 4. PRICING */}
      <Section id="packs" className="bg-slate-50 border-t border-slate-200 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">Inversión clara, resultados directos</h2>
          <p className="text-slate-700 text-lg max-w-xl mx-auto font-medium">Selecciona el pack que encaja con tu negocio.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* 5. REVIEWS CAROUSEL */}
      <Section className="bg-white py-16 md:py-32 overflow-hidden">
        <div className="text-center mb-16 px-4">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-3 block">Opiniones Reales</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Historias de negocios como el tuyo</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">Muchos negocios ya han confiado en nuestro sistema para digitalizar su captación de clientes.</p>
        </div>
        
        <div className="relative group max-w-6xl mx-auto px-4">
          {/* Controls */}
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={() => scroll('left')}
              className="p-4 bg-white border border-slate-200 rounded-full shadow-lg text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all active:scale-90"
              aria-label="Anterior"
            >
              <ChevronLeft size={28} />
            </button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 hidden md:block">
            <button 
              onClick={() => scroll('right')}
              className="p-4 bg-white border border-slate-200 rounded-full shadow-lg text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all active:scale-90"
              aria-label="Siguiente"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Carousel Body */}
          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12"
          >
            {REVIEWS.map((review, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-500 group hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-6 text-blue-600">
                  {[...Array(review.stars)].map((_, j) => (
                    <Star key={j} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-700 italic mb-10 flex-grow text-lg leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-slate-200/60">
                  <div className="w-14 h-14 bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-600 font-black text-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-black text-slate-900 leading-tight text-lg">{review.name}</p>
                    <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-1">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-8">¿Quieres ser nuestro próximo caso de éxito?</p>
          <Button tallyId="q4GKJO" variant="primary" className="px-12 py-5 text-xl">Solicitar Mi Propuesta</Button>
        </div>
      </Section>

      {/* 6. RESULTS */}
      <Section className="bg-slate-50 py-16 md:py-32 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-blue-600 font-black uppercase tracking-widest text-[11px] mb-3 block">Directo al grano</span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Esto es lo que consiguen nuestros clientes</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">No vendemos humo, vendemos herramientas que impulsan la facturación diaria de negocios locales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-600 text-white p-5 rounded-[1.5rem] mb-8 shadow-lg shadow-blue-500/20">
                <PhoneCall size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Más contactos reales</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Tu teléfono sonará más a menudo. Optimizamos cada rincón de la web para que las visitas se conviertan en llamadas y mensajes de WhatsApp.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-600 text-white p-5 rounded-[1.5rem] mb-8 shadow-lg shadow-blue-500/20">
                <Globe size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Dominio en Maps</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Aparecerás cuando tus vecinos busquen tus servicios cerca de ti. No hace falta que estén en tu puerta para que sepan que eres la mejor opción.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-600 text-white p-5 rounded-[1.5rem] mb-8 shadow-lg shadow-blue-500/20">
                <Zap size={36} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Imagen de Profesional</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                Genera confianza inmediata. Una web rápida y moderna le dice al cliente que eres serio y que puede confiar en tu servicio.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ SNAPSHOT */}
      <Section className="bg-white py-16 md:py-32">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">¿Dudas? Resolvemos las más comunes</h2>
            <p className="text-slate-700 text-lg">Transparencia total antes de empezar.</p>
          </div>
          <div className="space-y-4">
            {FAQS.slice(0, 4).map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/preguntas-frecuentes" className="text-blue-600 font-bold flex items-center justify-center gap-2 hover:underline text-lg">
              Ver todas las preguntas <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </Section>

      {/* 8. IMAGE STRATEGY */}
      <Section className="bg-slate-50 py-16 md:py-32 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 px-4 md:px-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&q=70&w=1200" 
                alt="Optimización de diseño web y SEO para negocios locales" 
                className="rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] border-8 border-white"
                width="800"
                height="500"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-blue-600 text-white p-8 rounded-[2rem] shadow-2xl hidden md:block border-4 border-white animate-bounce-slow">
                <p className="text-4xl font-black">90+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mt-1">PageSpeed Score</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-8 px-4 md:px-0">
            <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">Por qué necesitas un sistema, no solo una web</h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
              <p className="text-lg">
                La mayoría de los negocios locales cometen el error de comprar una página web como si fuera un mueble: la instalan y se olvidan. Pero en 2026, una web que no está optimizada para <strong>SEO Local</strong> y <strong>conversión inmediata</strong> es dinero tirado a la basura.
              </p>
              <p className="text-lg">
                En <strong>FG Digital Systems</strong> diseñamos herramientas que actúan como tu mejor comercial. Analizamos las palabras clave que tus clientes locales buscan exactamente, optimizamos la velocidad de carga para que nadie abandone por impaciencia y facilitamos el contacto vía WhatsApp para cerrar ventas en minutos.
              </p>
              <ul className="list-none p-0 space-y-5 mt-10">
                <li className="flex items-center gap-4 font-bold text-slate-900 text-lg">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><Target size={24} /></div> Foco total en el retorno de inversión.
                </li>
                <li className="flex items-center gap-4 font-bold text-slate-900 text-lg">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><BarChart3 size={24} /></div> Estrategia basada en datos reales de búsqueda.
                </li>
                <li className="flex items-center gap-4 font-bold text-slate-900 text-lg">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600"><BookOpen size={24} /></div> Contenido redactado para vender y posicionar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 9. FINAL CTA */}
      <Section className="py-24 md:py-32 text-center bg-white px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white p-10 md:p-24 rounded-[3.5rem] shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 group-hover:h-3 transition-all"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
          
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tight relative z-10">¿Hablamos de cómo <br className="hidden md:block"/> traer más clientes?</h2>
          <p className="text-slate-400 text-xl md:text-2xl mb-12 max-w-xl mx-auto leading-relaxed relative z-10">
            Te damos una propuesta clara y un presupuesto cerrado en menos de 24h.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 relative z-10">
            <Button tallyId="q4GKJO" variant="primary" className="px-14 py-6 text-xl w-full sm:w-auto shadow-2xl shadow-blue-500/40">
              Solicitar Propuesta Clara
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Home;
