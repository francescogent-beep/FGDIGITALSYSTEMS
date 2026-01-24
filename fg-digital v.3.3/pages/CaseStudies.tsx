
import React from 'react';
import { Section, Button, Breadcrumbs, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { FAQS } from '../constants';
import { CheckCircle2, ArrowRight, PhoneCall, Globe, Zap, BarChart3, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';

const CaseStudies: React.FC = () => {
  const casesSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
      { "@type": "ListItem", "position": 2, "name": "Casos de Éxito", "item": `${CANONICAL_DOMAIN}${METADATA.cases.path}` }
    ]
  };

  return (
    <main className="bg-white">
      <SEO {...METADATA.cases} schema={casesSchema} />
      
      {/* HEADER */}
      <Section className="pt-12 md:pt-24 bg-slate-50 border-b border-slate-200">
        <Breadcrumbs items={[{ label: 'Casos de Éxito' }]} />
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">Ejecución y Resultados Reales</h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed">
            No mostramos simples capturas de pantalla. Analizamos los sistemas y la estructura que han permitido a nuestros clientes mejorar su captación y visibilidad de forma honesta.
          </p>
        </div>
      </Section>

      {/* CASE STUDY 1 */}
      <Section className="py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold border border-blue-100 uppercase tracking-widest">
              Caso Estudio 1
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Myriam (Pedagogista): Posicionamiento SEO local estratégico
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <div>
                <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-wider">Contexto del cliente</h4>
                <p>Marca personal en el sector pedagógico con una trayectoria sólida pero sin visibilidad estructurada en buscadores. El proyecto carecía de una arquitectura que permitiera un posicionamiento profesional y localizado.</p>
              </div>
              
              <div>
                <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-wider">Qué construimos</h4>
                <p>No se trató solo de diseño, sino de una estructura de sistema: diseño web con arquitectura semántica, posicionamiento claro como "pedagogista", base técnica SEO y contenidos organizados para transmitir autoridad y claridad.</p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-wider">Por qué funcionó</h4>
                <p className="text-sm">La clave fue la ejecución técnica y la claridad. Una estructura limpia permite a Google rastrear e indexar con precisión, validando la autoridad del dominio rápidamente en su zona geográfica.</p>
              </div>

              <a 
                href="https://myriamgentilepedagogista.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                Ver sitio web del cliente <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-2xl overflow-hidden p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg">
                  <BarChart3 size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resultado Real</p>
                  <p className="text-xl font-black text-slate-900">Top 2 en Google</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-400 text-xs font-bold uppercase mb-1">Keyword Principal</p>
                  <p className="text-lg font-black text-slate-900">2ª posición en la región de Marche</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-400 text-xs font-bold uppercase mb-1">Localidad</p>
                  <p className="text-lg font-black text-slate-900">2ª posición en Civitanova Marche</p>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex gap-3 items-center text-slate-800 font-medium">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                  <span>Resultados logrados en aproximadamente 10 días desde el lanzamiento.</span>
                </div>
                <div className="flex gap-3 items-center text-slate-800 font-medium">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                  <span>Sistema escalable basado en contenido de autoridad.</span>
                </div>
              </div>

              <div className="p-6 bg-blue-50/50 rounded-2xl border border-blue-100 mb-8">
                <p className="text-blue-900 font-bold text-sm mb-1">Pack Utilizado:</p>
                <p className="text-blue-600 font-black text-lg">Pack 3 — Empieza a Competir</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-[10px] text-slate-400 italic leading-tight">
                  Descargo de responsabilidad: El posicionamiento SEO no está garantizado. Los resultados pueden variar significativamente según la competencia local, el historial del dominio y los cambios en el algoritmo de búsqueda. El éxito en este caso es el resultado de una base técnica limpia y estructura estratégica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CASE STUDY 2 - ALMUDENA */}
      <Section className="py-16 md:py-32 bg-slate-100 border-y border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white text-slate-800 px-4 py-1.5 rounded-full text-xs font-bold border border-slate-200 uppercase tracking-widest shadow-sm">
              Caso Estudio 2
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              Almudena (Terapia De Pareja Online): Sistema Web + SEO Profesional Estratégico
            </h2>
            
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <div>
                <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-wider">Contexto del cliente</h4>
                <p>Marca personal en el ámbito de la orientación relacional con un enfoque claro y una propuesta humana bien definida, pero sin una estructura digital optimizada para visibilidad orgánica ni captación constante de clientes.</p>
              </div>
              
              <div>
                <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-wider">Qué construimos</h4>
                <p>No se trató solo de diseño, sino de una estructura de sistema orientada a conversión y posicionamiento: web profesional con arquitectura semántica, base técnica SEO limpia, formularios inteligentes con Tally y blog estructurado como pilar de autoridad.</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h4 className="text-slate-900 font-bold mb-2 uppercase text-xs tracking-wider">Por qué funcionó</h4>
                <p className="text-sm">La clave fue la claridad estructural y la ejecución técnica correcta. Una arquitectura limpia permite a Google rastrear y posicionar el proyecto de forma progresiva, mientras el usuario encuentra un recorrido lógico y sin fricción.</p>
              </div>

              <a 
                href="https://www.almudenaterapiadepareja.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
              >
                Ver sitio web del cliente <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-xl overflow-hidden p-8 md:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-lg">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resultado Real</p>
                  <p className="text-xl font-black text-slate-900">Base Digital Sólida</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">Indexación</p>
                  <p className="text-lg font-black text-slate-900">Optimizada para Google</p>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-slate-400 text-[10px] font-bold uppercase mb-1">Captación</p>
                  <p className="text-lg font-black text-slate-900">Sistema funcional 24/7</p>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="flex gap-3 items-center text-slate-800 font-medium">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                  <span>Base digital sólida lista para escalar profesionalmente.</span>
                </div>
                <div className="flex gap-3 items-center text-slate-800 font-medium">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                  <span>Estructura preparada para crecimiento orgánico progresivo.</span>
                </div>
                <div className="flex gap-3 items-center text-slate-800 font-medium">
                  <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                  <span>Reducción de dependencia exclusiva del boca a boca.</span>
                </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 mb-8">
                <p className="text-slate-400 font-bold text-[10px] mb-1 uppercase tracking-widest">Pack Utilizado:</p>
                <p className="text-blue-600 font-black text-lg">Pack 2 — Consigue Clientes</p>
              </div>

              <div className="p-4 bg-slate-50/50 rounded-xl border border-slate-200">
                <p className="text-[10px] text-slate-400 italic leading-tight">
                  Descargo de responsabilidad: El posicionamiento SEO no está garantizado. Los resultados pueden variar según competencia, autoridad del dominio y cambios en el algoritmo de búsqueda. Este caso refleja el impacto de una base técnica bien ejecutada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CASE STUDY 3 - TEAM AMORUSO */}
      <Section dark className="py-16 md:py-32 rounded-[4rem] mx-4 mb-24 overflow-hidden relative border-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center relative z-10">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold border border-white/20 uppercase tracking-widest">
              Caso Estudio 3
            </div>
            <h2 className="text-3xl md:text-5xl font-black leading-tight text-white">
              Team Amoruso: De marca personal a sistema de ventas automatizado
            </h2>
            
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <div>
                <h4 className="text-blue-400 font-black mb-2 uppercase text-sm tracking-wider">Contexto del cliente</h4>
                <p className="text-white">Paolo (Atleta IFBB Pro y Coach) contaba con una marca personal potente pero carecía de un sistema de ventas estructurado. La gestión era manual, sin funnels automatizados ni ofertas escalables.</p>
              </div>
              
              <div>
                <h4 className="text-blue-400 font-black mb-2 uppercase text-sm tracking-wider">Sistemas implementados</h4>
                <p className="text-white">Rediseño web integral enfocado a la conversión, estructuración de ofertas de servicios, configuración de productos digitales, base SEO y automatización completa del sistema de ventas (captación → oferta → contenido → SEO).</p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-white font-bold mb-2 uppercase text-xs tracking-wider">Por qué funcionó</h4>
                <p className="text-sm text-slate-300">Se eliminó la fricción en el proceso de compra. Al transformar la web en un ecosistema que captura y convierte leads de forma autónoma, el negocio pudo escalar sin depender de la gestión manual de cada solicitud.</p>
              </div>

              <a 
                href="https://teamamoruso.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-blue-300 hover:underline"
              >
                Ver plataforma del cliente <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 text-slate-900 shadow-2xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-slate-900 text-white p-3 rounded-2xl shadow-lg">
                  <Zap size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resultado Real</p>
                  <p className="text-xl font-black text-slate-900">Facturación Recurrente</p>
                </div>
              </div>

              <div className="space-y-4 mb-10">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                  <span className="font-bold">Sistema que genera ventas de forma continuativa.</span>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                  <span className="font-bold">Captura y conversión de leads 100% automatizada.</span>
                </div>
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                  <CheckCircle2 className="text-blue-600 shrink-0" size={20} />
                  <span className="font-bold">Ingresos mensuales recurrentes mediante el sistema.</span>
                </div>
              </div>

              <div className="p-6 bg-blue-600 text-white rounded-2xl shadow-xl mb-8">
                <p className="text-blue-100 font-bold text-sm mb-1 uppercase tracking-widest">Pack Utilizado:</p>
                <p className="text-2xl font-black">Full Sales System (Pack 4)</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                <p className="text-[10px] text-slate-400 italic leading-tight">
                  Descargo de responsabilidad: No prometemos "ingresos garantizados". El éxito financiero de Team Amoruso depende de su marca, la calidad de su servicio y el tráfico generado. FG Digital Systems proporciona la infraestructura técnica y el sistema de ventas optimizado para maximizar el potencial del negocio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA SECTION */}
      <Section className="py-24 text-center bg-white border-t border-slate-100">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
          Analizamos la estructura de tu negocio<br />para construir un sistema similar.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button to="/contacto" variant="primary" className="px-12 py-5 text-lg">
            Solicitar consulta técnica
          </Button>
          <Button to="/servicios" variant="outline" className="px-12 py-5 text-lg">
            Descubrir nuestros sistemas
          </Button>
        </div>
        <p className="mt-8 text-slate-400 font-medium">
          Si buscas una infraestructura sólida que genere resultados medibles, hablemos.
        </p>
      </Section>

      {/* FAQ SNAPSHOT */}
      <Section className="bg-slate-50 py-12 md:py-24 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Preguntas sobre nuestros procesos</h2>
            <p className="text-slate-600">Cómo garantizamos que tu negocio también tenga una base sólida.</p>
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
