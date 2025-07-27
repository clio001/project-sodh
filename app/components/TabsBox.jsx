import React, { useState } from "react";
import { Box, Tab } from "@mui/material";
import { TabPanel, TabContext, TabList } from "@mui/lab";
function TabsBox() {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Objekte" value="1" sx={{ borderStyle: "solid" }} />
            <Tab label="Journal" value="2" />
            <Tab label="Badges" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Objekte</TabPanel>
        <TabPanel value="2">Einträge</TabPanel>
        <TabPanel value="3">Badges?</TabPanel>
      </TabContext>
    </div>
  );
}

export default TabsBox;
