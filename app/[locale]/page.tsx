import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, Leaf, ShieldCheck, Sparkles, Truck, Droplets, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Reveal } from '@/components/motion';
import { BeforeAfter } from '@/components/before-after';
import { HomeHeroSlider } from '@/components/home-hero-slider';
import { CategorySlider } from '@/components/category-slider';
import { buildMetadata } from '@/lib/seo';
import { MESSENGER_URL, WHATSAPP_NUMBER, type Locale } from '@/lib/constants';

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'seo' });
  return buildMetadata({
    locale: params.locale,
    title: t('homeTitle'),
    description: t('homeDescription'),
    path: ''
  });
}

export default async function HomePage({ params }: { params: { locale: Locale } }) {
  const t = await getTranslations({ locale: params.locale, namespace: 'home' });
  const tCommon = await getTranslations({ locale: params.locale, namespace: 'common' });
  const tWhatsApp = await getTranslations({ locale: params.locale, namespace: 'whatsapp' });
  const tContact = await getTranslations({ locale: params.locale, namespace: 'contactWidget' });

  const message = encodeURIComponent(
    tWhatsApp('prefillService', { service: tWhatsApp('defaultService') })
  );

  return (
    <div className="space-y-20 pb-16">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--accent)_0%,_transparent_50%)] opacity-20" />
        <div className="container-pad grid gap-10 py-16 lg:grid-cols-[1.2fr,1fr] lg:items-center">
          <Reveal className="space-y-6">
            <Badge className="badge-chip">{t('badge')}</Badge>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              {t('headline')}
            </h1>
            <p className="sr-only">{t('headline')}</p>
            <p className="text-lg text-foreground/70">{t('subheadline')}</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('primaryCta')}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={MESSENGER_URL} target="_blank" rel="noreferrer">
                  {tContact('messenger')}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/${params.locale}/catalog`}>{t('secondaryCta')}</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              {tCommon('proofs').split('|').map((item) => (
                <span key={item} className="badge-chip">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
            <HomeHeroSlider alt={t('heroAlt')} />
          </Reveal>
        </div>
      </section>

      <section className="container-pad space-y-8">
        <Reveal className="flex items-center justify-between">
          <h2 className="section-title">{t('categoriesTitle')}</h2>
          <Link href={`/${params.locale}/catalog`} className="text-sm font-medium text-primary">
            {t('seeAll')}
          </Link>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {t.raw('categories').map((category: any, index: number) => (
            <Card key={category.title} className="overflow-hidden">
              <CategorySlider
                images={
                  index === 0
                    ? [
                        '/categorie/gazon-naturel/1.jpg',
                        '/categorie/gazon-naturel/2.jpg'
                      ]
                    : index === 1
                    ? [
                        '/categorie/gazon-artificiel/1.jpg',
                        '/categorie/gazon-artificiel/2.jpg'
                      ]
                    : [
                        '/categorie/plantes-design/1.jpg',
                        '/categorie/plantes-design/2.jpg'
                      ]
                }
                alt={category.title}
              />
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-semibold">{category.title}</h3>
                <p className="text-sm text-foreground/70">{category.text}</p>
                <Button variant="ghost" asChild>
                  <Link href={`/${params.locale}/catalog`}>{t('discover')}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-pad space-y-10">
        <Reveal className="space-y-3">
          <h2 className="section-title">{t('whyTitle')}</h2>
          <p className="text-foreground/70">{t('whySubtitle')}</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Leaf, key: 'quality' },
            { icon: ShieldCheck, key: 'warranty' },
            { icon: Truck, key: 'delivery' },
            { icon: Wrench, key: 'installation' },
            { icon: Droplets, key: 'irrigation' },
            { icon: Sparkles, key: 'care' }
          ].map((item) => (
            <Card key={item.key} className="p-6">
              <item.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">{t(`why.${item.key}.title`)}</h3>
              <p className="mt-2 text-sm text-foreground/70">{t(`why.${item.key}.text`)}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-pad space-y-10">
        <Reveal className="space-y-3">
          <h2 className="section-title">{t('packagesTitle')}</h2>
          <p className="text-foreground/70">{t('packagesSubtitle')}</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {t.raw('packages').map((pack: any) => (
            <Card key={pack.title} className="p-6 space-y-4">
              <h3 className="text-xl font-semibold">{pack.title}</h3>
              <p className="text-sm text-foreground/70">{pack.text}</p>
              <p className="text-2xl font-semibold text-primary">{pack.price}</p>
              <Button variant="outline" asChild>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('packagesCta')}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={MESSENGER_URL} target="_blank" rel="noreferrer">
                  {tContact('messenger')}
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-pad space-y-8">
        <Reveal className="space-y-3">
          <h2 className="section-title">{t('projectsTitle')}</h2>
          <p className="text-foreground/70">{t('projectsSubtitle')}</p>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
          <BeforeAfter
            before="/images/before-after/before.jpg"
            after="/images/before-after/after.jpg"
          />
          <div className="grid gap-4">
            {t.raw('projects').map((item: any) => (
              <Card key={item.title} className="p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container-pad space-y-8">
        <Reveal className="space-y-3">
          <h2 className="section-title">{t('testimonialsTitle')}</h2>
          <p className="text-foreground/70">{t('testimonialsSubtitle')}</p>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {t.raw('testimonials').map((item: any) => (
            <Card key={item.name} className="p-6 space-y-4">
              <p className="text-sm text-foreground/70">“{item.quote}”</p>
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-xs text-foreground/60">{item.city}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container-pad space-y-6">
        <Reveal className="space-y-3">
          <h2 className="section-title">{t('faqTitle')}</h2>
          <p className="text-foreground/70">{t('faqSubtitle')}</p>
        </Reveal>
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-surface px-6">
          {t.raw('faq').map((item: any) => (
            <AccordionItem key={item.question} value={item.question}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className="container-pad">
        <Card className="p-8 md:p-12">
          <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr] lg:items-center">
            <div className="space-y-3">
              <h2 className="section-title">{t('ctaTitle')}</h2>
              <p className="text-foreground/70">{t('ctaSubtitle')}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}?text=${message}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {t('ctaPrimary')}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={MESSENGER_URL} target="_blank" rel="noreferrer">
                  {tContact('messenger')}
                </a>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/${params.locale}/contact`}>{t('ctaSecondary')}</Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
