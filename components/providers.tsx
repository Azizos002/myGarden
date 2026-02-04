'use client';

import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';

export default function Providers({
  children,
  messages,
  locale
}: {
  children: ReactNode;
  messages: Record<string, any>;
  locale: string;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
