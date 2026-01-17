import React from 'react';
import { Section, Button, PricingCard, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA } from '../seo/metadata';
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
  Clock,
  UserCheck,
  CreditCard,
  Lock,
  ArrowDown,
  PhoneCall,
  Globe
} from 'lucide-react';
import { Link } from 'react-router';

const Home: React.FC = () => {
  return (
    <main>
      <SEO {...METADATA.home} />
      
      {/* 1. HERO */}
      <Section className="pt-12 md:pt-32 pb-10 md:pb-16 text-center bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-800 rounded-full text-sm font-bold mb-6 border border-blue-100">
            <ShieldCheck size={16} className="text-blue-600" aria-hidden="true" />
            Resultados reales para negocios locales
          </div>
          <h1 className="hero-title font-extrabold text-slate-900 leading-tight mb-6 text-balance tracking-tight">
            ¿Tu web te trae <span className="text-blue-600">clientes</span> o solo facturas?
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Hacemos webs que funcionan y te posicionan en Google con <strong>precios claros desde el primer día</strong>. Sin palabrería técnica ni cuotas escondidas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-10 py-5 text-lg shadow-2xl shadow-blue-500/20">
              Solicitar Propuesta Clara
            </Button>
            <Button to="/precios" variant="outline" className="px-10 py-5 text-lg">
              Ver Packs y Precios
            </Button>
          </div>
          <div className="mt-10 md:mt-12 text-slate-400 text-xs font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-500" aria-hidden="true" /> Pago único</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-500" aria-hidden="true" /> Propiedad 100% tuya</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-green-500" aria-hidden="true" /> Sin permanencias</span>
          </div>
        </div>
      </Section>

      {/* 2. PROBLEMS & SOLUTIONS */}
      <Section className="bg-white border-y border-slate-100 py-8 md:py-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-stretch">
            <div className="space-y-6 md:space-y-8">
              <div className="mb-4 md:mb-10">
                <span className="text-red-500 font-bold uppercase tracking-widest text-xs mb-2 block">Tu situación actual</span>
                <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                  Tu negocio está online, pero...
                </h2>
              </div>
              <div className="grid gap-4">
                {[
                  { t: "“Mi web no me trae clientes”", d: "Es bonita, pero el teléfono no suena.", icon: <UserX className="text-red-500" aria-hidden="true" /> },
                  { t: "“No aparezco en Google”", d: "Tus vecinos encuentran a tu competencia antes que a ti.", icon: <Search className="text-red-500" aria-hidden="true" /> },
                  { t: "“Dependo solo del boca a boca”", d: "Si no te recomiendan hoy, no facturas mañana.", icon: <CircleAlert className="text-red-500" aria-hidden="true" /> },
                  { t: "“Me contactan, pero no convierten”", d: "Recibes mensajes de curiosos que no compran nada.", icon: <MousePointerClick className="text-red-500" aria-hidden="true" /> }
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
              <div className="lg:hidden absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-slate-100 text-blue-600">
                <ArrowDown size={16} aria-hidden="true" />
              </div>
              <div className="mb-6 md:mb-10">
                <span className="text-blue-200 font-bold uppercase tracking-widest text-xs mb-2 block italic">Nuestra solución</span>
                <h2 className="text-2xl md:text-4xl font-extrabold leading-tight">Así es como vamos a traerte resultados</h2>
              </div>
              <div className="space-y-6 md:space-y-8">
                {[
                  { step: "01", title: "Analizamos tu negocio", desc: "Entendemos qué vendes y trazamos la ruta más corta al contacto.", icon: <Search aria-hidden="true" /> },
                  { step: "02", title: "Web para captar contactos", desc: "Diseñada al 100% para que el usuario pulse el botón de llamar.", icon: <TrendingUp aria-hidden="true" /> },
                  { step: "03", title: "Conexión Google y WhatsApp", desc: "Tu web trabajará para ti 24/7 en los canales que importan.", icon: <Zap aria-hidden="true" /> }
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
                <Button tallyId="q4GKJO" variant="secondary" className="w-full py-4 text-blue-600 font-black">
                  Solicitar Propuesta
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
            <p className="text-base md:text-lg text-slate-600 mb-8 md:mb-10 leading-relaxed">
              Mientras otras agencias te hablan de "transformación digital", nosotros nos centramos en lo único que te importa: <strong>que tu teléfono suene.</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
               {[
                 { t: "Precios Públicos", d: "Sin presupuestos sorpresa." },
                 { t: "Sin Humo", d: "Herramientas que sirven." },
                 { t: "Webs Rápidas", d: "Optimizado para móvil." },
                 { t: "Foco en Venta", d: "Diseño para contactar." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center group">
                    <div className="bg-blue-100 text-blue-600 p-2.5 rounded-full h-fit shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <CircleCheck size={20} strokeWidth={3} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg md:text-xl leading-tight mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-sm md:text-base leading-tight">{item.d}</p>
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
                      <span className="text-[10px] font-black uppercase text-slate-400">Agencia Tradicional</span>
                   </div>
                   <p className="text-slate-500 text-xs italic">"Vendemos sistemas holísticos digitales..."</p>
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

      {/* 4. WHY TRUST YOU */}
      <Section className="bg-white py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-slate-900">Trabajar con nosotros es fácil</h2>
          <p className="text-slate-500 text-sm md:text-lg">Eliminamos el riesgo para que solo te preocupes de tus clientes.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
          {[
            { title: "Precios claros", desc: "Presupuesto cerrado.", icon: <CreditCard className="w-6 h-6" aria-hidden="true" /> },
            { title: "Sin permanencia", desc: "La web es tuya.", icon: <Lock className="w-6 h-6" aria-hidden="true" /> },
            { title: "En español", desc: "Tu mismo idioma.", icon: <UserCheck className="w-6 h-6" aria-hidden="true" /> },
            { title: "Entrega rápida", desc: "En pocos días.", icon: <Clock className="w-6 h-6" aria-hidden="true" /> },
            { title: "Para PYMEs", desc: "Soluciones reales.", icon: <Globe className="w-6 h-6" aria-hidden="true" />, featured: true }
          ].map((item, i) => (
            <div key={i} className={`p-4 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50 transition-colors group ${item.featured ? 'col-span-2 md:col-span-1' : ''}`}>
              <div className="text-blue-600 mb-3 bg-white p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-extrabold text-slate-900 mb-1 text-[11px] md:text-sm">{item.title}</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. PRICING PACKS */}
      <Section id="packs" className="bg-slate-50 border-t border-slate-200">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-slate-900">Inversión clara, resultados directos</h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto">Selecciona el pack que encaja con tu negocio.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* 6. WHAT OUR CLIENTS GET */}
      <Section className="bg-white py-12 md:py-20 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-2 block">Directo al grano</span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Esto es lo que consiguen nuestros clientes</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">No vendemos humo, vendemos herramientas que impulsan la facturación diaria de negocios locales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <PhoneCall size={32} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Más contactos reales</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tu teléfono sonará más a menudo. Optimizamos cada rincón de la web para que las visitas se conviertan en llamadas y mensajes de WhatsApp.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Globe size={32} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Dominio en Google Maps</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Aparecerás cuando tus vecinos busquen tus servicios cerca de ti. No hace falta que estén en tu puerta para que sepan que eres la mejor opción.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Zap size={32} aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Imagen de Profesional</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Genera confianza inmediata. Una web rápida y moderna le dice al cliente que eres serio y que puede confiar en tu servicio.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ SNAPSHOT */}
      <Section className="bg-slate-50 py-12 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4">¿Dudas? Resolvemos las más comunes</h2>
            <p className="text-slate-600">Transparencia total antes de empezar.</p>
          </div>
          <div className="space-y-2">
            {FAQS.slice(0, 4).map((faq, i) => (
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

      {/* 8. FINAL CTA */}
      <Section className="py-20 text-center bg-white">
        <div className="max-w-4xl mx-auto bg-slate-900 text-white p-8 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight">¿Hablamos de cómo <br/> traer más clientes?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
            Sin compromiso. Te damos una propuesta clara y un presupuesto cerrado en menos de 24h.
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
