import { SectionReveal } from "./SectionReveal";

function WardrobeContents() {
  return (
    <svg viewBox="0 0 300 250" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="champagne-dress" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#fff0bb" /><stop offset=".55" stopColor="#d5ad5f" /><stop offset="1" stopColor="#85602c" /></linearGradient>
        <linearGradient id="black-dress" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#3f3437" /><stop offset="1" stopColor="#070708" /></linearGradient>
        <linearGradient id="gold-frame" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#8c621e" /><stop offset=".5" stopColor="#f2d17b" /><stop offset="1" stopColor="#79501a" /></linearGradient>
      </defs>
      <path d="M28 44h159" stroke="#c99b48" strokeWidth="3" /><path d="M55 39v14M129 39v14M177 39v14" stroke="#e6be6a" strokeWidth="2" />
      <path d="M53 53c8 6 18 6 27 0l6 19-10 9 15 102H35l15-102-9-9 12-19Z" fill="url(#champagne-dress)" stroke="#ffe6a1" strokeOpacity=".7" strokeWidth="1.3" /><path d="M49 87h34M47 111h38M43 139h45" stroke="#fff0bf" strokeOpacity=".5" />
      <path d="M103 53c7 6 16 6 24 0l6 18-8 10 13 101H91l13-101-8-10 7-18Z" fill="url(#black-dress)" stroke="#a78561" strokeOpacity=".52" strokeWidth="1.2" /><path d="M101 86h27M98 113h33M95 143h39" stroke="#b18a65" strokeOpacity=".32" />
      <path d="M147 54h25l8 22-8 11 9 96h-45l9-96-8-11 10-22Z" fill="#111114" stroke="#b9964b" strokeOpacity=".55" /><path d="m158 55 2 36 3-36M151 86h18" stroke="#e2c174" strokeOpacity=".6" strokeWidth="1.5" />
      <rect x="204" y="38" width="55" height="112" rx="26" fill="url(#gold-frame)" /><rect x="211" y="45" width="41" height="98" rx="20" fill="#2c1d1a" /><path d="M218 62c9-9 22-11 29-5M218 88c8-5 20-5 29 0" stroke="#f4dd9a" strokeOpacity=".28" strokeWidth="2" />
      <path d="M211 187c9-9 26-9 35 0l-5 11h-25l-5-11ZM247 188c7-6 16-6 22 0l-4 9h-15l-3-9Z" fill="#b48a51" /><circle cx="275" cy="176" r="11" fill="#741326" /><path d="M275 190v25" stroke="#6d7339" strokeWidth="3" /><path d="M267 201c-7-5-12-2-14 3 6 4 12 3 15 0M279 207c7-5 12-2 14 3-6 4-12 3-15 0" fill="#60723a" />
      <circle cx="239" cy="173" r="4" fill="#f0d27b" /><circle cx="250" cy="170" r="3" fill="#f0d27b" /><circle cx="260" cy="176" r="3" fill="#f0d27b" />
    </svg>
  );
}

const colorSuggestions = [
  ["Negro", "#111113"], ["Borgoña", "#681426"], ["Champagne", "#d7b26a"], ["Azul marino", "#132341"], ["Dorado", "#a6792c"],
] as const;

export function DressCodeSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#110506] px-5 pt-[calc(env(safe-area-inset-top)+6rem)] pb-[calc(env(safe-area-inset-bottom)+6rem)] text-center sm:px-10 sm:py-32" aria-labelledby="dress-code-title">
      <div className="dress-hall absolute inset-0 -z-20" aria-hidden="true"><span className="dress-window dress-window-left" /><span className="dress-window dress-window-right" /><span className="dress-curtain dress-curtain-left" /><span className="dress-curtain dress-curtain-right" /><span className="dress-floor" /></div>
      <div className="dress-candlelight absolute inset-0 -z-10" aria-hidden="true" />
      <SectionReveal className="dress-scene relative z-10 mx-auto max-w-xl">
        <div className="wardrobe mx-auto" aria-hidden="true"><div className="wardrobe-aura" /><div className="wardrobe-frame"><div className="wardrobe-interior"><WardrobeContents /></div><div className="wardrobe-door wardrobe-door-left"><span /></div><div className="wardrobe-door wardrobe-door-right"><span /></div></div><div className="wardrobe-dust"><i /><i /><i /><i /></div></div>
        <div className="dress-copy mx-auto mt-9 max-w-md">
          <p className="dress-reveal dress-kicker font-serif text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-[#dfbc68]">Código de vestimenta</p>
          <h2 id="dress-code-title" className="dress-reveal dress-title mt-4 font-serif text-3xl font-medium text-[#fff0ca] sm:text-4xl">CÓDIGO DE VESTIMENTA</h2>
          <p className="dress-reveal dress-subtitle mt-3 font-serif text-xl italic text-[#e9ca7d]">Elegancia para una noche mágica</p>
          <p className="dress-reveal dress-description mx-auto mt-7 max-w-md whitespace-pre-line font-serif text-[1.03rem] leading-8 text-[#f4e5be] sm:text-lg sm:leading-9">“Puedes acompañarnos con un atuendo elegante o semiformal.{"\n\n"}Lo más importante será compartir esta noche tan especial con nosotros.”</p>
          <div className="dress-reveal dress-colors mt-8 border-y border-[#d8ae5b]/35 py-6"><p className="text-[0.62rem] font-semibold uppercase tracking-[0.33em] text-[#dfbc68]">Tonos sugeridos</p><ul className="mt-4 flex justify-center gap-3 sm:gap-5" aria-label="Tonos sugeridos"><li><span className="dress-color" style={{ backgroundColor: colorSuggestions[0][1] }} /><span>Negro</span></li><li><span className="dress-color" style={{ backgroundColor: colorSuggestions[1][1] }} /><span>Borgoña</span></li><li><span className="dress-color" style={{ backgroundColor: colorSuggestions[2][1] }} /><span>Champagne</span></li><li><span className="dress-color" style={{ backgroundColor: colorSuggestions[3][1] }} /><span>Azul marino</span></li><li><span className="dress-color" style={{ backgroundColor: colorSuggestions[4][1] }} /><span>Dorado</span></li></ul></div>
          <p className="dress-reveal dress-note mt-6 text-sm tracking-wide text-[#d9bd80]">Evitar ropa deportiva o demasiado informal.</p>
        </div>
      </SectionReveal>
    </section>
  );
}
