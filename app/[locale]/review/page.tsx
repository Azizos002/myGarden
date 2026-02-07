import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';
import { type Locale } from '@/lib/constants';
import { products } from '@/lib/products';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'review' });
  return buildMetadata({
    locale: params.locale,
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/review'
  });
}

export default async function ReviewPage({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'review' });
  const tProducts = await getTranslations({ locale: params.locale, namespace: 'products' });
  const plants = products.filter((product) => product.category === 'plants').slice(0, 6);

  const naturalTeaser = [
    { key: 'bermuda' },
    { key: 'paspalum' },
    { key: 'kikuyu' }
  ];

  const plantTips = t.raw('plants');

  return (
    <div className="container-pad space-y-12 py-12">
      <section className="space-y-4">
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-foreground/70">{t('subtitle')}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href={`/${params.locale}/catalog`}>{t('ctaCatalog')}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/contact`}>{t('ctaContact')}</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{t('chooseTitle')}</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {['natural', 'artificial'].map((key) => (
            <Card key={key} className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{t(`choose.${key}.title`)}</h3>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground/80">{t('advantages')}</p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {t.raw(`choose.${key}.advantages`).map((item: string) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-foreground/80">{t('bestFor')}</p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  {t.raw(`choose.${key}.bestFor`).map((item: string) => (
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
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-2xl font-semibold">{t('naturalTeaserTitle')}</h2>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/compare-gazon`}>{t('naturalTeaserCta')}</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {naturalTeaser.map((item) => (
            <Card key={item.key} className="p-6 space-y-4">
              <h3 className="text-lg font-semibold">{t(`naturalTeaser.${item.key}.title`)}</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                {t.raw(`naturalTeaser.${item.key}.bestFor`).map((entry: string) => (
                  <li key={entry}>• {entry}</li>
                ))}
              </ul>
              <p className="text-sm text-foreground/70">
                {t('maintenance')}: {t(`naturalTeaser.${item.key}.maintenance`)}
              </p>
              <p className="text-sm text-foreground/70">
                {t('sun')}: {t(`naturalTeaser.${item.key}.sun`)}
              </p>
              <p className="text-xs text-foreground/60">{t(`naturalTeaser.${item.key}.keyPoint`)}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{t('plantsTitle')}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plantTips.map((plant: any) => (
            <Card key={plant.key} className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                {plant.key === 'catalog' && plants[0] ? tProducts(plants[0].nameKey) : plant.title}
              </h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                {plant.positives.map((item: string) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <p className="text-sm text-foreground/70">{plant.where}</p>
              <p className="text-sm text-foreground/70">{plant.care}</p>
              <p className="text-xs text-foreground/60">{plant.note}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">{t('checklistTitle')}</h2>
        <ul className="grid gap-3 text-sm text-foreground/70 md:grid-cols-2">
          {t.raw('checklist').map((item: string) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <p className="text-sm text-foreground/70">{t('checklistCta')}</p>
      </section>
    </div>
  );
}
