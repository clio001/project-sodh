"use client";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import React, { useState } from "react";
import "../globals.css";
import { useMyContext } from "../components/ContextProvider";
import Typewriter from "../components/Typewriter";
import Statbar from "../components/Statbar";

export default function Page() {
  const { scene, player, setPlayer, inventoryItems } = useMyContext();
  const [selectedScene, setSelectedScene] = useState(scene[0]);

  return (
    <main>
      <Statbar />
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
                  src={selectedScene.avatar}
                ></Avatar>
                <Chip
                  label={selectedScene.location}
                  variant="outlined"
                  className="background-location"
                  sx={{
                    border: "2px solid brown",
                    marginRight: "1rem",
                  }}
                />
              </Box>{" "}
              <Typewriter text={selectedScene.description} speed={35} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {selectedScene.items &&
                  selectedScene.items.map((item, i) => {
                    return (
                      <div key={i}>
                        {" "}
                        {inventoryItems.map((inventoryItem) => {
                          if (inventoryItem.id == item) {
                            return (
                              <Chip
                                key={i + item}
                                label={"+ " + inventoryItem.title}
                                sx={{
                                  marginLeft: "0.5rem",
                                  marginBottom: "1rem",
                                }}
                                onClick={() => {
                                  if (!player.inventory.items.includes(item)) {
                                    setPlayer({
                                      ...player,
                                      xp: player.xp + 25,
                                      inventory: {
                                        items: [
                                          ...player.inventory.items,
                                          item,
                                        ],
                                        journalEntries: [
                                          ...player.inventory.journalEntries,
                                        ],
                                      },
                                    });
                                  }
                                }}
                              />
                            );
                          }
                        })}
                      </div>
                    );
                  })}
              </Box>
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
                    if (option.nextSceneId != 0) {
                      if (!player.scenesVisited.includes(option.nextSceneId)) {
                        setPlayer({
                          ...player,
                          xp: player.xp + 10,
                          scenesVisited: [
                            ...player.scenesVisited,
                            option.nextSceneId,
                          ],
                        });

                        console.log(player.scenesVisited);
                      }

                      const nextScene = scene.find(
                        (s) => s.id === option.nextSceneId
                      );
                      if (nextScene) setSelectedScene(nextScene);
                    } else {
                      window.location.href = "/";
                    }
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
