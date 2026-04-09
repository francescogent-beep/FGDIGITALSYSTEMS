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
    title: `Posicionamiento Google en ${cityName} | SEO Real`,
    description: `Si no estás en la primera página, no existes. Ayudamos a las pymes de ${cityName} a superar a su competencia y atraer tráfico real.`,
    alternates: {
      canonical: `${CANONICAL_DOMAIN}/posicionamiento-google/${params.city}`,
    },
  };
}

export default function Page({ params }: { params: { city: string } }) {
  return <LocationLanding type="seo" city={params.city} />;
}
