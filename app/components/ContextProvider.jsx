"use client";

import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import DBitems from "../../public/dbs/DE/db-items.json";
import DBjentries from "../../public/dbs/DE/db-journal.json";
import DBjentriesEN from "../../public/dbs/EN/db-journalEN.json";
import DBscenes from "../../public/dbs/DE/db-scenes.json";
import DBscenesEN from "../../public/dbs/EN/db-scenesEN.json";
import DBbadges from "../../public/dbs/DE/db-badges.json";
import DBbadgesEN from "../../public/dbs/EN/db-badgesEN.json";
import DBmenu from "../../public/dbs/DE/db-menu.json";
import DBmenuEN from "../../public/dbs/EN/db-menuEN.json";
const MyContextProvider = createContext();

export const ContextProvider = ({ children }) => {
  const [level, setLevel] = useState(2);

  const [player, setPlayer] = useState({
    xp: 10,
    level: 1,
    scenesVisited: [1],
    inventory: {
      items: [],
      journalEntries: [],
      badges: [],
    },
  });

  //NOTE - Database state variables
  const [inventoryItems, setInventoryItems] = useState(DBitems);
  const [inventoryEntries, setInventoryEntries] = useState(DBjentries);
  const [scene, setScene] = useState(DBscenes);
  const [inventoryBadges, setInventoryBadges] = useState(DBbadges);
  const [menu, setMenu] = useState(DBmenu);

  const [flash, setFlash] = useState("schreibtisch");
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setMenu(checked ? DBmenuEN : DBmenu);
    setScene(checked ? DBscenesEN : DBscenes);
    setInventoryBadges(checked ? DBbadgesEN : DBbadges);
    setInventoryEntries(checked ? DBjentriesEN : DBjentries);
  }, [checked]);

  return (
    <MyContextProvider.Provider
      value={{
        player,
        setPlayer,
        level,
        setLevel,
        scene,
        inventoryItems,
        setInventoryItems,
        setScene,
        inventoryEntries,
        setInventoryEntries,
        inventoryBadges,
        setInventoryBadges,
        flash,
        setFlash,
        menu,
        setMenu,
        checked,
        setChecked,
      }}
    >
      {children}
    </MyContextProvider.Provider>
  );
};

export const useMyContext = () => useContext(MyContextProvider);
