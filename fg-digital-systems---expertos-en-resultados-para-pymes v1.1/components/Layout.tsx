import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../constants.tsx';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 group">
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
                  location.pathname === route.path ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {route.name}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all flex items-center gap-2"
            >
              Pide presupuesto <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsOpen(!isOpen)}>
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
              className="block text-base font-medium text-slate-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </Link>
          ))}
          <Link
            to="/contacto"
            className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold"
            onClick={() => setIsOpen(false)}
          >
            Pide presupuesto
          </Link>
        </div>
      )}
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-[14px]">FG</div>
            <span className="text-xl font-bold text-white tracking-tighter uppercase">DIGITAL SYSTEMS</span>
          </div>
          <p className="max-w-sm text-slate-400">
            Ayudamos a pequeñas y medianas empresas a conseguir más clientes mediante webs rápidas, chatbots de IA y estrategias optimizadas para Google.
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Servicios</h4>
          <ul className="space-y-2">
            <li><Link to="/servicios" className="hover:text-blue-400 transition-colors">Diseño Web Pymes</Link></li>
            <li><Link to="/servicios" className="hover:text-blue-400 transition-colors">SEO Local</Link></li>
            <li><Link to="/servicios" className="hover:text-blue-400 transition-colors">Chatbots IA</Link></li>
            <li><Link to="/servicios" className="hover:text-blue-400 transition-colors">Captación Leads</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Compañía</h4>
          <ul className="space-y-2">
            <li><Link to="/sobre-nosotros" className="hover:text-blue-400 transition-colors">Sobre Nosotros</Link></li>
            <li><Link to="/precios" className="hover:text-blue-400 transition-colors">Tarifas</Link></li>
            <li><Link to="/contacto" className="hover:text-blue-400 transition-colors">Contacto</Link></li>
            <li><Link to="/casos" className="hover:text-blue-400 transition-colors">Casos de Éxito</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4 text-center">
        <p>&copy; {new Date().getFullYear()} FG DIGITAL SYSTEMS. Todos los derechos reservados.</p>
        <div className="flex gap-6">
          <span className="hover:text-white cursor-pointer font-medium">Aviso Legal</span>
          <span className="hover:text-white cursor-pointer font-medium">Privacidad</span>
          <span className="hover:text-white cursor-pointer font-medium">Cookies</span>
        </div>
      </div>
      
      {/* WhatsApp Float */}
      <a 
        href="https://wa.me/34000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-40 flex items-center gap-2"
      >
        <MessageCircle size={28} />
        <span className="hidden lg:inline font-semibold">¿Hablamos?</span>
      </a>
    </footer>
  );
};