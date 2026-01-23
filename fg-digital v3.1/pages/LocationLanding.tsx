import React, { useRef } from 'react';
import { useParams, Navigate } from 'react-router';
import { Section, Button, PricingCard, FAQAccordion, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { PRICING_PLANS, REVIEWS } from '../constants';
import { CANONICAL_DOMAIN } from '../seo/metadata';
import { 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Search, 
  CircleCheck, 
  PhoneCall, 
  Globe, 
  Layout, 
  Smartphone, 
  MousePointerClick,
  MapPin,
  Star,
  ZapOff,
  UserCheck,
  BarChart3,
  Target,
  BookOpen,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface LocationLandingProps {
  type: 'design' | 'seo' | 'maps' | 'leads';
}

const WIKIDATA_MAP: Record<string, string> = {
  'murcia': 'https://www.wikidata.org/wiki/Q12225',
  'cartagena': 'https://www.wikidata.org/wiki/Q172831',
  'lorca': 'https://www.wikidata.org/wiki/Q492441',
  'elche': 'https://www.wikidata.org/wiki/Q10530',
  'molina-de-segura': 'https://www.wikidata.org/wiki/Q923315'
};

const formatCityName = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const LocationLanding: React.FC<LocationLandingProps> = ({ type }) => {
  const { city } = useParams<{ city: string }>();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  if (!city) return <Navigate to="/" replace />;
  
  const cityName = formatCityName(city);
  const cityWiki = WIKIDATA_MAP[city] || `https://es.wikipedia.org/wiki/${cityName.replace(' ', '_')}`;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const configs = {
    design: {
      title: `Diseño Web en ${cityName} | Webs que Venden`,
      h1: `Diseño Web en ${cityName}: <span class="text-blue-600">Webs que venden.</span>`,
      sub: `No diseñamos "folletos digitales" que nadie mira. Creamos máquinas de captación de clientes para negocios en ${cityName} con precios cerrados.`,
      icon: <Layout className="text-blue-600" />,
      features: [
        { t: "Entrega Rápida", d: "Tu web lista en días, no meses." },
        { t: "SEO Local Base", d: `Preparada para Google ${cityName}.` },
        { t: "Mobile First", d: "Perfecta en cualquier móvil." },
        { t: "Autogestionable", d: "Cambia tus precios tú mismo." }
      ]
    },
    seo: {
      title: `Posicionamiento Google en ${cityName} | SEO Real`,
      h1: `Posicionamiento en Google <span class="text-blue-600">para negocios de ${cityName}.</span>`,
      sub: `Si no estás en la primera página, no existes. Ayudamos a las pymes de ${cityName} a superar a su competencia y atraer tráfico real.`,
      icon: <TrendingUp className="text-blue-600" />,
      features: [
        { t: "Keywords Locales", d: `Atacamos los términos de ${cityName}.` },
        { t: "SEO Técnico Sólido", d: "Sin errores de indexación." },
        { t: "Reportes Mensuales", d: "Para que veas tu crecimiento." },
        { t: "Foco en el ROI", d: "Posicionamos para vender." }
      ]
    },
    maps: {
      title: `SEO Local y Google Maps en ${cityName} | Top 3`,
      h1: `Domina <span class="text-blue-600">Google Maps</span> en ${cityName}.`,
      sub: `Hacemos que tu negocio aparezca el primero cuando tus vecinos de ${cityName} busquen tus servicios. Sin pagar anuncios.`,
      icon: <MapPin className="text-blue-600" />,
      features: [
        { t: "Aparece en el Top 3", d: "Donde están el 70% de clics." },
        { t: "Gestión de Reseñas", d: "Multiplica la confianza local." },
        { t: "Fotos Optimizadas", d: "Enseña lo mejor de tu local." },
        { t: "Foco en Llamadas", d: "Convierte visitas en llamadas." }
      ]
    },
    leads: {
      title: `Web para Negocios Locales en ${cityName} | Captación`,
      h1: `Webs para captar clientes <span class="text-blue-600">en ${cityName}.</span>`,
      sub: `Especialistas en negocios de servicios en ${cityName}. Si eres autónomo o PYME, necesitas una web que convierta visitas en dinero.`,
      icon: <MousePointerClick className="text-blue-600" />,
      features: [
        { t: "WhatsApp Directo", d: "El canal preferido de los clientes." },
        { t: "Formularios de Venta", d: "Diseñados para filtrar interesados." },
        { t: "Sin Comisiones", d: "El beneficio es 100% tuyo." },
        { t: "Alta Velocidad", d: `Carga instantánea en todo ${cityName}.` }
      ]
    }
  };

  const current = configs[type];
  const pagePath = type === 'design' ? 'diseno-web' : type === 'seo' ? 'posicionamiento-google' : type === 'maps' ? 'seo-maps' : 'web-negocios';

  const locationSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_DOMAIN}/${pagePath}/${city}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": cityName }
        ]
      },
      {
        "@type": "Service",
        "@id": `${CANONICAL_DOMAIN}/${pagePath}/${city}/#service`,
        "name": current.title,
        "description": current.sub,
        "provider": { "@id": `${CANONICAL_DOMAIN}/#organization` },
        "areaServed": {
          "@type": "City",
          "@id": cityWiki,
          "name": cityName,
          "address": { "@type": "PostalAddress", "addressLocality": cityName, "addressCountry": "ES" }
        },
        "brand": { "@id": `${CANONICAL_DOMAIN}/#organization` }
      }
    ]
  };

  return (
    <main className="bg-white min-h-screen">
      <SEO 
        title={current.title} 
        description={current.sub} 
        path={`/${pagePath}/${city}`}
        schema={locationSchema}
      />

      {/* 1. Hero - REDUCED TOP PADDING */}
      <section className="pt-10 md:pt-20 pb-16 md:pb-24 px-4 text-center bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: cityName }]} />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full text-sm font-bold mb-6 border border-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ShieldCheck size={16} className="text-blue-600" />
            Especialistas en {cityName}
          </div>
          
          <h1 
            className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000" 
            dangerouslySetInnerHTML={{ __html: current.h1 }} 
          />
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            {current.sub}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button tallyId="q4GKJO" variant="primary" className="px-10 py-5 text-lg shadow-2xl shadow-blue-500/20">
              Presupuesto en {cityName}
            </Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-10 py-5 text-lg">
              Ver Packs y Precios
            </Button>
          </div>
          
          <div className="mt-12 md:mt-16 text-slate-500 text-xs font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-8 gap-y-4 animate-in fade-in duration-1000 delay-500">
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg"><CircleCheck size={16} className="text-green-600" /> Pago único</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg"><CircleCheck size={16} className="text-green-600" /> Sin cuotas mensuales</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg"><CircleCheck size={16} className="text-green-600" /> Propiedad tuya</span>
          </div>
        </div>
      </section>

      {/* 2. Comparativa */}
      <Section className="py-12 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight">Tu negocio en {cityName} merece un sistema real</h2>
            <p className="text-base md:text-lg text-slate-700 mb-8 md:mb-10 leading-relaxed">
              Muchos negocios en {cityName} se conforman con "estar online". Nosotros construimos una infraestructura que <strong>te hace destacar sobre toda tu competencia local.</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
               {current.features.map((item, i) => (
                 <div key={i} className="flex gap-4 items-center group">
                    <div className="bg-blue-100 text-blue-600 p-2.5 rounded-full h-fit shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <CircleCheck size={20} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">{item.t}</h3>
                      <p className="text-slate-600 text-sm leading-tight">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="order-1 md:order-2 bg-slate-900 p-8 md:p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
             <h3 className="text-2xl font-black mb-6 relative z-10">Estrategia Ganadora en {cityName}</h3>
             <p className="text-slate-400 mb-8 relative z-10 leading-relaxed">
               No importa si estás en el centro o en las afueras. Nuestra metodología está pensada para que domines tu zona geográfica y código postal.
             </p>
             <ul className="space-y-4 relative z-10">
               <li className="flex items-center gap-3 font-bold"><Zap size={18} className="text-blue-400" /> Resultados medibles.</li>
               <li className="flex items-center gap-3 font-bold"><ShieldCheck size={18} className="text-blue-400" /> Sin contratos trampa.</li>
               <li className="flex items-center gap-3 font-bold"><Globe size={18} className="text-blue-400" /> Líderes en la zona.</li>
             </ul>
          </div>
        </div>
      </Section>

      {/* 3. Pricing */}
      <Section id="packs" className="py-12 md:py-24 bg-white">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">Inversión Transparente</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Planes para {cityName}</h2>
          <p className="text-slate-600 max-w-xl mx-auto">Selecciona el pack que mejor encaja con tus objetivos actuales.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* 4. Detailed Results */}
      <Section className="bg-slate-50 py-12 md:py-20 border-y border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-2 block">Impacto Real</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Lo que conseguimos en {cityName}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Herramientas diseñadas para que el negocio local facture más cada día.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <PhoneCall size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Más reservas y citas</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Tu teléfono será tu mejor aliado. Optimizamos la web para que las visitas en {cityName} se conviertan en clics directos al botón de llamar.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visibilidad en el Mapa</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Domina las búsquedas de tu barrio. Aparecerás cuando tus vecinos busquen tus servicios en su móvil por {cityName}.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Carga Instantánea</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Nadie espera. Tu web en {cityName} cargará en menos de 2 segundos, evitando que tus clientes potenciales se vayan a la competencia.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Image Content Ratio */}
      <Section className="bg-white py-12 md:py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt={`Servicios digitales en ${cityName}`} 
                className="rounded-[2.5rem] shadow-2xl border-8 border-slate-50"
                width="800"
                height="500"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-3xl shadow-xl hidden md:block">
                <p className="text-2xl font-black">90+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">PageSpeed Local</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Liderazgo Digital en {cityName}</h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
              <p>
                En el mercado de {cityName}, la proximidad es la clave. Tu web y tu SEO deben estar alineados para que el algoritmo de Google te asocie con la relevancia que tu negocio merece.
              </p>
              <p>
                En <strong>FG Digital Systems</strong> implementamos estrategias que funcionan. No son experimentos; son sistemas probados para que las Pymes y autónomos de {cityName} dejen de ser invisibles.
              </p>
              <ul className="list-none p-0 space-y-3">
                <li className="flex items-center gap-3 font-bold text-slate-900">
                  <Target size={20} className="text-blue-600" /> ROI enfocado al cliente de {cityName}.
                </li>
                <li className="flex items-center gap-3 font-bold text-slate-900">
                  <BarChart3 size={20} className="text-blue-600" /> Datos reales, nada de suposiciones.
                </li>
                <li className="flex items-center gap-3 font-bold text-slate-900">
                  <BookOpen size={20} className="text-blue-600" /> Web redactada para vender en tu zona.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Reviews Carousel */}
      <Section className="bg-slate-50 py-12 md:py-24 overflow-hidden border-y border-slate-100">
        <div className="text-center mb-16 px-4">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">Clientes Satisfechos</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Experiencias cerca de {cityName}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Lo que opinan otros profesionales que ya han confiado en nosotros.</p>
        </div>
        
        <div className="relative group max-w-6xl mx-auto px-4">
          <div className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 z-10 hidden md:block">
            <button onClick={() => scroll('left')} className="p-3 bg-white border border-slate-200 rounded-full shadow-lg text-slate-400 hover:text-blue-600 transition-all"><ChevronLeft size={24} /></button>
          </div>
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 z-10 hidden md:block">
            <button onClick={() => scroll('right')} className="p-3 bg-white border border-slate-200 rounded-full shadow-lg text-slate-400 hover:text-blue-600 transition-all"><ChevronRight size={24} /></button>
          </div>

          <div ref={scrollRef} className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start p-8 rounded-3xl bg-white border border-slate-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-1 mb-6 text-blue-600">
                  {[...Array(review.stars)].map((_, j) => (<Star key={j} size={18} fill="currentColor" />))}
                </div>
                <p className="text-slate-700 italic mb-8 flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-blue-600 font-black text-lg">{review.name.charAt(0)}</div>
                  <div>
                    <p className="font-black text-slate-900 leading-tight">{review.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 7. CTA Final */}
      <Section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white p-8 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight">¿Hablamos de cómo <br/> traer más clientes?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
            Te damos una propuesta clara y un presupuesto cerrado en menos de 24h para tu proyecto en {cityName}.
          </p>
          <Button tallyId="q4GKJO" variant="primary" className="px-12 py-4 md:px-14 md:py-6 text-xl">
            Solicitar Auditoría Gratis
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default LocationLanding;