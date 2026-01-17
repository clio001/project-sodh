import React from "react";
import YouTubePlayer from "./YouTubePlayer";
import { Box } from "@mui/material";

function YTPlayerModal() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "3rem",
    border: "6px solid brown",
    boxShadow: 24,
    backgroundImage:
      "radial-gradient(circle at center, white, lightyellow), linear-gradient(150deg, brown, lightyellow)",
  };
  return (
    <Box sx={style}>
      <YouTubePlayer />
    </Box>
  );
}

export default YTPlayerModal;
