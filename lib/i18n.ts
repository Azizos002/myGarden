import { LOCALES, DEFAULT_LOCALE, type Locale } from './constants';

export const locales = LOCALES;
export const defaultLocale = DEFAULT_LOCALE;

export const localeLabels: Record<Locale, string> = {
  'ar-TN': 'العربية',
  fr: 'Français',
  en: 'English'
};

export const isRTL = (locale: Locale) => locale === 'ar-TN';
