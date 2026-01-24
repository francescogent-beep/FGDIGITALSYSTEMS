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
  MapPin,
  Star,
  CheckCircle2,
  Layout
} from 'lucide-react';
import { Link } from 'react-router';

const SEOLocalMurcia: React.FC = () => {
  const faqs = [
    { question: "¿Por qué mi negocio no sale en Google Maps Murcia?", answer: "Suele deberse a una ficha de Google Business mal optimizada, falta de relevancia local o inconsistencia en tus datos. Nosotros corregimos la parte técnica para que Google te valore." },
    { question: "¿Es necesario tener local físico en Murcia centro?", answer: "No obligatoriamente. Google permite configurar áreas de servicio si te desplazas a casa del cliente en la Región de Murcia, aunque un local físico ayuda mucho." },
    { question: "¿Cómo conseguís que mi negocio tenga más reseñas?", answer: "Implementamos sistemas directos para que tus clientes murcianos dejen su valoración de forma sencilla, multiplicando la confianza en tu negocio." },
    { question: "¿Cuánto tiempo tarda el SEO Local en dar resultados?", answer: "En Murcia, dependiendo de tu sector, los cambios en el mapa suelen notarse entre las primeras 4 y 12 semanas." },
    { question: "¿Gestionáis también las reseñas negativas murcianas?", answer: "Te asesoramos sobre cómo responder profesionalmente y trazamos estrategias para diluirlas con contenido positivo y real de tus clientes satisfechos." }
  ];

  const mapsSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": "SEO Local Murcia" }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": `${CANONICAL_DOMAIN}${METADATA.seoLocalMurcia.path}/#local-agency`,
        "name": "Especialistas en SEO Local y Google Maps Murcia | FG Digital Systems",
        "url": `${CANONICAL_DOMAIN}${METADATA.seoLocalMurcia.path}`,
        "image": "https://i.imgur.com/ILoCkO3.png",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Murcia",
          "addressRegion": "Murcia",
          "postalCode": "30001",
          "addressCountry": "ES"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.9922,
          "longitude": -1.1307
        },
        "areaServed": [
          { "@type": "City", "name": "Murcia" },
          { "@type": "City", "name": "Cartagena" },
          { "@type": "City", "name": "Lorca" },
          { "@type": "City", "name": "Molina de Segura" }
        ],
        "description": "Expertos en posicionamiento de negocios locales en el mapa de Google en la Región de Murcia.",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios SEO Local",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Optimización de Ficha de Google Business" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gestión de Reseñas Locales" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Citas Locales y Directorios" } }
          ]
        }
      }
    ]
  };

  return (
    <main>
      <SEO {...METADATA.seoLocalMurcia} schema={mapsSchema} />
      
      {/* 1. HERO */}
      <Section className="pt-12 md:pt-32 pb-10 md:pb-16 text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Breadcrumbs items={[{ label: 'SEO Local Murcia' }]} />
        <div className="max-w-4xl mx-auto mt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-bold mb-6 border border-white/20">
            <MapPin size={16} />
            Expertos en Google Maps Murcia
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 text-balance tracking-tight">
            Domina <span className="text-blue-300">Google Maps</span> en Murcia.
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Hacemos que tu negocio aparezca el primero cuando tus vecinos busquen tus servicios. Sin pagar anuncios, <strong>solo visibilidad real murciana.</strong>
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Button to="/contacto" variant="secondary" className="px-10 py-5 text-lg text-blue-600 font-black">
              Optimizar mi Ficha Ahora
            </Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-10 py-5 text-lg border-white !text-white hover:bg-white/10 hover:!text-white">
              Ver Tarifas de Maps
            </Button>
          </div>
          <div className="mt-10 md:mt-12 text-blue-200 text-xs font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-400" /> Top 3 de Maps</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-400" /> Más Reseñas</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-400" /> Más Llamadas</span>
          </div>
        </div>
      </Section>

      {/* 2. PROBLEMS & SOLUTIONS */}
      <Section className="bg-white border-y border-slate-100 py-8 md:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
            <div className="space-y-6 md:space-y-8">
              <div className="mb-4 md:mb-10">
                <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2 block">¿Eres invisible en Murcia?</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Tus clientes te buscan pero no te ven
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  { t: "“No aparezco en el mapa de Murcia”", d: "Tus competidores se llevan todas las llamadas locales.", icon: <MapPin className="text-red-500" /> },
                  { t: "“Tengo pocas o malas reseñas”", d: "La falta de confianza espanta a tus nuevos clientes.", icon: <Star className="text-red-500" /> },
                  { t: "“Mi ficha de Google está vacía”", d: "Google te ignora si no mantienes tu perfil al día.", icon: <CircleAlert className="text-red-500" /> },
                  { t: "“Nadie me llama por el botón”", d: "Tu perfil no invita a la acción inmediata.", icon: <MousePointerClick className="text-red-500" /> }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 p-4 md:p-5 bg-white border border-slate-100 rounded-2xl shadow-sm group hover:border-red-100 transition-colors">
                    <div className="bg-red-50 p-2.5 rounded-xl h-fit group-hover:scale-110 transition-transform">{p.icon}</div>
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
                <span className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-2 block italic">Domina tu zona en Murcia</span>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">Imanes de clientes locales</h2>
              </div>
              <div className="space-y-6 md:space-y-8">
                {[
                  { step: "01", title: "Optimización de Ficha", desc: "Ponemos a punto tu Google Business para que destaque.", icon: <Search className="text-white" /> },
                  { step: "02", title: "Geo-localización Real", desc: "Aseguramos que te encuentren en todo Murcia.", icon: <Zap className="text-white" /> },
                  { step: "03", title: "Estrategia de Reseñas", desc: "Multiplicamos tus 5 estrellas reales y honestas.", icon: <Star className="text-white" /> }
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 relative group">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/10 flex items-center justify-center font-black text-blue-200 text-lg md:text-xl border border-white/20 group-hover:bg-white group-hover:text-blue-600 transition-all">
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
                  Auditoría de Maps Gratis
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. LA DIFERENCIA */}
      <Section className="py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight">Posicionamiento en el Mapa Real</h2>
            <p className="text-base md:text-lg text-slate-700 mb-8 md:mb-10 leading-relaxed">
              Mientras otros descuidan Maps, nosotros lo convertimos en tu <strong>principal canal de captación en Murcia.</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
               {[
                 { t: "Aparece en el Top 3", d: "Donde están el 70% de clics." },
                 { t: "Gestión de Reseñas", d: "Multiplica la confianza local." },
                 { t: "Fotos Optimizadas", d: "Enseña lo mejor de tu local." },
                 { t: "Foco en Llamadas", d: "Convierte visitas en llamadas." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center group">
                    <div className="bg-blue-100 text-blue-600 p-2.5 rounded-full h-fit shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
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
                      <span className="text-[10px] font-black uppercase text-slate-400">Negocio Invisible</span>
                   </div>
                   <p className="text-slate-700 text-xs italic">"Tengo la ficha de Google creada, pero no me trae nada..."</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-800 transform md:translate-x-6">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-blue-400">SOCIO FG DIGITAL SYSTEMS</span>
                   </div>
                   <p className="text-white font-bold text-base leading-tight">"Aparezco el primero cuando buscan un fontanero en Murcia."</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 4. TRUST BAR */}
      <Section className="bg-white py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-slate-900">Domina tu barrio en Murcia</h2>
          <p className="text-slate-600 text-sm md:text-lg">Tu negocio abierto al público local en Maps.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
          {[
            { title: "Gestión de Ficha", desc: "Configuración total.", icon: <UserCheck className="w-6 h-6" /> },
            { title: "Geo-Imágenes", icon: <Layout className="w-6 h-6" />, desc: "Fotos optimizadas." },
            { title: "Citas en Mapa", icon: <Lock className="w-6 h-6" />, desc: "Presencia local." },
            { title: "Más Reseñas", icon: <Star className="w-6 h-6" />, desc: "Confianza máxima." },
            { title: "Ranking Top 3", icon: <TrendingUp className="w-6 h-6" />, desc: "Máxima visibilidad.", featured: true }
          ].map((item, i) => (
            <div key={i} className={`p-4 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50 transition-colors group ${item.featured ? 'col-span-2 md:col-span-1' : ''}`}>
              <div className="text-blue-600 mb-3 bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
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
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-slate-900">Planes de SEO Local</h2>
          <p className="text-slate-700 text-sm md:text-base max-w-xl mx-auto">Selecciona cómo quieres crecer en el mapa de Murcia.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* 6. RESULTS */}
      <Section className="bg-white py-12 md:py-20 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">¿Qué consigues con SEO Local Murcia?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">El mapa de Google es la vía más corta hacia el cliente de tu zona.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <PhoneCall size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Más Llamadas Directas</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Tus vecinos podrán llamarte con un solo clic directamente desde el mapa de Google sin entrar en tu web.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Indicaciones al Local</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Si tienes tienda física, verás un aumento real de personas pidiendo indicaciones para llegar a tu puerta.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Reputación Local</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Un perfil con muchas estrellas le dice a todo Murcia que eres un profesional de confianza y serio.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ */}
      <Section className="bg-slate-50 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Preguntas de SEO Local Murcia</h2>
            <p className="text-slate-700">Resolvemos las dudas sobre Google Maps y el mercado murciano.</p>
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
        <div className="max-w-4xl mx-auto bg-slate-900 text-white p-8 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight">¿Hacemos que tu local <br/> aparezca el primero?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
            Optimiza hoy tu presencia en Maps y deja de regalar clientes a tu competencia murciana.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button to="/contacto" variant="primary" className="px-12 py-4 md:px-14 md:py-6 text-xl w-full sm:w-auto">
              Optimizar Maps Ahora
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default SEOLocalMurcia;