import { getTranslations } from 'next-intl/server';
import Script from 'next/script';
import { CatalogClient } from '@/components/catalog-client';
import { buildMetadata } from '@/lib/seo';
import { products } from '@/lib/products';
import { SITE_URL, type Locale } from '@/lib/constants';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });
  return buildMetadata({
    locale: params.locale,
    title: t('catalogTitle'),
    description: t('catalogDescription'),
    path: '/catalog'
  });
}

export default async function CatalogPage({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'catalog' });
  const tProducts = await getTranslations({ locale: params.locale, namespace: 'products' });

  const productLd = products.map((product) => ({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tProducts(product.nameKey),
    description: tProducts(product.shortKey),
    image: product.images,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'TND',
      price: product.priceValue ?? 0,
      availability: product.stockStatus === 'in_stock' ? 'https://schema.org/InStock' : 'https://schema.org/LimitedAvailability',
      url: `${SITE_URL}/${params.locale}/catalog#${product.id}`
    }
  }));

  return (
    <div className="container-pad space-y-10 py-12">
      <div className="space-y-3">
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-foreground/70">{t('subtitle')}</p>
      </div>
      <CatalogClient />
      <Script id="ld-products" type="application/ld+json">
        {JSON.stringify(productLd)}
      </Script>
    </div>
  );
}
