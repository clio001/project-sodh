"use client";

import React, { useContext, useState } from "react";
import { createContext } from "react";
import DBitems from "../../public/dbs/db-items.json";
import DBjentries from "../../public/dbs/db-journal.json";
import DBscenes from "../../public/dbs/db-scenes.json";
const MyContextProvider = createContext();

export const ContextProvider = ({ children }) => {
  const [xp, setXp] = useState(10);
  const [level, setLevel] = useState(2);

  //NOTE - Database state variables
  const [items, setItems] = useState(DBitems);
  const [entries, setEntries] = useState(DBjentries);
  const [scene, setScene] = useState(DBscenes);

  return (
    <MyContextProvider.Provider
      value={{
        xp,
        setXp,
        level,
        setLevel,
        scene,
        items,
        setItems,
        setScene,
        entries,
        setEntries,
      }}
    >
      {children}
    </MyContextProvider.Provider>
  );
};

export const useMyContext = () => useContext(MyContextProvider);
