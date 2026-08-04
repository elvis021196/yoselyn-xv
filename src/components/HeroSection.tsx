import Image from "next/image";
import { FloatingParticles } from "./FloatingParticles";
import { FloatingPetals } from "./FloatingPetals";
import { GoldenMonogram } from "./GoldenMonogram";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#080504] px-5 pt-[calc(env(safe-area-inset-top)+1rem)] pb-[calc(env(safe-area-inset-bottom)+1rem)] text-center sm:min-h-[42rem] sm:px-10 sm:py-12" aria-labelledby="hero-title">
      <Image
        src="/images/portada-yoselyn.png.png"
        alt="Yoselyn durante su celebración de quince años"
        fill
        priority
        sizes="100vw"
        className="hero-image -z-20 object-cover object-[38%_42%] sm:object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,3,2,0.48)_0%,rgba(7,4,3,0.58)_42%,rgba(4,2,2,0.8)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(0,0,0,0.46)_100%)]" />
      <div className="absolute left-1/2 top-[44%] -z-10 h-[34rem] w-[125vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(6,3,2,0.64)_0%,rgba(6,3,2,0.36)_48%,transparent_76%)] sm:h-[42rem] sm:w-[min(76vw,56rem)]" />

      <FloatingParticles />
      <FloatingPetals />

      <div className="hero-content relative z-10 flex w-full max-w-[24rem] -translate-y-[13%] flex-col items-center sm:max-w-3xl sm:-translate-y-[12%]">
        <div style={{ animationDelay: "120ms" }}>
          <GoldenMonogram />
        </div>
        <p style={{ animationDelay: "280ms" }} className="mt-4 font-serif text-[0.6rem] font-semibold uppercase tracking-[0.38em] text-[#f3d589] sm:mt-7 sm:text-xs sm:tracking-[0.48em]">
          Mis XV Años
        </p>
        <h1 id="hero-title" style={{ animationDelay: "430ms" }} className="mt-3 font-serif font-medium leading-[1.03] tracking-[0.045em] text-[#fff5df] drop-shadow-[0_3px_14px_rgba(0,0,0,0.9)] sm:mt-5 sm:leading-tight sm:tracking-[0.08em]">
          <span className="block text-[clamp(2.15rem,9.1vw,2.6rem)] sm:text-5xl lg:text-6xl">Yoselyn</span>
          <span className="block text-[clamp(1.65rem,7vw,2.05rem)] sm:text-4xl lg:text-5xl">Lopez Escobar</span>
        </h1>
        <div style={{ animationDelay: "570ms" }} className="mt-4 space-y-0.5 font-serif text-[0.95rem] leading-snug italic text-[#fff0cf] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] sm:mt-6 sm:space-y-1 sm:text-lg">
          <p>Una noche para recordar.</p>
          <p>Un sueño hecho realidad.</p>
        </div>
        <a href="#experience" style={{ animationDelay: "720ms" }} className="group mt-8 inline-flex min-h-[52px] w-[85%] max-w-[340px] items-center justify-center gap-2 border border-[#f2ce70]/75 bg-[#2e1b0b]/55 px-4 py-3 text-[0.61rem] font-semibold uppercase tracking-[0.18em] text-[#fff1ca] shadow-[0_12px_35px_rgba(0,0,0,0.34)] backdrop-blur-sm transition duration-500 active:scale-[0.98] active:border-[#ffe5a0] active:bg-[#704410]/55 hover:-translate-y-1 hover:border-[#ffe5a0] hover:bg-[#704410]/45 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe5a0] sm:mt-12 sm:w-auto sm:px-8 sm:text-xs">
          Comenzar la experiencia
          <span aria-hidden="true" className="text-base transition-transform duration-500 group-hover:translate-y-1">↓</span>
        </a>
      </div>
    </section>
  );
}
