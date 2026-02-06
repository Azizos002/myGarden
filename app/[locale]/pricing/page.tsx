import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';
import { type Locale } from '@/lib/constants';
import { products } from '@/lib/products';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });
  return buildMetadata({
    locale: params.locale,
    title: t('pricingTitle'),
    description: t('pricingDescription'),
    path: '/pricing'
  });
}

export default async function PricingPage({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'pricing' });
  const tProducts = await getTranslations({ locale: params.locale, namespace: 'products' });

  const natural = products.filter((product) => product.category === 'natural');
  const artificial = products.filter((product) => product.category === 'artificial');
  const plants = products.filter((product) => product.category === 'plants').slice(0, 6);

  const naturalMap: Record<string, string> = {
    'natural-bermuda': 'bermuda',
    'natural-kikuyu': 'kikuyu',
    'natural-paspalum': 'paspalum'
  };

  const artificialMap: Record<string, string> = {
    'artificial-15mm': 'mm15',
    'artificial-20mm': 'mm20',
    'artificial-30mm': 'mm30',
    'artificial-40mm': 'mm40'
  };

  const plantMap: Record<string, string> = {
    'plants-zaitoun': 'zaitoun'
  };

  return (
    <div className="container-pad space-y-10 py-12">
      <div className="space-y-3">
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-foreground/70">{t('subtitle')}</p>
      </div>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{t('chooseTitle')}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {['natural', 'artificial'].map((key) => (
            <Card key={key} className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{t(`choose.${key}.title`)}</h3>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground/80">{t('strengths')}</p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {t.raw(`choose.${key}.strengths`).map((item: string) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground/80">{t('notes')}</p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {t.raw(`choose.${key}.notes`).map((item: string) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{t('naturalCompareTitle')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {natural.map((product) => {
            const key = naturalMap[product.id];
            if (!key) return null;
            return (
              <Card key={product.id} className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">{tProducts(product.nameKey)}</h3>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground/80">{t('idealFor')}</p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {t.raw(`naturalDetails.${key}.idealFor`).map((item: string) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground/80">{t('notes')}</p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {t.raw(`naturalDetails.${key}.notes`).map((item: string) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-foreground/60">{t(`naturalDetails.${key}.compare`)}</p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{t('artificialCompareTitle')}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {artificial.map((product) => {
            const key = artificialMap[product.id];
            if (!key) return null;
            return (
              <Card key={product.id} className="p-6 space-y-3">
                <h3 className="text-lg font-semibold">{tProducts(product.nameKey)}</h3>
                <p className="text-sm text-foreground/70">
                  {t('comfort')}: {t(`artificialDetails.${key}.comfort`)}
                </p>
                <p className="text-sm text-foreground/70">
                  {t('durability')}: {t(`artificialDetails.${key}.durability`)}
                </p>
                <p className="text-sm text-foreground/70">
                  {t('usage')}: {t(`artificialDetails.${key}.usage`)}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{t('plantsTitle')}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plants.map((product) => {
            const key = plantMap[product.id];
            if (!key) return null;
            return (
              <Card key={product.id} className="p-6 space-y-3">
                <h3 className="text-lg font-semibold">{tProducts(product.nameKey)}</h3>
                <p className="text-sm text-foreground/70">{t(`plantDetails.${key}.where`)}</p>
                <p className="text-sm text-foreground/70">
                  {t('care')}: {t(`plantDetails.${key}.care`)}
                </p>
              </Card>
            );
          })}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button asChild>
          <Link href={`/${params.locale}/catalog`}>{t('ctaCatalog')}</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={`/${params.locale}/contact`}>{t('ctaContact')}</Link>
        </Button>
      </div>
    </div>
  );
}
