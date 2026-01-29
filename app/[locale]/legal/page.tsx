import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '@/lib/seo';
import { type Locale } from '@/lib/constants';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });
  return buildMetadata({
    locale: params.locale,
    title: t('legalTitle'),
    description: t('legalDescription'),
    path: '/legal'
  });
}

export default async function LegalPage({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'legal' });

  return (
    <div className="container-pad space-y-6 py-12">
      <h1 className="section-title">{t('title')}</h1>
      <div className="space-y-4 text-sm text-foreground/70">
        {t.raw('sections').map((section: any) => (
          <div key={section.title} className="space-y-2">
            <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
            <p>{section.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
