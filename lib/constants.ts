export const SITE_NAME = 'VerdaTun';
export const SITE_URL = 'https://verdatun.tn';
export const WHATSAPP_NUMBER = '+216XXXXXXXX';

export const LOCALES = ['ar-TN', 'fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const ROUTES = [
  '',
  '/catalog',
  '/services',
  '/projects',
  '/pricing',
  '/contact',
  '/legal'
];

export const DEFAULT_LOCALE: Locale = 'ar-TN';
