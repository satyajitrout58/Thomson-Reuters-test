import React, { createContext, useReducer } from "react";
import { OlympicReducer, initialState } from "./OlympicReducer";

export const OlympicContext = createContext();

export const OlympicContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(OlympicReducer, initialState);
  return (
    <OlympicContext.Provider value={{ state, dispatch }}>
      {children}
    </OlympicContext.Provider>
  );
};
