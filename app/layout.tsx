import './globals.css';
import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import { Inter, Cairo } from 'next/font/google';
import { defaultLocale, isRTL, type Locale } from '@/lib/i18n';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  const headerList = headers();
  const locale = (headerList.get('x-next-intl-locale') ?? defaultLocale) as Locale;
  const dir = isRTL(locale) ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${inter.variable} ${cairo.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
