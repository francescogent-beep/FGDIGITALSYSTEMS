import React from 'react';
import { Section, Breadcrumbs } from '../components/UI';
import { SEO } from '../components/SEO';
import { METADATA } from '../seo/metadata';

const PrivacyPolicy: React.FC = () => {
  return (
    <main className="bg-white">
      <SEO {...METADATA.privacyPolicy} />
      <Section className="pt-12 md:pt-24 pb-8 bg-slate-50">
        <Breadcrumbs items={[{ label: 'Política de Privacidad' }]} />
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Política de Privacidad</h1>
        <p className="text-slate-500 font-medium italic">Última actualización: Marzo 2024</p>
      </Section>

      <Section className="py-12 md:py-24">
        <div className="max-w-3xl prose prose-slate prose-lg lg:prose-xl prose-headings:font-black prose-headings:text-slate-900 prose-strong:text-slate-900">
          <h2>Responsable del tratamiento</h2>
          <p>
            <strong>FG Digital Systems</strong><br />
            Dirección: Calle Rey Don Pedro I, 9 - 30009 Murcia (España)<br />
            Email: <a href="mailto:info@fgdigitalsystems.com">info@fgdigitalsystems.com</a>
          </p>

          <h2>Datos que se recogen</h2>
          <p>A través de este sitio web se pueden recoger los siguientes datos personales:</p>
          <ul>
            <li>Nombre</li>
            <li>Email</li>
            <li>Teléfono</li>
            <li>Información enviada mediante formularios de contacto</li>
          </ul>
          <p>Estos datos se recogen únicamente cuando el usuario los facilita de forma voluntaria.</p>

          <h2>Finalidad del tratamiento</h2>
          <p>Los datos personales se utilizan para:</p>
          <ul>
            <li>Responder consultas y solicitudes de información</li>
            <li>Gestionar el contacto comercial</li>
            <li>Enviar información relacionada con los servicios solicitados</li>
          </ul>
          <p>No se utilizarán para fines distintos sin consentimiento previo.</p>

          <h2>Base legal</h2>
          <p>La base legal para el tratamiento de los datos es el consentimiento del usuario, otorgado al enviar el formulario correspondiente.</p>

          <h2>Conservación de los datos</h2>
          <p>Los datos se conservarán únicamente durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados o mientras exista una relación comercial.</p>

          <h2>Cesión de datos a terceros</h2>
          <p>No se cederán datos personales a terceros, salvo obligación legal o cuando sea necesario para la prestación del servicio (por ejemplo, herramientas de gestión o automatización).</p>

          <h2>Derechos del usuario</h2>
          <p>El usuario puede ejercer en cualquier momento los siguientes derechos:</p>
          <ul>
            <li>Acceso, Rectificación, Supresión, Oposición, Limitación del tratamiento, Portabilidad de los datos.</li>
          </ul>
          <p>Para ejercer estos derechos, puede escribir a: 📧 <a href="mailto:info@fgdigitalsystems.com">info@fgdigitalsystems.com</a></p>

          <h2>Medidas de seguridad</h2>
          <p>FG Digital Systems aplica medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales y evitar accesos no autorizados.</p>
        </div>
      </Section>
    </main>
  );
};

export default PrivacyPolicy;