import React from "react";
import { Calendar, PlusMins } from "./Icons";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Badge5 } from "./Badges";

export const ListRoute = ({
  operator,
  busClass,
  logo,
  origin,
  destination,
  price,
  schedule,
}: {
  operator: string;
  busClass: string;
  logo: string;
  origin: string;
  destination: string;
  price: number;
  schedule: any;
}) => {
  const [formatedPrice, setFormatedPrice] = useState("");
  useEffect(() => {
    setFormatedPrice(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
  });
  return (
    <>
      <section id="route" className="mt-12">
        <>
          <div id="item-route" key={operator} className="mb-4">
            <div className="grid grid-rows-1 grid-cols-2 border border-grey-400 rounded-xl p-4 bg-gray-100 divide-dashed divide-x-2 divide-gray-300 relative">
              <div
                id="bus-name"
                className="row-span-1 col-span-1 justify-self-center content-center"
              >
                <div id="bus-logo">
                  {logo && (
                    <Image src={logo} width={250} height={100} alt={operator} />
                  )}
                </div>
                <div
                  id="cipped"
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-white"
                ></div>
              </div>
              <div
                id="bus-class"
                className="row-span-1 col-span-1 text-left w-full ml-5 pl-6"
              >
                <div id="operator" className="font-bold text-2xl text-gray-600">
                  {operator}
                </div>
                <div>
                  <span className="text-gray-600 font-normal text-xl">
                    {busClass}
                  </span>
                </div>
                <div
                  id="bus-price"
                  className="font-bold text-xl text-gray-500 mt-6"
                >
                  <PlusMins /> Rp {formatedPrice}
                </div>
                <div
                  id="cipped"
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-white"
                ></div>
                <div
                  id="bus-schedule"
                  className="absolute right-4 bottom-4 bg-orange-600 rounded-full p-1"
                >
                  <div
                    // onClick={() => onClick(item.operator)}
                    className="cursor-pointer"
                  >
                    <Calendar />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="schedule-dropdown">
            <table className="w-full mx-auto">
              <tbody>
                {schedule.map((item: any) => (
                  <tr key={item.busStop + item.time}>
                    <td className="">{item.busStop}</td>
                    <td>{item.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      </section>
    </>
  );
};
