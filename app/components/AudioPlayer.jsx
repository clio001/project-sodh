import React from "react";

function AudioPlayer() {
  return (
    <div>
      <figure>
        <figcaption></figcaption>
        <audio
          controls
          src="https://content.staatsbibliothek-berlin.de/slp/PPN1870746651-00000003/audio.mp3"
        ></audio>
        <a href="/shared-assets/audio/t-rex-roar.mp3"> </a>
      </figure>
    </div>
  );
}

export default AudioPlayer;
