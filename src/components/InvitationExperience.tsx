"use client";

import { useCallback, useState, type ReactNode } from "react";
import { useBackgroundMusic } from "@/hooks/useBackgroundMusic";
import { IntroScreen } from "./IntroScreen";
import { MusicPlayer } from "./MusicPlayer";

type InvitationExperienceProps = {
  children: ReactNode;
};

export function InvitationExperience({ children }: InvitationExperienceProps) {
  const [hasEntered, setHasEntered] = useState(false);
  const { isAvailable, isPlaying, play, toggle } = useBackgroundMusic();
  const handleExitComplete = useCallback(() => setHasEntered(true), []);

  return (
    <>
      <IntroScreen onOpen={() => void play()} onExitComplete={handleExitComplete} />
      <main>{children}</main>
      {hasEntered && <MusicPlayer isAvailable={isAvailable} isPlaying={isPlaying} onToggle={toggle} />}
    </>
  );
}
