import type { CSSProperties } from "react";

const particles = [
  [7, 10, 8, 0.75, 16], [15, 27, 5, 0.6, -11], [23, 4, 7, 0.8, 10],
  [31, 54, 4, 0.55, -8], [42, 14, 6, 0.7, 14], [53, 40, 5, 0.65, -12],
  [62, 7, 7, 0.75, 9], [72, 34, 4, 0.6, -10], [83, 18, 6, 0.7, 12],
  [92, 50, 5, 0.55, -15], [12, 72, 4, 0.55, 9], [78, 79, 7, 0.7, -8],
] as const;

export function FloatingParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {particles.map(([left, bottom, duration, opacity, drift], index) => (
        <span
          key={index}
          className={`floating-particle absolute h-1 w-1 rounded-full bg-[#ffd974] shadow-[0_0_10px_2px_rgba(255,205,82,0.65)] ${index > 5 ? "hidden sm:block" : ""}`}
          style={{
            left: `${left}%`,
            bottom: `${bottom}%`,
            "--duration": `${duration + 8}s`,
            "--delay": `${-index * 1.8}s`,
            "--opacity": opacity,
            "--drift": `${drift}vw`,
          } as CSSProperties}
        />
      ))}
    </div>
  );
}
