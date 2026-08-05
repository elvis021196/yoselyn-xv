"use client";

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import { GoldenMonogram } from "./GoldenMonogram";

type IntroScreenProps = {
  onOpen: () => void;
  onExitComplete: () => void;
};

const INTRO_SESSION_KEY = "yoselyn-xv-intro-opened";

const particles = [
  [7, 16, 3, 0, 2], [15, 61, 2, 0.7, 1], [23, 34, 4, 1.4, 1], [31, 79, 2, 0.2, 0],
  [43, 13, 3, 1.1, 0], [52, 72, 2, 1.8, 1], [62, 41, 4, 0.4, 2], [70, 21, 2, 1.5, 0],
  [78, 58, 3, 0.9, 1], [87, 31, 2, 1.9, 0], [93, 76, 4, 0.3, 2], [10, 87, 3, 1.2, 1],
] as const;

function CinematicParticles() {
  return (
    <div className="intro-particle-field" aria-hidden="true">
      {particles.map(([left, top, size, delay, depth], index) => (
        <span
          key={index}
          className={`intro-cinematic-particle intro-particle-depth-${depth}`}
          style={{
            "--particle-left": `${left}%`,
            "--particle-top": `${top}%`,
            "--particle-size": `${size}px`,
            "--particle-delay": `${delay}s`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}

function RoseIllustration() {
  return (
    <svg viewBox="0 0 220 245" className="intro-rose-illustration" aria-hidden="true">
      <defs>
        <linearGradient id="intro-rose-wine" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#bc293d" /><stop offset=".5" stopColor="#6c0a1c" /><stop offset="1" stopColor="#250207" /></linearGradient>
        <linearGradient id="intro-rose-crimson" x1=".1" x2=".9" y1="0" y2="1"><stop stopColor="#e0555c" /><stop offset=".45" stopColor="#941127" /><stop offset="1" stopColor="#3b040d" /></linearGradient>
        <radialGradient id="intro-rose-core" cx="45%" cy="35%" r="70%"><stop stopColor="#f37b71" /><stop offset=".35" stopColor="#b71b31" /><stop offset=".72" stopColor="#560716" /><stop offset="1" stopColor="#190104" /></radialGradient>
        <linearGradient id="intro-stem" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#b49a4f" />
          <stop offset="0.42" stopColor="#60753a" />
          <stop offset="1" stopColor="#22351c" />
        </linearGradient>
        <filter id="intro-rose-shadow" x="-40%" y="-30%" width="180%" height="190%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
          <feOffset dy="6" result="offset" />
          <feComponentTransfer><feFuncA type="linear" slope="0.65" /></feComponentTransfer>
          <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      <ellipse cx="111" cy="214" rx="42" ry="8" fill="#120305" opacity=".7" />
      <path d="M111 151c1 23-2 43-6 62" stroke="url(#intro-stem)" strokeWidth="5" strokeLinecap="round" />
      <path d="M106 186c-18-15-36-10-47 1 17 12 36 12 47 4M107 198c18-14 36-10 47 2-18 12-37 11-48 3" fill="#40562b" stroke="#a18a44" strokeOpacity=".42" strokeWidth="1.2" />
      <g filter="url(#intro-rose-shadow)">
        <path d="M47 123c-17-2-29-16-26-31 18-10 37 2 43 20M171 121c17-4 27-20 20-34-19-7-36 8-39 25" fill="url(#intro-rose-wine)" />
        <path d="M54 105c-18-11-19-34-4-46 19 2 29 20 24 38M161 103c-1-21 12-35 31-35 11 18 2 35-16 42" fill="url(#intro-rose-crimson)" />
        <path d="M66 80c-8-18 3-36 20-41 13 10 16 27 8 41M141 79c7-19-4-36-21-40-13 11-15 29-6 42" fill="url(#intro-rose-wine)" />
        <path d="M76 63c6-19 26-28 42-19 16-9 37 2 40 21 10 14 3 34-14 43-17 11-43 10-61-2-18-9-23-28-7-43Z" fill="url(#intro-rose-core)" stroke="#e9857b" strokeOpacity=".35" strokeWidth="1.2" />
        <path d="M61 112c12-13 28-16 44-6 13 7 20 19 18 32-18 8-40 4-53-9-6-6-9-11-9-17ZM113 105c18-9 37-2 47 12 3 9-2 19-11 25-18-1-32-10-40-24Z" fill="url(#intro-rose-crimson)" />
        <path d="M78 80c13-12 34-12 47 0 11 11 10 29-2 40-14 11-36 8-47-5-9-11-8-25 2-35Z" fill="url(#intro-rose-wine)" />
        <path d="M86 86c10-10 27-9 37 2 7 11 4 26-7 34-12 8-29 4-36-8-6-10-4-20 6-28Z" fill="url(#intro-rose-core)" />
        <path d="M94 92c8-7 20-5 27 4 3 10-3 20-13 23-10 2-19-6-19-16 0-4 2-8 5-11Z" fill="#8b1024" />
        <path d="M101 96c5-4 13-2 18 4 0 7-5 13-12 13-7-1-10-9-6-17Z" fill="#c92839" />
        <path d="M105 99c4-3 9-1 12 3-1 5-5 8-9 7-4-2-5-6-3-10Z" fill="#f17a72" />
      </g>
      <circle cx="109" cy="104" r="4" fill="#ffd28b" opacity=".72" />
    </svg>
  );
}

export function IntroScreen({ onOpen, onExitComplete }: IntroScreenProps) {
  const [isDismissed, setIsDismissed] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const hasNotifiedRef = useRef(false);
  const wasPreviouslyOpened = useSyncExternalStore(
    () => () => undefined,
    () => window.sessionStorage.getItem(INTRO_SESSION_KEY) === "true",
    () => false,
  );
  const shouldDismiss = isDismissed || wasPreviouslyOpened;

  useEffect(() => {
    if (shouldDismiss && !hasNotifiedRef.current) {
      hasNotifiedRef.current = true;
      onExitComplete();
    }
  }, [onExitComplete, shouldDismiss]);

  const handleOpen = () => {
    if (isExiting) return;

    onOpen();
    window.sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    setIsExiting(true);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => setIsDismissed(true), prefersReducedMotion ? 0 : 1000);
  };

  if (shouldDismiss) return null;

  return (
    <section className={`intro-screen fixed inset-0 z-50 flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#050203] px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-[calc(env(safe-area-inset-bottom)+1.25rem)] text-center ${isExiting ? "is-exiting" : ""}`} aria-label="Apertura de la invitación">
      <div className="intro-night absolute inset-0" />
      <CinematicParticles />
      <div className="intro-stage relative z-10 flex w-full max-w-sm flex-col items-center">
        <div className="intro-glass-halo" aria-hidden="true" />
        <div className="intro-glass-dome" aria-hidden="true">
          <div className="intro-glass-reflection" />
          <div className="intro-glass-highlight" />
          <div className="intro-glass-inner-shadow" />
          <div className="intro-rose-glow"><RoseIllustration /></div>
        </div>
        <div className="intro-dome-base" aria-hidden="true"><span /></div>
        <div className="intro-monogram mt-6"><GoldenMonogram /></div>
        <p className="intro-name mt-4 font-serif text-[clamp(1.75rem,7.6vw,2.2rem)] font-medium leading-tight tracking-[0.045em] text-[#fff2d7]">Yoselyn Lopez Escobar</p>
        <p className="intro-xv mt-2 font-serif text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-[#e1bd6b]">Mis XV Años</p>
        <p className="intro-message mt-4 font-serif text-lg italic text-[#fff0cb]">Una noche para recordar</p>
        <button type="button" onClick={handleOpen} aria-label="Abrir la invitación e iniciar música" className="intro-button mt-8 inline-flex min-h-[56px] w-[86%] max-w-[326px] items-center justify-center overflow-hidden border border-[#dcb765] bg-[#481017]/80 px-6 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#fff0ca] shadow-[0_14px_30px_rgba(0,0,0,0.42)] transition duration-300 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe2a0]">
          <span className="intro-button-shimmer" aria-hidden="true" />
          <span className="relative">Abrir la invitación</span>
        </button>
      </div>
    </section>
  );
}
