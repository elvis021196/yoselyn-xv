import { CountdownTimer } from "./CountdownTimer";

export function CountdownSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#180707] px-5 py-24 text-center sm:px-10 sm:py-32" aria-labelledby="countdown-title">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_30%,rgba(128,31,35,0.42),transparent_35%),linear-gradient(155deg,#100404,#29090c_55%,#100404)]" />
      <div className="absolute left-1/2 top-12 -z-10 h-64 w-52 -translate-x-1/2 rounded-t-full border border-[#e1bd68]/55 bg-[linear-gradient(90deg,rgba(255,231,178,0.06),rgba(255,255,255,0.16),rgba(255,231,178,0.03))] shadow-[inset_0_0_38px_rgba(255,239,193,0.14),0_0_38px_rgba(213,166,77,0.1)] sm:h-72 sm:w-60" aria-hidden="true">
        <div className="absolute bottom-6 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[#6e101b] shadow-[0_0_28px_rgba(151,21,37,0.75)]" />
        <span className="absolute bottom-[4.25rem] left-[4.2rem] h-9 w-9 rotate-[-28deg] rounded-[100%_0_100%_0] bg-[#a9192a] sm:left-[4.9rem]" />
        <span className="absolute bottom-[4.25rem] right-[4.2rem] h-9 w-9 rotate-[118deg] rounded-[100%_0_100%_0] bg-[#94101f] sm:right-[4.9rem]" />
        <span className="absolute bottom-[5.7rem] left-1/2 h-10 w-8 -translate-x-1/2 rounded-[100%_0_100%_0] bg-[#c62a37]" />
      </div>
      <div className="absolute left-1/2 top-[18.9rem] -z-10 h-5 w-64 -translate-x-1/2 rounded-full border border-[#e1bd68]/65 bg-[#3a170f] shadow-[0_8px_20px_rgba(0,0,0,0.4)] sm:top-[21.3rem] sm:w-72" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl pt-72 sm:pt-80">
        <p className="font-serif text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-[#e5c373]">La cuenta regresiva</p>
        <h2 id="countdown-title" className="mt-4 font-serif text-3xl font-medium text-[#fff0cb] sm:text-4xl">La magia está por comenzar</h2>
        <p className="mt-3 font-serif text-base italic text-[#ecd8a4]">22 de agosto de 2026 · 10:00 PM</p>
        <div className="mx-auto mt-10 max-w-2xl"><CountdownTimer /></div>
      </div>
    </section>
  );
}
