'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Menu, MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { WHATSAPP_NUMBER } from '@/lib/constants';

const navKeys = [
  { key: 'home', href: '' },
  { key: 'catalog', href: '/catalog' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'pricing', href: '/pricing' },
  { key: 'contact', href: '/contact' }
];

export function Navbar() {
  const t = useTranslations('nav');
  const tWhatsApp = useTranslations('whatsapp');
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    handler();
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const message = encodeURIComponent(
    tWhatsApp('prefillService', { service: tWhatsApp('defaultService') })
  );

  return (
    <header
      className={`sticky top-0 z-40 border-b border-transparent ${scrolled ? "glassy border-border" : ""}`}
    >
      <div className="container-pad flex h-16 items-center justify-between gap-4">
        <Link
          href={pathname.split("/").slice(0, 2).join("/") || "/"}
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.svg"
            alt="VerdaTun"
            width={120}
            height={40}
            priority
            className="h-10 w-auto"
          />
          <h1 className="text-lg font-semibold">VerdaTun</h1>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navKeys.map((item) => (
            <Link
              key={item.key}
              href={`/${pathname.split("/")[1]}${item.href}`}
              className="text-sm font-medium text-foreground/80 transition hover:text-primary"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button asChild className="hidden lg:inline-flex">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${message}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              {tWhatsApp("cta")}
            </a>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            aria-label="Menu"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
      {menuOpen && (
        <div className="border-t border-border bg-surface lg:hidden">
          <div className="container-pad flex flex-col gap-4 py-4 text-sm">
            {navKeys.map((item) => (
              <Link
                key={item.key}
                href={`/${pathname.split("/")[1]}${item.href}`}
                className="font-medium text-foreground/80"
                onClick={() => setMenuOpen(false)}
              >
                {t(item.key)}
              </Link>
            ))}
            <Button asChild>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER.replace("+", "")}?text=${message}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                {tWhatsApp("cta")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
