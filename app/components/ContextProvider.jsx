"use client";

import React, { useContext, useState } from "react";
import { createContext } from "react";

const MyContextProvider = createContext();

export const ContextProvider = ({ children }) => {
  const [xp, setXp] = useState(10);
  const [level, setLevel] = useState(2);
  return (
    <MyContextProvider.Provider value={{ xp, setXp, level, setLevel }}>
      {children}
    </MyContextProvider.Provider>
  );
};

export const useMyContext = () => useContext(MyContextProvider);
