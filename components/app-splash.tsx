'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const MIN_DURATION_MS = 800;
const STORAGE_KEY = 'verdatun_splash_seen';

export function AppSplash() {
  const [shouldShow, setShouldShow] = useState(false);
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const seen = sessionStorage.getItem(STORAGE_KEY) === '1';
    if (!seen) {
      setShouldShow(true);
      sessionStorage.setItem(STORAGE_KEY, '1');
    }
    setReduceMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  useEffect(() => {
    if (!shouldShow) return;
    const timer = setTimeout(() => {
      setReady(true);
    }, MIN_DURATION_MS);
    return () => clearTimeout(timer);
  }, [shouldShow]);

  if (!shouldShow) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-background ${
        reduceMotion ? '' : 'transition-opacity duration-500'
      } ${ready ? 'pointer-events-none opacity-0' : 'opacity-100'}`}
      aria-label="Loading"
      role="status"
    >
      <div className="flex flex-col items-center gap-4">
        <Image
          src="/logo/verdatun-logo.png"
          alt="VerdaTun logo"
          width={180}
          height={180}
          className="h-20 w-auto"
          priority
        />
        <div className="flex items-center gap-2 text-sm text-foreground/70">
          <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
          <span>Chargement...</span>
        </div>
      </div>
    </div>
  );
}
