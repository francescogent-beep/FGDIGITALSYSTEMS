
import React from 'react';
import { ChevronDown, CircleCheck, ShieldCheck, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Section: React.FC<{
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}> = ({ children, className = '', dark = false, id }) => (
  <section id={id} className={`py-6 md:py-16 px-4 sm:px-6 lg:px-8 ${dark ? 'bg-slate-900 text-slate-100' : 'bg-transparent text-slate-900'} ${className}`}>
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
}> = ({ children, to, variant = 'primary', className = '', onClick }) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold transition-all text-center focus:outline-none focus:ring-2 focus:ring-offset-2";
  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200 focus:ring-blue-500",
    secondary: "bg-white text-blue-600 hover:bg-blue-50 shadow-md focus:ring-slate-300",
    outline: "border-2 border-slate-200 text-slate-800 hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50/50 focus:ring-blue-500"
  };

  const fullClass = `${base} ${styles[variant]} ${className}`;

  if (to) {
    return <Link to={to} className={fullClass}>{children}</Link>;
  }

  return <button onClick={onClick} className={fullClass}>{children}</button>;
};

export const FAQAccordion: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white mb-4 shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="w-full text-left px-6 py-4 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors group"
      >
        <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{question}</span>
        <ChevronDown size={20} className={`text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6 pt-2 text-slate-600 border-t border-slate-50 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export const Breadcrumbs: React.FC<{
  items: { label: string; path?: string }[];
}> = ({ items }) => (
  <nav className="flex mb-4 md:mb-8 overflow-x-auto whitespace-nowrap pb-2 md:pb-0 scrollbar-hide" aria-label="Breadcrumb">
    <ol className="flex items-center space-x-2 text-sm font-medium text-slate-500">
      <li>
        <Link to="/" className="hover:text-blue-600 transition-colors flex items-center gap-1">
          <HomeIcon size={14} />
          <span className="sr-only">Inicio</span>
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
            <span className="text-slate-900 font-bold">{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);

export const PricingCard: React.FC<{
  plan: any;
  ctaText?: string;
}> = ({ plan, ctaText = "Elegir este plan" }) => {
  const labels: Record<string, string> = {
    starter: "Ideal para: Empezar con buen pie",
    growth: "Ideal para: Competir y ganar",
    scale: "Ideal para: Dominar tu mercado"
  };

  return (
    <div className={`relative p-8 rounded-2xl bg-white border ${plan.recommended ? 'border-blue-600 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} flex flex-col transition-all hover:shadow-md`}>
      {plan.recommended && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg">
          La Opción Más Rentable
        </span>
      )}
      <h3 className="text-xl font-bold text-slate-900 mb-1">{plan.name}</h3>
      <div className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-4">
        {labels[plan.id]}
      </div>
      <div className="mb-4">
        <span className="text-slate-400 text-sm mr-1 font-medium italic">Inversión desde</span>
        <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
      </div>
      
      <p className="text-slate-600 text-sm mb-6 min-h-[40px] leading-relaxed">{plan.description}</p>
      
      <div className="bg-slate-50 p-3 rounded-lg mb-6 flex items-center gap-2">
         <ShieldCheck size={16} className="text-green-600" />
         <span className="text-xs font-bold text-slate-500">Pago Único. Web 100% tuya.</span>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
            <CircleCheck size={18} className="text-blue-600 shrink-0 mt-0.5" />
            <span className="leading-tight">{f}</span>
          </li>
        ))}
      </ul>
      
      <Button to="/contacto" variant={plan.recommended ? 'primary' : 'outline'} className="w-full">
        {ctaText}
      </Button>
    </div>
  );
};