"use client";
import { findBusRoute } from "../lib/data";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { BusRouteContext } from "../lib/Context";
import { useRouter } from "next/navigation";
import { RightArrow } from "./Icons";
import { clsx } from "clsx";

export const StationRoute = ({ location }: { location: any }) => {
  const [fromData, setFromData] = useState<any>([]);
  const [toData, setToData] = useState<any>([]);
  const [data, setData] = useState<any>([]);

  const [state, dispatch] = useContext(BusRouteContext);
  const userouter = useRouter();

  const findRoute = (origin: any, destination: any) => {
    dispatch({ type: "setOrigin", payload: origin });
    dispatch({ type: "setDestination", payload: destination });
    userouter.push("/schedule");
  };
  // get route
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
  // Combine data
  useEffect(() => {
    setData([...fromData, ...toData]);
  }, [fromData, toData]);
  return (
    <section
      id="trayek-list"
      className={clsx(
        "w-[calc(100%-2rem)] bg-green-100 mx-auto rounded-b-md transition-all",
        {
          "h-full, block": true,
          "h-0, hidden": false,
        }
      )}
    >
      <table className="w-full text-center">
        <tbody>
          {data.map((data: any, index: any) => {
            return (
              <tr
                onClick={() => findRoute(data.origin, data.destination)}
                key={data.origin + index}
                className="cursor-pointer hover:text-orange-600 hover:underline border-b border-orange-400 border-dashed last:border-none rounded-b-xl"
              >
                <td className="py-2 inile-flex">
                  <span>{data.origin}</span>
                  <RightArrow />
                  <span>{data.destination}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
