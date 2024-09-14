'use client';
import React, { createContext, useReducer } from "react";

const initialState = { origin: "", destination: "", operator: "" };

const reducer = (state, action) => {
  switch (action.type) {
    case "setOrigin":
      return { ...state, origin: action.payload, operator: "" };
    case "setDestination":
      return { ...state, destination: action.payload, operator: "" };
    case "setOperator":
      return { ...state, operator: action.payload }
    default:
      return state;
  }
};

// Create the context with the defined type
export const BusRouteContext = createContext();

export const BusRouteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BusRouteContext.Provider value={[state, dispatch]}>
      {children}
    </BusRouteContext.Provider>
  );
};
