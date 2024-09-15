"use client";
import { ListRoute } from "../components/ListRoute";
import { useContext } from "react";
import { BusRouteContext } from "../lib/Context";
import { useState, useEffect } from "react";
import { findBusRoute } from "../lib/data";
import { TitlePage } from "../components/TitlePage";
import { BackButton } from "../components/BackButton";
import { Filter } from "../components/schedule/Filter";

const style = {
  backgroundColor: "#ffffff",
  backgroundImage: `url("./bg-city.jpg")`,
};

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
  return (
    <>
      <div
        id="root-container"
        className="sm:container sm:mx-auto min-h-screen p-2"
      >
        <div
          id="bg-city"
          style={style}
          className="absolute z-10 sm:w-full w-full h-[calc(25vh)] sm:left-0 left-0 bg-cover bg-center opacity-10 "
        ></div>
        {/* Title */}
        <div id="home-title" className="min-h-[calc(5vh)] mb-10 z-20 relative">
          <span id="title-icon"></span>
          <BackButton />
          <h1 className="text-4xl font-extrabold text-left p-4 text-gray-600">
            Jadwal Bus
          </h1>
        </div>
        <Filter />
        {data ? (
          data.map((item: any, index: number, arr: Array<any>) => (
            <ListRoute
              key={item._id}
              logo={item.logo}
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
