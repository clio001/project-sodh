import { Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";

function Typewriter({ text, speed }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed(""); // Reset on text change
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return (
    <div
      style={{
        fontFamily: "arial",
        padding: "1rem",
        paddingBottom: "1.5rem",
        fontSize: "14px",
        lineHeight: "1.5",
      }}
    >
      {displayed}
    </div>
  );
}

export default Typewriter;
