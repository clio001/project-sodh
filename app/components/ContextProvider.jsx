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
      title: "1",
      description: "Willkommen zum Spiel! Klicke auf 'Level up!'.",
      options: [
        { text: "Szene 2", nextSceneId: 2 },
        { text: "Szene 3", nextSceneId: 3 },
      ],
    },
    {
      id: 2,
      title: "2",
      description:
        "Du bist jetzt Level 1! Klicke auf 'Level up!' um weiterzumachen.",
      options: [
        { text: "Szene 1", nextSceneId: 1 },
        { text: "Szene 3", nextSceneId: 3 },
        { text: "Szene 2", nextSceneId: 2 },
      ],
      items: [
        {
          id: 1,
          name: "Speisekarte",
          description: "Speisekarte, Hotel Bristol",
          type: "menucard",
        },
      ],
      journalEntry: {
        id: 1,
        title: "Im StabiKat recherchieren",
        content:
          "Der StabiKat ist der zentrale Sucheinstieg für die Sammlungen der Staatsbibliothek zu Berlin.",
      },
    },

    {
      id: 3,
      title: "3",
      description: "Dies ist die letzte Szene.",
      options: [{ text: "Szene 1", nextSceneId: 1 }],
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
