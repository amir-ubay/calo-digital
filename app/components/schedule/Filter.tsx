"use client";
import { Select } from "../Select";
import { SelectBus } from "../SelectBus";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { BusRouteContext } from "../../lib/Context";

export const Filter = () => {
  const [state, dispatch] = useContext(BusRouteContext);

  onchange = (e: any) => {};
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <Select
          value={state.origin}
          onChange={(e) =>
            dispatch({ type: "setOrigin", payload: e.target.value })
          }
          placeholder="Kota Keberangkatan"
        />
      </div>
      <div className="col-span-1">
        <Select
          value={state.destination}
          onChange={(e) =>
            dispatch({ type: "setDestination", payload: e.target.value })
          }
          placeholder="Kota Tujuan"
        />
      </div>
      <div className="col-span-1">
        <SelectBus
          value={state.operator}
          onChange={(e) =>
            dispatch({ type: "setOperator", payload: e.target.value })
          }
          placeholder="Semua Operator Bus"
        />
      </div>
    </div>
  );
};
