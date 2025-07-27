"use client";
import React from "react";
import { useMyContext } from "./ContextProvider";
import { Tooltip, Box } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";

function BadgesBox() {
  const { player, inventoryBadges } = useMyContext();
  return (
    <div>
      {" "}
      {player.inventory.badges.length > 0 ? (
        <Box
          sx={{
            padding: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "0.5rem",
          }}
        >
          {player.inventory.badges.map((badge, i) => (
            <div key={i}>
              {inventoryBadges.map((inventoryBadge, e) => {
                if (inventoryBadge.id == badge)
                  return (
                    <Tooltip
                      key={e}
                      title={inventoryBadge.name}
                      color={inventoryBadge.color}
                      placement="top"
                    >
                      <MilitaryTechIcon fontSize="large" />
                    </Tooltip>
                  );
                return null;
              })}
            </div>
          ))}
        </Box>
      ) : (
        <></>
      )}
    </div>
  );
}

export default BadgesBox;
