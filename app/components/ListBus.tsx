import React, { useEffect } from "react";
import Image from "next/image";
import { useContext } from "react";
import { BusRouteContext } from "../lib/Context";
import { useRouter } from "next/navigation";
import { Badge1, Badge2, Badge3, Badge4, Badge5, Badge6 } from "./Badges";
import { Calendar } from "./Icons";

export const ListBus = ({ data }: any) => {
  const router = useRouter();
  const [state, dispatch] = useContext(BusRouteContext);

  const onClick = (operator: any) => {
    dispatch({ type: "setOperator", payload: operator });
    router.push("/schedule");
  };
  return (
    <>
      {data.map((item: any) => {
        return (
          <div id="item-route" key={item._id} className="mb-4">
            <div className="grid grid-rows-1 grid-cols-2 border border-grey-400 rounded-xl p-4 bg-gray-100 divide-x-2 divide-dashed divide-gray-300 relative">
              <div
                id="bus-name"
                className="row-span-1 col-span-1 justify-self-center content-center"
              >
                <div id="bus-logo">
                  {item.logo && (
                    <Image
                      src={item.logo}
                      width={250}
                      height={100}
                      alt={item.operator}
                    />
                  )}
                </div>
                <div
                  id="cipped"
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-white"
                ></div>
              </div>
              <div
                id="bus-class"
                className="row-span-1 col-span-1 justify-self-center text-left w-full pl-8 "
              >
                <div id="bus-class-item">
                  {item.busClass?.map(
                    (n: any, index: number, arr: Array<any>) => {
                      return (
                        <div className=" mr-2 mb-2">
                          {index === 0 && <Badge1 key={index + n} label={n} />}
                          {index === 1 && <Badge2 key={index + n} label={n} />}
                          {index === 2 && <Badge3 key={index + n} label={n} />}
                          {index === 3 && <Badge4 key={index + n} label={n} />}
                          {index === 4 && <Badge5 key={index + n} label={n} />}
                          {index === 5 && <Badge6 key={index + n} label={n} />}
                        </div>
                      );
                    }
                  )}
                </div>
                <div
                  id="cipped"
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-7 h-7 rounded-full bg-white"
                ></div>
                <div
                  id="bus-schedule"
                  className="absolute right-4 bottom-2 bg-orange-600 rounded-full p-1"
                >
                  <div
                    onClick={() => onClick(item.operator)}
                    className="cursor-pointer"
                  >
                    <Calendar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
