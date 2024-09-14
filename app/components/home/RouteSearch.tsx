"use client";
import { Select } from "../Select";
import { Button } from "../Button";
import { useContext, useEffect } from "react";
import { BusRouteContext } from "../../lib/Context";
import { useRouter } from "next/navigation";

export const RouteSearch = () => {
  const [state, dispatch] = useContext(BusRouteContext);
  const router = useRouter();

  const onClick = () => {
    if (state.origin === state.destination) return null;
    router.push("/schedule");
  };
  return (
    <>
      <Select
        value={state.origin}
        onChange={(e) =>
          dispatch({ type: "setOrigin", payload: e.target.value })
        }
        placeholder="pilih kota..."
        label="Keberangkatan"
        type="origin"
      />
      <Select
        value={state.destination}
        onChange={(e) =>
          dispatch({ type: "setDestination", payload: e.target.value })
        }
        placeholder="pilih kota..."
        label="Tujuan"
        type="destination"
      />

      <Button onClick={onClick} label="Cari Jadwal" />
    </>
  );
};
