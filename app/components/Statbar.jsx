"use client";
import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { useMyContext } from "./ContextProvider";

export default function Statbar() {
  const dbjson = useMyContext();
  const [open, setOpen] = React.useState(false);
  const { items, entries } = useMyContext();

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
      <Typography variant="body2">XP: {dbjson.xp}</Typography>
      <Typography variant="body2" sx={{ marginLeft: "20px" }}>
        Level: {dbjson.level}
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
            <Box>
              <Divider>
                <Typography variant="subtitle1" p={2}>
                  Items
                </Typography>
              </Divider>

              {/* TODO iterate over list of items and return a card/box for each item */}
              {items.map((item, key) => (
                <Box key={key}>{item.title}</Box>
              ))}
            </Box>
            <Box>
              <Divider>
                <Typography variant="subtitle1" p={2}>
                  Skills
                </Typography>
              </Divider>
              {/* TODO iterate over list of journal entries and return a card/box for each entry */}
              {entries.map((entry, key) => (
                <Box key={key}>{entry.name}</Box>
              ))}
            </Box>
          </Box>
        </Drawer>
      </div>
    </Box>
  );
}
