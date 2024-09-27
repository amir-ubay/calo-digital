"use client";
import { Select } from "../Select";
import { Button } from "../Button";
import { useContext } from "react";
import { BusRouteContext } from "../../lib/Context";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { WarningToast } from "../Toast";
import { useState } from "react";

export const RouteSearch = () => {
  const [state, dispatch] = useContext(BusRouteContext);
  const [error, setError] = useState("");
  const [displayError, setDisplayError] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  const timeoutError = () => {
    setDisplayError(true);
    const timer = setTimeout(() => setDisplayError(false), 5000);
    return () => clearTimeout(timer);
  };

  const onClick = () => {
    if (state.origin === state.destination) {
      setError("Kota keberangkatan dan tujuan harus berbeda");
      timeoutError();
      return null;
    } else if (state.origin === "" && state.destination === "") {
      setError("Salah satu kota keberangkatan atau tujuan harus diisi");
      timeoutError();
      return null;
    }
    const params = new URLSearchParams(searchParams);
    params.set("origin", state.origin);
    params.set("destination", state.destination);
    router.push("/schedule?" + params.toString());
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
      <WarningToast message={error} display={displayError} />
    </>
  );
};
