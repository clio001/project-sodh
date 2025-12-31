"use client";

import { Box, Typography } from "@mui/material";
import React from "react";

function ObjectModal({ menucard }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    border: "6px solid brown",
    boxShadow: 24,
    backgroundImage:
      "radial-gradient(circle at center, white, lightyellow), linear-gradient(150deg, brown, lightyellow)",
  };
  const url = `https://mirador.staatsbibliothek-berlin.de/?manifest=https://content.staatsbibliothek-berlin.de/dc/PPN${menucard.ppn}/manifest`;
  return (
    <>
      <Box sx={style}>
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Box sx={{ width: "66%" }}>
            {" "}
            <iframe
              src={url}
              title={menucard.title}
              width="100%"
              height="800"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />{" "}
          </Box>
          <Box sx={{ padding: "2.5rem" }}>
            {" "}
            <Typography variant="Body1">{menucard.title}</Typography>{" "}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ObjectModal;
