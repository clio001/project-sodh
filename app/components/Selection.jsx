"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useMyContext } from "./ContextProvider";

export default function Selection() {
  const { setLevel, setScene } = useMyContext();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Link href="/" passHref style={{ textDecoration: "none" }}>
        <Box
          sx={{
            borderLeft: "5px solid brown",
            borderRadius: "50px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            backgroundColor: "lightyellow",
            padding: "15px",
            opacity: "0.8",
            width: "80vw",
            maxWidth: "600px",
          }}
        >
          <Typography variant="body2" sx={{ color: "black" }}>
            Gehe zurück zum Start!
          </Typography>
        </Box>
      </Link>
      <Box
        sx={{
          borderLeft: "5px solid brown",
          borderRadius: "50px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "lightyellow",
          padding: "15px",
          opacity: "0.8",
          width: "80vw",
          maxWidth: "600px",
        }}
        onClick={() => setLevel((prev) => prev + 1)}
      >
        <Typography variant="body2" onClick={() => setScene(scene[1])}>
          Level up!
        </Typography>
      </Box>
      <Box
        sx={{
          borderLeft: "5px solid brown",
          borderRadius: "50px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "lightyellow",
          padding: "15px",
          opacity: "0.8",
          width: "80vw",
          maxWidth: "600px",
        }}
        onClick={() => setLevel((prev) => prev + 1)}
      >
        <Typography variant="body2" onClick={() => setScene(scene[1])}>
          Nächste Szene ...
        </Typography>
      </Box>
      <Box
        sx={{
          borderLeft: "5px solid brown",
          borderRadius: "50px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          backgroundColor: "lightyellow",
          padding: "12px",
          opacity: "0.8",
          width: "80vw",
          maxWidth: "600px",
        }}
        onClick={() => setLevel((prev) => prev + 1)}
      >
        <Typography variant="body2" onClick={() => setScene(scene[1])}>
          Füge Menükarte meinem Inventar hinzu!
        </Typography>
      </Box>
    </Box>
  );
}
