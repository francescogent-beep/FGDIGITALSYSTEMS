import React from 'react';
import { Section, Button, Breadcrumbs, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA } from '../seo/metadata';
import { BLOG_POSTS, FAQS } from '../constants';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
// Fix: Changed react-router-dom to react-router to resolve missing export errors.
import { Link } from 'react-router';

const Blog: React.FC = () => {
  return (
    <main>
      <SEO {...METADATA.blog} />
      
      <Section className="pt-20 bg-slate-50">
        <Breadcrumbs items={[{ label: 'Blog para Pymes' }]} />
        <div className="text-center">
          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold mb-6 border border-blue-200">
            Consejos que funcionan
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900 tracking-tight">Blog para Pymes</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Guías prácticas y estrategias directas para ayudarte a conseguir más clientes sin complicaciones técnicas.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-[2rem] border border-slate-200 overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300">
              <Link to={`/blog-marketing-digital/${post.id}`} className="aspect-video relative overflow-hidden block">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  width="800"
                  height="450"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-blue-600 shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex items-center gap-4 text-slate-400 text-xs font-bold mb-4 uppercase tracking-wider">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>
                
                <Link to={`/blog-marketing-digital/${post.id}`}>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight tracking-tight">
                    {post.title}
                  </h3>
                </Link>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/blog-marketing-digital/${post.id}`}
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-3 transition-all"
                >
                  Leer guía completa <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* FAQ SECTION */}
      <Section className="bg-slate-50 py-12 md:py-24 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Aprendizaje y dudas comunes</h2>
            <p className="text-slate-600">Más allá del blog, resolvemos tus dudas sobre marketing local.</p>
          </div>
          <div className="space-y-2">
            {FAQS.slice(0, 4).map((faq, i) => (
              <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/preguntas-frecuentes" className="text-blue-600 font-bold flex items-center justify-center gap-2 hover:underline">
              Ver todas las preguntas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </Section>

      <Section className="pb-24 pt-12">
        <div className="bg-[#0B1426] rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight tracking-tight">
              ¿Quieres recibir consejos para tu negocio?
            </h2>
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
              Apúntate y te avisaremos cuando publiquemos guías que te ayuden a vender más. Cero spam, solo valor.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Tu email" 
                className="flex-grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
              <Button variant="primary" className="bg-[#2563EB] hover:bg-blue-500 whitespace-nowrap">
                Suscribirme
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default Blog;