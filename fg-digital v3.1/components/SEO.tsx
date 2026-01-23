import React, { useEffect } from 'react';
import { PageMetadata, CANONICAL_DOMAIN } from '../seo/metadata.ts';

interface SEOProps extends PageMetadata {
  schema?: any;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, path, ogType = 'website', ogImage, schema }) => {
  const DEFAULT_IMAGE = 'https://i.imgur.com/rYq5wTX.png';
  const rawOgImage = ogImage || DEFAULT_IMAGE;
  
  // Construct absolute URL for the image
  const finalOgImage = rawOgImage.startsWith('http') 
    ? rawOgImage 
    : `${CANONICAL_DOMAIN}${rawOgImage.startsWith('/') ? rawOgImage : `/${rawOgImage}`}`;

  useEffect(() => {
    document.title = title;
    
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

    const isPreview = window.location.hostname.includes('usercontent.goog') || window.location.hostname.includes('localhost');
    if (isPreview) {
      updateMeta('robots', 'noindex, nofollow');
    } else {
      updateMeta('robots', 'index, follow');
      
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
    updateMeta('og:type', ogType, 'property');
    updateMeta('og:image', finalOgImage, 'property');

    // Twitter
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', finalOgImage);

  }, [title, description, keywords, path, ogType, finalOgImage]);

  return (
    <>
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </>
  );
};
