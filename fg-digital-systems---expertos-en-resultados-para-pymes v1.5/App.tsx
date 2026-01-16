import React from 'react';
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router';
import { Navbar, Footer } from './components/Layout';
import { TallyModal } from './components/UI';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/CaseStudies';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

// Legal Pages
import LegalNotice from './pages/LegalNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';

// Murcia Landing Pages
import DisenoWebMurcia from './pages/DisenoWebMurcia';
import PosicionamientoGoogleMurcia from './pages/PosicionamientoGoogleMurcia';
import SEOLocalMurcia from './pages/SEOLocalMurcia';
import WebNegociosLocalesMurcia from './pages/WebNegociosLocalesMurcia';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppRoutes = () => (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <Navbar />
    <div className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios-diseno-web-seo" element={<Services />} />
        <Route path="/tarifas-diseno-web" element={<Pricing />} />
        <Route path="/casos-exito" element={<CaseStudies />} />
        <Route path="/blog-marketing-digital" element={<Blog />} />
        <Route path="/blog-marketing-digital/:id" element={<BlogDetail />} />
        <Route path="/sobre-nosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />

        {/* Legal Routes */}
        <Route path="/aviso-legal" element={<LegalNotice />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
        <Route path="/politica-de-cookies" element={<CookiePolicy />} />
        
        {/* Murcia Routes */}
        <Route path="/diseno-web-murcia" element={<DisenoWebMurcia />} />
        <Route path="/posicionamiento-google-murcia" element={<PosicionamientoGoogleMurcia />} />
        <Route path="/seo-local-murcia" element={<SEOLocalMurcia />} />
        <Route path="/web-para-negocios-locales-murcia" element={<WebNegociosLocalesMurcia />} />
      </Routes>
    </div>
    <Footer />
    <TallyModal />
  </div>
);

const App: React.FC = () => {
  // Detect environment for router selection
  // In embedded previews (like Google AI Studio) where protocol is blob: or about:, 
  // or on some static hosts without redirect rules, HashRouter is safer.
  const isEmbeddedPreview = 
    window.location.protocol === 'blob:' || 
    window.location.protocol === 'about:' ||
    window.location.hostname.includes('usercontent.goog');

  if (isEmbeddedPreview) {
    return (
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    );
  }

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;