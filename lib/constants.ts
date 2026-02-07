export const SITE_NAME = 'VerdaTun';
export const SITE_URL = 'https://verdatun.tn';
export const WHATSAPP_PHONE = '+216XXXXXXXX';
export const MESSENGER_HANDLE = 'verdatun';
export const MESSENGER_URL = 'https://m.me/verdatun_';
export const FACEBOOK_PAGE_URL = 'https://www.facebook.com/profile.php?id=61587396870346';
export const WHATSAPP_NUMBER = WHATSAPP_PHONE;

export const LOCALES = ['ar-TN', 'fr', 'en'] as const;
export type Locale = (typeof LOCALES)[number];

export const ROUTES = [
  '',
  '/catalog',
  '/review',
  '/compare-gazon',
  '/services',
  '/projects',
  '/pricing',
  '/contact',
  '/legal'
];

export const DEFAULT_LOCALE: Locale = 'ar-TN';
