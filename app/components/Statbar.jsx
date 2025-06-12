import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Statbar() {
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
      <Typography variant="body2">XP: 0</Typography>
      <Typography variant="body2" sx={{ marginLeft: "20px" }}>
        Level: 1
      </Typography>
    </Box>
  );
}
