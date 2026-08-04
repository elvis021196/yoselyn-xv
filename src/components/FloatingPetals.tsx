import type { CSSProperties } from "react";

const petals = [
  [5, 0, 15, 11], [17, 4, 18, -14], [34, 2, 13, 9], [50, 7, 17, -12],
  [68, 1, 14, 13], [82, 5, 19, -10], [94, 3, 16, -16],
] as const;

export function FloatingPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {petals.map(([left, delay, duration, drift], index) => (
        <span
          key={index}
          className={`floating-petal absolute top-0 h-5 w-3 rounded-[100%_0_100%_0] bg-gradient-to-br from-[#e04145] via-[#a61022] to-[#5e0612] opacity-0 shadow-[0_4px_9px_rgba(0,0,0,0.45)] ${index > 2 ? "hidden sm:block" : ""}`}
          style={{
            left: `${left}%`,
            "--duration": `${duration}s`,
            "--delay": `${-delay}s`,
            "--drift": `${drift}vw`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
