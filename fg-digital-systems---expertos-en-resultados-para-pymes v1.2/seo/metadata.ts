
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
    path: "/servicios",
    ogType: "website"
  },
  pricing: {
    title: "Tarifas Transparentes de Diseño Web y SEO | FG Digital Systems",
    description: "Inversión única, sin sorpresas. Packs desde 690€ diseñados para que recuperes tu inversión atrayendo nuevos clientes.",
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
    keywords: "contacto fg advisory, pedir presupuesto web, auditoria gratis pyme",
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
