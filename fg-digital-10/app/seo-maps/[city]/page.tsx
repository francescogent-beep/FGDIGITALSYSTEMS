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
    title: `SEO Local y Google Maps en ${cityName} | Top 3`,
    description: `Hacemos que tu negocio aparezca el primero cuando tus vecinos de ${cityName} busquen tus servicios. Sin pagar anuncios.`,
    alternates: {
      canonical: `${CANONICAL_DOMAIN}/seo-maps/${params.city}`,
    },
  };
}

export default function Page({ params }: { params: { city: string } }) {
  return <LocationLanding type="maps" city={params.city} />;
}
