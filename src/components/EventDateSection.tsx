import { SectionReveal } from "./SectionReveal";

export function EventDateSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#120906] px-5 py-24 text-center sm:px-10 sm:py-32" aria-labelledby="event-date-title">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(179,124,37,0.22),transparent_28%),radial-gradient(circle_at_85%_80%,rgba(115,18,31,0.25),transparent_32%),linear-gradient(145deg,#0c0604,#1c0d08_55%,#0a0504)]" />
      <SectionReveal className="mx-auto max-w-xl">
        <p className="font-serif text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-[#dfbc68]">Reserva la fecha</p>
        <h2 id="event-date-title" className="mt-4 font-serif text-3xl font-medium text-[#fff0ca] sm:text-4xl">Una noche para recordar</h2>

        <div className="mt-10 grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-[#f8e5b4] sm:gap-8">
          <div className="border border-[#d7ad5a]/60 bg-[#f8e8bf]/[0.06] px-3 py-6 backdrop-blur-sm">
            <svg className="mx-auto h-9 w-9 text-[#e8c46d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" aria-hidden="true">
              <rect x="3" y="5" width="18" height="16" rx="1" /><path d="M7 3v4M17 3v4M3 10h18M7 14h.01M12 14h.01M17 14h.01M7 18h.01M12 18h.01M17 18h.01" />
            </svg>
            <p className="mt-4 font-serif text-[0.64rem] font-semibold tracking-[0.25em]">SÁBADO</p>
            <p className="mt-1 font-serif text-5xl leading-none text-[#fff2cf]">22</p>
            <p className="mt-2 font-serif text-xs tracking-[0.2em]">AGOSTO</p>
            <p className="mt-1 font-serif text-sm tracking-[0.2em]">2026</p>
          </div>
          <span className="h-24 w-px bg-[#d7ad5a]/55" aria-hidden="true" />
          <div className="border border-[#d7ad5a]/60 bg-[#f8e8bf]/[0.06] px-3 py-8 backdrop-blur-sm">
            <svg className="mx-auto h-9 w-9 text-[#e8c46d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" aria-hidden="true">
              <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3.5 2" />
            </svg>
            <time dateTime="2026-08-22T22:00:00-05:00" className="mt-5 block font-serif text-[clamp(1.75rem,8vw,2.5rem)] leading-none text-[#fff2cf]">10:00</time>
            <p className="mt-2 font-serif text-sm tracking-[0.2em]">p. m.</p>
          </div>
        </div>
        <p className="mx-auto mt-9 max-w-sm font-serif text-lg leading-8 italic text-[#eed9a2]">“Cuando el reloj marque las diez, la magia dará comienzo.”</p>
      </SectionReveal>
    </section>
  );
}
