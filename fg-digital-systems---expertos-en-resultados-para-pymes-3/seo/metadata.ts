export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export const CANONICAL_DOMAIN = 'https://fgdigitalsystems.com';

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
    description: "Webs rápidas, SEO local y sistemas de ventas. Soluciones prácticas sin lenguaje corporativo vacío para negocios locales.",
    keywords: "servicios marketing pyme, captación de clientes, diseño web profesional, seo para negocios",
    path: "/servicios-diseno-web-seo",
    ogType: "website"
  },
  pricing: {
    title: "Tarifas Transparentes de Diseño Web y SEO | FG Digital Systems",
    description: "Inversión única, sin sorpresas. Packs desde 690€ diseñados para que recuperes tu inversión atrayendo nuevos clientes.",
    keywords: "precio web pyme, cuanto cuesta seo local, tarifas diseño web transparentes",
    path: "/tarifas-diseno-web",
    ogType: "website"
  },
  cases: {
    title: "Casos de Éxito: Resultados Reales de Clientes | FG Digital Systems",
    description: "Mira cómo clínicas, restaurantes y empresas de servicios han multiplicado sus llamadas y reservas con nuestra ayuda.",
    keywords: "resultados marketing digital, casos éxito pymes, ejemplos seo local",
    path: "/casos-exito",
    ogType: "website"
  },
  blog: {
    title: "Blog de Crecimiento y Marketing para Pymes | FG Digital Systems",
    description: "Consejos prácticos sobre SEO local, diseño web que convierte y estrategias digitales sin tecnicismos para pequeñas empresas.",
    keywords: "blog marketing pyme, consejos seo local, mejorar conversion web",
    path: "/blog-marketing-digital",
    ogType: "website"
  },
  "google-maps-top-3-guia-2026": {
    title: "Cómo aparecer en el TOP 3 de Google Maps | Guía SEO Local",
    description: "Aprende los factores clave de ranking para dominar el local pack de Google Maps y atraer clientes en tu ciudad de forma orgánica.",
    path: "/blog-marketing-digital/google-maps-top-3-guia-2026",
    ogType: "article"
  },
  "errores-web-conversion-clientes": {
    title: "5 Errores Web que matan tus ventas | Guía de Conversión",
    description: "Descubre por qué tu web no está generando clientes y cómo arreglar los fallos de UX y copywriting más comunes en Pymes.",
    path: "/blog-marketing-digital/errores-web-conversion-clientes",
    ogType: "article"
  },
  "whatsapp-business-estrategia-pymes": {
    title: "WhatsApp Business para Pymes: Estrategia de Ventas 2024",
    description: "Convierte tu WhatsApp en una herramienta profesional de cierre de ventas y atención al cliente con estos consejos estratégicos.",
    path: "/blog-marketing-digital/whatsapp-business-estrategia-pymes",
    ogType: "article"
  },
  "cuanto-cuesta-conseguir-clientes-online": {
    title: "¿Cuánto cuesta conseguir clientes online? | Análisis de Inversión",
    description: "Analizamos el coste real de captación de clientes y por qué la inversión fragmentada suele salir más cara a largo plazo para las Pymes.",
    path: "/blog-marketing-digital/cuanto-cuesta-conseguir-clientes-online",
    ogType: "article"
  },
  "google-business-profile-guia-pro-2026": {
    title: "Guía Google Business Profile 2026: Atributos y Fotos SEO",
    description: "Optimiza tu ficha de Google al máximo. Aprende a usar atributos, publicaciones y fotos para ganar autoridad en Google Maps.",
    path: "/blog-marketing-digital/google-business-profile-guia-pro-2026",
    ogType: "article"
  },
  "velocidad-web-factor-ranking-pymes": {
    title: "Velocidad Web y Core Web Vitals para Pymes | Guía SEO",
    description: "Por qué 1 segundo de retraso mata tu conversión. Descubre cómo optimizar LCP y CLS para mejorar en Google.",
    path: "/blog-marketing-digital/velocidad-web-factor-ranking-pymes",
    ogType: "article"
  },
  "marketing-digital-bajo-presupuesto-local": {
    title: "Marketing Digital Low-Cost para Negocios Locales",
    description: "Estrategias de alto impacto con inversión mínima. SEO local, WhatsApp y contenido útil para Pymes que empiezan.",
    path: "/blog-marketing-digital/marketing-digital-bajo-presupuesto-local",
    ogType: "article"
  },
  "automatizacion-leads-pymes-guia": {
    title: "Cómo Automatizar Leads en tu Web de Servicios | Guía Pymes",
    description: "Deja de responder emails manualmente. Crea sistemas de captación que trabajen 24/7 y cierren ventas por ti.",
    path: "/blog-marketing-digital/automatizacion-leads-pymes-guia",
    ogType: "article"
  },
  "importancia-reseñas-seo-local": {
    title: "El Poder de las Reseñas en el SEO Local | Guía Pro",
    description: "Cómo conseguir reseñas de calidad, gestionar las negativas y usarlas para subir posiciones en Google Maps.",
    path: "/blog-marketing-digital/importancia-reseñas-seo-local",
    ogType: "article"
  },
  "copywriting-webs-servicios-guia": {
    title: "Copywriting para Webs de Servicios: Escribe para Vender",
    description: "Deja de hablar de ti y empieza a hablar de los problemas de tu cliente. Guía de textos para webs que convierten visitas en llamadas.",
    path: "/blog-marketing-digital/copywriting-webs-servicios-guia",
    ogType: "article"
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
    keywords: "contacto fg advisory, pedir presupuesto web, auditoria gratis pyme",
    path: "/contacto",
    ogType: "website"
  },
  faq: {
    title: "Preguntas Frecuentes sobre Diseño Web y SEO | FG Digital Systems",
    description: "Respondemos a tus preguntas sobre pagos, propiedad de la web y tiempos sin usar tecnicismos complejos.",
    keywords: "preguntas diseño web, dudas seo local, soporte pymes",
    path: "/preguntas-frecuentes",
    ogType: "website"
  },
  legalNotice: {
    title: "Aviso Legal | FG Digital Systems",
    description: "Información legal y términos de uso de FG Digital Systems.",
    path: "/aviso-legal"
  },
  privacyPolicy: {
    title: "Política de Privacidad | FG Digital Systems",
    description: "Cómo tratamos y protegemos tus datos personales en FG Digital Systems.",
    path: "/politica-de-privacidad"
  },
  cookiePolicy: {
    title: "Política de Cookies | FG Digital Systems",
    description: "Información sobre el uso de cookies en nuestro sitio web.",
    path: "/politica-de-cookies"
  },
  disenoWebMurcia: {
    title: "Diseño Web Murcia | Especialistas en Webs que Venden",
    description: "Creamos tu web profesional en Murcia enfocada a captar clientes. Mobile-first, ultra-rápida y con precios cerrados desde 690€.",
    keywords: "diseño web murcia, web para pymes murcia, crear pagina web murcia, empresa diseño web murcia",
    path: "/diseno-web-murcia",
    ogType: "website"
  },
  posicionamientoGoogleMurcia: {
    title: "Posicionamiento Google Murcia | Aparece el Primero en tu Ciudad",
    description: "¿No te encuentran en Google? Especialistas en posicionamiento web en Murcia. Atrae tráfico cualificado y multiplica tus llamadas.",
    keywords: "posicionamiento google murcia, seo murcia, agencia seo murcia, salir primero en google murcia",
    path: "/posicionamiento-google-murcia",
    ogType: "website"
  },
  seoLocalMurcia: {
    title: "SEO Local Murcia | Domina Google Maps y Google Business",
    description: "Aparecer en el Top 3 de Google Maps en Murcia. Optimizamos tu ficha de negocio para que tus clientes locales te encuentren antes.",
    keywords: "seo local murcia, google maps murcia, posicionar negocio local murcia, reseñas google murcia",
    path: "/seo-local-murcia",
    ogType: "website"
  },
  webNegociosLocalesMurcia: {
    title: "Web para Negocios Locales en Murcia | Captación de Leads",
    description: "Diseño web para negocios de servicios en Murcia. Integramos WhatsApp, reservas y sistemas de venta para que tu teléfono no pare de sonar.",
    keywords: "web negocios locales murcia, captacion clientes murcia, web profesional para pymes murcia",
    path: "/web-para-negocios-locales-murcia",
    ogType: "website"
  }
};