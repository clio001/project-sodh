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
    <Typography
      sx={{
        display: "flex",
        width: "90vw",
        padding: "1rem",
        overflow: "hidden",
      }}
      variant="body2"
    >
      {displayed}
    </Typography>
  );
}

export default Typewriter;
