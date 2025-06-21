"use client";
import { Box, Button, Drawer, Paper, Typography } from "@mui/material";
import React, { use } from "react";
import "../globals.css";
import Selection from "../components/Selection";
import { useMyContext } from "../components/ContextProvider";

export default function page() {
  const { scene } = useMyContext();

  return (
    <main style={{ backgroundColor: "#f0f0f0" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "95vh",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="body1" sx={{ padding: "1rem" }}>
            Grafik
          </Typography>
        </Box>
        <Box mb={2}>
          <Box>
            <Paper className="container-scenetext" elevation={3}>
              <Typography variant="body2" sx={{ padding: "1rem" }}>
                {scene[0].description}
              </Typography>
            </Paper>
          </Box>
          <Box>
            <Selection />
          </Box>
        </Box>
      </Box>
    </main>
  );
}
