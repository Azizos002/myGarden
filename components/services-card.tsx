'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ImageOff, MessageCircle, MessagesSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MESSENGER_HANDLE, WHATSAPP_PHONE } from '@/lib/constants';

type ServiceCardProps = {
  title: string;
  description: string;
  bullets: string[];
  image: string;
  whatsappLabel: string;
  whatsappPrefill: string;
  messengerLabel: string;
  helper: string;
  imageFallback: string;
};

export function ServicesCard({
  title,
  description,
  bullets,
  image,
  whatsappLabel,
  whatsappPrefill,
  messengerLabel,
  helper,
  imageFallback
}: ServiceCardProps) {
  const [imageError, setImageError] = useState(false);
  const whatsappMessage = encodeURIComponent(whatsappPrefill);

  return (
    <div className="grid gap-6 rounded-2xl border border-border bg-surface p-6 shadow-soft lg:grid-cols-[1fr,1.2fr]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted">
        {imageError ? (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-sm text-foreground/60">
            <ImageOff className="h-5 w-5" />
            <span>{imageFallback}</span>
          </div>
        ) : (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
            onError={() => setImageError(true)}
          />
        )}
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="text-sm text-foreground/70">{description}</p>
        </div>
        <ul className="space-y-2 text-sm text-foreground/70">
          {bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <Button asChild>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE.replace('+', '')}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              {whatsappLabel}
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={`https://m.me/${MESSENGER_HANDLE}`} target="_blank" rel="noreferrer">
              <MessagesSquare className="h-4 w-4" />
              {messengerLabel}
            </a>
          </Button>
        </div>
        <p className="text-xs text-foreground/60">{helper}</p>
      </div>
    </div>
  );
}
