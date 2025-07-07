"use client"; // If you're using the App Router

import { useRef, useState } from "react";
import { Button } from "@mui/material";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="https://content.staatsbibliothek-berlin.de/slp/PPN1870746651-00000003/audio.mp3"
        preload="auto"
      />

      {isPlaying ? (
        <MusicNoteIcon fontSize="small" onClick={handleTogglePlay} />
      ) : (
        <MusicOffIcon fontSize="small" onClick={handleTogglePlay} />
      )}
    </div>
  );
}
