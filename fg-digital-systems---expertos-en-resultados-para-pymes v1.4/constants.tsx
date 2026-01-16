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
  { name: "Botón de reserva (enlace simple)", price: "70€" }
   { name: "ChatBot inteligente)", price: "250€" }
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
    title: 'Cómo aparecer en el TOP 3 de Google Maps en tu ciudad',
    excerpt: 'Si tienes un negocio local y no apareces en los primeros resultados de Google Maps, estás perdiendo clientes cada día.',
    category: 'SEO Local',
    date: '20 Mar 2024',
    readTime: '10 min',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=800',
    relatedFaqs: [
      {
        question: '¿Cuánto tiempo se tarda en aparecer en el TOP 3 de Google Maps?',
        answer: 'Depende de la competencia local. En sectores con baja competencia, los cambios se notan en semanas. En sectores saturados, suele requerir entre 3 y 6 meses de optimización constante y generación de autoridad.'
      },
      {
        question: '¿Es obligatorio tener una página web para salir en Maps?',
        answer: 'No es obligatorio, pero es un factor de ranking crítico. Google utiliza la información de tu web para validar la relevancia de tu ficha. Sin una web optimizada, es extremadamente difícil superar a competidores que sí la tienen.'
      }
    ],
    content: `
      <p><em>SEO LOCAL</em></p>
      <h2>El Impacto de la Visibilidad Local</h2>
      <br />
      <div class="intro-box">
        <p>La visibilidad en Google Maps ha dejado de ser una opción para convertirse en el pilar de la facturación local. No aparecer en el "Local Pack" significa, simplemente, no existir en el momento en que el cliente toma la decisión de compra.</p>
      </div>
      <br />
      <div class="content-block">
        <h3>Por qué el TOP 3 de Google Maps es donde se decide todo</h3>
        <br />
        <p>El mapa de Google ha sustituido a cualquier otro tipo de directorio local. Cuando un usuario busca un servicio cerca de su ubicación, su mirada se detiene en los tres primeros resultados. Aparecer en esa zona de privilegio no es una cuestión estética, es la diferencia entre recibir una llamada o ser invisible.</p>
        <br />
        <p class="pull-quote">Más del 70 % de las búsquedas locales terminan en una acción directa: llamada, visita o mensaje. Casi todas se quedan en el TOP 3.</p>
        <br />
        <p>No se trata de estar en internet; se trata de estar en el lugar donde el cliente toma la decisión.</p>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h3>Qué mira Google para posicionarte en Maps</h3>
        <br />
        <p>Google no posiciona al azar. Utiliza un algoritmo complejo que evalúa principalmente tres pilares fundamentales:</p>
        <br />
        <div class="content-block">
          <h4>1. Relevancia estratégica</h4>
          <p>Qué tan bien encaja tu negocio con la búsqueda específica del usuario. Para maximizarla, es vital que tu ficha de negocio refleje con precisión lo que haces:</p>
          <br />
          <ul>
            <li>Selección de la categoría principal correcta.</li>
            <li>Descripción optimizada con palabras clave locales.</li>
            <li>Servicios bien definidos y actualizados.</li>
          </ul>
        </div>
        <br />
        <div class="content-block">
          <h4>2. El factor distancia</h4>
          <p>Es el único factor que no controlas directamente, pero que puedes compensar con una mayor autoridad y relevancia en tu zona de influencia.</p>
        </div>
        <br />
        <div class="content-block">
          <h4>3. Autoridad y confianza</h4>
          <p>Aquí es donde la mayoría de los negocios fallan. Google necesita señales externas que confirmen que tu negocio es real y confiable:</p>
          <br />
          <ul>
            <li><strong>Reseñas:</strong> No solo el volumen, sino la frecuencia y la calidad de las respuestas.</li>
            <li><strong>Coherencia de datos:</strong> Que tu nombre, dirección y teléfono sean idénticos en toda la red.</li>
            <li><strong>Conexión web:</strong> Una web optimizada que refuerce la información de tu ficha de Maps.</li>
          </ul>
        </div>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h3>El error más común: la ficha abandonada</h3>
        <br />
        <p>Muchos negocios cometen el error de crear la ficha, subir tres fotos de mala calidad y esperar a que el teléfono suene. En un entorno competitivo, una ficha pasiva termina hundiéndose en los resultados.</p>
        <br />
        <blockquote>Google prioriza negocios que demuestran actividad constante.</blockquote>
        <br />
        <p class="pull-quote">Una ficha activa envía señales de vida al algoritmo. Google quiere recomendar negocios que atienden bien a sus clientes.</p>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h3>El sistema mínimo para entrar en el TOP 3</h3>
        <br />
        <p>Para dominar el mercado local, el orden de los factores sí altera el producto. El método que funciona es circular:</p>
        <br />
        <ol>
          <li><strong>Optimización estructural:</strong> Textos y configuración técnica de la ficha para que sea 100% clara para Google.</li>
          <li><strong>Ecosistema web:</strong> Una web rápida que valide tu relevancia local y actúe como ancla de autoridad.</li>
          <li><strong>Señales constantes:</strong> Publicaciones semanales y una gestión activa y profesional de las reseñas recibidas.</li>
          <li><strong>Seguimiento de datos:</strong> Analizar qué palabras clave traen llamadas reales y ajustar la estrategia en consecuencia.</li>
        </ol>
        <br />
        <p>La visibilidad orgánica no es una carrera de velocidad, es una construcción de autoridad.</p>
      </div>
      <br />
      <div class="summary-box">
        <p>El TOP 3 de Google Maps no es un premio, es el resultado de un sistema bien ejecutado. Los negocios que invierten en su visibilidad local hoy, son los que captarán la demanda de mañana.</p>
      </div>
      <br />
      <div class="next-step">
        <p>Si quieres entender cómo se ve tu ficha desde los ojos de Google, una auditoría técnica suele ser el primer paso lógico para dejar de perder clientes.</p>
      </div>
    `
  },
  {
    id: 'errores-web-conversion-clientes',
    title: '5 errores en tu web que te están haciendo perder clientes hoy mismo',
    excerpt: 'Una web puede verse bien y no funcionar. Este es uno de los mayores malentendidos en internet.',
    category: 'Conversión',
    date: '18 Mar 2024',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    relatedFaqs: [
      {
        question: '¿Es mejor una web de una sola página o con muchas secciones?',
        answer: 'Depende de tu objetivo. Para captación directa y campañas específicas, una \"One Page\" enfocada a la conversión suele funcionar mejor. Para posicionamiento SEO a largo plazo y servicios variados, una estructura de múltiples páginas es indispensable.'
      },
      {
        question: '¿Influye la velocidad de carga en las ventas?',
        answer: 'Totalmente. Un retraso de solo 1 segundo en la carga puede reducir las conversiones hasta un 7%. Los usuarios actuales no esperan; si tu web es lenta, se van a la competencia antes de ver tu oferta.'
      }
    ],
    content: `
      <p><em>CONVERSIÓN DIGITAL</em></p>
      <h2>Estrategias de Diseño para Vender</h2>
      <br />
      <div class="intro-box">
        <p>Una web puede verse bien y no funcionar. Este es uno de los mayores malentendidos en internet. El diseño debe estar al servicio del negocio, no al revés.</p>
      </div>
      <br />
      <div class="content-block">
        <h3>La diferencia entre estética y utilidad</h3>
        <br />
        <p>Es común encontrar sitios web visualmente atractivos que, sin embargo, tienen tasas de conversión bajísimas. El objetivo real de tu presencia online es que el visitante entienda qué haces, confíe en tu capacidad y actúe de inmediato.</p>
        <br />
        <p class="pull-quote">El diseño que no vende no es diseño, es arte. Y tu negocio no necesita arte, necesita resultados.</p>
        <br />
        <p>A continuación, detallamos los fallos estructurales que suelen sabotear la rentabilidad de las webs corporativas.</p>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h4>Error 1: El acertijo de los 5 segundos</h4>
        <p>El tiempo de atención del usuario moderno es ínfimo. Si en los primeros cinco segundos un visitante no puede identificar qué problema resuelves y para quién eres, su dedo se moverá instintivamente hacia el botón de retroceso.</p>
        <br />
        <h4>Error 2: El egocentrismo corporativo</h4>
        <p>Muchas webs se centran en el "nosotros": cuántos años llevan, qué oficinas tienen o qué filosofía siguen. Al cliente potencial no le interesa tu historia hasta que sabe que puedes solucionar su problema.</p>
        <br />
        <p class="pull-quote">Las webs que convierten hablan del cliente, de sus dolores y de los beneficios tangibles que recibirá.</p>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h4>Error 3: La parálisis por análisis</h4>
        <p>Ofrecer demasiadas opciones, botones o caminos confunde al usuario. Un visitante confundido nunca compra.</p>
        <br />
        <p class="pull-quote">Una web sin una acción clara es un folleto digital abandonado en un cajón.</p>
        <br />
        <h4>Error 4: La pasividad en la captura de contactos</h4>
        <p>Esperar a que el cliente "te escriba si quiere" es una estrategia perdedora. El usuario necesita guía y una razón para dar el paso ahora mismo.</p>
        <br />
        <h4>Error 5: La ausencia de un sistema conectado</h4>
        <p>Una web aislada es inútil. Debe estar integrada con tus canales de venta, con tu WhatsApp, con tus formularios y con una estrategia de seguimiento. Sin sistema, el tráfico es solo un número vacío.</p>
      </div>

      <hr class="section-divider" />
      <br />
      <div class="summary-box">
        <p>Reparar estos errores no requiere necesariamente un rediseño total, sino un cambio de enfoque estratégico. Una web enfocada a la conversión es un activo que trabaja por ti las 24 horas del día.</p>
      </div>
      <br />
      <div class="next-step">
        <p>Identificar estos puntos de fuga es el primer paso para transformar tu presencia digital en una herramienta de facturación constante.</p>
      </div>
    `
  },
  {
    id: 'whatsapp-business-estrategia-pymes',
    title: 'WhatsApp Business: el arma secreta para Pymes en 2024',
    excerpt: 'WhatsApp ya no es solo para responder mensajes. Es uno de los canales más potentes para cerrar ventas.',
    category: 'Ventas',
    date: '15 Mar 2024',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    relatedFaqs: [
      {
        question: '¿Puedo usar el mismo número para mi WhatsApp personal y el de empresa?',
        answer: 'Técnicamente puedes, pero no es recomendable. Mezclar conversaciones personales con clientes genera desorganización y evita que puedas establecer horarios de atención profesional. Lo ideal es usar un número dedicado para WhatsApp Business.'
      },
      {
        question: '¿Me pueden bloquear la cuenta por enviar muchos mensajes?',
        answer: 'Sí, si Google detecta patrones de spam. WhatsApp Business está diseñado para comunicación entrante o respuestas a clientes. Si inicias conversaciones masivas con personas que no te han contactado, corres el riesgo de baneo permanente.'
      }
    ],
    content: `
      <p><em>ESTRATEGIA DE VENTAS</em></p>
      <h2>Vender por WhatsApp en la Nueva Era</h2>
      <br />
      <div class="intro-box">
        <p>WhatsApp ya no es solo una aplicación de mensajería. Se ha convertido en el canal de cierre de ventas más potente para las pequeñas y medianas empresas por una razón: la cercanía y la inmediatez.</p>
      </div>
      <br />
      <div class="content-block">
        <h3>WhatsApp ya no es solo para responder mensajes</h3>
        <br />
        <p>Muchos negocios cometen el error de usar WhatsApp Business como un simple chat. La realidad es que bien configurado, es un sistema de preventa y atención al cliente que ahorra horas de gestión manual.</p>
        <br />
        <p class="pull-quote">El problema no es la herramienta, es usarla como un chat personal. Sin estructura, WhatsApp se convierte en una distracción; con estrategia, es una máquina de cierre.</p>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h3>Qué puede hacer realmente WhatsApp Business por tu negocio</h3>
        <br />
        <p>La versión profesional de WhatsApp ofrece herramientas que la mayoría de los negocios infrautilizan:</p>
        <br />
        <ul>
          <li><strong>Automatización ligera:</strong> Mensajes de bienvenida y respuestas rápidas para las dudas frecuentes.</li>
          <li><strong>Catálogo integrado:</strong> Permite que el cliente vea qué vendes sin salir de la conversación.</li>
          <li><strong>Etiquetas de gestión:</strong> Organiza a tus clientes por estado (nuevo lead, presupuesto enviado, pagado).</li>
        </ul>
        <br />
        <p>Es el puente perfecto entre tu web y el ingreso en tu cuenta bancaria.</p>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h3>El peligro de la automatización robótica</h3>
        <br />
        <p>Un error común es configurar respuestas tan rígidas que el cliente siente que habla con una pared. La clave es usar la automatización para ganar tiempo, pero manteniendo siempre un tono humano y cercano.</p>
        <br />
        <p class="pull-quote">Automatizar no es responder como un robot. Es dar la información correcta en el momento justo para que la conversación fluya hacia la venta.</p>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h3>El sistema mínimo que genera resultados</h3>
        <br />
        <p>Para que WhatsApp sea rentable, debe seguir un orden lógico:</p>
        <br />
        <ol>
          <li><strong>Entrada cualificada:</strong> El cliente llega desde tu web o Google sabiendo exactamente qué ofreces y con una intención clara.</li>
          <li><strong>Filtro inicial:</strong> Implementar una pregunta automática o menú que te ayude a priorizar los mensajes más urgentes o valiosos.</li>
          <li><strong>Atención profesional:</strong> Dar una respuesta clara y estructurada, con precios o servicios bien definidos para eliminar la incertidumbre.</li>
          <li><strong>Cierre o seguimiento:</strong> No dejes morir las conversaciones. Un simple mensaje de seguimiento a los dos días puede duplicar tus tasas de cierre.</li>
        </ol>
      </div>
      <br />
      <div class="summary-box">
        <p>WhatsApp Business es la herramienta que permite a una Pyme competir con grandes empresas en calidad de atención. Es simple, es directo y es lo que tus clientes quieren usar hoy en día.</p>
      </div>
      <br />
      <div class="next-step">
        <p>Profesionalizar este canal no es opcional si quieres escalar tu captación de clientes sin aumentar tu carga de trabajo personal.</p>
      </div>
    `
  },
  {
    id: 'cuanto-cuesta-conseguir-clientes-online',
    title: 'Cuánto cuesta realmente conseguir clientes online (y por qué lo barato sale caro)',
    excerpt: 'La mayoría compara precios aislados, cuando el verdadero coste está en el sistema completo que hay detrás.',
    category: 'Estrategia',
    date: '10 Mar 2024',
    readTime: '9 min',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800',
    relatedFaqs: [
      {
        question: '¿Es posible conseguir clientes online con una inversión mínima?',
        answer: 'Sí, es posible empezar con una base técnica sólida y crecer conforme se generan ingresos. Lo importante no es la cantidad de la inversión, sino que cada euro esté destinado a una pieza de un sistema conectado.'
      },
      {
        question: '¿Cómo puedo medir si mi inversión en marketing está siendo rentable?',
        answer: 'La métrica principal es el Coste de Adquisición de Cliente (CAC). Si el beneficio que te deja un cliente es mayor de lo que te ha costado atraerlo mediante tu web y SEO, tu sistema es rentable.'
      }
    ],
    content: `
      <p><em>ESTRATEGIA DIGITAL</em></p>
      <h2>Rentabilidad y Captación de Clientes</h2>
      <br />
      <div class="intro-box">
        <p>La pregunta sobre el coste de captación online es casi siempre mal formulada. La verdadera métrica no es el gasto, sino la rentabilidad del sistema completo que hay detrás de cada clic.</p>
      </div>
      <br />
      <div class="content-block">
        <h3>La trampa de comparar precios aislados</h3>
        <br />
        <p>La mayoría de los empresarios comparan cuánto cuesta una web aquí y cuánto cuesta el SEO allá. Evaluar piezas sueltas es como comprar un motor y unas ruedas por separado esperando que el coche ande solo. Lo que importa es si todas las piezas trabajan juntas hacia un único objetivo: la venta.</p>
        <br />
        <p class="pull-quote">Una web, el SEO o la publicidad por separado dicen muy poco. Lo que importa es el sistema que las conecta.</p>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h3>El error de la inversión fragmentada</h3>
        <br />
        <p>Contratar a diferentes proveedores sin una visión estratégica suele derivar en una experiencia frustrante. El resultado: tráfico que no convierte, mensajes que no se responden bien y una sensación constante de estar tirando el dinero.</p>
        <br />
        <p>El problema no es internet; el problema es que el recorrido del cliente estaba roto en varios puntos.</p>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h3>El coste invisible de lo "barato"</h3>
        <br />
        <p>Cuando algo sale muy por debajo del precio de mercado, normalmente el pago se hace de otra forma:</p>
        <br />
        <ul>
          <li><strong>Tiempo perdido</strong> en pruebas y errores que no llevan a nada útil.</li>
          <li><strong>Clientes potenciales</strong> que terminan contratando a tu competencia por falta de confianza en tu web lenta o confusa.</li>
          <li><strong>Oportunidades de negocio</strong> que pasan una vez y no vuelven por una mala primera impresión digital.</li>
        </ul>
        <br />
        <p>Ese coste no aparece en ninguna factura, pero es el más alto de todos.</p>
        <br />
        <p class="pull-quote">Lo caro no es invertir en marketing profesional. Lo caro es hacerlo sin estrategia y tener que rehacerlo todo un año después.</p>
      </div>

      <hr class="section-divider" />

      <div class="content-block">
        <h3>Qué significa realmente construir un sistema de captación</h3>
        <br />
        <p>Conseguir clientes de forma consistente requiere un recorrido lógico y sin fisuras basado en tres pilares:</p>
        <br />
        <ul>
          <li><strong>Visibilidad:</strong> Estar presente con autoridad en el momento exacto en que el usuario realiza la búsqueda del servicio.</li>
          <li><strong>Claridad:</strong> Ofrecer un mensaje y una experiencia web que elimine la fricción, resuelva dudas y genere confianza inmediata.</li>
          <li><strong>Gestión:</strong> Contar con un sistema que reciba el contacto, lo califique y facilite el cierre de la venta de forma ágil.</li>
        </ul>
        <br />
        <p>Si uno de estos pilares falla, el esfuerzo y el dinero invertido en los otros dos se pierde irremediablemente.</p>
      </div>
      <br />
      <div class="summary-box">
        <p>La pregunta real no es cuánto cuesta una web o el SEO. La pregunta es: ¿qué infraestructura necesito para que mi negocio genere clientes de forma predecible? Los negocios que entienden esto dejan de ver el marketing como un gasto.</p>
      </div>
      <br />
      <div class="next-step">
        <p>Invertir en una base sólida hoy es la única forma de asegurar la tranquilidad y el crecimiento de mañana. Solicita una conversación estratégica antes de invertir a ciegas.</p>
      </div>
    `
  }
];
