
import React from 'react';
import { Section, Button, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA } from '../seo/metadata';
import { CASE_STUDIES } from '../constants';
import { CheckCircle2, ArrowRight, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  return (
    <main>
      <SEO {...METADATA.cases} />
      
      <Section className="pt-20">
        <Breadcrumbs items={[{ label: 'Casos de Éxito' }]} />
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Resultados que puedes medir</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            No te enseñamos fotos bonitas, te enseñamos cómo hemos ayudado a otros negocios a conseguir más llamadas y clientes reales.
          </p>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-lg text-sm font-bold border border-blue-100">
            <PhoneCall size={16} /> Ejemplos de lo que podemos hacer por ti
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-16">
          {CASE_STUDIES.map((study, i) => (
            <div key={i} className={`flex flex-col lg:flex-row gap-12 items-stretch overflow-hidden rounded-[2.5rem] bg-white border border-slate-200 shadow-sm ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 min-h-[400px]">
                <img 
                   src={`https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800&sig=${i}`} 
                   alt={study.title} 
                   className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-4">{study.category}</span>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{study.title}</h2>
                <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-6">
                  <p className="text-lg text-blue-900 font-bold">"{study.outcome}"</p>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">{study.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {study.metrics.map((m, j) => (
                    <div key={j} className="flex gap-3 items-center text-sm font-bold text-slate-800">
                      <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                      <span>{m}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button to="/contacto" variant="primary">Quiero estos resultados</Button>
                  <Button to="/servicios" variant="outline" className="group">
                    Ver cómo lo hacemos <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-slate-900 text-white text-center rounded-[3rem] mb-12 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres ser el próximo éxito en tu zona?</h2>
        <p className="text-xl text-slate-400 max-w-xl mx-auto mb-10">
          Deja de regalar clientes a tu competencia. Solicita una propuesta personalizada hoy mismo.
        </p>
        <Button to="/contacto" variant="secondary" className="px-12 py-4 text-blue-600 font-black">
           Solicitar Presupuesto Cerrado
        </Button>
      </Section>
    </main>
  );
};

export default CaseStudies;
