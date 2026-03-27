import React, { Suspense, lazy } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router';
import { Navbar, Footer } from './components/Layout';
import { TallyModal } from './components/UI';
import Home from './pages/Home';
import ProfessionLanding from './pages/ProfessionLanding';

// Lazy loading components
const Services = lazy(() => import('./pages/Services'));
const WebQueVende = lazy(() => import('./pages/WebQueVende'));
const SEOLocal = lazy(() => import('./pages/SEOLocal'));
const CaptacionLeads = lazy(() => import('./pages/CaptacionLeads'));
const MantenimientoWeb = lazy(() => import('./pages/MantenimientoWeb'));
const Pricing = lazy(() => import('./pages/Pricing'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const LegalNotice = lazy(() => import('./pages/LegalNotice'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

// Componente dinámico para servicios por ciudad
const LocationLanding = lazy(() => import('./pages/LocationLanding'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen bg-white" />
);

const AppRoutes = () => (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <Navbar />
    <div className="flex-grow">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicios-diseno-web-seo" element={<Services />} />
          <Route path="/web-que-vende" element={<WebQueVende />} />
          <Route path="/seo-local" element={<SEOLocal />} />
          <Route path="/captacion-de-clientes" element={<CaptacionLeads />} />
          <Route path="/mantenimiento-web-seo" element={<MantenimientoWeb />} />
          <Route path="/tarifas-diseno-web" element={<Pricing />} />
          <Route path="/casos-exito" element={<CaseStudies />} />
          <Route path="/blog-marketing-digital" element={<Blog />} />
          <Route path="/blog-marketing-digital/:id" element={<BlogDetail />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/preguntas-frecuentes" element={<FAQ />} />
          <Route path="/aviso-legal" element={<LegalNotice />} />
          <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
          <Route path="/politica-de-cookies" element={<CookiePolicy />} />
          
          {/* Rutas dinámicas por Ciudad - Estructura estándar /servicio/:ciudad */}
          <Route path="/diseno-web/:city" element={<LocationLanding type="design" />} />
          <Route path="/posicionamiento-google/:city" element={<LocationLanding type="seo" />} />
          <Route path="/seo-maps/:city" element={<LocationLanding type="maps" />} />
          <Route path="/web-negocios/:city" element={<LocationLanding type="leads" />} />
          
          {/* Rutas dinámicas por Ciudad y Profesión - Estructura estándar /:ciudad/:profesion */}
          <Route path="/:city/web-seo/:professionSlug" element={<ProfessionLanding />} />
        </Routes>
      </Suspense>
    </div>
    <Footer />
    <TallyModal />
  </div>
);

const App: React.FC = () => {
  const isEmbeddedPreview = 
    window.location.protocol === 'blob:' || 
    window.location.protocol === 'about:' ||
    window.location.hostname.includes('usercontent.goog') ||
    window.location.hostname.includes('aistudio.google') ||
    window.location.hostname.includes('localhost');

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