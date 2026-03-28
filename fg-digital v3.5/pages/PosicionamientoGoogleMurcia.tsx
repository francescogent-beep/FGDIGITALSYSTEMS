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
  BarChart,
  CheckCircle2,
  Layout
} from 'lucide-react';
import { Link } from 'react-router';

const PosicionamientoGoogleMurcia: React.FC = () => {
  const faqs = [
    { question: "¿Cuánto tardaré en salir en Google en Murcia?", answer: "Los primeros resultados suelen verse entre la semana 4 y 8. Un posicionamiento sólido en sectores competitivos en la Región requiere de 3 a 6 meses de trabajo constante." },
    { question: "¿Garantizáis el primer puesto en la Región?", answer: "Nadie honesto puede garantizar el #1 absoluto, pero garantizamos una mejora drástica en tus posiciones y tráfico real de clientes murcianos interesados en tus servicios." },
    { question: "¿Hacéis SEO para toda la comunidad de Murcia?", answer: "Sí, trabajamos con negocios de Murcia capital, Cartagena, Lorca, Molina de Segura y cualquier municipio de la Región." },
    { question: "¿Tengo que pagar a Google para aparecer?", answer: "No. El posicionamiento orgánico (SEO) se basa en el mérito técnico y de contenido. Aparecerás de forma natural cuando tus clientes busquen lo que ofreces." },
    { question: "¿El SEO en Murcia es diferente al de otras zonas?", answer: "La base técnica es similar, pero las palabras clave y el comportamiento del usuario murciano varían. Adaptamos la estrategia al lenguaje y necesidades locales." }
  ];

  const positioningSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_DOMAIN}${METADATA.posicionamientoGoogleMurcia.path}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": "Posicionamiento Google Murcia" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_DOMAIN}${METADATA.posicionamientoGoogleMurcia.path}/#webpage`,
        "url": `${CANONICAL_DOMAIN}${METADATA.posicionamientoGoogleMurcia.path}`,
        "name": "Posicionamiento Google Murcia | Expertos en SEO Local",
        "isPartOf": { "@id": `${CANONICAL_DOMAIN}/#website` },
        "breadcrumb": { "@id": `${CANONICAL_DOMAIN}${METADATA.posicionamientoGoogleMurcia.path}/#breadcrumb` },
        "inLanguage": "es-ES"
      },
      {
        "@type": "ProfessionalService",
        "@id": `${CANONICAL_DOMAIN}/#organization`,
        "name": "FG Digital Systems",
        "knowsAbout": ["SEO", "Posicionamiento Web", "Google Maps", "Marketing Digital"]
      },
      {
        "@type": "Service",
        "name": "SEO y Posicionamiento Web en Murcia",
        "description": "Estrategias de posicionamiento orgánico para empresas murcianas.",
        "provider": { "@id": `${CANONICAL_DOMAIN}/#organization` },
        "areaServed": [
          {
            "@type": "AdministrativeArea",
            "@id": "https://www.wikidata.org/wiki/Q12225",
            "name": "Región de Murcia",
            "sameAs": "https://es.wikipedia.org/wiki/Región_de_Murcia"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Catálogo SEO Murcia",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Auditoría SEO Murcia" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO On-Page Murcia" } }
          ]
        }
      }
    ]
  };

  return (
    <main>
      <SEO {...METADATA.posicionamientoGoogleMurcia} schema={positioningSchema} />
      
      {/* 1. HERO */}
      <Section className="pt-12 md:pt-32 pb-10 md:pb-16 text-center bg-gradient-to-b from-white to-slate-50">
        <Breadcrumbs items={[{ label: 'SEO Google Murcia' }]} />
        <div className="max-w-7xl mx-auto mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full text-sm font-bold mb-6 border border-blue-100">
            <TrendingUp size={16} className="text-blue-600" />
            Expertos en Posicionamiento Web en Murcia
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 text-balance tracking-tight">
            Posicionamiento en Google <span className="text-blue-600">para negocios de Murcia.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 mb-10 md:mb-12 max-w-7xl mx-auto leading-relaxed">
            Si no estás en la primera página, no existes. Ayudamos a las pymes murcianas a <strong>superar a su competencia</strong> y atraer tráfico real.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Button to="/contacto" variant="primary" className="px-10 py-5 text-lg shadow-2xl shadow-blue-500/20">
              Auditoría SEO Murcia Gratis
            </Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-10 py-5 text-lg">
              Ver Tarifas SEO
            </Button>
          </div>
          <div className="mt-10 md:mt-12 text-slate-400 text-xs font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-500" /> SEO Real</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-500" /> Sin humos</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-500" /> Tráfico Murciano</span>
          </div>
        </div>
      </Section>

      {/* 2. PROBLEMS & SOLUTIONS */}
      <Section className="bg-white border-y border-slate-100 py-8 md:py-20 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
            <div className="space-y-6 md:space-y-8">
              <div className="mb-4 md:mb-10">
                <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2 block">Problemas de visibilidad</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  ¿Google te ignora en Murcia?
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  { t: "“Salgo en la página 3 o más atrás”", d: "El 95% de los clics nunca pasan de la primera página.", icon: <Search className="text-red-500" /> },
                  { t: "“Mi competencia se lleva mis clientes”", d: "Ellos están ahí cuando el murciano busca tus servicios.", icon: <UserX className="text-red-500" /> },
                  { t: "“Tengo tráfico pero no llaman”", d: "Estás atrayendo a las personas equivocadas.", icon: <CircleAlert className="text-red-500" /> },
                  { t: "“No sé por qué palabras aparezco”", d: "La falta de estrategia te hace perder dinero cada día.", icon: <BarChart className="text-red-500" /> }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 p-4 md:p-5 bg-white border border-slate-100 rounded-2xl shadow-sm group hover:border-red-100">
                    <div className="bg-red-50 p-2.5 rounded-xl h-fit">{p.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm md:text-base">{p.t}</h4>
                      <p className="text-xs md:text-sm text-slate-500">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-white shadow-2xl relative flex flex-col justify-center mt-8 lg:mt-0">
              <div className="mb-6 md:mb-10">
                <span className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-2 block italic">Estrategia SEO Murcia</span>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">Dominio absoluto del buscador</h2>
              </div>
              <div className="space-y-6 md:space-y-8">
                {[
                  { step: "01", title: "Análisis de búsqueda local", desc: "Sabemos qué escriben tus clientes murcianos exactamente.", icon: <Search className="text-white" /> },
                  { step: "02", title: "Optimización On-Page", desc: "Hacemos que Google adore tu web y su estructura.", icon: <Zap className="text-white" /> },
                  { step: "03", title: "Autoridad y Contenido", desc: "Te convertimos en el referente de tu sector en la zona.", icon: <TrendingUp className="text-white" /> }
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
                <Button to="/contacto" variant="secondary" className="w-full py-4 text-blue-600 font-black">
                  Solicitar Auditoría SEO
                </Button>
              </div>
            </div>
          </div>
      </Section>

      {/* 3. LA DIFERENCIA */}
      <Section className="py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight">SEO real para el negocio de Murcia</h2>
            <p className="text-base md:text-lg text-slate-700 mb-8 md:mb-10 leading-relaxed">
              Mientras otros te prometen la luna, nosotros te traemos <strong>clientes que buscan tus servicios hoy mismo.</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
               {[
                 { t: "Palabras Clave Murcianas", d: "Atacamos los términos locales." },
                 { t: "SEO Técnico Sólido", d: "Sin errores de indexación." },
                 { t: "Reportes Mensuales", d: "Para que veas tu crecimiento." },
                 { t: "Foco en el ROI", d: "Posicionamos para vender." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center group">
                    <div className="bg-blue-100 text-blue-600 p-2.5 rounded-full h-fit shrink-0 group-hover:bg-blue-600 group-hover:text-white">
                      <CheckCircle2 size={20} strokeWidth={3} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg md:text-xl leading-tight mb-1">{item.t}</h4>
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
                      <span className="text-[10px] font-black uppercase text-slate-400">SEO Tradicional</span>
                   </div>
                   <p className="text-slate-600 text-xs italic">"Vamos a posicionarte por términos genéricos globales..."</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-800">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-blue-400">SEO MURCIANO REAL</span>
                   </div>
                   <p className="text-white font-bold text-base leading-tight">"Aparecerás el #1 cuando busquen tus servicios en Murcia."</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 4. TRUST BAR */}
      <Section className="bg-white py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-slate-900">Un aliado en el buscador de Google</h2>
          <p className="text-slate-600 text-sm md:text-lg">Técnica impecable para resultados duraderos.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
          {[
            { title: "Keywords Locales", desc: "Análisis de Murcia.", icon: <Search className="w-6 h-6" /> },
            { title: "SEO On-Page", icon: <Layout className="w-6 h-6" />, desc: "Web optimizada." },
            { title: "Sin Engaños", icon: <ShieldCheck className="w-6 h-6" />, desc: "Técnicas seguras." },
            { title: "Análisis Mensual", icon: <BarChart className="w-6 h-6" />, desc: "Mira tus avances." },
            { title: "Soporte Región", icon: <PhoneCall className="w-6 h-6" />, desc: "Hablamos murciano.", featured: true }
          ].map((item, i) => (
            <div key={i} className={`p-4 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50 group ${item.featured ? 'col-span-2 md:col-span-1' : ''}`}>
              <div className="text-blue-600 mb-3 bg-white p-3 rounded-xl shadow-sm">
                {item.icon}
              </div>
              <h4 className="font-extrabold text-slate-900 mb-1 text-[11px] md:text-sm">{item.title}</h4>
              <p className="text-slate-600 text-[10px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. PRICING */}
      <Section id="packs" className="bg-slate-50 border-t border-slate-200">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-slate-900">Inversión en Posicionamiento</h2>
          <p className="text-slate-700 text-sm md:text-base max-w-7xl mx-auto">Selecciona el plan de crecimiento para tu negocio en Murcia.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {PRICING_PLANS.slice(1, 4).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* 6. RESULTS */}
      <Section className="bg-white py-12 md:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Éxitos de Posicionamiento en Murcia</h2>
            <p className="text-slate-600 max-w-7xl mx-auto">Negocios que han multiplicado sus llamadas gracias a estar arriba.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Más Tráfico Útil</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                No solo traemos visitas, traemos personas de Murcia buscando tus servicios en este preciso instante.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Presencia en Toda la Zona</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Aparecerás cuando busquen tus servicios tanto en Murcia capital como en las pedanías y municipios vecinos.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Autoridad de Marca</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Estar arriba transmite confianza. Tus clientes murcianos pensarán que eres el mejor porque Google te pone el primero.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ */}
      <Section className="bg-slate-50 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Dudas sobre SEO en Murcia</h2>
            <p className="text-slate-700">Resolvemos las dudas más frecuentes sobre el buscador en la Región.</p>
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
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight">¿Hacemos que tu web <br/> empiece a escalar?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-7xl mx-auto leading-relaxed">
            Solicita tu auditoría SEO gratuita y descubre cuánto tráfico estás regalando a tu competencia en Murcia.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contacto" variant="primary" className="px-12 py-4 md:px-14 md:py-6 text-xl w-full sm:w-auto">
              Auditoría SEO Gratis
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default PosicionamientoGoogleMurcia;