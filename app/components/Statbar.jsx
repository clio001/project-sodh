"use client";
import { Box, Divider, Drawer, Typography } from "@mui/material";
import React from "react";
import { useMyContext } from "./ContextProvider";

export default function Statbar() {
  const [open, setOpen] = React.useState(false);
  const { inventoryItems, entries, player } = useMyContext();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "Brown",
        color: "lightyellow",
        padding: "0.5rem",
      }}
    >
      {/* <Link
        href="/"
        style={{
          textDecoration: "none",
          color: "inherit",
          marginRight: "20px",
        }}
      >
        <Typography variant="body2">Home</Typography>
      </Link>
      <Link
        href="/about"
        style={{
          textDecoration: "none",
          color: "inherit",
          marginRight: "20px",
        }}
      >
        <Typography variant="body2">About</Typography>
      </Link> */}
      <Typography variant="body2">XP: {player.xp}</Typography>
      <Typography variant="body2" sx={{ marginLeft: "20px" }}>
        Level: {player.level}
      </Typography>
      <Typography
        variant="body2"
        sx={{ marginLeft: "20px" }}
        onClick={toggleDrawer(true)}
      >
        Inventar
      </Typography>
      <div>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: "100vw" }}>
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
              <Typography
                variant=""
                onClick={toggleDrawer(false)}
                sx={{ padding: "1rem" }}
              >
                X
              </Typography>
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
                  flexWrap: "wrap",
                  gap: "1rem",
                }}
              >
                {player.inventory.items.map((item, key) => (
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
                ))}
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
    </Box>
  );
}
