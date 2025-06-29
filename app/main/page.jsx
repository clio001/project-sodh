"use client";
import { Avatar, Box, Chip, Paper, Typography } from "@mui/material";
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
                  justifyContent: "space-between",
                  marginTop: "-1rem",
                }}
              >
                <Avatar
                  sx={{
                    border: "2px solid brown",
                    width: 50,
                    height: 50,
                    marginLeft: "1rem",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_TzQivSqhrD2Dj8HwxngUWatXMMO4AD8QA&s"
                ></Avatar>
                <Chip
                  label={selectedScene.title}
                  variant="outlined"
                  sx={{
                    bgcolor: "lightyellow",
                    border: "2px solid brown",
                    marginRight: "1rem",
                  }}
                />
              </Box>{" "}
              <Typewriter text={selectedScene.description} speed={35} />
              {selectedScene.items &&
                selectedScene.items.map((item, i) => {
                  return (
                    <Typography
                      key={i}
                      variant="body2"
                      sx={{ padding: "1rem" }}
                    >
                      <Chip label={item.description} />
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
