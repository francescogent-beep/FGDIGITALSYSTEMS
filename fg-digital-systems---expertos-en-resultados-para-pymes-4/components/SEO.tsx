
import React, { useEffect } from 'react';
import { PageMetadata, CANONICAL_DOMAIN } from '../seo/metadata.ts';

interface SEOProps extends PageMetadata {
  schema?: any;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, path, ogType = 'website', ogImage, schema }) => {
  useEffect(() => {
    document.title = title;
    
    // Ensure path starts with / and doesn't end with / (unless it's root)
    const formattedPath = path === '/' ? '' : path.startsWith('/') ? path : `/${path}`;
    const canonicalUrl = `${CANONICAL_DOMAIN}${formattedPath}`;

    const updateMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Robots Logic
    const isPreview = window.location.hostname.includes('usercontent.goog') || window.location.hostname.includes('localhost');
    if (isPreview) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      updateMeta('robots', 'index, follow');
      
      // CRITICAL: Update Canonical to current path
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // Open Graph
    updateMeta('og:title', title, 'property');
    updateMeta('og:description', description, 'property');
    updateMeta('og:url', canonicalUrl, 'property');
    // ... rest of meta updates
  }, [title, description, keywords, path, ogType, ogImage, schema]);

  return null;
};
