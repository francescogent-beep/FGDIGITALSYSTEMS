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
    title: `Web para Negocios Locales en ${cityName} | Captación`,
    description: `Especialistas en negocios de servicios en ${cityName}. Si eres autónomo o PYME, necesitas una web que convierta visitas en dinero.`,
    alternates: {
      canonical: `${CANONICAL_DOMAIN}/web-negocios/${params.city}`,
    },
  };
}

export default function Page({ params }: { params: { city: string } }) {
  return <LocationLanding type="leads" city={params.city} />;
}
