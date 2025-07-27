"use client";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useMyContext } from "./ContextProvider";

function EntriesBox() {
  const { player, inventoryEntries } = useMyContext();
  return (
    <Box sx={{ padding: "1rem" }}>
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
                    <Box key={i + key} className="inventoryJournalEntry">
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
  );
}

export default EntriesBox;
