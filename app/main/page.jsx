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
          height: "90vh",
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
            <Box className="container-scenetext" elevation={3}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "-1rem",
                }}
              >
                <Chip
                  label={selectedScene.title}
                  variant="outlined"
                  sx={{
                    bgcolor: "lightyellow",
                    border: "2px solid brown",
                  }}
                />
              </Box>{" "}
              <Typewriter text={selectedScene.description} speed={35} />
              {selectedScene.items &&
                selectedScene.items.map((item, i) => {
                  return (
                    <Typography variant="body2" sx={{ padding: "1rem" }}>
                      <Chip key={i} label={item.description} />
                    </Typography>
                  );
                })}
            </Box>
          </Box>
          <Box>
            {selectedScene &&
              selectedScene.options.map((option, i) => (
                <Box
                  key={option.text}
                  style={{ animationDelay: `${i * 100}ms`, overflow: "hidden" }}
                  className="button-option"
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
