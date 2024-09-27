import React from "react";
import { Calendar, PlusMins, RightArrow } from "./Icons";
import Image from "next/image";
import { useState, useEffect } from "react";

interface ScheduleData {
  _id: string;
  busClass: string;
  date: string;
  route: string;
  time: string;
  operator: string;
  logo: string;
  origin: string;
  destination: string;
  price: number;
  schedules: string;
  busStop: string;
}

type ScheduleList = ScheduleData[];

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
  schedule: ScheduleList;
}) => {
  const [formatedPrice, setFormatedPrice] = useState("");
  const [openSchedule, setOpenSchedule] = useState(false);

  const toogleSchedule = () => {
    setOpenSchedule(!openSchedule);
  };

  useEffect(() => {
    setFormatedPrice(price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
  }, [price]);
  return (
    <>
      <section id="route" className="mt-12">
        <>
          <div id="item-route" key={operator} className="rounded-xl">
            <div className="grid md:grid-rows-1 md:grid-cols-2 grid-rows-2 border border-grey-400 rounded-xl md:p-4 p-1 bg-gray-100 divide-dashed md:divide-x-2 md:divide-y-0 divide-y-2 divide-gray-300 relative">
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
                className="row-span-1 col-span-1 md:text-left w-full md:pl-6 text-center md:p-0 p-1"
              >
                <div
                  id="operator"
                  className="font-bold md:text-2xl text-lg text-gray-600"
                >
                  {operator}
                </div>
                <div>
                  <span className="text-gray-600 font-normal md:text-xl text-md">
                    {busClass}
                  </span>
                </div>
                <div
                  id="bus-price"
                  className="font-bold md:text-xl text-md text-gray-500 md:mt-6"
                >
                  Rp {formatedPrice} <PlusMins />
                </div>

                <div
                  id="bus-route"
                  className="font-bold md:text-lg text-md text-gray-500"
                >
                  <span className="text-red-500">{origin}</span> <RightArrow />{" "}
                  <span className="text-emerald-500">{destination}</span>
                </div>
                <div
                  id="cipped"
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-white"
                ></div>
                <div
                  id="bus-schedule"
                  className="absolute md:-right-4 md:bottom-1/2 -right-4 bottom-1/2 transform translate-y-1/2 bg-orange-600 rounded-full p-1"
                >
                  <div onClick={toogleSchedule} className="cursor-pointer">
                    <Calendar />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {openSchedule && (
            <section
              id="schedule-dropdown"
              className="border-2 w-[calc(100%-2rem)] mx-auto -mt-1 shadow-xl"
            >
              <table className="w-full mx-auto border-none">
                <tbody>
                  {schedule.map((item: ScheduleData) => (
                    <tr
                      key={item.busStop + item.time}
                      className="odd:bg-gray-100 even:bg-gray-200 md:text-lg text-sm font-bold text-gray-600 last:rounded-b-lg"
                    >
                      <td className="p-4 w-1/2 text-right">{item.busStop}</td>
                      <td className="p-4 w-1/2 text-left">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          )}
        </>
      </section>
    </>
  );
};
