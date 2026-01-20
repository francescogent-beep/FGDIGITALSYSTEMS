React from 'react';
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
  Star
} from 'lucide-react';
import { Link } from 'react-router';

const Home: React.FC = () => {
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
        },
        "sameAs": [
          "https://www.linkedin.com/company/fg-digital-systems",
          "https://www.instagram.com/fgdigitalsystems"
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${CANONICAL_DOMAIN}/#website`,
        "url": CANONICAL_DOMAIN,
        "name": "FG Digital Systems",
        "publisher": { "@id": `${CANONICAL_DOMAIN}/#organization` },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": `${CANONICAL_DOMAIN}/blog-marketing-digital?s={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfessionalService",
        "name": "FG Digital Systems",
        "image": "https://i.imgur.com/ILoCkO3.png",
        "@id": CANONICAL_DOMAIN,
        "url": CANONICAL_DOMAIN,
        "telephone": "+34694285438",
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Murcia",
          "addressRegion": "Murcia",
          "addressCountry": "ES"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.9922,
          "longitude": -1.1307
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": REVIEWS.length.toString()
        }
      },
      {
        "@type": "ItemList",
        "@id": `${CANONICAL_DOMAIN}/#navigation`,
        "name": "Navegación Principal",
        "itemListElement": ROUTES.map((r, i) => ({
          "@type": "SiteNavigationElement",
          "position": i + 1,
          "name": r.name,
          "url": `${CANONICAL_DOMAIN}${r.path}`
        }))
      }
    ]
  };

  return (
    <main>
      <SEO {...METADATA.home} schema={homeSchema} />
      
      {/* 1. HERO */}
      <section className="hero-section">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full text-sm font-bold mb-6 border border-blue-100">
            <ShieldCheck size={16} className="text-blue-600" aria-hidden="true" />
            Resultados reales para negocios locales
          </div>
          <h1 className="lcp-title">
            ¿Tu web te trae <span className="text-blue-600">clientes</span> o solo facturas?
          </h1>
          <p className="hero-sub">
           Nosotros diseñamos sistemas web pensados para una sola cosa:<strong> que tu teléfono suene y entren contactos reales desde Google</strong>. Sin palabrería técnica ni cuotas escondidas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button tallyId="q4GKJO" variant="primary" className="btn-primary-lcp shadow-2xl shadow-blue-500/20">
              Solicitar Propuesta Clara
            </Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-10 py-5 text-lg">
              Ver Packs y Precios
            </Button>
          </div>
          <div className="mt-10 md:mt-12 text-slate-500 text-xs font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-600" aria-hidden="true" /> Pago único</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-600" aria-hidden="true" /> Propiedad 100% tuya</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-600" aria-hidden="true" /> Sin permanencias</span>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMS & SOLUTIONS */}
      <Section className="bg-white border-y border-slate-100 py-8 md:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
            <div className="space-y-6 md:space-y-8">
              <div className="mb-4 md:mb-10">
                <span className="text-red-700 font-bold uppercase tracking-widest text-xs mb-2 block">Tu situación actual</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Tu negocio está online, pero...
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  { t: "“Mi web no me trae clientes”", d: "Es bonita, pero el teléfono no suena.", icon: <UserX className="text-red-600" aria-hidden="true" /> },
                  { t: "“No aparezco en Google”", d: "Tus vecinos encuentran a tu competencia antes que a ti.", icon: <Search className="text-red-600" aria-hidden="true" /> },
                  { t: "“Dependo solo del boca a boca”", d: "Si no te recomiendan hoy, no facturas mañana.", icon: <CircleAlert className="text-red-700" aria-hidden="true" /> },
                  { t: "“Me contactan, pero no convierten”", d: "Recibes mensajes de curiosos que no compran nada.", icon: <MousePointerClick className="text-red-700" aria-hidden="true" /> }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 p-4 md:p-5 bg-white border border-slate-100 rounded-2xl shadow-sm group hover:border-red-100 transition-colors">
                    <div className="bg-red-50 p-2.5 rounded-xl h-fit group-hover:scale-110 transition-transform">{p.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm md:text-base">{p.t}</h3>
                      <p className="text-xs md:text-sm text-slate-600">{p.d}</p>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-600 rounded-r-xl shadow-sm">
                  <p className="text-red-800 font-bold text-sm md:text-base">
                    Si te reconoces en una sola de estas frases, tu web no está haciendo su trabajo.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 text-white shadow-2xl relative flex flex-col justify-center mt-8 lg:mt-0">
              <div className="lg:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-slate-100 text-blue-600">
                <ArrowDown size={16} aria-hidden="true" />
              </div>
              <div className="mb-6 md:mb-10">
                <span className="text-blue-50 font-bold uppercase tracking-widest text-xs mb-2 block italic">Nuestra solución</span>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">Así convertimos una web en una máquina de contactos</h2>
              </div>
              <div className="space-y-6 md:space-y-8">
                {[
                  { step: "01", title: "Entendemos tu negocio", desc: "No plantillas genéricas. Analizamos qué vendes, a quién y cómo te buscan.", icon: <Search aria-hidden="true" /> },
                  { step: "02", title: "Diseñamos para contactar", desc: "Cada sección tiene un objetivo: llamada, WhatsApp o formulario. Nada está ahí “porque queda bonito”.", icon: <TrendingUp aria-hidden="true" /> },
                  { step: "03", title: "Google + Conversión", desc: "Estructura clara para Google, recorrido claro para el cliente. Tu web trabaja para ti 24/7.", icon: <Zap aria-hidden="true" /> }
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 md:gap-6 relative group">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/20 flex items-center justify-center font-black text-white text-lg md:text-xl border border-white/30 group-hover:bg-white group-hover:text-blue-600 transition-all">
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
                  Solicitar Propuesta Clara
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
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight">Por qué FG Digital Systems es diferente</h2>
            <p className="text-base md:text-lg text-slate-700 mb-8 md:mb-10 leading-relaxed">
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
                      <CircleCheck size={20} strokeWidth={3} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg md:text-xl leading-tight mb-1">{item.t}</h3>
                      <p className="text-slate-600 text-sm md:text-base leading-tight">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
          <div className="border-1 md:order-2 bg-slate-100 p-6 md:p-12 rounded-[2rem] border border-slate-200 relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
             <div className="space-y-4 md:space-y-6">
                <div className="bg-white p-4 md:p-6 rounded-xl shadow-sm border border-slate-200">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-slate-500">Agencia Tradicional</span>
                   </div>
                   <p className="text-slate-600 text-xs italic">"Vendemos sistemas holísticos digitales..."</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-800 transform md:translate-x-6">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-blue-400">FG DIGITAL SYSTEMS</span>
                   </div>
                   <p className="text-white font-bold text-base leading-tight">"Pack Inicial: 690€. Lanzamos en 3-5 días."</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 4. PRICING */}
      <Section id="packs" className="bg-slate-50 border-t border-slate-200">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-slate-900">Inversión clara, resultados directos</h2>
          <p className="text-slate-700 text-sm md:text-base max-w-xl mx-auto">Selecciona el pack que encaja con tu negocio.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0 mb-12">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* 5. REVIEWS */}
      <Section className="bg-white py-12 md:py-24">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-black uppercase tracking-widest text-xs mb-2 block">Opiniones Reales</span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Historias de negocios como el tuyo</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Más de 50 negocios ya han confiado en nuestro sistema para digitalizar su captación de clientes.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex gap-1 mb-6 text-blue-600">
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-slate-700 italic mb-8 flex-grow leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-600 font-black text-lg shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-black text-slate-900 leading-tight">{review.name}</p>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-6">¿Quieres ser nuestro próximo caso de éxito?</p>
          <Button tallyId="q4GKJO" variant="primary" className="px-12 py-5">Solicitar Mi Propuesta</Button>
        </div>
      </Section>

      {/* 6. RESULTS */}
      <Section className="bg-slate-50 py-12 md:py-20 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-2 block">Directo al grano</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Esto es lo que consiguen nuestros clientes</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">No vendemos humo, vendemos herramientas que impulsan la facturación diaria de negocios locales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <PhoneCall size={32} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Más contactos reales</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Tu teléfono sonará más a menudo. Optimizamos cada rincón de la web para que las visitas se conviertan en llamadas y mensajes de WhatsApp.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Globe size={32} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dominio en Google Maps</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Aparecerás cuando tus vecinos busquen tus servicios cerca de ti. No hace falta que estén en tu puerta para que sepan que eres la mejor opción.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Zap size={32} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Imagen de Profesional</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Genera confianza inmediata. Una web rápida y moderna le dice al cliente que eres serio y que puede confiar en tu servicio.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ */}
      <Section className="bg-white py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">¿Dudas? Resolvemos las más comunes</h2>
            <p className="text-slate-700">Transparencia total antes de empezar.</p>
          </div>
          <div className="space-y-2">
            {FAQS.slice(0, 4).map((faq, i) => (
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

      {/* 8. FINAL CTA */}
      <Section className="py-20 text-center bg-slate-50">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white p-8 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight">¿Hablamos de cómo <br/> traer más clientes?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
            Te damos una propuesta clara y un presupuesto cerrado en menos de 24h.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-12 py-4 md:px-14 md:py-6 text-xl w-full sm:w-auto">
              Solicitar Propuesta Clara
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Home;
