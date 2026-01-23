import React from 'react';
import { Section, Button } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { 
  CircleCheck, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Search, 
  UserX, 
  CircleAlert, 
  Target,
  BarChart3,
  BookOpen
} from 'lucide-react';

const Home: React.FC = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FG Digital Systems",
    "url": CANONICAL_DOMAIN,
    "logo": "https://i.imgur.com/ILoCkO3.png"
  };

  // URL idéntica a la del head (400px es el ancho ideal para móvil)
  const LCP_IMAGE = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&q=45&w=400";

  return (
    <main>
      <SEO {...METADATA.home} schema={homeSchema} />
      
      <section className="bg-white pt-10 md:pt-20 pb-12 md:pb-24 border-b border-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-900 rounded-full text-[10px] md:text-sm font-black mb-6 border border-blue-100 uppercase tracking-widest">
            <ShieldCheck size={14} className="text-blue-600" />
            Diseño Web y SEO Local para Pymes
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tighter">
            Diseño Web y SEO que atrae <span className="text-blue-600">clientes</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-800 max-w-2xl mx-auto mb-10 leading-relaxed font-semibold">
           Sistemas web para Pymes pensados para que tu <strong>teléfono suene y entren contactos reales</strong>.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button tallyId="q4GKJO" variant="primary" className="px-10 py-5 text-lg shadow-2xl shadow-blue-500/30">
              Solicitar Propuesta Clara
            </Button>
            <Button to="/tarifas-diseno-web" variant="outline" className="px-10 py-5 text-lg border-slate-300">
              Ver Packs y Precios
            </Button>
          </div>
          <div className="mt-12 text-slate-900 text-[10px] md:text-xs font-black uppercase tracking-widest flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><CircleCheck size={14} className="text-green-700" /> Pago único</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><CircleCheck size={14} className="text-green-700" /> Propiedad tuya</span>
            <span className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100"><CircleCheck size={14} className="text-green-700" /> Sin permanencias</span>
          </div>
        </div>
      </section>

      <Section className="bg-slate-50 border-y border-slate-100 py-16 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
                Tu negocio está online, pero no vende...
              </h2>
              <div className="grid gap-4">
                {[
                  { t: "“Mi web no trae clientes”", d: "Es bonita, pero el teléfono no suena.", icon: <UserX /> },
                  { t: "“No aparezco en Google”", d: "Tus vecinos no te encuentran.", icon: <Search /> },
                  { t: "“Dependo del boca a boca”", d: "Si no te recomiendan, no facturas.", icon: <CircleAlert /> }
                ].map((p, i) => (
                  <div key={i} className="flex gap-4 p-6 bg-white border border-slate-200 rounded-2xl">
                    <div className="bg-red-50 p-3 rounded-xl h-fit text-red-700">{p.icon}</div>
                    <div>
                      <h3 className="font-bold text-slate-900">{p.t}</h3>
                      <p className="text-sm text-slate-600 font-medium">{p.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-16 text-white shadow-2xl flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-10 text-white">Convertimos tu web en una máquina de contactos</h2>
              <div className="space-y-10">
                {[
                  { step: "01", title: "Análisis Real", desc: "Entendemos qué busca tu cliente.", icon: <Search /> },
                  { step: "02", title: "Diseño de Venta", desc: "Guiamos al usuario hacia la llamada.", icon: <TrendingUp /> },
                  { step: "03", title: "SEO Local", desc: "Apareces primero en tu zona.", icon: <Zap /> }
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-950 flex items-center justify-center font-black text-white text-xl border border-white/20">
                      {s.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{s.title}</h3>
                      <p className="text-blue-50 text-base leading-relaxed font-semibold">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src={LCP_IMAGE} 
              alt="Diseño web optimizado para Pymes" 
              className="rounded-[3rem] shadow-2xl w-full h-auto bg-slate-100"
              width="400"
              height="300"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">Por qué necesitas un sistema, no solo una web</h2>
            <div className="space-y-6 text-slate-700 text-lg leading-relaxed font-semibold">
              <p>Si tu web no está optimizada para <strong>SEO Local y conversión</strong>, es simplemente invisible.</p>
              <ul className="grid gap-4">
                <li className="flex items-center gap-4 text-slate-900"><Target className="text-blue-600 shrink-0" size={24} /> Estrategia basada en ROI.</li>
                <li className="flex items-center gap-4 text-slate-900"><BarChart3 className="text-blue-600 shrink-0" size={24} /> Decisiones basadas en datos.</li>
                <li className="flex items-center gap-4 text-slate-900"><BookOpen className="text-blue-600 shrink-0" size={24} /> Textos escritos para vender.</li>
              </ul>
            </div>
            <Button tallyId="q4GKJO" variant="primary" className="px-12 py-5 shadow-xl">Quiero mi auditoría gratuita</Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Home;
