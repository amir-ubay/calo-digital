"use client";
import React from "react";
import { StationRoute } from "./StationRoute";
import { PinTerminal, TrayekBus } from "./Icons";
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
        return (
          <section id="item-route" key={item.name} className=" mb-8">
            <div className="border border-grey-400 rounded-xl bg-gray-100">
              <div id="terminal-details" className="min-h-24 p-4">
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
              <div id="terminal-buttons" className="w-full flex gap-1">
                <div
                  id="route-list"
                  className="col-span-1 w-full text-center border border-green-900 bg-green-900 text-white p-2 rounded-bl-md cursor-pointer font-extrabold hover:bg-green-700 hover:border-green-700"
                  onClick={() => toggleDisplay(index)}
                >
                  <p>
                    Trayek Bus
                    <TrayekBus />
                  </p>
                </div>
              </div>
            </div>
            {display === index && <StationRoute location={item.city} />}
          </section>
        );
      })}
    </>
  );
};
