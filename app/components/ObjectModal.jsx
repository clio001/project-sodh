"use client";

import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

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

  const url = `https://mirador.staatsbibliothek-berlin.de/v3/?manifest=https://content.staatsbibliothek-berlin.de/dc/PPN${menucard.ppn}/manifest`;

  const [size, setSize] = useState("20%");

  const handlesize = () => {
    if (size == "100%") {
      setSize("20%");
    } else {
      setSize("100%");
    }
  };

  return (
    <>
      <Box sx={style}>
        <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          <Box sx={{ width: "60%" }}>
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
          <Box sx={{ width: "30%", padding: "2rem" }}>
            {" "}
            <Typography
              variant="h5"
              sx={{ textWrap: "wrap", marginBottom: "0.5rem" }}
            >
              {menucard.title}
            </Typography>{" "}
            <Box
              sx={{
                display: "flex",
                flexDirection: "col",
                flexWrap: "wrap",
                alignItems: "baseline",
                gap: "0.4rem",
              }}
            >
              <Box
                component="img"
                src={menucard.image}
                width={size}
                sx={{
                  borderRadius: 2,
                  objectFit: "cover",
                }}
                onClick={handlesize}
              />
              <Typography variant="subtitle2">
                Diese Menükarte wurde {menucard.year} von {menucard.creator} im{" "}
                {menucard.publisher} in {menucard.place} angefertigt.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ObjectModal;
