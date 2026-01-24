import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Globe, ArrowRight, ArrowLeft, CheckCircle2, Zap } from 'lucide-react';
import { Button } from './UI';

const WHATSAPP_PHONE = "34694285438";

const QUESTIONS = [
  {
    id: 'q1',
    label: '¿Qué necesitas ahora mismo?',
    options: ['Crear una web', 'Mejorar mi web actual', 'Conseguir más clientes', 'Aparecer en Google', 'No lo tengo claro']
  },
  {
    id: 'q2',
    label: '¿Tu negocio es…?',
    options: ['Autónomo / profesional', 'Negocio local', 'Empresa de servicios', 'Proyecto online']
  },
  {
    id: 'q3',
    label: '¿En qué rango te sientes cómodo/a?',
    options: ['Menos de 700 €', '700 – 1.500 €', '1.500 – 3.000 €', 'Más de 3.000 €', 'No lo sé aún']
  },
  {
    id: 'q4',
    label: '¿Cuándo te gustaría empezar?',
    options: ['Lo antes posible', 'En unas semanas', 'Solo estoy informándome']
  }
];

const getObjective = (answer1: string) => {
  const mapping: Record<string, string> = {
    "Crear una web": "Tener una web que convierta",
    "Mejorar mi web actual": "Mejorar mi web y generar más contactos",
    "Conseguir más clientes": "Generar más contactos",
    "Aparecer en Google": "Mejorar visibilidad en Google",
    "No lo tengo claro": "Necesito recomendación"
  };
  return mapping[answer1] || answer1;
};

export const WhatsAppQualifier: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // 0 to 4 (4 is review/URL)
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [url, setUrl] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset qualifier when closing
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(0);
        setAnswers({});
        setUrl('');
      }, 300);
    }
  }, [isOpen]);

  const handleSelect = (qId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [qId]: value }));
    // Auto-advance with a tiny delay for visual feedback
    setTimeout(() => nextStep(), 200);
  };

  const nextStep = () => {
    if (step < QUESTIONS.length) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(s => s + 1);
        setIsAnimating(false);
      }, 150);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setIsAnimating(true);
      setTimeout(() => {
        setStep(s => s - 1);
        setIsAnimating(false);
      }, 150);
    }
  };

  const isComplete = answers.q1 && answers.q2 && answers.q3 && answers.q4;
  const progress = ((step) / QUESTIONS.length) * 100;

  const handleSend = () => {
    // Tracking event for Google Analytics
    (window as any).gtag?.("event", "whatsapp_lead", {
      method: "whatsapp_qualifier",
      phone: WHATSAPP_PHONE
    });

    const message = `Hola, he visto vuestra web.

Necesito: ${answers.q1}
Tipo de negocio: ${answers.q2}
Objetivo: ${getObjective(answers.q1)}
Presupuesto: ${answers.q3}
Cuándo: ${answers.q4}${url ? `\nMi web actual: ${url}` : ''}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button - Updated to Green-700 for accessibility contrast (AA compliant with white text) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="relative bg-green-700 text-white p-4 md:px-6 md:py-4 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group border-2 border-white/20"
          aria-label="Abrir calificador de presupuesto por WhatsApp"
        >
          <MessageCircle size={24} className="group-hover:rotate-12 transition-transform" />
          <span className="hidden md:inline font-black uppercase tracking-tight text-sm">¿Dudas? Hablamos</span>
        </button>
      </div>

      {/* Modern Modal System */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md transition-all duration-300">
          <div className="bg-white rounded-[2.5rem] w-full max-w-lg shadow-[0_32px_64px_-12px_rgba(0,0,0,0.3)] flex flex-col overflow-hidden border border-slate-200" role="dialog" aria-labelledby="qualifier-title" aria-modal="true">
            
            {/* Progress Bar Container */}
            <div className="h-1.5 w-full bg-slate-100 relative">
              <div 
                className="h-full bg-blue-600 transition-all duration-500 ease-out" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            {/* Header */}
            <div className="p-6 md:p-8 flex justify-between items-center border-b border-slate-50">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2 rounded-lg text-white">
                  <Zap size={18} fill="currentColor" />
                </div>
                <div>
                  <h3 id="qualifier-title" className="text-xl font-black text-slate-900 tracking-tight">Presupuesto Rápido</h3>
                  <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Paso {Math.min(step + 1, QUESTIONS.length)} de {QUESTIONS.length}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
                aria-label="Cerrar cuestionario de WhatsApp"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div className={`flex-grow p-6 md:p-8 min-h-[360px] flex flex-col transition-opacity duration-150 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
              
              {step < QUESTIONS.length ? (
                // Step-by-step Question
                <div className="flex-grow">
                  <p className="text-2xl font-black text-slate-900 mb-6 leading-tight">
                    {QUESTIONS[step].label}
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {QUESTIONS[step].options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleSelect(QUESTIONS[step].id, opt)}
                        className={`group flex items-center justify-between p-4 rounded-2xl border-2 transition-all text-left ${
                          answers[QUESTIONS[step].id] === opt
                            ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200'
                            : 'bg-white border-slate-100 text-slate-700 hover:border-blue-200 hover:bg-slate-50'
                        }`}
                      >
                        <span className="font-bold">{opt}</span>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          answers[QUESTIONS[step].id] === opt ? 'bg-white border-white text-blue-600' : 'border-slate-300 bg-white'
                        }`}>
                          {answers[QUESTIONS[step].id] === opt && <CheckCircle2 size={16} />}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                // Final Review Step
                <div className="flex-grow space-y-6">
                  <div className="text-center mb-4">
                    <div className="bg-green-100 text-green-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 size={32} />
                    </div>
                    <p className="text-2xl font-black text-slate-900">¡Todo listo!</p>
                    <p className="text-slate-600 font-medium">Revisa tu objetivo antes de enviar.</p>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-3xl border border-slate-200 space-y-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500 font-bold uppercase">Tu Objetivo</span>
                      <span className="text-blue-600 font-black">{getObjective(answers.q1)}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-500 font-bold uppercase">Presupuesto</span>
                      <span className="text-slate-900 font-bold">{answers.q3}</span>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="current-web" className="flex items-center gap-2 font-black text-slate-800 mb-3 text-xs uppercase tracking-widest">
                      <Globe size={14} /> URL de tu web actual <span className="text-slate-500 font-medium lowercase">(opcional)</span>
                    </label>
                    <input
                      id="current-web"
                      type="text"
                      placeholder="https://tuweb.com"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none text-slate-800 font-bold transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Footer */}
              <div className="mt-auto pt-6 flex flex-col gap-4">
                <div className="flex gap-3 items-center">
                  {step > 0 && (
                    <button 
                      onClick={prevStep}
                      className="p-4 rounded-2xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center justify-center border border-transparent hover:border-slate-200"
                      aria-label="Volver al paso anterior"
                    >
                      <ArrowLeft size={20} />
                    </button>
                  )}
                  
                  {step < QUESTIONS.length ? (
                    <button
                      disabled={!answers[QUESTIONS[step].id]}
                      onClick={nextStep}
                      className={`flex-grow py-4 rounded-2xl font-black transition-all flex items-center justify-center gap-2 ${
                        answers[QUESTIONS[step].id]
                          ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl'
                          : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      Siguiente <ArrowRight size={18} />
                    </button>
                  ) : (
                    <button
                      onClick={handleSend}
                      className="flex-grow py-4 rounded-2xl bg-green-700 text-white font-black hover:bg-green-800 shadow-xl shadow-green-200 transition-all flex items-center justify-center gap-2 text-lg"
                    >
                      <MessageCircle size={20} />
                      Enviar por WhatsApp
                    </button>
                  )}
                </div>
                {step === QUESTIONS.length && (
                  <p className="text-[10px] text-slate-500 text-center leading-tight">
                    Pulsando el botón enviar por WhatsApp consientes nuestra Política de Privacidad y Términos.
                  </p>
                )}
              </div>
            </div>

            {/* Micro-Copy Footer */}
            <div className="bg-slate-50 p-4 border-t border-slate-100 text-center">
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-tighter">
                Sin bots. Recibirás respuesta de un humano en menos de 24h.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
