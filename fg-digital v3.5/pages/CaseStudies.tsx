
import React from 'react';
import { Section, Button, Breadcrumbs, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { FAQS } from '../constants';
import { CheckCircle2, Zap, BarChart3, ExternalLink, MousePointer2 } from 'lucide-react';

const BrowserMockup: React.FC<{ desktopSrc: string; mobileSrc: string; alt: string }> = ({ desktopSrc, mobileSrc, alt }) => (
  <div className="relative group">
    {/* Browser Frame */}
    <div className="rounded-t-2xl bg-slate-200 border-x border-t border-slate-300 p-3 flex items-center gap-2 shadow-sm">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
      </div>
      <div className="flex-grow mx-4">
        <div className="bg-white rounded-md h-6 w-full max-w-md mx-auto border border-slate-300 flex items-center px-3">
          <div className="w-2 h-2 rounded-full bg-slate-200 mr-2"></div>
          <div className="h-1 bg-slate-100 w-24 rounded-full"></div>
        </div>
      </div>
    </div>
    
    {/* Desktop Content Window */}
    <div className="relative aspect-[16/10] overflow-hidden border-x border-b border-slate-200 rounded-b-3xl bg-slate-100 shadow-2xl">
      <div className="w-full h-full overflow-hidden">
        <img 
          src={desktopSrc} 
          alt={`${alt} vista escritorio`} 
          className="w-full h-auto object-top"
          loading="lazy"
        />
      </div>
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 pointer-events-none flex items-center justify-center">
         <div className="bg-white/95 backdrop-blur text-blue-600 px-4 py-2 rounded-full font-black text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-2 border border-blue-100">
            Scroll automático al pasar el ratón <MousePointer2 size={12} />
         </div>
      </div>
    </div>
    
    {/* Mobile Overlay Preview */}
    <div className="absolute -bottom-10 -right-4 w-32 md:w-44 aspect-[9/19] bg-slate-900 rounded-[2rem] md:rounded-[3rem] border-4 border-slate-800 shadow-[0_20px_50px_rgba(0,0,0,0.4)] p-1.5 overflow-hidden hidden sm:block z-20">
       <div className="w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden bg-black relative pt-4 md:pt-5">
          <img 
            src={mobileSrc} 
            alt={`${alt} vista móvil`} 
            className="w-full h-auto object-top" 
            loading="lazy" 
          />
          {/* Dynamic island area */}
          <div className="absolute top-0 left-1/2 w-16 h-4 bg-black rounded-b-xl flex justify-center items-center">
             <div className="w-1 h-1 rounded-full bg-slate-800 mr-2"></div>
             <div className="w-4 h-0.5 rounded-full bg-slate-800"></div>
          </div>
       </div>
    </div>
  </div>
);

const TechPill: React.FC<{ label: string }> = ({ label }) => (
  <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-wider rounded-lg border border-slate-200">
    {label}
  </span>
);

const CaseStudies: React.FC = () => {
  const casesSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
      { "@type": "ListItem", "position": 2, "name": "Casos de Éxito", "item": `${CANONICAL_DOMAIN}${METADATA.cases.path}` }
    ]
  };

  const STUDIES = [
    {
      id: 1,
      label: "Caso Estudio 1",
      title: "Myriam (Pedagogista): Posicionamiento SEO local estratégico",
      context: "Marca personal en el sector pedagógico con una trayectoria sólida pero sin visibilidad estructurada en buscadores en su zona geográfica.",
      built: "Estructura de sistema completa: diseño web con arquitectura semántica enfocada a la especialidad de pedagogía, base técnica SEO optimizada y contenidos organizados para transmitir autoridad inmediata.",
      why: "La clave fue la claridad técnica. Una arquitectura limpia permite a Google rastrear e indexar con precisión, validando la autoridad del dominio rápidamente para captar pacientes de proximidad.",
      url: "https://myriamgentilepedagogista.com",
      image: "https://i.imgur.com/NojhDv4.jpeg",
      mobileImage: "https://i.imgur.com/W6O8pzu.jpeg",
      outcome: "Top 2 en Google",
      metrics: ["2ª posición en la región de Marche", "Resultados visibles en menos de 2 semanas"],
      pack: "Pack 3 — Empieza a Competir",
      tech: ["Vite", "React", "SEO Local", "Schema.org"]
    },
    {
      id: 2,
      label: "Caso Estudio 2",
      title: "Almudena (Terapia De Pareja): Sistema de Captación Profesional",
      context: "Marca personal en el ámbito de la orientación relacional que necesitaba un sistema digital para automatizar la entrada de solicitudes cualificadas.",
      built: "Web profesional con arquitectura semántica, base técnica SEO limpia, formularios inteligentes multi-paso con Tally y blog estructurado como pilar de autoridad y SEO de largo plazo.",
      why: "La clave fue eliminar la fricción. Un recorrido lógico permite al usuario encontrar lo que necesita rápidamente, mientras el SEO posiciona el proyecto de forma progresiva.",
      url: "https://www.almudenaterapiadepareja.com",
      image: "https://i.imgur.com/KL0LUdI.jpeg",
      mobileImage: "https://i.imgur.com/X2SeW3P.jpeg",
      outcome: "Sistema 24/7 Activo",
      metrics: ["Captación de leads automatizada", "Web optimizada para indexación"],
      pack: "Pack 2 — Consigue Clientes",
      tech: ["Tally Forms", "React", "SEO Blog", "Vercel"]
    },
    {
      id: 3,
      label: "Caso Estudio 3",
      title: "Team Amoruso: De marca personal a sistema de ventas",
      context: "Atleta IFBB Pro y Coach con marca potente pero gestión manual caótica de clientes y sin sistemas de venta escalables.",
      built: "Rediseño integral enfocado a la conversión, integración de productos digitales, automatización del sistema de ventas (captación → contenido → SEO) y pagos seguros.",
      why: "Se eliminó el trabajo administrativo manual. Al transformar la web en un ecosistema que captura y convierte leads de forma autónoma, el negocio pudo escalar sin límites.",
      url: "https://teamamoruso.com",
      image: "https://i.imgur.com/vRBS05Q.jpeg",
      mobileImage: "https://i.imgur.com/RksNsF8.png",
      outcome: "Ventas Automatizadas",
      metrics: ["Facturación recurrente online", "Conversión 100% autónoma"],
      pack: "Full Sales System (Pack 4)",
      tech: ["Stripe", "n8n Automation", "React", "E-commerce"]
    }
  ];

  return (
    <main className="bg-white">
      <SEO {...METADATA.cases} schema={casesSchema} />
      
      {/* HEADER */}
      <Section className="pt-12 md:pt-24 bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Casos de Éxito' }]} />
        <div className="max-w-7xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight leading-none">Resultados que <span className="text-blue-600">hablan por sí solos.</span></h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-7xl leading-relaxed">
            No mostramos simples capturas. Analizamos la estructura técnica y el impacto real que nuestros sistemas han tenido en la visibilidad y facturación de nuestros clientes.
          </p>
        </div>
      </Section>

      {/* RENDER CASE STUDIES */}
      {STUDIES.map((study, index) => (
        <Section key={study.id} className={`py-16 md:py-32 ${index % 2 !== 0 ? 'bg-slate-50' : 'bg-white'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
            <div className={`lg:col-span-6 space-y-8 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <div className="flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-[10px] font-black border border-blue-100 uppercase tracking-widest">
                  {study.label}
                </div>
                {study.tech.map((t, i) => <TechPill key={i} label={t} />)}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                {study.title}
              </h2>
              
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <div>
                  <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-wider flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Contexto y Reto
                  </h4>
                  <p className="text-base">{study.context}</p>
                </div>
                
                <div>
                  <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-wider flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> Solución Implementada
                  </h4>
                  <p className="text-base">{study.built}</p>
                </div>

                <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-wider flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div> El Pilar del Éxito
                  </h4>
                  <p className="text-sm font-medium italic leading-relaxed text-slate-700">{study.why}</p>
                </div>

                <a 
                  href={study.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline group"
                >
                  Visitar proyecto en vivo <ExternalLink size={16} />
                </a>
              </div>
            </div>

            <div className={`lg:col-span-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <div className="mb-14 lg:mb-16">
                <BrowserMockup desktopSrc={study.image} mobileSrc={study.mobileImage} alt={study.title} />
              </div>

              <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden p-8 md:p-10 relative z-10 mt-6 lg:mt-0">
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg">
                    {study.id === 3 ? <Zap size={24} /> : <BarChart3 size={24} />}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Impacto Logrado</p>
                    <p className="text-xl font-black text-slate-900">{study.outcome}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {study.metrics.map((m, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">{i === 0 ? "Logro Principal" : "Resultado Clave"}</p>
                      <p className="text-sm font-black text-slate-900 leading-tight">{m}</p>
                    </div>
                  ))}
                </div>

                <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 flex items-center justify-between group">
                  <div>
                    <p className="text-blue-900 font-bold text-[10px] uppercase tracking-tighter">Plan Aplicado:</p>
                    <p className="text-blue-600 font-black text-base">{study.pack}</p>
                  </div>
                  <CheckCircle2 className="text-blue-600 opacity-20 group-hover:opacity-100" size={24} />
                </div>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* CTA SECTION */}
      <Section className="py-24 text-center bg-white border-t border-slate-100">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
          ¿Quieres que tu negocio sea<br className="hidden md:block" /> nuestro próximo caso de éxito?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button tallyId="q4GKJO" variant="primary" className="px-12 py-5 text-lg">
            Solicitar Auditoría Técnica
          </Button>
          <Button to="/servicios-diseno-web-seo" variant="outline" className="px-12 py-5 text-lg">
            Descubrir Servicios
          </Button>
        </div>
        <p className="mt-8 text-slate-400 font-bold text-xs uppercase tracking-widest">
          Propuesta clara y presupuesto cerrado en menos de 24h.
        </p>
      </Section>

      {/* FAQ SNAPSHOT */}
      <Section className="bg-slate-50 py-12 md:py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Dudas sobre nuestros procesos</h2>
            <p className="text-slate-600">Cómo garantizamos resultados medibles en cada proyecto.</p>
          </div>
          <div className="space-y-2">
            {FAQS.slice(0, 4).map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
};

export default CaseStudies;
