"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

function ObjectModal({ menucard }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    border: "6px solid brown",
    boxShadow: 24,
    p: 2,
    backgroundImage:
      "radial-gradient(circle at center, white, lightyellow), linear-gradient(150deg, brown, lightyellow)",
  };

  return (
    <Box sx={style}>
      <Typography variant="h6">{menucard.title}</Typography>
    </Box>
  );
}

export default ObjectModal;
