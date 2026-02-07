import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';
import { type Locale } from '@/lib/constants';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'compareGazon' });
  return buildMetadata({
    locale: params.locale,
    title: t('metaTitle'),
    description: t('metaDescription'),
    path: '/compare-gazon'
  });
}

export default async function CompareGazonPage({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'compareGazon' });

  const columns = ['bermuda', 'paspalum', 'kikuyu'] as const;
  const rows = t.raw('tableRows') as { key: string; label: string }[];

  return (
    <div className="container-pad space-y-12 py-12">
      <section className="space-y-4">
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-foreground/70">{t('subtitle')}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href={`/${params.locale}/contact`}>{t('ctaContact')}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/catalog`}>{t('ctaCatalog')}</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{t('tableTitle')}</h2>
        <div className="hidden overflow-hidden rounded-2xl border border-border md:block">
          <div className="grid grid-cols-4 bg-muted/30 text-sm font-semibold">
            <div className="p-4" />
            {columns.map((col) => (
              <div key={col} className="p-4">
                {t(`columns.${col}`)}
              </div>
            ))}
          </div>
          {rows.map((row) => (
            <div key={row.key} className="grid grid-cols-4 border-t border-border text-sm">
              <div className="p-4 font-medium text-foreground/80">{row.label}</div>
              {columns.map((col) => (
                <div key={col} className="p-4">
                  <span className="inline-flex rounded-full border border-border px-3 py-1 text-xs">
                    {t(`table.${col}.${row.key}`)}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="grid gap-4 md:hidden">
          {columns.map((col) => (
            <Card key={col} className="p-5 space-y-3">
              <h3 className="text-lg font-semibold">{t(`columns.${col}`)}</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                {rows.map((row) => (
                  <li key={row.key} className="flex items-center justify-between">
                    <span>{row.label}</span>
                    <span className="rounded-full border border-border px-2 py-0.5 text-xs">
                      {t(`table.${col}.${row.key}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">{t('recommendTitle')}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {columns.map((col) => (
            <Card key={col} className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">{t(`recommend.${col}.title`)}</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                {t.raw(`recommend.${col}.points`).map((item: string) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">{t('mythsTitle')}</h2>
        <p className="text-sm text-foreground/70">{t('mythsText')}</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">{t('finalTitle')}</h2>
        <p className="text-sm text-foreground/70">{t('finalText')}</p>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href={`/${params.locale}/contact`}>{t('ctaContact')}</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href={`/${params.locale}/catalog`}>{t('ctaCatalog')}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
