import LocationLanding from '@/components/LocationLanding';
import { CANONICAL_DOMAIN } from '@/seo/metadata';
import type { Metadata } from 'next';

const formatCityName = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
  const cityName = formatCityName(params.city);
  return {
    title: `Diseño Web en ${cityName} | Webs que Venden`,
    description: `No diseñamos "folletos digitales" que nadie mira. Creamos máquinas de captación de clientes para negocios en ${cityName} con precios cerrados.`,
    alternates: {
      canonical: `${CANONICAL_DOMAIN}/diseno-web/${params.city}`,
    },
  };
}

export default function Page({ params }: { params: { city: string } }) {
  return <LocationLanding type="design" city={params.city} />;
}
