
import React from 'react';
import { Section, Button, Breadcrumbs, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { FAQS } from '../constants';
import { Link } from 'react-router';
import { 
  Layout, 
  Search, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  MousePointer2, 
  Settings
} from 'lucide-react';

const ServiceSection: React.FC<{
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  expectedResult: string;
  includes: { t: string; d: string }[];
  bgColor?: string;
  moreInfoPath?: string;
  moreInfoLabel?: string;
}> = ({ id, icon, title, description, expectedResult, includes, bgColor = "bg-white", moreInfoPath, moreInfoLabel }) => (
  <Section id={id} className={`${bgColor} border-b border-slate-50 py-12 md:py-24`}>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
      <div className="lg:sticky lg:top-24">
        <div className="bg-blue-50 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-blue-600 mb-6 border border-blue-100/50 shadow-sm">
          {icon}
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-4 leading-tight">
          {title}
        </h2>
        <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed text-balance">
          {description}
        </p>
        <div className="bg-[#0B1426] text-white p-6 rounded-2xl border-l-4 border-blue-600 shadow-xl mb-8">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-400 mb-2">Resultado esperado</h3>
          <p className="text-sm md:text-base font-medium italic leading-relaxed text-slate-200">
            "{expectedResult}"
          </p>
        </div>
        {moreInfoPath && (
          <Link to={moreInfoPath} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline group">
            {moreInfoLabel} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        )}
      </div>
      <div className="space-y-6">
        <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm">
          <h3 className="text-xl font-black mb-8 text-slate-900 tracking-tight">¿Qué incluye?</h3>
          <ul className="space-y-6">
            {includes.map((item, i) => (
              <li key={i} className="flex gap-4 items-start group">
                <div className="bg-green-100 p-1.5 rounded-full shrink-0 mt-0.5 border border-green-200 text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
                  <CheckCircle2 size={16} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base md:text-lg mb-0.5 leading-tight">{item.t}</h4>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed">{item.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

const Services: React.FC = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": CANONICAL_DOMAIN
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": `${CANONICAL_DOMAIN}${METADATA.services.path}`
      }
    ]
  };

  return (
    <main className="bg-white overflow-x-hidden">
      <SEO {...METADATA.services} schema={breadcrumbSchema} />
      <Section className="pt-6 md:pt-20 pb-8 bg-gradient-to-b from-slate-50 to-white">
        <Breadcrumbs items={[{ label: 'Servicios' }]} />
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 leading-tight mb-4 md:mb-6 tracking-tight">
            Servicios para vender, <span className="text-blue-600">sin humos.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mb-2 leading-relaxed">
            Hemos diseñado 4 pilares estratégicos para que tu negocio local no solo exista en internet, sino que lidere su zona y genere contactos diarios.
          </p>
        </div>
      </Section>
      <ServiceSection 
        id="web"
        icon={<Layout size={24} />}
        title="1. Web que Vende: Tu Escaparate 24/7"
        description="No diseñamos 'folletos digitales' estáticos. Creamos máquinas de captación que cargan al instante y guían al cliente directamente hacia el botón de contactar."
        expectedResult="Una imagen profesional que genera confianza y llamadas desde el primer día."
        moreInfoPath="/web-que-vende"
        moreInfoLabel="Ver detalles de Web que Vende"
        includes={[
          { t: "Diseño Mobile-First", d: "Optimizada para el 90% de tus clientes que usan el móvil para encontrarte." },
          { t: "Carga Ultra-Rápida", d: "Menos de 2 segundos para evitar que el cliente se desespere y se vaya." },
          { t: "Copywriting de Venta", d: "Textos escritos para convencer, eliminando las dudas del cliente." },
          { t: "Certificados SSL y Seguridad", d: "Tu web segura y marcando 'Sitio Seguro' en todos los navegadores." },
          { t: "Hosting y Dominio (1 año)", d: "Gestión técnica total para que tú no tengas que configurar nada." }
        ]}
      />
      <ServiceSection 
        id="seo-local"
        bgColor="bg-slate-50/30"
        icon={<Search size={24} />}
        title="2. SEO Local: Domina tu Ciudad"
        description="Aparecer el primero en Google Maps es la forma más rentable de captar clientes que buscan tus servicios justo cuando están cerca de tu negocio."
        expectedResult="Aparecerás el primero cuando tus vecinos busquen tus servicios cerca de ti."
        moreInfoPath="/seo-local"
        moreInfoLabel="Más detalles sobre SEO Local"
        includes={[
          { t: "Ficha Google Business", d: "Optimización total de tu perfil de Maps con fotos y palabras clave." },
          { t: "Palabras Clave de Barrio", d: "Atacamos los términos exactos que tus clientes locales escriben." },
          { t: "Estrategia de Reseñas", d: "Un sistema sencillo para que tus clientes te dejen las 5 estrellas." },
          { t: "Consistencia NAP", d: "Aseguramos que tus datos sean idénticos en todo internet." },
          { t: "Reporte de Visibilidad", d: "Mira cuánta gente nueva te ha encontrado gracias a Maps." }
        ]}
      />
      <ServiceSection 
        id="leads"
        icon={<MousePointer2 size={24} />}
        title="3. Sistemas de Captación (Leads)"
        description="Convertimos las visitas en oportunidades de venta reales. Implementamos embudos directos que facilitan el contacto instantáneo."
        expectedResult="Un flujo constante de solicitudes de presupuesto directas a tu WhatsApp."
        moreInfoPath="/captacion-de-clientes"
        moreInfoLabel="Ver sistema de captación"
        includes={[
          { t: "Botón Directo WhatsApp", d: "La vía de contacto favorita del 95% de los usuarios locales." },
          { t: "Formularios de Venta", d: "Diseñados para filtrar clientes reales de simples curiosos." },
          { t: "Notificaciones al Instante", d: "Recibe un aviso en tu móvil cada vez que alguien pregunte." },
          { t: "Captura de Datos 24/7", d: "Tu web recoge interesados incluso mientras estás durmiendo." },
          { t: "Botón de Llamada Rápida", d: "Un clic y el cliente está hablando contigo por teléfono." }
        ]}
      />
      <ServiceSection 
        id="soporte"
        bgColor="bg-slate-50/30"
        icon={<Settings size={24} />}
        title="4. Crecimiento y Soporte Mensual"
        description="No te dejamos solo tras el lanzamiento. Nos encargamos de que tu web esté siempre al día y de que tu visibilidad en Google siga creciendo mes a mes."
        expectedResult="Tranquilidad total delegando la parte técnica y la visibilidad de tu negocio."
        moreInfoPath="/mantenimiento-web-seo"
        moreInfoLabel="Ver servicios de mantenimiento"
        includes={[
          { t: "Actualizaciones Técnicas", d: "Mantenemos tu web segura y rápida frente a cualquier cambio." },
          { t: "Gestión Mensual de Maps", d: "Publicamos novedades para que Google vea que estás activo." },
          { t: "Soporte Vía WhatsApp", d: "Si tienes una duda o necesitas un cambio, nos escribes y listo." },
          { t: "Análisis de Conversión", d: "Revisamos los datos cada mes para mejorar los resultados." },
          { t: "Informes sin tecnicismos", d: "Te explicamos qué hemos hecho y cuántos clientes han entrado." }
        ]}
      />
      <Section className="bg-slate-50 py-12 md:py-24 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Dudas sobre nuestros servicios</h2>
            <p className="text-slate-600">Resolvemos las preguntas más comunes antes de empezar.</p>
          </div>
          <div className="space-y-2">
            {FAQS.slice(0, 5).map((faq, i) => (
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
      <Section className="py-20 text-center bg-white">
        <div className="max-w-3xl mx-auto bg-slate-900 text-white p-12 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">¿Dudas sobre qué servicio necesitas?</h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed">Analizamos tu situación actual gratis y te recomendamos la ruta más corta para atraer clientes.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button tallyId="q4GKJO" variant="secondary" className="px-12 py-4 text-blue-600 font-black">Hablar con un experto</Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-12 py-4 border-white/40 !text-white hover:bg-white/10 hover:!text-white">Ver Tarifas Públicas</Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Services;
