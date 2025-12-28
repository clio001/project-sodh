import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import ObjectsBox from "./ObjectsBox";
import EntriesBox from "./EntriesBox";
import { useMyContext } from "./ContextProvider";
import GrammoBox from "./GrammoBox";

function TabsBox() {
  const { player, menu } = useMyContext();
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
                  ? `${menu.deskModal.tabObjects} (${player.inventory.items.length})`
                  : `${menu.deskModal.tabObjects}`
              }
              value="1"
            />
            <Tab
              label={
                player.inventory.journalEntries.length > 0
                  ? `${menu.deskModal.tabJournal} (${player.inventory.journalEntries.length})`
                  : `${menu.deskModal.tabJournal}`
              }
              value="2"
            />
            <Tab label={menu.deskModal.tabPlayer} value="3" />
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
