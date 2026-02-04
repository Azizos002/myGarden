export const SITE_NAME = 'VerdaTun';
export const SITE_URL = 'https://verdatun.tn';
export const WHATSAPP_PHONE = '+21652576552';
export const MESSENGER_HANDLE = 'https://www.facebook.com/profile.php?id=61587396870346';
export const WHATSAPP_NUMBER = WHATSAPP_PHONE;

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
