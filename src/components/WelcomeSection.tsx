"use client";

import { useEffect, useRef, useState } from "react";

function Rose() {
  return <svg viewBox="0 0 90 100" className="h-12 w-12" aria-hidden="true"><defs><linearGradient id="manuscript-rose" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#822035" /><stop offset="1" stopColor="#31050d" /></linearGradient></defs><path d="M46 55c0 14-1 25-3 36" stroke="#9f823c" strokeWidth="2.4" strokeLinecap="round" /><path d="M43 78c-9-7-16-4-20 2 8 5 16 5 21 0M44 85c8-7 15-4 19 2-8 5-16 5-20 0" fill="#88733a" opacity=".9" /><path d="M24 43c-10-6-12-18-5-26 12 1 18 12 15 23M65 39c1-12 10-20 21-19 6 11 0 22-12 26" fill="#671126" /><path d="M29 24c8-12 22-14 33-6 13 1 20 13 15 25 5 12-5 24-17 27-15 4-30-3-35-15-5-12-1-23 4-31Z" fill="url(#manuscript-rose)" /><path d="M34 36c8-8 20-8 28-1 6 8 3 18-5 23M27 45c10 2 18 9 22 19M61 29c-7 7-10 15-11 25" fill="none" stroke="#bc6a69" strokeOpacity=".45" strokeWidth="1.2" strokeLinecap="round" /><path d="M41 41c7-6 17-4 21 3 1 8-5 14-13 13-7-2-10-9-8-16Z" fill="#8e1a2d" /><circle cx="51" cy="47" r="3.5" fill="#bd645e" opacity=".7" /></svg>;
}

function GoldBranch({ className }: { className: string }) {
  return <svg viewBox="0 0 120 60" className={`absolute h-12 w-24 text-[#a9782d]/75 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.15" aria-hidden="true"><path d="M7 53C36 38 64 25 111 7M29 42c-7-12-15-14-21-12 2 9 10 13 19 14M48 33c-6-12-13-15-20-13 1 9 8 14 18 15M68 25c-4-11-11-15-18-14 0 9 7 14 17 16M77 22c8-9 16-10 22-6-4 8-12 10-21 8M94 14c7-7 14-8 19-5-4 7-11 8-19 7" /></svg>;
}

export function WelcomeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.3 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="relative isolate overflow-hidden bg-[#070404] px-5 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5rem)] sm:px-10 sm:py-32" aria-labelledby="welcome-title">
      <div className="welcome-library absolute inset-0 -z-20" /><div className="welcome-library-shelves absolute inset-0 -z-10" aria-hidden="true" /><div className="welcome-mist pointer-events-none absolute inset-x-[-20%] bottom-[8%] -z-10 h-36" aria-hidden="true" />
      <div className="welcome-particles pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true"><span /><span /><span /><span /><span /></div><div className="welcome-petals pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true"><i /><i /><i /></div>
      <article className={`ancient-manuscript relative mx-auto max-w-xl ${isVisible ? "is-unfurled" : ""}`}>
        <div className="manuscript-warmth" aria-hidden="true" /><div className="manuscript-top-roll" aria-hidden="true" /><div className="manuscript-bottom-roll" aria-hidden="true" />
        <div className="manuscript-paper relative min-h-[33rem] px-7 py-16 text-center sm:px-14 sm:py-20">
          <GoldBranch className="left-2 top-4" /><GoldBranch className="right-2 top-4 -scale-x-100" /><div className="manuscript-seal absolute right-5 top-12" aria-hidden="true"><span>Y</span><small>XV</small></div><div className="absolute bottom-2 left-2" aria-hidden="true"><Rose /></div><div className="manuscript-ornament absolute left-1/2 top-12 -translate-x-1/2" aria-hidden="true">✦</div>
          <div className="relative z-10 pt-8"><p className="manuscript-text manuscript-title font-serif text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#8b5d1e]">Bienvenida</p><h2 id="welcome-title" className="manuscript-text manuscript-heading mt-4 font-serif text-3xl font-medium text-[#4c2d13] sm:text-4xl">Un sueño compartido</h2><div className="mx-auto mt-9 max-w-md space-y-5 font-serif text-[1.02rem] leading-8 text-[#5d4025] sm:text-lg sm:leading-9"><p className="manuscript-text manuscript-first">Las historias más hermosas comienzan con un sueño.</p><p className="manuscript-text manuscript-second">Hoy quiero compartir contigo uno de los momentos más importantes de mi vida.</p><p className="manuscript-text manuscript-third">Gracias por acompañarme y ser parte de esta noche tan especial.</p><p className="manuscript-text manuscript-final pt-1 font-medium text-[#7d4d19]">Bienvenido a la celebración de mis XV años.</p></div></div>
        </div>
      </article>
    </section>
  );
}
