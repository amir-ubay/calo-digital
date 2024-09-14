"use client";
import { ListRoute } from "../components/ListRoute";
import { useContext } from "react";
import { BusRouteContext } from "../lib/Context";
import { useState, useEffect } from "react";
import { findBusRoute } from "../lib/data";
import { TitlePage } from "../components/TitlePage";
import { BackButton } from "../components/BackButton";
import { Filter } from "../components/schedule/Filter";

export default function Page() {
  const [state] = useContext(BusRouteContext);
  const origin = state.origin;
  const destination = state.destination;

  const [title, setTitle] = useState({});
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    findBusRoute(state.origin, state.destination, state.operator).then(
      (res) => {
        setData(res);
        setTitle({ origin, destination });
      }
    );
  }, [state]);

  console.log("DEBUG PAGE SCHEDULE: ", state);
  return (
    <>
      <BackButton />
      <TitlePage title={origin + " > " + destination} />
      <div
        id="root-container"
        className="sm:container sm:mx-auto border-2 border-red-600 min-h-screen p-8"
      >
        <Filter />
        {data ? (
          data.map((item: any, index: number, arr: Array<any>) => (
            <ListRoute
              key={item._id}
              operator={item.operator}
              busClass={item.busClass}
              origin={item.origin}
              destination={item.destination}
              price={item.price}
              schedule={item.schedules}
            />
          ))
        ) : (
          <p>Jadwal belum ditemukan</p>
        )}
      </div>
    </>
  );
}
