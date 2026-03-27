import React from 'react';
import { useParams, Link, Navigate } from 'react-router';
import { Section, Button, Breadcrumbs, FAQAccordion } from '../components/UI';
import { SEO } from '../components/SEO';
import { BLOG_POSTS } from '../constants';
import { METADATA, CANONICAL_DOMAIN } from '../seo/metadata';
import { Calendar, Clock, ArrowRight, Share2, MessageCircle, Zap } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) {
    return <Navigate to="/blog-marketing-digital" replace />;
  }

  const seoData = METADATA[post.id] || {
    title: `${post.title} | FG Digital Systems`,
    description: post.excerpt,
    path: `/blog-marketing-digital/${post.id}`,
    ogType: "article" as const
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${CANONICAL_DOMAIN}${seoData.path}/#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": CANONICAL_DOMAIN },
          { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${CANONICAL_DOMAIN}/blog-marketing-digital` },
          { "@type": "ListItem", "position": 3, "name": post.title }
        ]
      },
      {
        "@type": "BlogPosting",
        "@id": `${CANONICAL_DOMAIN}${seoData.path}/#post`,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${CANONICAL_DOMAIN}${seoData.path}`
        },
        "headline": post.title,
        "description": post.excerpt,
        "image": post.image,
        "wordCount": "1200",
        "datePublished": seoData.datePublished || post.date,
        "dateModified": seoData.dateModified || seoData.datePublished || post.date,
        "author": {
          "@type": "Person",
          "@id": `${CANONICAL_DOMAIN}/#founder`,
          "name": "Francesco Gentile",
          "url": CANONICAL_DOMAIN
        },
        "publisher": {
          "@type": "Organization",
          "@id": `${CANONICAL_DOMAIN}/#organization`,
          "name": "FG Digital Systems",
          "logo": {
            "@type": "ImageObject",
            "url": "https://i.imgur.com/ILoCkO3.png"
          }
        }
      },
      ...(post.relatedFaqs && post.relatedFaqs.length > 0 ? [{
        "@type": "FAQPage",
        "@id": `${CANONICAL_DOMAIN}${seoData.path}/#faq`,
        "mainEntity": post.relatedFaqs.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer
          }
        }))
      }] : [])
    ]
  };

  return (
    <main>
      <SEO 
        {...seoData}
        ogImage={post.image}
        schema={blogSchema}
      />
      
      <article className="bg-white">
        <header className="pt-24 pb-12 md:pb-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4">
            <Breadcrumbs items={[
              { label: 'Blog', path: '/blog-marketing-digital' },
              { label: post.category }
            ]} />
            
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-blue-600" aria-hidden="true" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-blue-600" aria-hidden="true" />
                Lectura de {post.readTime}
              </div>
              <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                Actualizado en 2026
              </div>
            </div>
          </div>
        </header>

        <Section className="py-12 md:py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
            <aside className="hidden lg:block lg:col-span-1 space-y-6 sticky top-32 h-fit">
              <div className="flex flex-col gap-4">
                <button aria-label="Compartir artículo" className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all shadow-sm">
                  <Share2 size={20} aria-hidden="true" />
                </button>
                <a 
                  href="https://wa.me/34694285438" 
                  aria-label="Contactar por WhatsApp"
                  className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg"
                >
                  <MessageCircle size={24} aria-hidden="true" />
                </a>
              </div>
            </aside>

            <div className="lg:col-span-8 px-2 md:px-0">
              <div className="rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border-8 border-slate-50">
                <img 
                  src={post.image.replace('w=800', 'w=1200')} 
                  alt={post.title} 
                  className="w-full aspect-video object-cover" 
                  width="800" 
                  height="450" 
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              
              <div 
                className="prose prose-blue lg:prose-xl max-w-none text-slate-600 leading-relaxed
                  prose-headings:text-slate-900 prose-headings:font-black prose-headings:tracking-tight
                  prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-100
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6
                  prose-p:mb-6 prose-p:text-lg lg:prose-p:text-xl prose-p:leading-8
                  prose-strong:text-slate-900 prose-strong:font-extrabold
                  prose-blockquote:border-l-[6px] prose-blockquote:border-amber-400 prose-blockquote:bg-amber-50/40 
                  prose-blockquote:py-8 prose-blockquote:px-10 prose-blockquote:rounded-r-3xl prose-blockquote:italic
                  prose-blockquote:text-slate-900 prose-blockquote:font-bold prose-blockquote:shadow-sm prose-blockquote:not-italic
                  prose-hr:my-16 prose-hr:border-slate-100
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold
                  prose-ul:list-disc prose-ul:pl-8 prose-li:mb-4
                  prose-img:rounded-[2.5rem] prose-img:shadow-2xl prose-img:border-4 prose-img:border-slate-50"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {post.relatedFaqs && post.relatedFaqs.length > 0 && (
                <div className="mt-16 pt-12 border-t border-slate-100">
                  <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tight">Preguntas frecuentes relacionadas</h3>
                  <div className="space-y-4">
                    {post.relatedFaqs.map((faq, i) => (
                      <FAQAccordion key={i} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>
              )}

              <div className="my-16 p-8 md:p-12 bg-blue-50 border border-blue-100 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 shadow-sm">
                <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
                  <Zap size={40} aria-hidden="true" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">¿Quieres aplicar esto a tu negocio?</h3>
                  <p className="text-slate-600 font-medium mb-6">Analizamos tu presencia en Google gratis y sin compromiso.</p>
                  <Button to="/contacto" variant="primary">Solicitar Auditoría Gratuita</Button>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-3 space-y-12">
              <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
                <h4 className="text-xl font-bold mb-4 tracking-tight">Soluciones Reales</h4>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Webs rápidas y SEO local para negocios que quieren crecer de verdad.
                </p>
                <div className="space-y-4">
                  <Link to="/servicios-diseno-web-seo" className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group">
                    <span className="font-bold text-sm">Ver Servicios</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                  <Link to="/tarifas-diseno-web" className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/10 group">
                    <span className="font-bold text-sm">Ver Tarifas</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-8">
                <h4 className="font-black text-slate-900 mb-6 uppercase tracking-widest text-xs">Más en el blog</h4>
                <div className="space-y-6">
                  {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                    <Link key={p.id} to={`/blog-marketing-digital/${p.id}`} className="group block">
                      <div className="aspect-video rounded-xl overflow-hidden mb-3">
                        <img 
                          src={p.image} 
                          alt={p.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
                          width="400" 
                          height="225" 
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <h5 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight line-clamp-2">
                        {p.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </Section>
      </article>

      <Section className="bg-slate-50 py-24 border-t border-slate-200 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 leading-tight tracking-tight">
          No dejes que tu competencia<br />se lleve a tus clientes.
        </h2>
        <Button to="/contacto" variant="primary" className="px-12 py-6 text-xl">
          Quiero Resultados Ahora
        </Button>
      </Section>
    </main>
  );
};

export default BlogDetail;