"use client";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import React from "react";
import { useMyContext } from "./ContextProvider";
import "../globals.css";
import CloseIcon from "@mui/icons-material/Close";

export default function Statbar() {
  const [open, setOpen] = React.useState(false);
  const { inventoryItems, entries, player } = useMyContext();

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
          <Typography variant="body2">XP: {player.xp}</Typography>
          <Typography variant="body2" sx={{ marginLeft: "20px" }}>
            Level: {player.level}
          </Typography>
          <Typography
            className="cursorPointer"
            variant="body2"
            sx={{ marginLeft: "20px" }}
            onClick={toggleDrawer(true)}
          >
            Inventory: <span>{player.inventory.items.length}</span>
          </Typography>
        </Box>
      </Box>

      <div>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: "100vw", maxWidth: "650px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6" sx={{ padding: "3rem" }}>
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
                  Items
                </Typography>
              </Divider>

              {/* TODO iterate over list of items and return a card/box for each item */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                {player.inventory.items.length == 0 ? (
                  <Typography variant="body2" color="grey" mt={3} mb={2}>
                    Noch keine Objekte vorhanden ...
                  </Typography>
                ) : (
                  player.inventory.items.map((item, key) => (
                    <Box
                      sx={{
                        border: "1px solid lightgray",
                        padding: "1rem",
                        borderRadius: "8px",
                        backgroundColor: "lightyellow",
                      }}
                      key={key}
                    >
                      {inventoryItems.map((inventoryItem, i) => {
                        if (inventoryItem.id == item) {
                          return inventoryItem.title;
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
                  Skills
                </Typography>
              </Divider>
              {/* TODO iterate over list of journal entries and return a card/box for each entry */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                {entries.map((entry, key) => (
                  <Box
                    sx={{
                      border: "1px solid lightgray",
                      padding: "1rem",
                      borderRadius: "8px",
                      backgroundColor: "lightpink",
                    }}
                    key={key}
                  >
                    {entry.name}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Drawer>
      </div>
    </>
  );
}
