import React from 'react';
import { Section, Button, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { CheckCircle2, MapPin, Star, TrendingUp, Search } from 'lucide-react';
import { Link } from 'react-router';

const SEOLocal: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": "Servicios", "item": `${CANONICAL_DOMAIN}/servicios-diseno-web-seo` },
          { "@type": "ListItem", "position": 3, "name": "SEO Local" }
        ]
      },
      {
        "@type": "Service",
        "@id": `${CANONICAL_DOMAIN}${METADATA.seoLocal.path}/#service`,
        "name": "SEO Local y Optimización en Google Maps",
        "description": METADATA.seoLocal.description,
        "provider": { "@id": `${CANONICAL_DOMAIN}/#organization` },
        "serviceType": "SEO Local",
        "areaServed": { "@type": "City", "name": "Murcia" }
      }
    ]
  };

  return (
    <main className="bg-white">
      <SEO {...METADATA.seoLocal} schema={schema} />
      
      <Section className="pt-20 bg-slate-50">
        <Breadcrumbs items={[{ label: 'Servicios', path: '/servicios-diseno-web-seo' }, { label: 'SEO Local' }]} />
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
          SEO Local: Domina el mapa y las búsquedas en tu ciudad
        </h1>
        <p className="text-xl text-slate-600 max-w-7xl leading-relaxed">
          El SEO Local no es una opción, es una necesidad. Si un cliente potencial busca tus servicios "cerca de mí" y no apareces en los primeros resultados de Google Maps, estás regalando facturación a tu competencia más directa.
        </p>
      </Section>

      <Section className="py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">Para quién es este servicio</h2>
            <ul className="space-y-4">
              {[
                "Clínicas y centros de salud con local físico",
                "Restaurantes y negocios de hostelería locales",
                "Empresas de reformas o servicios a domicilio",
                "Despachos profesionales (abogados, gestores) en zonas urbanas"
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
            <h2 className="text-2xl font-black mb-6 text-blue-400">Puntos clave de la estrategia</h2>
            <div className="grid gap-6">
              {[
                { icon: <MapPin />, t: "Google Business Profile", d: "Optimización total de tu ficha de Maps." },
                { icon: <Search />, t: "Keywords de Barrio", d: "Atacamos los términos de búsqueda locales reales." },
                { icon: <Star />, t: "Gestión de Autoridad", d: "Mejoramos tu reputación digital mediante reseñas." },
                { icon: <TrendingUp />, t: "Citas Locales", d: "Consistencia NAP en directorios estratégicos." }
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

      <Section className="bg-blue-50 py-12 md:py-24 border-y border-blue-100">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Resultado esperado</h2>
        <p className="text-lg text-slate-600 max-w-7xl leading-relaxed mb-10">
          El objetivo es situar tu negocio en el "Local Pack" (los 3 primeros resultados del mapa). Esto genera una visibilidad inmediata para usuarios con alta intención de compra que se encuentran cerca de tu local físico.
        </p>
        <Link to="/web-que-vende" className="text-blue-600 font-bold hover:underline">Combina esto con una web profesional</Link>
      </Section>

      <Section className="py-12 md:py-24">
        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-12">Cómo trabajamos el SEO Local</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { n: "1", t: "Auditoría de Ficha", d: "Detectamos errores que impiden tu posicionamiento actual." },
            { n: "2", t: "Optimización Técnica", d: "Ajustamos categorías, fotos y servicios en Google." },
            { n: "3", t: "Contenido y Reseñas", d: "Mantenemos tu perfil activo para ganar a la competencia." }
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
          <h3 className="text-2xl md:text-4xl font-black mb-8">¿Quieres aparecer el primero en tu ciudad?</h3>
          <Button tallyId="q4GKJO" variant="primary">Solicitar Auditoría SEO Local</Button>
          <div className="mt-8">
            <Link to="/servicios-diseno-web-seo" className="text-slate-400 hover:text-white">Ver otros servicios</Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default SEOLocal;