import React from 'react';
import { Layout, Search, MousePointer2, Settings, ShieldCheck, Zap, TrendingUp, Users, MessageSquareMore, PhoneCall, Calendar, Star, CircleCheck } from 'lucide-react';
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
  },
  {
    name: "Marta R.",
    role: "Centro de Estética",
    text: "Me explicaron todo de forma que lo entendí. No solo me hicieron la web, sino que me enseñaron a gestionar las reseñas de Google para atraer más gente del barrio.",
    stars: 5
  }
];

export const SERVICE_SNAPSHOTS = [
  {
    title: 'Web que vende',
    description: 'Páginas rápidas que convencen a tus visitas para que te llamen o te escriban.',
    icon: <Layout className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'SEO de Barrio',
    description: 'Aparece en los primeros puestos de Google Maps cuando busquen tus servicios cerca.',
    icon: <Search className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Vendedor 24/7',
    description: 'Un chat inteligente que captura los datos de tus clientes incluso cuando estás cerrado.',
    icon: <MessageSquareMore className="w-6 h-6 text-blue-600" />
  },
  {
    title: 'Soporte Sin Humo',
    description: 'Nos encargamos de que todo funcione siempre. Sin líos técnicos para ti.',
    icon: <Settings className="w-6 h-6 text-blue-600" />
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Pack Inicial',
    price: '950€',
    duration: '7 días',
    description: 'Para negocios que necesitan empezar a recibir contactos online ya mismo.',
    features: [
      'Web de 1 página optimizada',
      'Diseño para móviles rápido',
      'Botón de llamada y WhatsApp',
      'Alta en Google Maps básica',
      'Hosting 1 año incluido',
      'Propiedad 100% tuya'
    ]
  },
  {
    id: 'growth',
    name: 'Pack Crecimiento',
    price: '1.650€',
    duration: '15 días',
    description: 'Ideal para superar a tu competencia local y dominar tu zona.',
    recommended: true,
    features: [
      'Web de hasta 5 páginas',
      'SEO Local avanzado (Maps)',
      'Textos enfocados a venta',
      'Formularios de presupuesto',
      'Chatbot básico de captura',
      'Informes de llamadas/leads'
    ]
  },
  {
    id: 'scale',
    name: 'Pack Escala',
    price: '2.800€',
    duration: '30 días',
    description: 'Sistema completo para negocios que quieren automatizar sus ventas.',
    features: [
      'Web con Blog y Contenidos',
      'Sistema de Citas / Reservas',
      'Chatbot IA de ventas 24/7',
      'Gestión de reseñas activa',
      'Integración con tu agenda',
      'Soporte Prioritario 3 meses'
    ]
  }
];

export const ADD_ONS = [
  { name: "Configuración Google Business Profile", price: "150€" },
  { name: "Página extra optimizada", price: "120€/ud" },
  { name: "Configuración de Blog completo", price: "250€" },
  { name: "Sistema de Reservas/Citas", price: "350€" },
  { name: "Integración Checkout (Stripe/PayPal)", price: "300€" },
  { name: "Automatización de emails básica", price: "200€" }
];

export const RETAINERS = [
  {
    name: "Mantenimiento Básico",
    price: "90€/mes",
    desc: "Seguridad y tranquilidad.",
    features: ["Actualizaciones técnicas", "Copias de seguridad semanales", "Soporte vía email"]
  },
  {
    name: "Plan Crecimiento",
    price: "250€/mes",
    desc: "Para los que quieren más.",
    recommended: true,
    features: ["Todo lo del Básico", "1 artículo de blog SEO", "Optimización mensual Maps", "Soporte prioritario"]
  }
];

export const CASE_STUDIES: CaseStudyExample[] = [
  {
    category: 'Salud / Bienestar',
    title: 'Clínica de Fisioterapia',
    outcome: 'Agenda llena con 2 semanas de antelación.',
    metrics: ['+45 llamadas mensuales', 'Top 3 en su ciudad', '90% reservas vía web'],
    description: 'Pasaron de depender del boca a boca a recibir solicitudes automáticas todos los días.'
  },
  {
    category: 'Hogar / Reformas',
    title: 'Empresa de Fontanería',
    outcome: 'Triplicaron las peticiones de presupuesto.',
    metrics: ['De 10 a 35 leads/semana', 'Ahorro en publicidad caro', 'Web cargando en <1s'],
    description: 'Optimizamos su ficha de Google y creamos una web donde el cliente pide presupuesto en 2 clics.'
  },
  {
    category: 'Hostelería',
    title: 'Restaurante de Barrio',
    outcome: 'Más reservas sin pagar comisiones externas.',
    metrics: ['+60 reservas directas/mes', 'Carta digital optimizada', 'Reseñas positivas en aumento'],
    description: 'Recuperaron el control de sus clientes y eliminaron la dependencia de plataformas de reservas.'
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
    question: '¿Realmente necesito un Chatbot de IA?',
    answer: 'Solo si pierdes clientes por no contestar rápido o fuera de horario. La IA ayuda a que el cliente no se vaya a la competencia mientras tú estás trabajando o descansando.'
  },
  {
    question: '¿Qué diferencia hay entre vuestra web y una barata?',
    answer: 'Una web barata es un gasto. Una web de FG Digital Systems es una inversión diseñada para traer clientes. Nos enfocamos en la velocidad y en que el usuario te contacte.'
  },
  {
    question: '¿Hacéis mantenimiento después del lanzamiento?',
    answer: 'Ofrecemos planes de acompañamiento opcionales si quieres delegar todo, pero te enseñamos a hacer cambios básicos para que seas independiente.'
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
    content: `
      <p>Si tu negocio no aparece en el Top 3 de Google Maps, estás perdiendo clientes que están literalmente a la vuelta de la esquina. El <strong>SEO Local</strong> es la herramienta más potente para pymes que quieren visibilidad inmediata sin gastar miles en publicidad.</p>
      
      <p>Aparecer en el famoso "Local Pack" de Google no es cuestión de suerte, sino de cumplir con los factores que el algoritmo prioriza: relevancia, distancia y prominencia. Aquí te explico cómo optimizar cada uno de ellos.</p>
      
      <h3>1. Optimización del Perfil de Empresa (Google Business Profile)</h3>
      <p>Tu ficha de Google es ahora tu nueva página de inicio local. Para posicionarla, asegúrate de:</p>
      <ul>
        <li><strong>Verificar tu dirección física:</strong> Google necesita saber que realmente existes en esa ubicación.</li>
        <li><strong>Elegir la categoría principal exacta:</strong> Si eres una "Clínica de Fisioterapia", no selecciones simplemente "Salud". La especificidad gana.</li>
        <li><strong>Añadir fotos reales semanalmente:</strong> Los perfiles con fotos actualizadas reciben un 35% más de clics que los perfiles estáticos.</li>
      </ul>

      <div class="bg-blue-600 text-white p-8 rounded-2xl my-10 not-prose shadow-xl border border-blue-400">
        <h4 class="text-xl font-black mb-2">¿Quieres dominar tu barrio en Google?</h4>
        <p class="mb-6 opacity-90">Analizamos tu perfil actual y te decimos por qué tu competencia sale antes que tú. Resultados reales en pocas semanas.</p>
        <a href="/contacto" class="inline-block bg-white text-blue-600 font-black px-8 py-3 rounded-xl hover:bg-blue-50 transition-all shadow-lg">Solicitar Auditoría Local Gratis</a>
      </div>

      <h3>2. La regla del NAP (Name, Address, Phone)</h3>
      <p>La consistencia de datos es vital. Google rastrea internet buscando tu nombre, dirección y teléfono. Si en Facebook pones "Calle Mayor 5" y en tu web pones "C/ Mayor n5", Google dudará de tu veracidad y bajará tu ranking. Mantén tus datos 100% idénticos en todos los directorios.</p>

      <h3>3. Reseñas: Calidad sobre Cantidad</h3>
      <p>No solo importa el número de estrellas. Lo que realmente impulsa el posicionamiento es que las reseñas contengan <strong>palabras clave</strong> del servicio (ej: "el mejor fisioterapeuta de Madrid") y que tú respondas a todas, agradeciendo o resolviendo dudas.</p>

      <div class="bg-slate-900 text-white p-8 rounded-2xl my-10 not-prose border-l-8 border-blue-600">
        <h4 class="text-xl font-bold mb-2">Multiplica tus llamadas desde Maps</h4>
        <p class="mb-6 text-slate-400">Nuestro servicio de SEO Local avanzado incluye gestión de citas, reseñas y optimización mensual para que no pierdas tu posición.</p>
        <a href="/contacto" class="text-blue-400 font-black flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">Ver planes de SEO Local <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14m-7-7 7 7-7 7"/></svg></a>
      </div>

      <h3>4. Contenido Geográfico en tu Web</h3>
      <p>Tu sitio web debe hablar de tu ciudad. Menciona barrios cercanos, monumentos o eventos locales. Esto ayuda a Google a confirmar que eres una autoridad relevante en esa área específica.</p>
      
      <p>Aparecer en el Top 3 requiere constancia, pero el retorno de inversión es inigualable. Si necesitas ayuda para auditar tu visibilidad local, estamos aquí para darte una respuesta clara y directa.</p>
    `
  },
  {
    id: 'errores-web-conversion-clientes',
    title: '5 errores en tu web que te están haciendo perder clientes hoy mismo (y cómo arreglarlos)',
    excerpt: '¿Tienes visitas pero el teléfono no suena? Descubre los fallos invisibles que están saboteando tus ventas y cómo convertirlos en oportunidades.',
    category: 'Conversión',
    date: '10 Mar 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    content: `
      <p>Tu página web no debería ser un simple folleto digital; debería ser tu mejor comercial. Muchos negocios locales invierten en diseño pero olvidan la <strong>conversión</strong>. Aquí tienes los errores que más veo y que están matando tu rentabilidad.</p>

      <h3>Error 1: Propuesta de valor confusa</h3>
      <p>Si el usuario entra y en 3 segundos no entiende qué haces, para quién es y qué beneficio obtiene, se irá. Evita frases genéricas como "calidad al mejor precio". Sé específico: "Fisioterapia deportiva en Valencia: Recupera tu movilidad en 3 sesiones".</p>

      <div class="bg-blue-600 text-white p-8 rounded-2xl my-10 not-prose shadow-2xl">
        <h4 class="text-xl font-black mb-2">¿Tu web es un escaparate vacío?</h4>
        <p class="mb-6 opacity-90">Hacemos un test de usuario real a tu web y te enviamos un video explicándote por qué tus visitas no te llaman.</p>
        <a href="/contacto" class="inline-block bg-white text-blue-600 font-black px-8 py-3 rounded-xl hover:bg-blue-50 transition-all">Analizar mi conversión ahora</a>
      </div>

      <h3>Error 2: Botones de contacto invisibles</h3>
      <p>El "Call to Action" (CTA) debe resaltar. No utilices el mismo color de fondo para tus botones de contacto. Deben invitar a la acción y repetirse cada 2 secciones para que el usuario nunca tenga que "buscar" cómo hablar contigo.</p>
      
      <h3>Error 3: Velocidad de carga desastrosa</h3>
      <p>En móvil, si tu web tarda más de 3 segundos en mostrarse, el 50% de las personas pulsará el botón de atrás. Google también te penalizará. Menos animaciones pesadas y más optimización de imágenes es la clave.</p>

      <div class="bg-slate-900 text-white p-8 rounded-2xl my-10 not-prose">
        <h4 class="text-xl font-bold mb-2">Convertimos visitas en ingresos</h4>
        <p class="mb-6 text-slate-400">Nuestras webs están optimizadas para móviles y cargan en menos de 1 segundo. Diseño pensado para vender.</p>
        <a href="/contacto" class="text-blue-400 font-black flex items-center gap-2 hover:gap-4 transition-all">Pedir presupuesto de rediseño <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14m-7-7 7 7-7 7"/></svg></a>
      </div>

      <h3>Error 4: Falta de prueba social</h3>
      <p>Sin confianza no hay venta. Si no muestras reseñas reales de Google, logotipos de clientes o fotos de tu local y equipo, el usuario sentirá que eres una empresa "fantasma". La cara humana de tu negocio vende más que cualquier stock de fotos genérico.</p>
      
      <h3>Error 5: Formularios interminables</h3>
      <p>Pedir el DNI, la dirección y el código postal en un primer contacto es un error. Pide lo mínimo: nombre, teléfono y motivo de consulta. Cuantos menos campos, más leads recibirás.</p>
      
      <p>Una web eficaz no tiene por qué ser compleja. Solo tiene que estar centrada en las necesidades de tu cliente y en facilitarle el camino hacia el presupuesto.</p>
    `
  },
  {
    id: 'whatsapp-business-ventas-pymes-2026',
    title: 'WhatsApp Business: cómo usarlo para vender más (sin estar pegado al móvil)',
    excerpt: 'WhatsApp es el canal de venta preferido en España. Aprende a automatizar tus respuestas y gestionar leads de forma profesional.',
    category: 'Ventas',
    date: '05 Mar 2024',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&q=80&w=800',
    content: `
      <p>WhatsApp Business se ha convertido en la herramienta de cierre de ventas número uno para pymes. El problema es que muchos dueños de negocio lo usan como un chat personal, perdiendo horas en tareas repetitivas. Aquí te enseño a profesionalizar tu canal de ventas directo.</p>

      <h3>1. Configura el Perfil de Empresa Pro</h3>
      <p>No uses WhatsApp Business solo por el nombre. Rellena el catálogo de servicios con precios claros, añade tu ubicación de Google Maps y tus horarios. Esto filtra a los clientes antes de que te escriban.</p>

      <div class="bg-blue-600 text-white p-8 rounded-2xl my-10 not-prose shadow-xl border-4 border-white/10">
        <h4 class="text-xl font-black mb-2">¿Pierdes clientes por no contestar a tiempo?</h4>
        <p class="mb-6 opacity-90">Configuramos tu canal de WhatsApp con mensajes automáticos de bienvenida y fuera de horario para que nunca pierdas un lead.</p>
        <a href="/contacto" class="inline-block bg-white text-blue-600 font-black px-8 py-3 rounded-xl hover:bg-blue-50 transition-all">Integrar WhatsApp en mi Web</a>
      </div>

      <h3>2. Respuestas rápidas: Tu mejor aliado</h3>
      <p>¿Te preguntan siempre lo mismo? Crea atajos. con solo escribir "/precios" o "/cita" puedes enviar textos preparados que ahorran minutos de escritura. La rapidez en la respuesta es el factor que más influye en el cierre de la venta.</p>
      
      <h3>3. Etiquetas: Tu mini-CRM gratuito</h3>
      <p>No dejes que los chats se pierdan en el olvido. Usa las etiquetas para clasificar a los contactos: "Nuevo presupuesto", "Pendiente de pago", "Cliente VIP". Esto te permitirá hacer seguimiento a los que aún no han decidido comprar.</p>

      <div class="bg-slate-900 text-white p-8 rounded-2xl my-10 not-prose border border-slate-700">
        <h4 class="text-xl font-bold mb-2">Automatización de ventas por WhatsApp</h4>
        <p class="mb-6 text-slate-400">Diseñamos el flujo completo: desde que el usuario ve tu web hasta que te escribe un mensaje automático solicitando cita.</p>
        <a href="/contacto" class="text-blue-400 font-black flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-xs">Me interesa este sistema <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M5 12h14m-7-7 7 7-7 7"/></svg></a>
      </div>

      <h3>4. El mensaje de ausencia estratégico</h3>
      <p>Si te escriben a las 11 de la noche, no contestes manualmente. Deja un mensaje de ausencia amable que invite a dejar sus datos o ver el catálogo: "Hola, ahora estamos descansando, pero deja tu duda aquí y te responderemos a primera hora con un descuento especial".</p>
      
      <p>Implementar WhatsApp Business correctamente puede aumentar tu tasa de conversión hasta un 30%. Si quieres que integremos este sistema en tu web para que funcione solo, hablemos hoy mismo.</p>
    `
  }
];

export const TRUST_STATS = [
  { value: '100+', label: 'Negocios impulsados', icon: <Users className="w-5 h-5" /> },
  { value: '24h', label: 'Respuesta máxima', icon: <Zap className="w-5 h-5" /> },
  { value: 'x3', label: 'Media de contactos', icon: <TrendingUp className="w-5 h-5" /> },
  { value: '0€', label: 'Comisiones ocultas', icon: <ShieldCheck className="w-5 h-5" /> },
];