'use client';

import { MessageCircle, MessagesSquare } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { MESSENGER_URL, WHATSAPP_PHONE } from '@/lib/constants';

export function ContactFloat() {
  const t = useTranslations('contactWidget');
  const tWhatsApp = useTranslations('whatsapp');
  const message = encodeURIComponent(
    tWhatsApp('prefillService', { service: tWhatsApp('defaultService') })
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 rounded-2xl border border-border bg-surface p-2 shadow-soft backdrop-blur">
      <Button asChild size="sm" className="rounded-xl">
        <a
          href={`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}?text=${message}`}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle className="h-4 w-4" />
          {t('whatsapp')}
        </a>
      </Button>
      <Button asChild size="sm" variant="outline" className="rounded-xl">
        <a href={MESSENGER_URL} target="_blank" rel="noreferrer">
          <MessagesSquare className="h-4 w-4" />
          {t('messenger')}
        </a>
      </Button>
    </div>
  );
}
