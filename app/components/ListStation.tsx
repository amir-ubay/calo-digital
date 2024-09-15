"use client";
import React from "react";
import { StationRoute } from "./StationRoute";
import { PinTerminal, TrayekBus, Route } from "./Icons";
import { useState } from "react";

export const ListStation = ({ data }: any) => {
  const [display, setDisplay] = useState(null);

  const toggleDisplay = (item: any) => {
    if (display === item) {
      setDisplay(null);
    } else {
      setDisplay(item);
    }
  };

  return (
    <>
      {data.map((item: any, index: any) => {
        return <ItemStation key={index} item={item} />;
      })}
    </>
  );
};

const ItemStation = ({ item }: { item: any }) => {
  const [display, setDisplay] = useState(false);

  const toggleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <section id="item-route" key={item.name} className=" mb-8">
      <div className="border border-grey-400 rounded-xl bg-gray-100 flex divide-x-2 divide-gray-300 divide-dashed ">
        <div id="terminal-details" className="min-h-24 p-4 basis-1/2">
          <a href={item.mapPin} target="_blank">
            <div className="inline-flex">
              <p className="font-bold text-xl text-gray-700">
                Terminal {item.name}
              </p>
              <div className="ml-2">
                <PinTerminal />
              </div>
            </div>
          </a>
          <p className="text-gray-500">{item.city}</p>

          <p className="text-gray-500">{item.type}</p>
        </div>
        <div id="terminal-buttons" className="w-full basis-1/2">
          <div
            id="route-list"
            className=" text-center text-gray-500 p-2 rounded-bl-md cursor-pointer font-extrabold"
            onClick={toggleDisplay}
          >
            <button className="inline-flex bg-orange-600 text-white px-4 py-2 rounded-full mt-6">
              Trayek Bus
              <TrayekBus />
            </button>
          </div>
        </div>
      </div>
      <StationRoute location={item.city} display={display} />
    </section>
  );
};
