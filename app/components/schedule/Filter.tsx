"use client";
import { Select } from "../Select";
import { SelectBus } from "../SelectBus";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { BusRouteContext } from "../../lib/Context";

export const Filter = () => {
  const [state, dispatch] = useContext(BusRouteContext);

  return (
    <div className="grid grid-rows-3 bg-white relative z-30 p-4 rounded-xl border border-gray-200 shadow-lg">
      <div className="row-span-1">
        <Select
          value={state.origin}
          onChange={(e) =>
            dispatch({ type: "setOrigin", payload: e.target.value })
          }
          placeholder="Kota Keberangkatan"
          label="Keberangkatan"
          type="origin"
        />
      </div>
      <div className="row-span-1">
        <Select
          value={state.destination}
          onChange={(e) =>
            dispatch({ type: "setDestination", payload: e.target.value })
          }
          placeholder="Kota Tujuan"
          label="Tujuan"
          type="destination"
        />
      </div>
      <div className="row-span-1">
        <Select
          value={state.operator}
          onChange={(e) =>
            dispatch({ type: "setOperator", payload: e.target.value })
          }
          placeholder="Semua Operator Bus"
          label="Operator Bus"
          type="operator"
        />
      </div>
    </div>
  );
};
