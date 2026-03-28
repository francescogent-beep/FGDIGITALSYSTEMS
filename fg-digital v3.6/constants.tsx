import React from 'react';
import { Layout, Search, MessageSquareMore, Settings, ShieldCheck, Zap, TrendingUp, Users, PhoneCall, Globe, CreditCard, Lock, UserCheck, Clock, CheckCircle2 } from 'lucide-react';
import { PricingPlan, CaseStudyExample, FAQItem, BlogPost } from './types.ts';

export const ROUTES = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios' },
  { name: 'Packs', path: '/tarifas-diseno-web' },
  { name: 'Casos', path: '/casos-exito' },
  { name: 'Blog', path: '/blog' },
  { name: 'FAQ', path: '/preguntas-frecuentes' },
  { name: 'Nosotros', path: '/sobre-nosotros' },
  { name: 'Contacto', path: '/contacto' },
];

export const REVIEWS = [
  {
    name: "Emanuele Caputo",
    role: "Negocio Local",
    text: "Mi sono trovato davvero bene con FG Digital Systems. Avevo un sito lento e poco chiaro e su Google non ero visibile. Francesco mi ha sistemato tutto, ha reso il sito veloce e professionale.",
    stars: 5,
    lang: "it"
  },
  {
    name: "Miki Mesto",
    role: "Profesional Independiente",
    text: "Francesco me ayudó a mejorar mi web y a organizar mejor mi presencia online. Ahora todo se ve más profesional y es más fácil que los clientes me encuentren. Muy recomendable si quieres crecer con Google.",
    stars: 5,
    lang: "es"
  },
  {
    name: "Daniela Carpineti",
    role: "Comercio Local",
    text: "Lavoro ineccepibile... consiglio 🙌🙌",
    stars: 5,
    lang: "it"
  },
  {
    name: "Paolo Amoruso",
    role: "Team Amoruso",
    text: "Top 😍",
    stars: 5,
    lang: "it"
  },
  {
    name: "Vittorio Nappo",
    role: "Empresa de Servicios",
    text: "Servizio eccellente e professionalità garantita. I risultati nel posizionamento locale sono stati evidenti fin da subito.",
    stars: 5,
    lang: "it"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Pack 1 — Empieza Bien',
    tagline: 'Para empezar bien, sin errores',
    price: '',
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
    price: '',
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
    price: '',
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
    price: '',
    duration: '2-4 semanas',
    description: 'Solo para negocios que venden servicios o paquetes online. Automatización total de ventas.',
    features: [
      'Todo {lo del Pack 3 incluido}',
      'Stripe Checkout (1-3 ofertas)',
      'Botones de pago integrados',
      'Automatización (n8n/Make/Zapier)',
      'Lead → CRM / Pago → Onboarding',
      'Reserva → Confirmación y Recordatorios'
    ]
  }
];

export const ADD_ONS = [
  { name: "Página extra (Servicio / Sobre mí)", price: "" },
  { name: "Alta y configuración de Google Business Profile", price: "" },
  { name: "Formulario Tally simple (1 formulario)", price: "" },
  { name: "Botón de reserva (enlace simple)", price: "" },
  { name: "ChatBot inteligente", price: "" }
];

export const RETAINERS = [
  {
    name: "Starter",
    price: "",
    desc: "Mantenimiento y SEO ligero.",
    features: ["1 artículos SEO / mes", "Mantenimiento Google Maps", "Enlazado interno", "Informe mensual claro"]
  },
  {
    name: "Standard",
    price: "",
    desc: "La mejor opción para crecer.",
    recommended: true,
    features: ["4 artículos SEO / mes", "GBP + citas locales", "Optimización on-page (2-5 págs)", "Outreach ligero", "Informe + plan mensual"]
  },
  {
    name: "Authority",
    price: "",
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
  },
  {
    question: '¿Cuánto tiempo se tarda en aparecer en el TOP 3 de Google Maps?',
    answer: 'Depende de la competencia local. En sectores con baja competencia, los cambios se notan en semanas. En sectores saturados, suele requerir entre 3 y 6 meses de optimización constante y generación de autoridad.'
  },
  {
    question: '¿Es obligatorio tener una página web para salir en Maps?',
    answer: 'No es obligatorio, pero es un factor de ranking crítico. Google utiliza la información de tu web para validar la relevancia de tu ficha. Sin una web optimizada, es extremadamente difícil superar a competidores que sí la tienen.'
  },
  {
    question: '¿Es mejor una web de una sola página o con muchas secciones?',
    answer: 'Depende de tu objetivo. Para captación directa y campañas específicas, una \"One Page\" enfocada a la conversión suele funcionar mejor. Para posicionamiento SEO a largo plazo y servicios variados, una estructura de múltiples páginas es indispensable.'
  },
  {
    question: '¿Influye la velocidad de carga en las ventas?',
    answer: 'Totalmente. Un retraso de solo 1 segundo en la carga puede reducir las conversiones hasta un 7%. Los usuarios actuales no esperan; si tu web es lenta, se van a la competencia antes de ver tu oferta.'
  },
  {
    question: '¿Puedo usar el mismo número para mi WhatsApp personal y el de empresa?',
    answer: 'Técnicamente puedes, pero no es recomendable. Mezclar conversaciones personales con clientes genera desorganización y evita que puedas establecer horarios de atención profesional. Lo ideal es usar un número dedicado para WhatsApp Business.'
  },
  {
    question: '¿Me pueden bloquear la cuenta por enviar muchos mensajes?',
    answer: 'Sí, si Google detecta patrones de spam. WhatsApp Business está diseñado para comunicación entrante o respuestas a clientes. Si inicias conversaciones masivas con personas que no te han contactado, corres el riesgo de baneo permanente.'
  },
  {
    question: '¿Es posible conseguir clientes online con una inversión mínima?',
    answer: 'Sí, es posible empezar con una base técnica sólida y crecer conforme se generan ingresos. Lo importante no es la cantidad de la inversión, sino que cada euro esté destinado a una pieza de un sistema conectado.'
  },
  {
    question: '¿Cómo puedo medir si mi inversión en marketing está siendo rentable?',
    answer: 'La métrica principal es el Coste de Adquisición de Cliente (CAC). Si el beneficio que te deja un cliente es mayor de lo que te ha costado atraerlo mediante tu web y SEO, tu sistema es rentable.'
  }
];

export const CASE_STUDIES: CaseStudyExample[] = [
  {
    category: 'Marca Personal / Educación',
    title: 'Myriam (Pedagogista)',
    outcome: 'Posicionamiento orgánico en top 2 en tiempo récord.',
    metrics: ['2ª posición en región Marche', '2ª posición en Civitanova Marche', 'Resultados visibles en 10 días'],
    description: 'Transformamos una marca personal sin visibilidad en un referente local mediante una arquitectura de información limpia y una base SEO técnica sólida.'
  },
  {
    category: 'Terapia Relacional / Marca Personal',
    title: 'Almudena',
    outcome: 'Sistema Web + SEO Profesional Estratégico.',
    metrics: ['Base digital sólida lista para escalar', 'Web optimizada para indexación', 'Sistema de captación funcional'],
    description: 'Transformamos una propuesta humana en un sistema digital optimizado para visibilidad orgánica y captación constante, eliminando la dependencia exclusiva del boca a boca.'
  },
  {
    category: 'Fitness / Negocios Online',
    title: 'Team Amoruso (Paolo)',
    outcome: 'Sistema de ventas automatizado y facturación recurrente.',
    metrics: ['Captación de leads automatizada', 'Venta de productos digitales', 'Generación de ingresos continuos'],
    description: 'Rediseñamos el ecosistema digital de un atleta IFBB Pro para eliminar la gestión manual, integrando un sistema de ventas escalable y automatizado.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'google-maps-top-3-guia-2026',
    title: 'Cómo aparecer en el TOP 3 de Google Maps en tu ciudad',
    excerpt: 'Si tienes un negocio local y no apareces en los primeros resultados de Google Maps, estás perdiendo clientes cada día.',
    category: 'SEO Local',
    date: '20 Mar 2024',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?fm=webp&fit=crop&q=80&w=800',
    content: `
      <h2>El Dominio del Territorio Digital Local</h2>
      <p>La visibilidad en Google Maps ha dejado de ser un complemento.</p>
      <p><strong>Se ha convertido en el pilar central de la facturación de las Pymes modernas.</strong></p>
      <p>En 2026, el "Local Pack" es responsable de más del 60% de los clics transaccionales.</p>
      <p>Si no estás en esos tres puestos, regalas tu cuota de mercado a la competencia.</p>
      
      <blockquote>
        PRO TIP: La geolocalización es hoy el factor de conversión más potente. Un usuario a 2km de tu local es 10 veces más propenso a comprar que uno a 20km.
      </blockquote>

      <hr />

      <h3>1. La Ficha de Negocio como Centro de Mando</h3>
      <p>Tu perfil de Google Business Profile es tu escaparate digital prioritario.</p>
      <p><strong>Estar "creado" no significa estar "optimizado" para el algoritmo actual.</strong></p>
      <p>Google analiza cada rincón: categorías principales y servicios secundarios.</p>
      <p>El error más común es elegir una categoría excesivamente genérica.</p>
      <p><strong>Si eres un "Restaurante Italiano", no pongas solo "Restaurante".</strong> Ataca el nicho exacto.</p>

      <h3>2. NAP Consistency: La Regla de Oro Innegociable</h3>
      <p>NAP significa Name (Nombre), Address (Dirección) y Phone (Teléfono).</p>
      <p><strong>Para Google, la coherencia absoluta es sinónimo de confianza técnica.</strong></p>
      <p>Si en tu web pones "Calle Mayor 5" y en Facebook pones "C/ Mayor Nº5", el sistema penaliza.</p>
      <p>Asegúrate de que tus datos sean un calco exacto en cada rincón de internet.</p>

      <h3>3. La Velocidad de las Reseñas (Review Velocity)</h3>
      <p>Muchos creen que tener un 5.0 es suficiente. Se equivocan de estrategia.</p>
      <p><strong>Google valora la frescura y la frecuencia constante de las reseñas.</strong></p>
      <p>Es mejor recibir 2 reseñas semanales que 50 en un día y luego el silencio total.</p>
      <p>Las palabras clave dentro de las reseñas validan tu relevancia para el buscador.</p>

      <blockquote>
        INSIGHT: Un comentario que diga "El mejor fontanero de Murcia" vale 10 veces más que un "Buen servicio".
      </blockquote>

      <h3>4. El Ecosistema Web como Validador de Autoridad</h3>
      <p>Tu página web no es una isla independiente de tu ficha de Maps.</p>
      <p><strong>Google rastrea tu web para confirmar que eres quien dices ser profesionalmente.</strong></p>
      <p>Si tu web carga lento o no tiene SSL, tu ficha en Maps nunca llegará al podio.</p>
      <p>La autoridad de tu dominio es el combustible que hace que tu posición despegue.</p>

      <h3>Conclusión: El Sistema es el Éxito</h3>
      <p>Entrar en el Top 3 no es magia, es una coreografía técnica precisa.</p>
      <p><strong>Auditamos más de 20 factores críticos para que pases a ser el líder de tu barrio.</strong></p>
    `
  },
  {
    id: 'errores-web-conversion-clientes',
    title: '5 errores en tu web que te están haciendo perder clientes hoy mismo',
    excerpt: 'Una web puede verse bien y no funcionar. Este es uno de los mayores malentendidos en internet.',
    category: 'Conversión',
    date: '18 Mar 2024',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fm=webp&fit=crop&q=80&w=800',
    content: `
      <h2>Diseño vs. Funcionalidad: La Batalla de la Rentabilidad</h2>
      <p>Tener una web "bonita" es un deseo; tener una web que "venda" es una obligación.</p>
      <p><strong>La mayoría de los diseñadores olvidan la psicología del consumidor moderno.</strong></p>
      <p>Analizamos los 5 agujeros negros por donde se escapa tu presupuesto de marketing.</p>

      <blockquote>
        MANTRA: La estética sin estrategia es solo un gasto. La estrategia con diseño es una inversión.
      </blockquote>

      <hr />

      <h3>1. El Síndrome del "Acertijo de los 3 Segundos"</h3>
      <p>El tiempo de atención del usuario actual es menor que el de un pez.</p>
      <p><strong>Si en 3 segundos no saben qué vendes y cómo ayudas, cerrarán la pestaña.</strong></p>
      <p>Evita titulares vagos. Sé directo y brutalmente honesto con tu propuesta.</p>

      <h3>2. El Error del Egocentrismo Corporativo</h3>
      <p>A tu cliente no le interesa tu historia personal... todavía.</p>
      <p><strong>Muchas webs gastan el "above the fold" hablando de "quiénes somos".</strong></p>
      <p>Cambia el enfoque: el héroe de la historia es tu cliente, tú eres el guía experto.</p>

      <h3>3. La Parálisis por Análisis (Exceso de Opciones)</h3>
      <p>¿Menú con 12 páginas? ¿5 botones de colores diferentes en la home?</p>
      <p><strong>Un usuario confundido siempre elige la opción de "salir" de la web.</strong></p>
      <p>Cada página debe tener UN objetivo claro y una sola Llamada a la Acción principal.</p>

      <blockquote>
        PRO TIP: Elimina todo lo que no ayude al usuario a tomar la decisión de contactarte ahora.
      </blockquote>

      <h3>4. Fricción en el Proceso de Contacto</h3>
      <p>Pedir el DNI en un formulario de contacto inicial es la muerte de la conversión.</p>
      <p><strong>Cada campo extra en un formulario reduce la conversión un 11% de media.</strong></p>
      <p>Pide solo lo esencial. Usa WhatsApp para la inmediatez que el cliente demanda.</p>

      <h3>5. Inexistencia de "Señales de Confianza" (Social Proof)</h3>
      <p>En internet, nadie se fía de nadie por defecto.</p>
      <p><strong>Sin testimonios reales o certificaciones, eres un desconocido pidiendo dinero.</strong></p>
      <p>Los seres humanos seguimos a la manada; muestra que otros ya confían en ti.</p>

      <h3>La Optimización Continua</h3>
      <p>Una web no es algo que se termina y se olvida. Es un ente vivo y dinámico.</p>
      <p><strong>Pequeños cambios en el copywriting pueden duplicar tus ingresos mensuales.</strong></p>
    `
  },
  {
    id: 'whatsapp-business-estrategia-pymes',
    title: 'WhatsApp Business: El canal de cierre definitivo para negocios locales',
    excerpt: 'WhatsApp ya no es solo para responder dudas. Es la herramienta de ventas con mayor retorno.',
    category: 'Ventas',
    date: '15 Mar 2024',
    readTime: '13 min',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?fm=webp&fit=crop&q=80&w=800',
    content: `
      <h2>La Era de la Venta Conversacional Directa</h2>
      <p>El correo electrónico ha muerto como canal de venta directa para locales.</p>
      <p><strong>WhatsApp Business no es una "app", es el CRM más potente en tu bolsillo.</strong></p>
      <p>La distancia entre el interés y la venta se mide en la velocidad de respuesta.</p>

      <blockquote>
        DATO CLAVE: El 90% de los usuarios prefiere chatear con una empresa que llamar por teléfono.
      </blockquote>

      <hr />

      <h3>1. WhatsApp Business vs Personal: Diferencias Críticas</h3>
      <p>Usar tu cuenta personal para el negocio es una receta para el caos operativo.</p>
      <p><strong>La versión Business permite proyectar una imagen de empresa profesional.</strong></p>
      <p>Separa tu vida privada de la profesional para mantener tu salud mental.</p>

      <h3>2. El Poder de las Etiquetas (Segmentación)</h3>
      <p>La herramienta de etiquetas es el secreto mejor guardado de la plataforma.</p>
      <p><strong>Clasifica a tus clientes: "Presupuesto enviado", "Pago pendiente" o "VIP".</strong></p>
      <p>Esto te permite hacer seguimientos estratégicos en segundos, no en horas.</p>

      <h3>3. Respuestas Rápidas: Ahorra Horas de Tecleo</h3>
      <p>Si te pasas el día respondiendo lo mismo, estás perdiendo dinero real.</p>
      <p><strong>Configura atajos como "/precio" para enviar bloques de texto profesionales.</strong></p>
      <p>La eficiencia evita que el cliente siga buscando a tu competencia mientras escribes.</p>

      <blockquote>
        INSIGHT: La primera empresa que responde con claridad se lleva el 70% de los contratos.
      </blockquote>

      <h3>4. El Catálogo Integrado: Tu Tienda en el Chat</h3>
      <p>No envíes PDFs pesados que el cliente tiene que descargar y abrir fuera.</p>
      <p><strong>Usa el catálogo: fotos, descripciones y precios sin salir de la conversación.</strong></p>
      <p>Fricción cero: el cliente puede añadir al carrito y pedirte presupuesto directo.</p>

      <h3>Estrategia Pro: WhatsApp desde tu Web</h3>
      <p>No pongas solo un botón genérico. Usa mensajes personalizados por servicio.</p>
      <p><strong>"Hola, quiero información sobre el Pack 2" facilita el primer paso del cliente.</strong></p>
      <p>Elimina el miedo a la página en blanco e inicia la conversación de venta.</p>
    `
  },
  {
    id: 'cuanto-cuesta-conseguir-clientes-online',
    title: 'Cuánto cuesta realmente conseguir clientes online (y por qué lo barato sale caro)',
    excerpt: 'La mayoría de negocios comparan precios de webs aisladas, cuando el coste está en el sistema.',
    category: 'Estrategia',
    date: '10 Mar 2024',
    readTime: '14 min',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?fm=webp&fit=crop&q=80&w=800',
    content: `
      <h2>La Trampa de la Inversión "Low Cost"</h2>
      <p>En el sector digital, lo barato no solo sale caro, suele salir fatal para el negocio.</p>
      <p><strong>Muchos ven la web como un "gasto a minimizar" en lugar de un "comercial a optimizar".</strong></p>
      <p>Comprar una web barata es como comprar un motor roto: no te llevará a la meta.</p>

      <blockquote>
        PRO TIP: La rentabilidad no se mide en el ahorro de la factura, sino en el ROI real generado.
      </blockquote>

      <hr />

      <h3>1. Entendiendo el CAC (Coste de Adquisición)</h3>
      <p>¿Sabes cuánto te cuesta captar a un cliente nuevo exactamente?</p>
      <p><strong>Si la respuesta es no, no tienes un negocio, tienes un hobby costoso.</strong></p>
      <p>CAC = (Inversión en Marketing + Ventas) / Número de Clientes conseguidos.</p>

      <h3>2. LTV: El Valor de Vida del Cliente</h3>
      <p>No todos los clientes valen lo mismo para tu cuenta de resultados.</p>
      <p><strong>El Lifetime Value mide cuánto dinero te deja un cliente a largo plazo.</strong></p>
      <p>Esto permite decidir cuánto puedes gastar hoy para ganar mucho más mañana.</p>

      <h3>3. El Coste Invisible de la Lentitud Web</h3>
      <p>Una web barata suele estar en un servidor compartido saturado de basura.</p>
      <p><strong>Cada segundo de retraso en la carga reduce las conversiones un 7% drásticamente.</strong></p>
      <p>Ese es el verdadero coste de lo barato: clientes que nunca llegan a ver tu oferta.</p>

      <blockquote>
        INSIGHT: Estás perdiendo el 28% de tus ventas si tu web tarda 4 segundos en cargar.
      </blockquote>

      <h3>4. SEO: Gasto vs Inversión en Activos Propios</h3>
      <p>La publicidad (Ads) es un alquiler de tráfico constante y caro.</p>
      <p><strong>El SEO es la construcción de un activo sólido que es tuyo para siempre.</strong></p>
      <p>Invertir en posicionamiento parece caro hoy, pero es casi gratuito a los 12 meses.</p>

      <h3>5. El Peligro del Diseño sin Copywriting</h3>
      <p>Una web sin textos de venta profesionales es solo una colección de fotos.</p>
      <p><strong>El diseño atrae la mirada, pero las palabras profesionales cierran la venta.</strong></p>
      <p>Pagar por diseño pero ahorrar en textos es como un Ferrari sin gasolina.</p>
    `
  },
  {
    id: 'google-business-profile-guia-pro-2026',
    title: 'Guía Avanzada: Cómo exprimir Google Business Profile en 2026',
    excerpt: 'Tener la ficha creada no es suficiente. Te enseñamos a usar los atributos ocultos.',
    category: 'SEO Local',
    date: '25 Mar 2024',
    readTime: '16 min',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?fm=webp&fit=crop&q=80&w=800',
    content: `
      <h2>El Renacimiento del Perfil de Empresa Local</h2>
      <p>Google Business Profile ha evolucionado radicalmente en los últimos meses.</p>
      <p><strong>Ya no es un mapa estático; es una mini-web transaccional con IA integrada.</strong></p>
      <p>Google analiza tus fotos y respuestas para decidir si eres el mejor de la ciudad.</p>

      <blockquote>
        CLAVE: Google Maps es hoy el motor de búsqueda más utilizado para compras inmediatas.
      </blockquote>

      <hr />

      <h3>1. Atributos: El Filtro Invisible del Buscador</h3>
      <p>Marca atributos: "Accesible", "Propiedad de mujeres" o "Presupuesto online".</p>
      <p><strong>No son informativos; son filtros de búsqueda críticos para el usuario.</strong></p>
      <p>Si el usuario filtra por "Aceptan reservas" y no lo tienes, simplemente desapareces.</p>

      <h3>2. La IA y tus Fotografías de Negocio</h3>
      <p>Google usa reconocimiento de imágenes para entender qué tipo de negocio eres.</p>
      <p><strong>Subir fotos de alta resolución de tus herramientas valida tu relevancia.</strong></p>
      <p>Geolocaliza las fotos (datos EXIF) para confirmar tu ubicación física real.</p>

      <h3>3. Gestión de la Sección Q&A (Preguntas)</h3>
      <p>Cualquier usuario puede preguntar... y cualquiera puede responder. Es un riesgo.</p>
      <p><strong>Toma el control: publica tú mismo las preguntas frecuentes y respóndelas.</strong></p>
      <p>Usa palabras clave estratégicas en estas respuestas oficiales de la empresa.</p>

      <blockquote>
        INSIGHT: "Sí, somos el mejor dentista en Murcia para implantes" es SEO puro en Maps.
      </blockquote>

      <h3>4. Google Posts: Tu Noticiario Semanal</h3>
      <p>Usa la sección de novedades como si fuera una red social corporativa.</p>
      <p><strong>Publicar trabajos terminados envía señales de actividad constante al sistema.</strong></p>
      <p>Google premia con visibilidad a los negocios que demuestran estar operativos.</p>

      <h3>5. El Impacto del CTR en el Mapa</h3>
      <p>Google mide cuánta gente pulsa en "Cómo llegar" o en tu botón de llamada.</p>
      <p><strong>Si mucha gente te ignora, tu posición bajará irremediablemente.</strong></p>
      <p>Tener una foto de portada impactante es vital para invitar al clic inicial.</p>
    `
  },
  {
    id: 'velocidad-web-factor-ranking-pymes',
    title: 'Velocidad Web: Por qué 1 segundo de retraso te está costando dinero',
    excerpt: 'El 40% de los usuarios abandona una web si tarda más de 3 segundos en cargar.',
    category: 'Diseño Web',
    date: '28 Mar 2024',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?fm=webp&fit=crop&q=80&w=800',
    content: `
      <h2>La Guerra por el Tiempo de Atención del Usuario</h2>
      <p>En internet, el tiempo no es solo oro, es pura supervivencia competitiva.</p>
      <p><strong>Google ha convertido la velocidad en un factor de ranking oficial (Core Web Vitals).</strong></p>
      <p>Si tu web es lenta, Google te castiga enviándote al olvido de la página 2.</p>

      <blockquote>
        DATO: Un aumento de solo 100ms en la carga cuesta un 1% de ventas anuales a gigantes como Amazon.
      </blockquote>

      <hr />

      <h3>1. Core Web Vitals: El Examen de Google</h3>
      <p>Google mide tres métricas principales de experiencia de usuario técnica.</p>
      <p><strong>LCP (Carga):</strong> ¿Cuánto tarda en verse lo más importante de tu web?</p>
      <p><strong>FID (Interactividad):</strong> ¿Cuánto tarda la web en responder al primer clic?</p>
      <p><strong>CLS (Estabilidad):</strong> ¿Se mueven los elementos mientras la página carga?</p>

      <h3>2. El Peso de las Imágenes: El Gran Culpable</h3>
      <p>Subir fotos directamente desde el móvil a la web es el mayor error de velocidad.</p>
      <p><strong>Formatos como WebP o AVIF reducen el peso un 80% sin pérdida visual.</strong></p>
      <p>Una web rápida empieza por una gestión de medios inteligente y profesional.</p>

      <h3>3. Servidores y Distancia Geográfica (TTFB)</h3>
      <p>El Time To First Byte mide cuánto tarda el servidor en empezar a enviar datos.</p>
      <p><strong>Si tu negocio está en España pero el servidor en USA, pierdes milisegundos vitales.</strong></p>
      <p>Usamos infraestructuras locales para que tu web vuele para tus clientes cercanos.</p>

      <blockquote>
        PRO TIP: El alojamiento barato es la forma más rápida de destruir tu SEO local.
      </blockquote>

      <h3>4. Scripts y Basura Técnica Acumulada</h3>
      <p>Las plantillas de WordPress genéricas vienen cargadas de código inútil.</p>
      <p><strong>Es como intentar correr un maratón con una mochila llena de piedras.</strong></p>
      <p>Construimos con código limpio, cargando solo lo estrictamente necesario.</p>

      <h3>5. El Impacto en tu Presupuesto de Publicidad</h3>
      <p>Si pagas anuncios, la velocidad web afecta directamente a tu "Quality Score".</p>
      <p><strong>Una web rápida hace que tus anuncios de Google sean mucho más baratos.</strong></p>
      <p>Optimizar la velocidad es ahorrar dinero directamente en marketing cada mes.</p>
    `
  },
  {
    id: 'marketing-digital-bajo-presupuesto-local',
    title: 'Marketing Digital con bajo presupuesto: Estrategias para Pymes',
    excerpt: 'No hace falta invertir miles al mes para ver resultados reales.',
    category: 'Estrategia',
    date: '02 Apr 2024',
    readTime: '14 min',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?fm=webp&fit=crop&q=80&w=800',
    content: `
      <h2>Ganar en Grande con un Presupuesto Quirúrgico</h2>
      <p>El marketing no es una guerra de carteras, sino una guerra de ingenio local.</p>
      <p><strong>Para una Pyme, competir con presupuestos nacionales es un error estratégico.</strong></p>
      <p>Debes enfocarte en ser el rey absoluto de tu código postal específico.</p>

      <blockquote>
        FILOSOFÍA: No intentes ganar en todo Google. Intenta ganar en tu calle y barrio.
      </blockquote>

      <hr />

      <h3>1. SEO Local: El Recurso Gratuito de Alto Impacto</h3>
      <p>Optimizar tu ficha de Maps requiere tiempo y estrategia, no grandes inversiones.</p>
      <p><strong>Las reseñas de calidad semanales son más potentes que los anuncios genéricos.</strong></p>
      <p>Domina tu zona antes de intentar expandirte a toda la provincia.</p>

      <h3>2. Marketing de Guerrilla Digital Local</h3>
      <p>Usa los grupos locales de Facebook y comunidades con cabeza y valor.</p>
      <p><strong>No hagas spam comercial. Aporta valor real como experto del sector.</strong></p>
      <p>La gente confía en los expertos que ayudan, no en los comerciales pesados.</p>

      <h3>3. El Poder del Email y WhatsApp Marketing</h3>
      <p>Es 7 veces más caro captar a un cliente nuevo que vender a uno actual.</p>
      <p><strong>Si tienes una lista de 100 clientes, tienes una mina de oro sin explotar.</strong></p>
      <p>Envía una oferta exclusiva mensual. El coste es cero y el retorno es altísimo.</p>

      <blockquote>
        INSIGHT: Un cliente recurrente es el motor de estabilidad de cualquier negocio local.
      </blockquote>

      <h3>4. Contenido de Video Low-Cost y Auténtico</h3>
      <p>No necesitas una productora de cine para conectar con tu audiencia.</p>
      <p><strong>Muestra el "detrás de las cámaras" de tus trabajos reales con tu móvil.</strong></p>
      <p>La autenticidad genera una confianza que el diseño corporativo no puede igualar.</p>

      <h3>5. Alianzas Estratégicas de Barrio</h3>
      <p>Busca negocios complementarios en tu zona y colabora con ellos.</p>
      <p><strong>Intercambiar recomendaciones en vuestras webs es SEO gratuito y de calidad.</strong></p>
      <p>El marketing local es, ante todo, un juego de relaciones humanas y confianza.</p>
    `
  },
  {
    id: 'automatizacion-leads-pymes-guia',
    title: 'Cómo automatizar tus leads y dejar de perder tiempo en el email',
    excerpt: 'Si respondes a tus clientes a las 5 horas, ya es tarde para la venta.',
    category: 'Ventas',
    date: '05 Apr 2024',
    readTime: '13 min',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?fm=webp&fit=crop&q=80&w=800',
    content: `
      <h2>El Fin de la Gestión Manual y Caótica de Clientes</h2>
      <p>El mayor enemigo del crecimiento es el tiempo administrativo perdido.</p>
      <p><strong>Perder 3 horas al día respondiendo correos es perder dinero de facturación.</strong></p>
      <p>La automatización libera a los humanos para que den un servicio de excelencia.</p>

      <blockquote>
        PRO TIP: Un lead se "enfría" tras 30 minutos sin respuesta. La automatización es tu seguro.
      </blockquote>

      <hr />

      <h3>1. Formularios Inteligentes con Lógica de Negocio</h3>
      <p>Deja de usar formularios de contacto básicos que solo envían un mail.</p>
      <p><strong>Usa sistemas que califiquen al cliente antes de que te llegue la notificación.</strong></p>
      <p>Filtra a los curiosos y prioriza a los clientes con presupuestos interesantes.</p>

      <h3>2. Agendamiento Automático de Citas Sin Fricción</h3>
      <p>¿Sigues enviando mensajes para ver cuándo podéis quedar? Es ineficiente.</p>
      <p><strong>Integra calendarios como Calendly o TidyCal directamente en tu web.</strong></p>
      <p>El cliente elige su hueco, recibe la confirmación y tú solo te presentas.</p>

      <h3>3. Respuestas Automáticas con Valor Real</h3>
      <p>No respondas con un aburrido "Gracias". Responde con autoridad inmediata.</p>
      <p><strong>Envía automáticamente un caso de éxito similar al problema del cliente.</strong></p>
      <p>Esto eleva tu estatus profesional instantáneamente antes de la primera llamada.</p>

      <blockquote>
        INSIGHT: La automatización bien hecha se siente como un servicio VIP para el cliente.
      </blockquote>

      <h3>4. Sincronización Total con tu CRM o Base de Datos</h3>
      <p>No copies y pegues datos del email a un Excel manualmente nunca más.</p>
      <p><strong>Conectamos tu web para que cada contacto se guarde de forma automática.</strong></p>
      <p>Esto permite campañas de re-impacto futuro con un solo clic de ratón.</p>

      <h3>5. Notificaciones de Venta al Instante</h3>
      <p>Cada solicitud web debe llegarte como un mensaje directo a tu móvil personal.</p>
      <p><strong>La inmediatez en el seguimiento duplica tus posibilidades reales de cierre.</strong></p>
      <p>Si llamas a los 5 minutos de su visita, la impresión de profesionalidad es imbatible.</p>
    `
  },
  {
    id: 'importancia-reseñas-seo-local',
    title: 'El poder de las reseñas: Cómo influyen en tu ranking y cómo conseguirlas',
    excerpt: 'Las reseñas son el "boca a boca" digital prioritario actualmente.',
    category: 'SEO Local',
    date: '10 Apr 2024',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?fm=webp&fit=crop&q=80&w=800',
    content: `
      <h2>La Moneda de la Confianza en la Era de Internet</h2>
      <p>Antes pedíamos consejo al vecino. Ahora se lo pedimos a extraños online.</p>
      <p><strong>Las reseñas de Google son el factor de decisión número 1 para el 88% de usuarios.</strong></p>
      <p>Además de convencer a personas, convencen al algoritmo de que mereces el Top 1.</p>

      <blockquote>
        CLAVE: Google no solo mira las estrellas, mira el sentimiento y las palabras clave del texto.
      </blockquote>

      <hr />

      <h3>1. El Factor "Recency" (Frescura de Opinión)</h3>
      <p>Tener 100 reseñas de hace 3 años es sospechoso y aburrido para Google.</p>
      <p><strong>El algoritmo premia la entrada constante y fluida de nuevas opiniones.</strong></p>
      <p>Un negocio con 20 reseñas recientes superará a uno con 100 reseñas antiguas.</p>

      <h3>2. Cómo Pedir Reseñas Sin Resultar Molesto</h3>
      <p>El error fatal es pedir la reseña días después. Hay que pedirla en el éxito.</p>
      <p><strong>Usa códigos QR físicos o enlaces de WhatsApp tras finalizar el servicio.</strong></p>
      <p>Cuanto más fácil se lo pongas al cliente, más probable es que te deje las 5 estrellas.</p>

      <h3>3. Responder es Obligatorio (Especialmente las Malas)</h3>
      <p>No responder a las reseñas envía un mensaje de desidia empresarial.</p>
      <p><strong>Responder a las negativas con elegancia demuestra que te importa tu negocio.</strong></p>
      <p>Los clientes inteligentes leen las malas respuestas para ver cómo gestionas crisis.</p>

      <blockquote>
        PRO TIP: Un error bien gestionado atrae más clientes que una perfección sospechosa.
      </blockquote>

      <h3>4. Palabras Clave Estratégicas en los Testimonios</h3>
      <p>Cuando un cliente escribe tu servicio y ciudad, está haciendo SEO gratis para ti.</p>
      <p><strong>Anima sutilmente a mencionar qué servicio usaron y por qué les gustó.</strong></p>
      <p>Esto ayuda a Google a categorizar tu negocio para búsquedas muy específicas.</p>

      <h3>5. Fotos en las Reseñas: El Santo Grial del Local SEO</h3>
      <p>Una reseña con foto vale por diez comentarios de solo texto.</p>
      <p><strong>Las imágenes detienen el scroll y validan visualmente tu trabajo real.</strong></p>
      <p>Google adora el contenido generado por el usuario porque es imposible de falsificar.</p>
    `
  },
  {
    id: 'copywriting-webs-servicios-guia',
    title: 'Copywriting para Pymes: Escribir para que el cliente te llame',
    excerpt: 'Tu web no es un libro, es una conversación de ventas estratégica.',
    category: 'Conversión',
    date: '15 Apr 2024',
    readTime: '14 min',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?fm=webp&fit=crop&q=80&w=800',
    content: `
      <h2>Escribir para Convencer de Acción, no para Rellenar Espacio</h2>
      <p>La mayoría de las webs parecen enciclopedias: aburridas y densas.</p>
      <p><strong>El Copywriting es el arte de guiar al usuario hacia una acción específica.</strong></p>
      <p>Si tu web no convierte, el problema no es el diseño, son tus textos muertos.</p>

      <blockquote>
        PRINCIPIO: La gente no compra "qué haces", compra "cómo le haces sentir".
      </blockquote>

      <hr />

      <h3>1. El Titular: Tu Única Oportunidad Real</h3>
      <p>El 80% de los lectores solo se queda con el titular principal de la home.</p>
      <p><strong>Si tu titular es "Bienvenidos a mi web", has fracasado comercialmente.</strong></p>
      <p>Usa la fórmula: Beneficio + Tiempo + Objeción para captar la atención.</p>

      <h3>2. Beneficios Reales vs Características Técnicas</h3>
      <p>Una característica es técnica: "Cámara de 48 megapíxeles". Es aburrido.</p>
      <p>Un beneficio es emocional: "Saca fotos increíbles de tus hijos de noche".</p>
      <p><strong>Deja de hablar de tus herramientas y empieza a hablar de su paz mental.</strong></p>

      <h3>3. La Fórmula P.A.S. (Problema, Agitación, Solución)</h3>
      <p>Es la estructura de ventas más potente y contrastada del mundo.</p>
      <p><strong>Identifica el dolor:</strong> "¿Tu web no te trae clientes hoy?".</p>
      <p><strong>Haz que escueza:</strong> "Estás pagando hosting para nada mientras otros te adelantan".</p>
      <p><strong>Presenta la cura:</strong> "Nuestro sistema activa tus ventas en semanas".</p>

      <blockquote>
        INSIGHT: El miedo a perder es más potente que el deseo de ganar en el cerebro humano.
      </blockquote>

      <h3>4. Llamadas a la Acción (CTA) que Funcionen de Verdad</h3>
      <p>Deja de usar botones que digan "Enviar". Son genéricos y no motivan.</p>
      <p><strong>Usa CTAs orientados al beneficio:</strong> "Quiero mi auditoría gratis ahora".</p>
      <p>El botón debe completar la frase "Yo quiero..." en la cabeza del usuario.</p>

      <h3>5. Claridad Extrema sobre Inteligencia Artificial</h3>
      <p>No intentes sonar inteligente usando palabras complejas o tecnicismos vacíos.</p>
      <p><strong>Escribe como si le hablaras a un amigo en una cafetería ruidosa.</strong></p>
      <p>La claridad genera confianza inmediata; la confusión genera salidas de la web.</p>
    `
  }
];
