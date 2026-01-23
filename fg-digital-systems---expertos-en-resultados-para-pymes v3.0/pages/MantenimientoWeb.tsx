
import React from 'react';
import { Section, Button, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { CheckCircle2, Settings, Shield, BarChart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router';

const MantenimientoWeb: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
      { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${CANONICAL_DOMAIN}/servicios-diseno-web-seo` },
      { "@type": "ListItem", "position": 3, "name": "Mantenimiento y Soporte", "item": `${CANONICAL_DOMAIN}/mantenimiento-web-seo` }
    ]
  };

  return (
    <main className="bg-white">
      <SEO {...METADATA.mantenimientoWeb} schema={schema} />
      
      <Section className="pt-20 bg-slate-50">
        <Breadcrumbs items={[{ label: 'Servicios', path: '/servicios-diseno-web-seo' }, { label: 'Mantenimiento' }]} />
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Mantenimiento Web y Soporte SEO Estratégico
        </h1>
        <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
          Lanzar tu web es solo el primer paso. El mercado y Google cambian constantemente; nuestro servicio de soporte asegura que tu negocio siga siendo competitivo, rápido y seguro, permitiéndote centrarte al 100% en tu trabajo.
        </p>
      </Section>

      <Section className="py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Para quién es este servicio</h2>
            <ul className="space-y-4">
              {[
                "Empresas que quieren delegar la parte técnica por completo",
                "Negocios que buscan una mejora continua en su SEO local",
                "Dueños de negocios que no tienen tiempo para actualizar su web",
                "Pymes que necesitan un socio digital para resolver dudas rápidas"
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
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white">
            <h2 className="text-2xl font-black mb-6 text-blue-400">Servicio de acompañamiento</h2>
            <div className="grid gap-6">
              {[
                { icon: <Settings />, t: "Actualizaciones", d: "Mantenemos tu infraestructura al día y veloz." },
                { icon: <Shield />, t: "Seguridad Proactiva", d: "Protección constante contra ataques y malware." },
                { icon: <BarChart />, t: "Informes de SEO", d: "Datos reales sobre tu crecimiento en Google." },
                { icon: <MessageSquare />, t: "Soporte WhatsApp", d: "Resolución de dudas técnicas sin esperas." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-blue-400 shrink-0">{item.icon}</div>
                  <div>
                    <h4 className="font-bold">{item.t}</h4>
                    <p className="text-slate-400 text-sm">{item.d}</p>
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
          La tranquilidad de saber que tu escaparate digital no fallará. Monitorizamos tu rendimiento mensualmente y ajustamos la estrategia SEO para que tu visibilidad en tu ciudad sea estable y ascendente a largo plazo.
        </p>
        <Link to="/tarifas-diseno-web" className="text-blue-600 font-bold hover:underline">Ver precios de acompañamiento mensual</Link>
      </Section>

      <Section className="py-12 md:py-24">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12">Nuestra metodología de soporte</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: "1", t: "Monitorización", d: "Vigilamos la velocidad y disponibilidad de tu web." },
            { n: "2", t: "Mejora Continua", d: "Implementamos ajustes técnicos basados en datos." },
            { n: "3", t: "Reporting Claro", d: "Te explicamos resultados sin usar términos complejos." }
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
          <h3 className="text-2xl md:text-4xl font-black mb-8">¿Buscas un socio técnico de confianza?</h3>
          <Button tallyId="q4GKJO" variant="primary">Solicitar Plan de Soporte</Button>
          <div className="mt-8">
            <Link to="/servicios-diseno-web-seo" className="text-slate-400 hover:text-white transition-colors">Volver a servicios</Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default MantenimientoWeb;
