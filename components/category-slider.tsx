'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export function CategorySlider({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    startX.current = event.clientX;
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (startX.current === null) return;
    const diff = event.clientX - startX.current;
    if (Math.abs(diff) > 30) {
      setIndex((prev) => (diff > 0 ? (prev - 1 + images.length) % images.length : (prev + 1) % images.length));
    }
    startX.current = null;
  };

  return (
    <div
      className="relative h-44 overflow-hidden"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={() => {
        startX.current = null;
      }}
      role="group"
      aria-label={alt}
    >
      <Image
        src={images[index]}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  );
}
