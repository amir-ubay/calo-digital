"use client";
import { findBusRoute } from "../lib/data";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { BusRouteContext } from "../lib/Context";
import { useRouter } from "next/navigation";
import { RightArrow } from "./Icons";
import { clsx } from "clsx";
import { useSearchParams } from "next/navigation";

interface BusRoute {
  origin: string;
  destination: string;
  operator: string;
}

export const StationRoute = ({
  location,
  display,
}: {
  location: string;
  display: boolean;
}) => {
  const [fromData, setFromData] = useState([]);
  const [toData, setToData] = useState([]);
  const [data, setData] = useState([]);

  const [, dispatch] = useContext(BusRouteContext);
  const userouter = useRouter();
  const searchParams = useSearchParams();

  const findRoute = (origin: string, destination: string) => {
    dispatch({ type: "setOrigin", payload: origin });
    dispatch({ type: "setDestination", payload: destination });
    const params = new URLSearchParams(searchParams);
    params.set("origin", origin);
    params.set("destination", destination);
    userouter.push("/schedule" + "?" + params.toString());
  };
  // get route
  useEffect(() => {
    findBusRoute(location, "", "").then((res) => {
      const filtered = res.map((item: BusRoute) => {
        return {
          origin: item.origin,
          destination: item.destination,
        };
      });

      const uniqueData = filtered.filter(
        (item: BusRoute, index: number, self: BusRoute[]) => {
          // Create a key string based on origin and destination
          const key = `${item.origin}-${item.destination}`;

          // Check if this key already exists in the array up to the current item
          return (
            index ===
            self.findIndex((obj) => `${obj.origin}-${obj.destination}` === key)
          );
        }
      );

      setFromData(uniqueData);
    });
    findBusRoute("", location, "").then((res) => {
      const filtered = res.map((item: BusRoute) => {
        return {
          origin: item.origin,
          destination: item.destination,
        };
      });

      const uniqueData = filtered.filter(
        (item: BusRoute, index: number, self: BusRoute[]) => {
          // Create a key string based on origin and destination
          const key = `${item.origin}-${item.destination}`;

          // Check if this key already exists in the array up to the current item
          return (
            index ===
            self.findIndex((obj) => `${obj.origin}-${obj.destination}` === key)
          );
        }
      );

      setToData(uniqueData);
    });
  }, [location]);
  // Combine data
  useEffect(() => {
    setData([...fromData, ...toData]);
  }, [fromData, toData]);
  return (
    <section
      id="trayek-list"
      className={clsx(
        "w-[calc(100%-2rem)] bg-gray-200  p-4 mx-auto rounded-b-md transition-all shadow-lg",
        {
          "h-full, block": display === true,
          "h-0, hidden": display === false,
        }
      )}
    >
      <section className="w-full text-left text-gray-600 font-bold">
        <ol className="">
          {data.map((data: BusRoute, index: number) => {
            return (
              <li
                onClick={() => findRoute(data.origin, data.destination)}
                key={data.origin + index}
                className="cursor-pointer rounded-b-xl"
              >
                <p className="py-2 inile-flex hover:text-orange-600">
                  {index + 1}. <span>{data.origin}</span>
                  <RightArrow />
                  <span>{data.destination}</span>
                </p>
              </li>
            );
          })}
        </ol>
      </section>
    </section>
  );
};
