import React from 'react';
import { Section, Button, Breadcrumbs, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA } from '../seo/metadata';
import { FAQS } from '../constants';
import { Link } from 'react-router';
import { ShieldCheck, Zap, TrendingUp, Search, MessageCircle, Layout, MousePointer2, CheckCircle2, PhoneCall, ArrowRight } from 'lucide-react';

const About: React.FC = () => {
  return (
    <main className="bg-white">
      <SEO {...METADATA.about} />
      
      {/* 1. HERO SECTION */}
      <Section className="pt-8 md:pt-24 bg-white">
        <Breadcrumbs items={[{ label: 'Sobre Nosotros' }]} />
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6 md:mb-8 tracking-tight">
            Sobre FG Digital Systems
          </h1>
          <div className="space-y-4 md:space-y-6 text-lg md:text-2xl text-slate-600 leading-relaxed font-medium">
            <p className="text-slate-900 font-black">Una web bonita no es el objetivo. El objetivo es que te traiga clientes.</p>
            <p>
              FG Digital Systems nace por una razón muy simple: estoy cansado de ver negocios buenos perdiendo dinero por tener una web que “está online”… pero no funciona.
            </p>
            <p>
              Porque hoy no gana el que tiene más seguidores. Gana el que tiene un sistema claro para convertir visitas en contactos, reservas y ventas.
            </p>
            <p className="text-blue-600 font-bold">Y eso es exactamente lo que construimos.</p>
          </div>
        </div>
      </Section>

      {/* 2. FOUNDER STORY SECTION */}
      <Section className="bg-slate-50 border-y border-slate-100 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              <div className="aspect-[4/5] md:aspect-[3/4] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                <img 
                  src="https://i.imgur.com/ILoCkO3.png" 
                  alt="Francesco, fundador de FG Digital Systems" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-slate-900 text-white p-5 md:p-8 rounded-2xl md:rounded-3xl shadow-xl">
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest opacity-60 mb-1">Fundador</p>
                <p className="text-xl md:text-2xl font-black">Francesco</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">Mi historia <br/><span className="text-blue-600 text-xl md:text-3xl">(y por qué hago esto)</span></h2>
            <div className="space-y-5 text-slate-600 text-base md:text-xl leading-relaxed">
              <p>
                Soy Francesco, fundador de FG Digital Systems. Durante años trabajé en proyectos digitales, marketing y crecimiento. Y siempre veía el mismo patrón:
              </p>
              <p className="bg-white p-5 md:p-6 rounded-xl md:rounded-2xl border-l-4 border-blue-600 shadow-sm text-slate-900 font-medium italic">
                Negocios que trabajan duro, dan un servicio excelente… pero su presencia online no refleja lo que valen.
              </p>
              <p>
                Webs lentas, confusas, sin estructura, sin SEO bien hecho, sin un camino claro para que el cliente contacte. Y lo peor: muchos terminan pagando una web “bonita” que no trae ni una llamada.
              </p>
              <p className="font-black text-slate-900 text-xl md:text-2xl tracking-tight">
                Ahí entendí algo clave: una web no es diseño. Una web es una herramienta de negocio.
              </p>
              <p>
                FG Digital Systems es mi forma de hacer las cosas bien: rápido, limpio, sin humo y orientado a resultados.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. WHAT WE DO SECTION */}
      <Section className="py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Qué hacemos <br/><span className="text-blue-600">(y por qué funciona)</span></h3>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
              No trabajamos como una agencia tradicional. No hacemos proyectos eternos ni te llenamos de “tareas” para que al final no pase nada.
            </p>
            <p className="text-slate-900 font-bold text-lg md:text-xl">Construimos un sistema simple y completo:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { t: "Web profesional", d: "Rápida, móvil, clara.", icon: <Layout className="text-blue-600" size={20}/> },
                { t: "SEO bien hecho", d: "Para que Google la entienda e indexe.", icon: <Search className="text-blue-600" size={20}/> },
                { t: "Conversión", d: "WhatsApp, formularios, reservas.", icon: <MousePointer2 className="text-blue-600" size={20}/> },
                { t: "Automatización", d: "Menos caos, más control.", icon: <Zap className="text-blue-600" size={20}/> }
              ].map((service, i) => (
                <div key={i} className="p-5 md:p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                  <div className="mb-3">{service.icon}</div>
                  <h4 className="font-black text-slate-900 mb-1 text-sm md:text-base">{service.t}</h4>
                  <p className="text-slate-500 text-xs md:text-sm">{service.d}</p>
                </div>
              ))}
            </div>
            <p className="text-lg md:text-xl font-black text-slate-900 pt-2 tracking-tight">
              El resultado: una web que transmite confianza y convierte.
            </p>
          </div>

          <div className="bg-slate-900 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <h3 className="text-xl md:text-3xl font-black mb-8 uppercase tracking-tight relative z-10">Para quién es FG Digital Systems</h3>
            <p className="text-blue-400 font-bold mb-6 text-sm md:text-base relative z-10">Esto es para ti si:</p>
            <ul className="space-y-4 md:space-y-6 relative z-10">
              {[
                "Tienes un negocio local y quieres más clientes",
                "Vendes servicios y necesitas más contactos cualificados",
                "Tu web actual se ve antigua o no convierte",
                "Dependes demasiado de recomendaciones o Instagram",
                "Quieres una solución clara, rápida y profesional"
              ].map((item, i) => (
                <li key={i} className="flex gap-3 md:gap-4 items-start">
                  <div className="bg-blue-600 text-white p-1 rounded-full shrink-0 mt-1">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-slate-200 font-medium text-base md:text-lg leading-tight">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 md:mt-12 text-xl md:text-2xl font-black italic relative z-10 leading-tight">
              "Si tu negocio es serio, tu web también debería serlo."
            </p>
          </div>
        </div>
      </Section>

      {/* PROCESS SECTION */}
      <Section className="bg-slate-50 border-y border-slate-100 py-12 md:py-24">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-3 text-slate-900 uppercase tracking-tight">Cómo trabajamos</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg md:text-xl font-medium">Un proceso enfocado en la claridad y la velocidad.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { n: "1", t: "Diagnóstico rápido", d: "Vemos qué vendes, en qué ciudad estás y qué quieres conseguir." },
            { n: "2", t: "Construcción", d: "Diseñamos y desarrollamos tu web con estructura de venta + SEO técnico correcto." },
            { n: "3", t: "Lanzamiento", d: "Publicamos, conectamos dominio y dejamos todo listo para Google." },
            { n: "4", t: "Crecimiento (opcional)", d: "SEO mensual, mejoras, contenido y automatizaciones." }
          ].map((step, i) => (
            <div key={i} className="space-y-5 p-6 md:p-8 bg-white border border-slate-200 rounded-2xl md:rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-600 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-xl md:text-2xl text-white shadow-lg shadow-blue-200">
                {step.n}
              </div>
              <h4 className="text-lg md:text-xl font-black text-slate-900 leading-tight tracking-tight">{step.t}</h4>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-white py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Preguntas sobre nuestra filosofía</h2>
            <p className="text-slate-600">Resolvemos tus dudas sobre quiénes somos y cómo te ayudamos.</p>
          </div>
          <div className="space-y-2">
            {FAQS.slice(0, 5).map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/faq" className="text-blue-600 font-bold flex items-center justify-center gap-2 hover:underline">
              Ver todas las preguntas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>

      {/* 6. FINAL CTA */}
      <Section className="pb-16 md:pb-24 pt-6 md:pt-12 text-center bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-600"></div>
          <h2 className="text-2xl md:text-6xl font-black mb-6 md:mb-8 leading-tight tracking-tight">Si quieres una web <br className="hidden md:block"/> que venda, hablemos</h2>
          <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Cuéntanos qué haces y qué tipo de clientes quieres atraer. Te diremos cuál es el mejor plan para tu negocio y te damos un presupuesto claro.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-10 py-4 md:px-12 md:py-5 shadow-2xl shadow-blue-500/30 text-base md:text-lg w-full sm:w-auto">
              Solicitar Presupuesto
            </Button>
            <Button to="/precios" variant="outline" className="px-10 py-4 md:px-12 md:py-5 border-white text-white hover:bg-white/10 text-base md:text-lg w-full sm:w-auto">
              Ver Paquetes
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default About;