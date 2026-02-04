'use client';

import { MessageCircle, MessagesSquare } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { MESSENGER_URL, WHATSAPP_NUMBER } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export function WhatsAppFloat() {
  const t = useTranslations('whatsapp');
  const tContact = useTranslations('contactWidget');
  const message = encodeURIComponent(
    t('prefillService', { service: t('defaultService') })
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <Button asChild className="rounded-full shadow-soft" aria-label="WhatsApp">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">{t('cta')}</span>
        </a>
      </Button>
      <Button asChild variant="outline" className="rounded-full" aria-label="Messenger">
        <a href={MESSENGER_URL} target="_blank" rel="noreferrer">
          <MessagesSquare className="h-5 w-5" />
          <span className="hidden sm:inline">{tContact('messenger')}</span>
        </a>
      </Button>
    </div>
  );
}
