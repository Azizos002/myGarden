import { getTranslations } from 'next-intl/server';
import { Card } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { buildMetadata } from '@/lib/seo';
import { type Locale } from '@/lib/constants';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });
  return buildMetadata({
    locale: params.locale,
    title: t('contactTitle'),
    description: t('contactDescription'),
    path: '/contact'
  });
}

export default async function ContactPage({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'contact' });

  return (
    <div className="container-pad space-y-10 py-12">
      <div className="space-y-3">
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-foreground/70">{t('subtitle')}</p>
      </div>
      <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
        <Card className="p-6">
          <ContactForm />
        </Card>
        <Card className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">{t('infoTitle')}</h2>
          <div className="text-sm text-foreground/70 space-y-2">
            <p>{t('address')}</p>
            <p>{t('phone')}</p>
            <p>{t('hours')}</p>
          </div>
          <div className="h-48 rounded-xl border border-border bg-muted/30 flex items-center justify-center text-sm text-foreground/60">
            {t('mapPlaceholder')}
          </div>
        </Card>
      </div>
    </div>
  );
}
