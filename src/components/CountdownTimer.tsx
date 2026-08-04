"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const eventDate = new Date("2026-08-22T22:00:00-05:00");

function getTimeLeft(): TimeLeft | null {
  const difference = eventDate.getTime() - Date.now();
  if (difference <= 0) return null;

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
  };
}

const labels: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "minutes", label: "Minutos" },
  { key: "seconds", label: "Segundos" },
];

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(undefined);

  useEffect(() => {
    const updateCountdown = () => setTimeLeft(getTimeLeft());
    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, []);

  if (timeLeft === null) {
    return <p className="font-serif text-2xl italic text-[#f9e9bd]">Hoy comienza la magia.</p>;
  }

  return (
    <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4" aria-label="Cuenta regresiva para la celebración">
      {labels.map(({ key, label }) => (
        <div key={key} className="border border-[#d8af58]/55 bg-[#f8edd2]/[0.08] px-3 py-5 shadow-[inset_0_0_20px_rgba(255,213,126,0.06)] backdrop-blur-sm">
          <span className="block font-serif text-4xl leading-none text-[#ffe3a0] sm:text-5xl">
            {timeLeft === undefined ? "--" : String(timeLeft[key]).padStart(2, "0")}
          </span>
          <span className="mt-3 block text-[0.61rem] font-semibold uppercase tracking-[0.25em] text-[#ead19a]">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
