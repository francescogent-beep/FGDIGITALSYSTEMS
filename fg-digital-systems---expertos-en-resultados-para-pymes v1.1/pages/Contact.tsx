
import React from 'react';
import { Section, Button, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA } from '../seo/metadata';
import { MessageCircle, ShieldCheck, Clock, Send, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <SEO {...METADATA.contact} />
      
      <Section className="pt-20">
        <Breadcrumbs items={[{ label: 'Contacto' }]} />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">Hablemos de tus próximos clientes</h1>
            <p className="text-xl text-slate-600 mb-8">
              Rellena el formulario y recibirás una respuesta humana en menos de 24 horas laborables. Sin presión ni técnicas agresivas.
            </p>

            <div className="space-y-4 mb-10">
               <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                 <div className="bg-blue-100 p-3 rounded-xl text-blue-600"><Clock /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase">Velocidad</h4>
                    <p className="text-slate-500 text-sm">Respuesta en menos de 24h.</p>
                 </div>
               </div>
               <div className="flex gap-4 items-center bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                 <div className="bg-green-100 p-3 rounded-xl text-green-600"><ShieldCheck /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase">Sin compromiso</h4>
                    <p className="text-slate-500 text-sm">La auditoría inicial es gratuita.</p>
                 </div>
               </div>
               <Link to="/faq" className="flex gap-4 items-center bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition-colors group">
                 <div className="bg-slate-200 p-3 rounded-xl text-slate-600 group-hover:bg-blue-600 group-hover:text-white transition-colors"><HelpCircle /></div>
                 <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase">¿Tienes dudas antes?</h4>
                    <p className="text-slate-500 text-sm font-bold">Lee nuestras preguntas frecuentes</p>
                 </div>
               </Link>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
               <h3 className="text-xl font-bold mb-4">¿Prefieres WhatsApp?</h3>
               <p className="mb-6 text-slate-400 text-sm">Si tienes una duda rápida o prefieres la inmediatez, escríbenos directamente.</p>
               <a 
                href="https://wa.me/34000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg"
               >
                 <MessageCircle size={20} />
                 WhatsApp Directo
               </a>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">¡Recibido!</h3>
                <p className="text-slate-600">Un experto de nuestro equipo analizará tu negocio y te contactará en breve.</p>
                <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-8">Enviar otra consulta</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Nombre *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none" placeholder="Tu nombre" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Empresa *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none" placeholder="Tu negocio" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none" placeholder="nombre@ejemplo.com" />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Tu objetivo principal</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 outline-none bg-white">
                    <option>Tener mi primera web profesional</option>
                    <option>Mejorar mi web actual (no vende)</option>
                    <option>Aparecer el primero en Google (SEO)</option>
                    <option>Automatizar citas con IA</option>
                  </select>
                </div>

                <Button variant="primary" className="w-full py-4 text-lg">
                   Solicitar Propuesta Gratuita
                </Button>
                <p className="text-center text-xs text-slate-400">Tus datos están seguros según nuestra Política de Privacidad.</p>
              </form>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Contact;
