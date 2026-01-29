import { getRequestConfig } from 'next-intl/server';
import { locales } from '@/lib/i18n';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) {
    throw new Error('Unsupported locale');
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
