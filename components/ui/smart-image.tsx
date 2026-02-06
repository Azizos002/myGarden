'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type SmartImageProps = ImageProps & {
  wrapperClassName?: string;
};

export function SmartImage({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const safeSrc = src || '/placeholder.svg';

  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-muted" aria-hidden="true" />
      )}
      <Image
        {...props}
        src={safeSrc}
        alt={alt || 'VerdaTun product image'}
        className={cn('transition-opacity duration-500', loaded ? 'opacity-100' : 'opacity-0', className)}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}
