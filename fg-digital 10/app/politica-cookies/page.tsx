import React from 'react';
import { Section, Breadcrumbs } from '@/components/UI';
import { METADATA } from '@/seo/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...METADATA.cookiePolicy,
};

const CookiePolicy: React.FC = () => {
  return (
    <main className="bg-white">
      <Section className="pt-12 md:pt-24 pb-8 bg-slate-50">
        <Breadcrumbs items={[{ label: 'Política de Cookies' }]} />
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Política de Cookies</h1>
        <p className="text-slate-500 font-medium italic">Última actualización: Marzo 2024</p>
      </Section>

      <Section className="py-12 md:py-24">
        <div className="max-w-7xl prose prose-slate prose-lg lg:prose-xl prose-headings:font-black prose-headings:text-slate-900 prose-strong:text-slate-900">
          <h2>¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario para mejorar la experiencia de navegación y analizar el uso del sitio web.
          </p>

          <h2>Cookies utilizadas</h2>
          <p>Este sitio web puede utilizar:</p>
          <ul>
            <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio y la navegación básica.</li>
            <li><strong>Cookies de análisis:</strong> Por ejemplo, Google Analytics, para entender cómo los usuarios interactúan con la web (totalmente anónimo).</li>
          </ul>
          <p>En ningún caso se utilizan cookies para recopilar información sensible sin consentimiento.</p>

          <h2>Gestión de cookies</h2>
          <p>
            El usuario puede aceptar, rechazar o configurar el uso de cookies mediante el banner de cookies o a través de la configuración de su navegador.
          </p>

          <h2>Desactivación de cookies</h2>
          <p>
            El usuario puede eliminar o bloquear las cookies desde su navegador. 
            La desactivación de cookies puede afectar al correcto funcionamiento de ciertas partes del sitio web.
          </p>

          <h2>Actualizaciones</h2>
          <p>
            Esta política de cookies puede actualizarse en función de cambios legales o técnicos. Se recomienda revisarla periódicamente para estar informado.
          </p>
        </div>
      </Section>
    </main>
  );
};

export default CookiePolicy;
