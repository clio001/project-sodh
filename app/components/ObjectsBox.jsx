"use client";
import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { useMyContext } from "./ContextProvider";

function ObjectsBox() {
  const { player, inventoryItems } = useMyContext();
  return (
    <Box sx={{ padding: "1rem" }}>
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
                          {inventoryItem.creator} ({inventoryItem.publisher})
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
  );
}

export default ObjectsBox;
