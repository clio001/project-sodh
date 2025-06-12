import { Box, Typography } from "@mui/material";
import React from "react";
import "../globals.css";
import Selection from "../components/Selection";

export default function page() {
  return (
    <main style={{ backgroundColor: "#f0f0f0" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "95vh",
        }}
      >
        <Box className="container-scenetext">
          <Typography variant="body2" sx={{ padding: "1rem" }}>
            Scene text
          </Typography>
        </Box>
        <Box>
          <Selection />
        </Box>
      </Box>
    </main>
  );
}
