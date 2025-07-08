"use client";
import {
  Box,
  Button,
  Divider,
  Drawer,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useMyContext } from "./ContextProvider";
import "../globals.css";
import CloseIcon from "@mui/icons-material/Close";
import MusicPlayer from "./MusicPlayer";
import Image from "next/image";

export default function Statbar() {
  const [open, setOpen] = React.useState(false);
  const { inventoryItems, inventoryEntries, player } = useMyContext();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
      >
        {" "}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            backgroundColor: "Brown",
            color: "lightyellow",
            paddingLeft: "4rem",
            paddingRight: "4rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            borderRadius: "0px 0px 75px 75px",
            width: "fit-content",
          }}
        >
          <MusicPlayer />

          <Typography variant="body2" sx={{ marginLeft: "20px" }}>
            XP: {player.xp}
          </Typography>
          <Typography variant="body2" sx={{ marginLeft: "20px" }}>
            Level: {player.level}
          </Typography>
          <Typography
            className="cursorPointer"
            variant="body2"
            sx={{ marginLeft: "20px" }}
            onClick={toggleDrawer(true)}
          >
            Inventar:{" "}
            <span>
              {player.inventory.items.length +
                player.inventory.journalEntries.length}
            </span>
          </Typography>
        </Box>
      </Box>

      <div>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: "100vw", maxWidth: "500px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h4" sx={{ padding: "3rem" }}>
                Inventar
              </Typography>

              <CloseIcon
                className="cursorPointer"
                onClick={toggleDrawer(false)}
                sx={{ margin: "1rem" }}
              />
            </Box>
            <Box sx={{ padding: "1rem" }}>
              <Divider>
                <Typography variant="subtitle1" p={2}>
                  Objekte
                </Typography>
              </Divider>

              {/* TODO iterate over list of items and return a card/box for each item */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  flexWrap: "wrap",
                  gap: "2rem",
                }}
              >
                {player.inventory.items.length == 0 ? (
                  <Typography variant="body2" color="grey" mt={3} mb={2}>
                    Noch keine Objekte vorhanden ...
                  </Typography>
                ) : (
                  player.inventory.items.map((item, x) => (
                    <Box key={x}>
                      {inventoryItems.map((inventoryItem, i) => {
                        if (inventoryItem.id == item) {
                          return (
                            <Box
                              key={i + x}
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "0.5rem",
                                border: "1 solid grey",
                                width: "100%",
                              }}
                            >
                              <Box
                                component="img"
                                src={`https://content.staatsbibliothek-berlin.de/dms/PPN${inventoryItem.ppn}/1200/0/00000001.jpg`}
                                sx={{
                                  width: "6rem",
                                  borderRadius: 2,
                                  objectFit: "cover",
                                }}
                              ></Box>
                              <Box>
                                <Typography variant="body1" mb={0.5}>
                                  {inventoryItem.title}
                                </Typography>
                                <Typography variant="body2">
                                  {inventoryItem.creator} (
                                  {inventoryItem.publisher})
                                </Typography>
                                <Typography variant="body2">
                                  {inventoryItem.place},{inventoryItem.year}
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "1rem",
                                    marginTop: "1rem",
                                  }}
                                >
                                  <Button
                                    variant="contained"
                                    color="secondary.grey"
                                    size="small"
                                  >
                                    Ansehen
                                  </Button>
                                  <Button
                                    variant="contained"
                                    color="secondary.grey"
                                    size="small"
                                  >
                                    StabiKat
                                  </Button>
                                </Box>
                              </Box>
                            </Box>
                          );
                        }
                      })}
                    </Box>
                  ))
                )}
              </Box>
            </Box>
            <Box sx={{ padding: "1rem" }}>
              <Divider>
                <Typography variant="subtitle1" p={2}>
                  Journal
                </Typography>
              </Divider>
              {/* TODO iterate over list of journal entries and return a card/box for each entry */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "3rem",
                }}
              >
                {player.inventory.journalEntries.length == 0 ? (
                  <Typography variant="body2" color="grey" mt={3} mb={2}>
                    Noch keine Einträge vorhanden ...
                  </Typography>
                ) : (
                  player.inventory.journalEntries.map((entry, key) => (
                    <Box key={key}>
                      {inventoryEntries.map((inventoryEntry, i) => {
                        if (inventoryEntry.id == entry) {
                          return (
                            <Box
                              key={i + key}
                              className="inventoryJournalEntry"
                            >
                              <Typography
                                variant="body2"
                                sx={{
                                  fontWeight: "bold",
                                  fontFamily: "cursive",
                                }}
                                mb={1.5}
                              >
                                {" "}
                                {inventoryEntry.name}
                              </Typography>
                              <Typography
                                variant="body2"
                                sx={{ fontFamily: "cursive" }}
                              >
                                {inventoryEntry.description}
                              </Typography>
                            </Box>
                          );
                        }
                      })}
                    </Box>
                  ))
                )}
              </Box>
            </Box>
          </Box>
        </Drawer>
      </div>
    </>
  );
}
