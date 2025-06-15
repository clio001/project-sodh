import { Box } from "@mui/material";
import React from "react";

export default function About() {
  return (
    <main>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <h3>Welcome to the About Page</h3>
      </Box>
    </main>
  );
}
