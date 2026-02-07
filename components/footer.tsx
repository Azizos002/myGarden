'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Facebook, Instagram, Phone, MapPin, Share2 } from 'lucide-react';
import { SITE_URL } from '@/lib/constants';

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
    <path
      fill="currentColor"
      d="M17.5 3c.4 1.6 1.7 2.9 3.3 3.2v3c-1.6-.1-3-.6-4.3-1.5v6.9c0 3.3-2.7 6.4-6.4 6.4-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5c.4 0 .9.1 1.3.2v3.2c-.4-.1-.8-.2-1.3-.2-1.7 0-3.1 1.4-3.1 3.1 0 1.8 1.4 3.2 3.2 3.2 1.8 0 3.3-1.4 3.3-3.3V3h2.7Z"
    />
  </svg>
);

export function Footer() {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const locale = pathname.split('/')[1] || 'ar-TN';
  const shareUrl = `${SITE_URL}${pathname}`;

  return (
    <footer className="border-t border-border py-12">
      <div className="container-pad grid gap-8 lg:grid-cols-[2fr,1fr,1fr]">
        <div className="space-y-4">
          <Image src="/logo.svg" alt="VerdaTun" width={180} height={60} className="h-14 w-auto" />
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
              <Link href={`/${locale}/review`} className="hover:text-primary">
                {t('review')}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/compare-gazon`} className="hover:text-primary">
                {t('compare')}
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
            <a
              href="https://www.instagram.com/verdatun_/"
              className="rounded-full border border-border p-2 hover:bg-muted"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61587396870346"
              className="rounded-full border border-border p-2 hover:bg-muted"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@verdatun_"
              className="rounded-full border border-border p-2 hover:bg-muted"
              aria-label="TikTok"
              target="_blank"
              rel="noreferrer"
            >
              <TikTokIcon />
            </a>
          </div>
          <div className="space-y-2 pt-2">
            <p className="flex items-center gap-2 text-xs font-semibold text-foreground/70">
              <Share2 className="h-3.5 w-3.5" />
              {t('share')}
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-foreground/70">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                Facebook
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                LinkedIn
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                X
              </a>
            </div>
          </div>
          <p className="text-xs text-foreground/50">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
