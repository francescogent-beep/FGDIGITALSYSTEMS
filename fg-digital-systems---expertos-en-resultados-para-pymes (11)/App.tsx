import React, { Suspense, lazy } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router';
import { Navbar, Footer } from './components/Layout';
import { TallyModal } from './components/UI';

// Route-based Code Splitting
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
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
const DisenoWebMurcia = lazy(() => import('./pages/DisenoWebMurcia'));
const PosicionamientoGoogleMurcia = lazy(() => import('./pages/PosicionamientoGoogleMurcia'));
const SEOLocalMurcia = lazy(() => import('./pages/SEOLocalMurcia'));
const WebNegociosLocalesMurcia = lazy(() => import('./pages/WebNegociosLocalesMurcia'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Loading placeholder to prevent layout shifts during navigation
const PageLoader = () => (
  <div className="min-h-screen bg-slate-50 animate-pulse" />
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
          <Route path="/diseno-web-murcia" element={<DisenoWebMurcia />} />
          <Route path="/posicionamiento-google-murcia" element={<PosicionamientoGoogleMurcia />} />
          <Route path="/seo-local-murcia" element={<SEOLocalMurcia />} />
          <Route path="/web-para-negocios-locales-murcia" element={<WebNegociosLocalesMurcia />} />
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