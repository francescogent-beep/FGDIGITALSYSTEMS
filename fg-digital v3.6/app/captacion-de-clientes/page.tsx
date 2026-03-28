import React from 'react';
import { Section, Button, Breadcrumbs } from '@/components/UI';
import { METADATA, CANONICAL_DOMAIN } from '@/seo/metadata';
import { CheckCircle2, MessageCircle, MousePointer2, Zap, Phone } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: METADATA.captacionLeads.title,
  description: METADATA.captacionLeads.description,
  alternates: {
    canonical: `${CANONICAL_DOMAIN}${METADATA.captacionLeads.path}`,
  },
};

const CaptacionLeadsPage = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${CANONICAL_DOMAIN}/servicios` },
          { "@type": "ListItem", "position": 3, "name": "Captación de Clientes" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${CANONICAL_DOMAIN}${METADATA.captacionLeads.path}/#service`,
        "name": "Sistemas de Captación de Clientes (Leads)",
        "description": METADATA.captacionLeads.description,
        "provider": { "@id": `${CANONICAL_DOMAIN}/#organization` },
        "serviceType": "Lead Generation"
      }
    ]
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      <Section className="pt-20 bg-slate-50">
        <Breadcrumbs items={[{ label: 'Servicios', path: '/servicios' }, { label: 'Captación de Clientes' }]} />
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          Sistemas de Captación de Clientes para Servicios
        </h1>
        <p className="text-xl text-slate-600 max-w-7xl leading-relaxed">
          Atraer visitas a tu web no sirve de nada si no se convierten en oportunidades de venta reales. Diseñamos sistemas que facilitan el contacto instantáneo, eliminando la fricción entre el interés del cliente y tu respuesta comercial.
        </p>
      </Section>

      <Section className="py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Para quién es este servicio</h2>
            <ul className="space-y-4">
              {[
                "Profesionales que dependen de agendar citas o presupuestos",
                "Negocios que quieren automatizar la recepción de interesados",
                "Empresas que necesitan validar la calidad de sus contactos",
                "Emprendedores que buscan inmediatez a través de WhatsApp"
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
            <h2 className="text-2xl font-black mb-6">Herramientas de conversión</h2>
            <div className="grid gap-6">
              {[
                { icon: <MessageCircle />, t: "Integración WhatsApp", d: "Botones inteligentes que inician la venta al instante." },
                { icon: <MousePointer2 />, t: "Formularios de Venta", d: "Captura de datos diseñada para filtrar curiosos." },
                { icon: <Zap />, t: "Avisos en tiempo real", d: "Recibe una notificación cada vez que entre un lead." },
                { icon: <Phone />, t: "Call-to-Action directo", d: "Llamadas rápidas optimizadas para dispositivos móviles." }
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
        <p className="text-lg text-slate-600 max-w-7xl leading-relaxed mb-10">
          Conseguimos transformar una web pasiva en una máquina de generación de contactos. Espera recibir solicitudes de presupuesto, consultas directas y una reducción drástica en el tiempo que tardas en responder a tus clientes potenciales.
        </p>
        <Link href="/mantenimiento-web-seo" className="text-blue-600 font-bold hover:underline">Soporte continuo para mejorar la captación</Link>
      </Section>

      <Section className="py-12 md:py-24">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12">Cómo trabajamos la captación</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: "1", t: "Detección de Fricción", d: "Vemos por qué tus clientes no te escriben actualmente." },
            { n: "2", t: "Diseño del Embudo", d: "Creamos el camino más corto hacia tu WhatsApp o email." },
            { n: "3", t: "Automatización", d: "Conectamos tu web con tu teléfono para respuestas rápidas." }
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
          <h3 className="text-2xl md:text-4xl font-black mb-8">¿Quieres recibir contactos cada día?</h3>
          <Button tallyId="q4GKJO" variant="primary">Activar Sistema de Captación</Button>
          <div className="mt-8">
            <Link href="/servicios" className="text-slate-400 hover:text-white">Volver a servicios</Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default CaptacionLeadsPage;
