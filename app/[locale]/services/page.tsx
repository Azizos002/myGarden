import { getTranslations } from 'next-intl/server';
import { Wrench, Truck, Droplets, Leaf } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { buildMetadata } from '@/lib/seo';
import { type Locale } from '@/lib/constants';

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

  return (
    <div className="container-pad space-y-10 py-12">
      <div className="space-y-3">
        <h1 className="section-title">{t('title')}</h1>
        <p className="text-foreground/70">{t('subtitle')}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[{ icon: Wrench, key: 'install' }, { icon: Truck, key: 'delivery' }, { icon: Leaf, key: 'maintenance' }, { icon: Droplets, key: 'irrigation' }].map(
          (item) => (
            <Card key={item.key} className="p-6 space-y-3">
              <item.icon className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">{t(`${item.key}.title`)}</h3>
              <p className="text-sm text-foreground/70">{t(`${item.key}.text`)}</p>
            </Card>
          )
        )}
      </div>
      <Card className="p-8">
        <h2 className="text-2xl font-semibold">{t('processTitle')}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {t.raw('process').map((step: any) => (
            <div key={step.title} className="space-y-2">
              <p className="font-semibold">{step.title}</p>
              <p className="text-sm text-foreground/70">{step.text}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
