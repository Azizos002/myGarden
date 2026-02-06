'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest('a');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      const isExternal = anchor.getAttribute('target') === '_blank' || href?.startsWith('http');
      if (!href || isExternal) return;
      setActive(true);
      setProgress(20);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (!active) return;
    timerRef.current = window.setInterval(() => {
      setProgress((value) => (value < 70 ? value + 5 : value));
    }, 200);
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [active]);

  useEffect(() => {
    if (!active) return;
    setProgress(100);
    const timeout = setTimeout(() => {
      setActive(false);
      setProgress(0);
    }, 300);
    return () => clearTimeout(timeout);
  }, [pathname, searchParams, active]);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[70] h-[3px] w-full">
      <div
        className="h-full bg-accent transition-all duration-300 ease-out"
        style={{ width: `${progress}%`, opacity: active ? 1 : 0 }}
      />
    </div>
  );
}
