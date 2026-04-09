import ProfessionLanding, { PROFESSIONS } from '@/components/ProfessionLanding';
import { CANONICAL_DOMAIN } from '@/seo/metadata';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

const formatCityName = (slug: string) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export async function generateMetadata({ params }: { params: { city: string; professionSlug: string } }): Promise<Metadata> {
  const config = PROFESSIONS[params.professionSlug];
  if (!config) return {};

  const cityName = formatCityName(params.city);
  return {
    title: `Web + SEO para ${config.name} en ${cityName} | FG Digital Systems`,
    description: `Expertos en diseño web y captación de ${config.clientsName} para ${config.niche} en ${cityName}. Más visibilidad en Google Maps y reservas directas.`,
    alternates: {
      canonical: `${CANONICAL_DOMAIN}/${params.city}/web-seo/${params.professionSlug}`,
    },
  };
}

export default function Page({ params }: { params: { city: string; professionSlug: string } }) {
  const config = PROFESSIONS[params.professionSlug];
  if (!config) {
    notFound();
  }

  return <ProfessionLanding city={params.city} professionSlug={params.professionSlug} />;
}
