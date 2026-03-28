'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '../constants';
import { Menu, X, ArrowRight, ShieldAlert, ChevronDown, ChevronUp, Mail, Phone, MapPin, User, Instagram, Facebook } from 'lucide-react';
import { WhatsAppQualifier } from './WhatsAppQualifier';
import { Button } from './UI';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-slate-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="FG Digital Systems - Inicio">
            <div 
              className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-[15px] shadow-lg shadow-blue-500/20"
            >
              FG
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tightest uppercase">DIGITAL <span className="text-blue-600">SYSTEMS</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {ROUTES.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`text-[14px] font-semibold hover:text-blue-600 relative group ${
                  pathname === route.path ? 'text-blue-600' : 'text-slate-500'
                }`}
              >
                {route.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full ${pathname === route.path ? 'w-full' : ''}`}></span>
              </Link>
            ))}
            <Button
              tallyId="q4GKJO"
              variant="primary"
              className="h-[42px] w-[217px] rounded-full text-[14px] font-bold flex items-center gap-2 shadow-md shadow-blue-500/10"
            >
              Pide presupuesto <ArrowRight size={14} />
            </Button>
          </div>

          {/* Mobile toggle */}
          <button 
            className="md:hidden p-2 text-slate-700" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div 
          className="md:hidden bg-white border-b border-slate-200 overflow-hidden shadow-xl"
        >
          <div className="p-6 space-y-5">
            {ROUTES.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="block text-lg font-semibold text-slate-800 hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {route.name}
              </Link>
            ))}
            <Button
              tallyId="q4GKJO"
              variant="primary"
              className="w-full text-center py-4 rounded-2xl font-bold shadow-lg shadow-blue-500/10"
              onClick={() => setIsOpen(false)}
            >
              Pide presupuesto
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export const CookieBanner: React.FC = () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'true');
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'false');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div 
      className="fixed bottom-6 left-1/2 z-[100] w-[calc(100%-2rem)] max-w-7xl p-5 md:p-6 bg-slate-800/80 backdrop-blur-xl rounded-[1.5rem] text-white shadow-2xl border border-white/10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4 items-start md:items-center">
          <div className="bg-blue-500 p-2 rounded-xl shrink-0">
            <ShieldAlert size={20} />
          </div>
          <p className="text-sm text-slate-200 leading-relaxed">
            Utilizamos cookies para mejorar tu experiencia. Al navegar, aceptas nuestra <Link href="/politica-cookies" className="text-blue-400 font-semibold hover:underline">Política de Cookies</Link>.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={accept}
            className="flex-grow md:flex-none px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full shadow-sm"
          >
            Aceptar
          </button>
          <button 
            onClick={decline}
            className="flex-grow md:flex-none px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full text-center border border-white/10"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const [showZonas, setShowZonas] = React.useState(false);
  const [showProfesiones, setShowProfesiones] = React.useState(false);
  const isLegalPage = pathname ? ['/aviso-legal', '/politica-privacidad', '/politica-cookies'].includes(pathname) : false;

  const LOCATIONS = [
    { name: 'Murcia', slug: 'murcia' },
    { name: 'Cartagena', slug: 'cartagena' },
    { name: 'Lorca', slug: 'lorca' },
    { name: 'Molina de Segura', slug: 'molina-de-segura' },
    { name: 'Elche', slug: 'elche' }
  ];

  const PROFESSIONS_LIST = [
    { name: 'Fisioterapeutas', slug: 'fisioterapeutas' },
    { name: 'Psicólogos', slug: 'psicologos' },
    { name: 'Dentistas', slug: 'dentistas' },
    { name: 'Barberías', slug: 'barberias' },
    { name: 'Fontaneros', slug: 'fontaneros' }
  ];

  return (
    <footer className="bg-slate-50 text-slate-600 py-16 md:py-24 px-4 border-t border-slate-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-[14px] shadow-sm">FG</div>
            <span className="text-xl font-bold text-slate-800 tracking-tightest uppercase">DIGITAL SYSTEMS</span>
          </div>
          <p className="max-w-7xl text-slate-500 mb-8 font-medium leading-relaxed">
            Especialistas en transformar la presencia digital de negocios locales. Creamos sistemas web que atraen clientes y automatizan tus ventas.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3 text-slate-700 group">
              <div className="p-2 bg-white border border-slate-200 rounded-xl group-hover:bg-blue-500 shadow-sm">
                <User size={16} className="text-blue-500 group-hover:text-white" />
              </div>
              <span className="text-sm font-semibold">Francesco Gentile</span>
            </div>
            <a href="tel:+34694285438" className="flex items-center gap-3 hover:text-blue-500 group">
              <div className="p-2 bg-white border border-slate-200 rounded-xl group-hover:bg-blue-500 shadow-sm">
                <Phone size={16} className="text-blue-500 group-hover:text-white" />
              </div>
              <span className="text-sm font-semibold">+34 694 28 54 38</span>
            </a>
            <a href="mailto:info@fgdigitalsystems.com" className="flex items-center gap-3 hover:text-blue-500 group">
              <div className="p-2 bg-white border border-slate-200 rounded-xl group-hover:bg-blue-500 shadow-sm">
                <Mail size={16} className="text-blue-500 group-hover:text-white" />
              </div>
              <span className="text-sm font-semibold">info@fgdigitalsystems.com</span>
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/fg_digital_systems/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-blue-500 hover:text-white shadow-sm"
              aria-label="Instagram de FG Digital Systems"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com/people/FG-Digital-Systems/61587041462172/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white border border-slate-200 rounded-2xl hover:bg-blue-500 hover:text-white shadow-sm"
              aria-label="Facebook de FG Digital Systems"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h2 className="text-slate-800 font-bold text-sm uppercase tracking-widest mb-6">Sistemas</h2>
          <ul className="space-y-3">
            <li><Link href="/servicios" className="hover:text-blue-500 font-semibold text-slate-700">Todos los Servicios</Link></li>
            <li><Link href="/web-que-vende" className="hover:text-blue-500 font-medium">Web que Vende</Link></li>
            <li><Link href="/seo-local" className="hover:text-blue-500 font-medium">SEO Local</Link></li>
            <li><Link href="/captacion-de-clientes" className="hover:text-blue-500 font-medium">Captación Leads</Link></li>
            <li><Link href="/mantenimiento-web-seo" className="hover:text-blue-500 font-medium">Mantenimiento</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-slate-800 font-bold text-sm uppercase tracking-widest mb-6">Empresa</h2>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-blue-500 font-medium">Inicio</Link></li>
            <li><Link href="/sobre-nosotros" className="hover:text-blue-500 font-medium">Sobre Nosotros</Link></li>
            <li><Link href="/tarifas-diseno-web" className="hover:text-blue-500 font-medium">Packs y Soluciones</Link></li>
            <li><Link href="/casos-exito" className="hover:text-blue-500 font-medium">Casos de Éxito</Link></li>
            <li><Link href="/blog" className="hover:text-blue-500 font-medium">Blog y Guías</Link></li>
            <li><Link href="/preguntas-frecuentes" className="hover:text-blue-500 font-medium">FAQ</Link></li>
            <li><Link href="/contacto" className="hover:text-blue-500 font-medium">Contacto</Link></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-slate-800 font-bold text-sm uppercase tracking-widest mb-6">Zonas</h2>
          <div className="space-y-3">
            <button 
              onClick={() => setShowZonas(!showZonas)}
              className="flex items-center justify-between w-full text-left hover:text-blue-500 group"
            >
              <span className="font-medium">Por Ciudad</span>
              {showZonas ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showZonas && (
              <ul className="pl-3 mt-3 space-y-2 border-l border-slate-200 text-xs">
                {LOCATIONS.map((loc) => (
                  <li key={loc.slug}>
                    <span className="text-slate-700 font-bold block mb-1">{loc.name}</span>
                    <div className="grid grid-cols-1 gap-1 ml-2 opacity-80 font-medium">
                       <Link href={`/diseno-web/${loc.slug}`} className="hover:text-blue-500">- Diseño Web</Link>
                       <Link href={`/seo-maps/${loc.slug}`} className="hover:text-blue-500">- SEO Maps</Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-slate-800 font-bold text-sm uppercase tracking-widest mb-6">Sectores</h2>
          <div className="space-y-3">
            <button 
              onClick={() => setShowProfesiones(!showProfesiones)}
              className="flex items-center justify-between w-full text-left hover:text-blue-500 group"
            >
              <span className="font-medium">SEO Especializado</span>
              {showProfesiones ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showProfesiones && (
              <ul className="pl-3 mt-3 space-y-2 border-l border-slate-200 text-xs">
                {PROFESSIONS_LIST.map((prof) => (
                  <li key={prof.slug}>
                    <span className="text-slate-700 font-bold block mb-1">{prof.name}</span>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 opacity-80 font-medium">
                      <Link href={`/murcia/web-seo/${prof.slug}`} className="hover:text-blue-500">Murcia</Link>
                      <Link href={`/cartagena/web-seo/${prof.slug}`} className="hover:text-blue-500">Cartagena</Link>
                      <Link href={`/elche/web-seo/${prof.slug}`} className="hover:text-blue-500">Elche</Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-200 text-xs flex flex-col md:flex-row justify-between items-center gap-6 text-center">
        <p className="font-medium text-slate-400">&copy; {new Date().getFullYear()} FG DIGITAL SYSTEMS. Todos los derechos reservados.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/aviso-legal" className="hover:text-slate-800 font-semibold text-slate-500">Aviso Legal</Link>
          <Link href="/politica-privacidad" className="hover:text-slate-800 font-semibold text-slate-500">Privacidad</Link>
          <Link href="/politica-cookies" className="hover:text-slate-800 font-semibold text-slate-500">Cookies</Link>
        </div>
      </div>
      
      {!isLegalPage && <WhatsAppQualifier />}
      <CookieBanner />
    </footer>
  );
};
