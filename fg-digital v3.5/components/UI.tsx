import React, { useState, useEffect } from 'react';
import { ChevronDown, CircleCheck, ShieldCheck, ChevronRight, Home as HomeIcon, Zap, X } from 'lucide-react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';

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
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4 bg-black/40 backdrop-blur-md transition-all duration-500">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white w-full h-full md:h-[85vh] md:max-w-2xl md:max-h-[90vh] md:rounded-[2rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden relative border-none md:border md:border-slate-200"
          >
            
            {/* Brand Header */}
            <div className="px-6 py-4 md:px-10 md:py-6 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-[12px] md:text-[14px] shadow-lg shadow-blue-500/20">FG</div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-lg font-black text-slate-900 tracking-tighter uppercase leading-none">DIGITAL <span className="text-blue-600">SYSTEMS</span></span>
                  <span className="text-[9px] md:text-[10px] font-bold text-slate-600 uppercase tracking-widest mt-0.5">Propuesta Personalizada</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 md:p-3 rounded-full bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all active:scale-90"
                aria-label="Cerrar"
              >
                <X size={24} />
              </button>
            </div>

            {/* Tally Iframe Container */}
            <div className="flex-grow w-full relative bg-slate-50 min-h-[400px]">
              <iframe 
                src="https://tally.so/embed/q4GKJO?hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                width="100%" 
                height="100%" 
                className="absolute inset-0 border-none w-full h-full"
                title="Solicitar propuesta clara"
              />
            </div>

            {/* Footer Micro-copy (Desktop only) */}
            <div className="hidden md:block px-10 py-4 bg-slate-50 text-center border-t border-slate-100">
              <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">Respuesta garantizada en menos de 24 horas</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}> = ({ children, className = '', dark = false, id }) => (
  <section id={id} className={`py-16 md:py-32 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-slate-800 text-white' : 'bg-transparent text-slate-800'} ${className}`}>
    <div className="max-w-6xl mx-auto">
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
  const base = "inline-flex items-center justify-center px-6 py-3 md:px-10 md:py-5 rounded-full font-bold transition-all text-center focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-tight";
  const styles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 shadow-sm focus:ring-blue-500",
    secondary: "bg-slate-800 text-white hover:bg-slate-900 shadow-sm focus:ring-slate-500",
    outline: "border border-slate-200 text-slate-800 hover:border-slate-800 hover:bg-slate-50 focus:ring-slate-500"
  };

  const fullClass = `${base} ${styles[variant]} ${className}`;

  const MotionWrapper = ({ children: innerChildren, ...props }: any) => (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      {innerChildren}
    </motion.div>
  );

  if (tallyId) {
    return (
      <MotionWrapper>
        <button 
          onClick={triggerTally}
          className={fullClass}
        >
          {children}
        </button>
      </MotionWrapper>
    );
  }

  if (to) {
    return (
      <MotionWrapper>
        <Link to={to} className={fullClass}>{children}</Link>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper>
      <button onClick={onClick} className={fullClass}>{children}</button>
    </MotionWrapper>
  );
};

export const FAQAccordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={`border-b border-slate-200 transition-all duration-500 ${isOpen ? 'py-6' : 'py-2'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-4 py-5 flex justify-between items-center transition-colors group"
      >
        <span className={`font-bold transition-colors md:text-xl tracking-tight ${isOpen ? 'text-blue-500' : 'text-slate-800'}`}>{question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className={`transition-all duration-300 ${isOpen ? 'text-blue-500' : 'text-slate-400 group-hover:text-slate-600'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-8 pt-2 text-slate-500 leading-relaxed text-base md:text-lg font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Breadcrumbs: React.FC<{
  items: { label: string; path?: string }[];
}> = ({ items }) => (
  <nav className="flex mb-10 md:mb-16 overflow-x-auto whitespace-nowrap pb-2 md:pb-0 scrollbar-hide">
    <ol className="flex items-center space-x-3 text-[11px] font-bold tracking-widest uppercase text-slate-400">
      <li>
        <Link to="/" className="hover:text-blue-500 transition-colors flex items-center gap-2">
          <HomeIcon size={14} />
          <span>Inicio</span>
        </Link>
      </li>
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-3">
          <ChevronRight size={14} className="text-slate-300 shrink-0" />
          {item.path ? (
            <Link to={item.path} className="hover:text-blue-500 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-800">{item.label}</span>
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
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative p-10 md:p-14 rounded-[3rem] bg-white border transition-all duration-500 ${plan.recommended ? 'border-blue-500 shadow-[0_40px_100px_-15px_rgba(0,0,0,0.1)] lg:scale-[1.02] z-10' : 'border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200'} flex flex-col group`}
    >
      {plan.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[11px] font-bold uppercase tracking-[0.2em] px-8 py-2.5 rounded-full shadow-lg whitespace-nowrap">
          Opción Premium
        </div>
      )}
      
      <div className="mb-10">
        <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-3 tracking-tightest">{plan.name}</h3>
        {plan.tagline && (
          <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest mb-6 italic">"{plan.tagline}"</p>
        )}
        <div className="inline-flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 bg-slate-50 rounded-full border border-slate-100">
          <Zap size={12} className="fill-current text-blue-500" />
          {labels[plan.id]}
        </div>
      </div>

      <p className="text-slate-500 text-base md:text-lg mb-12 min-h-[64px] leading-relaxed font-medium">{plan.description}</p>
      
      <div className="bg-slate-50 p-6 rounded-[2rem] mb-12 flex items-center gap-5 border border-slate-100 group-hover:bg-blue-50/50 transition-colors">
         <div className="bg-white text-blue-500 p-3 rounded-2xl shadow-sm">
            <ShieldCheck size={24} />
         </div>
         <div>
            <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-widest mb-0.5">Propiedad Total</span>
            <span className="text-sm text-slate-800 font-bold">Pago único, sin cuotas.</span>
         </div>
      </div>

      <ul className="space-y-6 mb-14 flex-grow">
        {plan.features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-5 text-base md:text-lg text-slate-600 font-medium leading-snug">
            <div className={`mt-1 rounded-full p-0.5 transition-colors ${plan.recommended ? 'text-blue-500' : 'text-slate-300'}`}>
              <CircleCheck size={20} />
            </div>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      
      <Button tallyId="q4GKJO" variant={plan.recommended ? 'primary' : 'outline'} className="w-full text-xl py-6 shadow-sm">
        {ctaText}
      </Button>
    </motion.div>
  );
};
