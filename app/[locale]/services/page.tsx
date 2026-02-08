import { getTranslations } from 'next-intl/server';
import Script from 'next/script';
import { ServicesCard } from '@/components/services-card';
import { buildMetadata } from '@/lib/seo';
import { SITE_URL, type Locale } from '@/lib/constants';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });
  return buildMetadata({
    locale: params.locale,
    title: t('servicesTitle'),
    description: t('servicesDescription'),
    path: '/services'
  });
}

export default async function ServicesPage({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'services' });
  const tSeo = await getTranslations({ locale: params.locale, namespace: 'seo' });

  const cards = [
    {
      key: 'gazon',
      image: '/images/services/naturel/gazon.jpg'
    },
    {
      key: 'plants',
      image: '/images/services/plantes/mixte.jpg'
    },
    {
      key: 'maintenance',
      image: '/images/produits/entretien/3.jpg'
    }
  ];

  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: tSeo('servicesTitle'),
    itemListElement: cards.map((card, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: t(`${card.key}.title`),
      description: t(`${card.key}.description`),
      areaServed: 'Tunisia',
      provider: {
        '@type': 'LocalBusiness',
        name: 'VerdaTun',
        url: `${SITE_URL}/${params.locale}/services`
      }
    }))
  };

  return (
    <div className="container-pad space-y-10 py-12">
      <div className="space-y-3">
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-foreground/70">{t('subtitle')}</p>
      </div>
      <div className="space-y-8">
        {cards.map((card) => (
          <ServicesCard
            key={card.key}
            title={t(`${card.key}.title`)}
            description={t(`${card.key}.description`)}
            bullets={t.raw(`${card.key}.bullets`)}
            image={card.image}
            whatsappLabel={t('whatsapp')}
            whatsappPrefill={t('whatsappPrefill', { service: t(`${card.key}.title`) })}
            messengerLabel={t('messenger')}
            helper={t('helper')}
            imageFallback={t('imageFallback')}
          />
        ))}
      </div>
      <Script id="ld-services" type="application/ld+json">
        {JSON.stringify(serviceLd)}
      </Script>
    </div>
  );
}
