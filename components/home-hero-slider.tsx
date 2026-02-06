'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImages = [
  '/images/home/jardin1.jpg',
  '/images/home/jardin2.jpg',
  '/images/home/jardin3.jpg',
  '/images/home/jardin4.jpg',
  '/images/home/jardin5.jpg'
];

export function HomeHeroSlider({ alt }: { alt: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const previous = () => {
    setIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border shadow-soft">
      <div className="relative h-[280px] sm:h-[360px] lg:h-[420px]">
        <Image
          src={heroImages[index]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        <Button type="button" size="sm" variant="outline" onClick={previous} aria-label="Previous">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button type="button" size="sm" variant="outline" onClick={next} aria-label="Next">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
