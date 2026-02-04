import { getTranslations } from 'next-intl/server';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { buildMetadata } from '@/lib/seo';
import { WHATSAPP_NUMBER, type Locale } from '@/lib/constants';

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
  const tWhatsApp = await getTranslations({ locale: params.locale, namespace: 'whatsapp' });
  const message = encodeURIComponent(
    tWhatsApp('prefillService', { service: tWhatsApp('defaultService') })
  );

  return (
    <div className="container-pad space-y-10 py-12">
      <div className="space-y-3">
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-foreground/70">{t('subtitle')}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {t.raw('plans').map((plan: any) => (
          <Card key={plan.title} className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-3xl font-semibold text-primary">{plan.price}</p>
            <ul className="space-y-2 text-sm text-foreground/70">
              {plan.features.map((feature: string) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <Button asChild variant="outline">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`}
                target="_blank"
                rel="noreferrer"
              >
                {t('cta')}
              </a>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
