'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Facebook, Instagram, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ar-TN';

  return (
    <footer className="border-t border-border py-12">
      <div className="container-pad grid gap-8 lg:grid-cols-[2fr,1fr,1fr]">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold">VerdaTun</h3>
          <p className="text-sm text-foreground/70">{t('description')}</p>
          <div className="flex items-center gap-3 text-foreground/70">
            <Phone className="h-4 w-4" />
            <span>{t('phone')}</span>
          </div>
          <div className="flex items-center gap-3 text-foreground/70">
            <MapPin className="h-4 w-4" />
            <span>{t('address')}</span>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">{t('links')}</p>
          <ul className="space-y-2 text-foreground/70">
            <li>
              <Link href={`/${locale}/catalog`} className="hover:text-primary">
                {t('catalog')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/services`} className="hover:text-primary">
                {t('services')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/projects`} className="hover:text-primary">
                {t('projects')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/legal`} className="hover:text-primary">
                {t('legal')}
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <p className="font-semibold">{t('social')}</p>
          <div className="flex items-center gap-3">
            <a href="#" className="rounded-full border border-border p-2 hover:bg-muted" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="rounded-full border border-border p-2 hover:bg-muted" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <p className="text-xs text-foreground/50">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
