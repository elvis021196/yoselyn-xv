"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MUSIC_SOURCE = "/music/musica-xv.mp3";

export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const audio = new Audio(MUSIC_SOURCE);
    audio.loop = true;
    audio.volume = 0.35;
    audio.preload = "metadata";

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      setIsAvailable(false);
      setIsPlaying(false);
    };

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);
    audioRef.current = audio;
    audio.load();

    return () => {
      audio.pause();
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
      audioRef.current = null;
    };
  }, []);

  const play = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !isAvailable) return;

    try {
      await audio.play();
    } catch {
      setIsPlaying(false);
    }
  }, [isAvailable]);

  const toggle = useCallback(() => {
    if (isPlaying) {
      audioRef.current?.pause();
      return;
    }

    void play();
  }, [isPlaying, play]);

  return { isAvailable, isPlaying, play, toggle };
}
