import React from 'react';
import { Section, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA } from '../seo/metadata';

const LegalNotice: React.FC = () => {
  return (
    <main className="bg-white">
      <SEO {...METADATA.legalNotice} />
      <Section className="pt-12 md:pt-24 pb-8 bg-slate-50">
        <Breadcrumbs items={[{ label: 'Aviso Legal' }]} />
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Aviso Legal</h1>
        <p className="text-slate-500 font-medium italic">Última actualización: Marzo 2024</p>
      </Section>

      <Section className="py-12 md:py-24">
        <div className="max-w-3xl prose prose-slate prose-lg lg:prose-xl prose-headings:font-black prose-headings:text-slate-900 prose-strong:text-slate-900">
          <h2>Titular del sitio web</h2>
          <p>
            <strong>FG Digital Systems</strong><br />
            Actividad: Servicios digitales, diseño web, SEO y sistemas de venta<br />
            Correo electrónico de contacto: <a href="mailto:contacto@fgdigitalsystems.com">contacto@fgdigitalsystems.com</a><br />
            Sitio web: <a href="https://fgdigitalsystems.com">https://fgdigitalsystems.com</a>
          </p>

          <h2>Objeto</h2>
          <p>
            El presente sitio web tiene como finalidad informar sobre los servicios ofrecidos por FG Digital Systems, así como permitir el contacto con potenciales clientes.
            El acceso y uso del sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones.
          </p>

          <h2>Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos de este sitio web (textos, imágenes, diseños, logotipos, código, etc.) son propiedad de FG Digital Systems o cuentan con licencia para su uso, y están protegidos por la normativa de propiedad intelectual e industrial.
            Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
          </p>

          <h2>Responsabilidad</h2>
          <p>
            FG Digital Systems no se responsabiliza del mal uso que se realice de los contenidos del sitio web ni de los daños que puedan derivarse del acceso o uso de la información publicada.
            Tampoco se garantiza la ausencia de errores técnicos, interrupciones o virus, aunque se adoptan las medidas necesarias para evitarlos.
          </p>

          <h2>Enlaces externos</h2>
          <p>
            Este sitio web puede contener enlaces a páginas de terceros.
            FG Digital Systems no se responsabiliza del contenido, políticas o prácticas de dichos sitios externos.
          </p>

          <h2>Legislación aplicable</h2>
          <p>
            La relación entre el usuario y FG Digital Systems se regirá por la normativa española vigente.
            Cualquier controversia se someterá a los juzgados y tribunales correspondientes en España.
          </p>
        </div>
      </Section>
    </main>
  );
};

export default LegalNotice;