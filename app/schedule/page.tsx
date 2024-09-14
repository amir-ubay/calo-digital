"use client";
import { ListRoute } from "../components/ListRoute";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { findBusRoute } from "../lib/data";
import { TitlePage } from "../components/TitlePage";
import { BackButton } from "../components/BackButton";

export default function Page() {
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const destination = searchParams.get("destination");

  const [title, setTitle] = useState({});

  const [data, setData] = useState<any>([]);
  useEffect(() => {
    findBusRoute(origin, destination).then((res) => {
      setData(res);
      setTitle({ origin, destination });
      console.log(res);
    });
  }, []);

  return (
    <>
      <BackButton />
      <TitlePage title={origin + " > " + destination} />
      <div
        id="root-container"
        className="sm:container sm:mx-auto border-2 border-red-600 min-h-screen p-8"
      >
        {data.length > 0 ? (
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
