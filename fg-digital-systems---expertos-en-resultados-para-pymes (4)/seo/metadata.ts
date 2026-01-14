export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export const CANONICAL_DOMAIN = 'https://www.fgdigitalsystems.com';

export const METADATA: Record<string, PageMetadata> = {
  home: {
    title: "¿Tu web trae clientes o solo facturas? | FG Digital Systems",
    description: "Hacemos webs que venden y te posicionan en Google con precios claros. Sin palabrería técnica ni cuotas escondidas. Resultados para Pymes en España e Italia.",
    keywords: "diseño web pymes, atraer clientes negocio local, seo local españa, presupuestos web claros",
    path: "/",
    ogType: "website"
  },
  services: {
    title: "Servicios de Diseño Web y SEO Local para Pymes | FG Digital Systems",
    description: "Webs rápidas, SEO local y chatbots de ventas. Soluciones prácticas sin lenguaje corporativo vacío para negocios locales.",
    keywords: "servicios marketing pyme, captación de clientes, diseño web profesional, seo para negocios",
    path: "/servicios",
    ogType: "website"
  },
  pricing: {
    title: "Tarifas Transparentes de Diseño Web y SEO | FG Digital Systems",
    description: "Inversión única, sin sorpresas. Packs desde 950€ diseñados para que recuperes tu inversión atrayendo nuevos clientes.",
    keywords: "precio web pyme, cuanto cuesta seo local, tarifas diseño web transparentes",
    path: "/precios",
    ogType: "website"
  },
  cases: {
    title: "Casos de Éxito: Resultados Reales de Clientes | FG Digital Systems",
    description: "Mira cómo clínicas, restaurantes y empresas de servicios han multiplicado sus llamadas y reservas con nuestra ayuda.",
    keywords: "resultados marketing digital, casos éxito pymes, ejemplos seo local",
    path: "/casos",
    ogType: "website"
  },
  blog: {
    title: "Blog de Crecimiento y Marketing para Pymes | FG Digital Systems",
    description: "Consejos prácticos sobre SEO local, diseño web que convierte y estrategias digitales sin tecnicismos para pequeñas empresas.",
    keywords: "blog marketing pyme, consejos seo local, mejorar conversion web",
    path: "/blog",
    ogType: "website"
  },
  about: {
    title: "Sobre FG Digital Systems: Tu Socio en Crecimiento Local",
    description: "No somos una agencia de 'transformación digital'. Somos tu socio para conseguir más clientes con claridad y honestidad.",
    keywords: "agencia marketing honesta, equipo digital growth method, diseño web para pymes",
    path: "/sobre-nosotros",
    ogType: "website"
  },
  contact: {
    title: "Solicita tu Auditoría Web Gratuita | FG Digital Systems",
    description: "¿Listo para vender más? Cuéntanos tu objetivo y te daremos una propuesta clara en menos de 24 horas.",
    keywords: "contacto fg digital systems, pedir presupuesto web, auditoria gratis pyme",
    path: "/contacto",
    ogType: "website"
  },
  faq: {
    title: "Preguntas Frecuentes sobre Diseño Web y SEO | FG Digital Systems",
    description: "Respondemos a tus preguntas sobre pagos, propiedad de la web y tiempos sin usar tecnicismos complejos.",
    keywords: "preguntas diseño web, dudas seo local, soporte pymes",
    path: "/faq",
    ogType: "website"
  },
  // Blog articles SEO update
  "google-maps-top-3-guia-2026": {
    title: "Cómo aparecer en el Top 3 de Google Maps en tu ciudad (Guía práctica 2026)",
    description: "Descubre cómo posicionar tu negocio en el Top 3 de Google Maps con Google Business Profile, reseñas y SEO local. Pasos claros y accionables.",
    path: "/blog/google-maps-top-3-guia-2026",
    ogType: "article"
  },
  "errores-web-conversion-clientes": {
    title: "5 errores en tu web que te están haciendo perder clientes hoy mismo (y cómo arreglarlos)",
    description: "Tu web puede estar “bonita” y aun así perder ventas. Estos 5 errores bajan tu conversión: velocidad, mensaje, CTA y confianza.",
    path: "/blog/errores-web-conversion-clientes",
    ogType: "article"
  },
  "whatsapp-business-ventas-pymes-2026": {
    title: "WhatsApp Business: cómo usarlo para vender más (sin estar pegado al móvil)",
    description: "WhatsApp Business puede ser tu mejor vendedor si lo configuras bien: mensajes automáticos, catálogo y etiquetas. Guía completa.",
    path: "/blog/whatsapp-business-ventas-pymes-2026",
    ogType: "article"
  }
};