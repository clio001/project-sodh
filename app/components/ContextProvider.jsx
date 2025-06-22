"use client";

import React, { useContext, useState } from "react";
import { createContext } from "react";
import DBitems from "../../public/dbs/db-items.json";
import DBjentries from "../../public/dbs/db-journal.json";
const MyContextProvider = createContext();

export const ContextProvider = ({ children }) => {
  const [xp, setXp] = useState(10);
  const [level, setLevel] = useState(2);

  //NOTE - Database state variables
  const [items, setItems] = useState(DBitems);
  const [entries, setEntries] = useState(DBjentries);
  const [scene, setScene] = useState([
    {
      id: 1,
      title: "Start",
      description:
        "Willkommen zum Spiel! Klicke auf 'Level up!' um zu beginnen.",
      options: [{ text: "Level up!", nextSceneId: 2 }],
    },
    {
      id: 2,
      title: "Level 1",
      description:
        "Du bist jetzt Level 1! Klicke auf 'Level up!' um weiterzumachen.",
      options: [{ text: "Level up!", nextSceneId: 3 }],
    },
    {
      id: 3,
      title: "Level 2",
      description:
        "Du bist jetzt Level 2! Klicke auf 'Level up!' um weiterzumachen.",
      options: [{ text: "Level up!", nextSceneId: 4 }],
    },
  ]);

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
