"use client";

import { useEffect, useRef, useState } from "react";

export function WelcomeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.18 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[#100907] px-5 py-24 sm:px-10 sm:py-32"
      aria-labelledby="welcome-title"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_8%,rgba(160,105,29,0.28),transparent_34%),radial-gradient(circle_at_12%_65%,rgba(91,15,25,0.2),transparent_28%),linear-gradient(145deg,#0b0605,#180b07_52%,#090505)]" />
      <div className="absolute inset-x-[8%] top-8 -z-10 h-px bg-gradient-to-r from-transparent via-[#d8ad54]/60 to-transparent" />

      <article className={`welcome-parchment relative mx-auto max-w-xl border border-[#d7af5f]/75 bg-[#f6edd5] px-7 py-12 text-center shadow-[0_25px_70px_rgba(0,0,0,0.5)] sm:px-14 sm:py-16 ${isVisible ? "is-visible" : ""}`}>
        <span className="absolute inset-2 border border-[#b88635]/35" aria-hidden="true" />
        <span className="absolute left-1/2 top-6 h-px w-16 -translate-x-1/2 bg-[#b88635]/70" aria-hidden="true" />
        <p className="relative font-serif text-[0.62rem] font-semibold uppercase tracking-[0.38em] text-[#96681f]">
          Bienvenida
        </p>
        <h2 id="welcome-title" className="relative mt-4 font-serif text-3xl font-medium text-[#4c2d13] sm:text-4xl">
          Un sueño compartido
        </h2>
        <div className="relative mx-auto mt-8 max-w-md space-y-5 font-serif text-[1.02rem] leading-8 text-[#5d4025] sm:text-lg sm:leading-9">
          <p>Las historias más hermosas comienzan con un sueño.</p>
          <p>Hoy quiero compartir contigo uno de los momentos más importantes de mi vida.</p>
          <p>Gracias por acompañarme y ser parte de esta noche tan especial.</p>
          <p className="pt-1 font-medium text-[#7d4d19]">Bienvenido a la celebración de mis XV años.</p>
        </div>
        <span className="absolute bottom-6 left-1/2 h-px w-16 -translate-x-1/2 bg-[#b88635]/70" aria-hidden="true" />
      </article>
    </section>
  );
}
