import React, { useState, useEffect } from 'react';
import { ChevronDown, CircleCheck, ShieldCheck, ChevronRight, Home as HomeIcon, Zap, X } from 'lucide-react';
import { Link } from 'react-router';

// Custom event to trigger the Tally Modal globally
export const triggerTally = () => {
  window.dispatchEvent(new CustomEvent('open-tally-modal'));
};

export const TallyModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-tally-modal', handleOpen);
    return () => window.removeEventListener('open-tally-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-slate-900/90 backdrop-blur-xl transition-all duration-300 animate-in fade-in">
      <div className="bg-white w-full h-full md:h-auto md:max-w-2xl md:max-h-[90vh] md:rounded-[2.5rem] shadow-[0_32px_128px_-16px_rgba(37,99,235,0.25)] flex flex-col overflow-hidden relative border-none md:border md:border-slate-100">
        
        {/* Brand Header */}
        <div className="px-6 py-4 md:px-10 md:py-6 border-b border-slate-50 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-[12px] md:text-[14px] shadow-lg shadow-blue-500/20">FG</div>
            <div className="flex flex-col">
              <span className="text-sm md:text-lg font-black text-slate-900 tracking-tighter uppercase leading-none">DIGITAL <span className="text-blue-600">SYSTEMS</span></span>
              <span className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Propuesta Personalizada</span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 md:p-3 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-all active:scale-90"
            aria-label="Cerrar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tally Iframe Container */}
        <div className="flex-grow w-full relative bg-slate-50">
          <iframe 
            src="https://tally.so/embed/q4GKJO?hideTitle=1&transparentBackground=1&dynamicHeight=1" 
            width="100%" 
            height="100%" 
            className="border-none"
            title="Solicitar propuesta clara"
          />
        </div>

        {/* Footer Micro-copy (Desktop only) */}
        <div className="hidden md:block px-10 py-4 bg-slate-50 text-center border-t border-slate-100">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]">Respuesta garantizada en menos de 24 horas</p>
        </div>
      </div>
    </div>
  );
};

export const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}> = ({ children, className = '', dark = false, id }) => (
  <section id={id} className={`py-8 md:py-20 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-slate-900 text-slate-100' : 'bg-transparent text-slate-900'} ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

export const Button: React.FC<{
  children: React.ReactNode;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  tallyId?: string;
}> = ({ children, to, variant = 'primary', className = '', onClick, tallyId }) => {
  const base = "inline-flex items-center justify-center px-6 py-3.5 md:px-10 md:py-5 rounded-2xl font-bold transition-all text-center focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] tracking-tight";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-[0_20px_40px_-12px_rgba(37,99,235,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(37,99,235,0.4)] focus:ring-blue-500",
    secondary: "bg-white text-slate-900 hover:bg-slate-50 shadow-xl border border-slate-100 focus:ring-slate-300",
    outline: "border-2 border-slate-200 text-slate-800 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/40 focus:ring-blue-500"
  };

  const fullClass = `${base} ${styles[variant]} ${className}`;

  if (tallyId) {
    return (
      <button 
        onClick={triggerTally}
        className={fullClass}
      >
        {children}
      </button>
    );
  }

  if (to) {
    return <Link to={to} className={fullClass}>{children}</Link>;
  }

  return <button onClick={onClick} className={fullClass}>{children}</button>;
};

export const FAQAccordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`border rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-white mb-4 transition-all duration-300 ${isOpen ? 'border-blue-200 shadow-lg' : 'border-slate-200 shadow-sm hover:border-slate-300'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full text-left px-6 py-5 md:px-8 md:py-6 flex justify-between items-center bg-white transition-colors group"
      >
        <span className={`font-bold transition-colors md:text-lg tracking-tight ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>{question}</span>
        <div className={`p-2 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:text-slate-600'}`}>
          <ChevronDown size={20} />
        </div>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-6 pb-6 pt-0 md:px-8 md:pb-8 text-slate-600 leading-relaxed text-sm md:text-base border-t border-slate-50">
          {answer}
        </div>
      </div>
    </div>
  );
};

export const Breadcrumbs: React.FC<{
  items: { label: string; path?: string }[];
}> = ({ items }) => (
  <nav className="flex mb-6 md:mb-10 overflow-x-auto whitespace-nowrap pb-2 md:pb-0 scrollbar-hide" aria-label="Breadcrumb">
    <ol className="flex items-center space-x-2 text-xs md:text-sm font-semibold tracking-wide uppercase text-slate-400">
      <li>
        <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1.5">
          <HomeIcon size={14} />
          <span>Inicio</span>
        </Link>
      </li>
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-2">
          <ChevronRight size={14} className="text-slate-300 shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-blue-600 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export const PricingCard: React.FC<{
  plan: any;
  ctaText?: string;
}> = ({ plan, ctaText = "Solicitar propuesta" }) => {
  const labels: Record<string, string> = {
    starter: "Para: Empezar rápido",
    growth: "Para: Negocios locales",
    scale: "Para: Dominar mercado",
    system: "Para: Ventas online"
  };

  return (
    <div className={`relative p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-white border transition-all duration-500 ${plan.recommended ? 'border-blue-600 shadow-[0_40px_80px_-20px_rgba(37,99,235,0.18)] lg:scale-[1.03] z-10' : 'border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-slate-200'} flex flex-col group`}>
      {plan.recommended && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.25em] px-8 py-2.5 rounded-full shadow-xl shadow-blue-500/20 whitespace-nowrap">
          Opción Premium
        </div>
      )}
      
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 tracking-tight">{plan.name}</h3>
        {plan.tagline && (
          <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-4 italic">"{plan.tagline}"</p>
        )}
        <div className="inline-flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-wider px-4 py-1.5 bg-blue-50 rounded-full">
          <Zap size={12} className="fill-current" />
          {labels[plan.id]}
        </div>
      </div>

      <div className="mb-8 flex items-baseline gap-2">
        <span className="text-slate-400 text-sm font-medium italic">Desde</span>
        <span className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
      </div>
      
      <p className="text-slate-600 text-sm md:text-base mb-10 min-h-[56px] leading-relaxed">{plan.description}</p>
      
      <div className="bg-slate-50/80 backdrop-blur-sm p-5 rounded-[1.5rem] mb-10 flex items-center gap-4 border border-slate-100 group-hover:bg-blue-50/50 transition-colors">
         <div className="bg-white text-green-600 p-2 rounded-xl shadow-sm">
            <ShieldCheck size={20} />
         </div>
         <div>
            <span className="text-xs font-black text-slate-900 block uppercase tracking-tight">Propiedad Total</span>
            <span className="text-[11px] text-slate-500 font-medium">Pago único, sin sorpresas mensuales.</span>
         </div>
      </div>

      <ul className="space-y-5 mb-12 flex-grow">
        {plan.features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-4 text-sm md:text-base text-slate-700 font-medium leading-snug">
            <div className={`mt-0.5 rounded-full p-0.5 transition-colors ${plan.recommended ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'}`}>
              <CircleCheck size={18} />
            </div>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      
      <Button tallyId="q4GKJO" variant={plan.recommended ? 'primary' : 'outline'} className="w-full text-lg md:text-xl py-5 md:py-6">
        {ctaText}
      </Button>
    </div>
  );
};