import React, { useEffect } from 'react';
import { PageMetadata, CANONICAL_DOMAIN } from '../seo/metadata.ts';

interface SEOProps extends PageMetadata {
  schema?: any;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, path, ogType = 'website', ogImage, schema }) => {
  useEffect(() => {
    // 1. Basic Identity
    document.title = title;
    
    // 2. Preview Mode Detection
    const isPreview = 
      window.location.hostname.includes('aistudio.google.com') || 
      window.location.hostname.includes('usercontent.goog') || 
      window.location.protocol === 'blob:' ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1';

    const canonicalUrl = `${CANONICAL_DOMAIN}${path}`;

    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Indexing Rules
    if (isPreview) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      updateMeta('robots', 'index, follow');
      
      // Canonical
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // Standard Meta
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);
    updateMeta('theme-color', '#2563EB');
    updateMeta('format-detection', 'telephone=no');

    // Open Graph
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:type', ogType, 'property');
    updateMeta('og:url', canonicalUrl, 'property');
    updateMeta('og:site_name', 'FG Digital Systems');
    if (ogImage) updateMeta('og:image', ogImage, 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    if (ogImage) updateMeta('twitter:image', ogImage);
    updateMeta('twitter:url', canonicalUrl);

    // 3. Structured Data (JSON-LD)
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(s => s.remove());

    const schemas = [];
    
    // Global Organization Schema (LocalBusiness / ProfessionalService)
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "FG Digital Systems",
      "url": CANONICAL_DOMAIN,
      "logo": `${CANONICAL_DOMAIN}/logo.png`,
      "description": "Agencia de diseño web y captación de clientes enfocada en resultados reales para negocios locales.",
      "priceRange": "€€",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Murcia",
        "addressRegion": "Murcia",
        "addressCountry": "ES"
      },
      "areaServed": [
        { "@type": "City", "name": "Murcia" },
        { "@type": "City", "name": "Alicante" },
        { "@type": "City", "name": "Cartagena" },
        { "@type": "City", "name": "Molina de Segura" },
        { "@type": "City", "name": "Lorca" },
        { "@type": "City", "name": "Alcantarilla" },
        { "@type": "City", "name": "Cieza" }
      ]
    });

    // Breadcrumb Schema
    const breadcrumbItems = path === '/' ? [] : path.split('/').filter(Boolean);
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": CANONICAL_DOMAIN
        },
        ...breadcrumbItems.map((segment, idx) => ({
          "@type": "ListItem",
          "position": idx + 2,
          "name": segment.charAt(0).toUpperCase() + segment.slice(1),
          "item": `${CANONICAL_DOMAIN}/${segment}`
        }))
      ]
    });

    // Page Specific Schema
    if (schema) {
      schemas.push(schema);
    }

    schemas.forEach(s => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(s);
      document.head.appendChild(script);
    });

  }, [title, description, keywords, path, ogType, ogImage, schema]);

  return null;
};
