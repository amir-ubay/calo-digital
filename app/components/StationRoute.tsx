"use client";
import { findBusRoute } from "../lib/data";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { BusRouteContext } from "../lib/Context";
import { useRouter } from "next/navigation";

export const StationRoute = ({ location }: any) => {
  const [fromData, setFromData] = useState<any>([]);
  const [toData, setToData] = useState<any>([]);

  const [state, dispatch] = useContext(BusRouteContext);
  const userouter = useRouter();

  const findRoute = (origin: any, destination: any) => {
    dispatch({ type: "setOrigin", payload: origin });
    dispatch({ type: "setDestination", payload: destination });
    userouter.push("/schedule");
  };

  useEffect(() => {
    findBusRoute(location, "", "").then((res) => {
      const filtered = res.map((item: any) => {
        return {
          origin: item.origin,
          destination: item.destination,
        };
      });

      const uniqueData = filtered.filter((item: any, index: any, self: any) => {
        // Create a key string based on origin and destination
        const key = `${item.origin}-${item.destination}`;

        // Check if this key already exists in the array up to the current item
        return (
          index ===
          self.findIndex(
            (obj: any) => `${obj.origin}-${obj.destination}` === key
          )
        );
      });

      setFromData(uniqueData);
    });
    findBusRoute("", location, "").then((res) => {
      const filtered = res.map((item: any) => {
        return {
          origin: item.origin,
          destination: item.destination,
        };
      });

      const uniqueData = filtered.filter((item: any, index: any, self: any) => {
        // Create a key string based on origin and destination
        const key = `${item.origin}-${item.destination}`;

        // Check if this key already exists in the array up to the current item
        return (
          index ===
          self.findIndex(
            (obj: any) => `${obj.origin}-${obj.destination}` === key
          )
        );
      });

      setToData(uniqueData);
    });
  }, []);
  console.log("DEBUG FROM DATA", fromData);
  console.log("DEBUG TO DATA", toData);
  return (
    <>
      <div>
        <p>Kebarangkatan dari: {location}</p>
        {fromData.map((data: any) => {
          return (
            <p
              onClick={() => findRoute(data.origin, data.destination)}
              key={data.origin}
            >
              <span>{data.origin}</span> - <span>{data.destination}</span>
            </p>
          );
        })}
      </div>
      <div>
        <p>Tujuan ke: {location}</p>
        {toData.map((data: any) => {
          return (
            <p
              onClick={() => findRoute(data.origin, data.destination)}
              key={data.origin}
            >
              <span>{data.origin}</span> - <span>{data.destination}</span>
            </p>
          );
        })}
      </div>
    </>
  );
};
