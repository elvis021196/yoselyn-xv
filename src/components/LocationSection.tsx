import { SectionReveal } from "./SectionReveal";

const GOOGLE_MAPS_URL = "https://maps.app.goo.gl/Lr5P5SajQwBTg3h57";

export function LocationSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f3e8cc] px-5 py-24 text-center sm:px-10 sm:py-32" aria-labelledby="location-title">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(194,148,63,0.25),transparent_38%),linear-gradient(135deg,#f7efd9,#eadbb8)]" />
      <SectionReveal className="mx-auto max-w-xl">
        <svg className="mx-auto h-12 w-12 text-[#9a681f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
          <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" />
        </svg>
        <p className="mt-5 font-serif text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-[#9a681f]">El lugar de la celebración</p>
        <h2 id="location-title" className="mt-4 font-serif text-4xl font-medium text-[#4b2c14] sm:text-5xl">EVENTOS JOKA</h2>
        <div className="mx-auto mt-7 max-w-sm border-y border-[#b9893b]/45 py-6 font-serif text-lg leading-8 text-[#664526]">
          <p>Av. Talara y Pastor Sevilla</p>
          <p>Villa El Salvador</p>
        </div>
        <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label="Ver la ubicación de Eventos Joka en Google Maps" className="mt-9 inline-flex min-h-[52px] items-center justify-center border border-[#9c6b24] bg-[#6b3f18] px-7 text-[0.67rem] font-semibold uppercase tracking-[0.22em] text-[#fff2d0] shadow-[0_12px_26px_rgba(96,58,19,0.22)] transition duration-300 active:scale-[0.98] hover:-translate-y-0.5 hover:bg-[#7d4a1b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b3f18]">
          Ver ubicación
        </a>
        <p className="mt-8 font-serif text-base italic text-[#79542e]">“Cada camino conduce a un momento inolvidable.”</p>
      </SectionReveal>
    </section>
  );
}
