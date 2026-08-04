import { HeroSection } from "@/components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section
        id="experience"
        className="relative min-h-[24rem] bg-[#080504]"
        aria-label="Próximas secciones de la invitación"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(179,126,37,0.16),_transparent_45%)]" />
        <p className="relative mx-auto max-w-2xl px-6 pt-24 text-center font-serif text-xs uppercase tracking-[0.4em] text-[#cda54a]/70">
          La experiencia continúa
        </p>
      </section>
    </main>
  );
}
