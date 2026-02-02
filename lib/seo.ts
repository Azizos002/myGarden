import type { Metadata } from 'next';
import { SITE_NAME, SITE_URL, type Locale } from './constants';

const ogImage = `${SITE_URL}/og.svg`;

export const buildMetadata = ({
  locale,
  title,
  description,
  path
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
}): Metadata => {
  const url = `${SITE_URL}/${locale}${path}`;
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
      languages: {
        'ar-TN': `${SITE_URL}/ar-TN${path}`,
        fr: `${SITE_URL}/fr${path}`,
        en: `${SITE_URL}/en${path}`,
        'x-default': `${SITE_URL}/ar-TN${path}`
      }
    },
    openGraph: {
      type: 'website',
      locale,
      url,
      title: `${title} | ${SITE_NAME}`,
      description,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: SITE_NAME
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage]
    },
    keywords: [
      'gazon naturel',
      'gazon artificiel',
      'plantes',
      'jardinage',
      'Tunisie',
      'paysagisme'
    ]
  };
};
