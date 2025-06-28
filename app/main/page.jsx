"use client";
import { Box, Chip, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import "../globals.css";
import Selection from "../components/Selection";
import { useMyContext } from "../components/ContextProvider";
import Typewriter from "../components/Typewriter";

export default function Page() {
  const { scene } = useMyContext();
  const [selectedScene, setSelectedScene] = useState(scene[0]);

  return (
    <main>
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
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Paper className="container-scenetext" elevation={3}>
              <Typography variant="body2" sx={{ padding: "1rem" }}>
                {selectedScene.title}
              </Typography>
              <Typewriter text={selectedScene.description} speed={35} />

              <Typography variant="body2" sx={{ padding: "1rem" }}>
                {selectedScene.items &&
                  selectedScene.items.map((item, i) => {
                    return <Chip key={i} label={item.description} />;
                  })}
              </Typography>
            </Paper>
          </Box>
          <Box>
            {selectedScene &&
              selectedScene.options.map((option, i) => (
                <Box
                  key={i}
                  sx={{
                    borderLeft: "5px solid brown",
                    borderRadius: "50px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "lightyellow",
                    padding: "15px",
                    opacity: "0.8",
                    width: "80vw",
                    maxWidth: "600px",
                    margin: "10px auto",
                  }}
                  onClick={() => {
                    const nextScene = scene.find(
                      (s) => s.id === option.nextSceneId
                    );
                    if (nextScene) setSelectedScene(nextScene);
                  }}
                >
                  <Typography variant="body2" sx={{ color: "black" }}>
                    {option.text}
                  </Typography>
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </main>
  );
}
