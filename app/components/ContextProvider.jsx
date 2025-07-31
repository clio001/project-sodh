"use client";

import React, { useContext, useState } from "react";
import { createContext } from "react";
import DBitems from "../../public/dbs/db-items.json";
import DBjentries from "../../public/dbs/db-journal.json";
import DBscenes from "../../public/dbs/db-scenes.json";
import DBbadges from "../../public/dbs/db-badges.json";
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
      }}
    >
      {children}
    </MyContextProvider.Provider>
  );
};

export const useMyContext = () => useContext(MyContextProvider);
