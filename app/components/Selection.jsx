import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Selection() {
  return (
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
        <Typography variant="body2">Gehe zurück zum Start!</Typography>
      </Box>
    </Link>
  );
}
