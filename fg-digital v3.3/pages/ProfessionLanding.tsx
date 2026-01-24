import React, { useRef } from 'react';
import { useParams, Navigate, Link } from 'react-router';
import { Section, Button, PricingCard, FAQAccordion, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { CANONICAL_DOMAIN } from '../seo/metadata';
import { PRICING_PLANS, REVIEWS } from '../constants';
import { 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Search, 
  CheckCircle2, 
  MessageCircle, 
  PhoneCall, 
  Activity, 
  Scissors, 
  Stethoscope, 
  Wrench, 
  UserCheck, 
  Star, 
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Globe,
  CircleCheck,
  MousePointerClick,
  Target,
  BarChart3,
  BookOpen,
  Calendar,
  MapPin,
  ZapOff,
  Lightbulb,
  Dumbbell,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface ProfessionConfig {
  name: string;
  niche: string;
  clientsName: string;
  platform: string;
  wiki: string;
  icon: React.ReactNode;
  heroTextBase: string;
  problems: { t: string; d: string; icon: React.ReactNode }[];
  deliverables: string[];
}

const WIKIDATA_MAP: Record<string, string> = {
  'murcia': 'https://www.wikidata.org/wiki/Q12225',
  'cartagena': 'https://www.wikidata.org/wiki/Q172831',
  'lorca': 'https://www.wikidata.org/wiki/Q492441',
  'elche': 'https://www.wikidata.org/wiki/Q10530',
  'molina-de-segura': 'https://www.wikidata.org/wiki/Q923315'
};

const PROFESSIONS: Record<string, ProfessionConfig> = {
  'fisioterapeutas': {
    name: 'Fisioterapeutas',
    niche: 'clínica de fisioterapia',
    clientsName: 'pacientes',
    platform: 'Doctoralia',
    wiki: 'https://es.wikipedia.org/wiki/Fisioterapia',
    heroTextBase: "Consigue que tu clínica de fisioterapia aparezca el primero en Google y reciba más reservas por WhatsApp.",
    icon: <Activity />,
    problems: [
      { t: "Doctoralia se lleva tus clics", d: "Pagas por aparecer, pero el paciente no es tuyo.", icon: <Stethoscope /> },
      { t: "Poca visibilidad en el barrio", d: "Tus vecinos no saben que eres el mejor fisio cerca.", icon: <Search /> },
      { t: "Dependencia de seguros", d: "Necesitas pacientes privados para mejorar tu rentabilidad.", icon: <TrendingUp /> },
      { t: "Web que no convierte", d: "Entran, miran y se van sin pedir cita.", icon: <MousePointerClick /> }
    ],
    deliverables: ["Páginas por tratamiento", "Sistema de cita previa", "SEO local en Maps"]
  },
  'psicologos': {
    name: 'Psicólogos',
    niche: 'consulta de psicología',
    clientsName: 'pacientes',
    platform: 'Doctoralia',
    wiki: 'https://es.wikipedia.org/wiki/Psicología',
    heroTextBase: "Especialistas en captación de pacientes para psicólogos y terapeutas. Web profesional y posicionamiento local.",
    icon: <Activity />,
    problems: [
      { t: "Falta de autoridad digital", d: "El paciente busca confianza antes de llamar.", icon: <ShieldCheck /> },
      { t: "Dependencia de portales", d: "Si el portal sube precios, tu margen desaparece.", icon: <TrendingUp /> },
      { t: "Miedo a la exposición", d: "Tu web debe transmitir calma y profesionalidad.", icon: <Activity /> },
      { t: "Proceso de reserva frío", d: "Necesitas un sistema humano que facilite el contacto.", icon: <MessageCircle /> }
    ],
    deliverables: ["Blog de salud mental", "Formularios confidenciales", "Diseño relajante"]
  },
  'dentistas': {
    name: 'Dentistas',
    niche: 'clínica dental',
    clientsName: 'pacientes',
    platform: 'Doctoralia',
    wiki: 'https://es.wikipedia.org/wiki/Odontología',
    heroTextBase: "Atrae más pacientes a tu clínica dental. Optimizamos tu web y tu ficha de Google Maps para implantes y ortodoncia.",
    icon: <Stethoscope />,
    problems: [
      { t: "Competencia feroz", d: "Las grandes cadenas dominan Ads; tú debes dominar el mapa.", icon: <Star /> },
      { t: "Web antigua y lenta", d: "Un paciente dental busca limpieza y rapidez.", icon: <Zap /> },
      { t: "Pocas reseñas reales", d: "La opinión de los vecinos locales lo es todo.", icon: <UserCheck /> },
      { t: "Servicios VIP invisibles", d: "Tus tratamientos de mayor margen no aparecen.", icon: <Target /> }
    ],
    deliverables: ["Fichas por especialidad", "Gestión de reseñas", "Optimización móvil"]
  },
  'barberias': {
    name: 'Barberías',
    niche: 'barbería o peluquería',
    clientsName: 'clientes',
    platform: 'Instagram',
    wiki: 'https://es.wikipedia.org/wiki/Barbero',
    heroTextBase: "Haz que tu barbería sea la más visible. Sistema de reservas y SEO local para llenar tu agenda cada semana.",
    icon: <Scissors />,
    problems: [
      { t: "Instagram no es suficiente", d: "Muchas fotos, pero pocos clics en reservar.", icon: <Smartphone /> },
      { t: "Agenda vacía entre semana", d: "Necesitas SEO para atraer gente de paso.", icon: <Calendar /> },
      { t: "Competencia por precio", d: "Si no pareces el mejor, solo te elegirán si eres barato.", icon: <TrendingUp /> },
      { t: "Sin ficha de Maps", d: "Si no salen tus estrellas, no existes para el barrio.", icon: <MapPin /> }
    ],
    deliverables: ["Reservas integradas", "Galería de trabajos", "Aparición local"]
  },
  'fontaneros': {
    name: 'Fontaneros',
    niche: 'servicio de fontanería',
    clientsName: 'clientes',
    platform: 'Habitissimo',
    wiki: 'https://es.wikipedia.org/wiki/Fontanería',
    heroTextBase: "Que tu teléfono no pare de sonar. Especialistas en SEO para fontaneros con urgencias y servicios 24h.",
    icon: <Wrench />,
    problems: [
      { t: "Habitissimo quita margen", d: "Pagas por el contacto y compites con otros 3.", icon: <ZapOff /> },
      { t: "Urgencias no rentables", d: "Si no estás el #1 en móvil cuando hay una fuga, pierdes.", icon: <PhoneCall /> },
      { t: "Desconfianza inicial", d: "Una web seria elimina el miedo al presupuesto.", icon: <ShieldCheck /> },
      { t: "Invisible en el mapa", d: "Nadie te encuentra por 'fontanero urgente'.", icon: <Search /> }
    ],
    deliverables: ["Web Ultra-Click", "SEO Urgencias 24h", "Estructura por avería"]
  },
  'estetica-unas': {
    name: 'Centros de Estética',
    niche: 'centro de estética o uñas',
    clientsName: 'clientas',
    platform: 'Treatwell',
    wiki: 'https://es.wikipedia.org/wiki/Cosmetología',
    heroTextBase: "Consigue más clientas para tu centro de estética. Diseño web profesional y posicionamiento en Google Maps.",
    icon: <Sparkles />,
    problems: [
      { t: "Comisiones de reserva", d: "Pagas por cada clienta que ya te conoce.", icon: <TrendingUp /> },
      { t: "Servicios invisibles", d: "Tus tratamientos estrella no aparecen en Google.", icon: <Star /> },
      { t: "Sin autoridad local", d: "Tu web no refleja la calidad de tu trabajo.", icon: <UserCheck /> },
      { t: "Invisible en móvil", d: "Si no te encuentran rápido al salir de casa, no vas.", icon: <Smartphone /> }
    ],
    deliverables: ["Galería de resultados", "Reservas directas", "SEO de barrio"]
  },
  'entrenadores-personales': {
    name: 'Entrenadores Personales',
    niche: 'servicio de entrenamiento personal',
    clientsName: 'alumnos',
    platform: 'Instagram',
    wiki: 'https://es.wikipedia.org/wiki/Entrenador_personal',
    heroTextBase: "Si eres fitness coach, necesitas una web que capte alumnos. Posicionamiento para entrenamientos y nutrición.",
    icon: <Dumbbell />,
    problems: [
      { t: "Dependencia de Redes", d: "Si Instagram cae, tu captación de clientes se para.", icon: <Smartphone /> },
      { t: "Falta de profesionalidad", d: "Tu web debe demostrar que eres un experto real.", icon: <ShieldCheck /> },
      { t: "Ventas manuales", d: "Pasas demasiado tiempo cerrando ventas por MD.", icon: <Zap /> },
      { t: "Invisible en Maps", d: "Nadie busca entrenador cerca de su casa y te ve.", icon: <MapPin /> }
    ],
    deliverables: ["Página de autoridad", "Funnels de captación", "Blog fitness"]
  },
  'electricistas': {
    name: 'Electricistas',
    niche: 'servicio de electricidad',
    clientsName: 'clientes',
    platform: 'Cronoshare',
    wiki: 'https://es.wikipedia.org/wiki/Electricista',
    heroTextBase: "Consigue avisos de reparaciones eléctricas. Posicionamiento local efectivo para electricistas autónomos.",
    icon: <Lightbulb />,
    problems: [
      { t: "Competencia en precio", d: "Si no pareces el mejor, solo miran lo que cobras.", icon: <TrendingUp /> },
      { t: "Avisos urgentes perdidos", d: "Si no cargan rápido tu teléfono, llaman al siguiente.", icon: <PhoneCall /> },
      { t: "Miedo al presupuesto", d: "Tu web debe transmitir seguridad y claridad.", icon: <ShieldCheck /> },
      { t: "Ficha de Maps vacía", d: "Si no tienes reseñas locales, nadie te llama.", icon: <Star /> }
    ],
    deliverables: ["Botón de llamada fija", "SEO Urgencias", "Landing de Servicios"]
  },
  'clinicas-estetica': {
    name: 'Clinicas Estética',
    niche: 'clínica de medicina estética',
    clientsName: 'pacientes',
    platform: 'Doctoralia',
    wiki: 'https://es.wikipedia.org/wiki/Medicina_estética',
    heroTextBase: "Dominio absoluto de Google para clínicas estéticas. Captación de pacientes para tratamientos de alta gama.",
    icon: <Sparkles />,
    problems: [
      { t: "Falta de lujo percibido", d: "Si tu web es básica, tu servicio parece barato.", icon: <Star /> },
      { t: "Leads no cualificados", d: "Recibes gente buscando precio, no calidad.", icon: <UserCheck /> },
      { t: "Tratamientos ocultos", d: "Tus servicios de mayor margen no tienen visibilidad.", icon: <TrendingUp /> },
      { t: "Web lenta", d: "El paciente premium no espera a que cargue una foto.", icon: <Zap /> }
    ],
    deliverables: ["Estructura VIP", "Galería de casos", "SEO Alta Gama"]
  }
};

const formatCityName = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ProfessionLanding: React.FC = () => {
  const { city, professionSlug } = useParams<{ city: string; professionSlug: string }>();
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const cityName = city ? formatCityName(city) : 'Murcia';
  const cityWiki = WIKIDATA_MAP[city || 'murcia'] || `https://es.wikipedia.org/wiki/${cityName.replace(' ', '_')}`;
  const config = professionSlug ? PROFESSIONS[professionSlug] : null;

  if (!config) return <Navigate to="/servicios-diseno-web-seo" replace />;

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const dynamicSEO = {
    title: `Web + SEO para ${config.name} en ${cityName} | FG Digital Systems`,
    description: `Expertos en diseño web y captación de ${config.clientsName} para ${config.niche} en ${cityName}. Más visibilidad en Google Maps y reservas directas.`,
    path: `/${city}/web-seo/${professionSlug}`
  };

  const professionSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_DOMAIN}${dynamicSEO.path}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": cityName, "item": `${CANONICAL_DOMAIN}/seo-maps/${city}` },
          { "@type": "ListItem", "position": 3, "name": `Web y SEO para ${config.name}` }
        ]
      },
      {
        "@type": "Service",
        "@id": `${CANONICAL_DOMAIN}${dynamicSEO.path}/#service`,
        "name": `Web + SEO para ${config.name} en ${cityName}`,
        "description": dynamicSEO.description,
        "provider": { "@id": `${CANONICAL_DOMAIN}/#organization` },
        "areaServed": {
          "@type": "City",
          "@id": cityWiki,
          "name": cityName
        },
        "brand": { "@id": `${CANONICAL_DOMAIN}/#organization` }
      },
      {
        "@type": "FAQPage",
        "@id": `${CANONICAL_DOMAIN}${dynamicSEO.path}/#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": `¿Seguiré necesitando ${config.platform}?`,
            "acceptedAnswer": { "@type": "Answer", "text": `Por supuesto. Tu web propia y ${config.platform} pueden convivir perfectamente en ${cityName}. La idea es que con el tiempo, la web sea tu fuente principal para que no dependas de portales de terceros.` }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto tarda en aparecer en Google Maps?",
            "acceptedAnswer": { "@type": "Answer", "text": `Normalmente, los primeros resultados en Google Maps para tu zona de ${cityName} se notan en 4-8 semanas tras la optimización técnica inicial que realizamos.` }
          }
        ]
      }
    ]
  };

  return (
    <main className="bg-white min-h-screen">
      <SEO {...dynamicSEO} schema={professionSchema} />
      
      {/* 1. Hero */}
      <section className="pt-10 md:pt-20 pb-16 md:pb-24 px-4 text-center bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: cityName, path: `/seo-maps/${city}` }, { label: config.name }]} />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full text-sm font-bold mb-6 border border-blue-100 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <ShieldCheck size={16} className="text-blue-600" />
            Especialistas en {config.name} {cityName}
          </div>
          
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Web + SEO para <span className="text-blue-600">{config.name}</span> en {cityName}
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
            {config.heroTextBase.replace('.', ` en ${cityName}.`)} <strong>Sin cuotas mensuales obligatorias ni tecnicismos.</strong>
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button tallyId="q4GKJO" variant="primary" className="px-10 py-5 text-lg shadow-2xl shadow-blue-500/20">
              Auditoría Gratis en 24h
            </Button>
            <a href="https://wa.me/34694285438" target="_blank" rel="noopener" className="inline-flex items-center justify-center px-10 py-5 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600 transition-all shadow-xl shadow-green-200 gap-2">
              <MessageCircle size={20} /> WhatsApp Directo
            </a>
          </div>

          <div className="mt-12 md:mt-16 text-slate-500 text-xs font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-8 gap-y-4 animate-in fade-in duration-1000 delay-500">
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg"><CircleCheck size={16} className="text-green-600" /> Pago único</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg"><CircleCheck size={16} className="text-green-600" /> Propiedad 100% tuya</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg"><CircleCheck size={16} className="text-green-600" /> Sin comisiones</span>
          </div>
        </div>
      </section>

      {/* 2. Problems & Solutions */}
      <Section className="bg-slate-50 border-y border-slate-100 py-12 md:py-24 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
            <div className="space-y-6 md:space-y-8">
              <div className="mb-4 md:mb-10">
                <span className="text-red-700 font-bold uppercase tracking-widest text-xs mb-2 block">El gran error en {cityName}</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  {config.platform} no es tu negocio
                </h2>
              </div>
              <div className="grid gap-4">
                {config.problems.map((p, i) => (
                  <div key={i} className="flex gap-4 p-4 md:p-5 bg-white border border-slate-100 rounded-2xl shadow-sm group hover:border-red-100 transition-colors">
                    <div className="bg-red-50 p-2.5 rounded-xl h-fit group-hover:scale-110 transition-transform text-red-600">{p.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm md:text-base">{p.t}</h3>
                      <p className="text-xs md:text-sm text-slate-600">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-white shadow-2xl relative flex flex-col justify-center mt-8 lg:mt-0">
              <div className="mb-6 md:mb-10">
                <span className="text-blue-50 font-bold uppercase tracking-widest text-xs mb-2 block italic">Nuestra solución</span>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">Así llenamos tu agenda en {cityName}</h2>
              </div>
              <div className="space-y-6 md:space-y-8">
                {[
                  { step: "01", title: "Independencia Total", desc: `Creamos tu propio canal de captación para que no dependas de pagar comisiones.`, icon: <Search /> },
                  { step: "02", title: "Posicionamiento de Barrio", desc: `Optimizamos tu ficha para que salgas en el Top 3 de Google Maps en ${cityName}.`, icon: <TrendingUp /> },
                  { step: "03", title: "Diseño que reserva", desc: `Web ultra-rápida con WhatsApp integrado para que contactarte sea instantáneo.`, icon: <Zap /> }
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 relative group">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center font-black text-white text-lg md:text-xl border border-white/30 group-hover:bg-white group-hover:text-blue-600 transition-all">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold mb-1 text-white">{s.title}</h3>
                      <p className="text-blue-50 text-xs md:text-sm leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
                <Button tallyId="q4GKJO" variant="secondary" className="w-full py-4 text-blue-600 font-black">
                  Solicitar Auditoría Gratis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. Comparativa */}
      <Section className="py-12 md:py-24 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight">Por qué elegirnos para tu {config.niche} en {cityName}</h2>
            <p className="text-base md:text-lg text-slate-700 mb-8 md:mb-10 leading-relaxed">
              Muchos {config.name.toLowerCase()} en {cityName} se conforman con una web "que esté ahí". Nosotros construimos un sistema que <strong>te trae {config.clientsName} todos los días.</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
               {[
                 { t: "Foco en Reserva", d: "Diseñada para que llamen." },
                 { t: "SEO de Zona", d: `Visible en todo ${cityName}.` },
                 { t: "Sin Comisiones", d: "El beneficio es 100% tuyo." },
                 { t: "Web Propia", d: "No es un alquiler eterno." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center group">
                    <div className="bg-blue-100 text-blue-600 p-2.5 rounded-full h-fit shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <CircleCheck size={20} strokeWidth={3} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-tight mb-1">{item.t}</h3>
                      <p className="text-slate-600 text-sm md:text-base leading-tight">{item.d}</p>
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
                      <span className="text-[10px] font-black uppercase text-slate-500">Agencia Tradicional</span>
                   </div>
                   <p className="text-slate-600 text-xs italic">"Te hacemos un branding holístico de 3 meses..."</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-800 transform md:translate-x-6">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-blue-400">FG DIGITAL SYSTEMS</span>
                   </div>
                   <p className="text-white font-bold text-base leading-tight">"Pack Crecimiento: Web + SEO Maps. Listo en 10 días."</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 4. Pricing */}
      <Section id="packs" className="bg-slate-50 py-12 md:py-24 border-y border-slate-100">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-slate-900">Packs para {config.name} {cityName}</h2>
          <p className="text-slate-700 text-sm md:text-base max-w-xl mx-auto">Inversión clara para resultados directos en tu zona.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* 5. Results */}
      <Section className="bg-white py-12 md:py-20 border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-2 block">Directo al grano</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Lo que conseguimos en {cityName}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <PhoneCall size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Más reservas directas</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Tu teléfono sonará más a menudo. Optimizamos la web para que las visitas de {cityName} se conviertan en mensajes de WhatsApp.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dominio en Google Maps</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Aparecerás el primero cuando tus vecinos busquen "{config.name.toLowerCase()} cerca de mí" en sus móviles en {cityName}.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Imagen de Autoridad</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Genera confianza inmediata. Una web profesional le dice al cliente local que eres el experto serio de la zona.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Image & Content */}
      <Section className="bg-white py-12 md:py-24 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt={`Diseño web para ${config.name} en ${cityName}`} 
                className="rounded-[2.5rem] shadow-2xl border-8 border-slate-50"
                width="800"
                height="500"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-3xl shadow-xl hidden md:block">
                <p className="text-2xl font-black">90+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest">PageSpeed Score</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Por qué tu {config.niche} necesita un sistema propio en {cityName}</h2>
            <div className="prose prose-slate prose-lg text-slate-600 leading-relaxed">
              <p>
                En el sector de {config.name.toLowerCase()} en {cityName}, la competencia es local y directa. La mayoría de tus competidores cometen el error de depender de portales externos que les cobran por cada lead.
              </p>
              <p>
                En <strong>FG Digital Systems</strong> diseñamos herramientas que te hacen independiente. Analizamos las palabras clave que tus futuros {config.clientsName} buscan en {cityName}, optimizamos tu ficha de Maps y facilitamos la reserva vía WhatsApp.
              </p>
              <ul className="list-none p-0 space-y-3">
                <li className="flex items-center gap-3 font-bold text-slate-900">
                  <Target size={20} className="text-blue-600" /> ROI enfocado al mercado local de {cityName}.
                </li>
                <li className="flex items-center gap-3 font-bold text-slate-900">
                  <BarChart3 size={20} className="text-blue-600" /> Estrategia basada en datos de búsqueda reales.
                </li>
                <li className="flex items-center gap-3 font-bold text-slate-900">
                  <BookOpen size={20} className="text-blue-600" /> Web redactada para vender tus servicios.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. Reviews Carousel */}
      <Section className="bg-slate-50 py-12 md:py-24 overflow-hidden border-y border-slate-100">
        <div className="text-center mb-16 px-4">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">Opiniones Reales</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Casos de éxito cerca de {cityName}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">Muchos profesionales ya han confiado en nuestro sistema para digitalizar su captación.</p>
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
              <a 
                key={i} 
                href="https://share.google/dIEtGDhcYNdtgXc96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start p-8 rounded-3xl bg-white border border-slate-100 flex flex-col hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="flex gap-1 mb-6 text-blue-600">
                  {[...Array(review.stars)].map((_, j) => (<Star key={j} size={18} fill="currentColor" />))}
                </div>
                <p className="text-slate-700 italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-full flex items-center justify-center text-blue-600 font-black text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">{review.name.charAt(0)}</div>
                  <div>
                    <p className="font-black text-slate-900 leading-tight">{review.name}</p>
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{review.role}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center">
            <a href="https://share.google/dIEtGDhcYNdtgXc96" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 uppercase tracking-widest">
               <ExternalLink size={14} /> Ver todas en Google Maps
            </a>
        </div>
      </Section>

      {/* 8. Nighed FAQ */}
      <Section className="bg-white py-12 md:py-24 border-b border-slate-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-12 text-center">Dudas comunes para {config.name} en {cityName}</h2>
          <div className="space-y-2">
            <FAQAccordion 
              question={`¿Seguiré necesitando ${config.platform}?`} 
              answer={`Por supuesto. Tu web propia y ${config.platform} pueden convivir perfectamente. La idea es que con el tiempo, la web sea tu fuente principal para que no dependas de portales de terceros y ahorres en comisiones en ${cityName}.`}
            />
            <FAQAccordion 
              question="¿Necesito escribir artículos cada semana?" 
              answer={`No es obligatorio, pero para sectores como el de ${config.name.toLowerCase()} en ${cityName}, un blog ayuda a demostrar autoridad y responder a las dudas locales antes de reservar.`}
            />
            <FAQAccordion 
              question="¿Cuánto tarda en aparecer en Google Maps?" 
              answer={`Normalmente, los primeros resultados en Google Maps para tu zona de ${cityName} se notan en 4-8 semanas tras la optimización técnica inicial.`}
            />
          </div>
        </div>
      </Section>

      {/* 9. Final CTA */}
      <Section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white p-8 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight">¿Hablamos de cómo <br/> traer más {config.clientsName}?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
            Te damos una propuesta clara y un presupuesto cerrado en menos de 24h para tu {config.niche} en {cityName}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-12 py-4 md:px-14 md:py-6 text-xl w-full sm:w-auto">
              Solicitar Propuesta Gratis
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ProfessionLanding;