import { FloatingParticles } from "./FloatingParticles";
import { FloatingPetals } from "./FloatingPetals";
import { SectionReveal } from "./SectionReveal";

export function FinalSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#090505] px-5 py-28 text-center sm:px-10 sm:py-36" aria-labelledby="final-title">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_25%,rgba(139,20,35,0.34),transparent_30%),radial-gradient(circle_at_50%_68%,rgba(183,135,48,0.16),transparent_25%),linear-gradient(160deg,#080405,#1b060a_55%,#050303)]" />
      <FloatingParticles />
      <FloatingPetals />
      <div className="relative z-10 mx-auto flex h-64 w-52 items-end justify-center rounded-t-full border border-[#dfbc68]/65 bg-[linear-gradient(90deg,rgba(255,236,185,0.04),rgba(255,255,255,0.13),rgba(255,236,185,0.03))] shadow-[inset_0_0_38px_rgba(255,239,193,0.14),0_0_36px_rgba(213,166,77,0.1)] sm:h-72 sm:w-60" aria-hidden="true">
        <div className="relative mb-7 h-20 w-20 rounded-full bg-[#73111d] shadow-[0_0_28px_rgba(159,20,41,0.8)]"><span className="absolute -left-2 top-2 h-9 w-9 rotate-[-30deg] rounded-[100%_0_100%_0] bg-[#b51d2d]" /><span className="absolute -right-2 top-2 h-9 w-9 rotate-[120deg] rounded-[100%_0_100%_0] bg-[#95101f]" /><span className="absolute left-1/2 -top-5 h-10 w-8 -translate-x-1/2 rounded-[100%_0_100%_0] bg-[#ce2b38]" /></div>
      </div>
      <div className="relative z-10 mx-auto h-5 w-64 rounded-full border border-[#dfbc68]/65 bg-[#3a170f] shadow-[0_8px_20px_rgba(0,0,0,0.4)] sm:w-72" aria-hidden="true" />
      <SectionReveal className="relative z-10 mx-auto mt-12 max-w-xl">
        <p id="final-title" className="font-serif text-2xl leading-9 italic text-[#fff0ca] sm:text-3xl">“La magia será completa con tu presencia.”</p>
        <p className="mt-8 font-serif text-xl text-[#ebcd85]">Te esperamos</p>
        <p className="mt-4 font-serif text-3xl font-medium tracking-[0.06em] text-[#fff3d6] sm:text-4xl">Yoselyn Lopez Escobar</p>
        <p className="mt-5 font-serif text-[0.68rem] font-semibold uppercase tracking-[0.42em] text-[#e5c373]">Mis XV Años</p>
      </SectionReveal>
    </section>
  );
}
