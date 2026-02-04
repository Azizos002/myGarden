'use client';

import { MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { WHATSAPP_NUMBER } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function WhatsAppFloat() {
  const t = useTranslations('whatsapp');
  const message = encodeURIComponent(
    t('prefillService', { service: t('defaultService') })
  );

  return (
    <Button
      asChild
      className="fixed bottom-6 right-6 z-50 rounded-full shadow-soft"
      aria-label="WhatsApp"
    >
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`}
        target="_blank"
        rel="noreferrer"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">{t('cta')}</span>
      </a>
    </Button>
  );
}
