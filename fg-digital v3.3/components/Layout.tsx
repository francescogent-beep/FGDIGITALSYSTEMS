import React from 'react';
import { Link, useLocation } from 'react-router';
import { ROUTES } from '../constants';
import { Menu, X, ArrowRight, ShieldAlert, ChevronDown, ChevronUp, Mail, Phone, MapPin, User } from 'lucide-react';
import { WhatsAppQualifier } from './WhatsAppQualifier';
import { Button } from './UI';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 group" aria-label="FG Digital Systems - Inicio">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold group-hover:rotate-12 transition-transform text-[14px]">FG</div>
            <span className="text-xl font-bold text-slate-900 tracking-tighter uppercase">DIGITAL <span className="text-blue-600">SYSTEMS</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {ROUTES.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === route.path ? 'text-blue-600' : 'text-slate-700'
                }`}
              >
                {route.name}
              </Link>
            ))}
            <Button
              tallyId="q4GKJO"
              variant="primary"
              className="px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2"
            >
              Pide presupuesto <ArrowRight size={16} />
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
        <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4 shadow-xl">
          {ROUTES.map((route) => (
            <Link
              key={route.path}
              to={route.path}
              className="block text-base font-medium text-slate-700 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          ))}
          <Button
            tallyId="q4GKJO"
            variant="primary"
            className="w-full text-center py-3 rounded-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            Pide presupuesto
          </Button>
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
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6 bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 text-white shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex gap-4 items-start md:items-center">
          <div className="bg-blue-600 p-2 rounded-lg shrink-0">
            <ShieldAlert size={20} />
          </div>
          <p className="text-sm md:text-base text-slate-100 leading-relaxed">
            Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el tráfico. Al navegar, aceptas nuestra <Link to="/politica-de-cookies" className="text-blue-300 font-bold hover:underline">Política de Cookies</Link>.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={accept}
            className="flex-grow md:flex-none px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/20"
          >
            Aceptar
          </button>
          <button 
            onClick={decline}
            className="flex-grow md:flex-none px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all text-center border border-slate-700"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export const Footer: React.FC = () => {
  const location = useLocation();
  const [showZonas, setShowZonas] = React.useState(false);
  const [showProfesiones, setShowProfesiones] = React.useState(false);
  const isLegalPage = ['/aviso-legal', '/politica-de-privacidad', '/politica-de-cookies'].includes(location.pathname);

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
    <footer className="bg-slate-900 text-slate-300 py-16 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-[14px]">FG</div>
            <span className="text-xl font-bold text-white tracking-tighter uppercase">DIGITAL SYSTEMS</span>
          </div>
          <p className="max-w-sm text-slate-200 mb-8 font-medium leading-relaxed">
            Especialistas en transformar la presencia digital de negocios locales. Creamos sistemas web que atraen clientes y automatizan tus ventas.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-100 group">
              <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                <User size={16} className="text-blue-400 group-hover:text-white" />
              </div>
              <span className="text-sm font-bold">Francesco Gentile</span>
            </div>
            <a href="tel:+34694285438" className="flex items-center gap-3 hover:text-white transition-colors group">
              <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                <Phone size={16} className="text-blue-400 group-hover:text-white" />
              </div>
              <span className="text-sm font-bold">+34 694 28 54 38</span>
            </a>
            <a href="mailto:info@fgdigitalsystems.com" className="flex items-center gap-3 hover:text-white transition-colors group">
              <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-600 transition-colors">
                <Mail size={16} className="text-blue-400 group-hover:text-white" />
              </div>
              <span className="text-sm font-bold">info@fgdigitalsystems.com</span>
            </a>
          </div>
        </div>
        
        <div>
          <h2 className="text-white font-bold text-lg mb-6">Sistemas</h2>
          <ul className="space-y-3">
            <li><Link to="/servicios-diseno-web-seo" className="hover:text-blue-300 transition-colors font-bold text-slate-100">Todos los Servicios</Link></li>
            <li><Link to="/web-que-vende" className="hover:text-blue-300 transition-colors font-medium">Web que Vende</Link></li>
            <li><Link to="/seo-local" className="hover:text-blue-300 transition-colors font-medium">SEO Local</Link></li>
            <li><Link to="/captacion-de-clientes" className="hover:text-blue-300 transition-colors font-medium">Captación Leads</Link></li>
            <li><Link to="/mantenimiento-web-seo" className="hover:text-blue-300 transition-colors font-medium">Mantenimiento</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-6">Empresa</h2>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:text-blue-300 transition-colors font-medium">Inicio</Link></li>
            <li><Link to="/sobre-nosotros" className="hover:text-blue-300 transition-colors font-medium">Sobre Nosotros</Link></li>
            <li><Link to="/tarifas-diseno-web" className="hover:text-blue-300 transition-colors font-medium">Precios y Packs</Link></li>
            <li><Link to="/casos-exito" className="hover:text-blue-300 transition-colors font-medium">Casos de Éxito</Link></li>
            <li><Link to="/blog-marketing-digital" className="hover:text-blue-300 transition-colors font-medium">Blog y Guías</Link></li>
            <li><Link to="/preguntas-frecuentes" className="hover:text-blue-300 transition-colors font-medium">FAQ</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-300 transition-colors font-medium">Contacto</Link></li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-white font-bold text-lg mb-6">Zonas</h2>
          <div className="space-y-3">
            <button 
              onClick={() => setShowZonas(!showZonas)}
              className="flex items-center justify-between w-full text-left hover:text-blue-300 transition-colors group"
            >
              <span className="font-medium">Por Ciudad</span>
              {showZonas ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showZonas && (
              <ul className="pl-3 mt-3 space-y-2 border-l border-slate-700 text-xs">
                {LOCATIONS.map((loc) => (
                  <li key={loc.slug}>
                    <span className="text-slate-50 font-bold block mb-1">{loc.name}</span>
                    <div className="grid grid-cols-1 gap-1 ml-2 opacity-80 font-medium">
                       <Link to={`/diseno-web/${loc.slug}`} className="hover:text-white">- Diseño Web</Link>
                       <Link to={`/seo-maps/${loc.slug}`} className="hover:text-white">- SEO Maps</Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div>
          <h2 className="text-white font-bold text-lg mb-6">Sectores</h2>
          <div className="space-y-3">
            <button 
              onClick={() => setShowProfesiones(!showProfesiones)}
              className="flex items-center justify-between w-full text-left hover:text-blue-300 transition-colors group"
            >
              <span className="font-medium">SEO Especializado</span>
              {showProfesiones ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {showProfesiones && (
              <ul className="pl-3 mt-3 space-y-2 border-l border-slate-700 text-xs">
                {PROFESSIONS_LIST.map((prof) => (
                  <li key={prof.slug}>
                    <span className="text-slate-50 font-bold block mb-1">{prof.name}</span>
                    <div className="flex flex-wrap gap-x-2 gap-y-1 opacity-80 font-medium">
                      <Link to={`/murcia/web-seo/${prof.slug}`} className="hover:text-white">Murcia</Link>
                      <Link to={`/cartagena/web-seo/${prof.slug}`} className="hover:text-white">Cartagena</Link>
                      <Link to={`/elche/web-seo/${prof.slug}`} className="hover:text-white">Elche</Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-6 text-center">
        <p className="font-medium text-slate-400">&copy; {new Date().getFullYear()} FG DIGITAL SYSTEMS. Todos los derechos reservados.</p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/aviso-legal" className="hover:text-white transition-colors font-bold text-slate-200">Aviso Legal</Link>
          <Link to="/politica-de-privacidad" className="hover:text-white transition-colors font-bold text-slate-200">Privacidad</Link>
          <Link to="/politica-de-cookies" className="hover:text-white transition-colors font-bold text-slate-200">Cookies</Link>
        </div>
      </div>
      
      {!isLegalPage && <WhatsAppQualifier />}
      <CookieBanner />
    </footer>
  );
};
