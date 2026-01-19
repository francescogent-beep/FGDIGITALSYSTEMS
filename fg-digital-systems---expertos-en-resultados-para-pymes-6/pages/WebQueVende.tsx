
import React from 'react';
import { Section, Button, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { CheckCircle2, Layout, Zap, Smartphone, Search, Lock } from 'lucide-react';
import { Link } from 'react-router';

const WebQueVende: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
      { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${CANONICAL_DOMAIN}/servicios-diseno-web-seo` },
      { "@type": "ListItem", "position": 3, "name": "Web que Vende", "item": `${CANONICAL_DOMAIN}/web-que-vende` }
    ]
  };

  return (
    <main className="bg-white">
      <SEO {...METADATA.webQueVende} schema={schema} />
      
      <Section className="pt-20 bg-slate-50">
        <Breadcrumbs items={[{ label: 'Servicios', path: '/servicios-diseno-web-seo' }, { label: 'Web que Vende' }]} />
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Diseño Web Profesional enfocado a Generar Clientes
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          Tener una web que simplemente "está online" es un coste innecesario. Una web profesional debe ser tu mejor comercial: activa las 24 horas, resolviendo dudas y guiando a los interesados hacia la compra o el contacto.
        </p>
      </Section>

      <Section className="py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Para quién es este servicio</h2>
            <ul className="space-y-4">
              {[
                "Negocios locales que no reciben llamadas desde su web actual",
                "Autónomos que quieren proyectar una imagen de autoridad y confianza",
                "Empresas de servicios que necesitan filtrar clientes de calidad",
                "Negocios que dependen exclusivamente de recomendaciones externas"
              ].map((item, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="bg-blue-100 text-blue-600 p-1 rounded-full shrink-0 mt-1">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-600 rounded-[2rem] p-8 md:p-12 text-white">
            <h2 className="text-2xl font-black mb-6">Qué incluye el sistema</h2>
            <div className="grid gap-6">
              {[
                { icon: <Smartphone />, t: "Optimización móvil total", d: "Diseñada para el dispositivo que usan tus clientes." },
                { icon: <Zap />, t: "Velocidad extrema", d: "Cargas instantáneas para no perder ni una visita." },
                { icon: <Search />, t: "Estructura para Google", d: "Base técnica lista para el posicionamiento." },
                { icon: <Lock />, t: "Seguridad y Hosting", d: "Certificados SSL y mantenimiento técnico fluido." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold">{item.t}</h4>
                    <p className="text-blue-100 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50 py-12 md:py-24 border-y border-slate-200">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Resultado esperado</h2>
        <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-10">
          Obtendrás una herramienta de negocio estable y profesional. No prometemos "ser virales", prometemos un sistema que transmita la seriedad de tu empresa y facilite que las personas interesadas en tus servicios den el primer paso para contactarte.
        </p>
        <Link to="/seo-local" className="text-blue-600 font-bold hover:underline">Ver cómo el SEO Local potencia este sistema</Link>
      </Section>

      <Section className="py-12 md:py-24">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12">Cómo trabajamos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: "1", t: "Análisis de Negocio", d: "Entendemos a quién vendes y qué problemas solucionas." },
            { n: "2", t: "Estrategia de Venta", d: "Diseñamos el recorrido que hará el cliente en la web." },
            { n: "3", t: "Lanzamiento y SEO", d: "Publicamos y dejamos todo listo para que Google te encuentre." }
          ].map((step, i) => (
            <div key={i} className="p-8 bg-white border border-slate-200 rounded-3xl">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-black mb-4">{step.n}</div>
              <h4 className="font-black text-slate-900 mb-2">{step.t}</h4>
              <p className="text-slate-500 text-sm">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pb-24">
        <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white">
          <h3 className="text-2xl md:text-4xl font-black mb-8">¿Listo para una web que trabaje para ti?</h3>
          <Button tallyId="q4GKJO" variant="primary">Solicitar Propuesta de Diseño</Button>
          <div className="mt-8">
            <Link to="/servicios-diseno-web-seo" className="text-slate-400 hover:text-white transition-colors">Volver a todos los servicios</Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default WebQueVende;
