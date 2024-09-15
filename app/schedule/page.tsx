"use client";
import { ListRoute } from "../components/ListRoute";
import { useContext } from "react";
import { BusRouteContext } from "../lib/Context";
import { useState, useEffect } from "react";
import { findBusRoute } from "../lib/data";
import { BackButton } from "../components/BackButton";
import { Filter } from "../components/schedule/Filter";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Barier, Home } from "../components/Icons";
import { HomeButton } from "../components/HomeButton";

const style = {
  backgroundColor: "#ffffff",
  backgroundImage: `url("./bg-city.jpg")`,
};

export default function Page() {
  const [state, dispatch] = useContext(BusRouteContext);
  const [data, setData] = useState<any>([]);
  const [query, setQuery] = useState<any>({});
  const [reFetch, setReFetch] = useState(false);

  const searchParams = useSearchParams();
  const router = useRouter();

  const reSearch = () => {
    // submit manually using state
    const params = new URLSearchParams(searchParams);
    if (state.origin) {
      params.set("origin", state.origin);
    } else {
      params.delete("origin");
    }
    if (state.destination) {
      params.set("destination", state.destination);
    } else {
      params.delete("destination");
    }
    if (state.operator) {
      params.set("operator", state.operator);
    } else {
      params.delete("operator");
    }
    router.push("/schedule?" + params.toString());
    router.refresh();
    findBusRoute(state.origin, state.destination, state.operator).then(
      (res) => {
        setData(res);
      }
    );
  };

  useEffect(() => {
    // get parameter from query
    const origin = searchParams.get("origin");
    const destination = searchParams.get("destination");
    const operator = searchParams.get("operator");

    if (origin) dispatch({ type: "setOrigin", payload: origin });
    if (destination) dispatch({ type: "setDestination", payload: destination });
    if (operator) dispatch({ type: "setOperator", payload: operator });

    console.log("DEBUG: ", origin, destination, operator);
    findBusRoute(origin, destination, operator).then((res) => {
      setData(res);
    });
  }, []);
  console.log("MAIN DATA, ", data);
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
          <h1 className="text-4xl font-extrabold text-left p-4 text-gray-600">
            Jadwal Bus
          </h1>
          <HomeButton />
        </div>
        <Filter onClick={reSearch} />
        {data ? (
          data.length > 0 ? (
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
            <div className="w-full text-center mt-12">
              <Barier />
              <p className="text-3xl font-bold text-gray-600">
                Tidak ada jadwal bus
              </p>
            </div>
          )
        ) : (
          <div className="w-full text-center mt-12">
            <Barier />
            <p className="text-3xl font-bold text-gray-600">
              Tidak ada jadwal bus
            </p>
          </div>
        )}
      </div>
    </>
  );
}
