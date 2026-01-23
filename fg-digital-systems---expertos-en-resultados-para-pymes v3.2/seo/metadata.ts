export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  datePublished?: string;
  dateModified?: string;
}

export const CANONICAL_DOMAIN = 'https://fgdigitalsystems.com';

export const METADATA: Record<string, PageMetadata> = {
  home: {
    title: "Diseño Web y SEO para Pymes | FG Digital Systems",
    description: "Diseño web y SEO local para Pymes. Creamos sistemas web que atraen clientes y aumentan ventas sin cuotas mensuales ni tecnicismos. Resultados reales.",
    keywords: "diseño web pymes, atraer clientes negocio local, seo local españa, presupuestos web claros",
    path: "/",
    ogType: "website"
  },
  services: {
    title: "Servicios de Diseño Web y SEO Local | FG Digital Systems",
    description: "Webs rápidas, SEO local y sistemas de ventas. Soluciones prácticas para que tu negocio local lidere en Google y consiga contactos diarios.",
    keywords: "servicios marketing pyme, captación de clientes, diseño web profesional, seo para negocios",
    path: "/servicios-diseno-web-seo",
    ogType: "website"
  },
  webQueVende: {
    title: "Diseño Web Profesional para Negocios | FG Digital Systems",
    description: "Creamos webs enfocadas a la venta: diseño mobile-first, carga ultra-rápida y textos persuasivos para convertir visitas en llamadas de clientes.",
    path: "/web-que-vende",
    ogType: "website"
  },
  seoLocal: {
    title: "SEO Local y Posicionamiento Google Maps | FG Digital Systems",
    description: "Domina las búsquedas locales en tu ciudad. Optimizamos tu ficha de Google Business y tu web para aparecer en el Top 3 de Maps y atraer clientes.",
    path: "/seo-local",
    ogType: "website"
  },
  captacionLeads: {
    title: "Sistemas de Captación de Clientes y Leads | FG Digital Systems",
    description: "Transformamos tu web en una herramienta de captación constante con WhatsApp integrado, formularios de venta y embudos directos a tu negocio.",
    path: "/captacion-de-clientes",
    ogType: "website"
  },
  mantenimientoWeb: {
    title: "Mantenimiento Web y Soporte SEO Mensual | FG Digital Systems",
    description: "Delegación técnica total. Mantenemos tu web rápida, segura y siempre optimizada para que sigas creciendo en Google mes a mes de forma estable.",
    path: "/mantenimiento-web-seo",
    ogType: "website"
  },
  pricing: {
    title: "Tarifas Diseño Web y SEO para Pymes | FG Digital Systems",
    description: "Inversión única, sin sorpresas. Packs desde 690€ diseñados para que recuperes tu inversión atrayendo nuevos clientes desde el primer día.",
    keywords: "precio web pyme, cuanto cuesta seo local, tarifas diseño web transparentes",
    path: "/tarifas-diseno-web",
    ogType: "website"
  },
  cases: {
    title: "Casos de Éxito: Resultados de Clientes | FG Digital Systems",
    description: "Mira cómo clínicas, autónomos y empresas de servicios han multiplicado sus llamadas y reservas reales con nuestras estrategias de SEO local.",
    keywords: "resultados marketing digital, casos éxito pymes, ejemplos seo local",
    path: "/casos-exito",
    ogType: "website"
  },
  blog: {
    title: "Blog de Marketing y Crecimiento para Pymes | FG Digital Systems",
    description: "Consejos prácticos sobre SEO local, diseño web que convierte y estrategias digitales sin tecnicismos complejos para pequeñas empresas.",
    keywords: "blog marketing pyme, consejos seo local, mejorar conversion web",
    path: "/blog-marketing-digital",
    ogType: "website"
  },
  "google-maps-top-3-guia-2026": {
    title: "Cómo aparecer en el TOP 3 de Google Maps | Guía SEO Local",
    description: "Aprende los factores clave para dominar el local pack de Google Maps y atraer clientes en tu ciudad de forma totalmente orgánica y efectiva.",
    path: "/blog-marketing-digital/google-maps-top-3-guia-2026",
    ogType: "article",
    datePublished: "2024-03-20",
    dateModified: "2024-03-25"
  },
  "errores-web-conversion-clientes": {
    title: "5 Errores Web que matan tus ventas | Guía de Conversión",
    description: "Descubre por qué tu web no genera clientes y cómo arreglar los fallos de experiencia de usuario y copywriting más comunes en Pymes.",
    path: "/blog-marketing-digital/errores-web-conversion-clientes",
    ogType: "article",
    datePublished: "2024-03-18",
    dateModified: "2024-03-25"
  },
  "whatsapp-business-estrategia-pymes": {
    title: "WhatsApp Business para Pymes: Estrategia de Ventas",
    description: "Convierte tu WhatsApp en una herramienta profesional de cierre de ventas y atención al cliente con estos consejos estratégicos y prácticos.",
    path: "/blog-marketing-digital/whatsapp-business-estrategia-pymes",
    ogType: "article",
    datePublished: "2024-03-15",
    dateModified: "2024-03-25"
  },
  "cuanto-cuesta-conseguir-clientes-online": {
    title: "¿Cuánto cuesta conseguir clientes online? | Análisis",
    description: "Analizamos el coste real de captación de clientes y por qué la inversión fragmentada suele salir más cara a largo plazo para las pequeñas empresas.",
    path: "/blog-marketing-digital/cuanto-cuesta-conseguir-clientes-online",
    ogType: "article",
    datePublished: "2024-03-10",
    dateModified: "2024-03-25"
  },
  "google-business-profile-guia-pro-2026": {
    title: "Guía Google Business Profile 2026: Atributos y Fotos SEO",
    description: "Optimiza tu ficha de Google al máximo. Aprende a usar atributos, publicaciones y fotos reales para ganar autoridad en Google Maps hoy mismo.",
    path: "/blog-marketing-digital/google-business-profile-guia-pro-2026",
    ogType: "article",
    datePublished: "2024-03-25",
    dateModified: "2024-03-25"
  },
  "velocidad-web-factor-ranking-pymes": {
    title: "Velocidad Web y Core Web Vitals para Pymes | Guía SEO",
    description: "Por qué 1 segundo de retraso mata tu conversión. Descubre cómo optimizar LCP y CLS para mejorar en Google y vender más online.",
    path: "/blog-marketing-digital/velocidad-web-factor-ranking-pymes",
    ogType: "article",
    datePublished: "2024-03-28",
    dateModified: "2024-03-28"
  },
  "marketing-digital-bajo-presupuesto-local": {
    title: "Marketing Digital Low-Cost para Negocios Locales",
    description: "Estrategias de alto impacto con inversión mínima. SEO local, WhatsApp y contenido útil para Pymes que están empezando en el mundo digital.",
    path: "/blog-marketing-digital/marketing-digital-bajo-presupuesto-local",
    ogType: "article",
    datePublished: "2024-04-02",
    dateModified: "2024-04-02"
  },
  "automatizacion-leads-pymes-guia": {
    title: "Cómo Automatizar Leads en tu Web de Servicios | Guía",
    description: "Deja de responder emails manualmente. Crea sistemas de captación que trabajen 24/7 y cierren ventas por ti de forma profesional y eficiente.",
    path: "/blog-marketing-digital/automatizacion-leads-pymes-guia",
    ogType: "article",
    datePublished: "2024-04-05",
    dateModified: "2024-04-05"
  },
  "importancia-reseñas-seo-local": {
    title: "El Poder de las Reseñas en el SEO Local | Guía Pro",
    description: "Cómo conseguir reseñas de calidad, gestionar las negativas y usarlas para subir posiciones en Google Maps de forma constante y segura.",
    path: "/blog-marketing-digital/importancia-reseñas-seo-local",
    ogType: "article",
    datePublished: "2024-04-10",
    dateModified: "2024-04-10"
  },
  "copywriting-webs-servicios-guia": {
    title: "Copywriting para Webs de Servicios: Escribe para Vender",
    description: "Deja de hablar de ti y empieza a hablar de los problemas de tu cliente. Guía de textos para webs que convierten visitas en llamadas reales.",
    path: "/blog-marketing-digital/copywriting-webs-servicios-guia",
    ogType: "article",
    datePublished: "2024-04-15",
    dateModified: "2024-04-15"
  },
  about: {
    title: "Sobre FG Digital Systems | Tu Socio en Crecimiento Local",
    description: "No somos una agencia de 'transformación digital' genérica. Somos tu socio para conseguir más clientes con claridad, honestidad y resultados reales.",
    keywords: "agencia marketing honesta, equipo digital growth method, diseño web para pymes",
    path: "/sobre-nosotros",
    ogType: "website"
  },
  contact: {
    title: "Solicita tu Auditoría Web Gratuita | FG Digital Systems",
    description: "¿Listo para vender más? Cuéntanos tu objetivo y te daremos una propuesta clara en menos de 24 horas. Sin compromiso ni humos.",
    keywords: "contacto fg advisory, pedir presupuesto web, auditoria gratis pyme",
    path: "/contacto",
    ogType: "website"
  },
  faq: {
    title: "Preguntas Frecuentes Diseño Web y SEO | FG Digital Systems",
    description: "Respondemos a tus preguntas sobre pagos, propiedad de la web y tiempos de entrega sin usar tecnicismos complejos. Soporte directo.",
    keywords: "preguntas diseño web, dudas seo local, soporte pymes",
    path: "/preguntas-frecuentes",
    ogType: "website"
  },
  legalNotice: {
    title: "Aviso Legal | FG Digital Systems",
    description: "Información legal y términos de uso de FG Digital Systems. Cumplimiento de la normativa vigente y transparencia total.",
    path: "/aviso-legal"
  },
  privacyPolicy: {
    title: "Política de Privacidad | FG Digital Systems",
    description: "Cómo tratamos y protegemos tus datos personales en FG Digital Systems. Respetamos tu privacidad al máximo nivel.",
    path: "/politica-de-privacidad"
  },
  cookiePolicy: {
    title: "Política de Cookies | FG Digital Systems",
    description: "Información detallada sobre el uso de cookies en nuestro sitio web para mejorar tu navegación y análisis de tráfico.",
    path: "/politica-de-cookies"
  },
  disenoWebMurcia: {
    title: "Diseño Web Murcia | Especialistas en Webs que Venden",
    description: "Creamos tu web profesional en Murcia enfocada a captar clientes. Mobile-first, ultra-rápida y con precios cerrados desde 690€. Sin cuotas.",
    keywords: "diseño web murcia, web para pymes murcia, crear pagina web murcia, empresa diseño web murcia",
    path: "/diseno-web-murcia",
    ogType: "website"
  },
  posicionamientoGoogleMurcia: {
    title: "Posicionamiento Google Murcia | SEO Local Efectivo",
    description: "¿No te encuentran en Google? Expertos en SEO en Murcia. Atrae tráfico cualificado de tu zona y multiplica tus llamadas diarias.",
    keywords: "posicionamiento google murcia, seo murcia, agencia seo murcia, salir primero en google murcia",
    path: "/posicionamiento-google-murcia",
    ogType: "website"
  },
  seoLocalMurcia: {
    title: "SEO Local Murcia | Domina Google Maps en tu Ciudad",
    description: "Aparecer en el Top 3 de Google Maps en Murcia es posible. Optimizamos tu ficha de negocio para que tus clientes locales te encuentren antes.",
    keywords: "seo local murcia, google maps murcia, posicionar negocio local murcia, reseñas google murcia",
    path: "/seo-local-murcia",
    ogType: "website"
  },
  webNegociosLocalesMurcia: {
    title: "Web para Negocios Locales en Murcia | Captación Leads",
    description: "Diseño web para servicios en Murcia. Integramos WhatsApp, reservas y sistemas de venta para que tu teléfono no pare de sonar. Resultados.",
    keywords: "web negocios locales murcia, captacion clientes murcia, web profesional para pymes murcia",
    path: "/web-para-negocios-locales-murcia",
    ogType: "website"
  },
  // SEO VERTICAL PROFESIONES
  seoFisioterapeutas: {
    title: "Diseño Web y SEO para Fisioterapeutas en Murcia | FG Digital",
    description: "Conseguimos que tu clínica de fisioterapia en Murcia aparezca el primero en Google y reciba más reservas por WhatsApp.",
    path: "/murcia/web-seo-fisioterapeutas",
    ogType: "website"
  },
  seoPsicologos: {
    title: "Web + SEO para Psicólogos en Murcia | FG Digital Systems",
    description: "Especialistas en captación de pacientes para psicólogos y terapeutas en Murcia. Web profesional y posicionamiento local.",
    path: "/murcia/web-seo-psicologos",
    ogType: "website"
  },
  seoDentistas: {
    title: "Web y SEO para Clínicas Dentales en Murcia | FG Digital",
    description: "Atrae más pacientes a tu clínica dental en Murcia. Optimizamos tu web y tu ficha de Google Maps para implantes y ortodoncia.",
    path: "/murcia/web-seo-dentistas",
    ogType: "website"
  },
  seoBarberias: {
    title: "Web + SEO para Barberías y Peluquerías en Murcia | FG Digital",
    description: "Haz que tu barbería en Murcia sea la más visible. Sistema de reservas y SEO local para llenar tu agenda cada semana.",
    path: "/murcia/web-seo-barberias",
    ogType: "website"
  },
  seoEstetica: {
    title: "Web y SEO para Centros de Estética y Uñas en Murcia | FG Digital",
    description: "Consigue más clientas para tu centro de estética en Murcia. Diseño web profesional y posicionamiento en Google Maps.",
    path: "/murcia/web-seo-estetica-unas",
    ogType: "website"
  },
  seoFitness: {
    title: "Web + SEO para Entrenadores Personales en Murcia | FG Digital",
    description: "Si eres fitness coach en Murcia, necesitas una web que capte clientes. Posicionamiento para entrenamientos y nutrición.",
    path: "/murcia/web-seo-entrenadores-personales",
    ogType: "website"
  },
  seoFontaneros: {
    title: "Web y SEO para Fontaneros en Murcia | FG Digital Systems",
    description: "Que tu teléfono no pare de sonar. Especialistas en SEO para fontaneros en Murcia con urgencias y servicios 24h.",
    path: "/murcia/web-seo-fontaneros",
    ogType: "website"
  },
  seoElectricistas: {
    title: "Web + SEO para Electricistas en Murcia | FG Digital Systems",
    description: "Consigue avisos de reparaciones eléctricas en Murcia. Posicionamiento local efectivo para electricistas autónomos.",
    path: "/murcia/web-seo-electricistas",
    ogType: "website"
  },
  seoClinicasEstetica: {
    title: "Web y SEO para Clínicas de Medicina Estética en Murcia | FG",
    description: "Dominio absoluto de Google para clínicas estéticas en Murcia. Captación de pacientes para tratamientos de alta gama.",
    path: "/murcia/web-seo-clinicas-estetica",
    ogType: "website"
  }
};