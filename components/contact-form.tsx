'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const contactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  city: z.string().min(2),
  service: z.string().min(2),
  message: z.string().min(5)
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations('contact');
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('name')}</label>
          <Input {...register('name')} placeholder={t('namePlaceholder')} />
          {errors.name && <p className="text-xs text-red-500">{t('error')}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('phone')}</label>
          <Input {...register('phone')} placeholder={t('phonePlaceholder')} />
          {errors.phone && <p className="text-xs text-red-500">{t('error')}</p>}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('city')}</label>
          <Input {...register('city')} placeholder={t('cityPlaceholder')} />
          {errors.city && <p className="text-xs text-red-500">{t('error')}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('service')}</label>
          <Input {...register('service')} placeholder={t('servicePlaceholder')} />
          {errors.service && <p className="text-xs text-red-500">{t('error')}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">{t('message')}</label>
        <Textarea {...register('message')} placeholder={t('messagePlaceholder')} />
        {errors.message && <p className="text-xs text-red-500">{t('error')}</p>}
      </div>
      <Button type="submit">{t('submit')}</Button>
      {submitted && <p className="text-sm text-primary">{t('success')}</p>}
    </form>
  );
}
