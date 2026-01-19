
import React from 'react';
import { Layout, Search, MessageSquareMore, Settings, ShieldCheck, Zap, TrendingUp, Users, PhoneCall, Globe, CreditCard, Lock, UserCheck, Clock, CheckCircle2 } from 'lucide-react';
import { PricingPlan, CaseStudyExample, FAQItem, BlogPost } from './types.ts';

export const ROUTES = [
  { name: 'Inicio', path: '/' },
  { name: 'Servicios', path: '/servicios-diseno-web-seo' },
  { name: 'Precios', path: '/tarifas-diseno-web' },
  { name: 'Casos', path: '/casos-exito' },
  { name: 'Blog', path: '/blog-marketing-digital' },
  { name: 'FAQ', path: '/preguntas-frecuentes' },
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
    text: "Buscaba algo rápido y que no me diera problemas. En 10 días tenía la web funcionando y ya he cerrado dos presupuestos gracias a ella. Claridad total en el precio.",
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
  { name: "Página extra (Servicio / Sobre mí)", price: "80€" },
  { name: "Alta y configuración de Google Business Profile", price: "180€" },
  { name: "Formulario Tally simple (1 formulario)", price: "120€" },
  { name: "Botón de reserva (enlace simple)", price: "70€" },
  { name: "ChatBot inteligente", price: "250€" }
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
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>El Dominio del Territorio Digital Local</h2>
      <p>La visibilidad en Google Maps ha dejado de ser un complemento para convertirse en el pilar central de la facturación de las Pymes.</p>
      <p><strong>En 2026, el "Local Pack" de Google (el mapa que aparece arriba) es responsable de más del 60% de los clics con intención de compra inmediata.</strong></p>
      <p>Si tu negocio no aparece en esos tres codiciados puestos, simplemente estás regalando tu cuota de mercado a la competencia.</p>
      
      <blockquote>
        Pro Tip: La geolocalización es hoy el factor de conversión más potente. Un usuario a 2km de tu local es 10 veces más propenso a comprar que uno a 20km.
      </blockquote>

      <h3>1. La Ficha de Negocio como Centro de Mando</h3>
      <p>Tu perfil de Google Business Profile (antes Google My Business) es tu escaparate digital. Pero estar "creado" no es estar "optimizado".</p>
      <p>Google analiza cada rincón de tu ficha: desde las categorías principales hasta los servicios secundarios.</p>
      <p><strong>El error más común es elegir una categoría genérica.</strong> Si eres un "Restaurante Italiano", no pongas solo "Restaurante". Sé específico para atacar el nicho exacto.</p>

      <h3>2. NAP Consistency: La Regla de Oro</h3>
      <p>NAP significa Name (Nombre), Address (Dirección) y Phone (Teléfono).</p>
      <p><strong>Para Google, la coherencia es sinónimo de confianza.</strong></p>
      <p>Si en tu web pones "Calle Mayor 5" y en Facebook pones "C/ Mayor Nº5", el algoritmo detecta una discrepancia y te penaliza.</p>
      <p>Asegúrate de que tus datos sean un calco exacto en cada rincón de internet.</p>

      <h3>3. La Velocidad de las Reseñas (Review Velocity)</h3>
      <p>Muchos creen que tener 5 estrellas es suficiente. Se equivocan.</p>
      <p><strong>Google valora la frescura y la frecuencia de las reseñas.</strong></p>
      <p>Es mejor recibir 2 reseñas a la semana de forma constante que recibir 50 en un día y luego nada durante tres meses.</p>
      <p>Además, las palabras clave dentro de las reseñas (ej. "El mejor fontanero de Murcia") ayudan a Google a validar tu relevancia para esas búsquedas.</p>

      <h3>4. El Ecosistema Web como Validador</h3>
      <p>Tu página web no es independiente de tu ficha de Maps.</p>
      <p><strong>Google rastrea tu web para confirmar que eres quien dices ser.</strong></p>
      <p>Si tu web carga lento, no tiene certificado de seguridad SSL o no menciona tu localidad claramente, tu ficha en Maps nunca llegará al Top 3.</p>
      <p>La autoridad de tu dominio (Domain Authority) es el combustible que hace que tu posición en el mapa despegue.</p>

      <h3>5. Contenido Local y Google Posts</h3>
      <p>Usa la sección de novedades de Google Business como si fuera una red social.</p>
      <p><strong>Publicar una foto de un trabajo recién terminado o una oferta semanal envía señales de "actividad" constantes.</strong></p>
      <p>Google premia a los negocios que demuestran estar operativos y actualizados.</p>

      <h3>Conclusión: El Sistema es el Éxito</h3>
      <p>Entrar en el Top 3 no es magia, es una coreografía técnica entre tu ficha, tu web y la interacción de tus clientes.</p>
      <p>En FG Digital Systems, auditamos cada uno de estos 20+ factores para que dejes de ser invisible y pases a ser el líder de tu barrio.</p>
    `
  },
  {
    id: 'errores-web-conversion-clientes',
    title: '5 errores en tu web que te están haciendo perder clientes hoy mismo',
    excerpt: 'Una web puede verse bien y no funcionar. Este es uno de los mayores malentendidos en internet para los dueños de negocios.',
    category: 'Conversión',
    date: '18 Mar 2024',
    readTime: '12 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>Diseño vs. Funcionalidad: La Batalla de la Rentabilidad</h2>
      <p>Tener una web "bonita" es el deseo de todo empresario, pero tener una web que "venda" es la necesidad de todo negocio.</p>
      <p><strong>El problema es que la mayoría de los diseñadores web se enfocan en la estética y olvidan la psicología del consumidor.</strong></p>
      <p>A continuación, detallamos los 5 agujeros negros por donde se escapa tu presupuesto de marketing.</p>

      <blockquote>
        Mantra: La estética sin estrategia es solo un gasto. La estrategia con diseño es una inversión.
      </blockquote>

      <h3>1. El Síndrome del "Acertijo de los 3 Segundos"</h3>
      <p>El tiempo de atención del usuario moderno es menor que el de un pez de colores.</p>
      <p><strong>Si en 3 segundos el visitante no sabe qué vendes y cómo le ayuda, cerrará la pestaña.</strong></p>
      <p>Evita titulares vagos como "Innovación al servicio del mañana". Sé directo: "Reparación de tejados en Murcia con garantía de 10 años".</p>

      <h3>2. El Error del Egocentrismo Corporativo</h3>
      <p>A tu cliente no le interesa tu historia... todavía.</p>
      <p><strong>Muchas webs gastan su espacio principal hablando de "quiénes somos" en lugar de "qué solucionamos".</strong></p>
      <p>Cambia el enfoque: el héroe de la historia no eres tú, es tu cliente. Tú eres el guía con la solución.</p>
      <p>En lugar de "Somos expertos en leyes", usa "Protegemos tus ahorros frente a reclamaciones bancarias".</p>

      <h3>3. La Parálisis por Análisis (Exceso de Opciones)</h3>
      <p>¿Tienes una barra de menú con 12 páginas? ¿5 botones de colores diferentes en la home?</p>
      <p><strong>Un usuario confundido siempre elige la opción de "salir".</strong></p>
      <p>Cada página de tu web debe tener UN objetivo claro. Una sola Llamada a la Acción (CTA) principal que destaque sobre todo lo demás.</p>

      <h3>4. Fricción en el Proceso de Contacto</h3>
      <p>Pedir el DNI, la dirección y el nombre de la mascota en un formulario de contacto es la muerte de la conversión.</p>
      <p><strong>Cada campo extra en un formulario reduce la conversión un 11% de media.</strong></p>
      <p>Pide solo lo esencial para iniciar la conversación. Si puedes usar WhatsApp, mejor. La inmediatez es la moneda de cambio hoy en día.</p>

      <h3>5. Inexistencia de "Señales de Confianza" (Social Proof)</h3>
      <p>En internet, nadie se fía de nadie por defecto.</p>
      <p><strong>Si no muestras logotipos de clientes, testimonios reales o certificaciones, eres un desconocido pidiendo dinero.</strong></p>
      <p>Los seres humanos seguimos a la manada. Si otros han confiado en ti y están contentos, el nuevo visitante sentirá que el riesgo de contratarte es bajo.</p>

      <h3>La Optimización Continua</h3>
      <p>Una web no es algo que se termina y se olvida. Es un ente vivo.</p>
      <p>Pequeños cambios en el color de un botón o en el orden de un párrafo pueden duplicar tus ingresos.</p>
      <p>En FG Digital Systems, no solo entregamos webs, instalamos sistemas de medición para saber exactamente qué está fallando y cómo arreglarlo.</p>
    `
  },
  {
    id: 'whatsapp-business-estrategia-pymes',
    title: 'WhatsApp Business: El canal de cierre definitivo para negocios locales',
    excerpt: 'WhatsApp ya no es solo para responder dudas. Es la herramienta de ventas con mayor retorno para una Pyme.',
    category: 'Ventas',
    date: '15 Mar 2024',
    readTime: '13 min',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>La Era de la Venta Conversacional</h2>
      <p>El correo electrónico ha muerto como canal de venta directa para negocios locales. Las tasas de apertura son ridículas comparadas con el chat.</p>
      <p><strong>WhatsApp Business no es una "app de mensajes", es el CRM más potente que puedes llevar en el bolsillo.</strong></p>
      <p>Para una Pyme, la distancia entre el interés y la venta se mide en la velocidad de respuesta por WhatsApp.</p>

      <blockquote>
        Dato Clave: El 90% de los usuarios prefiere chatear con una empresa que llamar por teléfono o enviar un email.
      </blockquote>

      <h3>1. WhatsApp Business vs Personal: Diferencias Críticas</h3>
      <p>Usar tu WhatsApp personal para el negocio es una receta para el caos y el baneo de cuenta.</p>
      <p><strong>La versión Business te permite proyectar profesionalidad:</strong> horario comercial, dirección física vinculada a Maps y enlace directo a tu web.</p>
      <p>Además, separa tu vida privada de la profesional, algo vital para la salud mental del empresario.</p>

      <h3>2. El Poder de las Etiquetas (Segmentación)</h3>
      <p>La herramienta de etiquetas es el secreto mejor guardado de WhatsApp Business.</p>
      <p><strong>Puedes clasificar a tus clientes como "Presupuesto enviado", "Pago pendiente" o "Cliente fiel".</strong></p>
      <p>Esto te permite hacer seguimientos estratégicos: "¿Te acuerdas de aquel presupuesto de hace 3 días? Escríbeles un mensaje de seguimiento en 10 segundos buscando a todos los que tengan esa etiqueta".</p>

      <h3>3. Respuestas Rápidas: Ahorra Horas de Tecleo</h3>
      <p>Si te pasas el día respondiendo lo mismo (precios, horarios, ubicación), estás perdiendo el tiempo.</p>
      <p><strong>Configura atajos como "/precio" para enviar un bloque de texto profesional con un solo clic.</strong></p>
      <p>La eficiencia en la respuesta es lo que evita que el cliente siga buscando a tu competencia mientras tú redactas un mensaje.</p>

      <h3>4. El Catálogo Integrado: Tu Tienda en el Chat</h3>
      <p>No envíes PDFs pesados que el cliente tiene que descargar. Usa el catálogo de WhatsApp.</p>
      <p><strong>El cliente puede ver fotos, descripciones y precios de tus servicios sin salir de la conversación.</strong></p>
      <p>Incluso pueden añadir productos a un carrito y enviarte el pedido directamente. Es la fricción cero llevada al extremo.</p>

      <h3>5. Automatización y Mensajes de Ausencia</h3>
      <p>Nunca dejes a un cliente "en visto", especialmente fuera de horario.</p>
      <p><strong>Un mensaje automático de bienvenida o de ausencia gestiona las expectativas del cliente.</strong></p>
      <p>Si el cliente recibe un: "Hola, gracias por escribirnos. Estamos fuera de la oficina pero te responderemos mañana a las 9:00", sentirá que el proceso ha comenzado.</p>

      <h3>Estrategia Pro: WhatsApp desde tu Web</h3>
      <p>No pongas solo un botón. Usa enlaces con mensajes personalizados.</p>
      <p><strong>Cuando el cliente hace clic, el mensaje ya está escrito: "Hola, quiero información sobre el Pack 2".</strong></p>
      <p>Esto facilita enormemente el primer paso del cliente, eliminando el "miedo a la página en blanco".</p>
      <p>En FG Digital Systems, integramos estos sistemas para que tu flujo de ventas sea imparable.</p>
    `
  },
  {
    id: 'cuanto-cuesta-conseguir-clientes-online',
    title: 'Cuánto cuesta realmente conseguir clientes online (y por qué lo barato sale caro)',
    excerpt: 'La mayoría de negocios locales comparan precios de webs aisladas, cuando el verdadero coste está en el sistema de ventas.',
    category: 'Estrategia',
    date: '10 Mar 2024',
    readTime: '14 min',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>La Trampa de la Inversión "Low Cost"</h2>
      <p>En el sector digital, lo barato no solo sale caro, suele salir fatal.</p>
      <p><strong>Muchos empresarios ven la web como un "gasto que hay que minimizar" en lugar de un "comercial que hay que optimizar".</strong></p>
      <p>Comprar una web por 200€ es como comprar un motor de desguace para un coche de carreras: no te llevará a la meta.</p>

      <blockquote>
        Pro Tip: La rentabilidad no se mide en el ahorro de la factura, sino en el Retorno de la Inversión (ROI).
      </blockquote>

      <h3>1. Entendiendo el CAC (Coste de Adquisición de Cliente)</h3>
      <p>¿Sabes cuánto te cuesta captar a un cliente nuevo? Si la respuesta es no, no tienes un negocio, tienes un hobby.</p>
      <p><strong>CAC = (Inversión en Marketing + Ventas) / Número de Clientes conseguidos.</strong></p>
      <p>Si una web de 600€ te trae 10 clientes al mes, tu CAC es ínfimo comparado con una web de 200€ que no te trae a nadie.</p>

      <h3>2. LTV: El Valor de Vida del Cliente</h3>
      <p>No todos los clientes valen lo mismo.</p>
      <p><strong>El Lifetime Value (LTV) mide cuánto dinero te deja un cliente a lo largo de toda su relación contigo.</strong></p>
      <p>Si un cliente te deja 1.000€ de beneficio en un año, puedes permitirte gastar 100€ en captarlo. Esto es lo que permite a los grandes negocios aplastar a la competencia pequeña.</p>

      <h3>3. El Coste Invisible de la Lentitud</h3>
      <p>Una web barata suele estar en un servidor compartido saturado.</p>
      <p><strong>Cada segundo de retraso en la carga reduce las conversiones un 7%.</strong></p>
      <p>Si tu web tarda 4 segundos en cargar, estás perdiendo el 28% de tus ventas potenciales antes de empezar. Ese es el verdadero coste de lo barato.</p>

      <h3>4. SEO: Gasto vs Inversión en Activos</h3>
      <p>La publicidad (Ads) es alquiler de tráfico. Si dejas de pagar, el grifo se corta.</p>
      <p><strong>El SEO es la construcción de un activo.</strong> Es como comprar el local en lugar de alquilarlo.</p>
      <p>Invertir en posicionamiento local parece caro al principio, pero a los 12 meses el coste por cliente es casi cero.</p>

      <h3>5. El Peligro del Diseño sin Copywriting</h3>
      <p>Una web sin textos de venta profesionales es solo una colección de fotos.</p>
      <p><strong>El diseño atrae la mirada, pero las palabras cierran la venta.</strong></p>
      <p>Pagar por un diseño increíble pero ahorrar en los textos es como comprar un Ferrari y no ponerle gasolina.</p>

      <h3>¿Cómo invertir con cabeza?</h3>
      <p>No necesitas la web más cara del mundo, necesitas el sistema que mejor encaje con tu margen de beneficio.</p>
      <p>En FG Digital Systems, desglosamos cada pack para que entiendas dónde va cada euro y cómo ese euro se va a multiplicar por diez.</p>
    `
  },
  {
    id: 'google-business-profile-guia-pro-2026',
    title: 'Guía Avanzada: Cómo exprimir Google Business Profile en 2026',
    excerpt: 'Tener la ficha creada no es suficiente. Te enseñamos a usar los atributos ocultos y la gestión de fotos para dominar el mapa local.',
    category: 'SEO Local',
    date: '25 Mar 2024',
    readTime: '16 min',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    content: `
      <h2>El Renacimiento del Perfil de Empresa</h2>
      <p>Google Business Profile (GBP) ha evolucionado de ser un mapa estático a convertirse en una mini-web transaccional.</p>
      <p><strong>En 2026, Google utiliza IA para leer tus fotos, analizar tus respuestas y decidir si eres el mejor de la ciudad.</strong></p>
      <p>Si no estás gestionando tu ficha activamente, estás perdiendo el canal de captación más barato del mundo.</p>

      <blockquote>
        Clave: Google Maps es el motor de búsqueda más utilizado por personas con intención de compra inmediata.
      </blockquote>

      <h3>1. Atributos: El Filtro Invisible</h3>
      <p>Google permite marcar atributos como "Accesible para sillas de ruedas", "Propiedad de mujeres" o "Presupuesto online".</p>
      <p><strong>Estos atributos no son solo informativos; son filtros de búsqueda.</strong></p>
      <p>Si un usuario filtra por "Aceptan reservas" y tú no lo tienes marcado, desapareces del mapa aunque estés al lado.</p>

      <h3>2. La IA y tus Fotografías</h3>
      <p>Google usa tecnología de reconocimiento de imágenes para entender tu negocio.</p>
      <p><strong>Subir fotos de alta resolución de tus herramientas, tu equipo y tu local valida tu relevancia ante el algoritmo.</strong></p>
      <p>Asegúrate de geolocalizar las fotos (EXIF data) para confirmar que realmente estás en la ubicación que dices estar.</p>

      <h3>3. Gestión de la Sección Q&A (Preguntas y Respuestas)</h3>
      <p>Cualquier usuario puede hacer una pregunta... y cualquiera puede responderla. Esto es un peligro.</p>
      <p><strong>Toma el control: tú mismo puedes (y debes) publicar las preguntas más frecuentes y responderlas oficialmente.</strong></p>
      <p>Usa palabras clave en estas respuestas: "Sí, somos el mejor dentista en Murcia para implantes sin dolor".</p>

      <h3>4. Google Posts: Noticiario Semanal</h3>
      <p>Usa la sección de publicaciones para anunciar ofertas, eventos o nuevos servicios.</p>
      <p><strong>Las publicaciones caducan, lo que obliga a Google a volver a rastrear tu ficha con frecuencia.</strong></p>
      <p>Esto mantiene tu perfil "fresco" y activo, algo que el algoritmo premia con mejores posiciones.</p>

      <h3>5. El Impacto de la Interacción del Usuario</h3>
      <p>Google mide el CTR (Click Through Rate): cuánta gente pulsa en "Cómo llegar" o en tu botón de llamada.</p>
      <p><strong>Si mucha gente te ignora, bajarás de posición.</strong> Por eso es vital tener una foto de portada impactante que invite a entrar.</p>

      <h3>Conclusión</h3>
      <p>Optimizar GBP no es un trabajo de una sola vez. Es una tarea de mantenimiento mensual.</p>
      <p>En FG Digital Systems, incluimos la gestión profesional de GBP en nuestros planes de acompañamiento para asegurar que siempre seas la primera opción del cliente.</p>
    `
  },
  {
    id: 'velocidad-web-factor-ranking-pymes',
    title: 'Velocidad Web: Por qué 1 segundo de retraso te está costando dinero',
    excerpt: 'El 40% de los usuarios abandona una web si tarda más de 3 segundos en cargar. Analizamos el impacto real en tus ventas.',
    category: 'Diseño Web',
    date: '28 Mar 2024',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>La Guerra por el Tiempo del Usuario</h2>
      <p>En internet, el tiempo no es oro, es supervivencia. La paciencia del usuario medio se ha evaporado.</p>
      <p><strong>Google ha convertido la velocidad de carga en un factor de ranking oficial bajo el nombre de Core Web Vitals.</strong></p>
      <p>Si tu web es lenta, Google te castiga enviándote a la página 2 y tus clientes te castigan cerrando la pestaña.</p>

      <blockquote>
        Dato de Amazon: Un aumento de solo 100ms en la carga les cuesta un 1% de sus ventas anuales. Imagina lo que le hace a tu Pyme.
      </blockquote>

      <h3>1. Core Web Vitals: El Examen de Google</h3>
      <p>Google mide tres cosas principales:</p>
      <p><strong>LCP (Largest Contentful Paint):</strong> ¿Cuánto tarda en verse lo más importante de tu web?</p>
      <p><strong>FID (First Input Delay):</strong> ¿Cuánto tarda la web en responder cuando el usuario hace un clic?</p>
      <p><strong>CLS (Cumulative Layout Shift):</strong> ¿Se mueven los elementos de la web mientras carga?</p>
      <p>Aprobar este examen es obligatorio para aparecer arriba.</p>

      <h3>2. El Peso de las Imágenes</h3>
      <p>Subir fotos directamente desde el móvil a la web es el mayor error de velocidad.</p>
      <p><strong>Una foto de 5MB tarda una eternidad en cargar en una red 4G.</strong></p>
      <p>Usamos formatos de nueva generación como WebP o AVIF que reducen el peso un 80% sin perder calidad visual.</p>

      <h3>3. Servidores y Distancia (TTFB)</h3>
      <p>El Time To First Byte mide cuánto tarda el servidor en empezar a enviar datos.</p>
      <p><strong>Si tu negocio está en España pero tu servidor está en Estados Unidos, estás perdiendo milisegundos vitales.</strong></p>
      <p>En FG Digital Systems usamos infraestructuras locales y CDNs (Content Delivery Networks) para que tu web vuele.</p>

      <h3>4. Scripts y Basura Técnica</h3>
      <p>Las plantillas baratas de WordPress vienen cargadas de código que no usas.</p>
      <p><strong>Es como intentar correr un maratón con una mochila llena de piedras.</strong></p>
      <p>Nuestras webs están construidas con código limpio, cargando solo lo estrictamente necesario para que la experiencia sea instantánea.</p>

      <h3>5. El Impacto en la Inversión Publicitaria</h3>
      <p>Si pagas anuncios en Google o Facebook, la velocidad web afecta a tu "Quality Score".</p>
      <p><strong>Una web rápida hace que tus anuncios sean más baratos.</strong></p>
      <p>Básicamente, optimizar la velocidad es ahorrar dinero directamente en tu presupuesto de publicidad.</p>

      <h3>Conclusión</h3>
      <p>La velocidad no es un lujo técnico, es una necesidad de negocio básica en 2026.</p>
      <p>En FG Digital Systems, garantizamos puntuaciones de 90+ en PageSpeed Insights para que nunca pierdas un cliente por impaciencia.</p>
    `
  },
  {
    id: 'marketing-digital-bajo-presupuesto-local',
    title: 'Marketing Digital con bajo presupuesto: Estrategias para Pymes',
    excerpt: 'No hace falta invertir miles al mes para ver resultados. Te damos la hoja de ruta para negocios que están empezando.',
    category: 'Estrategia',
    date: '02 Apr 2024',
    readTime: '14 min',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>Ganar en Grande con un Presupuesto Pequeño</h2>
      <p>El marketing no es una guerra de quién tiene la cartera más grande, sino de quién usa mejor su ingenio.</p>
      <p><strong>Para una Pyme local, intentar competir con presupuestos nacionales es un error. Debes competir en relevancia local.</strong></p>
      <p>Aquí tienes la hoja de ruta para crecer sin descapitalizarte.</p>

      <blockquote>
        Filosofía: No intentes ganar en todo Google. Intenta ganar en tu código postal.
      </blockquote>

      <h3>1. SEO Local: El Recurso Gratuito (en Ads)</h3>
      <p>Optimizar tu ficha de Maps requiere tiempo, no dinero.</p>
      <p><strong>Conseguir 5 reseñas de calidad a la semana es más potente que gastar 500€ en anuncios genéricos.</strong></p>
      <p>Enfócate en dominar tu calle y tu barrio antes de intentar dominar toda la provincia.</p>

      <h3>2. Marketing de Guerrilla Digital</h3>
      <p>Usa los grupos locales de Facebook y las comunidades de vecinos con cabeza.</p>
      <p><strong>No hagas spam. Aporta valor.</strong> Si eres un electricista, explica cómo ahorrar en la factura de la luz.</p>
      <p>La gente confía en los expertos que ayudan, no en los comerciales que solo venden.</p>

      <h3>3. El Poder del Email y WhatsApp Marketing</h3>
      <p>Es 7 veces más caro conseguir un cliente nuevo que venderle a uno que ya tienes.</p>
      <p><strong>Si tienes una lista de 100 clientes, tienes una mina de oro.</strong></p>
      <p>Envía una oferta exclusiva por WhatsApp una vez al mes. El coste es cero y la tasa de conversión es altísima.</p>

      <h3>4. Contenido de Video Low-Cost</h3>
      <p>No necesitas una productora de cine. Un smartphone y buena luz son suficientes.</p>
      <p><strong>Muestra el "detrás de las cámaras" de tu negocio.</strong> La autenticidad genera una confianza que el diseño corporativo no puede igualar.</p>
      <p>Un video de 30 segundos explicando un trabajo real funciona mejor que mil fotos de stock.</p>

      <h3>5. Alianzas Estratégicas Locales</h3>
      <p>Busca negocios complementarios en tu zona.</p>
      <p><strong>Si eres un veterinario, alíate con el peluquero canino del barrio.</strong></p>
      <p>Intercambiar recomendaciones y enlaces en vuestras webs es marketing gratuito de altísima calidad.</p>

      <h3>Conclusión</h3>
      <p>El marketing para Pymes debe ser quirúrgico. Cada euro debe estar destinado a una acción que traiga retorno rápido.</p>
      <p>En FG Digital Systems, diseñamos estrategias de "crecimiento orgánico" para que tu negocio grow de forma sostenible desde la base.</p>
    `
  },
  {
    id: 'automatizacion-leads-pymes-guia',
    title: 'Cómo automatizar tus leads y dejar de perder tiempo en el email',
    excerpt: 'Si respondes a tus clientes a las 5 horas, ya es tarde. Te enseñamos a crear un sistema que trabaje por ti.',
    category: 'Ventas',
    date: '05 Apr 2024',
    readTime: '13 min',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>El Fin de la Gestión Manual de Clientes</h2>
      <p>El mayor enemigo del crecimiento de una Pyme es el tiempo administrativo.</p>
      <p><strong>Si estás perdiendo 3 horas al día respondiendo emails y agendando citas, estás perdiendo dinero.</strong></p>
      <p>La automatización no es para robots, es para liberar a los humanos y que se centren en dar un buen servicio.</p>

      <blockquote>
        Pro Tip: Un lead (interesado) se "enfría" después de 30 minutos sin respuesta. La automatización es el antídoto.
      </blockquote>

      <h3>1. Formularios Inteligentes con Lógica</h3>
      <p>Deja de usar formularios de contacto básicos.</p>
      <p><strong>Usa sistemas que califiquen al cliente antes de que te llegue el aviso.</strong></p>
      <p>Si alguien busca un presupuesto de 10.000€, el sistema puede enviarle un WhatsApp directo. Si busca algo pequeño, puede enviarle un PDF con precios estándar. Esto filtra a los curiosos y te ahorra horas de reuniones inútiles.</p>

      <h3>2. Agendamiento Automático de Citas</h3>
      <p>¿Sigues diciendo: "Yo puedo el martes, ¿tú cuándo?"? Eso es ineficiente.</p>
      <p><strong>Integra calendarios como Calendly o TidyCal en tu web.</strong></p>
      <p>El cliente elige el hueco libre, recibe la confirmación y el recordatorio. Tú solo tienes que presentarte. Fin del caos de agenda.</p>

      <h3>3. Respuestas Automáticas Personalizadas</h3>
      <p>No respondas "Gracias por escribir". Responde con valor.</p>
      <p><strong>En el momento en que alguien rellena un formulario, envíale automáticamente un caso de éxito similar a su problema.</strong></p>
      <p>Esto eleva tu autoridad instantáneamente y prepara al cliente para el cierre de la venta.</p>

      <h3>4. Sincronización con el CRM</h3>
      <p>No copies y pegues datos del email a un Excel.</p>
      <p><strong>Conectamos tu web para que cada contacto se guarde automáticamente en tu base de datos.</strong></p>
      <p>Esto te permite hacer campañas de re-impacto meses después con un solo clic.</p>

      <h3>5. Notificaciones al Instante</h3>
      <p>Usamos herramientas para que cada solicitud web te llegue como un mensaje de WhatsApp a tu móvil personal.</p>
      <p><strong>La inmediatez en el seguimiento duplica las posibilidades de cierre.</strong></p>
      <p>Si el cliente recibe una llamada tuya a los 5 minutos de haber visitado tu web, la impresión de profesionalidad es imbatible.</p>

      <h3>Conclusión</h3>
      <p>Automatizar no es deshumanizar, es ser más profesional y eficiente.</p>
      <p>En FG Digital Systems, implementamos estas herramientas para que tu negocio funcione como una máquina suiza mientras tú te ocupas de lo importante.</p>
    `
  },
  {
    id: 'importancia-reseñas-seo-local',
    title: 'El poder de las reseñas: Cómo influyen en tu ranking y cómo conseguirlas',
    excerpt: 'Las reseñas son el "boca a boca" digital. Si tienes menos de 4.5 estrellas, Google y tus clientes te están penalizando.',
    category: 'SEO Local',
    date: '10 Apr 2024',
    readTime: '15 min',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>La Moneda de la Confianza en Internet</h2>
      <p>Antes pedíamos consejo a un vecino. Ahora se lo pedimos a extraños en internet.</p>
      <p><strong>Las reseñas de Google son el factor de decisión número 1 para el 88% de los consumidores locales.</strong></p>
      <p>Pero además de convencer a las personas, las reseñas convencen al algoritmo de Google de que mereces estar arriba.</p>

      <blockquote>
        Clave: Google no solo mira las estrellas, mira el sentimiento de los textos y las palabras clave que contienen.
      </blockquote>

      <h3>1. El Factor "Recency" (Frescura)</h3>
      <p>Tener 100 reseñas de hace 3 años es sospechoso para el cliente y aburrido para Google.</p>
      <p><strong>El algoritmo premia la entrada constante de nuevas opiniones.</strong></p>
      <p>Un negocio con 20 reseñas recientes siempre superará a uno con 100 reseñas antiguas.</p>

      <h3>2. Cómo Pedir Reseñas sin Molestar</h3>
      <p>El error es pedir la reseña "días después". Hay que pedirla en el momento del éxito.</p>
      <p><strong>Usa códigos QR en tu local o envía un enlace directo por WhatsApp justo después de terminar el servicio.</strong></p>
      <p>Cuanto más fácil se lo pongas al cliente (un clic), más probable es que la deje.</p>

      <h3>3. Responder es Obligatorio (Incluso las Malas)</h3>
      <p>No responder a las reseñas envía un mensaje de desidia.</p>
      <p><strong>Responder a las negativas con elegancia y soluciones demuestra que te importa tu negocio.</strong></p>
      <p>Los clientes inteligentes leen las respuestas negativas para ver cómo gestionas los problemas. Un error bien gestionado puede atraer más clientes que una perfección sospechosa.</p>

      <h3>4. Palabras Clave en los Testimonios</h3>
      <p>Cuando un cliente escribe: "Excelente abogado de herencias en Murcia", está haciendo SEO gratuito para ti.</p>
      <p><strong>Anima sutilmente a tus clientes a mencionar qué servicio usaron.</strong></p>
      <p>Esto ayuda a Google a categorizar tu negocio y mostrarlo para búsquedas mucho más específicas.</p>

      <h3>5. Fotos en las Reseñas: El Santo Grial</h3>
      <p>Una reseña con foto vale por diez sin ella.</p>
      <p><strong>Las reseñas con imágenes detienen el scroll del usuario y validan visualmente tu trabajo.</strong></p>
      <p>Google adora el contenido generado por el usuario porque es imposible de falsificar a gran escala.</p>

      <h3>Conclusión</h3>
      <p>Las reseñas son tu activo de marketing más duradero. No las dejes al azar.</p>
      <p>En FG Digital Systems, diseñamos tarjetas de visita con QR y sistemas de seguimiento por WhatsApp para automatizar la captación de tus mejores reseñas.</p>
    `
  },
  {
    id: 'copywriting-webs-servicios-guia',
    title: 'Copywriting para Pymes: Escribir para que el cliente te llame',
    excerpt: 'Tu web no es un libro, es una conversación de ventas. Te enseñamos a usar las palabras adecuadas para convertir visitas en leads.',
    category: 'Conversión',
    date: '15 Apr 2024',
    readTime: '14 min',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    content: `
      <h2>Escribir para Convencer, no para Rellenar</h2>
      <p>La mayoría de las webs de Pymes parecen una enciclopedia: aburridas, densas y centradas en el producto.</p>
      <p><strong>El Copywriting es el arte de usar las palabras para guiar al usuario hacia una acción específica (llamar, comprar, agendar).</strong></p>
      <p>Si tu web no convierte, probablemente el problema no es el diseño, sino que tus textos no conectan con nadie.</p>

      <blockquote>
        Principio: La gente no compra "qué haces", compra "cómo le haces sentir" o "qué problema le quitas de encima".
      </blockquote>

      <h3>1. El Titular: Tu Única Oportunidad</h3>
      <p>El 80% de los lectores solo lee el titular principal.</p>
      <p><strong>Si tu titular es "Bienvenidos a Hermanos Pérez", has fracasado.</strong></p>
      <p>Usa la fórmula Beneficio + Tiempo + Objeción: "Consigue una web que venda en 10 días sin tecnicismos raros".</p>

      <h3>2. Beneficios vs Características</h3>
      <p>Una característica es técnica: "Cámara de 48 megapíxeles".</p>
      <p>Un beneficio es emocional: "Saca fotos increíbles de tus hijos incluso de noche".</p>
      <p><strong>En tu web de servicios, deja de hablar de tus herramientas y empieza a hablar de la paz mental de tu cliente.</strong></p>

      <h3>3. La Fórmula P.A.S. (Problema, Agitación, Solución)</h3>
      <p>Es la estructura de ventas más potente del mundo.</p>
      <p><strong>Problema:</strong> Identifica el dolor del cliente ("¿Tu web no te trae clientes?").</p>
      <p><strong>Agitación:</strong> Haz que el dolor escueza ("Estás pagando hosting y dominio para nada mientras tu competencia te adelanta").</p>
      <p><strong>Solución:</strong> Presenta tu servicio como la medicina ("Nuestro Pack Crecimiento activa tus ventas en semanas").</p>

      <h3>4. Llamadas a la Acción (CTA) que Funcionen</h3>
      <p>Deja de usar botones que digan "Enviar" o "Saber más". Son genéricos y aburridos.</p>
      <p><strong>Usa CTAs orientados a la acción y al beneficio:</strong> "Quiero mi auditoría gratis", "Empezar mi proyecto hoy", "Solicitar presupuesto cerrado".</p>
      <p>El botón debe completar la frase "Yo quiero..." en la cabeza del cliente.</p>

      <h3>5. Claridad sobre Inteligencia</h3>
      <p>No intentes sonar inteligente usando palabras complejas. Intenta sonar útil.</p>
      <p><strong>Escribe como si le hablaras a un amigo en una cafetería.</strong></p>
      <p>Si el usuario tiene que esforzarse para entenderte, se irá. La claridad es lo que genera confianza y ventas rápidas.</p>

      <h3>Conclusión</h3>
      <p>Tus textos son la voz de tu negocio cuando tú no estás delante. Asegúrate de que digan las palabras correctas.</p>
      <p>En FG Digital Systems, el copywriting estratégico está integrado en cada pack. No solo hacemos webs bonitas, hacemos webs que hablan el idioma de tu cliente.</p>
    `
  }
];
