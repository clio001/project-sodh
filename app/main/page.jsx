"use client";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import React, { useState } from "react";
import "../globals.css";
import { useMyContext } from "../components/ContextProvider";
import Typewriter from "../components/Typewriter";
import Statbar from "../components/Statbar";
import XpCheckHeinzi from "../components/XpCheckHeinzi";

export default function Page() {
  const { scene, player, setPlayer, inventoryItems, inventoryEntries } =
    useMyContext();
  const [selectedScene, setSelectedScene] = useState(scene[0]);

  return (
    <main>
      <Statbar />
      <XpCheckHeinzi />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "90vh",
          justifyContent: "space-between",
        }}
      >
        <Box></Box>
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
                {/* // Check for items  */}
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
                                        badges: [...player.inventory.badges],
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
                {/* Check for journal entries */}
                {selectedScene.journalEntries &&
                  selectedScene.journalEntries.map((entry, i) => {
                    console.log(entry);
                    return (
                      <div key={i}>
                        {" "}
                        {inventoryEntries.map((inventoryEntry) => {
                          if (inventoryEntry.id == entry) {
                            return (
                              <Chip
                                key={i + entry}
                                variant="outlined"
                                label={"+ " + inventoryEntry.name}
                                sx={{
                                  marginLeft: "0.5rem",
                                  marginBottom: "1rem",
                                  borderColor: "pink",
                                }}
                                onClick={() => {
                                  if (
                                    !player.inventory.journalEntries.includes(
                                      entry
                                    )
                                  ) {
                                    setPlayer({
                                      ...player,
                                      xp: player.xp + 25,
                                      inventory: {
                                        items: [...player.inventory.items],
                                        journalEntries: [
                                          ...player.inventory.journalEntries,
                                          entry,
                                        ],
                                        badges: [...player.inventory.badges],
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
                    // Check if player wants to exit game
                    if (option.nextSceneId != 0) {
                      // Check if anything is required to access scene
                      const nextScene = scene.find(
                        (s) => s.id === option.nextSceneId
                      );
                      if (nextScene.required) {
                        console.log(player.inventory.journalEntries);
                        // Check if required journalEntry exists in player inventory
                        if (
                          player.inventory.journalEntries.includes(
                            nextScene.required.journalEntry
                          )
                        ) {
                          // If journalEntry exists, continue with the next scene in option
                          if (
                            !player.scenesVisited.includes(option.nextSceneId)
                          ) {
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
                          // If journalEntry is missing, continue with refused scene from scene object
                          const refusedScene = scene.find(
                            (s) => s.id === nextScene.required.refusedSceneId
                          );
                          if (refusedScene) setSelectedScene(refusedScene);
                        }
                      } else {
                        // If nothing is required continue with options id
                        if (
                          !player.scenesVisited.includes(option.nextSceneId)
                        ) {
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
                      }
                    } else {
                      // If options scene id is 0 sent player to home page
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
