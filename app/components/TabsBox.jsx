import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import ObjectsBox from "./ObjectsBox";
import EntriesBox from "./EntriesBox";
import { useMyContext } from "./ContextProvider";
import GrammoBox from "./GrammoBox";

function TabsBox() {
  const { player } = useMyContext();
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "lightgrey", marginTop: "1rem" }}
        >
          <TabList
            onChange={handleChange}
            aria-label="Schreibtisch Tabs"
            textColor=""
            indicatorColor="secondary"
          >
            <Tab
              label={
                player.inventory.items.length > 0
                  ? `Objekte (${player.inventory.items.length})`
                  : "Objekte"
              }
              value="1"
            />
            <Tab
              label={
                player.inventory.journalEntries.length > 0
                  ? `Journal (${player.inventory.journalEntries.length})`
                  : "Journal"
              }
              value="2"
            />
            <Tab label="Grammophon" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ObjectsBox />
        </TabPanel>
        <TabPanel value="2">
          <EntriesBox />
        </TabPanel>
        <TabPanel value="3">
          <GrammoBox />
        </TabPanel>
      </TabContext>
    </div>
  );
}

export default TabsBox;
