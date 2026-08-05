type MusicPlayerProps = {
  isAvailable: boolean;
  isPlaying: boolean;
  onToggle: () => void;
};

export function MusicPlayer({ isAvailable, isPlaying, onToggle }: MusicPlayerProps) {
  if (!isAvailable) {
    return (
      <div className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] left-[calc(env(safe-area-inset-left)+1rem)] z-40 flex min-h-12 items-center gap-2 border border-[#cfaa5c]/35 bg-[#170c09]/90 px-3 text-xs text-[#dfc88e] shadow-[0_10px_28px_rgba(0,0,0,0.35)] backdrop-blur-sm" role="status">
        <span aria-hidden="true">♫</span>
        Audio no disponible
      </div>
    );
  }

  const label = isPlaying ? "Pausar música" : "Reproducir música";

  return (
    <button type="button" onClick={onToggle} aria-label={label} className="fixed bottom-[calc(env(safe-area-inset-bottom)+1rem)] left-[calc(env(safe-area-inset-left)+1rem)] z-40 flex min-h-12 min-w-12 items-center justify-center rounded-full border border-[#e0bd69]/70 bg-[#230e0b]/85 text-[#ffe2a0] shadow-[0_10px_28px_rgba(0,0,0,0.38)] backdrop-blur-sm transition duration-300 active:scale-95 hover:-translate-y-0.5 hover:bg-[#522013] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ffe2a0]">
      {isPlaying ? <span aria-hidden="true" className="flex gap-1"><i className="h-4 w-1.5 bg-current" /><i className="h-4 w-1.5 bg-current" /></span> : <span aria-hidden="true" className="ml-0.5 h-0 w-0 border-y-[8px] border-l-[12px] border-y-transparent border-l-current" />}
    </button>
  );
}
