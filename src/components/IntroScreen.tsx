"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { FloatingParticles } from "./FloatingParticles";
import { GoldenMonogram } from "./GoldenMonogram";

type IntroScreenProps = {
  onOpen: () => void;
  onExitComplete: () => void;
};

const INTRO_SESSION_KEY = "yoselyn-xv-intro-opened";

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
    window.setTimeout(() => setIsDismissed(true), prefersReducedMotion ? 0 : 950);
  };

  if (shouldDismiss) return null;

  return (
    <section className={`intro-screen fixed inset-0 z-50 flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#080304] px-5 pt-[calc(env(safe-area-inset-top)+1.5rem)] pb-[calc(env(safe-area-inset-bottom)+1.5rem)] text-center ${isExiting ? "is-exiting" : ""}`} aria-label="Apertura de la invitación">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(110,17,31,0.46),transparent_32%),linear-gradient(160deg,#050203,#190509_58%,#080304)]" />
      <FloatingParticles />
      <div className="relative z-10 flex w-full max-w-sm flex-col items-center">
        <div className="relative flex h-56 w-44 items-end justify-center rounded-t-full border border-[#e0bd69]/65 bg-[linear-gradient(90deg,rgba(255,236,185,0.05),rgba(255,255,255,0.14),rgba(255,236,185,0.03))] shadow-[inset_0_0_34px_rgba(255,239,193,0.14),0_0_40px_rgba(213,166,77,0.12)]" aria-hidden="true">
          <div className="relative mb-6 h-16 w-16 rounded-full bg-[#74111d] shadow-[0_0_26px_rgba(159,20,41,0.8)]"><span className="absolute -left-2 top-2 h-8 w-8 rotate-[-30deg] rounded-[100%_0_100%_0] bg-[#b51d2d]" /><span className="absolute -right-2 top-2 h-8 w-8 rotate-[120deg] rounded-[100%_0_100%_0] bg-[#95101f]" /><span className="absolute left-1/2 -top-4 h-9 w-7 -translate-x-1/2 rounded-[100%_0_100%_0] bg-[#ce2b38]" /></div>
        </div>
        <div className="h-4 w-56 rounded-full border border-[#e0bd69]/65 bg-[#3a170f] shadow-[0_8px_20px_rgba(0,0,0,0.4)]" aria-hidden="true" />
        <div className="mt-8 scale-90"><GoldenMonogram /></div>
        <p className="mt-5 font-serif text-xl italic text-[#fff0ca]">Una noche para recordar</p>
        <button type="button" onClick={handleOpen} className="mt-9 inline-flex min-h-[52px] w-[85%] max-w-[320px] items-center justify-center border border-[#e0bd69]/75 bg-[#4c1915]/70 px-6 text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-[#fff0ca] shadow-[0_12px_28px_rgba(0,0,0,0.38)] transition duration-300 active:scale-[0.98] hover:-translate-y-0.5 hover:bg-[#6a201a] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe2a0]">
          Abrir la invitación
        </button>
      </div>
    </section>
  );
}
