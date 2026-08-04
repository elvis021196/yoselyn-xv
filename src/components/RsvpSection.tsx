import { SectionReveal } from "./SectionReveal";

const WHATSAPP_NUMBER = "51934355428";
const CONFIRMATION_MESSAGE = "Hola, confirmo mi asistencia a los XV años de Yoselyn Lopez Escobar.";

export function RsvpSection() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CONFIRMATION_MESSAGE)}`;

  return (
    <section className="relative isolate overflow-hidden bg-[#100807] px-5 py-24 text-center sm:px-10 sm:py-32" aria-labelledby="rsvp-title">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(178,127,41,0.2),transparent_35%),linear-gradient(160deg,#0a0504,#1a0b07,#0a0504)]" />
      <SectionReveal className="mx-auto max-w-xl">
        <p className="font-serif text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-[#dfbc68]">Confirmación</p>
        <h2 id="rsvp-title" className="mt-4 font-serif text-3xl font-medium text-[#fff0ca] sm:text-4xl">Celebremos juntos</h2>
        <p className="mx-auto mt-6 max-w-md font-serif text-xl leading-8 italic text-[#eddbad]">“Tu presencia hará que esta historia sea aún más especial.”</p>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Confirmar asistencia por WhatsApp" className="mt-10 inline-flex min-h-[52px] items-center justify-center border border-[#e1bf70] bg-[#6d1b29] px-7 text-[0.67rem] font-semibold uppercase tracking-[0.2em] text-[#fff0ca] shadow-[0_12px_28px_rgba(0,0,0,0.35)] transition duration-300 active:scale-[0.98] hover:-translate-y-0.5 hover:bg-[#831f30] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4d783]">Confirmar asistencia</a>
      </SectionReveal>
    </section>
  );
}
