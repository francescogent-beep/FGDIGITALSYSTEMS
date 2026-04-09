import React from 'react';
import { Section, Button, PricingCard, FAQAccordion, Breadcrumbs } from '@/components/UI';
import { SEO } from '@/components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '@/seo/metadata';
import { PRICING_PLANS } from '@/constants';
import { 
  CircleCheck, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Search, 
  CircleAlert, 
  Clock,
  UserCheck,
  Lock,
  PhoneCall,
  Globe,
  Layout,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: METADATA.disenoWebMurcia.title,
  description: METADATA.disenoWebMurcia.description,
  alternates: {
    canonical: `${CANONICAL_DOMAIN}${METADATA.disenoWebMurcia.path}`,
  },
};

const DisenoWebMurciaPage = () => {
  const faqs = [
    { question: "¿Por qué elegir un diseño web específico para Murcia?", answer: "Porque el comportamiento de búsqueda en la Región es muy local. Optimizamos tu web para que conecte con el usuario murciano, usando un lenguaje directo y facilitando el contacto por WhatsApp." },
    { question: "¿Cuánto tarda la entrega en la Región de Murcia?", answer: "Cumplimos los mismos plazos que en todo el país: de 3 a 5 días para el pack básico y hasta 15 días para sistemas de venta completos." },
    { question: "¿La web incluye dominio y hosting?", answer: "Sí, gestionamos todo el soporte técnico para que tú solo tengas que preocuparte de atender a tus nuevos clientes murcianos." },
    { question: "¿Es una cuota mensual?", answer: "No. En FG Digital Systems creemos en la propiedad total. Pagas por tu web una vez y es tuya para siempre." },
    { question: "¿Puedo aparecer el primero en Google Murcia?", answer: "Nuestras webs están preparadas técnicamente para el SEO. Si además contratas un pack de posicionamiento, trabajaremos activamente para que superes a tu competencia local." }
  ];

  const murciaSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_DOMAIN}${METADATA.disenoWebMurcia.path}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": "Diseño Web Murcia" }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `${CANONICAL_DOMAIN}${METADATA.disenoWebMurcia.path}/#webpage`,
        "url": `${CANONICAL_DOMAIN}${METADATA.disenoWebMurcia.path}`,
        "name": "Diseño Web Murcia | Especialistas en Pymes",
        "isPartOf": { "@id": `${CANONICAL_DOMAIN}/#website` },
        "breadcrumb": { "@id": `${CANONICAL_DOMAIN}${METADATA.disenoWebMurcia.path}/#breadcrumb` },
        "inLanguage": "es-ES",
        "description": METADATA.disenoWebMurcia.description
      },
      {
        "@type": "ProfessionalService",
        "@id": `${CANONICAL_DOMAIN}/#organization`,
        "name": "FG Digital Systems",
        "url": CANONICAL_DOMAIN,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calle Rey Don Pedro I, 9",
          "addressLocality": "Murcia",
          "addressRegion": "Murcia",
          "postalCode": "30009",
          "addressCountry": "ES"
        }
      },
      {
        "@type": "Service",
        "@id": `${CANONICAL_DOMAIN}${METADATA.disenoWebMurcia.path}/#service`,
        "name": "Diseño Web Profesional en Murcia",
        "description": "Creamos webs de alto impacto para negocios locales en la Región de Murcia.",
        "provider": { "@id": `${CANONICAL_DOMAIN}/#organization` },
        "areaServed": [
          {
            "@type": "City",
            "@id": "https://www.wikidata.org/wiki/Q12225",
            "name": "Murcia",
            "sameAs": "https://es.wikipedia.org/wiki/Murcia"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Diseño Web Murcia",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Diseño Web Pymes Murcia" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mantenimiento Web Murcia" } }
          ]
        }
      }
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(murciaSchema) }}
      />
      
      {/* 1. HERO */}
      <Section className="pt-16 md:pt-32 pb-20 md:pb-32 text-center bg-white overflow-hidden">
        <Breadcrumbs items={[{ label: 'Diseño Web Murcia' }]} />
        <div className="max-w-7xl mx-auto mt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 text-slate-600 rounded-full text-[13px] font-semibold mb-8 border border-slate-200">
            <ShieldCheck size={14} className="text-blue-500" />
            Líderes en Diseño Web para Pymes de Murcia
          </div>
          <h1 className="text-5xl md:text-8xl font-bold text-slate-800 leading-[1.05] mb-10 text-balance tracking-tightest">
            Diseño Web en Murcia: <span className="text-blue-500">Webs que venden.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 mb-12 md:mb-16 max-w-7xl mx-auto leading-relaxed font-medium">
            No diseñamos "folletos digitales" que nadie mira. Creamos <strong>máquinas de captación de clientes</strong> para negocios murcianos con precios cerrados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-5 px-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-12 py-5 text-lg shadow-sm">
              Presupuesto Web Murcia
            </Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-12 py-5 text-lg">
              Ver Packs de Diseño
            </Button>
          </div>
          <div className="mt-16 md:mt-24 text-slate-400 text-[11px] font-bold uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-slate-300" /> Entrega en 5 días</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-slate-300" /> Sin cuotas mensuales</span>
            <span className="flex items-center gap-2"><CircleCheck size={16} className="text-slate-300" /> Soporte Murciano</span>
          </div>
        </div>
      </Section>

      {/* 2. PROBLEMS & SOLUTIONS */}
      <Section className="bg-slate-50 border-y border-slate-200/50 py-16 md:py-32 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
            <div className="space-y-10 md:space-y-12">
              <div className="mb-6 md:mb-12">
                <span className="text-blue-500 font-bold uppercase tracking-widest text-[11px] mb-4 block">Dificultades en Murcia</span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight tracking-tight">
                  ¿Tu web actual es un lastre?
                </h2>
              </div>
              <div className="grid gap-5">
                {[
                  { t: "“Tarda una eternidad en cargar”", d: "El cliente murciano no espera, se va a la competencia.", icon: <Clock className="text-slate-400" /> },
                  { t: "“No se ve bien en el móvil”", d: "El 90% de tus clientes te buscan desde el smartphone.", icon: <Layout className="text-slate-400" /> },
                  { t: "“Nadie me encuentra en la Región”", d: "Si no estás optimizado, eres invisible en Murcia.", icon: <Search className="text-slate-400" /> },
                  { t: "“Es bonita, pero nadie llama”", d: "Le falta estructura de venta y llamadas a la acción.", icon: <CircleAlert className="text-slate-400" /> }
                ].map((p, i) => (
                   <div key={i} className="flex gap-5 p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm group hover:border-blue-500/20">
                    <div className="bg-slate-50 p-3 rounded-2xl h-fit group-hover:bg-blue-50 group-hover:text-blue-500">{p.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg mb-1">{p.t}</h4>
                      <p className="text-sm text-slate-500 font-medium">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl relative flex flex-col justify-center mt-12 lg:mt-0 border border-white/5">
              <div className="mb-10 md:mb-16">
                <span className="text-blue-400 font-bold uppercase tracking-widest text-[11px] mb-4 block italic">Nuestro Método en Murcia</span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">Webs de alto impacto local</h2>
              </div>
              <div className="space-y-10 md:space-y-12">
                {[
                  { step: "01", title: "Diseño para el murciano", desc: "Adaptamos los textos y la estética al público de tu zona.", icon: <Layout className="text-white" /> },
                  { step: "02", title: "Velocidad de carga TOP", desc: "Usamos tecnologías modernas para que tu web vuele.", icon: <Zap className="text-white" /> },
                  { step: "03", title: "Conversión WhatsApp", desc: "Facilitamos que te escriban con un solo clic.", icon: <PhoneCall className="text-white" /> }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 md:gap-8 relative group">
                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center font-bold text-blue-400 text-xl md:text-2xl border border-white/10 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500">
                      {s.step}
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">{s.title}</h4>
                      <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 md:mt-16 pt-10 md:pt-12 border-t border-white/5">
                <Button tallyId="q4GKJO" variant="primary" className="w-full py-6 text-xl shadow-lg">
                  Hablar con un Experto
                </Button>
              </div>
            </div>
          </div>
      </Section>

      {/* 3. LA DIFERENCIA */}
      <Section className="py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-6 md:mb-8 leading-tight">Cero humos, solo resultados en Murcia</h2>
            <p className="text-base md:text-lg text-slate-700 mb-8 md:mb-10 leading-relaxed">
              Mientras otras agencias murcianas te complican con términos raros, nosotros te damos una <strong>herramienta de venta clara y funcional.</strong>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
               {[
                 { t: "Entrega Rápida", d: "Tu web lista en días, no meses." },
                 { t: "SEO Local Base", d: "Preparada para Google Murcia." },
                 { t: "Mobile First", d: "Perfecta en cualquier móvil." },
                 { t: "Autogestionable", d: "Cambia tus precios tú mismo." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-4 items-center group">
                    <div className="bg-blue-100 text-blue-600 p-2.5 rounded-full h-fit shrink-0 group-hover:bg-blue-600 group-hover:text-white">
                      <CheckCircle2 size={20} strokeWidth={3} />
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
                      <span className="text-[10px] font-black uppercase text-slate-400">Agencia Convencional</span>
                   </div>
                   <p className="text-slate-500 text-xs italic">"Hacemos un branding holístico de 3 meses..."</p>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-2xl border border-slate-800">
                   <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase text-blue-400">FG DIGITAL SYSTEMS MURCIA</span>
                   </div>
                   <p className="text-white font-bold text-base leading-tight">"Web Starter: Lista este viernes."</p>
                </div>
             </div>
          </div>
        </div>
      </Section>

      {/* 4. TRUST BAR */}
      <Section className="bg-white py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 text-slate-900">La tranquilidad de un socio murciano</h2>
          <p className="text-slate-500 text-sm md:text-lg">Nos encargamos de todo lo técnico por ti.</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-6">
          {[
            { title: "Dominio Incluido", desc: "Tú eliges el nombre.", icon: <Globe className="w-6 h-6" /> },
            { title: "Alojamiento Pro", icon: <Lock className="w-6 h-6" />, desc: "Web segura y rápida." },
            { title: "Sin Permanencia", icon: <UserCheck className="w-6 h-6" />, desc: "La web es tuya." },
            { title: "WhatsApp Directo", icon: <MessageCircle className="w-6 h-6" />, desc: "Clientes a un clic." },
            { title: "Formación", icon: <Layout className="w-6 h-6" />, desc: "Aprende a usarla.", featured: true }
          ].map((item, i) => (
            <div key={i} className={`p-4 md:p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-center text-center hover:bg-blue-50 group ${item.featured ? 'col-span-2 md:col-span-1' : ''}`}>
              <div className="text-blue-600 mb-3 bg-white p-3 rounded-xl shadow-sm">
                {item.icon}
              </div>
              <h4 className="font-extrabold text-slate-900 mb-1 text-[11px] md:text-sm">{item.title}</h4>
              <p className="text-slate-500 text-[10px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. PRICING */}
      <Section id="packs" className="bg-slate-50 border-t border-slate-200">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-3 text-slate-900">Precios cerrados de Diseño Web</h2>
          <p className="text-slate-600 text-sm md:text-base max-w-7xl mx-auto">Selecciona el plan que mejor encaje con tu negocio en Murcia.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {PRICING_PLANS.slice(0, 3).map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </Section>

      {/* 6. RESULTS */}
      <Section className="bg-white py-12 md:py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">Lo que dicen los negocios de Murcia</h2>
            <p className="text-slate-500 max-w-7xl mx-auto">Webs que transforman la facturación diaria de autónomos y pymes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Más Presupuestos</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Pasarás de tener una web "bonita" a una web que no para de generar solicitudes de presupuesto reales.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Search size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Visible en la Región</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Tus clientes murcianos te encontrarán antes que a nadie gracias a nuestra estructura optimizada.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 shadow-lg shadow-blue-500/20">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cero Problemas</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Olvídate de caídas o errores. Nosotros nos encargamos de que tu web siempre esté lista para vender.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* 7. FAQ */}
      <Section className="bg-slate-50 py-12 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Dudas sobre tu nueva Web en Murcia</h2>
            <p className="text-slate-600">Resolvemos las preguntas más frecuentes de los empresarios murcianos.</p>
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
          <h2 className="text-3xl md:text-6xl font-black mb-6 leading-tight">¿Hacemos que tu negocio murciano?</h2>
          <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-7xl mx-auto leading-relaxed">
            Pide hoy mismo tu auditoría gratuita y te diremos exactamente cómo podemos mejorar tu web.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-12 py-4 md:px-14 md:py-6 text-xl w-full sm:w-auto">
              Presupuesto Web Gratis
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default DisenoWebMurciaPage;
