import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout.tsx';

// Pages
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import Pricing from './pages/Pricing.tsx';
import CaseStudies from './pages/CaseStudies.tsx';
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import FAQ from './pages/FAQ.tsx';
import Blog from './pages/Blog.tsx';
import BlogDetail from './pages/BlogDetail.tsx';

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
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;