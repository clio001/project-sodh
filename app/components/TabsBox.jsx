import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
import ObjectsBox from "./ObjectsBox";
import EntriesBox from "./EntriesBox";

function TabsBox() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "lightgrey" }}>
          <TabList onChange={handleChange} aria-label="Schreibtisch Tabs">
            <Tab label="Objekte" value="1" sx={{ borderStyle: "solid" }} />
            <Tab label="Journal" value="2" />
            <Tab label="Badges" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <ObjectsBox />
        </TabPanel>
        <TabPanel value="2">
          <EntriesBox />
        </TabPanel>
        <TabPanel value="3">Badges?</TabPanel>
      </TabContext>
    </div>
  );
}

export default TabsBox;
