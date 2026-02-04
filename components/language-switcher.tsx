'use client';

import { Globe } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { locales, localeLabels } from '@/lib/i18n';

export function LanguageSwitcher() {
  const pathname = usePathname();

  const handleSwitch = (locale: string) => {
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) return;
    segments[0] = locale;
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000`;
    window.location.href = `/${segments.join('/')}`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Switch language">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((locale) => (
          <DropdownMenuItem key={locale} onClick={() => handleSwitch(locale)}>
            {localeLabels[locale]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
