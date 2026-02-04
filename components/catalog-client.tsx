'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Search } from 'lucide-react';
import { products } from '@/lib/products';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { WHATSAPP_NUMBER } from '@/lib/constants';

const sortOptions = ['popular', 'priceLow', 'priceHigh'] as const;

export function CatalogClient() {
  const t = useTranslations('catalog');
  const tProducts = useTranslations('products');
  const tWhatsApp = useTranslations('whatsapp');

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [tag, setTag] = useState('all');
  const [sort, setSort] = useState<(typeof sortOptions)[number]>('popular');

  const tags = Array.from(
    new Set(products.flatMap((product) => product.tags))
  );

  const filtered = useMemo(() => {
    let data = products.filter((product) => {
      const matchesQuery = tProducts(product.nameKey).toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'all' || product.category === category;
      const matchesTag = tag === 'all' || product.tags.includes(tag);
      return matchesQuery && matchesCategory && matchesTag;
    });

    if (sort === 'priceLow') {
      data = data.slice().sort((a, b) => (a.priceValue ?? 999) - (b.priceValue ?? 999));
    }
    if (sort === 'priceHigh') {
      data = data.slice().sort((a, b) => (b.priceValue ?? 0) - (a.priceValue ?? 0));
    }

    return data;
  }, [query, category, tag, sort, tProducts]);

  return (
    <div className="space-y-8">
      <div className="grid gap-4 lg:grid-cols-[2fr,1fr,1fr,1fr]">
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-4 w-4 text-foreground/50" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('search')} className="pl-10" />
        </div>
        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="h-11 rounded-xl border border-border bg-surface px-4 text-sm"
          aria-label={t('category')}
        >
          <option value="all">{t('all')}</option>
          <option value="natural">{t('natural')}</option>
          <option value="artificial">{t('artificial')}</option>
          <option value="plants">{t('plants')}</option>
          <option value="service">{t('service')}</option>
        </select>
        <select
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          className="h-11 rounded-xl border border-border bg-surface px-4 text-sm"
          aria-label={t('tag')}
        >
          <option value="all">{t('allTags')}</option>
          {tags.map((item) => (
            <option key={item} value={item}>
              {t(`tags.${item}`)}
            </option>
          ))}
        </select>
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value as (typeof sortOptions)[number])}
          className="h-11 rounded-xl border border-border bg-surface px-4 text-sm"
          aria-label={t('sort')}
        >
          {sortOptions.map((option) => (
            <option key={option} value={option}>
              {t(`sortOptions.${option}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((product) => (
          <Dialog key={product.id}>
            <DialogTrigger asChild>
              <Card
                id={product.id}
                className="group cursor-pointer overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={product.images[0]}
                    alt={tProducts(product.nameKey)}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{tProducts(product.nameKey)}</h3>
                    <Badge>{t(`status.${product.stockStatus}`)}</Badge>
                  </div>
                  <p className="text-sm text-foreground/70">{tProducts(product.shortKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((item) => (
                      <Badge key={item} className="bg-muted text-foreground/70">
                        {t(`tags.${item}`)}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{tProducts(product.nameKey)}</DialogTitle>
                <DialogDescription>{tProducts(product.shortKey)}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="relative h-48 overflow-hidden rounded-xl">
                  <Image
                    src={product.images[1] ?? product.images[0]}
                    alt={tProducts(product.nameKey)}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-sm text-foreground/70">{tProducts(product.longKey)}</p>
                  <p className="text-lg font-semibold text-primary">
                    {product.priceType === 'quote'
                      ? t('priceOnRequest')
                      : t('priceValue', { value: product.priceValue, type: t(`priceType.${product.priceType}`) })}
                  </p>
                  <Button asChild>
                    <a
                      href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${encodeURIComponent(
                        tWhatsApp('prefillService', { service: tProducts(product.nameKey) })
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t('cta')}
                    </a>
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
