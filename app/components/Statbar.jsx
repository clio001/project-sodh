"use client";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useMyContext } from "./ContextProvider";

export default function Statbar() {
  const dbjson = useMyContext();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "Brown",
        color: "lightyellow",
        padding: "0.5rem",
      }}
    >
      <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "inherit",
          marginRight: "20px",
        }}
      >
        <Typography variant="body2">Home</Typography>
      </Link>
      <Link
        href="/about"
        style={{
          textDecoration: "none",
          color: "inherit",
          marginRight: "20px",
        }}
      >
        <Typography variant="body2">About</Typography>
      </Link>
      <Typography variant="body2">XP: {dbjson.xp}</Typography>
      <Typography variant="body2" sx={{ marginLeft: "20px" }}>
        Level: {dbjson.level}
      </Typography>
    </Box>
  );
}
