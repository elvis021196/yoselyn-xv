import { SectionReveal } from "./SectionReveal";

function EveningDressIcon() {
  return <svg viewBox="0 0 100 150" className="h-40 w-24 text-[#e0b95f]" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M37 15 50 33l13-18M43 17l-6 40-23 70h72L63 57l-6-40M37 57h26M24 127l-9 12h70l-9-12" /><path d="M43 17h14M42 82l-16 45M58 82l16 45" /></svg>;
}

function EveningSuitIcon() {
  return <svg viewBox="0 0 100 150" className="h-40 w-24 text-[#e0b95f]" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><path d="M34 15h32l7 30-12 13 8 69H31l8-69-12-13 7-30ZM42 15l8 18 8-18M50 33v31M39 58l11 12 11-12M31 127l-8 12h54l-8-12" /><path d="M40 76h20M45 95h10" /></svg>;
}

export function DressCodeSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#25090e] px-5 py-24 text-center sm:px-10 sm:py-32" aria-labelledby="dress-code-title">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_25%,rgba(158,30,48,0.34),transparent_34%),linear-gradient(145deg,#160506,#300b12_52%,#120405)]" />
      <SectionReveal className="mx-auto max-w-xl">
        <p className="font-serif text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-[#dfbc68]">Código de vestimenta</p>
        <h2 id="dress-code-title" className="mt-4 font-serif text-4xl font-medium text-[#fff0ca]">DRESS CODE</h2>
        <p className="mt-2 font-serif text-2xl italic text-[#e9ca7d]">Elegante</p>
        <div className="mx-auto mt-9 flex max-w-xs items-end justify-center gap-8 border-y border-[#d8ae5b]/40 py-4 sm:gap-12">
          <EveningDressIcon />
          <EveningSuitIcon />
        </div>
        <p className="mx-auto mt-9 max-w-md font-serif text-lg leading-8 text-[#f4e5be]">“Acompáñanos con un atuendo elegante para celebrar esta noche llena de magia.”</p>
        <p className="mt-5 text-sm tracking-wide text-[#d9bd80]">Se sugieren tonos oscuros o neutros.</p>
      </SectionReveal>
    </section>
  );
}
