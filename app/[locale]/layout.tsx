import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { getMessages, getTranslations } from 'next-intl/server';
import Script from 'next/script';
import Providers from '@/components/providers';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ContactFloat } from '@/components/contact-float';
import { locales, isRTL } from '@/lib/i18n';
import { SITE_URL, WHATSAPP_NUMBER, type Locale } from '@/lib/constants';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: 'seo' });
  const businessLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'VerdaTun',
    url: `${SITE_URL}/${locale}`,
    telephone: WHATSAPP_NUMBER,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tunis',
      addressCountry: 'TN'
    },
    openingHours: 'Mo-Sa 08:00-19:00',
    description: t('homeDescription')
  };

  return (
    <Providers messages={messages} locale={locale}>
      <div className={isRTL(locale as Locale) ? 'font-arabic' : 'font-sans'}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ContactFloat />
        <Script id="ld-local-business" type="application/ld+json">
          {JSON.stringify(businessLd)}
        </Script>
      </div>
    </Providers>
  );
}
