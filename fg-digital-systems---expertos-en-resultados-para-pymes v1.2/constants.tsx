import React from 'react';
import { Layout, Search, MessageSquareMore, Settings, ShieldCheck, Zap, TrendingUp, Users, PhoneCall, Globe, CreditCard, Lock, UserCheck, Clock, CheckCircle2 } from 'lucide-react';
import { PricingPlan, CaseStudyExample, FAQItem, BlogPost } from './types.ts';

export const ROUTES = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Precios', path: '/precios' },
  { name: 'Casos', path: '/casos' },
  { name: 'Blog', path: '/blog' },
  { name: 'Nosotros', path: '/sobre-nosotros' },
  { name: 'Contacto', path: '/contacto' },
];

export const REVIEWS = [
  {
    name: "Jordi G.",
    role: "Dueño de Clínica de Fisioterapia",
    text: "Teníamos una web que no servía para nada. Con el Pack Crecimiento ahora el 70% de nuestras citas nuevas entran directamente por WhatsApp. Inversión recuperada en el primer mes.",
    stars: 5
  },
  {
    name: "Elena M.",
    role: "Gerente de Restaurante",
    text: "Aparecer en los primeros puestos de Google Maps ha multiplicado nuestras reservas los fines de semana. Trato directo, sin palabras raras. Muy recomendables.",
    stars: 5
  },
  {
    name: "Carlos T.",
    role: "Autónomo de Reformas",
    text: "Buscaba algo rápido y que no me diera problemas. En 10 días tenía la web funcionando y ya he cerrado dos presupuestos grandes gracias a ella. Claridad total en el precio.",
    stars: 5
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Pack 1 — Empieza Bien',
    tagline: 'Para empezar bien, sin errores',
    price: '690€',
    duration: '3-5 días',
    description: 'La forma más rápida y limpia de tener presencia online sin errores. Ideal para autónomos.',
    features: [
      'Web de 1 sola página (estructura vertical)',
      'Diseño mobile-first, rápido y claro',
      'Botones de WhatsApp y llamada',
      'Despliegue en Vercel + Dominio',
      'SEO Básico Sólido',
      'Sitemap + robots.txt + Search Console'
    ]
  },
  {
    id: 'growth',
    name: 'Pack 2 — Consigue Clientes',
    tagline: 'El pack que funciona para el 80 % de negocios locales',
    price: '1.290€',
    duration: '5-10 días',
    description: 'La web que realmente empieza a generar contactos. El más elegido por negocios locales.',
    recommended: true,
    features: [
      'Todo lo del Website Starter',
      'Hasta 5 páginas (Inicio, Servicios, etc)',
      'Copy claro enfocado a conversión',
      'QA final (PageSpeed + validaciones)',
      'Formulario Tally multi-paso inteligente',
      'Optimización Google Business Profile'
    ]
  },
  {
    id: 'scale',
    name: 'Pack 3 — Empieza a Competir',
    tagline: 'Para empezar a competir en Google, no para promesas rápidas',
    price: '2.800€',
    duration: '10-20 días',
    description: 'Para negocios que quieren empezar a posicionar y construir tráfico real en zonas competitivas.',
    features: [
      'Todo lo del Pack Pro incluido',
      'Investigación de Palabras Clave real',
      'Estructura SEO Local (Servicios + Zona)',
      '3 Artículos de Blog SEO optimizados',
      'Roadmap SEO estratégico futuro'
    ]
  },
  {
    id: 'system',
    name: 'Pack 4 — Full Sales System',
    price: '3.750€',
    duration: '2-4 semanas',
    description: 'Solo para negocios que venden servicios o paquetes online. Automatización total de ventas.',
    features: [
      'Todo lo del Pack 3 incluido',
      'Stripe Checkout (1-3 ofertas)',
      'Botones de pago integrados',
      'Automatización (n8n/Make/Zapier)',
      'Lead → CRM / Pago → Onboarding',
      'Reserva → Confirmación y Recordatorios'
    ]
  }
];

export const ADD_ONS = [
  { name: "Página extra (Servicio / Sobre mí)", price: "120€" },
  { name: "Alta y configuración de Google Business Profile", price: "180€" },
  { name: "Formulario Tally simple (1 formulario)", price: "90€" },
  { name: "Botón de reserva (enlace simple)", price: "70€" }
];

export const RETAINERS = [
  {
    name: "Starter",
    price: "120€/mes",
    desc: "Mantenimiento y SEO ligero.",
    features: ["1 artículos SEO / mes", "Mantenimiento Google Maps", "Enlazado interno", "Informe mensual claro"]
  },
  {
    name: "Standard",
    price: "240€/mes",
    desc: "La mejor opción para crecer.",
    recommended: true,
    features: ["4 artículos SEO / mes", "GBP + citas locales", "Optimización on-page (2-5 págs)", "Outreach ligero", "Informe + plan mensual"]
  },
  {
    name: "Authority",
    price: "600€/mes",
    desc: "Dominio total del mercado.",
    features: ["8 artículos SEO / mes", "Estrategia fuerte de autoridad", "Optimización continua", "Prioridad máxima y reporting"]
  }
];

export const FAQS: FAQItem[] = [
  {
    question: '¿Por qué vuestros precios son públicos?',
    answer: 'Porque no tenemos nada que esconder. Creemos que los negocios locales valoran la transparencia y saber cuánto van a invertir desde el minuto uno.'
  },
  {
    question: '¿La web será de mi propiedad?',
    answer: 'Sí. Al 100%. No te atamos con contratos de permanencia ni plataformas cerradas. Si algún día decides irte, te llevas tu web contigo.'
  },
  {
    question: '¿Me garantizas estar primero en Google?',
    answer: 'No. Nadie puede hacerlo de forma honesta. Sí garantizamos un SEO técnico limpio, una web ultra-rápida y una estrategia realista basada en datos.'
  },
  {
    question: '¿Cuánto tarda el SEO en dar resultados?',
    answer: 'Verás los primeros movimientos entre las semanas 4 y 8. Los resultados sólidos y estables suelen requerir entre 3 y 6 meses de trabajo constante.'
  },
  {
    question: '¿Puedo empezar con un pack y ampliar luego?',
    answer: 'Sí. Es lo más habitual. Muchos clientes empiezan con el Starter para validar y luego amplían al Pro o Launch conforme el negocio crece.'
  },
  {
    question: '¿En qué ciudades o países trabajáis?',
    answer: 'Trabajamos principalmente con clientes en España e Italia. La ubicación no es un problema siempre que el público objetivo esté bien definido.'
  }
];

export const CASE_STUDIES: CaseStudyExample[] = [
  {
    category: 'Marca Personal / Educación',
    title: 'Myriam Gentile (Pedagogista)',
    outcome: 'Posicionamiento orgánico en top 2 en tiempo récord.',
    metrics: ['2ª posición en región Marche', '2ª posición en Civitanova Marche', 'Resultados visibles en 10 días'],
    description: 'Transformamos una marca personal sin visibilidad en un referente local mediante una arquitectura de información limpia y una base SEO técnica sólida.'
  },
  {
    category: 'Fitness / Negocios Online',
    title: 'Team Amoruso (Paolo Amoruso)',
    outcome: 'Sistema de ventas automatizado y facturación recurrente.',
    metrics: ['Captación de leads automatizada', 'Venta de productos digitales', 'Generación de ingresos continuos'],
    description: 'Rediseñamos el ecosistema digital de un atleta IFBB Pro para eliminar la gestión manual, integrando un sistema de ventas escalable y automatizado.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'google-maps-top-3-guia-2026',
    title: 'Cómo aparecer en el Top 3 de Google Maps en tu ciudad (Guía práctica 2026)',
    excerpt: 'Descubre la estrategia definitiva de SEO Local para dominar Google Maps. Aprende a optimizar tu Google Business Profile y captar clientes en tu zona.',
    category: 'SEO Local',
    date: '15 Mar 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    content: `<p>Si tu negocio no aparece en el Top 3 de Google Maps, estás perdiendo clientes...</p>`
  },
  {
    id: 'errores-web-conversion-clientes',
    title: '5 errores en tu web que te están haciendo perder clientes hoy mismo (y cómo arreglarlos)',
    excerpt: '¿Tienes visitas pero el teléfono no suena? Descubre los fallos invisibles que están saboteando tus ventas y cómo convertirlos en oportunidades.',
    category: 'Conversión',
    date: '10 Mar 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    content: `<p>Tu página web no debería ser un simple folleto digital; debería ser tu mejor comercial...</p>`
  }
];