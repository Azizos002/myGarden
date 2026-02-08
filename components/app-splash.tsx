"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const MIN_DURATION_MS = 2500;
const STORAGE_KEY = "verdatun_splash_seen";

export function AppSplash() {
  const [shouldShow, setShouldShow] = useState(false);
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    if (!seen) {
      setShouldShow(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }

    setReduceMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    );
  }, []);

  useEffect(() => {
    if (!shouldShow) return;
    const timer = setTimeout(() => setReady(true), MIN_DURATION_MS);
    return () => clearTimeout(timer);
  }, [shouldShow]);

  const tagline = useMemo(() => {
    // Pick one—easy to change later
    const options = [
      "Préparation de votre expérience…",
      "On fait briller VerdaTun ✨",
      "Chargement des nouveautés…",
      "Presque prêt…",
    ];
    return options[Math.floor(Math.random() * options.length)];
  }, []);

  if (!shouldShow) return null;

  return (
    <div
      className={[
        "fixed inset-0 z-[60] flex items-center justify-center bg-background",
        reduceMotion ? "" : "transition-opacity duration-700 ease-out",
        ready ? "pointer-events-none opacity-0" : "opacity-100",
      ].join(" ")}
      aria-label="Loading"
      role="status"
    >
      {/* Subtle animated background */}
      {!reduceMotion && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl opacity-25 animate-[splashGlow_3.2s_ease-in-out_infinite]" />
          <div className="absolute -bottom-28 left-1/3 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl opacity-20 animate-[splashGlow_4.2s_ease-in-out_infinite]" />
        </div>
      )}

      <div className="relative flex flex-col items-center gap-5">
        {/* Logo */}
        <div
          className={[
            "relative",
            reduceMotion
              ? ""
              : "animate-[logoIn_700ms_cubic-bezier(0.2,0.8,0.2,1)_both]",
          ].join(" ")}
        >
          <Image
            src="/logo/verdatun-logo.png"
            alt="VerdaTun logo"
            width={380}
            height={380}
            className="h-28 sm:h-32 md:h-36 w-auto drop-shadow-[0_18px_35px_rgba(0,0,0,0.25)]"
            priority
          />
        </div>

        {/* Tagline */}
        <div className="flex flex-col items-center gap-3">
          <p
            className={[
              "text-base sm:text-lg font-medium tracking-tight",
              reduceMotion ? "" : "animate-[fadeUp_650ms_ease-out_150ms_both]",
            ].join(" ")}
          >
            {tagline}
          </p>

          {/* Shimmer + dots */}
          <div
            className={[
              "flex items-center gap-3 text-sm text-foreground/70",
              reduceMotion ? "" : "animate-[fadeUp_650ms_ease-out_250ms_both]",
            ].join(" ")}
          >
            {!reduceMotion ? (
              <>
                <span className="relative inline-flex items-center">
                  <span className="relative z-10 font-medium">Connexion</span>
                  <span className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-foreground/15 to-transparent animate-[shimmer_1.4s_linear_infinite]" />
                </span>

                <span className="flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-accent animate-[dot_900ms_ease-in-out_infinite]" />
                  <span className="h-2 w-2 rounded-full bg-accent animate-[dot_900ms_ease-in-out_150ms_infinite]" />
                  <span className="h-2 w-2 rounded-full bg-accent animate-[dot_900ms_ease-in-out_300ms_infinite]" />
                </span>
              </>
            ) : (
              <>
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span>Connexion…</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Local keyframes */}
      <style jsx>{`
        @keyframes logoIn {
          0% {
            transform: translateY(12px) scale(0.92);
            opacity: 0;
          }
          60% {
            transform: translateY(0) scale(1.02);
            opacity: 1;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          0% {
            transform: translateY(10px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-120%);
            opacity: 0.6;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            transform: translateX(120%);
            opacity: 0.6;
          }
        }

        @keyframes dot {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.55;
          }
          50% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }

        @keyframes splashGlow {
          0%,
          100% {
            transform: translateX(-50%) scale(0.95);
          }
          50% {
            transform: translateX(-50%) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
