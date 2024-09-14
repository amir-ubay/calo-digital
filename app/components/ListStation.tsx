"use client";
import React from "react";
import { StationRoute } from "./StationRoute";
import { PinTerminal } from "./Icons";

export const ListStation = ({ data }: any) => {
  return (
    <>
      {data.map((item: any) => {
        return (
          <div id="item-route" key={item.name}>
            <div className="border border-grey-400 rounded-xl bg-gray-100 mb-8">
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
                  className="col-span-1 w-full text-center border border-green-900 bg-green-900 text-white p-2 rounded-bl-md cursor-pointer font-extrabold"
                >
                  <p>Trayek Bus</p>
                </div>
                <div
                  id="operator-list"
                  className="col-span-1 w-full text-center border border-blue-900 bg-blue-900 text-white p-2 rounded-br-md cursor-pointer  font-extrabold"
                >
                  <p>Operator Bus</p>
                </div>
              </div>
            </div>
            {/* <StationRoute location={item.city} /> */}
          </div>
        );
      })}
    </>
  );
};
