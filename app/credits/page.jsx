"use client"

import { Box, Button, Modal, Popover, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import VideoPlayer from "../components/VideoPlayer";
import YouTubePlayer from "../components/YouTubePlayer";
import { BorderColor } from "@mui/icons-material";

function page() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        gap: "1rem",
      }}
    >
      <h3>CREDITS</h3>
      <h5>Audio player component</h5>
      <AudioPlayer />
      <h5>Video player component</h5>
      <VideoPlayer />
      <h5>YouTube player component</h5>
      <YouTubePlayer />
    </Box>
  );
}

export default page;
