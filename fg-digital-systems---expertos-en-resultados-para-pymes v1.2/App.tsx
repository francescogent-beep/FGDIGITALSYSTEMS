import React from 'react';
// Fix: Changed react-router-dom to react-router to resolve "no exported member" errors.
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router';
// Fix: Removed .tsx extensions from local imports.
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

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/precios" element={<Pricing />} />
            <Route path="/casos" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />

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
    </Router>
  );
};

export default App;
