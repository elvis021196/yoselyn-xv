export function GoldenMonogram() {
  return (
    <div className="relative flex h-[4.35rem] w-[4.35rem] items-center justify-center rounded-full border border-[#e5bd61]/75 bg-[#120d08]/35 shadow-[0_0_32px_rgba(222,173,59,0.28)] backdrop-blur-[2px] sm:h-28 sm:w-28" aria-label="Y XV">
      <span className="absolute inset-1 rounded-full border border-[#e5bd61]/35" />
      <span className="font-serif text-[1.35rem] leading-[0.75] tracking-[0.12em] text-[#f4cf75] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] sm:text-3xl">
        Y
        <span className="mt-2 block text-[0.68rem] tracking-[0.23em] sm:mt-3 sm:text-base">XV</span>
      </span>
    </div>
  );
}
