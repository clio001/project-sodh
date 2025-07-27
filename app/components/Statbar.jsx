"use client";
import { Box, Drawer, Typography } from "@mui/material";
import React from "react";
import { useMyContext } from "./ContextProvider";
import "../globals.css";
import CloseIcon from "@mui/icons-material/Close";
import MusicPlayer from "./MusicPlayer";
import BadgesBox from "./BadgesBox";
import TabsBox from "./TabsBox";

export default function Statbar() {
  const [open, setOpen] = React.useState(false);
  const { player } = useMyContext();

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
            Schreibtisch:{" "}
            <span>
              {player.inventory.items.length +
                player.inventory.journalEntries.length}
            </span>
          </Typography>
        </Box>
      </Box>

      <div>
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          <Box sx={{ width: "100vw", maxWidth: "800px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <h1 style={{ padding: "2rem" }}>Schreibtisch</h1>

              <CloseIcon
                className="cursorPointer"
                onClick={toggleDrawer(false)}
                sx={{ margin: "1rem" }}
              />
            </Box>
            <BadgesBox />
            <TabsBox style={{ marginTop: "10rem" }} />
          </Box>
        </Drawer>
      </div>
    </>
  );
}
